// 뉴스 전용 규칙은 NEWS.md를 따릅니다. 최신 항목이 위에 오도록 발행일순 렌더링됩니다.
let designNews = [
  {
    title: "코드 기반 화면을 Figma 변수와 Auto Layout으로 가져오기", category: "피그마 뉴스", source: "Figma Release Notes", publishedAt: "2026-07-16", collectedAt: "2026-07-18",
    url: "https://www.figma.com/release-notes/", thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/ae0303b2ad7753600fee94eb32a43e026cc220ae-3264x1836.png?w=1200&q=70&fit=max&auto=format",
    summary: "Make 미리보기, MCP 서버, Chrome 확장으로 가져온 코드 기반 화면이 파일의 색상·타입·간격 변수에 연결되고 더 많은 프레임에 Auto Layout이 적용됩니다.", impact: "기존 웹 화면을 편집 가능한 디자인 레이어로 되돌릴 때 하드코딩된 스타일을 정리하는 비용이 줄어 디자인 시스템과 코드의 왕복 흐름이 짧아집니다.", tags: ["#Figma", "#디자인투코드", "#변수", "#AutoLayout"]
  },
  {
    title: "Find User Insights — 콘텐츠를 줄여 전환을 높인 AI 서비스 홈", category: "UI·UX 뉴스", source: "DfE Design Histories", publishedAt: "2026-07-10", collectedAt: "2026-07-17",
    url: "https://design-histories.education.gov.uk/find-user-insights/redesigning-the-homepage-less-content-more-confidence", thumbnail: "https://cloud-cube-eu2.s3.amazonaws.com/pkwmignaq6f6/public/Find_user_insights_revised_homepage_4aecc5dfa4.png",
    summary: "비필수 설명을 옮기고 시작 CTA, 사용 예, AI 투명성 정보를 재배치해 홈에서 서비스로의 진입률을 55%에서 70%로 높였습니다.", impact: "전후 화면과 실제 지표가 함께 있어 AI 제품의 설명량과 신뢰 정보를 조정하는 근거로 활용할 수 있습니다.", tags: ["#콘텐츠디자인", "#AI서비스", "#전환율"]
  },
  {
    title: "Figma Agent Skills — 팀의 디자인 판단을 재사용하는 방식", category: "피그마 뉴스", source: "Figma", publishedAt: "2026-07-01", collectedAt: "2026-07-17",
    url: "https://www.figma.com/blog/got-skills-make-the-figma-agent-a-better-collaborator/", thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/2dcb38fa0a3fd5b22b72b531ebe5de2b109614fd-3264x1836.png?q=75&fit=crop&crop=focalpoint&auto=format",
    summary: "디자인 비평, UX 라이팅, 접근성 검사처럼 반복되는 팀의 판단 기준을 에이전트 스킬로 저장하고 다시 실행하는 흐름을 공개했습니다.", impact: "AI 결과물보다 팀의 판단 기준을 재사용 가능한 디자인 운영 자산으로 만드는 변화에 주목할 만합니다.", tags: ["#FigmaAgent", "#AI디자인", "#디자인운영"]
  },
  {
    title: "Nord 5 — 18개 컴포넌트와 문서 작업 공간 개편", category: "UI·UX 뉴스", source: "Nord Health", publishedAt: "2026-07-01", collectedAt: "2026-07-17",
    url: "https://nordhealth.design/updates/july-2026-component-updates", thumbnail: "https://nordhealth.design/_og/s/o_9yjk0w.png",
    summary: "검색, 명암 모드, 실시간 예제, 접근성, API 문서를 한 셸에 묶고 신규 컴포넌트와 블록·템플릿 구조를 공개했습니다.", impact: "디자인 시스템 문서를 설명서가 아니라 탐색부터 구현까지 이어지는 작업 공간으로 설계한 사례입니다.", tags: ["#디자인시스템", "#컴포넌트", "#접근성"]
  },
  {
    title: "Config 2026 — 코드·모션·셰이더가 한 캔버스로", category: "피그마 뉴스", source: "Figma", publishedAt: "2026-06-24", collectedAt: "2026-07-17",
    url: "https://www.figma.com/blog/config-2026-recap/", thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/ae0303b2ad7753600fee94eb32a43e026cc220ae-3264x1836.png?w=1200&q=70&fit=max&auto=format",
    summary: "Figma가 코드 레이어, Motion 타임라인, 셰이더 효과, 생성형 플러그인과 Weave 도구를 같은 캔버스에 연결했습니다.", impact: "정적 UI 편집기를 넘어 코드·모션·생성형 제작이 공존하는 크리에이티브 작업 공간으로 제품 범위가 확장됐습니다.", tags: ["#Config2026", "#FigmaMotion", "#코드레이어"]
  },
  {
    title: "Firefly AI Assistant — 브랜드 키트부터 영상 편집까지", category: "AI 디자인 뉴스", source: "Adobe", publishedAt: "2026-06-18", collectedAt: "2026-07-17",
    url: "https://blog.adobe.com/en/publish/2026/06/18/adobe-firefly-introduces-new-agentic-capabilities-and-an-upgraded-creative-ai-studio-built-for-the-way-you-work", thumbnail: "https://helpx-prod.scene7.com/is/image/HelpxProd/edit-an-image-using-text-53-firefly?$pjpeg$&jpegSize=200&wid=1300",
    summary: "Firefly AI Assistant가 브랜드 키트 생성, 제품 영상, 스토리보드 기반 영상 생성, Quick Cut과 자연어 에셋 검색을 추가했습니다.", impact: "단일 이미지 생성보다 브랜드 자산과 여러 포맷을 연결하는 에이전트형 제작 흐름이 중심으로 이동하고 있습니다.", tags: ["#AdobeFirefly", "#에이전트", "#브랜드키트"]
  },
  {
    title: "The Elements of Brand Design — 브랜드 시스템의 공통 문법", category: "디자인 일반", source: "It’s Nice That", publishedAt: "2026-06-17", collectedAt: "2026-07-17",
    url: "https://www.itsnicethat.com/features/katharina-sussek-jens-muller-the-elements-of-brand-design-taschen-publication-graphic-design-spotlight-170626", thumbnail: "https://admin.itsnicethat.com/images/Y_eHSwO3tIYOXVc0xVj1wFgeqiU=/278743/width-1440/taschen-graphic-design-itsnicethat-12.jpg",
    summary: "수백 개 브랜드 사례를 형태, 색, 타이포그래피와 응용 방식의 공통 요소로 분해한 새 브랜드 디자인 출판 프로젝트입니다.", impact: "완성된 아이덴티티를 감상하는 데서 벗어나 브랜드 시스템을 재조합 가능한 시각 문법으로 읽게 합니다.", tags: ["#브랜드디자인", "#타이포그래피", "#디자인출판"]
  },
  {
    title: "Adobe Firefly의 GPT Image 편집 워크플로 업데이트", category: "AI 디자인 뉴스", source: "Adobe", publishedAt: "2026-06-16", collectedAt: "2026-07-17",
    url: "https://helpx.adobe.com/firefly/web/work-with-images/generate-images/generate-images-using-gpt-image.html", thumbnail: "https://helpx-prod.scene7.com/is/image/HelpxProd/generate-images-from-text-14?$pjpeg$&jpegSize=200&wid=1200",
    summary: "Firefly에서 GPT Image를 선택하고 피사체 참조를 유지한 채 자연어로 요소를 추가하는 생성·편집 흐름이 공개됐습니다.", impact: "모델 선택과 참조 이미지가 한 작업 흐름에 들어오면서 디자이너의 역할이 생성보다 피사체 일관성과 편집 방향 통제로 이동합니다.", tags: ["#GPTImage", "#AdobeFirefly", "#이미지편집"]
  }
];
