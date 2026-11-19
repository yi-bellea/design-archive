// 뉴스 전용 규칙은 NEWS.md를 따릅니다. 최신 항목이 위에 오도록 발행일순 렌더링됩니다.
let designNews = [
  {
    kind: "새 기능", title: "Figma AI 이미지 다중 생성 — 한 프롬프트로 모델·결과를 나란히 비교", category: "피그마 뉴스", source: "Figma", publishedAt: "2026-11-18", collectedAt: "2026-11-19",
    url: "https://help.figma.com/hc/en-us/articles/24004542669463-Generate-and-edit-images-with-Figma-AI", thumbnail: "https://help.figma.com/hc/article_attachments/36912269499671",
    summary: "Figma가 Make image와 Edit image에서 하나의 모델로 2·4·6개 이미지를 동시 생성하거나, 최대 세 개 모델에 같은 프롬프트를 보내 각 모델의 결과를 한 번에 비교하는 기능을 추가했습니다.", impact: "아트 디렉션 탐색에서 프롬프트를 반복해 바꾸기보다 같은 조건의 다중 안과 모델별 해석을 동일 캔버스에서 비교할 수 있어, 브랜드 비주얼의 선택 근거와 탐색 속도를 함께 개선할 수 있습니다.", tags: ["#FigmaAI", "#이미지생성", "#모델비교", "#아트디렉션"]
  },
  {
    kind: "새 기능", title: "Figma OAuth·MCP 허용 목록 — 에이전트 접속을 조직 단위로 승인", category: "피그마 뉴스", source: "Figma", publishedAt: "2026-11-17", collectedAt: "2026-11-19",
    url: "https://help.figma.com/hc/en-us/articles/44716871463319-Manage-OAuth-apps-and-MCP-clients-for-your-organization", thumbnail: "https://help.figma.com/hc/article_attachments/44800167121943",
    summary: "Figma가 Organization·Enterprise 관리자가 Cursor와 Claude Code 같은 MCP 클라이언트를 포함한 OAuth 앱의 접속을 허용 목록으로 관리하고, 요청한 권한 범위를 검토·승인·철회하는 Extensions 관리 흐름을 추가했습니다.", impact: "디자인 파일과 컴포넌트를 읽는 AI 에이전트를 팀에 도입할 때 도구별 허용 여부와 읽기·쓰기 권한을 조직 정책으로 통제할 수 있어, 디자인 시스템 자산의 보안과 AI 작업 거버넌스를 구체적으로 설계할 수 있습니다.", tags: ["#FigmaMCP", "#OAuth", "#AI거버넌스", "#디자인시스템"]
  },
  {
    kind: "새 기능", title: "Claude Code Frontend Design — 전형적인 AI UI를 피하는 공식 디자인 스킬", category: "AI 디자인 뉴스", source: "Anthropic GitHub", publishedAt: "2026-10-26", collectedAt: "2026-11-19",
    url: "https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/README.md", thumbnail: "https://opengraph.githubassets.com/1/anthropics/claude-code",
    summary: "Anthropic의 Claude Code 공식 frontend-design 플러그인은 제작 물성과 사용자를 먼저 정의한 뒤 의도적인 타이포그래피·팔레트·레이아웃·모션을 선택하고, 반응형·키보드 포커스·reduced motion과 스크린샷 자가 비평까지 수행하도록 안내합니다.", impact: "랜딩 페이지는 주제의 세계관과 히어로를, 제품 UI는 상태·빈 화면·오류 카피를 포함해 요청하고 결과 스크린샷을 다시 비평하게 하면, 생성 코드의 시각적 평준화를 줄이고 접근성·콘텐츠 완성도를 함께 검수할 수 있습니다.", tags: ["#ClaudeCode", "#FrontendDesign", "#AgentSkill", "#UI자가비평"]
  },
  {
    kind: "제품 소식", title: "Anthropic Design Plugin — 비평·디자인 시스템·UX 카피를 묶은 오픈소스", category: "AI 디자인 뉴스", source: "Anthropic GitHub", publishedAt: "2026-09-21", collectedAt: "2026-11-19",
    url: "https://github.com/anthropics/knowledge-work-plugins/blob/main/design/README.md", thumbnail: "https://opengraph.githubassets.com/1/anthropics/knowledge-work-plugins",
    summary: "Anthropic의 Apache-2.0 knowledge-work-plugins 저장소가 디자인 비평, 디자인 시스템 감사, UX 카피, 개발 핸드오프, WCAG 2.1 AA 접근성 검사, 사용자 리서치 합성을 하나의 design 플러그인 워크플로로 공개했습니다.", impact: "Figma 링크나 스크린샷을 `/critique`로 비평한 뒤 `/design-system audit`, `/ux-copy`, `/handoff`, `/accessibility`를 같은 자료에 연속 적용하면, 화면 품질·토큰·상태·카피·개발 사양을 하나의 검수 루프로 관리할 수 있습니다.", tags: ["#ClaudeDesign", "#디자인비평", "#UXWriting", "#오픈소스"]
  },
  {
    kind: "제품 소식", title: "Anthropic Agent Skills 저장소 — 디자인·문서·MCP 스킬의 공식 오픈소스 카탈로그", category: "AI 디자인 뉴스", source: "Anthropic GitHub", publishedAt: "2026-09-03", collectedAt: "2026-11-19",
    url: "https://github.com/anthropics/skills", thumbnail: "https://opengraph.githubassets.com/1/anthropics/skills",
    summary: "Anthropic이 Apache-2.0 Agent Skills 저장소에 frontend-design, canvas-design, brand-guidelines, theme-factory, skill-creator, MCP builder, 웹앱 테스팅과 PDF·Word·PowerPoint·Excel 스킬, SKILL.md 템플릿과 표준 사양을 공개했습니다.", impact: "팀의 반복 업무를 바로 새로 쓰기보다 유사한 공식 스킬의 SKILL.md·scripts·references 구조를 복제해 브랜드 규칙과 검수 절차만 바꾸면, Claude Code·Claude.ai·API에서 같은 제작 방식을 버전 관리하기 쉽습니다.", tags: ["#AgentSkills", "#SKILLmd", "#디자인자동화", "#Apache2"]
  },
  {
    kind: "리서치·업계 동향", title: "Agent Skills의 AAIF 기부 — Claude에서 시작한 스킬을 벤더 중립 표준으로", category: "AI 디자인 뉴스", source: "Anthropic", publishedAt: "2026-10-22", collectedAt: "2026-11-19",
    url: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation", thumbnail: "https://assets.claude.com/6d4a0d28992ade92d6fa63646fd9c9d318245c6c.jpg",
    summary: "Anthropic이 SKILL.md와 스크립트·참고 자료로 에이전트의 절차 지식을 패키징하는 Agent Skills 표준을 Linux Foundation 산하 Agentic AI Foundation에 기부했으며, 버전 릴리스·제안 절차·보안 지침을 다음 로드맵으로 제시했습니다.", impact: "디자인 비평·브랜드 가이드·핸드오프 절차를 특정 AI 제품의 프롬프트로만 보관하지 않고 독립된 스킬 패키지로 관리하면, Claude·Codex·Cursor 등 서로 다른 에이전트에서 팀의 제작 기준을 재사용할 수 있습니다.", tags: ["#AgentSkills", "#AAIF", "#오픈표준", "#에이전트상호운용"]
  },
  {
    kind: "실무 사례", title: "1Password — 20년치 디자인 규칙을 코드 프로토타입의 AI 가드레일로", category: "피그마 뉴스", source: "Figma", publishedAt: "2026-11-16", collectedAt: "2026-11-18",
    url: "https://www.figma.com/blog/1password-figma-make/", thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/6b15ec50dc702fef03a4af49a333d03abd8c70f5-464x476.png?auto=format&fit=max&h=476&q=75&w=464",
    summary: "1Password가 콘텐츠 원칙·컴포넌트·타이포 근거를 코드 템플릿과 Code Connect에 연결한 내부 프로토타입 플레이그라운드를 구축했습니다. Figma Make가 30개 수정 중 약 80%를 처리했고, 디자이너 100%와 엔지니어·PM이 실제 코드형 프로토타입에 합류했습니다.", impact: "AI 프로토타이핑의 품질을 프롬프트 숙련도가 아니라 제품별 실제 데이터·디자인 시스템 변수·인증 UX 원칙·사람 검수로 제어하는 구조라, 보안 제품의 고충실도 사용자 테스트와 팀 핸드오프에 적용할 수 있습니다.", tags: ["#1Password", "#FigmaMake", "#CodeConnect", "#디자인시스템"]
  },
  {
    kind: "새 기능", title: "Figma 3D Transform — 편집 가능한 레이어를 3축·깊이·원근으로 직접 조정", category: "피그마 뉴스", source: "Figma", publishedAt: "2026-11-12", collectedAt: "2026-11-18",
    url: "https://help.figma.com/hc/en-us/articles/44568893374999-Create-3D-effects-in-Figma-Design", thumbnail: "https://help.figma.com/hc/article_attachments/44957118157591",
    summary: "Figma가 벡터·이미지·프레임·컴포넌트·텍스트를 X·Y·Z축으로 회전하고 깊이와 원근을 조절하는 3D Transform을 전 플랜에 추가했습니다. 원본 레이어와 텍스트는 편집 가능한 상태로 유지되며 Motion·CSS·MCP 전달에 연결됩니다.", impact: "목업과 카드 플립, 공간형 UI를 별도 3D 도구에서 평면화하지 않고 디자인 시스템 컴포넌트로 유지할 수 있어, 시각 탐색과 실제 CSS 구현 사이의 속성 손실을 줄일 수 있습니다.", tags: ["#Figma", "#3DTransform", "#원근", "#디자인투코드"]
  },
  {
    kind: "새 기능", title: "Photoshop 28.0 — 조명을 다시 설계하고 생성 편집 강도를 슬라이더로", category: "AI 디자인 뉴스", source: "Adobe", publishedAt: "2026-11-10", collectedAt: "2026-11-17",
    url: "https://helpx.adobe.com/photoshop/desktop/whats-new/whats-new-in-adobe-photoshop-on-desktop.html", thumbnail: "https://helpx-prod.scene7.com/is/image/HelpxProdLoc/whats-new-relight-ps-desktop?$png$&jpegSize=200&wid=1200",
    summary: "Photoshop 28.0이 최대 세 개의 광원을 비파괴 레이어로 추가·조절하는 Relight, 생성 결과의 효과 강도를 슬라이더로 다듬는 Generative Restyle, 전후 비교와 주변 흔적까지 지우는 Remove 도구를 공개했습니다.", impact: "제품 사진과 캠페인 비주얼에서 재촬영이나 전체 재생성 대신 빛·스타일 강도·반사와 그림자를 레이어 단위로 수정할 수 있어 아트디렉션 피드백을 더 작고 되돌릴 수 있는 편집 단위로 운영할 수 있습니다.", tags: ["#Photoshop", "#Relight", "#생성편집", "#비파괴워크플로"]
  },
  {
    kind: "새 기능", title: "InDesign 22.0 — AI Assistant·문서 검사·반응형 레이아웃을 편집 화면에", category: "AI 디자인 뉴스", source: "Adobe", publishedAt: "2026-11-10", collectedAt: "2026-11-17",
    url: "https://helpx.adobe.com/indesign/desktop/whats-new/whats-new.html", thumbnail: "https://helpx-prod.scene7.com/is/image/HelpxProdLoc/whats-new-id-max-miami-ai-assistant?$pjpeg$&jpegSize=200&wid=1200",
    summary: "InDesign 22.0이 자연어로 레이아웃·오브젝트를 수정하는 AI Assistant 베타, 문법·용어·대체 텍스트·표 요약을 한 패널에서 점검하는 Check Document, 콘텐츠 변화에 맞춰 프레임을 재배치하는 Flex Layout을 추가했습니다.", impact: "편집 디자이너가 카피 일관성·접근성·다중 포맷 리사이징을 내보내기 직전에 수동 점검하지 않고 문서 구조 안에서 함께 검토하므로 출판 디자인 시스템의 품질 기준을 작업 중에 적용할 수 있습니다.", tags: ["#InDesign", "#AIAssistant", "#접근성", "#FlexLayout"]
  },
  {
    kind: "제품 소식", title: "Adobe Firefly 확장 — Design·Graph 베타와 Builder 프리뷰 공개", category: "AI 디자인 뉴스", source: "Adobe", publishedAt: "2026-11-10", collectedAt: "2026-11-17",
    url: "https://news.adobe.com/news/2026/11/adobe-firefly-expands", thumbnail: "https://news.adobe.com/news/2026/11/media_1be983d78cf64b14905c05379432c9a51f63f93b1.jpg?width=1200&format=pjpg&optimize=medium",
    summary: "Adobe가 벡터·래스터·모션·3D·인쇄를 한 파일에서 다루는 Firefly Design과 노드 기반 반복 제작 흐름을 만드는 Firefly Graph를 베타로 공개하고, 디자인 시스템을 유지하며 웹·앱 프로토타입을 만드는 Builder를 비공개 베타로 예고했습니다.", impact: "단일 이미지 생성에서 벗어나 브랜드 자산, 여러 매체, 반복 가능한 생성 단계와 클라이언트 검토를 하나의 제작 시스템으로 묶을 수 있어 캠페인 확장성과 AI 워크플로 거버넌스를 함께 판단해야 합니다.", tags: ["#AdobeFirefly", "#FireflyDesign", "#FireflyGraph", "#프로토타이핑"]
  },
  {
    kind: "실무 사례", title: "Adobe Made to Create — 18개국 30여 명의 작업을 한 달 안에 조율한 제작 루프", category: "AI 디자인 뉴스", source: "Adobe", publishedAt: "2026-11-10", collectedAt: "2026-11-17",
    url: "https://blog.adobe.com/en/publish/2026/11/10/behind-the-scenes-of-adobe-made-to-create-film", thumbnail: "https://blog.adobe.com/en/publish/2026/11/10/media_1a912174d7a3061915a24df8d4b23eb23ca431eea.png?width=1200&format=pjpg&optimize=medium",
    summary: "Adobe와 72andSunny가 18개국 30여 명의 아티스트가 참여한 글로벌 브랜드 필름을 Firefly의 아이데이션·스토리보드, Frame.io의 버전 리뷰, Acrobat AI Assistant의 브리프 합성, Workfront의 자원 계획으로 한 달 안에 제작한 과정을 공개했습니다.", impact: "생성 AI를 최종 비주얼 대체가 아니라 브리프 정리·방향 탐색·정지 이미지의 모션화에 배치하고 중앙 자산·버전·승인 흐름과 결합한 사례라 대규모 브랜드 콘텐츠 제작의 역할 분담과 검수 체계를 설계할 때 참고할 수 있습니다.", tags: ["#브랜드캠페인", "#Firefly", "#FrameIO", "#콘텐츠워크플로"]
  },
  {
    kind: "실무 사례", title: "Amplitude Wave — 세션 리플레이에서 UI 개선·A/B 테스트까지 1~2일", category: "UI·UX 뉴스", source: "OpenAI", publishedAt: "2026-11-12", collectedAt: "2026-11-17",
    url: "https://openai.com/business/customer-stories/amplitude/", thumbnail: "https://images.ctfassets.net/kftzwdyauwt9/2BBTZsqFM3kvrX5Aq081SW/4636fa59c50e62172558d21effcaeca4/amplitude-wave-art-card.png?w=3840&q=90&fm=webp",
    summary: "Amplitude의 제품 에이전트 Wave가 세션 리플레이 100건과 분석·피드백·코드를 조사해 홈페이지 추천 카드 개인화를 제안하고 목업·기술 계획·인수 기준을 만든 뒤 A/B 테스트에서 카드 기반 메시지 전송을 160% 높였습니다.", impact: "UX 리서치의 관찰 근거를 UI 제안, 와이어프레임 평가, 구현 기준, 실험 결과로 연결하면서도 새 기능은 사람이 검토하는 구조를 보여줘 AI가 제안한 제품 개선의 증거 수준과 승인 경계를 설계하는 기준이 됩니다.", tags: ["#Amplitude", "#제품분석", "#UX리서치", "#AB테스트"]
  },
  {
    kind: "리서치·업계 동향", title: "Adobe MAX Sneaks 2026 — 생성 결과보다 직접 조작 가능한 AI 편집 연구", category: "AI 디자인 뉴스", source: "Adobe", publishedAt: "2026-11-11", collectedAt: "2026-11-17",
    url: "https://blog.adobe.com/en/publish/2026/11/11/adobe-max-sneaks", thumbnail: "https://blog.adobe.com/en/publish/2026/11/11/media_190dc6538435b84ba934466b8eac6942f9e97a33d.png?width=1200&format=pjpg&optimize=medium",
    summary: "Adobe가 이미지의 형태·색·조명을 이해하는 Deep Brush, 한 장면을 탐색 가능한 공간으로 바꾸는 Sight Span, 제스처로 오브젝트를 조작하는 Hands On, 편집 동작을 네이티브 도구로 반복 적용하는 Rinse Repeat 등 10개 연구 프로토타입을 공개했습니다.", impact: "텍스트 프롬프트만으로 결과를 다시 만드는 대신 브러시·제스처·타이밍 신호와 편집 가능한 네이티브 레이어로 의도를 전달하는 흐름이 늘고 있어 AI 제작 도구를 평가할 때 직접 조작성과 후편집 가능성을 핵심 기준으로 볼 수 있습니다.", tags: ["#AdobeMAX", "#디자인리서치", "#직접조작", "#편집가능성"]
  },
  {
    kind: "새 기능", title: "Figma Motion — 물리 기반 스프링을 디자인 시스템 변수로", category: "피그마 뉴스", source: "Figma", publishedAt: "2026-11-10", collectedAt: "2026-11-16",
    url: "https://help.figma.com/hc/en-us/articles/41414048690839-Adjust-an-animation-s-easing", thumbnail: "https://help.figma.com/hc/article_attachments/44921175238295",
    summary: "Figma Motion이 질량·강성·감쇠를 조절하는 iOS·Android 물리 기반 스프링과 애니메이션 스타일 미리보기, Lottie 내보내기 미리보기를 추가했습니다.", impact: "모션 값을 감각적인 일회성 조정이 아니라 플랫폼별 물리 파라미터와 재사용 변수로 관리해 제품 전반의 움직임을 디자인 시스템 자산으로 표준화할 수 있습니다.", tags: ["#FigmaMotion", "#모션디자인", "#디자인시스템", "#Lottie"]
  },
  {
    kind: "새 기능", title: "Framer Agent — 이미지 생성과 인터랙티브 셰이더를 한 캔버스에서", category: "AI 디자인 뉴스", source: "Framer", publishedAt: "2026-11-12", collectedAt: "2026-11-16",
    url: "https://www.framer.com/updates/image-shader-generation", thumbnail: "https://framerusercontent.com/images/188hlNOfbDRG4rHCkWqDpBILpg.png?width=1600&height=900",
    summary: "Framer Agent가 사이트용 이미지·텍스처·일러스트 생성과 피사체 교체·배경 제거·스타일 변경을 지원하고, 자연어로 생성·수정한 셰이더에 이미지를 입력할 수 있게 됐습니다.", impact: "웹 디자이너가 외부 생성 도구로 왕복하지 않고 브랜드 비주얼과 포인터 반응 효과를 같은 캔버스에서 함께 탐색하므로 랜딩 페이지의 시각 실험과 프로토타이핑 주기가 짧아집니다.", tags: ["#Framer", "#AI에이전트", "#이미지생성", "#셰이더"]
  },
  {
    kind: "제품 소식", title: "Affinity for iPad — 스케치부터 인쇄 레이아웃까지 하나의 파일로", category: "AI 디자인 뉴스", source: "Canva", publishedAt: "2026-11-03", collectedAt: "2026-11-16",
    url: "https://www.canva.com/newsroom/news/affinity-for-ipad/", thumbnail: "https://content-management-files.canva.com/abb8fc96-3c0f-4a4e-9ee2-590e7e0fa4c8/Affinity-iPad-Canva-Newsroom-Banner2880x880v2.png",
    summary: "Canva가 Apple Pencil·터치에 맞춘 Affinity for iPad를 출시해 스케치, 벡터, 픽셀 편집, 다중 페이지 레이아웃을 단일 .af 파일에 통합하고 Canva AI Studio를 연결했습니다.", impact: "현장 스케치와 정교한 벡터·사진 보정·편집 레이아웃 사이의 파일 변환을 줄이고, 생성 확장·업스케일·모션 블러 보정·레이어 분해를 비파괴 제작 흐름 안에서 선택할 수 있습니다.", tags: ["#Affinity", "#iPad", "#CanvaAI", "#크리에이티브워크플로"]
  },
  {
    kind: "실무 사례", title: "Google Gemini UX — 생성형 UI에 편집 원칙과 시각적 판단을 심는 법", category: "UI·UX 뉴스", source: "Google Design", publishedAt: "2026-11-04", collectedAt: "2026-11-16",
    url: "https://design.google/library/the-next-interface-gemini", thumbnail: "https://storage.googleapis.com/gd-prod/images/82050f2f-bf41-4ca5-9744-24cb76f9ebf0.0db06b6b53a87fb0.png",
    summary: "Gemini 디자인팀이 실제 프롬프트 실패를 기록하고 수백 개의 골든 응답, 이미지 초점·재질·조명 규칙, 실시간 타이포 스트레스 테스트 도구와 라이브 UI 편집 확장을 만든 과정을 공개했습니다.", impact: "생성형 UI의 품질을 화면 시안이 아니라 시스템 지침·평가 예시·시각 규칙·실제 코드 수정 도구로 운영하는 방법을 보여줘 AI 제품의 콘텐츠 디자인과 디자인 시스템 거버넌스에 직접 적용할 수 있습니다.", tags: ["#Gemini", "#생성형UI", "#UX디자인", "#시스템지침"]
  },
  {
    kind: "실무 사례", title: "Theodo — Markdown·Figma MCP·Code Connect로 제품 루프 단축", category: "피그마 뉴스", source: "Figma", publishedAt: "2026-10-27", collectedAt: "2026-11-16",
    url: "https://www.figma.com/customers/how-theodo-reinvents-the-product-workflow-with-figma/", thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/0be2bf61d7a5f2cc9225131d035c00d92764046e-1500x1200.png?w=1200&q=70&fit=max&auto=format",
    summary: "Theodo가 Markdown 요구사항을 단일 정보원으로 삼고 Figma Make, MCP, Code Connect를 연결해 실제 데이터·엣지 케이스가 포함된 프로토타입을 만들며 디자인·개발 주기를 6주에서 2주로 줄였습니다.", impact: "디자인 시스템 토큰과 React 컴포넌트를 동기화하고 AI가 가속한 단계별 60~85% 시간 절감 수치를 공개해, AI 프로토타이핑을 팀 거버넌스와 엔지니어링 핸드오프에 연결할 때의 기준을 제공합니다.", tags: ["#FigmaMCP", "#CodeConnect", "#디자인시스템", "#프로토타이핑"]
  },
  {
    kind: "리서치·업계 동향", title: "Adobe 조사 — AI 사용 창작자의 68%가 결과를 타협한 경험", category: "AI 디자인 뉴스", source: "Adobe", publishedAt: "2026-11-09", collectedAt: "2026-11-16",
    url: "https://blog.adobe.com/en/publish/2026/11/09/from-big-ideas-bigger-opportunities-creators-say-creative-ai-accelerating-growth", thumbnail: "https://blog.adobe.com/en/publish/2026/11/09/media_1ed761e1bf8ec4c91c7d4772d6b9af034afe9366a.png?format=png&optimize=medium&width=750",
    summary: "Adobe와 Harris Poll이 미국 창작자 2,000명 이상을 조사한 결과 AI 사용자 78%는 사업·팔로워 성장 가속을 체감했지만, 68%는 의도와 다른 결과를 타협했고 47%는 최근 3개월 안에 작업 중 AI 사용을 포기했습니다.", impact: "생성 속도보다 부분 수정, 일관성, 중간 결과 보존과 인간의 최종 결정권이 제품 선택과 워크플로 설계의 핵심 요구임을 보여주므로 AI 제작 도구 평가 기준을 정량적으로 조정할 수 있습니다.", tags: ["#크리에이터조사", "#생성형AI", "#편집제어", "#워크플로"]
  },
  {
    title: "Figma의 AI 보안 리뷰 — 정책·평가·사람의 판단을 한 루프로", category: "AI 디자인 뉴스", source: "Figma", publishedAt: "2026-07-23", collectedAt: "2026-08-12",
    url: "https://www.figma.com/blog/how-figma-stays-ahead-of-vulnerabilities-with-agents/", thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/0aafc60d3967aa228537a2f8379ce3308849f643-3264x1836.jpg?w=1200&q=70&fit=max&auto=format",
    summary: "Figma가 코드 생성, PR 검토, 과거 코드 감사에 같은 보안 정책을 적용하고 사람의 판정과 알려진 취약점 재생 평가로 에이전트의 정밀도와 재현율을 개선한 운영 방식을 공개했습니다.", impact: "AI 작업의 품질을 프롬프트 한 번에 맡기지 않고 명시적 정책, 평가 세트, 사람의 승인, 관측 지표로 관리하는 실무 운영 모델로 전환할 근거가 됩니다.", tags: ["#AI에이전트", "#평가", "#보안", "#디자인운영"]
  },
  {
    title: "Figma 캔버스 접근성 — 장면 그래프를 Mirror DOM으로 연결", category: "피그마 뉴스", source: "Figma", publishedAt: "2026-07-01", collectedAt: "2026-08-12",
    url: "https://www.figma.com/blog/building-accessibility-into-a-canvas-based-product/", thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/3b56ac84ef6b2e3fd6ffc923b4093009bcc6a3b4-3262x1836.png?w=1200&q=70&fit=max&auto=format",
    summary: "HTML 요소가 없는 고성능 캔버스에 내부 접근성 트리와 Mirror DOM, 선택 동기화, 상태 알림을 결합해 키보드와 스크린리더 탐색을 구현한 구조를 공개했습니다.", impact: "캔버스형 편집기에서도 시각 렌더링과 보조기술용 의미 구조를 분리해 접근성을 제품 기반 구조로 설계할 수 있음을 보여줍니다.", tags: ["#Figma", "#접근성", "#스크린리더", "#MirrorDOM"]
  },
  {
    title: "GOV.UK Frontend 6.4 — 흐름을 멈추는 Panel 변형과 역색 토큰", category: "UI·UX 뉴스", source: "GOV.UK Design System", publishedAt: "2026-07-16", collectedAt: "2026-08-12",
    url: "https://design-system.service.gov.uk/", thumbnail: "https://design-system.service.gov.uk/assets/images/govuk-opengraph-image.png",
    summary: "GOV.UK가 사용자 여정을 잠시 멈추고 중요한 정보를 전달하는 interruption Panel 변형, 개선된 Date input, 어두운 배경용 inverse-text 기능 색상을 공개했습니다.", impact: "중요 경고를 일반 완료 메시지와 구분하고, 컴포넌트 상태와 기능 색상을 함께 버전 관리하는 공공 서비스 UX 사례로 활용할 수 있습니다.", tags: ["#GOVUK", "#디자인시스템", "#Panel", "#접근성"]
  },
  {
    title: "Queens Tourism Council — Unisphere를 축구공으로 바꾼 도시 캠페인", category: "디자인 일반", source: "Pentagram", publishedAt: "2026-07-20", collectedAt: "2026-08-12",
    url: "https://www.pentagram.com/work/queens-tourism-council", thumbnail: "https://pentagram-production.imgix.net/cbd29310-2863-45a7-b984-87b3aa5bac41/Blog1QUEENScopy.jpg?auto=compress%2Cformat&crop=entropy&fit=crop&fm=jpg&h=470&q=80&rect=96%2C0%2C1728%2C1080&w=900&s=9f309305985575550b93dd28ae602752",
    summary: "Pentagram이 2026 FIFA 월드컵을 계기로 Queens의 Unisphere를 축구공으로 재해석하고, Milton Glaser의 Einstein에서 파생한 전용 서체로 관광 캠페인과 조직 아이덴티티를 통합했습니다.", impact: "지역의 익숙한 상징과 기존 서체 유산을 행사성 캠페인에만 소비하지 않고 장기 도시 브랜드 자산으로 확장한 방식을 참고할 수 있습니다.", tags: ["#브랜드디자인", "#도시브랜딩", "#타이포그래피", "#캠페인"]
  },
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
