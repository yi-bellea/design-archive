const state = { filter: "전체", query: "" };
const archive = document.querySelector("#archive");
const filters = document.querySelector("#filters");
const count = document.querySelector("#count");
const template = document.querySelector("#card-template");
const search = document.querySelector("#archive-search");
const searchShell = document.querySelector(".search-shell");
const clearSearch = document.querySelector("#search-clear");
const emptyState = document.querySelector("#empty-state");
const thumbnails = {
  "https://higgsfield.ai/plugins/figma": { image: "https://static.higgsfield.ai/adobe/og.png", position: "center", size: "cover" },
  "https://helpx.adobe.com/firefly/web/app-integrations/figma/firefly-plugin-for-figma.html": { image: "assets/thumbnails/prompt-sheet.png", position: "0% 0%", size: "300% 200%" },
  "https://openai.com/academy/image-generation/": { image: "assets/thumbnails/prompt-sheet.png", position: "50% 0%", size: "300% 200%" },
  "https://help.runwayml.com/hc/en-us/articles/39789879462419-Gen-4-Video-Prompting-Guide": { image: "assets/thumbnails/prompt-sheet.png", position: "0% 100%", size: "300% 200%" },
  "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/video/video-gen-prompt-guide?authuser=00": { image: "assets/thumbnails/prompt-sheet.png", position: "50% 100%", size: "300% 200%" },
  "https://www.figma.com/blog/config-2026-recap/": { image: "https://cdn.sanity.io/images/599r6htc/regionalized/ae0303b2ad7753600fee94eb32a43e026cc220ae-3264x1836.png?w=1200&q=70&fit=max&auto=format", position: "center", size: "cover" },
  "https://www.figma.com/blog/future-states/": { image: "https://cdn.sanity.io/images/599r6htc/regionalized/88a924d835a9a45c6a4dc0196b09b98a585cac0b-4000x2281.jpg?w=1200&q=70&fit=max&auto=format", position: "center", size: "cover" },
  "https://www.figma.com/blog/4-new-ways-to-go-from-idea-to-product-with-ai-tools/": { image: "https://cdn.sanity.io/images/599r6htc/regionalized/b3ceaf989a29668277a27dcd295e695ed82c7de8-3264x1836.png?w=1200&q=70&fit=max&auto=format", position: "center", size: "cover" },
  "https://www.figma.com/resource-library/web-design-trends/": { image: "https://cdn.sanity.io/images/599r6htc/regionalized/9dce4c76f0f9c93e0ca8a3c46aaab09b115f7ab7-1440x720.png?w=1200&q=70&fit=max&auto=format", position: "center", size: "cover" },
  "https://www.behance.net/gallery/238193083/2026-Graphic-Design-Trends?locale=en_US": { image: "assets/thumbnails/reference-sheet.png", position: "50% 100%", size: "300% 200%" },
  "https://www.itsnicethat.com/features/katharina-sussek-jens-muller-the-elements-of-brand-design-taschen-publication-graphic-design-spotlight-170626": { image: "https://admin.itsnicethat.com/images/Y_eHSwO3tIYOXVc0xVj1wFgeqiU=/278743/width-1440/taschen-graphic-design-itsnicethat-12.jpg", position: "center", size: "cover" }
};
const thumbnailByTitle = {
  "반투명 오브젝트의 제품 스틸라이프": { image: "assets/thumbnails/prompt-sheet.png", position: "100% 0%", size: "300% 200%" }
};
const categories = ["전체", ...new Set(references.map((item) => item.category))];
const normalize = (value) => String(value || "").toLocaleLowerCase("ko-KR").normalize("NFKC");
const searchableText = (item) => normalize([
  item.title, item.category, item.summary, item.note, item.prompt, ...(item.tags || [])
].join(" "));
const searchIndex = new Map(references.map((item) => [item, searchableText(item)]));
const getPrompt = (item) => item.prompt || item.review?.metadata?.type_block?.prompt || "";

async function copyText(value) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const area = document.createElement("textarea");
  area.value = value;
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.append(area);
  area.select();
  const copied = document.execCommand("copy");
  area.remove();
  if (!copied) throw new Error("copy failed");
}

