// 새 레퍼런스는 아래 형식을 유지해 맨 앞에 추가합니다.
// 원본 이미지 사용 권한이나 안정적인 직접 이미지 URL이 없을 때에는 visual 필드로 카드 미리보기를 만듭니다.
let references = [
  {
    title: "Firefly Prompt Enhancement — Original to Controlled Variation",
    category: "AI 디자인", date: "2026-07-13", url: "https://helpx.adobe.com/ca/firefly/web/work-with-images/generate-images/enhance-prompts-to-generate-images.html",
    summary: "Firefly Image 4 계열에서 원본 프롬프트와 자동 확장 프롬프트를 비교하고 콘텐츠 유형·시각 강도·구도·스타일을 함께 조절하는 생성 경험.",
    note: "AI가 문장을 보강한 결과를 숨기지 않고 원문과 비교·수정하게 해 생성 과정의 통제권과 학습 가능성을 높인 점이 유용함.",
    prompt: "A quiet editorial still life with a translucent object, warm neutral background, soft side light, restrained color palette.",
    tags: ["#AI디자인", "#Firefly", "#프롬프트강화", "#사용자통제"],
    visual: { background: "#e7e1ff", accent: "#5c42e8", ink: "#171717", radiusOne: "50% 0 50% 50%", radiusTwo: "50%", rotate: "-10deg", label: "ORIGINAL / ENHANCE / CONTROL" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "원본·강화 프롬프트 비교와 모델·콘텐츠 유형·강도·구도 설정이 공개돼 설명 가능한 AI 생성 UI를 반복 검증하는 데 전이된다.",
      "metadata": { "렌즈": ["AI활용", "사용자흐름", "콘텐츠명료성"], "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "prompt": "카드에 캡처", "model": "Firefly Image 4 또는 Image 4 Ultra", "settings": "Prompt enhancement ON·content type·visual intensity·composition·style" } },
      "출처": { "소스": "https://helpx.adobe.com/ca/firefly/web/work-with-images/generate-images/enhance-prompts-to-generate-images.html", "수집일": "2026-07-13", "수집사유": "AI 보강 전후와 설정을 사용자가 확인·수정하는 흐름이 구체적으로 공개됨" }
    }
  },
  {
    title: "Synapse — Visual Graph for Figma Design Tokens",
    category: "Figma 플러그인", date: "2026-07-13", url: "https://forum.figma.com/showcase-your-work-14/making-design-tokens-easier-to-understand-55387",
    summary: "Figma 로컬 변수·스타일·별칭 관계를 읽어 대화형 그래프로 시각화하고 토큰 파일 변경점을 비교하는 디자인 시스템 유지보수 플러그인.",
    note: "길어진 변수 목록을 관계 그래프로 바꿔 별칭 체인과 변경 영향을 찾는 반복 감사 작업을 줄이는 점이 실무적임.",
    tags: ["#Figma플러그인", "#디자인토큰", "#변수감사", "#디자인시스템"],
    thumbnail: "https://uploads-us-west-2.insided.com/figma-en/attachment/66e06457-d25a-4b0f-87c0-9fff6da343e2.jpg",
    visual: { background: "#dff4ea", accent: "#146b52", ink: "#171717", radiusOne: "100% 0 70% 30%", radiusTwo: "0", rotate: "12deg", label: "TOKEN / GRAPH / IMPACT" },
    review: {
      "유형": "Figma 플러그인", "가치축_이름": "유용성",
      "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "변수·스타일·별칭을 대화형 관계 그래프와 import diff로 보여줘 토큰 구조 감사와 변경 영향 확인 시간을 반복적으로 절감한다.",
      "metadata": { "렌즈": ["정보구조", "브랜드일관성"], "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "workflow": "변수·스타일 읽기→관계 시각화→변경점 검토", "repeated_task": "디자인 토큰 감사와 유지보수" } },
      "출처": { "소스": "https://forum.figma.com/showcase-your-work-14/making-design-tokens-easier-to-understand-55387", "수집일": "2026-07-13", "수집사유": "실제 플러그인 화면과 토큰 유지보수 절차가 공개됨" }
    }
  },
  {
    title: "Gen-4.5 — Zero-gravity Documentary Motion",
    category: "AI 영상 프롬프트", date: "2026-07-13", url: "https://help.runwayml.com/hc/en-us/articles/42460036199443-Text-to-Video-Prompting-Guide",
    summary: "무중력 공간의 주체·물체 움직임과 핸드헬드 다큐멘터리 카메라를 한 장면에 명시한 Runway Gen-4.5 공식 텍스트 투 비디오 예시.",
    note: "장면, 동작, 카메라, 질감을 문장별로 분리해 어떤 지시가 결과에 반영됐는지 비교하기 쉬운 영상 프롬프트 구조.",
    prompt: "A raccoon in a plain room in zero gravity trying to steal the garbage from a silver trash can. The garbage floats out in zero gravity. Handheld documentary film style. Natural camera shake. Raw indie film aesthetic. Natural lighting. Unpolished, authentic look. Low budget realism. Observational feel.",
    tags: ["#영상프롬프트", "#Gen45", "#핸드헬드", "#다큐스타일"],
    visual: { background: "#c7d7ee", accent: "#ff5c35", ink: "#171717", radiusOne: "50%", radiusTwo: "0 100% 0 100%", rotate: "9deg", label: "GEN-4.5 / FLOAT / HANDHELD" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "공식 결과 영상과 전체 프롬프트·Gen-4.5 모델·동작 시간 지침이 함께 있어 주체와 카메라 움직임을 재현·비교할 수 있다.",
      "metadata": { "렌즈": ["AI활용", "인터랙션"], "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "카드에 캡처", "model": "Runway Gen-4.5", "settings": "Text to Video·동작별 현실적 타임스탬프·자연스러운 카메라 흔들림" } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/42460036199443-Text-to-Video-Prompting-Guide", "수집일": "2026-07-13", "수집사유": "공식 가이드가 프롬프트·모델·결과 GIF와 시간 설정 원칙을 제공함" }
    }
  },
  {
    title: "Shopify Customer Accounts — Mobile-first Design Uplift",
    category: "웹·앱 UI", date: "2026-07-13", url: "https://changelog.shopify.com/posts/customer-accounts-get-a-design-uplift",
    summary: "고객 계정 화면을 단일 열로 정리하고 모바일 메뉴·주문 요약·주요 행동을 접힘 없이 노출한 Shopify의 실제 제품 UI 개편.",
    note: "기능 추가 없이 정보 우선순위와 작은 화면의 행동 가시성을 조정해 탐색 탭과 주문 확인 부담을 줄인 전후 사례.",
    tags: ["#웹앱UI", "#모바일퍼스트", "#고객계정", "#정보구조"],
    thumbnail: "https://cdn.shopify.com/static/Account%20Uplift%20-%20Changelog%20-%20Optimized.gif",
    visual: { background: "#e4f1e8", accent: "#0b6b3a", ink: "#171717", radiusOne: "0", radiusTwo: "50% 0 0 50%", rotate: "0deg", label: "ACCOUNT / MOBILE / ACTION" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화",
      "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "실제 고객 계정 화면에서 단일 열·인라인 모바일 내비게이션·노출 행동 규칙을 확인할 수 있어 커머스 계정 UI 패턴으로 전이된다.",
      "metadata": { "렌즈": ["정보구조", "사용자흐름", "접근성"], "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "tokens": "단일 열·명확한 계층", "components": "인라인 모바일 메뉴·주문 요약·주요 행동" } },
      "출처": { "소스": "https://changelog.shopify.com/posts/customer-accounts-get-a-design-uplift", "수집일": "2026-07-13", "수집사유": "공식 변경 로그에 실제 화면과 모바일 행동 변화가 공개됨" }
    }
  },
  {
    title: "네온 식생 사이버펑크 시티 — FLUX 레퍼런스 실험",
    category: "AI 이미지 프롬프트", date: "2026-07-13", url: "https://helpx.adobe.com/uk/firefly/web/work-with-images/generate-images/generate-images-using-flux.html",
    summary: "동일한 텍스트와 레퍼런스 이미지를 FLUX 1.1 Ultra 계열에 적용해 스타일·구도 영향도를 비교하는 공식 생성 예시.",
    note: "모델·프롬프트·화면 설정과 결과 이미지가 함께 공개돼 레퍼런스 이미지가 색과 구도에 미치는 영향을 반복 검증하기 좋음.",
    prompt: "cyberpunk cityscape bathed in neon light, where vivid foliage glows beneath the night sky.",
    tags: ["#이미지프롬프트", "#FLUX", "#레퍼런스이미지", "#사이버펑크"],
    visual: { background: "#16142b", accent: "#62ff8b", ink: "#f2d7ff", radiusOne: "50% 0 50% 0", radiusTwo: "50%", rotate: "-10deg", label: "NEON / FLORA / REFERENCE" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "Adobe 공식 문서에 동일 프롬프트·FLUX 모델·화면 비율과 레퍼런스 이미지 설정 및 결과가 함께 있어 스타일 영향 실험을 반복 재현할 수 있다.",
      "metadata": { "렌즈": ["AI활용", "브랜드일관성"], "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cyberpunk cityscape bathed in neon light, where vivid foliage glows beneath the night sky.", "model": "FLUX1.1 [pro] Ultra", "settings": "Adobe Firefly Generate image·Reference image 사용·Widescreen 16:9" } },
      "출처": { "소스": "https://helpx.adobe.com/uk/firefly/web/work-with-images/generate-images/generate-images-using-flux.html", "수집일": "2026-07-13", "수집사유": "2026-06-29 갱신된 공식 문서에 프롬프트·모델·설정·결과 이미지가 모두 확인됨" }
    }
  },
  {
    title: "순차 동작을 담는 10초 카메라 숏",
    category: "AI 영상 프롬프트", date: "2026-07-13", url: "https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5",
    summary: "복수의 동작과 미세한 분위기 변화를 한 숏 안에서 제어하는 Gen-4.5 텍스트 투 비디오용 범용 프롬프트.",
    note: "카메라 이동·피사체 행동·환경 변화를 문장 단위로 분리하고 10초·24fps로 고정해 복합 동작의 순서를 검증하기 좋음.",
    prompt: "A slow dolly-in crosses a quiet gallery as the subject turns toward the camera, pauses, and raises one hand. Soft window light gradually warms while dust drifts through the beam. Continuous cinematic shot.",
    tags: ["#영상프롬프트", "#Gen45", "#카메라워크", "#순차동작"],
    visual: { background: "#292925", accent: "#e8b66b", ink: "#f6f5f1", radiusOne: "0 100% 0 100%", radiusTwo: "50%", rotate: "7deg", label: "DOLLY / SEQUENCE / LIGHT" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 4, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 17, "verdict": "accept",
      "근거": "Runway 공식 Gen-4.5 사양에 맞춰 카메라·행동·조명 순서를 명시하고 모델·길이·비율·FPS를 고정해 복합 단일 숏을 반복 생성할 수 있다.",
      "metadata": { "렌즈": ["AI활용", "인터랙션"], "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A slow dolly-in crosses a quiet gallery as the subject turns toward the camera, pauses, and raises one hand. Soft window light gradually warms while dust drifts through the beam. Continuous cinematic shot.", "model": "Runway Gen-4.5 Text to Video", "settings": "10초·16:9 1280×720·24fps·단일 연속 숏" } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5", "수집일": "2026-07-13", "수집사유": "공식 문서에 모델 입력 방식·2~10초 길이·화면 비율·FPS 설정 캡처가 확인됨" }
    }
  },
  {
    title: "Figma Code Layers — 살아 있는 UI 비교 캔버스",
    category: "웹·앱 UI", date: "2026-07-13", url: "https://www.figma.com/blog/code-on-the-figma-canvas/",
    summary: "작동하는 React UI를 캔버스에서 복제·비교하고 특정 화면과 플로우를 다시 편집 가능한 디자인 레이어로 추출하는 제품 경험.",
    note: "정적 시안 비교를 실제 인터랙션 비교로 확장하고 코드와 디자인 사이의 왕복 동작을 한 화면에 묶은 정보 구조가 참고할 만함.",
    tags: ["#웹앱UI", "#코드레이어", "#프로토타이핑", "#디자인투코드"],
    thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/5bad8b94a677b2890b50915446f7cc066fa47988-3264x1836.png?w=1200&q=70&fit=max&auto=format",
    visual: { background: "#d9f1d3", accent: "#375f3d", ink: "#171717", radiusOne: "0", radiusTwo: "50% 0 50% 0", rotate: "0deg", label: "CODE / CANVAS / EXTRACT" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept",
      "근거": "작동 UI의 복제·비교·리사이즈와 편집 가능한 화면·상태·플로우 추출이 실제 제품 화면으로 공개돼 디자인-코드 왕복 흐름으로 전이할 수 있다.",
      "metadata": { "렌즈": ["사용자흐름", "인터랙션", "정보구조"], "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "tokens": "캔버스 기반 비교·왕복 편집 원칙", "components": "Code layer·Extract designs·코드 편집기" } },
      "출처": { "소스": "https://www.figma.com/blog/code-on-the-figma-canvas/", "수집일": "2026-07-13", "수집사유": "2026-06-24 공개된 실제 UI 화면과 코드-디자인 왕복 흐름이 확인됨" }
    }
  },
  {
    title: "GOV.UK Frontend 6.3 — Generic Header",
    category: "웹 스타일가이드", date: "2026-07-13", url: "https://design-system.service.gov.uk/community/whats-new/",
    summary: "GOV.UK 체계 밖의 공공 서비스도 일관된 탐색 구조를 쓸 수 있게 제네릭 헤더를 추가한 디자인 시스템 릴리스.",
    note: "브랜드 소속이 다른 서비스에 공통 헤더 규칙을 확장하는 방식과 실제 컴포넌트 적용 범위를 함께 점검하기 좋음.",
    tags: ["#웹스타일가이드", "#디자인시스템", "#헤더", "#공공서비스"],
    thumbnail: "https://design-system.service.gov.uk/assets/images/govuk-opengraph-image.png",
    visual: { background: "#d9e8f5", accent: "#1d70b8", ink: "#0b0c0c", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "GENERIC / HEADER / SERVICE" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화",
      "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "운영 중인 GOV.UK Frontend가 제네릭 헤더의 실제 컴포넌트와 적용 대상을 공개해 브랜드 경계를 넘는 서비스 탐색 규칙으로 전이할 수 있다.",
      "metadata": { "렌즈": ["정보구조", "사용자흐름", "접근성"], "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "GOV.UK 색상·타이포·간격 기반", "components": "Generic header" } },
      "출처": { "소스": "https://design-system.service.gov.uk/community/whats-new/", "수집일": "2026-07-13", "수집사유": "2026년 6월 공개 릴리스에 실제 제네릭 헤더 컴포넌트와 적용 맥락이 확인됨" }
    }
  },
  {
    title: "Digital.gov — Design for Understanding",
    category: "콘텐츠 디자인 가이드", date: "2026-07-13", url: "https://digital.gov/guides/plain-language/design",
    summary: "목록·표·제목·여백을 활용해 공공 서비스 문장을 스캔 가능하고 접근성 있게 만드는 실무형 콘텐츠 설계 가이드.",
    note: "문장만 고치는 데서 멈추지 않고 실제 화면의 정보 계층과 보조기기 접근성까지 함께 검토하는 체크리스트로 쓰기 좋음.",
    tags: ["#콘텐츠디자인", "#플레인랭귀지", "#접근성", "#정보계층"],
    thumbnail: "https://digital.gov/s3/files/2025-09/designing%20for%20understanding%202.png",
    visual: { background: "#f1f7ef", accent: "#237c4b", ink: "#171717", radiusOne: "0", radiusTwo: "50%", rotate: "0deg", label: "SCAN / STRUCTURE / ACCESS" },
    review: {
      "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성",
      "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "제목·목록·표·여백을 실제 콘텐츠 구조와 접근성 요구에 연결해 복잡한 공공 서비스 화면의 문장 편집 절차로 바로 적용할 수 있다.",
      "metadata": { "렌즈": ["콘텐츠명료성", "정보구조", "접근성"], "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "핵심 정보 우선 배치→제목·목록으로 구조화→접근성 검토", "examples": "목록·표·제목·여백의 공개 화면 예시" } },
      "출처": { "소스": "https://digital.gov/guides/plain-language/design", "수집일": "2026-07-13", "수집사유": "공개 시각 예시와 실행 단계가 함께 확인되는 공식 가이드" }
    }
  },
  {
    title: "Surrey Street 750 — Collaged Market Pictograms",
    category: "비주얼 그래픽", date: "2026-07-13", url: "https://www.itsnicethat.com/articles/bob-design-croydon-school-of-art-surrey-market-graphic-design-architecture-project-060726",
    summary: "시장 상인의 물건과 거리의 건축 형태를 콜라주 픽토그램으로 바꿔 배너·차양·가구에 확장한 공공 그래픽 프로젝트.",
    note: "현장 채집물을 단순 아이콘으로 평탄화하지 않고 콜라주 규칙으로 묶어 장소성과 확장성을 함께 확보한 방식이 돋보임.",
    tags: ["#비주얼그래픽", "#픽토그램", "#콜라주", "#공공디자인"],
    thumbnail: "https://admin.itsnicethat.com/images/KVF_9audsqjG_7sGDw82BwNyulI=/279503/width-1440/bob-design-surrey-market-graphic-design-itsnicethat-10.jpg",
    visual: { background: "#f5df53", accent: "#d94b3d", ink: "#17215c", radiusOne: "0 50% 0 50%", radiusTwo: "50% 0", rotate: "-9deg", label: "MARKET / COLLAGE / PLACE" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "시장 물건과 건축 각도를 콜라주 픽토그램으로 변환한 규칙이 배너·차양·가구에 반복돼 장소 기반 캠페인의 재사용 가능한 그래픽 문법으로 추출된다.",
      "metadata": { "렌즈": ["브랜드일관성", "정보구조"], "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "mood": "활기찬 지역 시장 콜라주", "elements": "기하 픽토그램·원색·건축 각도·거리 적용물" } },
      "출처": { "소스": "https://www.itsnicethat.com/articles/bob-design-croydon-school-of-art-surrey-market-graphic-design-architecture-project-060726", "수집일": "2026-07-13", "수집사유": "2026-07-06 공개된 다수의 현장 적용 이미지와 제작 맥락이 확인됨" }
    }
  },
  {
    title: "Bare Earth — A Whimsical Beauty World",
    category: "브랜드", date: "2026-07-13", url: "https://www.itsnicethat.com/articles/blanca-doba-bare-earth-graphic-design-project-010726",
    summary: "부드러운 색·섬세한 타이포·장식 모티프로 임상적인 뷰티 관습을 벗어나 하나의 서사적 세계를 만든 브랜드 아이덴티티.",
    note: "워드마크보다 패키지·타이포·장식의 반복 조합으로 세계관을 구축해 소규모 제품군의 브랜드 확장 원칙을 보기 좋음.",
    tags: ["#브랜드", "#뷰티브랜딩", "#패키지", "#타이포그래피"],
    thumbnail: "https://media.itsnicethat.com/original_images/ezgif.com-resize_1_iboNcC9.gif",
    visual: { background: "#efe2da", accent: "#8d5f78", ink: "#3a2830", radiusOne: "50% 50% 0 0", radiusTwo: "50%", rotate: "7deg", label: "SOFT / ORNAMENT / WORLD" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "부드러운 팔레트·섬세한 활자·장식 모티프가 패키지와 캠페인 전반에 반복돼 비임상적 뷰티 브랜드의 일관된 시각 언어로 추출할 수 있다.",
      "metadata": { "렌즈": ["브랜드일관성", "타이포그래피"], "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "mood": "섬세하고 기묘한 뷰티 판타지", "elements": "저채도 팔레트·세리프 타이포·식물 장식·패키지 반복" } },
      "출처": { "소스": "https://www.itsnicethat.com/articles/blanca-doba-bare-earth-graphic-design-project-010726", "수집일": "2026-07-13", "수집사유": "2026-07-01 공개된 패키지·타이포·아이덴티티 이미지가 충분함" }
    }
  },
  {
    title: "Better Design System 2.2 — Clinical App Shell",
    category: "웹 스타일가이드", date: "2026-07-12", url: "https://www.better.care/blog-en/better-design-system-2-2-0/",
    summary: "의료 제품의 상단 바·사이드 내비게이션·반응형 셸을 하나의 시스템으로 묶고 실제 임상 흐름에 적용한 디자인 시스템 릴리스.",
    note: "컴포넌트 묶음을 넘어 깊은 업무 흐름에서도 위치와 맥락을 잃지 않게 하는 앱 셸 구조를 확인하기 좋음.",
    tags: ["#웹스타일가이드", "#디자인시스템", "#앱셸", "#접근성"],
    visual: { background: "#e6f3ee", accent: "#126b52", ink: "#171717", radiusOne: "0", radiusTwo: "50% 0 0 50%", rotate: "0deg", label: "SHELL / NAV / CLINICAL" }
  },
  {
    title: "Apple HIG — Generative AI Guidance",
    category: "콘텐츠 디자인 가이드", date: "2026-07-12", url: "https://developer.apple.com/design/human-interface-guidelines/generative-ai",
    summary: "생성 결과의 수정·피드백·모델 선택을 실제 인터페이스 예시와 함께 설명하는 Apple의 생성형 AI 경험 가이드.",
    note: "AI 안내 문구를 기능 설명에 그치지 않고 수정 가능성, 사용자 통제, 결과 피드백 동작과 함께 설계하는 기준이 유용함.",
    tags: ["#콘텐츠디자인", "#AppleHIG", "#생성형AI", "#피드백UX"],
    visual: { background: "#edf0f5", accent: "#2878ff", ink: "#171717", radiusOne: "50%", radiusTwo: "0", rotate: "12deg", label: "REFINE / FEEDBACK / CONTROL" }
  },
  {
    title: "Huekit — Color-to-Token Design System",
    category: "Figma 플러그인", date: "2026-07-12", url: "https://www.figma.com/community/plugin/1642485097589548816",
    summary: "핵심 컬러 역할 몇 개에서 일관된 컬러 스케일과 디자인 토큰 체계를 생성하는 최근 공개 Figma 플러그인.",
    note: "색상 팔레트 생성보다 역할 기반 토큰 구조와 기존 파일 적용 흐름을 얼마나 명료하게 만드는지 평가하기 좋은 도구.",
    tags: ["#Figma플러그인", "#디자인토큰", "#컬러시스템", "#디자인시스템"],
    visual: { background: "#fff0b8", accent: "#6b4eff", ink: "#171717", radiusOne: "50% 0 50% 50%", radiusTwo: "50%", rotate: "-16deg", label: "COLOR / ROLE / TOKEN" }
  },
  {
    title: "산 안개 호수의 Art·Photo 비교 프롬프트",
    category: "AI 이미지 프롬프트", date: "2026-07-12", url: "https://helpx.adobe.com/firefly/web/work-with-images/generate-images/set-content-type.html",
    summary: "동일한 자연 풍경 프롬프트를 Art와 Photo 콘텐츠 유형으로 나눠 결과의 표현 차이를 비교하는 Firefly 공식 예시.",
    note: "문장을 바꾸지 않고 콘텐츠 유형만 전환해 일러스트와 사진 결과의 차이를 검증할 수 있어 프롬프트 실험 기준선으로 유용함.",
    prompt: "A serene mountain landscape at sunrise, with mist over the hills, a calm lake, tall pine trees, and a cozy cabin with smoke rising from the chimney.",
    tags: ["#이미지프롬프트", "#Firefly", "#콘텐츠유형", "#비교실험"],
    visual: { background: "#dfe9df", accent: "#d97845", ink: "#17332b", radiusOne: "50% 50% 10% 10%", radiusTwo: "50%", rotate: "0deg", label: "ART / PHOTO / SAME PROMPT" }
  },
  {
    title: "정지 이미지의 재질만 살아나는 루프",
    category: "AI 영상 프롬프트", date: "2026-07-12", url: "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide",
    summary: "구도는 고정한 채 반사광과 얇은 소재의 움직임만 제어하는 6초 이미지 투 비디오용 범용 프롬프트.",
    note: "입력 이미지의 외형을 다시 묘사하지 않고 움직임·카메라·루프 끝점만 지시해 원본 디자인 보존에 집중함.",
    prompt: "6-second seamless image-to-video loop, locked camera and unchanged composition, only the thin translucent material gently flexes once while a narrow highlight travels left to right, subtle ambient shadow breathing, restrained motion, final frame precisely matches the first, no cuts, no text changes",
    tags: ["#영상프롬프트", "#이미지투비디오", "#루프모션", "#재질표현"],
    visual: { background: "#20242d", accent: "#8debd2", ink: "#f6f5f1", radiusOne: "100% 0 100% 0", radiusTwo: "50%", rotate: "-9deg", label: "LOCK / FLEX / LOOP" }
  },
  {
    title: "JUNE — Multi-level Navigation Redesign",
    category: "웹·앱 UI", date: "2026-07-12", url: "https://knowledge.juneapp.com/en/articles/15188515-update-20-05-2026-design-update-system-optimizations",
    summary: "복잡한 업무 도구의 평면 내비게이션을 2단 사이드바와 실제 하위 경로 중심으로 재구성한 제품 UI 개편 사례.",
    note: "기능 수를 줄이지 않고 정보 관계를 다시 묶어 클릭 경로와 탐색 밀도를 함께 개선한 전후 구조가 실무적임.",
    tags: ["#웹앱UI", "#사이드바", "#정보구조", "#업무도구"],
    visual: { background: "#dde7ff", accent: "#3159d8", ink: "#171717", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "LEVEL / ROUTE / DENSITY" }
  },
  {
    title: "Magazine's Playful Summary",
    category: "비주얼 그래픽", date: "2026-07-12", url: "https://www.behance.net/gallery/251456941/Magazines-playful-summary",
    summary: "잡지 지면의 이미지·타이포·여백을 유연하게 충돌시키며 여러 편집 리듬을 한 프로젝트에 모은 그래픽 작업.",
    note: "일관성을 동일 레이아웃 반복이 아니라 활자 크기, 여백, 이미지 크롭의 리듬으로 만드는 방식을 관찰하기 좋음.",
    tags: ["#비주얼그래픽", "#에디토리얼", "#타이포그래피", "#레이아웃"],
    visual: { background: "#f5df55", accent: "#e23d35", ink: "#171717", radiusOne: "0", radiusTwo: "50% 50% 0 0", rotate: "7deg", label: "TYPE / CROP / RHYTHM" }
  },
  {
    title: "Bao BFF — Open-source Fast Food Identity",
    category: "브랜드", date: "2026-07-12", url: "https://www.itsnicethat.com/articles/bao-bff-hato-graphic-design-project-150626",
    summary: "대만 편의점의 속도감과 친근함을 디지털·팝업·패키지 전반에 번역한 Bao BFF의 오픈소스 브랜드 아이덴티티.",
    note: "로고 하나보다 운영 방식과 문화적 맥락을 그래픽 시스템과 공개 가능한 브랜드 자산으로 확장한 점이 새로움.",
    tags: ["#브랜드", "#오픈소스", "#푸드브랜딩", "#편의점그래픽"],
    visual: { background: "#ff5a3c", accent: "#ffe94d", ink: "#171717", radiusOne: "50%", radiusTwo: "0 100% 0 100%", rotate: "18deg", label: "FAST / OPEN / FRIENDLY" }
  },
  {
    title: "GPT-5.6 in Figma Make — High-fidelity First Passes",
    category: "AI 디자인", date: "2026-07-12", url: "https://www.figma.com/blog/gpt-5-6-is-now-available-in-figma-make/",
    summary: "간단한 지시에서 반응형 레이아웃·실제 인터랙션·콘텐츠까지 갖춘 프로토타입을 만들고 오류를 스스로 복구하는 Figma Make 사례.",
    note: "AI 결과의 화려함보다 첫 시안의 완성도, 반응형 동작, 오류 회복을 함께 검증하는 평가 기준이 실무적으로 유용함.",
    tags: ["#AI디자인", "#FigmaMake", "#프로토타이핑", "#반응형UI"],
    visual: { background: "#d9f66f", accent: "#5138ee", ink: "#171717", radiusOne: "48% 52% 36% 64%", radiusTwo: "0", rotate: "-12deg", label: "PROMPT / BUILD / RECOVER" }
  },
  {
    title: "Got Skills? Make the Figma Agent a Better Collaborator",
    category: "AI 디자인", date: "2026-07-12", url: "https://www.figma.com/blog/got-skills-make-the-figma-agent-a-better-collaborator/",
    summary: "팀의 디자인 리뷰·UX 라이팅·접근성 점검·회고 방식을 재사용 가능한 에이전트 스킬로 만드는 실제 워크플로 사례.",
    note: "디자인 시스템이 무엇을 쓸지 정한다면 스킬은 어떻게 판단하고 검토할지를 보완한다는 역할 구분이 명확함.",
    tags: ["#AI디자인", "#디자인에이전트", "#팀워크플로", "#디자인리뷰"],
    visual: { background: "#171717", accent: "#ff7a45", ink: "#f6f5f1", radiusOne: "50%", radiusTwo: "0 100% 0 100%", rotate: "18deg", label: "SKILL / CRIT / CONTEXT" }
  },
  {
    title: "Parallel AI Image Edits in Figma",
    category: "AI 디자인", date: "2026-07-12", url: "https://www.figma.com/release-notes/",
    summary: "여러 AI 이미지 편집을 동시에 실행하면서 캔버스 작업을 계속하고, 로딩 상태와 진행 상황을 구분해 보여주는 Figma의 비동기 생성 경험.",
    note: "생성 시간을 없애기보다 기다림을 병렬 작업과 명확한 상태 피드백으로 바꾸는 인터랙션 설계가 참고할 만함.",
    tags: ["#AI디자인", "#비동기UX", "#로딩상태", "#이미지편집"],
    visual: { background: "#c7f2e5", accent: "#ef4d2f", ink: "#171717", radiusOne: "100% 0 70% 30%", radiusTwo: "50%", rotate: "8deg", label: "PARALLEL / LOAD / CREATE" }
  },
  {
    title: "Atlassian Design System — Layout Primitives in Jira",
    category: "웹 스타일가이드", date: "2026-07-11", url: "https://atlassian.design/components/primitives/overview/",
    summary: "Atlassian이 실제 Jira 보드를 예시로 Box·Inline·Stack 레이아웃 컴포넌트가 화면 안에서 쓰이는 방식을 보여주는 디자인 시스템 사례.",
    note: "컴포넌트 설명보다 실제 제품 화면에서 레이아웃 원칙이 어떻게 유지되는지 바로 볼 수 있어 실무 참고성이 높음.",
    tags: ["#웹스타일가이드", "#Atlassian", "#Jira", "#레이아웃컴포넌트"],
    thumbnail: "https://atlassian.design/assets/903495bc915c/static/box-usage-example-1724ee6af438a6c2e269316d8bf552e269f054896d0cceab60a1be4fd925b82a.png",
    visual: { background: "#e8e5dc", accent: "#1e4bb8", ink: "#171717", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "JIRA / LAYOUT / SYSTEM" }
  },
  {
    title: "IBM Carbon — Component Index",
    category: "웹 스타일가이드", date: "2026-07-11", url: "https://v10.carbondesignsystem.com/community/component-index/",
    summary: "IBM Carbon의 실제 제품용 컴포넌트를 한 화면에서 비교·탐색할 수 있는 컴포넌트 인덱스 사례.",
    note: "컴포넌트를 이름 목록으로만 관리하지 않고 시각적 형태와 사용 맥락을 함께 탐색하게 만드는 방식이 좋음.",
    tags: ["#웹스타일가이드", "#IBM", "#Carbon", "#컴포넌트라이브러리"],
    thumbnail: "https://v10.carbondesignsystem.com/static/ogimage-8726650b0dd9d8b842abb0cec1e85e70.png",
    visual: { background: "#d3edff", accent: "#005ea8", ink: "#171717", radiusOne: "50% 0 0 50%", radiusTwo: "0", rotate: "-16deg", label: "COMPONENT / INDEX / CARBON" }
  },
  {
    title: "Atlassian Content Design — Information Messages",
    category: "콘텐츠 디자인 가이드", date: "2026-07-11", url: "https://atlassian.design/foundations/content/designing-messages/info-messages/",
    summary: "로그아웃 안내 플래그와 Jira 프로젝트의 빈 상태를 실제 화면 예시로 보여주는 Atlassian의 콘텐츠 디자인 가이드.",
    note: "카피 원칙이 문장만으로 끝나지 않고, 컴포넌트·행동 유도·상태 화면과 함께 작동하는 방식을 확인할 수 있음.",
    tags: ["#콘텐츠디자인", "#Atlassian", "#UX라이팅", "#빈상태"],
    thumbnail: "https://atlassian.design/assets/903495bc915c/static/info-messages-empty-state-0f4e547a4504e27edc637866100a9e28f70a231628b90f336080f9a7ced3ece0.png",
    visual: { background: "#e8f0fe", accent: "#4285f4", ink: "#171717", radiusOne: "50%", radiusTwo: "50%", rotate: "18deg", label: "MESSAGE / CONTEXT / ACTION" }
  },
  {
    title: "Adobe Spectrum — Voice and Tone",
    category: "콘텐츠 디자인 가이드", date: "2026-07-11", url: "https://spectrum.adobe.com/page/voice-and-tone/",
    summary: "Adobe Spectrum이 톤의 범위와 브랜드 보이스를 시각화해 제품·마케팅 콘텐츠에 적용하는 사례.",
    note: "추상적인 톤 키워드를 스펙트럼 형태로 보여줘, 팀이 상황별 표현 강도를 함께 조율하기 좋음.",
    tags: ["#콘텐츠디자인", "#Adobe", "#Spectrum", "#보이스앤톤"],
    thumbnail: "https://spectrum.adobe.com/static/images1x/voice-and-tone_hero_mobile@2x_5KjwDyRmITK8Yzelz0cYwl_1611635898683.png",
    visual: { background: "#fff1d6", accent: "#ef6c00", ink: "#171717", radiusOne: "0 50% 50% 0", radiusTwo: "50%", rotate: "-9deg", label: "VOICE / TONE / SPECTRUM" }
  },
  {
    title: "Higgsfield for Figma — Generate, Edit, Relight",
    category: "Figma 플러그인", date: "2026-07-11", url: "https://higgsfield.ai/plugins/figma",
    summary: "Figma 캔버스 안에서 이미지 생성·편집·리라이팅과 영상 생성을 연결하는 생성형 에셋 워크플로.",
    note: "콘셉트용 이미지를 만들고 끝내지 말고, 선택 영역·색보정·배경 확장처럼 디자인 시안에 맞춰 다시 제어하는 흐름을 살펴볼 자료.",
    tags: ["#Figma플러그인", "#AI이미지", "#AI영상", "#에셋워크플로"],
    visual: { background: "#d4ffec", accent: "#00a986", ink: "#171717", radiusOne: "100% 0 70% 30%", radiusTwo: "0 100% 0 100%", rotate: "-8deg", label: "GENERATE / EDIT / RELIGHT" }
  },
  {
    title: "Adobe Firefly Enterprise & GenStudio for Figma",
    category: "Figma 플러그인", date: "2026-07-11", url: "https://helpx.adobe.com/firefly/web/app-integrations/figma/firefly-plugin-for-figma.html",
    summary: "브랜드 가이드 안에서 생성형 콘텐츠를 Figma 작업 흐름에 연결하는 엔터프라이즈 플러그인 사례.",
    note: "생성 이미지의 멋보다 브랜드 자산·승인 흐름·반복 생산을 디자인 시스템과 연결하는 관점에서 참고.",
    tags: ["#Figma플러그인", "#Firefly", "#브랜드시스템", "#생성형콘텐츠"],
    visual: { background: "#ffe072", accent: "#ff4f1f", ink: "#171717", radiusOne: "50% 0 50% 50%", radiusTwo: "50%", rotate: "23deg", label: "BRAND / GENERATE / GOVERN" }
  },
  {
    title: "편집적 종이 콜라주 스타일",
    category: "AI 이미지 프롬프트", date: "2026-07-11", url: "https://openai.com/academy/image-generation/",
    summary: "종이 질감, 오프셋 인쇄, 비대칭 타이포 공간을 활용해 에디토리얼 무드를 만드는 범용 스타일 프롬프트.",
    note: "인물·제품 대신 소재와 구도를 먼저 고정하면 여러 주제에서도 시각 언어를 일관되게 유지하기 좋음.",
    prompt: "editorial paper collage, torn matte paper layers, offset print texture, asymmetric composition, generous negative space for headline, muted cobalt and vermilion accents, soft studio shadow, tactile grain, no logos, no readable text",
    tags: ["#이미지프롬프트", "#콜라주", "#에디토리얼", "#질감"],
    visual: { background: "#f2eadb", accent: "#d8432e", ink: "#172a85", radiusOne: "0", radiusTwo: "0", rotate: "-3deg", label: "PAPER / GRAIN / OFFSET" }
  },
  {
    title: "반투명 오브젝트의 제품 스틸라이프",
    category: "AI 이미지 프롬프트", date: "2026-07-11", url: "https://openai.com/academy/image-generation/",
    summary: "반투명 소재와 부드러운 광원을 이용한 깨끗한 제품 비주얼용 범용 스타일 프롬프트.",
    note: "재질·광원 방향·배경 톤을 명확히 적으면 지나친 AI 광택 대신 제어 가능한 제품 컷을 만들기 쉬움.",
    prompt: "minimal product still life, translucent resin object on a warm off-white plinth, soft daylight from upper left, subtle caustics, restrained pastel palette, 85mm lens, shallow depth of field, refined material detail, no logo, no text",
    tags: ["#이미지프롬프트", "#제품비주얼", "#3D", "#광원"],
    visual: { background: "#dfe9f4", accent: "#a2d8e8", ink: "#171717", radiusOne: "50%", radiusTwo: "50%", rotate: "14deg", label: "TRANSLUCENT / SOFT LIGHT" }
  },
  {
    title: "타이포 포스터가 살아나는 짧은 모션",
    category: "AI 영상 프롬프트", date: "2026-07-11", url: "https://help.runwayml.com/hc/en-us/articles/39789879462419-Gen-4-Video-Prompting-Guide",
    summary: "한 장의 포스터를 출발점으로, 종이 질감과 타이포 형태가 미세하게 움직이는 5초 모션 프롬프트.",
    note: "영상 프롬프트는 한 클립에 카메라 지시를 하나만 두고, 움직임과 마지막 프레임을 명시하는 편이 안정적.",
    prompt: "5-second graphic motion poster, layered paper shapes gently shift in parallax, abstract typographic blocks slide 2 centimeters and settle, locked camera, soft side light, subtle print grain, calm deliberate motion, final frame holds for one second, no readable text, no logo",
    tags: ["#영상프롬프트", "#타이포모션", "#포스터", "#정지카메라"],
    visual: { background: "#23222a", accent: "#f2ff58", ink: "#fff", radiusOne: "0 100% 0 0", radiusTwo: "0", rotate: "0deg", label: "LOCKED / PARALLAX / HOLD" }
  },
  {
    title: "제품을 따라가는 매크로 트래킹 샷",
    category: "AI 영상 프롬프트", date: "2026-07-11", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/video/video-gen-prompt-guide?authuser=00",
    summary: "제품의 소재감과 형태를 전달하는 느린 트래킹 샷 중심의 6초 영상 프롬프트.",
    note: "주체 동작과 카메라 동작을 분리하고, 트래킹 한 방향만 지정해 흔들림과 장면 전환을 줄이는 방식.",
    prompt: "6-second macro product film, a translucent object slowly rotates clockwise on a matte pedestal, camera tracks left to right at constant speed, soft rim light and warm ambient fill, shallow depth of field, precise material reflections, one continuous shot, no cuts, no logo, no text",
    tags: ["#영상프롬프트", "#제품영상", "#트래킹샷", "#매크로"],
    visual: { background: "#fdc9c3", accent: "#5d3cff", ink: "#171717", radiusOne: "100% 0 0 100%", radiusTwo: "50%", rotate: "-22deg", label: "MACRO / TRACK / CONTINUOUS" }
  },
  {
    title: "Config 2026: New Materials, New Tools and a More Expressive Canvas",
    category: "AI 디자인", date: "2026-07-11", url: "https://www.figma.com/blog/config-2026-recap/",
    summary: "코드·모션·셰이더·생성형 도구를 하나의 캔버스에서 연결하는 최근 디자인 툴의 방향.",
    note: "AI 기능을 단일 버튼으로 보이지 않게 하고, 재료·효과·편집의 연속된 흐름으로 설계하는 방식이 인상적.",
    tags: ["#생성형AI", "#모션", "#셰이더", "#디자인툴"],
    visual: { background: "#d7ff54", accent: "#4836ff", ink: "#171717", radiusOne: "49% 51% 32% 68%", radiusTwo: "6px", rotate: "-14deg", label: "MOTION / SHADER / AI" }
  },
  {
    title: "What Does the Future of Software Look Like?", category: "웹·앱 UI", date: "2026-07-11", url: "https://www.figma.com/blog/future-states/",
    summary: "AI가 사용자의 상황과 맥락에 맞춰 반응하는 미래 소프트웨어 경험에 대한 에세이.",
    note: "개인화는 추천 기능이 아니라 사용자의 인지적 피로를 줄이는 인터랙션 원칙으로 접근할 만함.",
    tags: ["#AIUX", "#개인화", "#제품전략", "#인터랙션"],
    visual: { background: "#ffd4e5", accent: "#ff5c35", ink: "#171717", radiusOne: "20% 80% 71% 29%", radiusTwo: "50%", rotate: "9deg", label: "SOFTWARE / CULTURE" }
  },
  {
    title: "4 New Ways to Go From Idea to Product With AI Tools", category: "AI 디자인", date: "2026-07-11", url: "https://www.figma.com/blog/4-new-ways-to-go-from-idea-to-product-with-ai-tools/",
    summary: "코드에서 빠르게 검증하고 캔버스에서 다듬은 뒤 다시 제품으로 연결하는 AI 시대의 프로토타이핑 사례.",
    note: "정적인 목업보다 조건·데이터·다단계 흐름을 포함한 프로토타입을 일찍 검증하는 흐름에 주목.",
    tags: ["#프로토타이핑", "#AI워크플로", "#코드투디자인", "#제품디자인"],
    visual: { background: "#d8e6ff", accent: "#214fff", ink: "#171717", radiusOne: "4px 66% 4px 66%", radiusTwo: "0", rotate: "31deg", label: "IDEA → CODE → CANVAS" }
  },
  {
    title: "Top Web Design Trends for 2026", category: "웹·앱 UI", date: "2026-07-11", url: "https://www.figma.com/resource-library/web-design-trends/",
    summary: "3D·대담한 타이포·모션·레트로퓨처리즘 등 웹 경험의 시각적 흐름을 폭넓게 정리한 가이드.",
    note: "트렌드는 장식이 아니라 계층·속도·접근성에 도움이 되는지부터 판단해 제품에 제한적으로 적용할 것.",
    tags: ["#웹트렌드", "#3D", "#타이포그래피", "#모션"],
    visual: { background: "#ff8a62", accent: "#171717", ink: "#fff9e9", radiusOne: "50%", radiusTwo: "50% 0 50% 0", rotate: "-26deg", label: "BOLD / IMMERSIVE / HUMAN" }
  },
  {
    title: "2026 Graphic Design Trends", category: "비주얼 그래픽", date: "2026-07-11", url: "https://www.behance.net/gallery/238193083/2026-Graphic-Design-Trends?locale=en_US",
    summary: "AI 추상성, 타입 콜라주, 거친 질감, 네오 레트로 등 감정과 불완전성을 활용한 그래픽 실험.",
    note: "매끈한 생성형 결과물에 질감·오프셋·의도적인 어긋남을 더해 인간적인 긴장을 만드는 방향을 참고.",
    tags: ["#그래픽트렌드", "#타입콜라주", "#질감", "#AI그래픽"],
    visual: { background: "#d6ccff", accent: "#fbff43", ink: "#171717", radiusOne: "0 100% 0 100%", radiusTwo: "50% 50% 0 50%", rotate: "45deg", label: "RAW / REAL / POETIC" }
  },
  {
    title: "From Olivetti to Instagram: A Short History of Modern Brand Design", category: "브랜드", date: "2026-07-11", url: "https://www.itsnicethat.com/features/katharina-sussek-jens-muller-the-elements-of-brand-design-taschen-publication-graphic-design-spotlight-170626",
    summary: "현대 브랜드 아이덴티티가 제품·매체·문화 속에서 변화해 온 과정을 살피는 비주얼 아티클.",
    note: "유행하는 로고 스타일보다 다양한 접점에서 반복되는 구조와 타이포 시스템을 관찰하기 좋은 자료.",
    tags: ["#브랜딩", "#아이덴티티", "#로고", "#타이포시스템"],
    visual: { background: "#f3e9d7", accent: "#d52d1d", ink: "#171717", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "IDENTITY / SYSTEM / CULTURE" }
  }
];

// 2026-07-12: 기존 항목을 AGENTS.md의 멀티유형 심사 게이트로 재심사한 결과입니다.
const reviewSeed = new Map([
  ["Better Design System 2.2 — Clinical App Shell", ["시스템화", [5, 4, 5, 5], "accept", ["정보구조", "사용자흐름", "접근성"], "실제 임상 제품의 상단 바·사이드 내비게이션·반응형 셸을 함께 공개해 복잡한 업무 화면의 탐색 구조로 전이할 수 있다.", { tokens: "반응형 셸·탐색 계층", components: "상단 바·사이드 내비게이션·앱 셸" }]],
  ["Apple HIG — Generative AI Guidance", ["실행가능성", [5, 4, 5, 5], "accept", ["콘텐츠명료성", "사용자흐름", "AI활용"], "생성 결과의 수정·피드백·사용자 통제를 실제 UI 예시와 연결해 AI 기능의 안내 문구와 행동 흐름에 바로 적용할 수 있다.", { procedure: "생성 결과 고지→수정 허용→피드백 제공", examples: "생성형 AI 인터페이스 예시" }]],
  ["Huekit — Color-to-Token Design System", ["유용성", [4, 4, 4, 5], "accept", ["브랜드일관성", "접근성"], "역할 색상에서 스케일과 토큰을 생성하는 흐름이 반복적인 컬러 시스템 구축과 정리 시간을 줄인다.", { workflow: "역할 색상 지정→스케일 생성→토큰 적용", repeated_task: "컬러 토큰 체계 구축" }]],
  ["산 안개 호수의 Art·Photo 비교 프롬프트", ["재현성", [5, 3, 5, 5], "accept", ["AI활용", "브랜드일관성"], "공식 예시의 동일 프롬프트·모델·콘텐츠 유형 설정이 함께 있어 Art와 Photo 결과 차이를 반복 검증할 수 있다.", { prompt: "A serene mountain landscape at sunrise, with mist over the hills, a calm lake, tall pine trees, and a cozy cabin with smoke rising from the chimney.", model: "Adobe Firefly Image 4", settings: "Content type: Art와 Photo 각각 생성, 동일 프롬프트" }]],
  ["정지 이미지의 재질만 살아나는 루프", ["재현성", [4, 4, 4, 5], "accept", ["AI활용", "인터랙션"], "6초 길이·잠긴 카메라·재질 움직임·첫 프레임 일치 조건과 Runway 모델 설정이 있어 절제된 루프 모션을 반복 재현할 수 있다.", { prompt: "카드 prompt 필드에 전체 문장 수록", model: "Runway Gen-4.5 Image to Video", settings: "6초·locked camera·seamless loop·no cuts" }]],
  ["JUNE — Multi-level Navigation Redesign", ["시스템화", [5, 4, 5, 5], "accept", ["정보구조", "사용자흐름"], "실제 업무 제품의 평면 탐색을 2단 사이드바로 바꾼 구조와 화면이 공개돼 복잡한 내비게이션 설계에 전이할 수 있다.", { tokens: "탐색 계층·밀도 원칙", components: "2단 사이드바·하위 경로" }]],
  ["Magazine's Playful Summary", ["스타일추출성", [5, 4, 4, 5], "accept", ["타이포그래피", "브랜드일관성"], "활자 크기·여백·이미지 크롭의 반복 규칙이 분명해 편집 콘텐츠의 재사용 가능한 시각 리듬으로 추출할 수 있다.", { mood: "유희적 에디토리얼", elements: "대형 활자·비대칭 여백·과감한 이미지 크롭" }]],
  ["Bao BFF — Open-source Fast Food Identity", ["스타일추출성", [5, 5, 5, 5], "accept", ["브랜드일관성", "타이포그래피"], "패키지·팝업·디지털 접점에 반복되는 색·타입·캐릭터 규칙이 공개돼 친근하고 빠른 푸드 브랜드 시스템으로 추출 가능하다.", { mood: "빠르고 친근한 편의점 팝", elements: "고채도 색·굵은 타입·마스코트·모듈형 패키지" }]],
  ["GPT-5.6 in Figma Make — High-fidelity First Passes", ["재현성", [5, 4, 5, 5], "accept", ["AI활용", "인터랙션"], "모델·예시 프롬프트·반응형 및 인터랙션 결과가 함께 공개돼 AI 프로토타입의 첫 시안 품질 평가에 재현 가능하게 활용된다.", { model: "GPT-5.6", prompt: "공개 예시 프롬프트", settings: "반응형 레이아웃·작동 인터랙션·오류 복구" }]],
  ["Got Skills? Make the Figma Agent a Better Collaborator", ["재현성", [5, 5, 5, 2], "quarantine", ["AI활용", "사용자흐름"], "팀 리뷰와 UX 라이팅을 스킬화하는 사례는 구체적이지만 모델·실행 설정이 없어 동일 결과를 재현하기 어렵다.", { prompt: "스킬 활용 예시는 공개", model: "미확인", settings: "미확인" }]],
  ["Parallel AI Image Edits in Figma", ["재현성", [5, 4, 5, 1], "quarantine", ["AI활용", "인터랙션"], "병렬 생성과 로딩 피드백은 비동기 UX에 유용하지만 프롬프트·모델·설정이 없어 재현성 기준을 충족하지 못한다.", { prompt: "미확인", model: "미확인", settings: "미확인" }]],
  ["Atlassian Design System — Layout Primitives in Jira", ["시스템화", [5, 3, 5, 5], "accept", ["정보구조", "사용자흐름"], "Box·Inline·Stack이 실제 Jira 화면에 적용된 예시가 있어 레이아웃 규칙을 제품 컴포넌트로 바로 전이할 수 있다.", { tokens: "레이아웃 간격과 정렬", components: "Box·Inline·Stack" }]],
  ["IBM Carbon — Component Index", ["시스템화", [5, 3, 5, 5], "accept", ["정보구조", "접근성"], "실제 제품용 컴포넌트를 상태와 형태별로 비교할 수 있어 컴포넌트 인벤토리와 시스템 감사에 바로 활용된다.", { tokens: "Carbon foundations", components: "시각적 컴포넌트 인덱스" }]],
  ["Atlassian Content Design — Information Messages", ["실행가능성", [5, 3, 5, 5], "accept", ["콘텐츠명료성", "사용자흐름"], "실제 플래그와 빈 상태의 카피·행동 유도를 함께 보여줘 정보 메시지 작성과 화면 적용 절차로 전이할 수 있다.", { procedure: "상황 정의→메시지 작성→행동 유도 연결", examples: "Jira 빈 상태·로그아웃 플래그" }]],
  ["Adobe Spectrum — Voice and Tone", ["실행가능성", [5, 3, 4, 4], "accept", ["콘텐츠명료성", "브랜드일관성"], "상황별 톤 강도를 시각적 범위로 제시해 제품과 마케팅 카피의 표현 강도를 일관되게 조율하는 데 활용된다.", { procedure: "상황에 맞는 톤 범위 선택", examples: "Spectrum 보이스·톤 시각화" }]],
  ["Higgsfield for Figma — Generate, Edit, Relight", ["유용성", [5, 4, 4, 5], "accept", ["AI활용", "사용자흐름"], "생성·선택 편집·리라이팅·영상화를 Figma 안에서 연결해 시안용 에셋 반복 제작 시간을 직접 줄인다.", { workflow: "생성→선택 편집→리라이팅→영상화", repeated_task: "시안 에셋 제작" }]],
  ["Adobe Firefly Enterprise & GenStudio for Figma", ["유용성", [5, 3, 4, 5], "accept", ["AI활용", "브랜드일관성"], "브랜드 자산과 생성·승인 흐름을 Figma에 연결해 캠페인 변형물의 반복 생산과 거버넌스에 유용하다.", { workflow: "브랜드 자산→생성→검토", repeated_task: "브랜드 콘텐츠 변형" }]],
  ["편집적 종이 콜라주 스타일", ["재현성", [4, 3, 3, 3], "quarantine", ["타이포그래피"], "프롬프트는 구체적이지만 사용 모델과 생성 설정이 없어 동일한 종이 콜라주 결과를 검증 가능하게 재현할 수 없다.", { prompt: "카드에 캡처", model: "미확인", settings: "미확인" }]],
  ["반투명 오브젝트의 제품 스틸라이프", ["재현성", [4, 3, 3, 3], "quarantine", ["AI활용"], "재질·광원·렌즈 프롬프트는 활용 가능하지만 모델과 생성 설정이 빠져 결과 일관성을 검증하기 어렵다.", { prompt: "카드에 캡처", model: "미확인", settings: "미확인" }]],
  ["타이포 포스터가 살아나는 짧은 모션", ["재현성", [4, 4, 4, 5], "accept", ["타이포그래피", "인터랙션"], "5초 길이·잠긴 카메라·패럴랙스·홀드 조건과 Gen-4 모델이 함께 있어 짧은 타이포 모션을 반복 재현할 수 있다.", { prompt: "카드에 캡처", model: "Runway Gen-4", settings: "5초·locked camera·마지막 1초 hold" }]],
  ["제품을 따라가는 매크로 트래킹 샷", ["재현성", [4, 3, 3, 3], "quarantine", ["AI활용"], "카메라와 동작 조건은 구체적이지만 정확한 모델·생성 설정 캡처가 없어 검증 가능한 반복 생성에는 부족하다.", { prompt: "카드에 캡처", model: "미확인", settings: "6초·단일 트래킹 지시는 있음" }]],
  ["Config 2026: New Materials, New Tools and a More Expressive Canvas", ["재현성", [5, 5, 5, 1], "quarantine", ["AI활용", "인터랙션"], "모션·셰이더·코드 레이어 방향은 구체적이지만 프롬프트·모델·설정이 없어 AI 결과 재현 기준을 충족하지 못한다.", { prompt: "미확인", model: "미확인", settings: "미확인" }]],
  ["What Does the Future of Software Look Like?", ["시스템화", [4, 4, 4, 3], "accept", ["사용자흐름", "AI활용"], "맥락 반응형 소프트웨어 사례가 개인화 흐름의 인지 부담을 줄이는 인터랙션 패턴을 설계하는 데 전이된다.", { tokens: "해당 없음", components: "맥락 반응형 인터랙션 패턴" }]],
  ["4 New Ways to Go From Idea to Product With AI Tools", ["재현성", [5, 4, 5, 2], "quarantine", ["AI활용", "사용자흐름"], "조직별 프로토타이핑 흐름은 검증 가능하지만 프롬프트·모델·설정 캡처가 없어 동일 작업의 재현성이 낮다.", { prompt: "미확인", model: "미확인", settings: "미확인" }]],
  ["Top Web Design Trends for 2026", ["시스템화", [4, 3, 4, 4], "accept", ["타이포그래피", "인터랙션"], "3D·타이포·모션 사례를 계층과 접근성 관점으로 비교할 수 있어 웹 UI의 제한적 패턴 도입에 활용된다.", { tokens: "시각 계층과 모션 원칙", components: "트렌드별 UI 패턴" }]],
  ["2026 Graphic Design Trends", ["스타일추출성", [4, 4, 4, 5], "accept", ["타이포그래피", "브랜드일관성"], "타입 콜라주·거친 질감·네오 레트로의 조형 요소가 분리돼 캠페인 그래픽의 재사용 가능한 무드로 추출된다.", { mood: "인간적 불완전성과 네오 레트로", elements: "타입 콜라주·질감·오프셋" }]],
  ["From Olivetti to Instagram: A Short History of Modern Brand Design", ["스타일추출성", [5, 3, 5, 5], "accept", ["브랜드일관성", "타이포그래피"], "시대별 브랜드 접점과 타이포 시스템을 비교해 로고를 넘어 반복 가능한 아이덴티티 구조를 추출할 수 있다.", { mood: "근현대 시스템 브랜딩", elements: "타이포·로고·매체 반복 구조" }]]
]);

function makeReview(item, seed) {
  const [axis, values, verdict, lenses, reason, typeBlock] = seed;
  const [completion, novelty, evidence, value] = values;
  return {
    "유형": item.category,
    "가치축_이름": axis,
    "scores": { "완성도": completion, "신규성": novelty, "근거성": evidence, "가치축": value },
    "total": completion + novelty + evidence + value,
    "verdict": verdict,
    "근거": reason,
    "metadata": { "렌즈": lenses, "커버리지_카테고리": item.category, "보안_등급": "raw_ok", "type_block": typeBlock },
    "출처": { "소스": item.url, "수집일": item.date, "수집사유": item.note }
  };
}

references.forEach((item) => {
  const seed = reviewSeed.get(item.title);
  if (seed) item.review = makeReview(item, seed);
});

const quarantinedReferences = references.filter((item) => item.review?.verdict === "quarantine");
references = references.filter((item) => item.review?.verdict === "accept");