function getVisibleItems() {
  const terms = normalize(state.query).split(/\s+/).filter(Boolean);
  return references.filter((item) => {
    const matchesCategory = state.filter === "전체" || item.category === state.filter;
    const haystack = searchIndex.get(item);
    return matchesCategory && terms.every((term) => haystack.includes(term));
  });
}

function render() {
  const items = getVisibleItems();
  archive.replaceChildren();
  items.forEach((item, index) => {
    const node = template.content.cloneNode(true);
    const link = node.querySelector(".thumbnail-link");
    const visual = node.querySelector(".visual");
    node.querySelector(".reference-card").style.setProperty("--card-order", index);
    link.href = item.url;
    visual.style.setProperty("--card-bg", item.visual.background);
    visual.style.setProperty("--card-accent", item.visual.accent);
    visual.style.setProperty("--card-ink", item.visual.ink);
    visual.style.setProperty("--radius-one", item.visual.radiusOne);
    visual.style.setProperty("--radius-two", item.visual.radiusTwo);
    visual.style.setProperty("--rotate", item.visual.rotate);
    const thumbnail = item.thumbnail ? { image: item.thumbnail, position: "center", size: "cover" } : thumbnailByTitle[item.title] || thumbnails[item.url];
    if (thumbnail) {
      visual.style.backgroundImage = `url("${thumbnail.image}")`;
      visual.style.backgroundPosition = thumbnail.position;
      visual.style.backgroundSize = thumbnail.size;
      visual.classList.add("has-thumbnail");
    }
    node.querySelector(".visual-index").textContent = String(index + 1).padStart(2, "0");
    node.querySelector(".thumbnail-category").textContent = item.category;
    node.querySelector(".visual-label").textContent = item.visual.label;
    node.querySelector(".category").textContent = item.category;
    node.querySelector(".date").textContent = item.date;
    node.querySelector("h2").textContent = item.title;
    node.querySelector(".summary").textContent = item.summary;
    node.querySelector(".designer-note").textContent = item.note;
    const promptBlock = node.querySelector(".prompt-block");
    const prompt = node.querySelector(".prompt");
    const promptValue = getPrompt(item);
    if (promptValue) {
      prompt.textContent = "PROMPT — " + promptValue;
      const copyButton = node.querySelector(".copy-prompt");
      copyButton.addEventListener("click", async () => {
        try {
          await copyText(promptValue);
          copyButton.textContent = "복사됨";
        } catch {
          copyButton.textContent = "복사 실패";
        }
        window.setTimeout(() => { copyButton.textContent = "프롬프트 복사"; }, 1600);
      });
    } else {
      promptBlock.remove();
    }
    item.tags.forEach((tag) => { const li = document.createElement("li"); li.textContent = tag; node.querySelector(".tags").append(li); });
    archive.append(node);
  });
  archive.hidden = items.length === 0;
  emptyState.hidden = items.length !== 0;
  count.textContent = `${items.length} / ${references.length} REFERENCES`;
}
categories.forEach((category) => {
  const button = document.createElement("button");
  button.className = "filter"; button.type = "button"; button.textContent = category;
  button.setAttribute("aria-pressed", String(category === state.filter));
  button.addEventListener("click", () => { state.filter = category; [...filters.children].forEach((child) => child.setAttribute("aria-pressed", String(child.textContent === category))); render(); });
  filters.append(button);
});
function updateQuery(value) {
  state.query = value.trim();
  searchShell.classList.toggle("has-value", Boolean(value));
  render();
}
search.addEventListener("input", (event) => updateQuery(event.target.value));
clearSearch.addEventListener("click", () => { search.value = ""; updateQuery(""); search.focus(); });
document.querySelector("#reset-search").addEventListener("click", () => {
  state.filter = "전체";
  search.value = "";
  updateQuery("");
  [...filters.children].forEach((child) => child.setAttribute("aria-pressed", String(child.textContent === "전체")));
  search.focus();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey && document.activeElement !== search) {
    event.preventDefault(); search.focus();
  }
  if (event.key === "Escape" && document.activeElement === search && search.value) {
    search.value = ""; updateQuery("");
  }
});
document.querySelector("#today").textContent = new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium" }).format(new Date());
render();
