// 새 레퍼런스는 아래 형식을 유지해 맨 앞에 추가합니다.
// 원본 이미지 사용 권한이나 안정적인 직접 이미지 URL이 없을 때에는 visual 필드로 카드 미리보기를 만듭니다.
const dailyReference = (x) => ({
  title: x.title, category: x.category, date: "2026-08-12", url: x.url,
  summary: x.summary, note: x.note, ...(x.prompt ? { prompt: x.prompt } : {}), tags: x.tags, thumbnail: x.thumbnail, visual: x.visual,
  review: { "유형": x.category, "가치축_이름": x.axis, "scores": x.scores, "total": Object.values(x.scores).reduce((a, b) => a + b, 0), "verdict": "accept", "근거": x.basis,
    "metadata": { "정보렌즈": x.info, "시각렌즈": x.lenses, "시각아티팩트_url": x.thumbnail, "커버리지_카테고리": x.category, "보안_등급": "raw_ok", "type_block": x.typeBlock },
    "출처": { "소스": x.source, "수집일": "2026-08-12", "수집사유": x.reason } }
});
let references = [
  {
    title: "Nexvora AI Operations — 실행·비용·모델 상태를 한 밀도에", category: "웹·앱 UI", date: "2026-08-30", url: "https://dribbble.com/shots/27375900-AI-Operations-Dashboard-UI-UX-SaaS-Platform",
    summary: "워크플로 실행량, 토큰·응답 시간, 모델 정확도, 비용 절감, 실시간 활동과 시스템 상태를 한 화면에 배치한 AI 운영 대시보드.", note: "요약 KPI에서 모델·워크플로 상세와 사람의 개입이 필요한 활동으로 시선이 내려가도록 만들어 복잡한 AI 운영 정보를 과도한 탭 전환 없이 비교하게 함.", tags: ["#웹앱UI", "#AI옵스", "#대시보드", "#SaaS", "#데이터시각화", "#테크IT"], thumbnail: "https://cdn.dribbble.com/userupload/47727495/file/536c286befc5b8eed5fa78fc4150ebce.png?resize=752x&vertical=center", visual: { background: "#050b04", accent: "#61922b", ink: "#b8bfb4", radiusOne: "16px", radiusTwo: "8px", rotate: "0deg", label: "RUN / MODEL / HEALTH" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "최근 공개된 실제 대시보드 화면이 AI 워크플로·에이전트·모델·비용·활동·시스템 상태를 공통 카드와 상태 문법으로 연결해 AI 운영 제품의 정보 구조로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://cdn.dribbble.com/userupload/47727495/file/536c286befc5b8eed5fa78fc4150ebce.png?resize=752x&vertical=center", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "AI Operations overview·workflow performance·model accuracy·cost optimization·live activity·system health", "flow": "요약 지표 확인→워크플로·모델 비교→비용·활동 확인→사람 개입 판단" } }, "출처": { "소스": "https://dribbble.com/shots/27375900-AI-Operations-Dashboard-UI-UX-SaaS-Platform", "수집일": "2026-08-30", "수집사유": "최근 공개 Dribbble 시각 표본에서 전체 AI 운영 화면과 공개 대표 PNG 확인" } }
  },
  {
    title: "VORTEX 8 — 작품 파편을 화산·행성 표면으로 확대", category: "비주얼 그래픽", date: "2026-08-30", url: "https://www.behance.net/gallery/254815993/VORTEX-8-Exhibition-Poster-Design",
    summary: "작품의 근접 파편을 확대·왜곡·중첩해 용암과 미지의 행성 지형을 연상시키는 포스터·엽서·공간 그래픽 시스템.", note: "원작 이미지를 그대로 설명하지 않고 표면·크롭·레이어라는 조형 규칙으로 변환해 전시 홍보물과 공간 경험 사이에 긴장감 있는 연속성을 만듦.", tags: ["#비주얼그래픽", "#전시포스터", "#에디토리얼", "#질감", "#추상", "#서울"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3cb71c254815993.6a8e78890485f.png", visual: { background: "#191514", accent: "#ef4a2d", ink: "#f2e6d7", radiusOne: "8px", radiusTwo: "0", rotate: "-2deg", label: "CROP / DISTORT / ERUPT" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "2026-08-26 공개 프로젝트가 원작 파편의 확대·크롭·왜곡·중첩을 포스터·엽서·전시 공간에 반복 적용해 불안정한 지질 표면이라는 시각 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성"], "시각렌즈": ["에디토리얼", "하이채도", "비대칭", "필름그레인", "몽환"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3cb71c254815993.6a8e78890485f.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "format": "전시 메인 포스터·엽서·캡션 카드·공간 그래픽", "extractable_rules": "원작 표면 근접 크롭→왜곡·레이어→고채도 지질 이미지→절제된 정보 타이포" } }, "출처": { "소스": "https://www.behance.net/gallery/254815993/VORTEX-8-Exhibition-Poster-Design", "수집일": "2026-08-30", "수집사유": "2026-08-26 공개 프로젝트에서 실제 포스터·엽서·공간 이미지와 공식 대표 PNG 확인" } }
  },
  {
    title: "Azur Games Game Jam — PLAY·VIBE·CREATE 역할형 우승 키트", category: "브랜드", date: "2026-08-30", url: "https://www.behance.net/gallery/254932587/Azur-Games-Game-Jam-Hackathon",
    summary: "게임잼 참가자의 세 역할을 PLAY·VIBE·CREATE로 나누고 서로 다른 실용 물건을 하나의 표현적 이벤트 아이덴티티로 묶은 우승 키트.", note: "로고를 반복하는 굿즈 대신 사용 장면과 참가자 역할이 브랜드 메시지를 수행하게 해 행사 이후에도 남는 오브젝트로 마스터 브랜드 인지를 이어 감.", tags: ["#브랜드", "#게임", "#해커톤", "#패키지", "#이벤트", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b64654254932587.6a9184582dd8b.png", visual: { background: "#1d2030", accent: "#7f63ff", ink: "#f8f6ff", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "PLAY / VIBE / CREATE" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "2026-08-28 공개 프로젝트가 PLAY·VIBE·CREATE의 역할 언어를 의류·오브젝트·패키지에 반복하면서 Azur 마스터 브랜드를 유지해 테크 행사 키트의 역할 기반 아이덴티티로 추출할 수 있다.", "metadata": { "정보렌즈": ["브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "하이채도", "비대칭", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b64654254932587.6a9184582dd8b.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "PLAY·VIBE·CREATE 역할 언어·표현적 이벤트 그래픽·Azur 마스터 브랜드 잠금", "applications": "착용·사용·보관 가능한 우승 키트 오브젝트·패키지" } }, "출처": { "소스": "https://www.behance.net/gallery/254932587/Azur-Games-Game-Jam-Hackathon", "수집일": "2026-08-30", "수집사유": "2026-08-28 공개 프로젝트에서 실제 우승 키트·패키지 이미지와 공식 대표 PNG 확인" } }
  },
  {
    title: "Coffee Bag Promotion — 흰 배경 제품컷을 캠페인 이미지로", category: "AI 이미지 프롬프트", date: "2026-08-30", url: "https://help.runwayml.com/hc/en-us/articles/50317213804435-Creating-images-with-Nano-Banana#coffee-promotion",
    summary: "흰 배경의 가상 커피 패키지 한 장과 짧은 지시만으로 제품 형태·라벨을 유지한 프로모션 비주얼을 만든 공식 결과.", note: "짧은 캠페인 의도와 깨끗한 제품 참조만으로 어디까지 구성·소품·광원을 확장하는지 보여 줘 제품 충실도 검수용 기준 샘플로 쓰기 좋음.", prompt: "Create a promotional image for this product", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#제품광고", "#커피", "#레퍼런스이미지", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/50326012090003", visual: { background: "#e9dfd0", accent: "#6b3f2b", ink: "#241713", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "PACK / PROMOTE / PRESERVE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 흰 배경 커피 패키지 입력, 전체 지시, Nano Banana Pro 모델·해상도 설정과 결과 PNG를 제공해 제품 참조 기반 캠페인 확장을 재현할 수 있다.", "metadata": { "정보렌즈": ["브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "소프트확산광", "글로시"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/50326012090003", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Create a promotional image for this product", "tool_model": "Runway Nano Banana Pro", "params": "Reference image https://help.runwayml.com/hc/article_attachments/50326012089235·1K/2K/4K·21:9/16:9/4:3/1:1/3:4/9:16·batch 1 or 4·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/50326012090003", "fragment_map": [{ "조각": "coffee brand bag reference", "효과": "패키지 형태·라벨·제품 정체성을 입력 기준으로 유지" }, { "조각": "promotional image", "효과": "단순 제품컷을 광고용 배경·소품·조명 구성으로 확장" }, { "조각": "for this product", "효과": "시각 위계와 카메라 초점을 참조 제품에 고정" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/50317213804435-Creating-images-with-Nano-Banana", "수집일": "2026-08-30", "수집사유": "최근 갱신 공식 가이드에서 입력 제품·전체 프롬프트·모델 설정·결과 PNG 확인" } }
  },
  {
    title: "Sports Shaker Swap — 광고 레이아웃을 유지한 제품 교체", category: "AI 이미지 프롬프트", date: "2026-08-30", url: "https://help.runwayml.com/hc/en-us/articles/50985038123667-Vary-Ad#sports-shaker",
    summary: "기존 광고의 스마트폰을 스포츠 셰이커로 바꾸되 타이포그래피와 레이아웃은 그대로 유지한 네 가지 공식 광고 변형.", note: "바꿀 대상과 고정할 요소를 한 문장에 분리해 캠페인 템플릿의 정보 위계는 지키면서 제품군만 빠르게 확장하는 통제 방식이 명확함.", prompt: "Replace product with a sports shaker bottle, keep layout and typography", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#광고변형", "#제품교체", "#타이포그래피", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51015897746451", visual: { background: "#ebe8df", accent: "#c5e24a", ink: "#151515", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "SWAP / KEEP / VARIATE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 Vary Ad 가이드가 기존 광고 입력, 전체 제품 교체 지시, Nano Banana Pro 모델·4개 변형 설정과 결과 PNG를 제공해 레이아웃 보존형 제품 교체를 재현할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "그리드", "중앙집중", "소프트확산광", "글로시"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51015897746451", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Replace product with a sports shaker bottle, keep layout and typography", "tool_model": "Runway Vary Ad / Nano Banana Pro", "params": "Input ad https://help.runwayml.com/hc/article_attachments/51015897744659·4 variations·targeted edit·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51015897746451", "fragment_map": [{ "조각": "Replace product", "효과": "기존 광고의 주 피사체만 교체 대상으로 지정" }, { "조각": "sports shaker bottle", "효과": "새 제품의 실루엣·재질·사용 맥락 부여" }, { "조각": "keep layout", "효과": "카드와 제품·카피의 공간 관계 유지" }, { "조각": "keep typography", "효과": "헤드라인 위계와 서체 표현 보존" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/50985038123667-Vary-Ad", "수집일": "2026-08-30", "수집사유": "최근 갱신 공식 가이드에서 입력 광고·전체 지시·모델·4개 결과 PNG 확인" } }
  },
  {
    title: "Egret Feather Push-in — 정수리 시점으로 깃털 결을 미세 추적", category: "AI 영상 프롬프트", date: "2026-08-30", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#birds-eye-egret",
    summary: "백로의 몸과 날개를 정수리 시점으로 프레이밍하고 미세한 떨림과 느린 푸시인으로 흰 깃털의 층을 확대하는 공식 결과.", note: "주체의 아주 작은 움직임과 카메라의 느린 전진을 분리해 뷰티·소재·제품 영상처럼 표면 디테일이 중요한 숏의 속도를 제어하기 좋음.", prompt: "The central body and primary feathers of a majestic white egret, viewed from a bird's eye view directly from above, are meticulously framed, showcasing the pristine texture and layered structure of its plumage. The egret's body shivers slightly, causing a minute ripple through its feathers, suggesting preening or adjusting, while the camera performs a very slow, controlled push-in, focusing on the feather details.", tags: ["#AI영상프롬프트", "#Gen45", "#정수리시점", "#푸시인", "#깃털질감", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504725011", visual: { background: "#e7e7e3", accent: "#c9b88d", ink: "#252521", radiusOne: "50%", radiusTwo: "8px", rotate: "-1deg", label: "TOP / RIPPLE / PUSH" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공해 정수리 시점, 깃털의 미세 파동과 느린 푸시인을 분리해 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "소프트확산광", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504725011", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "The central body and primary feathers of a majestic white egret, viewed from a bird's eye view directly from above, are meticulously framed, showcasing the pristine texture and layered structure of its plumage. The egret's body shivers slightly, causing a minute ripple through its feathers, suggesting preening or adjusting, while the camera performs a very slow, controlled push-in, focusing on the feather details.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504725011", "fragment_map": [{ "조각": "bird's eye view directly from above", "효과": "백로의 몸과 날개를 수직 하향 시점으로 고정" }, { "조각": "pristine texture and layered structure", "효과": "흰 깃털의 결·겹을 주 시각 정보로 강조" }, { "조각": "body shivers slightly", "효과": "표면을 따라 번지는 미세 파동 생성" }, { "조각": "very slow, controlled push-in", "효과": "깃털 디테일로 서서히 접근" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-08-30", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·결과 GIF 확인" } }
  },
  {
    title: "Alley Dolly Back — 보행 속도와 후퇴 카메라를 일정하게 결합", category: "AI 영상 프롬프트", date: "2026-08-30", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#dolly-back-alley",
    summary: "어두운 좁은 골목을 걷는 인물 앞에서 카메라가 같은 속도로 후퇴하며 먼 도시 불빛과 실루엣을 유지하는 공식 결과.", note: "피사체 이동과 카메라 후퇴를 한 문장 안에서 대응시켜 인물 크기를 유지하면서 공간 깊이만 지속적으로 갱신하는 추적 숏에 적용 가능함.", prompt: "A dolly backward shot smoothly follows a lone figure walking purposefully down a dimly lit, narrow alleyway, their silhouette sharply defined against the distant glow of city lights.", tags: ["#AI영상프롬프트", "#Gen45", "#돌리백", "#골목", "#실루엣", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515614355", visual: { background: "#11161d", accent: "#e49a52", ink: "#f4eee5", radiusOne: "24px", radiusTwo: "0", rotate: "1deg", label: "WALK / FOLLOW / RETREAT" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공해 인물의 전진과 매끄러운 돌리백, 골목의 원근과 역광 실루엣을 함께 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515614355", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A dolly backward shot smoothly follows a lone figure walking purposefully down a dimly lit, narrow alleyway, their silhouette sharply defined against the distant glow of city lights.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515614355", "fragment_map": [{ "조각": "dolly backward shot smoothly follows", "효과": "주체 속도에 맞춰 매끄럽게 후퇴" }, { "조각": "lone figure walking purposefully", "효과": "단일 인물의 일정한 전진 동작" }, { "조각": "dimly lit, narrow alleyway", "효과": "긴 원근과 압축된 어두운 공간" }, { "조각": "silhouette ... distant glow", "효과": "후경 도시 불빛으로 인물 윤곽 분리" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-08-30", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·결과 GIF 확인" } }
  },
  {
    title: "NexaFi AI Workspace — 에이전트·업무·문서를 한 운영 화면으로", category: "AI 디자인", date: "2026-08-30", url: "https://www.behance.net/gallery/254117655/AI-Business-Management-App-UX-UI-Website-Design",
    summary: "AI 에이전트, 프로젝트·업무, 문서와 승인 흐름을 한 SaaS 워크스페이스 안에서 탐색하고 운영하도록 묶은 공개 UI 프로젝트.", note: "AI 기능을 별도 채팅에 고립시키지 않고 실제 운영 객체와 같은 정보 구조에 놓아 사람이 개입해야 할 지점과 자동화 상태를 함께 읽게 한 점이 참고됨.", tags: ["#AI디자인", "#AI에이전트", "#SaaS", "#대시보드", "#업무관리", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a18d7e254117655.6a7afec65bd35.jpg", visual: { background: "#101413", accent: "#7ca34f", ink: "#f4f7f2", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "AGENTS / WORK / APPROVE" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "2026-08-11 공개 프로젝트가 AI 에이전트·프로젝트·업무·문서·승인과 운영 지표를 실제 화면으로 제시해 AI 업무공간의 정보 구조와 인간 개입 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a18d7e254117655.6a7afec65bd35.jpg", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "운영 개요→AI 에이전트·프로젝트 탐색→업무·문서 확인→승인·사람 개입→성과 추적", "ai_role": "분산된 업무 객체와 자동화 실행 상태를 한 화면에서 연결" } }, "출처": { "소스": "https://www.behance.net/gallery/254117655/AI-Business-Management-App-UX-UI-Website-Design", "수집일": "2026-08-30", "수집사유": "최근 30일 공개 프로젝트에서 AI 업무관리의 실제 UI와 공식 대표 JPEG 확인" } }
  },
  {
    title: "Carbon Number Input — 기본·유동형·AI 상태를 토큰으로 분해", category: "웹 스타일가이드", date: "2026-08-30", url: "https://carbondesignsystem.com/components/number-input/style/",
    summary: "숫자 입력의 기본·유동형 구조, 상호작용 상태, 크기, 색·타입 토큰과 AI 생성값 되돌리기 상태를 실제 화면으로 정리한 공식 사양.", note: "하나의 입력 컴포넌트에서 레이아웃 변형과 상태 토큰, AI presence까지 같은 구조표로 연결해 제품군 전반의 구현 편차를 줄이기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#숫자입력", "#디자인토큰", "#AI상태", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/f4a85b21cb033158ceca4dae1062f530/3cbba/number-input-usage-6.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "TOKEN / STATE / AI" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "2026-08-27 갱신된 Carbon 공식 문서가 숫자 입력의 기본·유동형, 상태, 간격, 크기와 AI presence를 실제 PNG와 토큰 표로 제공해 구현 규칙으로 바로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "접근성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/f4a85b21cb033158ceca4dae1062f530/3cbba/number-input-usage-6.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "text·field·border·icon·focus·error·disabled 토큰", "components": "default·fluid number input, hover·focus·invalid·warning·disabled·read-only·AI revert" } }, "출처": { "소스": "https://carbondesignsystem.com/components/number-input/style/", "수집일": "2026-08-30", "수집사유": "2026-08-27 갱신 공식 디자인 시스템에서 실제 상태 화면·토큰·AI 변형 확인" } }
  },
  {
    title: "Carbon Breadcrumb Content — 짧은 링크와 모바일 생략 규칙", category: "콘텐츠 디자인 가이드", date: "2026-08-30", url: "https://carbondesignsystem.com/components/breadcrumb/usage/#content",
    summary: "계층형 경로의 링크 문구, 현재 페이지 표기, 오버플로 우선순위와 모바일 축약 방식을 실제 UI 예시로 설명한 공식 콘텐츠 가이드.", note: "문구 길이만 다듬는 수준을 넘어 정보 깊이와 화면 폭에 따라 무엇을 남기고 숨길지 정해 복잡한 B2B 내비게이션에 바로 적용 가능함.", tags: ["#콘텐츠디자인", "#Carbon", "#브레드크럼", "#내비게이션", "#모바일", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/e46af11dbcf54a02380e1777bafceed3/3cbba/breadcrumb-truncation.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "SHORT / HIERARCHY / OVERFLOW" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "2026-08-27 갱신된 Carbon 공식 가이드가 링크 문구·계층 순서·현재 페이지·오버플로·모바일 축약을 실제 UI PNG와 함께 제시해 복잡한 제품 내비게이션에 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": [], "시각아티팩트_url": "https://carbondesignsystem.com/static/e46af11dbcf54a02380e1777bafceed3/3cbba/breadcrumb-truncation.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "짧은 위치명 작성→상위에서 하위 순서→현재 페이지 표기 판단→중간 항목 오버플로→모바일에서 오버플로+마지막 항목 유지", "evidence": "공식 anatomy·placement·truncation·current-page 실제 화면" } }, "출처": { "소스": "https://carbondesignsystem.com/components/breadcrumb/usage/", "수집일": "2026-08-30", "수집사유": "2026-08-27 갱신 공식 문서에서 실제 경로·생략·현재 페이지 화면과 카피 규칙 확인" } }
  },
  {
    title: "Snapflow — Figma Design에 실제 FigJam 커넥터 삽입", category: "Figma 플러그인", date: "2026-08-30", url: "https://www.figma.com/community/plugin/1673094791878287168",
    summary: "FigJam의 네이티브 커넥터·도형·스티키·표·스탬프를 Figma Design 파일에 넣어 이동 시 자동 재연결되는 플로를 만드는 무료 플러그인.", note: "복사 전용 FigJam 파일을 유지하지 않고도 화면 이동에 맞춰 경로가 다시 잡히는 실제 노드를 써서 사용자 흐름 문서의 유지보수 시간을 줄임.", tags: ["#Figma플러그인", "#커넥터", "#플로차트", "#FigJam", "#사용자흐름", "#테크IT"], thumbnail: "https://www.figma.com/community/thumbnail?resource_id=1673094791878287168&resource_type=plugin", visual: { background: "#171717", accent: "#a259ff", ink: "#ffffff", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "CONNECT / MOVE / REROUTE" },
    review: { "유형": "Figma 플러그인", "가치축_이름": "유용성", "scores": { "완성도": 4, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "2026-08-27 공개된 플러그인이 실제 FigJam 커넥터 노드를 Design 파일에 삽입해 객체 이동 시 재연결하고 도형·스티키·표까지 옮기며 공식 Community 커버도 제공해 반복 플로 문서 시간을 줄인다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "콘텐츠명료성"], "시각렌즈": [], "시각아티팩트_url": "https://www.figma.com/community/thumbnail?resource_id=1673094791878287168&resource_type=plugin", "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "functions": "네이티브 FigJam 커넥터·도형·스티키·표·스탬프 삽입, 이동 시 자동 재경로", "limitation": "인스턴스 내부 중첩 레이어에는 커넥터 연결 불가" } }, "출처": { "소스": "https://forum.figma.com/suggest-a-feature-11/add-connector-lines-to-design-files-20396", "수집일": "2026-08-30", "수집사유": "2026-08-27 제작자 공개 글의 기능 설명·Community 링크와 공식 커버 URL 확인" } }
  },
  {
    title: "Figma Agent Skills — 디자인 판단을 재사용 가능한 도구로", category: "AI 디자인", date: "2026-08-29", url: "https://www.figma.com/blog/try-these-10-skills-and-show-off-your-own/#match-colors-to-tokens",
    summary: "선택한 컴포넌트의 색·상태·그라디언트·그림자를 토큰과 대조하고 편집 가능한 사양 프레임으로 정리하는 Figma 에이전트 스킬 사례.", note: "개인의 디자인 판단과 반복 검수 순서를 스킬로 고정해 색상 하드코딩 탐지부터 상태별 명세까지 같은 품질로 재실행하는 AI 디자인 워크플로로 참고하기 좋음.", tags: ["#AI디자인", "#FigmaAgent", "#디자인스킬", "#컬러토큰", "#컴포넌트문서", "#테크IT"], thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/efe4f75c324a81587d2bda37df7de8eca3c0c8fb-3070x1727.png?auto=format&fit=max&h=608&q=75&rect=1%2C0%2C3068%2C1727&w=1080", visual: { background: "#f1f2f5", accent: "#3d7cff", ink: "#1e1e1e", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "AUDIT / TOKEN / SPEC" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Figma 공식 글이 컴포넌트의 채움·선·그림자·상태를 토큰과 대조해 사양 프레임으로 만드는 실제 결과 화면과 실행 단계를 공개해 반복 가능한 디자인 감사 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "접근성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "듀오톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://cdn.sanity.io/images/599r6htc/regionalized/efe4f75c324a81587d2bda37df7de8eca3c0c8fb-3070x1727.png?auto=format&fit=max&h=608&q=75&rect=1%2C0%2C3068%2C1727&w=1080", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "컴포넌트 선택→에이전트 스킬 실행→채움·선·그림자와 토큰 대조→하드코딩 값 표시→상태별 사양 프레임 생성", "ai_role": "디자이너의 반복 검수 규칙을 재사용 가능한 스킬로 실행하고 캔버스에 편집 가능한 결과를 작성" } }, "출처": { "소스": "Figma Blog / Try these 10 skills—and show off your own", "수집일": "2026-08-29", "수집사유": "2026-08-13 공개 공식 글에서 에이전트 스킬의 실제 컴포넌트 상태·토큰 사양 화면과 실행 절차 확인" } }
  },
  {
    title: "Carbon Radio States — 단일 선택의 모든 상태를 한 계약으로", category: "웹 스타일가이드", date: "2026-08-29", url: "https://carbondesignsystem.com/components/radio-button/usage/#behaviors",
    summary: "선택·미선택뿐 아니라 포커스·비활성·읽기 전용·오류·경고와 그룹 도움말을 실제 라디오 버튼 화면으로 정리한 Carbon 공식 사양.", note: "단일 선택이라는 기본 규칙에 클릭 영역·방향키·Space 동작과 예외 상태를 함께 묶어 설정·필터·폼 컴포넌트의 구현 계약으로 옮기기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#라디오버튼", "#상태설계", "#키보드탐색", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/f2765cb54cca96fcdd234635fc3edc92/3cbba/radio-button-style-2.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "SELECT / FOCUS / ERROR" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 가이드가 선택·포커스·비활성·읽기 전용·오류·경고 상태와 마우스·키보드 동작을 실제 PNG로 제공해 단일 선택 컴포넌트 계약으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/f2765cb54cca96fcdd234635fc3edc92/3cbba/radio-button-style-2.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "group label·radio input·label·helper text와 vertical·horizontal 정렬", "states": "unselected·selected·focus·disabled·read-only·error·warning 및 Arrow·Space 키 동작" } }, "출처": { "소스": "IBM Carbon Design System / Radio button usage", "수집일": "2026-08-29", "수집사유": "2026-08-27 갱신 공식 문서에서 실제 상태 PNG·상호작용·접근성 규칙 확인" } }
  },
  {
    title: "Carbon Search Copy — 검색 범위를 짧은 힌트로 예고", category: "콘텐츠 디자인 가이드", date: "2026-08-29", url: "https://carbondesignsystem.com/components/search/usage/#content",
    summary: "플레이스홀더에서 검색 가능한 대상과 범위를 짧게 예고하고 입력어를 결과와 직접 연결하는 Carbon 공식 검색 콘텐츠 가이드.", note: "‘Search’만 반복하지 않고 네트워크·기기처럼 실제 검색 대상을 먼저 명시해 전역·페이지·컴포넌트 검색의 기대 결과를 카피 단계에서 구분할 수 있음.", tags: ["#콘텐츠디자인가이드", "#Carbon", "#검색", "#플레이스홀더", "#마이크로카피", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/2f5543ef0f0695bfd9e0fac8e1e1fa6c/3cbba/search-styles.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "SCOPE / QUERY / RESULT" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 검색 가능한 대상과 범위를 짧게 예고하는 플레이스홀더 규칙을 default·fluid 실제 PNG와 연결해 검색 카피 검수에 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/2f5543ef0f0695bfd9e0fac8e1e1fa6c/3cbba/search-styles.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "검색 범위 정의→검색 가능한 대상 명명→짧은 플레이스홀더 작성→입력어와 예상 결과의 직접성 확인→번역 길이 점검", "visible_examples": "default·fluid 검색 필드와 검색 아이콘·입력 텍스트·지우기 아이콘의 실제 배치" } }, "출처": { "소스": "IBM Carbon Design System / Search usage", "수집일": "2026-08-29", "수집사유": "2026-08-27 갱신 공식 문서에서 실제 검색 스타일 PNG와 플레이스홀더·입력어 규칙 확인" } }
  },
  {
    title: "Vikram Performance CRM — 코치의 고객·세션·성과를 한 흐름으로", category: "웹·앱 UI", date: "2026-08-29", url: "https://www.behance.net/gallery/254919485/Vikram-Performance-CRM-Dashboard-UI-%28Web-App-Design%29",
    summary: "고객 현황, 세션 일정, 상세 기록, 매출 지표를 블랙·라임 고밀도 대시보드의 네 핵심 화면으로 연결한 피트니스 CRM.", note: "요약 지표에서 고객 목록·상세·캘린더로 내려가는 정보 깊이가 명확하고 웹·모바일과 같은 브랜드 문법을 유지해 소규모 서비스 운영 도구에 전이하기 좋음.", tags: ["#웹앱UI", "#CRM", "#대시보드", "#고객관리", "#하이채도", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e50561254919485.6a91298bd6dca.jpg", visual: { background: "#111311", accent: "#c8ff36", ink: "#f4f5ef", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "CLIENT / SESSION / METRIC" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 대시보드·고객 목록·고객 상세·캘린더의 실제 고해상도 화면과 연결 흐름을 제시해 소규모 서비스 CRM의 정보 구조와 상태 패턴으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "브랜드일관성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "하이채도", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e50561254919485.6a91298bd6dca.jpg", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "dashboard overview·client list·client detail·calendar의 4개 연결 화면", "flow": "사업 지표 확인→고객 탐색→개별 훈련·세션 기록 검토→캘린더 일정 조정" } }, "출처": { "소스": "Behance / Akhil Gajula — Vikram Performance CRM Dashboard", "수집일": "2026-08-29", "수집사유": "2026-08-28 공개 프로젝트에서 4개 실제 화면·클릭 프로토타입 설명과 1400×1195 공식 대표 이미지 확인" } }
  },
  {
    title: "Estate Italiana — 회화적 풍경을 움직이는 여행 포스터로", category: "비주얼 그래픽", date: "2026-08-29", url: "https://www.behance.net/gallery/254866837/Estate-Italiana-Posters",
    summary: "이탈리아 여정의 인물과 풍경을 큰 색면·회화적 질감·절제된 타이포로 구성하고 프레임 애니메이션과 카메라 움직임까지 확장한 포스터 시리즈.", note: "정지 포스터의 원근·색면·시선 흐름을 먼저 완성한 뒤 구름·물결·인물 같은 일부 요소만 움직여 인쇄물과 소셜 모션을 같은 아트 디렉션으로 연결한 방식이 좋음.", tags: ["#비주얼그래픽", "#여행포스터", "#일러스트", "#모션그래픽", "#어스톤", "#에디토리얼"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9717b3254866837.6a8fb79b573c9.jpg", visual: { background: "#e9cf9d", accent: "#d45135", ink: "#243f4a", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "LANDSCAPE / FIGURE / MOTION" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Best of Behance 선정 프로젝트가 인물·풍경·큰 색면·회화 질감을 포스터와 실제 모션 결과에 반복 적용해 여행 캠페인의 재사용 가능한 정지·동적 그래픽 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성"], "시각렌즈": ["에디토리얼", "일러스트", "어스톤", "비대칭", "매트", "따뜻", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9717b3254866837.6a8fb79b573c9.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "system": "회화적 여행 풍경·인물 실루엣·큰 색면·절제된 에디토리얼 타이포와 선택적 프레임 애니메이션", "applications": "여행 포스터 시리즈·소셜 모션·캠페인 키비주얼" } }, "출처": { "소스": "Behance / Nahuel Bardi — Estate Italiana Posters", "수집일": "2026-08-29", "수집사유": "2026-08-27 공개 Best of Behance 프로젝트에서 정지 포스터·모션 결과와 1400×1750 공식 대표 이미지 확인" } }
  },
  {
    title: "Signal Blossom — 소프트 테크를 물리적 아티스트 셋업으로", category: "브랜드", date: "2026-08-29", url: "https://www.behance.net/gallery/254906715/Signal-Blossom",
    summary: "모듈 심벌, 고채도 팔레트, Blossom·Spark 마스코트를 오브젝트·구조물·부스 셋업으로 확장한 독립 아티스트 지원 스튜디오 아이덴티티.", note: "작가의 작품을 덮는 강한 로고 대신 전시 셋업을 연결하는 모듈·색·캐릭터 규칙을 제공해 서로 다른 창작자와 공존하는 플랫폼 브랜드에 응용하기 좋음.", tags: ["#브랜드", "#크리에이터", "#소프트테크", "#모듈시스템", "#마스코트", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/799ff2254906715.6a90e233a5f97.png", visual: { background: "#17131f", accent: "#ff5bc8", ink: "#f5f1ff", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "ARTIST / SETUP / SIGNAL" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 프로젝트가 모듈 심벌·고채도 팔레트·두 마스코트를 오브젝트·구조물·행사 셋업에 일관되게 적용해 창작자 지원 플랫폼의 확장 가능한 브랜드 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "비대칭", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/799ff2254906715.6a90e233a5f97.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "모듈형 신호 심벌·고채도 팔레트·Blossom와 Spark 마스코트·soft tech 타이포", "applications": "아티스트 앨리 부스·진열 구조·오브젝트·행사 그래픽·소셜 커뮤니케이션" } }, "출처": { "소스": "Behance / Marianna Ventura — Signal Blossom", "수집일": "2026-08-29", "수집사유": "2026-08-28 공개 프로젝트에서 브랜드 시스템·물리 셋업·마스코트 응용과 1400×1050 공식 대표 이미지 확인" } }
  },
  {
    title: "Runway Apps Hub — 생성 작업을 목적별 워크플로로 탐색", category: "AI 디자인", date: "2026-08-28", url: "https://help.runwayml.com/hc/en-us/articles/45570040112531-Creating-with-Apps#accessing-apps",
    summary: "이미지·영상·오디오 생성 기능을 목적별 앱으로 분류하고 검색·선택·입력·생성까지 한 화면 흐름으로 묶은 Runway 공식 허브.", note: "모델 이름부터 고르게 하지 않고 사용자가 만들 결과와 과업을 먼저 선택하게 해 복잡한 생성 기능의 진입 비용을 낮추는 AI 도구 정보 구조로 참고하기 좋음.", tags: ["#AI디자인", "#Runway", "#생성워크플로", "#앱허브", "#정보구조", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/54783229386259", visual: { background: "#f5f5f5", accent: "#7b61ff", ink: "#161616", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "IMAGE / VIDEO / AUDIO" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 실제 Apps 탐색 화면과 이미지·영상·오디오 분류, 검색·입력·생성 절차를 공개해 과업 중심 생성 도구 허브의 정보 구조로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/54783229386259", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "Apps 진입→Image·Video·Audio 카테고리 탐색 또는 검색→목적별 앱 선택→입력 자산·프롬프트 설정→생성", "ai_role": "범용 모델 기능을 광고·편집·애니메이션 등 목적별 생성 워크플로로 패키징" } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/45570040112531-Creating-with-Apps", "수집일": "2026-08-28", "수집사유": "2026-08-25 화면이 포함된 공식 가이드에서 최신 Apps UI와 카테고리 구조 확인" } }
  },
  {
    title: "Carbon Tile Layouts — 균일 그리드와 두 방향 메이슨리를 한 규칙으로", category: "웹 스타일가이드", date: "2026-08-28", url: "https://carbondesignsystem.com/components/tile/usage/#layouts",
    summary: "같은 높이·너비의 표준 타일과 세로·가로 메이슨리 변형을 실제 그리드 화면으로 비교하고 그룹 내 변형 혼용 기준을 정한 공식 사양.", note: "대시보드 카드의 콘텐츠 길이가 달라질 때 임의로 높이를 늘리기보다 표준·세로·가로 메이슨리 중 레이아웃 계약을 먼저 선택하게 해 반응형 카드 군집을 일관되게 설계할 수 있음.", tags: ["#웹스타일가이드", "#Carbon", "#타일", "#메이슨리", "#그리드", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/22acc83f052e9993ee2615a1cefcf1bd/3cbba/tile-usage-18.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "STANDARD / VERTICAL / HORIZONTAL" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 문서가 표준·세로 메이슨리·가로 메이슨리의 너비와 높이 관계를 실제 PNG로 비교해 반응형 타일 그룹의 레이아웃 계약으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/22acc83f052e9993ee2615a1cefcf1bd/3cbba/tile-usage-18.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "base·clickable·selectable·expandable tile과 standard·vertical masonry·horizontal masonry layout", "states": "동일 크기 표준→콘텐츠 높이 가변 세로 메이슨리→행 높이 통일 가로 메이슨리" } }, "출처": { "소스": "https://carbondesignsystem.com/components/tile/usage/", "수집일": "2026-08-28", "수집사유": "2026-08-24 갱신 공식 문서에서 세 레이아웃의 실제 PNG와 그룹 규칙 확인" } }
  },
  {
    title: "Carbon Tab Labels — 1~2단어로 다음 화면을 예고", category: "콘텐츠 디자인 가이드", date: "2026-08-28", url: "https://carbondesignsystem.com/components/tabs/usage/#content",
    summary: "탭 레이블을 짧고 구체적인 1~2단어로 쓰고 선택 후 보일 내용까지 예측하게 하며 보조 레이블·오버플로 처리 조건을 함께 정한 공식 가이드.", note: "설정·대시보드처럼 비슷한 영역명이 늘어나는 화면에서 레이블을 단순 축약하지 않고 다음 패널의 내용과 번역 길이를 함께 검수하는 기준으로 바로 적용 가능함.", tags: ["#콘텐츠디자인가이드", "#Carbon", "#탭", "#레이블", "#마이크로카피", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/111a390c40a85ea792b4d0a0b80a9bc5/3cbba/tab-usage-5.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "SHORT / SPECIFIC / SCANNABLE" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 1~2단어·구체성·번역 여유·보조 레이블 조건을 실제 contained tab 해부도와 연결해 탭 카피 검수 절차로 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/111a390c40a85ea792b4d0a0b80a9bc5/3cbba/tab-usage-5.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "탭 패널의 핵심 내용 정의→1~2단어로 명명→구체성 확인→번역 길이 점검→contained tab에서만 필요한 보조 레이블 추가", "visible_examples": "contained tab의 기본·선택 레이블과 보조 레이블 해부도" } }, "출처": { "소스": "https://carbondesignsystem.com/components/tabs/usage/", "수집일": "2026-08-28", "수집사유": "2026-08-24 갱신 공식 문서에서 실제 탭 해부도와 레이블·오버플로 규칙 확인" } }
  },
  {
    title: "Taste the Refresh — 캔 제품을 시트러스 광고 문법으로 교체", category: "AI 이미지 프롬프트", date: "2026-08-28", url: "https://help.runwayml.com/hc/en-us/articles/50985073403283-Create-Ad#citrus",
    summary: "기존 광고의 레이아웃·스타일과 시트러스 캔 제품 사진을 결합해 짧은 태그라인까지 배치한 Runway 공식 16:9 광고 결과.", note: "레이아웃 레퍼런스·제품 형태·카피를 세 입력으로 분리해 제품을 바꿔도 캠페인 구조를 유지하는 광고 변형 파이프라인으로 재사용하기 좋음.", prompt: "Taste the refresh.", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#음료광고", "#제품이미지", "#시트러스", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51009006766995", visual: { background: "#eef3d4", accent: "#f3b82f", ink: "#223318", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "CAN / CITRUS / TAGLINE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 레퍼런스 광고, 캔 제품 입력, 전체 태그라인, Nano Banana Pro·16:9·1장 설정과 결과 PNG를 제공해 음료 광고 변형을 재현할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "하이채도", "중앙집중", "글로시", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51009006766995", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Taste the refresh.", "tool_model": "Runway Create Ad / Nano Banana Pro", "params": "reference ad+reference image·16:9·1 image·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51009006766995", "fragment_map": [{ "조각": "reference ad input", "효과": "기존 광고의 레이아웃과 시각 위계 고정" }, { "조각": "canned citrus drink input", "효과": "캔 형태와 시트러스 제품 재질을 주 피사체로 교체" }, { "조각": "Taste the refresh", "효과": "상쾌함을 한 줄 광고 카피로 압축" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/50985073403283-Create-Ad", "수집일": "2026-08-28", "수집사유": "2026-08-25 갱신 공식 가이드에서 레퍼런스·제품·프롬프트·모델·설정·결과 PNG 확인" } }
  },
  {
    title: "Storm Boarding Story Panels — 한 장면을 폭풍 전후 서사로 확장", category: "AI 이미지 프롬프트", date: "2026-08-28", url: "https://help.runwayml.com/hc/en-us/articles/50985233945747-Story-Panels#aircraft",
    summary: "산악 비행기 옆 인물 이미지를 입력해 탑승과 폭풍 전개를 클로즈업·서사형 패널 두 방향으로 확장한 Runway 공식 결과.", note: "캐릭터와 장소는 입력 이미지에 고정하고 다음 행동·환경 변화만 문장으로 지시해 스토리보드 초반의 숏 다양성을 빠르게 비교하기 좋음.", prompt: "New shots in the sequence — she boards the plane as storm clouds roll in", tags: ["#AI이미지프롬프트", "#StoryPanels", "#스토리보드", "#항공", "#시네마틱", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51009744757779", visual: { background: "#66727d", accent: "#d7b26f", ink: "#f5f1e8", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "BOARD / STORM / PANELS" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 비행기 입력 이미지, 전체 장면 지시, Story Panels의 2패널·최대 48크레딧 설정과 결과 PNG를 제공해 단일 이미지의 서사 확장을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "비대칭", "필름그레인", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51009744757779", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "New shots in the sequence — she boards the plane as storm clouds roll in", "tool_model": "Runway Story Panels", "params": "input image required·2 panels·up to 48 credits·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51009744757779", "fragment_map": [{ "조각": "New shots in the sequence", "효과": "입력 장면을 반복하지 않고 다음 숏으로 확장" }, { "조각": "she boards the plane", "효과": "정지 인물에게 명확한 다음 행동 부여" }, { "조각": "storm clouds roll in", "효과": "환경 변화로 긴장과 시간 진행 추가" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/50985233945747-Story-Panels", "수집일": "2026-08-28", "수집사유": "최근 30일 공식 앱 가이드에서 입력·전체 프롬프트·생성 설정·결과 PNG 확인" } }
  },
  {
    title: "Blue Fashion Multi-Shot — 한 문장으로 프레네틱 광고 편집 설계", category: "AI 영상 프롬프트", date: "2026-08-28", url: "https://help.runwayml.com/hc/en-us/articles/51200254894483-Multi-Shot-Video#auto-fashion",
    summary: "블루 패션 첫 프레임과 한 줄 프롬프트만으로 동적 움직임과 빠른 편집을 포함한 10초 멀티숏 광고를 생성한 공식 사례.", note: "개별 컷을 미리 쓰지 않아도 전체 에너지·장르·편집 리듬을 먼저 지정해 초기 무드 필름의 숏 플랜을 빠르게 탐색하는 방식이 실무적임.", prompt: "fashion ad with dynamic motion and frenetic editing.", tags: ["#AI영상프롬프트", "#KlingPro3", "#패션광고", "#멀티숏", "#블루톤", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51285664120595", visual: { background: "#101b36", accent: "#3d7cff", ink: "#eef5ff", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "BLUE / MOTION / CUT" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 블루 첫 프레임, 전체 Auto 프롬프트, Kling Pro 3.0의 10초·16:9·720p·무음 설정과 결과 GIF를 제공해 프레네틱 패션 광고를 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용"], "시각렌즈": ["에디토리얼", "듀오톤", "고밀도", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51285664120595", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "fashion ad with dynamic motion and frenetic editing.", "tool_model": "Runway Multi-Shot Video / Kling Pro 3.0", "params": "Auto mode·first frame https://help.runwayml.com/hc/article_attachments/51285640891027·10s·16:9·720p·audio off·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51285664120595", "fragment_map": [{ "조각": "fashion ad", "효과": "제품·인물을 광고 편집 문법으로 구성" }, { "조각": "dynamic motion", "효과": "주체와 카메라에 활발한 움직임 부여" }, { "조각": "frenetic editing", "효과": "빠른 컷 전환과 높은 리듬 밀도 생성" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/51200254894483-Multi-Shot-Video", "수집일": "2026-08-28", "수집사유": "최근 30일 공식 앱 가이드에서 전체 프롬프트·첫 프레임·모델·설정·결과 GIF 확인" } }
  },
  {
    title: "Sunglasses Three-Shot — 광택·실루엣·제거 동작을 컷별 통제", category: "AI 영상 프롬프트", date: "2026-08-28", url: "https://help.runwayml.com/hc/en-us/articles/51200254894483-Multi-Shot-Video#custom-sunglasses",
    summary: "선글라스의 빛 반사, 안개 속 오버숄더, 안경을 벗는 프로필을 세 개의 명시적 숏으로 연결한 Runway 공식 멀티숏 결과.", note: "각 컷에 피사체 행동·카메라 위치·환경 변화를 하나씩만 배정해 제품 디테일과 인물 연기를 10초 안에서 충돌 없이 조율하는 구조가 참고됨.", prompt: "Shot 1: light glints off her sunglasses as the camera moves subtly. Shot 2: over the shoulder of her silhouette as the haze thickens. Shot 3: profile angle as she removes her glasses.", tags: ["#AI영상프롬프트", "#KlingPro3", "#선글라스", "#커스텀숏", "#패션필름", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51285640897043", visual: { background: "#25222a", accent: "#d2b7ff", ink: "#f5f1f8", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "GLINT / HAZE / PROFILE" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 세 숏의 전체 지시, Kling Pro 3.0 Custom 모드와 10초·16:9·720p·무음 설정, 결과 GIF를 제공해 패션 제품 멀티숏을 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "AI활용"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "하드라이트", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51285640897043", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Shot 1: light glints off her sunglasses as the camera moves subtly. Shot 2: over the shoulder of her silhouette as the haze thickens. Shot 3: profile angle as she removes her glasses.", "tool_model": "Runway Multi-Shot Video / Kling Pro 3.0", "params": "Custom mode·3 shots·10s·16:9·720p·audio off·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51285640897043", "fragment_map": [{ "조각": "light glints off her sunglasses", "효과": "첫 컷에서 제품 표면 반사를 핵심 디테일로 강조" }, { "조각": "over the shoulder of her silhouette", "효과": "두 번째 컷을 후면 실루엣 구도로 전환" }, { "조각": "as the haze thickens", "효과": "환경 밀도를 높여 컷 사이 긴장 증폭" }, { "조각": "profile angle as she removes her glasses", "효과": "마지막 컷에서 제품과 얼굴 동작을 측면으로 결산" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/51200254894483-Multi-Shot-Video", "수집일": "2026-08-28", "수집사유": "최근 30일 공식 앱 가이드에서 3숏 전체 프롬프트·모델·설정·결과 GIF 확인" } }
  },
  {
    title: "Linear Browser Testing — 에이전트 구현과 시각 검증을 한 세션으로", category: "웹·앱 UI", date: "2026-08-28", url: "https://linear.app/changelog/2026-08-20-coding-environments#browser-testing",
    summary: "코딩 에이전트가 환경을 설정하고 앱을 실행한 뒤 브라우저 흐름을 탐색하며 전후 스크린샷과 수정 검증을 같은 세션에 남기는 Linear 제품 화면.", note: "코드 완료 상태만 보여 주지 않고 사용자가 경험하는 흐름·시각 회귀·재실행 결과를 한 검토 맥락에 묶어 AI 작업의 신뢰를 높이는 패턴이 실무적임.", tags: ["#웹앱UI", "#Linear", "#브라우저테스트", "#코딩에이전트", "#시각검증", "#테크IT"], thumbnail: "https://webassets.linear.app/images/ornj730p/production/4949ed5cd70ac79c7cb914eb65373f5e494af720-3600x2160.png?auto=format&dpr=2&q=95", visual: { background: "#15141a", accent: "#7c6cff", ink: "#f5f3fa", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "RUN / BROWSE / VERIFY" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Linear 공식 변경 로그가 환경 설정, 브라우저 탐색, 전후 스크린샷, 오류 수정과 재검증을 실제 제품 PNG로 연결해 에이전트 작업 검토 흐름으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://webassets.linear.app/images/ornj730p/production/4949ed5cd70ac79c7cb914eb65373f5e494af720-3600x2160.png?auto=format&dpr=2&q=95", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "코딩 세션·환경 설정·실행 앱 브라우저·전후 스크린샷·검증 결과", "flow": "환경 감지·설정→코드 실행→브라우저 흐름 탐색→시각·상호작용 오류 발견→수정→재실행·결과 검토" } }, "출처": { "소스": "https://linear.app/changelog/2026-08-20-coding-environments", "수집일": "2026-08-28", "수집사유": "2026-08-20 공식 릴리스에서 실제 브라우저 테스트 UI와 전후 스크린샷 검증 흐름 확인" } }
  },
  {
    title: "Seedream 5.0 Layers — 한 장의 광고를 편집 가능한 투명 레이어로", category: "AI 디자인", date: "2026-08-27", url: "https://help.runwayml.com/hc/en-us/articles/54653749389971-Editing-images-with-Seedream-5-0-Layers#layer-editor",
    summary: "제품 소셜 이미지를 주체·텍스트·배경의 투명 PNG 레이어로 분리하고 같은 편집기에서 선택·숨김·재정렬·이동·크기 조절까지 수행하는 공식 흐름.", note: "평면 생성물을 다시 편집 가능한 구조로 되돌려 캠페인 변형과 현지화에 필요한 요소 교체를 생성 단계 이후에도 안전하게 이어 갈 수 있음.", tags: ["#AI디자인", "#Seedream5", "#레이어분리", "#이미지편집", "#워크플로", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/54653770971539", visual: { background: "#f3f3f3", accent: "#7b61ff", ink: "#171717", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "SPLIT / EDIT / EXPORT" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 실제 레이어 편집 화면, 입력·분리 결과와 선택·숨김·재정렬·변형·내보내기 절차를 공개해 평면 광고를 편집 가능한 구조로 되돌리는 흐름을 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/54653770971539", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "이미지 업로드→선택적 분리 프롬프트→투명 레이어 생성→선택·숨김·재정렬·이동·크기·회전 편집→합성 또는 레이어 내보내기", "ai_role": "평면 이미지의 시각 요소를 독립적인 투명 PNG 레이어로 자동 분리" } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/54653749389971-Editing-images-with-Seedream-5-0-Layers", "수집일": "2026-08-27", "수집사유": "2026-08-24 갱신 공식 가이드에서 실제 레이어 편집 UI와 입력·결과 PNG 확인" } }
  },
  {
    title: "Carbon Accordion — 제목·셰브론·패널을 한 행 규칙으로", category: "웹 스타일가이드", date: "2026-08-27", url: "https://carbondesignsystem.com/components/accordion/usage/",
    summary: "제목, 선택적 보조 문구, 셰브론, 펼침 패널의 해부 구조와 flush 정렬·크기·상태를 실제 컴포넌트 화면으로 규정한 공식 가이드.", note: "콘텐츠를 접는 것보다 먼저 제목만으로 다음 내용을 예측하게 하고 행 전체의 클릭 영역과 정렬을 통일해 설정·FAQ·상세 패널에 이식하기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#아코디언", "#컴포넌트", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/ae35a758a11df1aac5e36b906bdba7ee/3cbba/accordion-anatomy.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "TITLE / CHEVRON / PANEL" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 문서가 아코디언의 제목·보조 문구·셰브론·패널 해부도와 정렬·크기·상태를 실제 PNG로 제시해 접힘 콘텐츠 컴포넌트 규칙으로 바로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/ae35a758a11df1aac5e36b906bdba7ee/3cbba/accordion-anatomy.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "heading·optional supporting text·chevron·content panel", "states": "collapsed·expanded·hover·focus·disabled와 flush 정렬·크기 변형" } }, "출처": { "소스": "https://carbondesignsystem.com/components/accordion/usage/", "수집일": "2026-08-27", "수집사유": "공식 디자인 시스템에서 실제 아코디언 해부도·배치·상태 PNG 확인" } }
  },
  {
    title: "Carbon Button Labels — 동사와 명사로 결과를 예고", category: "콘텐츠 디자인 가이드", date: "2026-08-27", url: "https://carbondesignsystem.com/components/button/usage/#content",
    summary: "버튼 카피를 동사+명사로 쓰고 Done·Close·Cancel 같은 공통 동작만 예외로 두며 sentence case와 번역 길이까지 함께 판단하는 공식 가이드.", note: "버튼을 눌렀을 때 일어날 결과를 레이블만으로 예측하게 해 생성·저장·삭제·업로드가 섞인 복잡한 제품 화면의 CTA 검수 기준으로 바로 쓸 수 있음.", tags: ["#콘텐츠디자인가이드", "#Carbon", "#버튼카피", "#마이크로카피", "#CTA", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/b1168579e269d14034c2ea75e9237975/a5df1/button_usage_26.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "VERB / NOUN / RESULT" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 동사+명사 공식, 공통 동작 예외, sentence case와 번역 제약을 실제 Do·Don't 버튼 PNG에 연결해 CTA 카피 검수 절차로 즉시 사용할 수 있다.", "metadata": { "정보렌즈": ["콘텐츠명료성", "사용자흐름", "접근성", "타이포그래피"], "시각렌즈": ["미니멀", "모노톤", "여백중심", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/b1168579e269d14034c2ea75e9237975/a5df1/button_usage_26.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "버튼 결과 확인→동사+명사 작성→공통 동작 예외 적용→sentence case 확인→좁은 UI와 번역 길이 점검", "visible_examples": "동사+명사 레이블을 쓰는 Do와 명사만 쓰는 Don't 비교" } }, "출처": { "소스": "https://carbondesignsystem.com/components/button/usage/#content", "수집일": "2026-08-27", "수집사유": "공식 가이드에서 실제 버튼 카피 Do·Don't PNG와 실행 가능한 레이블 규칙 확인" } }
  },
  {
    title: "Source → Design — HTML·React 화면을 편집 가능한 Figma 레이어로", category: "Figma 플러그인", date: "2026-08-27", url: "https://www.figma.com/community/plugin/1671982756700161071",
    summary: "HTML 파일과 React·Next.js·Vue·Svelte 프로젝트 ZIP을 불러와 텍스트·색·타이포·레이아웃이 보존된 구조화 Figma 레이어로 변환하는 플러그인.", note: "코드가 먼저 생겼거나 원본 디자인이 사라진 상황에서 화면을 캡처로 고정하지 않고 다시 선택·수정 가능한 디자인 재료로 돌려놓는 왕복 경로가 실무적임.", tags: ["#Figma플러그인", "#HTMLtoFigma", "#React", "#디자인투코드", "#레이어", "#테크IT"], thumbnail: "https://uploads-us-west-2.insided.com/figma-en/attachment/50dba75d-f360-4655-abbf-4a3b5f27728f.png", visual: { background: "#171717", accent: "#a6ffcb", ink: "#f7f7f7", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "CODE / IMPORT / EDIT" },
    review: { "유형": "Figma 플러그인", "가치축_이름": "유용성", "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Figma 공식 포럼의 제작자 게시물이 실제 실행 화면과 Community 링크를 제공하고 HTML·React·Next.js·Vue·Svelte의 구조화 레이어 변환 범위를 명시해 코드 화면 재구축 시간을 반복 절감할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "AI활용"], "시각렌즈": [], "시각아티팩트_url": "https://uploads-us-west-2.insided.com/figma-en/attachment/50dba75d-f360-4655-abbf-4a3b5f27728f.png", "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "input": "로컬 HTML 파일 또는 React·Next.js·Vue·Svelte 프로젝트 ZIP", "output": "텍스트·색·타이포그래피·레이아웃이 보존된 편집 가능한 Figma 레이어" } }, "출처": { "소스": "https://forum.figma.com/showcase-your-work-14/figma-plugin-source-design-turn-html-and-frontend-projects-into-editable-figma-layers-57120", "수집일": "2026-08-27", "수집사유": "2026-08-20 Figma 공식 포럼 게시물에서 Community 링크와 실제 플러그인 실행 이미지 확인" } }
  },
  {
    title: "Effortless Elegance — 주얼리 제품과 레퍼런스 광고를 한 장으로", category: "AI 이미지 프롬프트", date: "2026-08-27", url: "https://help.runwayml.com/hc/en-us/articles/50985073403283-Create-Ad#bracelet",
    summary: "팔찌 제품 사진과 기존 광고의 레이아웃·스타일을 결합하고 짧은 태그라인을 정확히 배치한 Runway 공식 16:9 광고 결과.", note: "제품 형태는 별도 입력으로, 구성과 무드는 광고 레퍼런스로, 메시지는 한 줄 프롬프트로 분리해 동일 캠페인의 제품 교체형 변형을 빠르게 설계하기 좋음.", prompt: "Effortless elegance. Made to last.", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#주얼리광고", "#제품이미지", "#타이포그래피", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51009006765075", visual: { background: "#d8c7ad", accent: "#8c6b48", ink: "#2b2118", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "PRODUCT / LAYOUT / TAGLINE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 레퍼런스 광고, 팔찌 제품 입력, 전체 태그라인 프롬프트, Nano Banana Pro·16:9·1장 설정과 결과 PNG를 제공해 제품 교체형 광고를 재현할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "글로시", "럭셔리"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51009006765075", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Effortless elegance. Made to last.", "tool_model": "Runway Create Ad / Nano Banana Pro", "params": "Reference ad https://help.runwayml.com/hc/article_attachments/51008950818707·product image https://help.runwayml.com/hc/article_attachments/51008950819219·16:9·1 image·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51009006765075", "fragment_map": [{ "조각": "reference ad input", "효과": "기존 광고의 레이아웃·스타일·구성 문법을 고정" }, { "조각": "bracelet product image", "효과": "주얼리의 형태와 재질을 주 피사체로 교체" }, { "조각": "Effortless elegance", "효과": "절제된 럭셔리 톤의 헤드라인 생성" }, { "조각": "Made to last", "효과": "내구성과 지속성을 보조 메시지로 결합" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/50985073403283-Create-Ad", "수집일": "2026-08-27", "수집사유": "2026-08-25 갱신 공식 가이드에서 레퍼런스·제품·전체 프롬프트·모델·설정·결과 PNG 확인" } }
  },
  {
    title: "Winter Collection Igloo — 여름 광고를 블루·화이트 겨울 캠페인으로", category: "AI 이미지 프롬프트", date: "2026-08-27", url: "https://help.runwayml.com/hc/en-us/articles/50985038123667-Vary-Ad#winter-collection",
    summary: "기존 여름 세일 광고의 구조를 유지하면서 팔레트를 블루·화이트로 바꾸고 카피와 배경을 Winter Collection·이글루로 전환한 공식 변형 결과.", note: "색·카피·장소를 한 번에 바꾸되 광고의 정보 위계는 입력 이미지에 맡겨 시즌 전환 캠페인의 통제 범위와 유지 범위를 분명하게 나눔.", prompt: "Update color palette to cool blues and whites, change copy and visual style to 'Winter Collection', change the location to an igloo.", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#블루톤", "#광고변형", "#시즌캠페인", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51015897739795", visual: { background: "#dcecf4", accent: "#2f76b7", ink: "#123049", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "BLUE / WINTER / IGLOO" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 여름 광고 입력, 전체 변형 지시, Nano Banana Pro 모델과 블루·화이트 이글루 결과 PNG를 제공해 시즌 캠페인 전환을 재현할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "듀오톤", "중앙집중", "소프트확산광", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51015897739795", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Update color palette to cool blues and whites, change copy and visual style to 'Winter Collection', change the location to an igloo.", "tool_model": "Runway Vary Ad / Nano Banana Pro", "params": "Input ad https://help.runwayml.com/hc/article_attachments/51015897738515·selected directions color palette/copy/visual style/location·4 variations·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51015897739795", "fragment_map": [{ "조각": "cool blues and whites", "효과": "광고 전체를 명확한 블루·화이트 냉색 팔레트로 전환" }, { "조각": "Winter Collection", "효과": "계절 메시지와 타이포의 의미를 겨울 캠페인으로 변경" }, { "조각": "change the location to an igloo", "효과": "제품 주변을 눈과 얼음의 겨울 환경으로 교체" }, { "조각": "input summer sale ad", "효과": "기존 레이아웃과 정보 위계는 참조로 유지" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/50985038123667-Vary-Ad", "수집일": "2026-08-27", "수집사유": "2026-08-25 갱신 공식 가이드에서 전체 지시·모델·설정·블루톤 결과 PNG 확인" } }
  },
  {
    title: "Driver Window Push-in — 설원 자동차에서 운전자 안경까지 연속 진입", category: "AI 영상 프롬프트", date: "2026-08-27", url: "https://help.runwayml.com/hc/en-us/articles/53031657806611-Creating-with-Gemini-Omni-Flash#car-window",
    summary: "설원 위 자동차 첫 프레임에서 운전석 창문 안으로 유동적으로 진입하고 참조 안경을 쓴 운전자까지 한 번의 끊김 없는 숏으로 연결한 공식 결과.", note: "첫 프레임은 공간과 차의 형태, 참조 이미지는 제품 외형, 문장은 카메라 경로와 연속성을 담당해 자동차·웨어러블 협업 영상의 역할 분리가 명확함.", prompt: "Camera fluidly pushes into the driver's side window where a man wearing the glasses from @Image 1 is driving the car with snowy hills in the background. Single, continuous shot", tags: ["#AI영상프롬프트", "#GeminiOmniFlash", "#자동차", "#푸시인", "#연속숏", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/53056853153171", visual: { background: "#d8e8ef", accent: "#6294af", ink: "#172d39", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "CAR / WINDOW / PUSH IN" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 자동차 첫 프레임, 안경 참조, 전체 카메라 프롬프트, Gemini Omni Flash의 3~10초·720p 설정과 결과 GIF를 제공해 설원 자동차에서 운전자까지의 연속 진입 숏을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용"], "시각렌즈": ["에디토리얼", "차가움", "소프트확산광", "중앙집중", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53056853153171", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Camera fluidly pushes into the driver's side window where a man wearing the glasses from @Image 1 is driving the car with snowy hills in the background. Single, continuous shot", "tool_model": "Runway Gemini Omni Flash / Frames", "params": "First frame https://help.runwayml.com/hc/article_attachments/53056853147923·reference image https://help.runwayml.com/hc/article_attachments/53056836843155·3–10 seconds·720p·auto 16:9 or 9:16·10 credits/sec·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/53056853153171", "fragment_map": [{ "조각": "fluidly pushes into the driver's side window", "효과": "차량 외부에서 운전석 내부까지 끊김 없이 진입" }, { "조각": "wearing the glasses from @Image 1", "효과": "참조 제품의 외형을 운전자 얼굴에 결합" }, { "조각": "snowy hills in the background", "효과": "차량 밖 설원 배경의 공간 연속성 유지" }, { "조각": "Single, continuous shot", "효과": "중간 컷 없이 하나의 카메라 이동으로 고정" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/53031657806611-Creating-with-Gemini-Omni-Flash", "수집일": "2026-08-27", "수집사유": "2026-08-24 갱신 공식 가이드에서 첫 프레임·참조·전체 프롬프트·모델 설정·결과 GIF 확인" } }
  },
  {
    title: "Fire Palms Conditional Edit — 손바닥 방향에 맞춰 불꽃을 켜고 끄기", category: "AI 영상 프롬프트", date: "2026-08-27", url: "https://help.runwayml.com/hc/en-us/articles/53031657806611-Creating-with-Gemini-Omni-Flash#fire-palms",
    summary: "기존 손동작 영상의 방과 인물은 유지하면서 손바닥이 위를 볼 때 불꽃이 생기고 아래를 향하면 사라지도록 조건부 효과와 어두운 환경을 더한 공식 편집 결과.", note: "효과의 발생 조건을 물체 위치가 아니라 손의 방향 변화에 묶어 퍼포먼스·제품 데모·마법적 인터랙션 영상에서 원본 동작과 합성 효과를 동기화하기 좋음.", prompt: "Add fire to the palms of their hands that disappears when their palms face downwards. Make the room dark.", tags: ["#AI영상프롬프트", "#GeminiOmniFlash", "#비디오편집", "#조건부효과", "#불꽃", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/53056853159571", visual: { background: "#1c1514", accent: "#ff7a32", ink: "#fff1df", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "PALM / FIRE / DARK" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 원본 영상, 전체 조건부 편집 프롬프트, Gemini Omni Flash의 입력 제한·720p 설정과 결과 GIF를 제공해 손 방향과 불꽃의 발생·소멸을 동기화할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용"], "시각렌즈": ["에디토리얼", "하이채도", "중앙집중", "하드라이트", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53056853159571", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Add fire to the palms of their hands that disappears when their palms face downwards. Make the room dark.", "tool_model": "Runway Gemini Omni Flash / Edit Video", "params": "Input video https://help.runwayml.com/hc/article_attachments/53056853156499·input under 10 seconds/100 MB·output 3–10 seconds·720p·auto 16:9 or 9:16·10 credits/sec plus input·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/53056853159571", "fragment_map": [{ "조각": "Add fire to the palms", "효과": "양손 중심에 추적되는 불꽃 효과 생성" }, { "조각": "disappears when their palms face downwards", "효과": "손바닥 방향을 효과 종료 조건으로 연결" }, { "조각": "Make the room dark", "효과": "배경 노출을 낮춰 불꽃의 키라이트 대비 강화" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/53031657806611-Creating-with-Gemini-Omni-Flash", "수집일": "2026-08-27", "수집사유": "2026-08-24 갱신 공식 가이드에서 입력 영상·전체 편집 프롬프트·모델 설정·결과 GIF 확인" } }
  },
  {
    title: "UMO 5 Electrocar — 이동 전·차내·모바일을 잇는 EV 디지털 경험", category: "웹·앱 UI", date: "2026-08-27", url: "https://www.behance.net/gallery/254462743/UMO-electrocar",
    summary: "전기 크로스오버의 제품 소개, 태블릿형 차내 인터페이스와 모바일 제어 화면을 어두운 차량 비주얼과 한 시스템으로 묶은 공개 UI/UX 프로젝트.", note: "차량 구매 전 정보와 탑승 중 제어, 원격 상태 확인을 동일한 컬러·카드·상태 문법으로 연결해 하드웨어와 서비스의 경험 단절을 줄이는 방식이 참고됨.", tags: ["#웹앱UI", "#전기차", "#모빌리티", "#차량UI", "#모바일앱", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7deb98254462743.6a846ca70d902.png", visual: { background: "#050505", accent: "#d7ff4f", ink: "#f5f5f5", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "DISCOVER / DRIVE / CONTROL" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "2026-08-19 공개 프로젝트가 EV 소개, 태블릿형 차내 화면과 모바일 제어 화면을 실제 이미지로 제공해 구매 전·탑승 중·원격 제어를 잇는 모빌리티 UI 패턴으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "브랜드일관성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "글로시", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7deb98254462743.6a846ca70d902.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "EV 제품 소개·차내 태블릿 인터페이스·모바일 차량 제어·상태 화면", "flow": "차량 탐색→기능 이해→탑승 중 제어→모바일 원격 상태 확인" } }, "출처": { "소스": "https://www.behance.net/gallery/254462743/UMO-electrocar", "수집일": "2026-08-27", "수집사유": "2026-08-19 공개 프로젝트에서 실제 차량·태블릿·모바일 UI 이미지와 공식 대표 PNG 확인" } }
  },
  {
    title: "D23 Disney+ × Hulu Travel Posters — 스트리밍 세계를 여행 포스터로", category: "비주얼 그래픽", date: "2026-08-27", url: "https://www.behance.net/gallery/254420241/Official-D23-Travel-Posters-(DisneyHulu)",
    summary: "Disney+와 Hulu의 콘텐츠 세계를 목적지처럼 재해석해 제한 팔레트, 대형 타이틀, 풍경 실루엣과 빈티지 관광 포스터 문법으로 통일한 D23 공식 시리즈.", note: "서로 다른 작품의 장면을 장소·색·실루엣·타이포라는 공통 구조로 압축해 대규모 콘텐츠 브랜드가 다양성과 시리즈 일관성을 동시에 만드는 방법을 보여 줌.", tags: ["#비주얼그래픽", "#여행포스터", "#에디토리얼", "#일러스트", "#스트리밍", "#캠페인"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/812472254420241.6a83524174748.jpg", visual: { background: "#24344a", accent: "#e7b85c", ink: "#f8ead2", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "WORLD / PLACE / POSTER" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Disney+·Hulu D23 공식 프로젝트가 여러 콘텐츠 세계를 제한 팔레트·대형 타이틀·풍경 실루엣의 반복 구조로 제시해 캠페인용 시리즈 포스터 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "일러스트", "듀오톤", "중앙집중", "필름그레인", "몽환"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/812472254420241.6a83524174748.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "format": "콘텐츠 세계별 세로형 빈티지 여행 포스터 시리즈", "extractable_rules": "제한 팔레트·풍경 실루엣·장소형 헤드라인·동일 여백과 로고 잠금" } }, "출처": { "소스": "https://www.behance.net/gallery/254420241/Official-D23-Travel-Posters-(DisneyHulu)", "수집일": "2026-08-27", "수집사유": "2026-08-17 공개된 Disney+·Hulu D23 공식 포스터 시리즈와 대표 JPEG 확인" } }
  },
  {
    title: "Vanta Logistics — 이동 경로를 청록·오렌지 운영 그래픽으로", category: "브랜드", date: "2026-08-27", url: "https://www.behance.net/gallery/254856331/Brand-Identity-Vanta-Logistics",
    summary: "청록·오렌지 팔레트와 방향성 있는 선·모티프를 차량, 포장, 유니폼, 오피스, 디지털 화면에 반복 적용한 물류 브랜드 아이덴티티.", note: "속도만 강조하는 물류 비주얼 대신 이동 경로와 운영 접점을 하나의 그래픽 문법으로 묶어 현장 자산과 고객 화면의 브랜드 인지를 함께 관리함.", tags: ["#브랜드", "#물류", "#아이덴티티", "#모빌리티", "#패턴", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/08d291254856331.6a8f4aa634e36.jpg", visual: { background: "#0f4d50", accent: "#ff7a3d", ink: "#f6f1e8", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "ROUTE / MOVE / DELIVER" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 4, "신규성": 4, "근거성": 4, "가치축": 4 }, "total": 16, "verdict": "accept", "근거": "2026-08-26 공개 프로젝트가 청록·오렌지 팔레트와 방향성 그래픽을 차량·포장·유니폼·오피스·디지털 화면에 반복 적용해 물류 서비스의 이동 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "듀오톤", "비대칭", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/08d291254856331.6a8f4aa634e36.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "청록·오렌지 팔레트·방향성 선·반복 모티프·굵은 워드마크", "applications": "차량·포장 박스·유니폼·오피스 문구·디지털 화면" } }, "출처": { "소스": "https://www.behance.net/gallery/254856331/Brand-Identity-Vanta-Logistics", "수집일": "2026-08-27", "수집사유": "2026-08-26 공개 프로젝트에서 물류 브랜드의 차량·포장·유니폼·오피스·디지털 적용 이미지와 대표 JPEG 확인" } }
  },
  {
    title: "PULSE AI Fitness Coach — 오늘의 상태를 운동 계획으로 번역", category: "AI 디자인", date: "2026-08-26", url: "https://www.behance.net/gallery/254736673/PULSE-AI-Fitness-Coach-Mobile-App-UXUI-Case-Study",
    summary: "에너지 수준·가용 시간·목표를 입력하면 AI가 당일 운동을 구성하고 실행·완료·진행 추적까지 이어 주는 모바일 코칭 흐름.", note: "고정 루틴 대신 사용자의 오늘 상태를 먼저 묻고 생성 결과를 실제 운동과 기록으로 연결해 개인화가 일회성 추천에 그치지 않는 구조가 참고됨.", tags: ["#AI디자인", "#피트니스", "#개인화", "#모바일앱", "#사용자흐름", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7650bf254736673.6a8c5b132d63a.png", visual: { background: "#111411", accent: "#b7f44a", ink: "#f5f7f2", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "CHECK / GENERATE / TRAIN" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 4, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "공개 케이스가 에너지·시간·목표 입력부터 AI 운동 생성, 실행, 완료와 진행 추적까지의 실제 화면을 제공해 상태 기반 코칭 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7650bf254736673.6a8c5b132d63a.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "오늘의 에너지·가용 시간·목표 설정→AI 운동 생성→운동 실행→완료→진행 추적", "ai_role": "고정 루틴을 강요하지 않고 당일 컨디션과 제약을 운동 구성으로 변환" } }, "출처": { "소스": "Behance / Ashok Kumar Gupta", "수집일": "2026-08-26", "수집사유": "2026-08-24 공개 프로젝트에서 전체 AI 운동 흐름과 공식 대표 PNG 확인" } }
  },
  {
    title: "Carbon Structured List — 읽기와 선택을 같은 행 문법으로", category: "웹 스타일가이드", date: "2026-08-26", url: "https://carbondesignsystem.com/components/structured-list/usage/",
    summary: "기본·선택형 목록의 높이, hang·flush 정렬, 라디오 아이콘 기반 선택 상태와 키보드 이동을 실제 화면으로 규정한 공식 컴포넌트 가이드.", note: "데이터 테이블보다 가벼운 비교·선택 상황을 명확히 분리하고 행 전체 클릭과 방향키 이동까지 계약화해 가격표·설정 목록의 공통 기반으로 쓰기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#구조화목록", "#선택상태", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/715b0d72629a63089da7f017407581c5/3cbba/structured-list-usage-sizing.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "ROW / ALIGN / SELECT" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 문서가 기본·선택형 목록의 높이, 정렬, 아이콘 위치, 클릭 영역과 키보드 상태를 실제 PNG로 제시해 목록 컴포넌트 규칙으로 바로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/715b0d72629a63089da7f017407581c5/3cbba/structured-list-usage-sizing.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "default·selectable structured list, radio indicator, row, column header", "states": "enabled·hover·focus·selected·disabled·skeleton과 Tab·Space·방향키 이동" } }, "출처": { "소스": "IBM Carbon Design System / Structured list usage", "수집일": "2026-08-26", "수집사유": "2026-08-24 갱신 공식 문서에서 실제 크기·정렬·선택 상태 PNG 확인" } }
  },
  {
    title: "Carbon Tooltip Copy — 사라지는 정보와 필수 안내를 분리", category: "콘텐츠 디자인 가이드", date: "2026-08-26", url: "https://carbondesignsystem.com/components/tooltip/usage/#content",
    summary: "툴팁은 짧고 구체적인 보조 정보에만 쓰고, 과업 필수 안내·링크·버튼은 helper text나 toggletip으로 옮기는 Do·Don't 가이드.", note: "문장 길이보다 정보의 지속성과 상호작용 필요 여부를 먼저 판정하게 해 아이콘 레이블·용어 설명·도움말 카피 검수에 바로 적용 가능함.", tags: ["#콘텐츠디자인가이드", "#Carbon", "#툴팁", "#도움말", "#마이크로카피", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/b52705e4a8cce6a23930785eb17a83a1/6e9cd/tooltip-usage-3-do.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "BRIEF / OPTIONAL / DIRECT" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 필수 정보·상호작용 요소·짧은 기능 설명의 분기 기준을 실제 Do·Don't PNG와 연결해 도움말 카피 검수 절차로 즉시 사용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/b52705e4a8cce6a23930785eb17a83a1/6e9cd/tooltip-usage-3-do.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "정보가 과업 필수인지 판정→지속 노출은 helper text→상호작용은 toggletip→툴팁은 1~2단어 기능명 또는 짧은 완결문", "visible_examples": "필수 안내를 helper text로 노출하는 Do와 툴팁에 숨기는 Don't 비교" } }, "출처": { "소스": "IBM Carbon Design System / Tooltip usage", "수집일": "2026-08-26", "수집사유": "2026-08-24 갱신 공식 문서에서 실제 카피 Do·Don't PNG와 접근성 분기 확인" } }
  },
  {
    title: "Claymation Portrait — 사진의 인물 구조를 점토 질감으로", category: "AI 이미지 프롬프트", date: "2026-08-26", url: "https://help.runwayml.com/hc/en-us/articles/50984425962131-Stylize-Image#claymation",
    summary: "인물 사진의 구도와 특징을 입력으로 고정하고 Claymation 프리셋과 동일한 짧은 지시를 결합해 손으로 빚은 듯한 3D 초상으로 바꾼 공식 결과.", note: "주체 동일성은 참조 이미지에 맡기고 재질·표현만 한 단어로 분리해 캐릭터 캠페인의 사진→3D 변환 범위를 빠르게 탐색하기 좋음.", prompt: "Claymation", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#클레이모피즘", "#3D", "#캐릭터", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51000379253395", visual: { background: "#e8d6c6", accent: "#ef8354", ink: "#2c2521", radiusOne: "50%", radiusTwo: "24px", rotate: "2deg", label: "PORTRAIT / CLAY / PRESERVE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "Runway 공식 앱 가이드가 인물 입력 이미지, Claymation 프리셋·전체 프롬프트, Nano Banana Pro 모델과 결과 PNG를 제공해 사진 구조를 유지한 점토 렌더 변환을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["클레이모피즘", "3D", "중앙집중", "매트", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51000379253395", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Claymation", "tool_model": "Runway Stylize Image / Nano Banana Pro", "params": "Input image https://help.runwayml.com/hc/article_attachments/51000387499155·Claymation preset·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51000379253395", "fragment_map": [{ "조각": "portrait input image", "효과": "인물의 구도·얼굴 특징·의상 구조를 참조로 고정" }, { "조각": "Claymation preset", "효과": "형태를 둥근 점토 볼륨과 손으로 빚은 표면으로 변환" }, { "조각": "Claymation", "효과": "프리셋의 점토 재질 방향을 텍스트로 재강조" }] } }, "출처": { "소스": "Runway / Stylize Image", "수집일": "2026-08-26", "수집사유": "최근 공개 공식 앱 가이드에서 입력·프리셋·전체 프롬프트·모델·결과 PNG 확인" } }
  },
  {
    title: "Y2K Chrome Portal — 한 장의 블루 인물을 9개 장면으로", category: "AI 이미지 프롬프트", date: "2026-08-26", url: "https://help.runwayml.com/hc/en-us/articles/50984345992467-Cinematic-Brainstorm#y2k-portal",
    summary: "블루톤 인물 이미지를 기준으로 Y2K 크롬 트라이벌 포털 진입 장면을 9개 시네마틱 구도로 확장한 공식 Cinematic Brainstorm 결과.", note: "입력의 색과 인물은 유지하면서 포털 소재·시대감·행동만 짧게 지시해 뮤직 비디오와 테크 캠페인의 샷 탐색 보드로 전환하기 좋음.", prompt: "she enters a y2k chrome tribal-style portal.", tags: ["#AI이미지프롬프트", "#NanoBanana", "#블루톤", "#Y2K", "#크롬", "#시네마틱", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51017731300755", visual: { background: "#173a66", accent: "#75d6ff", ink: "#f4fbff", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "BLUE / PORTAL / NINE SHOTS" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 블루 입력 이미지, 전체 장면 프롬프트, Nano Banana 모델·9개 출력 설정과 결과 PNG를 제공해 냉색 크롬 포털 시퀀스를 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "브랜드일관성"], "시각렌즈": ["Y2K", "3D", "듀오톤", "중앙집중", "글로시", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51017731300755", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "she enters a y2k chrome tribal-style portal.", "tool_model": "Runway Cinematic Brainstorm / Nano Banana", "params": "Input image https://help.runwayml.com/hc/article_attachments/51017716330771·9 scene variations·up to 221 credits·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51017731300755", "fragment_map": [{ "조각": "blue input image", "효과": "블루·시안 컬러 키와 인물 정체성을 장면군에 유지" }, { "조각": "she enters", "효과": "정적 인물에 포털을 통과하는 방향성 있는 행동 부여" }, { "조각": "y2k chrome", "효과": "반사 금속과 2000년대 미래주의 소재 적용" }, { "조각": "tribal-style portal", "효과": "유기적 가시 형태의 문을 장면 중심 오브제로 생성" }] } }, "출처": { "소스": "Runway / Cinematic Brainstorm", "수집일": "2026-08-26", "수집사유": "최근 공개 공식 앱 가이드에서 입력·전체 프롬프트·모델·9장 설정·결과 PNG 확인" } }
  },
  {
    title: "Fox Family Golden Dolly — 들풀 사이 전진과 시선 이동을 동기화", category: "AI 영상 프롬프트", date: "2026-08-26", url: "https://help.runwayml.com/hc/en-us/articles/50985435902483-Scene-Builder#fox-family",
    summary: "황금시간 야생화 초원의 여우 가족을 넓은 중앙 구도로 묶고 카메라 전진, 순차적 고개 회전, 키 큰 풀의 파동을 함께 설계한 공식 결과.", note: "스타일·주체·환경·구도와 카메라·캐릭터·환경 움직임을 두 단계로 분리해 가족형 브랜드 필름의 안정적 감정 숏을 조합하기 좋음.", prompt: "The fox family has a photo shoot. Style: Warm Film Stock, Golden Hour. Subject: Nestled Together, Protective Poses. Environment: Wildflower Meadow, Tall Grass. Composition: Wide Shot, Family Centered in Landscape. Camera: Slow dolly Forward Through Grass. Character: Heads Turning Towards Warm Sunlight in Sequence. Environment motion: Tall Grass Swaying in Slow Synchronized Waves.", tags: ["#AI영상프롬프트", "#SceneBuilder", "#골든아워", "#돌리인", "#동기화", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51026912190995", visual: { background: "#6e6a3d", accent: "#e7b45f", ink: "#fff8df", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "FAMILY / DOLLY / SWAY" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 장면·스타일·구도·모션 지시, 입력 이미지, Scene Builder 720p 설정과 결과 GIF를 제공해 가족 군집과 환경 움직임을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용"], "시각렌즈": ["에디토리얼", "중앙집중", "소프트확산광", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51026912190995", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "The fox family has a photo shoot. Style: Warm Film Stock, Golden Hour. Subject: Nestled Together, Protective Poses. Environment: Wildflower Meadow, Tall Grass. Composition: Wide Shot, Family Centered in Landscape. Camera: Slow dolly Forward Through Grass. Character: Heads Turning Towards Warm Sunlight in Sequence. Environment motion: Tall Grass Swaying in Slow Synchronized Waves.", "tool_model": "Runway Scene Builder", "params": "Reference image https://help.runwayml.com/hc/article_attachments/51026912190099·two-stage frame+video workflow·720p output·duration/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51026912190995", "fragment_map": [{ "조각": "Warm Film Stock, Golden Hour", "효과": "따뜻한 필름 색과 낮은 태양의 확산광 고정" }, { "조각": "Nestled Together, Protective Poses", "효과": "여우 가족을 보호적 군집 실루엣으로 결속" }, { "조각": "Slow dolly Forward Through Grass", "효과": "전경 풀을 지나 주체로 천천히 접근" }, { "조각": "Heads Turning ... in Sequence", "효과": "가족 구성원의 시선 변화를 순차적 리듬으로 생성" }, { "조각": "Tall Grass Swaying in Slow Synchronized Waves", "효과": "환경 움직임을 느린 동기화 파동으로 통제" }] } }, "출처": { "소스": "Runway / Scene Builder", "수집일": "2026-08-26", "수집사유": "최근 공개 공식 앱 가이드에서 전체 장면·모션 설정·입력 이미지·720p 결과 GIF 확인" } }
  },
  {
    title: "Coffee Steam and Stillness — 한 제품 사진을 10초 광고 숏으로", category: "AI 영상 프롬프트", date: "2026-08-26", url: "https://help.runwayml.com/hc/en-us/articles/51200316594707-Product-Shot-Video-Builder#coffee",
    summary: "흰 배경의 머그를 커피색 팔레트·재택근무자·미니멀 홈오피스·Steam and Stillness 콘셉트로 프레이밍하고 천천히 줌아웃한 공식 제품 영상.", note: "대상·고객·환경·광고 콘셉트를 먼저 고정한 뒤 단일 카메라 지시를 붙여 작은 제품 사진을 캠페인용 움직이는 키비주얼로 확장하기 좋음.", prompt: "Palette: Morning coffee ritual. Audience: Remote Workers & Home Office Professionals. Environment: Minimalist Home Office Desk. Concept: Steam and Stillness. Motion: Slow Zoom out.", tags: ["#AI영상프롬프트", "#Kling3", "#제품영상", "#커피", "#줌아웃", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51290792852115", visual: { background: "#3b2b24", accent: "#d3a66f", ink: "#fff8ef", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "MUG / STEAM / ZOOM OUT" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "Runway 공식 가이드가 제품 입력, 팔레트·고객·환경·콘셉트와 전체 모션 지시, Kling Standard 3.0의 10초·720p 설정 및 결과 GIF를 제공해 광고 숏을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "어스톤", "중앙집중", "소프트확산광", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51290792852115", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Palette: Morning coffee ritual. Audience: Remote Workers & Home Office Professionals. Environment: Minimalist Home Office Desk. Concept: Steam and Stillness. Motion: Slow Zoom out.", "tool_model": "Runway Product Shot Video Builder / Kling Standard 3.0", "params": "Product image https://help.runwayml.com/hc/article_attachments/51290835213203·10 seconds·720p·audio off·first-frame generation followed by video", "output_url": "https://help.runwayml.com/hc/article_attachments/51290792852115", "fragment_map": [{ "조각": "Morning coffee ritual", "효과": "짙은 커피색과 따뜻한 중간톤의 팔레트 설정" }, { "조각": "Remote Workers & Home Office Professionals", "효과": "소품과 공간을 재택 업무 맥락에 맞춤" }, { "조각": "Minimalist Home Office Desk", "효과": "머그 주변을 절제된 데스크 환경으로 구성" }, { "조각": "Steam and Stillness", "효과": "정지 제품과 상승 증기의 대비를 광고 콘셉트로 고정" }, { "조각": "Slow Zoom out", "효과": "제품에서 작업 환경으로 시야를 천천히 확장" }] } }, "출처": { "소스": "Runway / Product Shot Video Builder", "수집일": "2026-08-26", "수집사유": "최근 공개 공식 앱 가이드에서 제품·포지셔닝·모션·모델·10초 720p 결과 GIF 확인" } }
  },
  {
    title: "KATOM Cybersecurity SaaS — 위험 탐지를 행동 순서로", category: "웹·앱 UI", date: "2026-08-26", url: "https://www.behance.net/gallery/254745139/KATOM-Cybersecurity-SaaS-Concept-Framer-Template",
    summary: "Discover→Detect→Analyze→Fix→Monitor 흐름으로 취약점, 위협, 우선순위와 보안 상태를 하나의 반응형 SaaS 경험에 묶은 사이버보안 콘셉트.", note: "검은 기술 미학에 머물지 않고 인지부터 수정·지속 감시까지의 작업 순서를 페이지 정보 구조와 재사용 컴포넌트에 반영해 복잡한 보안 제품 설명에 참고됨.", tags: ["#웹앱UI", "#사이버보안", "#SaaS", "#대시보드", "#사용자흐름", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/372b1b254745139.6a8c7a4409e9f.png", visual: { background: "#070b12", accent: "#42d9ff", ink: "#f4f8ff", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "DISCOVER / FIX / MONITOR" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "공개 프로젝트가 보안 위험의 발견·탐지·분석·수정·감시 흐름, 반응형 화면과 재사용 컴포넌트를 함께 보여 줘 복합 SaaS 정보 구조로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "글로시", "차가움"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/372b1b254745139.6a8c7a4409e9f.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "랜딩·기능·작동 방식·보안 지표·비교·연동·가격·FAQ·CTA의 데스크톱/태블릿/모바일", "flow": "Discover→Detect→Analyze→Fix→Monitor" } }, "출처": { "소스": "Behance / adel merabet", "수집일": "2026-08-26", "수집사유": "2026-08-24 공개 프로젝트에서 실제 반응형 SaaS 화면과 공식 대표 PNG 확인" } }
  },
  {
    title: "G8 Creative Food Court — 포장 전개도를 조립형 축제 그래픽으로", category: "비주얼 그래픽", date: "2026-08-26", url: "https://www.behance.net/gallery/254698879/G8-2026",
    summary: "창의 산업을 서로 다른 요리로 비유하고 테이크아웃 상자 전개도, 가변 비례 서체와 분야별 심벌을 계속 재조립하는 축제 그래픽 시스템.", note: "20개가 넘는 프로그램의 다양성을 하나의 고정 레이아웃으로 누르지 않고 동일한 부품 세트의 조립 규칙으로 통제해 대형 행사 편집물에 전이하기 좋음.", tags: ["#비주얼그래픽", "#축제", "#가변시스템", "#패키지", "#타이포그래피"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c46d8f254698879.6a8b3708c8b7b.png", visual: { background: "#f3e24f", accent: "#e94a2f", ink: "#101010", radiusOne: "0", radiusTwo: "24px", rotate: "-3deg", label: "UNFOLD / COMBINE / REPEAT" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 포장 전개도, 세 비례의 커스텀 서체와 분야별 심벌을 실제 행사 응용에 반복해 조립형 그래픽 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "하이채도", "비대칭", "고밀도", "매트", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c46d8f254698879.6a8b3708c8b7b.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "composition": "테이크아웃 상자 전개도 기반 비정형 블록과 조립식 심벌", "sequence": "20+ 프로그램마다 부품 조합은 바꾸고 커스텀 서체·색·전개도 규칙은 반복" } }, "출처": { "소스": "Behance / odd works", "수집일": "2026-08-26", "수집사유": "2026-08-24 공개 Best of Behance 프로젝트에서 실제 행사 응용과 공식 대표 PNG 확인" } }
  },
  {
    title: "VR Toys — 가족의 안정감과 아이의 에너지를 한 워드마크로", category: "브랜드", date: "2026-08-26", url: "https://www.behance.net/gallery/254407109/VR-TOYS-Brand-Identity",
    summary: "각진 네이비 VR은 가족 기업의 신뢰를, 둥글고 다채로운 TOYS는 아이의 상상력과 움직임을 맡아 광고·패키지로 확장한 완구 브랜드.", note: "브랜드가 가진 상반된 가치에 문자 형태와 색의 역할을 각각 배정하고 실제 광고 성과를 위한 다양한 조합으로 검증한 점이 소비재 아이덴티티에 참고됨.", tags: ["#브랜드", "#완구", "#워드마크", "#컬러시스템", "#패키지", "#유희적"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5047ce254407109.6a8da38d288bd.png", visual: { background: "#f7df57", accent: "#214b9b", ink: "#17233d", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "TRUST / PLAY / EXPLORE" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "공개 프로젝트가 각진 네이비 문자와 둥근 다색 문자에 신뢰·놀이 역할을 분리하고 광고·패키지 응용에 반복해 가족형 소비재 브랜드 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "중앙집중", "매트", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5047ce254407109.6a8da38d288bd.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "각진 네이비 VR·둥근 다색 TOYS·태양과 하늘 모티프의 역할 분리", "applications": "완구 패키지·유료 광고·소셜 콘텐츠·브랜드 접점" } }, "출처": { "소스": "Behance / Guilherme de Lucas", "수집일": "2026-08-26", "수집사유": "2026-08-25 공개 프로젝트에서 워드마크 논리·실제 응용과 공식 대표 PNG 확인" } }
  },
  {
    title: "Collective AI Compliance Onboarding — 검증 전에 설명하고 예외만 사람에게", category: "AI 디자인", date: "2026-08-25", url: "https://www.behance.net/gallery/254743265/Fintech-Compliance-Services-B2B-UIUX-Collective",
    summary: "필요 서류 예고, 유효 문서 예시, 온디맨드 AI 도움말, OCR 추출값 확인을 연결해 핀테크 온보딩의 수작업 병목을 줄인 제품 흐름.", note: "AI를 자동 제출자가 아니라 이해·추출·검토 보조자로 배치하고 사용자가 OCR 값을 수정하게 해 규제형 서비스의 신뢰와 처리 속도를 함께 설계한 점이 유용함.", tags: ["#AI디자인", "#핀테크", "#OCR", "#온보딩", "#설명가능성", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0c90b1254743265.6a8c70920285a.jpg", visual: { background: "#f4efe7", accent: "#ff5b45", ink: "#171717", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "EXPLAIN / EXTRACT / VERIFY" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept", "근거": "공개 케이스가 서류 예고·시각 예시·AI 도움말·OCR 추출·사용자 확인 화면과 활성화 시간 50% 개선 결과를 연결해 규제형 AI 온보딩 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "고밀도", "여백중심", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0c90b1254743265.6a8c70920285a.jpg", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "필요 서류 예고→유효 예시 확인→업로드→OCR 추출→사용자 수정·확인→서명", "ai_role": "규정 용어를 평이하게 설명하고 문서에서 사업 정보를 추출하되 최종 제출 전 편집권을 사용자에게 유지" } }, "출처": { "소스": "Behance / Benoit Chabert — Collective", "수집일": "2026-08-25", "수집사유": "2026-08-24 공개 프로젝트에서 실제 AI 도움말·OCR·모바일 서명 화면과 공식 대표 JPEG 확인" } }
  },
  {
    title: "Carbon Popover Geometry — 팁·정렬·폭을 위치 계약으로", category: "웹 스타일가이드", date: "2026-08-25", url: "https://carbondesignsystem.com/components/popover/usage/",
    summary: "no tip·caret tip·tab tip 변형의 폭, 방향, 트리거 간격, 정렬과 모서리를 실제 Do·Don't 화면으로 규정한 Carbon 공식 사양.", note: "팝오버를 임의 좌표가 아니라 트리거와 레이어에 대한 정렬 계약으로 정의해 툴팁·메뉴·디스클로저의 공통 기반 컴포넌트로 흡수하기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#팝오버", "#정렬", "#컴포넌트", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/b995b0a866f1d8361dba46c9d12faa03/3cbba/popover-usage-1.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "2px", rotate: "1deg", label: "TIP / ALIGN / LAYER" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 문서가 세 팁 변형의 폭·방향·트리거 간격·레이어 정렬을 실제 PNG와 Do·Don't로 제공해 오버레이 기반 컴포넌트 규칙으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "접근성", "인터랙션"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/b995b0a866f1d8361dba46c9d12faa03/3cbba/popover-usage-1.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "no tip·caret tip·tab tip popover, trigger, close target, layer", "states": "top·bottom·left·right 방향, 좌우·중앙 정렬, 1~4열 폭, layer-01·02·inverse" } }, "출처": { "소스": "IBM Carbon Design System / Popover usage", "수집일": "2026-08-25", "수집사유": "2026-08-13 갱신 공식 문서에서 변형·정렬·Do/Don't 실제 PNG 확인" } }
  },
  {
    title: "Carbon Content Switcher Copy — 보기 이름을 짧은 명사구로", category: "콘텐츠 디자인 가이드", date: "2026-08-25", url: "https://carbondesignsystem.com/components/content-switcher/usage/",
    summary: "전환 뒤 보일 콘텐츠를 2~3단어 명사구로 쓰고 행동형 문구를 피하며, 넘침은 말줄임과 브라우저 툴팁으로 보완하는 실제 가이드.", note: "버튼처럼 보이는 보기 전환 레이블을 동사가 아닌 콘텐츠 이름으로 검수해 행동과 탐색의 혼동을 줄이는 짧고 실행 가능한 체크리스트임.", tags: ["#콘텐츠디자인가이드", "#Carbon", "#레이블", "#명사구", "#콘텐츠전환", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/e2b534a888aa2203348088a2338ed176/a5df1/content-switcher-usage-content-do.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "NOUN / VIEW / TOOLTIP" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 가이드가 2~3단어 명사구, 행동형 문구 금지, 말줄임·툴팁 처리 원칙을 실제 Do·Don't PNG와 연결해 보기 전환 카피 검수에 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/e2b534a888aa2203348088a2338ed176/a5df1/content-switcher-usage-content-do.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "전환 후 보일 콘텐츠 정의→2~3단어 명사구 작성→행동형 표현 제거→넘침 시 말줄임·툴팁 제공", "visible_examples": "명사구 레이블 Do와 행동형 레이블 Don't의 실제 콘텐츠 스위처 비교" } }, "출처": { "소스": "IBM Carbon Design System / Content switcher usage", "수집일": "2026-08-25", "수집사유": "2026-08-13 갱신 공식 문서에서 레이블 Do·Don't 및 넘침 화면 확인" } }
  },
  {
    title: "Annotations Manager — 뷰어도 보는 주석을 실제 레이어로", category: "Figma 플러그인", date: "2026-08-25", url: "https://www.figma.com/community/plugin/1588019164844957413",
    summary: "Figma 네이티브 주석을 볼 수 없는 뷰어를 위해 색상별 주석을 실제 캔버스 레이어로 만들고 프레임 이동과 내보내기를 지원하는 플러그인.", note: "리뷰 직전에 주석 권한 차이를 발견하는 문제를 파일 안의 보이는 레이어로 우회해 클라이언트·PM·개발자 핸드오프의 맥락 손실을 줄이는 반복 절감 도구임.", tags: ["#Figma플러그인", "#주석", "#핸드오프", "#뷰어권한", "#협업", "#테크IT"], thumbnail: "https://uploads-us-west-2.insided.com/figma-en/attachment/7de1e094-e557-4e1c-afc4-0ccaaca5db69.png", visual: { background: "#f1edff", accent: "#7c5cff", ink: "#1e1e1e", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "ANNOTATE / MOVE / EXPORT" },
    review: { "유형": "Figma 플러그인", "가치축_이름": "유용성", "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Figma 공식 포럼의 공개 실행 화면과 Community 링크가 실제 레이어 주석·색상 구분·프레임 추종·내보내기 흐름을 보여 줘 뷰어 핸드오프 반복을 직접 줄인다.", "metadata": { "정보렌즈": ["사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://uploads-us-west-2.insided.com/figma-en/attachment/7de1e094-e557-4e1c-afc4-0ccaaca5db69.png", "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "workflow": "프레임 선택→주석 유형·색상 지정→실제 레이어 생성→프레임과 함께 이동→문서·티켓용 내보내기", "repeated_task": "뷰어용 주석 복제와 리뷰·핸드오프 문서화" } }, "출처": { "소스": "Figma Forum / Annotations Manager creator post", "수집일": "2026-08-25", "수집사유": "2026-08-19 제작자 게시물에서 공식 Community 링크와 캔버스 실행 화면 확인" } }
  },
  {
    title: "Flat Vector Vase — 유리 제품 사진을 굵은 색면 그래픽으로", category: "AI 이미지 프롬프트", date: "2026-08-25", url: "https://help.runwayml.com/hc/en-us/articles/50984425962131-Stylize-Image#bold-vector",
    summary: "흰 배경의 유리 화병 제품 사진에 굵은 벡터 그래픽과 평면 색상 지시를 적용해 물성 중심 사진을 캠페인 일러스트로 전환한 공식 결과.", note: "제품 형태는 입력 이미지로 고정하고 표현 방식만 두 개의 짧은 통제어로 바꿔 동일 SKU의 소셜·포스터 그래픽 변주를 빠르게 탐색하기 좋음.", prompt: "bold vector graphic, flat colors", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#벡터그래픽", "#제품이미지", "#평면색", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51000387510419", visual: { background: "#fff5dc", accent: "#ff6a3d", ink: "#202020", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "PRODUCT / VECTOR / FLAT" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "Runway 공식 앱 가이드가 유리 화병 입력 이미지, 전체 스타일 프롬프트, 기본 Nano Banana Pro 모델과 결과 PNG를 제공해 제품 형태를 보존한 평면 벡터 변환을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "중앙집중", "매트", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51000387510419", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "bold vector graphic, flat colors", "tool_model": "Runway Stylize Image / Nano Banana Pro", "params": "Input image https://help.runwayml.com/hc/article_attachments/51000387508755·Text prompt mode·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51000387510419", "fragment_map": [{ "조각": "bold vector graphic", "효과": "사진의 연속 계조를 굵고 읽기 쉬운 벡터 윤곽으로 단순화" }, { "조각": "flat colors", "효과": "유리 반사와 배경을 제한된 평면 색상 블록으로 치환" }] } }, "출처": { "소스": "Runway / Stylize Image", "수집일": "2026-08-25", "수집사유": "최근 갱신 공식 가이드에서 입력 이미지·전체 프롬프트·기본 모델·공개 결과 PNG 확인" } }
  },
  {
    title: "Street Storyboard Relight — 거리 사진을 극적 명암의 콘티 컷으로", category: "AI 이미지 프롬프트", date: "2026-08-25", url: "https://help.runwayml.com/hc/en-us/articles/50984425962131-Stylize-Image#dramatic-storyboard",
    summary: "야외 거리 사진에 Storyboard 프리셋과 dramatic lighting 지시를 결합해 공간 구조는 유지하면서 명암과 콘티 질감만 바꾼 공식 결과.", note: "장소와 카메라는 입력 이미지로 잠그고 선화 스타일과 조명만 분리 제어해 로케이션 영상의 프리비주얼·톤 테스트를 빠르게 만들 수 있음.", prompt: "dramatic lighting", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#스토리보드", "#조명", "#프리비주얼", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51000379259923", visual: { background: "#2d2d2d", accent: "#f2c14e", ink: "#f7f4ed", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "STREET / BOARD / LIGHT" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "Runway 공식 가이드가 거리 입력 이미지, Storyboard 프리셋, 전체 조명 프롬프트, 기본 Nano Banana Pro 모델과 결과 PNG를 제공해 로케이션 콘티 리라이팅을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["일러스트", "모노톤", "비대칭", "하드라이트", "매트", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51000379259923", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "dramatic lighting", "tool_model": "Runway Stylize Image / Nano Banana Pro", "params": "Input image https://help.runwayml.com/hc/article_attachments/51000379258643·Storyboard preset·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51000379259923", "fragment_map": [{ "조각": "Storyboard preset", "효과": "사진을 프리프로덕션용 선화·톤 블록의 콘티 질감으로 전환" }, { "조각": "dramatic lighting", "효과": "주요 피사체와 동선에 강한 명암 대비와 방향광 부여" }] } }, "출처": { "소스": "Runway / Stylize Image", "수집일": "2026-08-25", "수집사유": "최근 갱신 공식 가이드에서 입력 이미지·프리셋·전체 프롬프트·기본 모델·공개 결과 PNG 확인" } }
  },
  {
    title: "Cowboy Rear at Golden Hour — 말의 비틀림으로 낙마 방향을 설계", category: "AI 영상 프롬프트", date: "2026-08-25", url: "https://help.runwayml.com/hc/en-us/articles/42460036199443-Text-to-Video-Prompting-Guide#cowboy-structure",
    summary: "황금빛 먼지 속 말이 거칠게 일어서며 몸을 비틀고 카우보이가 왼쪽으로 떨어지기 시작하는 순간을 중경·역광·실루엣으로 고정한 공식 영상.", note: "피사체·행동·방향을 먼저 쓰고 팔레트·역광·림라이트를 뒤에 묶어 복잡한 액션도 무엇이 어떻게 움직이는지 읽히게 만드는 프롬프트 구조가 실무적임.", prompt: "Medium shot of a cowboy perched on a horse in a dusty environment. The horse rears violently, its body twisting, causing the cowboy to lose his seat and begin to fall off to the left. Backlit, western epic, cinematic, high contrast, golden hour, dusty, warm amber, deep orange, rich brown, atmospheric, dramatic backlighting, rim light, silhouette, soft glow, high contrast shadows.", tags: ["#AI영상프롬프트", "#Gen45", "#액션", "#황금시간", "#역광", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47142392967955", visual: { background: "#5a321e", accent: "#e79732", ink: "#fff3df", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "REAR / TWIST / FALL" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4.5 모델 사양과 결과 GIF를 제공해 중경에서 말의 비틀림·낙마 방향·황금시간 역광을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "비대칭", "하드라이트", "필름그레인", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47142392967955", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Medium shot of a cowboy perched on a horse in a dusty environment. The horse rears violently, its body twisting, causing the cowboy to lose his seat and begin to fall off to the left. Backlit, western epic, cinematic, high contrast, golden hour, dusty, warm amber, deep orange, rich brown, atmospheric, dramatic backlighting, rim light, silhouette, soft glow, high contrast shadows.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9 1280×720·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47142392967955", "fragment_map": [{ "조각": "Medium shot ... in a dusty environment", "효과": "인물·말의 전신 행동과 먼지 공간을 함께 읽는 중경" }, { "조각": "horse rears violently, its body twisting", "효과": "수직 기립에 회전 운동을 결합해 불안정성 강화" }, { "조각": "fall off to the left", "효과": "낙마의 화면 방향을 명시해 동작 모호성 축소" }, { "조각": "golden hour ... rim light, silhouette", "효과": "황금색 역광으로 윤곽과 먼지 입자를 분리" }] } }, "출처": { "소스": "Runway / Text to Video Prompting Guide", "수집일": "2026-08-25", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델 사양·공개 결과 GIF 확인" } }
  },
  {
    title: "Needle-Felt Corgi Crash Zoom — 7초 표정 변화를 타임스탬프로", category: "AI 영상 프롬프트", date: "2026-08-25", url: "https://help.runwayml.com/hc/en-us/articles/42460036199443-Text-to-Video-Prompting-Guide#corgi-timestamps",
    summary: "마트에서 등을 보이던 니들펠트 코기가 고개를 돌리자 눈으로 급확대하고, 두 눈과 눈썹의 의심스러운 표정을 7초 구간에 나눠 배치한 공식 영상.", note: "자연어 장면 설명 뒤에 방향 전환·줌·눈·눈썹을 시간 구간별로 다시 고정해 캐릭터 리액션 숏의 박자와 클로즈업 종료점을 통제하는 방식이 유용함.", prompt: "A needle-felted orange and white Corgi character wearing a yellow, green, and orange sweater stands in a grocery store aisle, initially facing away from the lens. The Corgi abruptly turns its head to face the camera, triggering a rapid crash zoom directly into its shiny black bead eyes as it squints suspiciously and its woolly brow furrows deeply. The background features blurred shelves stocked with colorful red and blue products under bright, linear fluorescent ceiling lights. The lighting is soft and diffuse, highlighting the fuzzy, fibrous texture of the felted wool against the bokeh of the supermarket. [00:00 through 00:02] looking away, then turns towards camera [00:02 through 00:03] rapidly crash zoom to closely frame his eyes [00:03 through 00:04] black eyes squint [00:04 through 00:07] brow slowly furrows", tags: ["#AI영상프롬프트", "#Gen45", "#타임스탬프", "#크래시줌", "#니들펠트", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47142401963283", visual: { background: "#e9dfc7", accent: "#e9752c", ink: "#26211b", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "TURN / ZOOM / SQUINT" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 자연어·타임스탬프 프롬프트, Gen-4.5 모델 사양과 결과 GIF를 제공해 방향 전환→급확대→눈·눈썹 표정을 7초 박자로 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "중앙집중", "소프트확산광", "매트", "유희적", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47142401963283", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A needle-felted orange and white Corgi character wearing a yellow, green, and orange sweater stands in a grocery store aisle, initially facing away from the lens. The Corgi abruptly turns its head to face the camera, triggering a rapid crash zoom directly into its shiny black bead eyes as it squints suspiciously and its woolly brow furrows deeply. The background features blurred shelves stocked with colorful red and blue products under bright, linear fluorescent ceiling lights. The lighting is soft and diffuse, highlighting the fuzzy, fibrous texture of the felted wool against the bokeh of the supermarket. [00:00 through 00:02] looking away, then turns towards camera [00:02 through 00:03] rapidly crash zoom to closely frame his eyes [00:03 through 00:04] black eyes squint [00:04 through 00:07] brow slowly furrows", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·7초 타임스탬프·16:9 1280×720·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47142401963283", "fragment_map": [{ "조각": "initially facing away ... turns towards camera", "효과": "0~2초에 등진 자세에서 정면 시선으로 전환" }, { "조각": "rapid crash zoom ... frame his eyes", "효과": "2~3초에 검은 구슬 눈 극근접으로 급전환" }, { "조각": "black eyes squint", "효과": "3~4초에 의심하는 눈매를 명확히 형성" }, { "조각": "brow slowly furrows", "효과": "4~7초에 눈썹 변화를 느리게 누적해 리액션 완성" }] } }, "출처": { "소스": "Runway / Text to Video Prompting Guide", "수집일": "2026-08-25", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·타임스탬프·모델 사양·공개 결과 GIF 확인" } }
  },
  {
    title: "ATOM Sequence — 상품 대신 기록을 탐색하는 디지털 트윈 아카이브", category: "웹·앱 UI", date: "2026-08-25", url: "https://www.behance.net/gallery/254706965/ATOM-Sequence-Product-Archive-Digital-Twin",
    summary: "오브젝트를 상품 카드가 아닌 정체성·신체 부위·재료·치수·상태·접근 권한을 가진 기록으로 다루는 라이브 반응형 아카이브.", note: "인덱스→스펙시먼 도시에→절차형·스캔 트윈 확인→접근 요청 흐름이 데이터베이스의 명료함과 전시의 분위기를 함께 유지해 고관여 제품 탐색에 유용함.", tags: ["#웹앱UI", "#디지털트윈", "#제품아카이브", "#정보구조", "#반응형", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/da1dd8254706965.6a8b76e6280a0.png", visual: { background: "#121212", accent: "#dad6c8", ink: "#f6f3eb", radiusOne: "24px", radiusTwo: "0", rotate: "-1deg", label: "INDEX / DOSSIER / ACCESS" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 프로젝트가 기록형 콘텐츠 모델, 인덱스·도시에·접근 요청의 반응형 화면과 트윈 상태 표기를 실제 라이브 경험으로 연결해 아카이브형 제품 UX로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "그리드", "고밀도", "매트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/da1dd8254706965.6a8b76e6280a0.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "archive index·specimen dossier·digital twin viewer·access request·responsive states", "flow": "기록 인덱스 탐색→재료·치수·상태 검토→트윈 유형 확인→접근 요청" } }, "출처": { "소스": "Behance / Elizaveta Zhuravleva — ATOM Sequence", "수집일": "2026-08-25", "수집사유": "2026-08-23 공개 프로젝트에서 실제 반응형 화면·라이브 사이트·대표 PNG 확인" } }
  },
  {
    title: "Liquid Land — 합성 풍경을 절제된 전시 그래픽으로", category: "비주얼 그래픽", date: "2026-08-25", url: "https://www.behance.net/gallery/254562709/Liquid-Land-Exhibition-Identity-Print-Design",
    summary: "금융 데이터로 만든 합성 풍경과 조상 기억·물질 전통을 다룬 전시를 불확실하고 원자화된 타이포·이미지, 조용한 브로슈어로 묶은 아이덴티티.", note: "개념이 복잡한 전시에서 작품 이미지를 압도하지 않고 불확실성이라는 공통 감각만 활자·간격·인쇄 리듬으로 추출한 방식이 데이터·생태 전시 그래픽에 참고됨.", tags: ["#비주얼그래픽", "#전시아이덴티티", "#브로슈어", "#타이포그래피", "#생태", "#에디토리얼"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b25a0254562709.6a86f08b4cdae.jpg", visual: { background: "#ddd8cf", accent: "#6f7f77", ink: "#1a1a1a", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "LAND / DATA / AMBIGUITY" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 전시의 합성·불확실한 풍경 개념을 절제된 타이포·이미지·브로슈어 응용으로 반복해 데이터·생태 주제의 재사용 가능한 전시 그래픽 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성"], "시각렌즈": ["에디토리얼", "어스톤", "비대칭", "여백중심", "매트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b25a0254562709.6a86f08b4cdae.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "system": "원자화된 풍경 이미지·절제된 전시 타이포·넓은 여백·조용한 인쇄 리듬", "applications": "전시 로고·벽면 텍스트·브로슈어·포스터" } }, "출처": { "소스": "Behance / Klara Foldys — Liquid Land", "수집일": "2026-08-25", "수집사유": "2026-08-20 공개 프로젝트에서 전시 아이덴티티·브로슈어 실제 응용과 대표 JPEG 확인" } }
  },
  {
    title: "Galbot — 고밀도 법률 업무를 단순화하는 리걸테크 브랜드", category: "브랜드", date: "2026-08-25", url: "https://www.behance.net/gallery/254582855/Galbot-Company-Branding",
    summary: "법률 운영 경험을 AI·데이터 기반 디지털 제품으로 바꾸는 회사의 속도·정확성·조직화를 선명한 타이포와 모듈형 그래픽으로 표현한 아이덴티티.", note: "추상적인 AI 이미지를 앞세우기보다 고용량·저오차 법률 업무라는 서비스 조건을 정보 밀도와 반복 모듈로 번역해 B2B 리걸테크의 전문성과 확장성을 함께 전달함.", tags: ["#브랜드", "#리걸테크", "#AI", "#데이터", "#모듈시스템", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5e8beb254582855.6a8754c1a83a3.png", visual: { background: "#171717", accent: "#dfef3f", ink: "#f8f8f2", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "LAW / DATA / SCALE" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 AI·데이터 기반 법률 운영의 속도·정확성·조직화를 선명한 타이포·모듈 그래픽과 실제 브랜드 응용으로 연결해 B2B 리걸테크 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["스위스", "하이채도", "그리드", "고밀도", "매트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5e8beb254582855.6a8754c1a83a3.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "고대비 팔레트·정밀 산세리프·모듈형 법률 데이터 그래픽", "applications": "디지털 제품·프레젠테이션·소셜·법률 서비스 커뮤니케이션" } }, "출처": { "소스": "Behance / Julia Wilhelm — Galbot Company", "수집일": "2026-08-25", "수집사유": "2026-08-21 공개 프로젝트에서 리걸테크 서비스 맥락·브랜드 시스템·대표 PNG 확인" } }
  },
  {
    title: "Re-Rooted — 번아웃에서 처음의 즐거움을 다시 찾는 스크롤 코믹", category: "공감형 웹툰", date: "2026-08-25", url: "https://www.behance.net/gallery/254596467/Re-Rooted",
    summary: "업무·마감·자기 의심으로 창작 에너지가 소진된 인물이 내면아이의 목소리를 따라 시작점의 호기심을 회복하는 혼합매체 스크롤 코믹.", note: "현실 사진의 압박감과 수채화 내면 세계를 대비시키고 ‘충분하지 않다’는 감정을 컷 전개와 표정으로 누적해 창작자 번아웃의 공감 포인트를 시각적으로 전달함.", tags: ["#공감형웹툰", "#번아웃", "#창작자", "#내면아이", "#혼합매체", "#스크롤코믹"], thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/max_808/0c231c254596467.Y3JvcCwxMzgwLDEwODAsNTE2LDA.jpg", visual: { background: "#e9dfd1", accent: "#6f8b72", ink: "#2b2723", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "PRESSURE / DOUBT / RETURN" },
    review: { "유형": "공감형 웹툰", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 스크롤 코믹이 번아웃·자기 의심·회복의 연속 컷을 현실 사진과 수채화 내면 세계의 대비로 보여 줘 창작자 공감 서사의 컷 리듬과 감정 전개로 추출할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "콘텐츠명료성"], "시각렌즈": ["일러스트", "파스텔", "비대칭", "소프트확산광", "따뜻", "몽환"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/max_808/0c231c254596467.Y3JvcCwxMzgwLDEwODAsNTE2LDA.jpg", "커버리지_카테고리": "공감형 웹툰", "보안_등급": "raw_ok", "type_block": { "format": "혼합매체 세로 스크롤 코믹", "empathy_point": "일과 마감 속 ‘충분하지 않다’는 자기 의심에서 시작해 내면아이의 기억으로 창작 동기를 회복" } }, "출처": { "소스": "Behance / Bhavya Sarda — Re-Rooted", "수집일": "2026-08-25", "수집사유": "2026-08-21 공개 프로젝트에서 연속 컷·표정·사진/수채 대비와 대표 이미지 확인" } }
  },
  {
    title: "Checkit AI Shopping Assistant — 제품 라벨을 즉시 판단 정보로", category: "AI 디자인", date: "2026-08-24", url: "https://www.behance.net/gallery/254292193/Checkit-AI-Shopping-Assistant",
    summary: "카메라로 상품을 인식한 뒤 성분·알레르기·첨가물·노동·환경 데이터를 구매 순간의 짧은 가이드로 바꾸는 AI 쇼핑 제품과 런치 비주얼.", note: "복잡한 신뢰 데이터를 스캔→핵심 경고→대안 판단의 짧은 흐름으로 압축하고 제품 UI·CGI·소셜 영상에서 같은 메시지 구조를 유지한 점이 AI 소비자 도구 설계에 유용함.", tags: ["#AI디자인", "#쇼핑어시스턴트", "#제품인식", "#정보시각화", "#CGI", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/source/bc8a7c254292193.6a7f41f2be235.gif", visual: { background: "#211b32", accent: "#d9ff4a", ink: "#ffffff", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "SCAN / EXPLAIN / DECIDE" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 상품 카메라 인식, 성분·알레르기·윤리 데이터의 즉시 안내와 제품 데모·CGI·런치 응용을 실제 이미지로 연결해 판단 보조형 AI 제품 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "하이채도", "중앙집중", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/source/bc8a7c254292193.6a7f41f2be235.gif", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "상품 카메라 인식→성분·알레르기·첨가물·노동·환경 데이터 해석→핵심 가이드 표시→구매 판단", "ai_role": "바코드 없이 제품을 식별하고 복잡한 상품 데이터를 즉시 이해 가능한 판단 정보로 번역" } }, "출처": { "소스": "Behance / Garret Kane — Checkit AI Shopping Assistant", "수집일": "2026-08-24", "수집사유": "2026-08-14 공개 프로젝트에서 실제 제품 데모·CGI·캠페인 응용과 HTTP 200 대표 GIF 확인" } }
  },
  {
    title: "Carbon Progress Statuses — 진행·성공·오류를 한 상태 계약으로", category: "웹 스타일가이드", date: "2026-08-24", url: "https://carbondesignsystem.com/components/progress-bar/usage/#universal-behaviors",
    summary: "determinate·indeterminate 진행 방식과 active·success·error 상태, 지속·자동 종료 행동을 실제 프로그레스 바 화면으로 묶은 Carbon 공식 사양.", note: "색만 바꾸지 않고 바 길이·아이콘·도움말·지속 시간과 주변 영역 활성 상태까지 함께 규정해 업로드·설치·데이터 처리 컴포넌트의 상태 계약으로 바로 옮기기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#프로그레스바", "#상태설계", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/5affeac033a67a8463cecbb6330dc7ff/3cbba/progress-bar-usage-16.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "ACTIVE / SUCCESS / ERROR" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 가이드가 두 진행 변형과 active·success·error 상태의 색·아이콘·도움말·지속 행동을 실제 PNG와 함께 제공해 비동기 작업 컴포넌트 계약으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/5affeac033a67a8463cecbb6330dc7ff/3cbba/progress-bar-usage-16.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "determinate·indeterminate progress bar, label, helper text, track, bar indicator, status icon", "states": "active·success·error와 persistent·auto-dismiss, page·container 내부 활성 범위" } }, "출처": { "소스": "IBM Carbon Design System / Progress bar usage", "수집일": "2026-08-24", "수집사유": "2026-08-21 갱신 공식 문서에서 실제 상태 PNG·동작·접근성 규칙 확인" } }
  },
  {
    title: "Carbon Progress Copy — 고정 라벨과 변하는 도움말의 역할 분리", category: "콘텐츠 디자인 가이드", date: "2026-08-24", url: "https://carbondesignsystem.com/components/progress-bar/usage/#content",
    summary: "처리 대상을 짧은 고정 라벨로 쓰고 수량·백분율·오류 원인은 도움말에서 갱신하며 텍스트를 바 안에 넣지 않는 실제 콘텐츠 가이드.", note: "라벨이 로딩 중 바뀌어 맥락이 흔들리는 문제를 막고, 정량 진행과 오류 설명을 별도 영역에 두어 업로드·동기화·생성 작업의 상태 카피를 일관되게 검수할 수 있음.", tags: ["#콘텐츠디자인가이드", "#Carbon", "#상태카피", "#도움말", "#오류메시지", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/329e351f798fa9358bad7fe832038fca/d2d67/progress-bar-usage-12.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "LABEL / VALUE / ERROR" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 가이드가 짧은 고정 라벨, 수량·백분율 도움말, 오류 설명과 텍스트 배치 Do·Don't를 실제 PNG로 연결해 비동기 상태 카피 검수 절차로 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/329e351f798fa9358bad7fe832038fca/d2d67/progress-bar-usage-12.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "처리 대상을 짧은 고정 라벨로 작성→정량 값은 도움말에 배치→진행에 따라 값만 증가→실패 시 원인을 오류 도움말로 교체", "visible_examples": "라벨은 바 위, 도움말은 아래·옆에 두고 트랙 내부 텍스트와 멀리 떨어진 설명은 피하는 Do·Don't" } }, "출처": { "소스": "IBM Carbon Design System / Progress bar content", "수집일": "2026-08-24", "수집사유": "2026-08-21 갱신 공식 문서에서 실제 텍스트 배치 PNG와 라벨·도움말 작성 규칙 확인" } }
  },
  {
    title: "Volition — AI 인프라를 지역의 언어로 설명하는 웹 경험", category: "웹·앱 UI", date: "2026-08-24", url: "https://www.behance.net/gallery/254567415/Volition-Brand-Identity-for-AI-Infrastructure",
    summary: "자가 발전·물 효율·컴퓨트 구조를 조용한 풍경, 저층 건축, 명료한 인프라 다이어그램과 반응형 화면으로 풀어낸 AI 데이터센터 웹 경험.", note: "기술 파트너·기업·지자체·주민의 서로 다른 질문을 같은 정보 골격 안에서 다루고 복잡한 설비 이야기를 인간 규모의 이미지와 다이어그램으로 번역한 방식이 B2B 인프라 UX에 전이 가능함.", tags: ["#웹앱UI", "#AI인프라", "#데이터센터", "#정보구조", "#반응형", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/53da63254567415.6a8706680a028.png", visual: { background: "#e8e4db", accent: "#56715d", ink: "#18231c", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "INFRA / PLACE / TRUST" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 프로젝트가 AI 데이터센터의 전력·물·컴퓨트 구조를 반응형 화면, 실제 인프라 다이어그램과 지역 커뮤니티 서사로 연결해 복합 B2B 정보 구조와 신뢰 형성 흐름으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "그리드", "여백중심", "매트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/53da63254567415.6a8706680a028.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "AI 인프라 개요·전력/물 효율 설명·다이어그램·지역 영향·반응형 레이아웃", "flow": "인프라 약속 이해→기술 구조 확인→지역 영향 검토→파트너·주민별 상세 정보 탐색" } }, "출처": { "소스": "Behance / Jeihun Alizadeh & Narmin Rahimova — Volition", "수집일": "2026-08-24", "수집사유": "2026-08-20 공개 프로젝트에서 실제 웹 화면·반응형 레이아웃·인프라 다이어그램과 HTTP 200 대표 PNG 확인" } }
  },
  {
    title: "SIGNAL_01 — 세 주파수를 하나의 전자음악 그래픽 문법으로", category: "비주얼 그래픽", date: "2026-08-24", url: "https://www.behance.net/gallery/254255791/SIGNAL_01-Visual-Identity-System",
    summary: "TX 시안·BC 라임·RX 마젠타의 세 서브시스템을 중앙 심벌과 공통 그리드로 묶어 포스터·패스·사인·영상·공간 구조로 확장한 실험적 페스티벌 그래픽.", note: "하나의 행사를 단일 팔레트로 평평하게 만들지 않고 채널별 색과 성격을 분리한 뒤 심벌·레이아웃 규칙으로 다시 통합해 다중 트랙 행사나 제품군 캠페인에 재사용하기 좋음.", tags: ["#비주얼그래픽", "#전자음악", "#이벤트그래픽", "#모션", "#하이채도", "#그리드"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/d6a5ce254255791.6a7e37804f51a.jpg", visual: { background: "#111111", accent: "#00e4ef", ink: "#f4ff3f", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "TX / BC / RX" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 프로젝트가 시안·라임·마젠타의 세 주파수 서브시스템과 중앙 심벌·공통 그리드를 포스터·패스·사인·영상·공간에 적용해 다중 트랙 이벤트의 재사용 가능한 그래픽 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "인터랙션"], "시각렌즈": ["브루탈리즘", "하이채도", "그리드", "고밀도", "글로시", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/d6a5ce254255791.6a7e37804f51a.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "system": "TX 시안·BC 라임·RX 마젠타 서브시스템, 중앙 심벌, 공통 고밀도 그리드", "applications": "포스터·크리덴셜·머천다이즈·환경 사인·AI 생성 영상·입구 구조" } }, "출처": { "소스": "Behance / MASIVA STUDIO — SIGNAL_01", "수집일": "2026-08-24", "수집사유": "2026-08-13 공개 프로젝트에서 전체 시각 시스템·실제 적용 이미지와 HTTP 200 대표 WebP 확인" } }
  },
  {
    title: "Not Just Visual — 렌더링 픽셀을 브랜드 구조로 드러내다", category: "브랜드", date: "2026-08-24", url: "https://www.behance.net/gallery/254399027/Not-Just-Visual",
    summary: "건축 렌더 스튜디오의 기술을 숨기지 않고 픽셀에서 도출한 그리드, 중립색을 깨는 레몬 라임, 정밀한 타이포그래피로 만든 시각 아이덴티티.", note: "서비스 결과물인 렌더 이미지에만 의존하지 않고 제작 원리인 픽셀을 로고·레이아웃·모션의 반복 규칙으로 바꿔 기술 역량을 브랜드 기억 요소로 만든 방식이 실무적임.", tags: ["#브랜드", "#렌더스튜디오", "#픽셀시스템", "#레몬라임", "#타이포그래피", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6461c6254399027.6a82ee1363dc4.gif", visual: { background: "#e7ff36", accent: "#151515", ink: "#151515", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "PIXEL / GRID / RENDER" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 렌더링의 픽셀 원리를 그리드·레이아웃·타이포그래피·레몬 라임 포인트와 실제 응용으로 연결해 기술 스튜디오의 반복 가능한 브랜드 시스템으로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "하이채도", "그리드", "여백중심", "글로시", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6461c6254399027.6a82ee1363dc4.gif", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "렌더 픽셀 기반 그리드·중립 팔레트·레몬 라임 포인트·정밀 타이포그래피", "applications": "웹·소셜·모션·프로젝트 프레젠테이션·스튜디오 커뮤니케이션" } }, "출처": { "소스": "Behance / Bauden Branding — Not Just Visual", "수집일": "2026-08-24", "수집사유": "2026-08-17 공개 프로젝트에서 픽셀 시스템·타이포·실제 응용 이미지와 HTTP 200 대표 GIF 확인" } }
  },
  {
    title: "Figma Auto Spacing — CSS와 같은 Between·Around·Evenly", category: "웹·앱 UI", date: "2026-08-23", url: "https://help.figma.com/hc/en-us/articles/31289464393751-Use-the-horizontal-and-vertical-flows-in-auto-layout#auto-spacing",
    summary: "Auto layout의 자동 간격을 CSS의 space-between·space-around·space-evenly와 같은 세 옵션으로 맞추고 실제 분포 차이를 한 화면에서 비교한 Figma 공식 UI.", note: "디자인 속성과 CSS 용어를 일치시키고 가장자리·내부 간격 비율을 즉시 시각화해 반응형 컴포넌트의 설계·구현 왕복 오차를 줄이는 패턴으로 참고하기 좋음.", tags: ["#웹앱UI", "#Figma", "#오토레이아웃", "#반응형", "#CSS", "#테크IT"], thumbnail: "https://help.figma.com/hc/article_attachments/42896719340311", visual: { background: "#f5f5f5", accent: "#9747ff", ink: "#1e1e1e", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "BETWEEN / AROUND / EVENLY" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Figma 공식 도움말이 2026-08-21 출시된 세 자동 간격 옵션의 실제 비교 화면과 CSS 대응 값을 제공해 반응형 레이아웃 속성으로 바로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://help.figma.com/hc/article_attachments/42896719340311", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "Auto layout 선택→Gap을 Auto로 설정→Between·Around·Evenly 선택→가장자리와 내부 간격 비교→CSS 값으로 전달", "states": "space-between·space-around·space-evenly의 0:1·1:2·1:1 가장자리/내부 간격" } }, "출처": { "소스": "https://help.figma.com/hc/en-us/articles/31289464393751-Use-the-horizontal-and-vertical-flows-in-auto-layout", "수집일": "2026-08-23", "수집사유": "2026-08-21 공식 릴리스와 도움말에서 실제 옵션 비교 화면 및 공개 이미지 확인" } }
  },
  {
    title: "Carbon Tree View — 다단계 탐색과 선택을 한 계층 문법으로", category: "웹 스타일가이드", date: "2026-08-23", url: "https://carbondesignsystem.com/components/tree-view/usage/",
    summary: "여러 깊이의 branch·leaf 노드, small·extra small 크기, 확장·선택·포커스와 아이콘 정렬 규칙을 실제 트리 화면으로 정리한 Carbon 컴포넌트 가이드.", note: "아코디언·데이터 테이블·제품 내비게이션과의 경계를 먼저 정한 뒤 노드 밀도와 키보드 동작을 계약화해 복잡한 데이터 탐색 화면의 오용을 줄이기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#트리뷰", "#정보구조", "#키보드탐색", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/a11aff0ab6bbeade8354d3d19be481e3/3cbba/tree-view-usage-2.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "BRANCH / LEAF / FOCUS" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 가이드가 2026-08-21 갱신된 노드 해부·크기·선택·키보드·아이콘 규칙을 실제 PNG와 함께 제공해 계층 탐색 컴포넌트 계약으로 흡수할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "고밀도", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/a11aff0ab6bbeade8354d3d19be481e3/3cbba/tree-view-usage-2.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "branch·leaf node, chevron, label, selection, small·extra small density", "states": "collapsed·expanded·hover·focus·selected·disabled와 방향키·Enter 키보드 동작" } }, "출처": { "소스": "https://carbondesignsystem.com/components/tree-view/usage/", "수집일": "2026-08-23", "수집사유": "2026-08-21 갱신 공식 문서에서 실제 계층·선택 화면과 공개 PNG 확인" } }
  },
  {
    title: "Carbon Progress Labels — 1~2단어·16자로 단계 카피 제한", category: "콘텐츠 디자인 가이드", date: "2026-08-23", url: "https://carbondesignsystem.com/components/progress-indicator/style/#typography",
    summary: "진행 단계 라벨을 문장형 표기, 1~2단어, 16자 이내로 제한하고 완료·현재·예정 상태와 helper text를 실제 컴포넌트 화면에 연결한 공식 가이드.", note: "긴 절차명을 화면마다 임의 축약하지 않고 단계 라벨의 길이·대소문자·보조 설명 역할을 명문화해 온보딩·신청·설정 흐름의 스캔성과 번역 안정성을 검수하기 좋음.", tags: ["#콘텐츠디자인가이드", "#Carbon", "#진행단계", "#라벨카피", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/0d0015ff57ca7b78b7fe8705c2a8b718/3cbba/progress-indicator-style-1.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "SHORT / STATE / HELP" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 사양이 1~2단어·16자·sentence case 규칙을 완료·현재·예정 단계의 실제 PNG와 연결해 진행 흐름 카피 검수에 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/0d0015ff57ca7b78b7fe8705c2a8b718/3cbba/progress-indicator-style-1.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "단계 동사·명사 정의→1~2단어로 축약→16자 이내 확인→sentence case 적용→필요한 설명만 helper text로 이동", "visible_examples": "complete·current·not started 단계, label·helper text의 토큰과 실제 배치" } }, "출처": { "소스": "https://carbondesignsystem.com/components/progress-indicator/style/", "수집일": "2026-08-23", "수집사유": "2026-08-21 갱신 공식 사양에서 라벨 규칙과 실제 상태 PNG 확인" } }
  },
  {
    title: "Kuwait Champions 2026 — 타워 구조를 스포츠 픽토그램으로", category: "브랜드", date: "2026-08-23", url: "https://www.behance.net/gallery/254177485/2026-Champions-Honoring-Ceremony-Event-Branding",
    summary: "쿠웨이트 타워의 구·수직 구조를 선수·장비·운동 경로로 변환하고 블루·시안 무대, 수상자 초상과 행사 동선에 확장한 공식 행사 아이덴티티.", note: "지역 랜드마크를 장식 모티프가 아니라 종목별 동작의 기능적 골격으로 바꾸고 정지 픽토그램을 루프 모션과 공간 그래픽까지 확장한 방식이 테크·스포츠 행사 브랜딩에 전이 가능함.", tags: ["#브랜드", "#이벤트아이덴티티", "#픽토그램", "#모션", "#블루", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/445de6254177485.6a7cbae72312c.jpg", visual: { background: "#0757b7", accent: "#31d6e7", ink: "#fff200", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "TOWER / SPORT / MOTION" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 4, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 쿠웨이트 타워 기하를 종목별 픽토그램으로 변환한 규칙과 무대·스크린·인쇄 적용 이미지를 함께 보여 줘 지역 상징 기반 이벤트 시스템으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "브랜드일관성", "인터랙션"], "시각렌즈": ["미니멀", "하이채도", "그리드", "글로시", "차가움", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/445de6254177485.6a7cbae72312c.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "쿠웨이트 타워의 구·수직 기하, 블루·시안 필드, 옐로 포인트, 리본형 스포츠 픽토그램", "applications": "행사 입구·LED 무대·팀 소개 화면·ID·폴더·손목밴드·기프트 박스" } }, "출처": { "소스": "https://www.behance.net/gallery/254177485/2026-Champions-Honoring-Ceremony-Event-Branding", "수집일": "2026-08-23", "수집사유": "2026-08-12 공개 프로젝트에서 실제 행사·무대·인쇄 적용 이미지와 공개 미리보기 URL 확인" } }
  },
  {
    title: "Code Connect MCP 비교 — 생성 UI를 실제 컴포넌트로 치환", category: "AI 디자인", date: "2026-08-22", url: "https://www.figma.com/blog/the-benefits-of-code-connect-in-mcp/#code-connect-comparison",
    summary: "동일한 Figma 화면을 MCP만 쓴 결과와 Code Connect가 적용된 결과로 나란히 비교해 실제 디자인 시스템 컴포넌트 연결 효과를 보여 주는 공식 사례.", note: "AI가 픽셀을 닮게 만드는 데서 끝나지 않고 컴포넌트 이름·props·import 경로까지 제품 규칙에 맞추도록 시각 결과와 구현 컨텍스트를 함께 검수하는 방식이 유용함.", tags: ["#AI디자인", "#CodeConnect", "#MCP", "#디자인시스템", "#테크IT"], thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/f0189566dbceb52db96cc604ec61786dbfc93d34-1056x1320.png?auto=format&fit=max&h=660&q=75&w=528", visual: { background: "#171717", accent: "#a259ff", ink: "#f7f7f7", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "DESIGN / CONTEXT / CODE" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Figma 공식 사례가 같은 디자인의 일반 MCP 결과와 Code Connect 결과를 실제 화면으로 비교하고 컴포넌트·props 치환 방식을 공개해 디자인 시스템 기반 AI 구현 검수로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://cdn.sanity.io/images/599r6htc/regionalized/f0189566dbceb52db96cc604ec61786dbfc93d34-1056x1320.png?auto=format&fit=max&h=660&q=75&w=528", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "Figma 화면 전달→MCP React 표현 생성→Code Connect 템플릿으로 실제 컴포넌트·props 치환→시각·코드 품질 비교", "evidence": "공식 27개 테스트에서 중앙값 기준 코드 품질 +1, 토큰 -29.5%, 작업 시간 -19.6%" } }, "출처": { "소스": "https://www.figma.com/blog/the-benefits-of-code-connect-in-mcp/", "수집일": "2026-08-22", "수집사유": "2026-08-05 공식 글에서 실제 비교 화면·구현 구조·정량 결과와 HTTP 200 대표 PNG 확인" } }
  },
  {
    title: "Carbon Pagination — 데이터 범위·페이지 이동·모바일 축약을 한 규칙으로", category: "웹 스타일가이드", date: "2026-08-22", url: "https://carbondesignsystem.com/components/pagination/usage/",
    summary: "데이터 테이블 하단 페이지네이션과 페이지형 내비게이션의 구조, 크기, 키보드 상태와 작은 화면 축약을 실제 UI로 규정한 Carbon 사양.", note: "항목 범위·전체 수·현재 페이지·이동 버튼을 하나의 상태 계약으로 묶고 모바일에서는 선택 컨트롤만 덜어내는 방식이 고밀도 데이터 화면에 바로 적용됨.", tags: ["#웹스타일가이드", "#페이지네이션", "#데이터테이블", "#반응형", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/477fbd6d7d1d9f7302f807f0e478f6db/3cbba/pagination-usage-overview-in-context.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "RANGE / PAGE / MOVE" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 문서가 두 페이지네이션 변형의 실제 화면, 크기·배치·키보드 상태와 모바일 축약을 함께 제공해 데이터 탐색 컴포넌트로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/477fbd6d7d1d9f7302f807f0e478f6db/3cbba/pagination-usage-overview-in-context.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "pagination·pagination nav·data table pairing", "states": "페이지 크기 선택→현재 범위 확인→이전·다음 이동→작은 화면에서 select 축약" } }, "출처": { "소스": "https://carbondesignsystem.com/components/pagination/usage/", "수집일": "2026-08-22", "수집사유": "2026-07-29 갱신 공식 문서에서 실제 UI·반응형·키보드 상태와 HTTP 200 PNG 확인" } }
  },
  {
    title: "Carbon Dropdown Content — 사라지는 플레이스홀더와 지속 안내를 분리", category: "콘텐츠 디자인 가이드", date: "2026-08-22", url: "https://carbondesignsystem.com/components/dropdown/usage/#content",
    summary: "라벨·도움말·플레이스홀더·옵션·전체 선택 문구의 역할과 길이, 정렬, 오버플로 처리를 실제 드롭다운 화면으로 설명한 Carbon 콘텐츠 규칙.", note: "선택 뒤 사라지는 플레이스홀더에는 핵심 정보를 두지 않고 라벨과 도움말에 지속 안내를 배치하는 원칙이 폼·필터 마이크로카피 검수에 즉시 쓰임.", tags: ["#콘텐츠디자인가이드", "#드롭다운", "#마이크로카피", "#폼", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/e0c4ef7014c5dec8fec0ceeff700f30e/3cbba/dropdown-usage-5.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "LABEL / HELP / CHOOSE" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 문서가 라벨·도움말·플레이스홀더·옵션 문구의 역할과 금지 사례를 실제 드롭다운 화면에 연결해 폼 콘텐츠 검수 절차로 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/e0c4ef7014c5dec8fec0ceeff700f30e/3cbba/dropdown-usage-5.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "단문 라벨 작성→지속 안내를 helper text로 배치→플레이스홀더는 상호작용 힌트로 제한→옵션은 짧고 정확하게 정렬→긴 값은 말줄임·툴팁 처리", "visible_examples": "라벨·도움말·플레이스홀더가 있는 드롭다운 실제 화면" } }, "출처": { "소스": "https://carbondesignsystem.com/components/dropdown/usage/", "수집일": "2026-08-22", "수집사유": "최근 30일 갱신 공식 문서에서 실제 카피 배치 화면과 HTTP 200 PNG 확인" } }
  },
  {
    title: "Avant-garde Pool Editorial — 기하학 메이크업과 대형 문자를 저각으로", category: "AI 이미지 프롬프트", date: "2026-08-22", url: "https://help.runwayml.com/hc/en-us/articles/51111417337363-Creating-images-with-GPT-Image-2#character-image",
    summary: "수영장 주택 옆 인물을 저각·오프센터로 두고 매트·글로시 기하학 메이크업과 머리 뒤 대형 문자를 결합한 GPT Image 2 공식 결과.", note: "피사체 위치, 재질 대비, 배경 건축과 문자 레이어를 분리해 패션·뷰티 캠페인의 인물과 타이포가 충돌하지 않는 구도를 설계하기 좋음.", prompt: "Low angle shot of an avant-garde model with bold geometric makeup in matte and glossy finishes around the eyes and cheekbones. Wearing a white fabric headpiece. Glowing dewy skin, confident expression. Positioned off-center beside a minimalist house with a swimming pool, daytime. Soft shadows, sharp detail, Vogue editorial style. Large text \"avant-garde\" in the background behind the model.", tags: ["#AI이미지프롬프트", "#GPTImage2", "#패션에디토리얼", "#타이포그래피", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51518467801107", visual: { background: "#d9e5e8", accent: "#111111", ink: "#1a2529", radiusOne: "24px", radiusTwo: "0", rotate: "1deg", label: "LOW / OFFSET / TYPE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 GPT Image 2 가이드가 전체 프롬프트·모델·생성 설정 범위·결과 PNG를 제공해 저각 인물, 메이크업 재질, 건축 배경과 대형 문자를 재현할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "비대칭", "소프트확산광", "글로시", "럭셔리"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51518467801107", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Low angle shot of an avant-garde model with bold geometric makeup in matte and glossy finishes around the eyes and cheekbones. Wearing a white fabric headpiece. Glowing dewy skin, confident expression. Positioned off-center beside a minimalist house with a swimming pool, daytime. Soft shadows, sharp detail, Vogue editorial style. Large text \"avant-garde\" in the background behind the model.", "tool_model": "GPT Image 2 on Runway", "params": "Text to Image·1K/2K/4K·Low/Medium/High quality·21:9~9:16 지원·공식 Character Image 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51518467801107", "fragment_map": [{ "조각": "Low angle shot ... Positioned off-center", "효과": "저각과 비대칭 배치로 인물의 긴장감 강화" }, { "조각": "geometric makeup in matte and glossy finishes", "효과": "눈·광대 주변의 형태와 표면 반사 대비" }, { "조각": "minimalist house with a swimming pool", "효과": "인물 뒤에 간결한 건축·수평 수면 배경" }, { "조각": "Large text ... in the background behind the model", "효과": "인물 뒤 대형 타이포 레이어로 깊이와 메시지 결합" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/51111417337363-Creating-images-with-GPT-Image-2", "수집일": "2026-08-22", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델 설정·HTTP 200 결과 PNG 확인" } }
  },
  {
    title: "Odd Day Farm Sketch Edit — 표시 영역을 장면 오브젝트로 치환", category: "AI 이미지 프롬프트", date: "2026-08-22", url: "https://help.runwayml.com/hc/en-us/articles/53253654113299-Creating-with-Seedream-5-0-Pro#sketch-reference-farm",
    summary: "농장 스케치의 표시 영역에 거대 정원 노움·지붕 위 소·로봇 농부·구름 문자를 각각 배치하면서 원래 구도를 유지한 공식 결과.", note: "러프 마킹의 위치 의미, 교체 대상, 보존 조건과 합성 자연스러움을 한 프롬프트에서 분리해 키비주얼 수정 지시를 재사용하기 좋음.", prompt: "Edit the image based on the sketching. Add a giant garden gnome sitting on the house in the upper-left marked area, move the cow from the fiel to the top of the red barn, replace the stick figure with a robot farmer, and write Odd Day in the clouds in the top right area. Remove all the read and white sketched lines. Keep the composition unchanged. Make the newly added objects blend naturally into the original scene.", tags: ["#AI이미지프롬프트", "#Seedream5", "#스케치편집", "#합성", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/53289728913683", visual: { background: "#d9e6c4", accent: "#c93f2f", ink: "#24312a", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "MARK / REPLACE / BLEND" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 Seedream 5.0 Pro 가이드가 입력 스케치·전체 편집 프롬프트·모델·해상도·결과 PNG를 제공해 위치 기반 다중 오브젝트 편집을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["일러스트", "어스톤", "비대칭", "소프트확산광", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53289728913683", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Edit the image based on the sketching. Add a giant garden gnome sitting on the house in the upper-left marked area, move the cow from the fiel to the top of the red barn, replace the stick figure with a robot farmer, and write Odd Day in the clouds in the top right area. Remove all the read and white sketched lines. Keep the composition unchanged. Make the newly added objects blend naturally into the original scene.", "tool_model": "Seedream 5.0 Pro on Runway", "params": "Sketch reference edit·최대 10 references·1K/2K·1:1/4:3/3:4/16:9/9:16/3:2/2:3·공식 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/53289728913683", "fragment_map": [{ "조각": "upper-left marked area", "효과": "표시 영역을 노움의 정확한 배치 좌표로 해석" }, { "조각": "move the cow ... to the top of the red barn", "효과": "기존 오브젝트를 다른 표면으로 재배치" }, { "조각": "replace the stick figure with a robot farmer", "효과": "러프 기호를 완성형 캐릭터로 치환" }, { "조각": "Keep the composition unchanged ... blend naturally", "효과": "전체 구도는 보존하고 새 요소의 광원·원근만 통합" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/53253654113299-Creating-with-Seedream-5-0-Pro", "수집일": "2026-08-22", "수집사유": "최근 갱신 공식 가이드에서 입력 스케치·전체 프롬프트·모델·HTTP 200 결과 PNG 확인" } }
  },
  {
    title: "Cliffside Shoulder Pullback — 인물 뒤에서 절벽 높이를 확장", category: "AI 영상 프롬프트", date: "2026-08-22", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#over-shoulder-cliffside",
    summary: "젖은 머리의 인물 어깨 너머로 폭풍 파도를 보다가 카메라가 뒤·위로 빠지며 절벽의 높이와 아래 바다를 공개하는 공식 결과.", note: "시점 기준인 어깨, 응시 대상, 후퇴·상승 방향과 마지막 공간 정보를 분리해 여행·아웃도어 영상의 감정과 스케일을 한 숏에 연결하기 좋음.", prompt: "Over the shoulder of a woman looking out at stormy waves from a cliffside. The camera pulls back and up to emphasize the height of the cliffs.", tags: ["#AI영상프롬프트", "#Gen45", "#오버숄더", "#PullBack", "#스케일", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504727955", visual: { background: "#455361", accent: "#9fb9c9", ink: "#f2f6f8", radiusOne: "24px", radiusTwo: "0", rotate: "1deg", label: "SHOULDER / BACK / HEIGHT" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공해 어깨너머 시점에서 후퇴·상승하며 절벽 높이를 공개하는 숏을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "소프트확산광", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504727955", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Over the shoulder of a woman looking out at stormy waves from a cliffside. The camera pulls back and up to emphasize the height of the cliffs.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504727955", "fragment_map": [{ "조각": "Over the shoulder of a woman", "효과": "인물의 후면 어깨를 전경 시점 기준으로 고정" }, { "조각": "looking out at stormy waves", "효과": "응시 방향과 환경 운동을 바다로 연결" }, { "조각": "camera pulls back and up", "효과": "후퇴와 상승을 결합한 크레인형 확장" }, { "조각": "emphasize the height of the cliffs", "효과": "마지막 프레임에서 수직 낙차와 인물 축척 강조" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-08-22", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·HTTP 200 결과 GIF 확인" } }
  },
  {
    title: "Urban Marathon Steadicam — 군중 사이 질주를 안정적으로 추적", category: "AI 영상 프롬프트", date: "2026-08-22", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#steadicam-marathon",
    summary: "도시 마라톤 군중을 가르는 선수 뒤를 스테디캠이 밀착 추적하며 표정과 리듬감 있는 보폭을 안정된 프레임에 유지하는 공식 결과.", note: "주체의 속도, 군중 회피, 카메라 거리와 안정화 방식을 분리해 스포츠·웨어러블 캠페인의 에너지와 제품 가독성을 함께 확보하기 좋음.", prompt: "A steadicam follows closely behind a determined athlete, capturing their dynamic character motion as they sprint through a crowded urban marathon, weaving seamlessly between other runners, their focused expression and rhythmic strides filling the cinematic frame.", tags: ["#AI영상프롬프트", "#Gen45", "#Steadicam", "#스포츠", "#추적숏", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515630995", visual: { background: "#3b4146", accent: "#e6a04a", ink: "#f8f4ed", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "FOLLOW / WEAVE / STRIDE" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공해 군중 사이를 질주하는 선수를 안정된 밀착 추적으로 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "고밀도", "비대칭", "하드라이트", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515630995", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A steadicam follows closely behind a determined athlete, capturing their dynamic character motion as they sprint through a crowded urban marathon, weaving seamlessly between other runners, their focused expression and rhythmic strides filling the cinematic frame.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515630995", "fragment_map": [{ "조각": "steadicam follows closely behind", "효과": "후방 밀착 거리와 안정된 카메라 이동 설정" }, { "조각": "sprint through a crowded urban marathon", "효과": "빠른 주체 운동과 고밀도 도시 환경 결합" }, { "조각": "weaving seamlessly between other runners", "효과": "군중 사이 좌우 회피 동선 부여" }, { "조각": "focused expression and rhythmic strides", "효과": "표정과 보폭을 반복 리듬의 핵심 단서로 유지" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-08-22", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·HTTP 200 결과 GIF 확인" } }
  },
  {
    title: "Moving Fast Editorial Collage — 유기 곡선과 블록을 블루 화면에 중첩", category: "비주얼 그래픽", date: "2026-08-22", url: "https://www.figma.com/blog/how-to-move-fast-toward-the-right-thing/#hero-illustration",
    summary: "선명한 블루 바탕 위에 유기적인 손 형태, 각진 컬러 블록, 점 패턴과 루프 선을 겹쳐 속도와 숙고의 긴장을 표현한 Figma 에디토리얼 일러스트.", note: "큰 유기 형상과 작은 기하 모듈, 굵기가 다른 선을 서로 다른 깊이에 놓아 복잡한 AI·기술 주제를 캐릭터 없이도 활기 있게 설명하는 그래픽 문법을 추출하기 좋음.", tags: ["#비주얼그래픽", "#에디토리얼", "#콜라주", "#블루", "#AI", "#테크IT"], thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/09c7f5c6f195f7683818bd404e9413ecfdf5f4c3-3264x1836.jpg?auto=format&fit=max&h=918&q=75&w=1632", visual: { background: "#2074ff", accent: "#ff5e7e", ink: "#101820", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "CURVE / BLOCK / LOOP" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Figma 공식 에디토리얼이 블루 바탕, 유기 형상, 기하 블록·점·루프 선을 다층으로 반복해 AI·기술 콘텐츠용 활기 있는 콜라주 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "AI활용"], "시각렌즈": ["에디토리얼", "하이채도", "비대칭", "매트", "유희적"], "시각아티팩트_url": "https://cdn.sanity.io/images/599r6htc/regionalized/09c7f5c6f195f7683818bd404e9413ecfdf5f4c3-3264x1836.jpg?auto=format&fit=max&h=918&q=75&w=1632", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "system": "고채도 블루 필드·대형 유기 형상·기하 블록·점 패턴·루프 선", "applications": "AI·기술 아티클 히어로·리포트 챕터 오프너·소셜 카드" } }, "출처": { "소스": "https://www.figma.com/blog/how-to-move-fast-toward-the-right-thing/", "수집일": "2026-08-22", "수집사유": "2026-08-13 공식 에디토리얼에서 크레디트가 명시된 실제 히어로 일러스트와 HTTP 200 JPEG 확인" } }
  },
  {
    title: "GPT Image 2 Generation Panel — 품질·해상도·비용을 생성 전에 비교", category: "AI 디자인", date: "2026-08-21", url: "https://help.runwayml.com/hc/en-us/articles/51111417337363-Creating-images-with-GPT-Image-2#generation-settings",
    summary: "이미지 모드에서 모델을 고른 뒤 화면비, 1K·2K·4K 해상도와 Low·Medium·High 품질을 한 설정 패널에서 검토하는 Runway 공식 화면.", note: "프롬프트 작성과 품질·비용 결정을 분리하지 않고 실행 직전 같은 맥락에 배치해 생성형 이미지 도구의 결과 예측성과 비용 통제를 높이는 구조가 유용함.", tags: ["#AI디자인", "#GPTImage2", "#생성설정", "#비용통제", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51111417332243", visual: { background: "#17171a", accent: "#8d74ff", ink: "#f8f7ff", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "MODEL / QUALITY / COST" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 GPT Image 2 선택부터 화면비·해상도·품질과 비용을 검토하는 실제 화면을 제공해 생성 전 설정 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51111417332243", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "이미지 모드 선택→GPT Image 2 선택→프롬프트·레퍼런스 입력→화면비·해상도·품질 검토→생성", "ai_role": "텍스트와 최대 16개 시각 입력을 지정 품질·해상도의 이미지로 생성" } }, "출처": { "소스": "Runway / Creating images with GPT Image 2", "수집일": "2026-08-21", "수집사유": "최근 갱신 공식 가이드에서 실제 모델·품질 설정 화면과 공개 PNG 확인" } }
  },
  {
    title: "Carbon Loading Context — 3초 이상 대기의 범위와 차단 수준을 구분", category: "웹 스타일가이드", date: "2026-08-21", url: "https://carbondesignsystem.com/components/loading/usage/#overview",
    summary: "전체 화면·섹션·인라인 대기를 실제 제품 문맥으로 보여 주고 크기, 오버레이, 상호작용 차단과 대체 스켈레톤 조건을 규정한 Carbon 가이드.", note: "대기 시간을 단일 스피너로 처리하지 않고 범위·지속 시간·차단 수준에 따라 피드백 패턴을 선택하게 해 데이터 제품의 로딩 상태를 시스템화하기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#로딩", "#상태", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/d5cf1b496c53a3edef8daa20e984ff51/3cbba/loading-usage-overview-in-context.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "WAIT / SCOPE / BLOCK" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 문서가 실제 로딩 화면과 3초 기준, 전체·컴포넌트·인라인 배치 및 상호작용 차단 규칙을 제공해 상태 컴포넌트 계약으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/d5cf1b496c53a3edef8daa20e984ff51/3cbba/loading-usage-overview-in-context.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "large loading·small loading·overlay·status label", "rules": "3초 이상 대기·전체/영역/인라인 범위·관련 액션 비활성화·점진 로딩은 skeleton 우선" } }, "출처": { "소스": "IBM Carbon Design System / Loading usage", "수집일": "2026-08-21", "수집사유": "2026-08-13 갱신 공식 문서에서 실제 UI 문맥과 HTTP 200 PNG 확인" } }
  },
  {
    title: "Carbon Link Copy — 목적지가 드러나는 고유한 링크 문장", category: "콘텐츠 디자인 가이드", date: "2026-08-21", url: "https://carbondesignsystem.com/components/link/usage/#content",
    summary: "‘Read more’ 같은 반복 문구 대신 목적지를 구체적으로 쓰고 내부·외부 이동 아이콘, 인라인·독립 링크의 역할을 실제 알림 화면으로 구분한 가이드.", note: "링크 텍스트만 읽어도 다음 위치를 예측하게 하고 같은 화면의 중복 라벨을 제거하는 검수 기준이 문서·설정·도움말 카피에 즉시 적용 가능함.", tags: ["#콘텐츠디자인가이드", "#Carbon", "#링크카피", "#내비게이션", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/e71f2d5de49d9519ec7051b43289bae8/3cbba/link-usage-placement-1.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "NAME / DESTINATION / CONTEXT" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 문서가 고유하고 의미 있는 링크 문장 규칙과 알림 안의 인라인 링크 실제 화면을 연결해 제품 카피 검수 절차로 바로 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/e71f2d5de49d9519ec7051b43289bae8/3cbba/link-usage-placement-1.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "목적지 정의→고유한 링크 문장 작성→내부/외부 아이콘 선택→문맥 안에서 중복·길이·접근성 검수", "visible_examples": "알림 본문 인라인 링크·독립 링크·목적지 아이콘" } }, "출처": { "소스": "IBM Carbon Design System / Link usage", "수집일": "2026-08-21", "수집사유": "2026-08-13 갱신 공식 문서에서 링크 카피 원칙과 실제 알림 PNG 확인" } }
  },
  {
    title: "Coastal Apothecary Portrait — 골든아워 제품과 피부를 한 톤으로", category: "AI 이미지 프롬프트", date: "2026-08-21", url: "https://help.runwayml.com/hc/en-us/articles/51111417337363-Creating-images-with-GPT-Image-2#product-image",
    summary: "바다와 하늘의 블루 수평선을 배경으로 크림을 바른 모델과 호박색 보틀을 골든아워 필름 톤에 묶은 공식 상업 이미지 결과.", note: "인물 피부·제품 위치·배경 수평선·시간대·색감·바람을 한 문장 안에서 역할별로 지정해 뷰티 캠페인의 블루톤 환경과 제품 주목도를 동시에 통제하기 좋음.", prompt: "Editorial close-up of a beautiful model with luminous bare skin and two dollops of white face cream on her cheeks, holding an amber apothecary bottle near her face against a soft sky and ocean horizon. Shot on film at golden hour with a muted coastal palette, gentle wind in her hair, and a quiet, minimalist mood.", tags: ["#AI이미지프롬프트", "#GPTImage2", "#뷰티광고", "#블루톤", "#제품사진", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51518467799443", visual: { background: "#b8d0dc", accent: "#d49b62", ink: "#173144", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "SKIN / BOTTLE / COAST" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, GPT Image 2 모델·품질 설정과 블루 해안 배경의 결과 PNG를 제공해 뷰티 제품 광고 장면을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "파스텔", "중앙집중", "소프트확산광", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51518467799443", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Editorial close-up of a beautiful model with luminous bare skin and two dollops of white face cream on her cheeks, holding an amber apothecary bottle near her face against a soft sky and ocean horizon. Shot on film at golden hour with a muted coastal palette, gentle wind in her hair, and a quiet, minimalist mood.", "tool_model": "Runway GPT Image 2", "params": "Text to Image·16:9 기본·1K/2K/4K·High quality 기본·output count 4·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51518467799443", "fragment_map": [{ "조각": "holding an amber apothecary bottle near her face", "효과": "제품과 얼굴을 같은 초점면에 배치" }, { "조각": "soft sky and ocean horizon", "효과": "블루·시안 계열의 단순한 수평 배경 형성" }, { "조각": "Shot on film at golden hour", "효과": "피부와 호박색 유리에 따뜻한 필름 광원 부여" }, { "조각": "muted coastal palette", "효과": "하늘·바다·피부의 채도를 낮춰 절제된 광고 톤 통일" }] } }, "출처": { "소스": "Runway / Creating images with GPT Image 2", "수집일": "2026-08-21", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델 설정·공개 블루톤 결과 PNG 확인" } }
  },
  {
    title: "Botanical Annotation Plate — 꽃병 중심에서 품종 설명을 수평 연결", category: "AI 이미지 프롬프트", date: "2026-08-21", url: "https://help.runwayml.com/hc/en-us/articles/51111417337363-Creating-images-with-GPT-Image-2#text-based-image",
    summary: "크림 배경 중앙의 동양식 도자기 꽃병에서 각 꽃 품종으로 선을 뻗어 짧은 설명을 붙인 에디토리얼 도해 결과.", note: "주체 위치, 주석 연결 방식, 텍스트 분량과 편집 스타일을 분리 지정해 제품 해부도·전시 캡션·교육형 소셜 그래픽의 초안을 구조적으로 만들기 좋음.", prompt: "An image of a flower vase with flowers of different types, the vase is in the center of the frame. Oriental pottery vase, light cream plain background color. Annotations connected by lines horizontally pointing out different flower types and a brief description. Editorial magazine style.", tags: ["#AI이미지프롬프트", "#GPTImage2", "#인포그래픽", "#주석", "#에디토리얼", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/51518467799955", visual: { background: "#f2ead7", accent: "#947654", ink: "#2f2922", radiusOne: "8px", radiusTwo: "24px", rotate: "-1deg", label: "OBJECT / LINE / LABEL" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, GPT Image 2 설정과 꽃병·연결선·설명 텍스트 결과 PNG를 제공해 주석형 에디토리얼 도해를 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "여백중심", "매트", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/51518467799955", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "An image of a flower vase with flowers of different types, the vase is in the center of the frame. Oriental pottery vase, light cream plain background color. Annotations connected by lines horizontally pointing out different flower types and a brief description. Editorial magazine style.", "tool_model": "Runway GPT Image 2", "params": "Text to Image·16:9 기본·1K/2K/4K·High quality 기본·output count 4·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/51518467799955", "fragment_map": [{ "조각": "vase is in the center of the frame", "효과": "주요 오브젝트를 중앙 기준점으로 고정" }, { "조각": "light cream plain background", "효과": "주석 가독성을 위한 저대비 단색 여백 확보" }, { "조각": "Annotations connected by lines horizontally", "효과": "꽃과 설명 사이의 수평 연결 규칙 생성" }, { "조각": "brief description. Editorial magazine style", "효과": "텍스트 길이를 줄이고 편집 지면형 위계 적용" }] } }, "출처": { "소스": "Runway / Creating images with GPT Image 2", "수집일": "2026-08-21", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델 설정·공개 텍스트 결과 PNG 확인" } }
  },
  {
    title: "Artist Studio Pull Back — 손의 세부에서 작업실 전체 맥락으로", category: "AI 영상 프롬프트", date: "2026-08-21", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#pull-back-artist-studio",
    summary: "미니어처 캔버스를 그리는 낡은 손의 클로즈업에서 시작해 브러시·물감·미완성 작품이 놓인 작업실 전경을 천천히 공개하는 공식 결과.", note: "시작 프레임의 손동작과 후퇴 방향, 마지막에 드러날 공간 요소를 순서대로 지정해 공예·제작 과정 영상의 정보 확장을 한 숏으로 설계하기 좋음.", prompt: "A handheld camera begins on a close shot, tightly framing a single, weathered hand carefully painting intricate details onto a miniature canvas, then slowly pulls backwards to reveal a wider shot of the artist's studio, filled with brushes, paints, and half-finished masterpieces, all from an observational view as if a quiet observer.", tags: ["#AI영상프롬프트", "#Gen45", "#PullBack", "#제작과정", "#공간공개", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504750227", visual: { background: "#4f4035", accent: "#c79a66", ink: "#fff4e3", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "HAND / PULL / REVEAL" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 손의 클로즈업에서 작업실 전경으로 후퇴하는 숏을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "고밀도", "소프트확산광", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504750227", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A handheld camera begins on a close shot, tightly framing a single, weathered hand carefully painting intricate details onto a miniature canvas, then slowly pulls backwards to reveal a wider shot of the artist's studio, filled with brushes, paints, and half-finished masterpieces, all from an observational view as if a quiet observer.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504750227", "fragment_map": [{ "조각": "begins on a close shot", "효과": "시작 프레임을 손과 미니어처 캔버스에 고정" }, { "조각": "carefully painting intricate details", "효과": "작은 붓질의 지속 동작 부여" }, { "조각": "slowly pulls backwards", "효과": "끊김 없이 시야 범위를 점진 확장" }, { "조각": "studio, filled with brushes, paints, and half-finished masterpieces", "효과": "마지막 프레임에서 제작 환경과 진행 맥락 공개" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-21", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·공개 결과 GIF 확인" } }
  },
  {
    title: "Earthquake Handheld Chase — 붕괴와 균열을 극단적 흔들림으로 추적", category: "AI 영상 프롬프트", date: "2026-08-21", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#handheld-earthquake",
    summary: "지면이 갈라지고 건물이 무너지는 도시 풍경을 카메라가 놓치지 않으려 애쓰는 듯한 강한 흔들림과 지터로 따라가는 공식 Gen-4.5 결과.", note: "재난 사건, 지면 변화, 프레임 유지의 실패감과 흔들림 강도를 각각 명시해 게임 트레일러·긴급 상황 시네마틱의 현장감을 통제하기 좋음.", prompt: "A handheld camera, with extreme shakiness and jitter, rapidly tracks a crumbling urban landscape during an earthquake, the ground visibly fracturing, as the camera struggles to keep the chaotic destruction of buildings in frame.", tags: ["#AI영상프롬프트", "#Gen45", "#Handheld", "#재난시네마틱", "#카메라흔들림", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504764179", visual: { background: "#47433f", accent: "#c75d3b", ink: "#fff1e8", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "SHAKE / FRACTURE / TRACK" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 지진 붕괴와 극단적 핸드헬드 추적을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504764179", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A handheld camera, with extreme shakiness and jitter, rapidly tracks a crumbling urban landscape during an earthquake, the ground visibly fracturing, as the camera struggles to keep the chaotic destruction of buildings in frame.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504764179", "fragment_map": [{ "조각": "extreme shakiness and jitter", "효과": "카메라에 불규칙하고 강한 미세 진동 부여" }, { "조각": "rapidly tracks a crumbling urban landscape", "효과": "붕괴하는 도시를 빠르게 따라가는 이동 설정" }, { "조각": "ground visibly fracturing", "효과": "지면 균열을 명확한 사건 변화로 표시" }, { "조각": "struggles to keep ... buildings in frame", "효과": "프레이밍 실패감을 더해 현장 관찰자 시점 강화" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-21", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·공개 결과 GIF 확인" } }
  },
  {
    title: "Linear Browser Testing — 코드 변경과 실제 화면 검증을 한 세션에", category: "웹·앱 UI", date: "2026-08-21", url: "https://linear.app/changelog/2026-08-20-coding-sessions-environments-browser-use-and-updated-pricing#browser-testing",
    summary: "에이전트가 앱을 실행해 브라우저 흐름을 탐색하고 전후 스크린샷과 검증 결과를 코드 변경 옆에 돌려주는 Linear의 최신 실제 제품 화면.", note: "코드 작성→실행→사용자 흐름 테스트→전후 시각 증거→수정 반복을 한 작업 단위로 묶어 AI 코딩 도구의 완료 기준과 신뢰도를 화면 안에서 명확히 함.", tags: ["#웹앱UI", "#Linear", "#브라우저테스트", "#코딩에이전트", "#검증", "#테크IT"], thumbnail: "https://webassets.linear.app/images/ornj730p/production/4949ed5cd70ac79c7cb914eb65373f5e494af720-3600x2160.png?auto=format&dpr=2&q=95", visual: { background: "#17191c", accent: "#7c6df2", ink: "#f7f7f8", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "RUN / TEST / PROVE" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Linear 공식 2026-08-20 릴리스가 에이전트의 브라우저 탐색, 전후 스크린샷과 재검증을 실제 제품 화면으로 보여 줘 증거 기반 코딩 세션 패턴으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://webassets.linear.app/images/ornj730p/production/4949ed5cd70ac79c7cb914eb65373f5e494af720-3600x2160.png?auto=format&dpr=2&q=95", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "코딩 세션·실행 앱 브라우저·전후 스크린샷·검증 결과", "flow": "코드 변경→환경 실행→브라우저 흐름 테스트→전후 이미지 검토→문제 수정·재실행" } }, "출처": { "소스": "Linear / Coding sessions: environments, browser use, and updated pricing", "수집일": "2026-08-21", "수집사유": "2026-08-20 공식 릴리스에서 실제 브라우저 테스트 화면과 HTTP 200 대표 PNG 확인" } }
  },
  {
    title: "Logotypes & Marks Vol. 02 — 15개 업종의 개념을 글자와 기호로 압축", category: "비주얼 그래픽", date: "2026-08-21", url: "https://www.behance.net/gallery/254167279/Logotypes-Marks-Vol-02-2026",
    summary: "서로 다른 15개 브랜드의 아이디어를 굵기·대칭·음각·문자 결합 방식이 다른 로고타입과 심벌로 정리한 2026 마크 컬렉션.", note: "같은 제시 형식 안에서 업종별 개념이 획·카운터·실루엣으로 어떻게 달라지는지 비교할 수 있어 네이밍 단계의 로고 방향 탐색과 형태 중복 검수에 유용함.", tags: ["#비주얼그래픽", "#로고타입", "#심벌", "#타이포그래피", "#그리드"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0962fd254167279.6a7c31a2f34f2.png", visual: { background: "#f0eee9", accent: "#242424", ink: "#111111", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "TYPE / MARK / SYSTEM" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "공개 프로젝트가 15개 실제 브랜드 마크를 동일한 편집 체계로 제시해 획·대칭·음각·문자 결합의 재사용 가능한 로고 탐색 문법을 비교 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["스위스", "모노톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0962fd254167279.6a7c31a2f34f2.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "format": "15개 로고타입·심벌을 동일 여백과 정렬로 비교", "extractable_rules": "획 대비·대칭·음각·이니셜 결합·업종 은유" } }, "출처": { "소스": "Behance / Moataz sayed", "수집일": "2026-08-21", "수집사유": "2026-08-12 공개 프로젝트에서 전체 로고 컬렉션과 HTTP 200 대표 PNG 확인" } }
  },
  {
    title: "Romix — 연결 상태를 가슴의 빛으로 말하는 여행 eSIM 마스코트", category: "브랜드", date: "2026-08-21", url: "https://www.behance.net/gallery/254094917/Romix-Brand-Identity-Mascot-Character-Design",
    summary: "문 형태의 로고와 마스코트 Romi를 만들고 검색·연결 중·완료의 다섯 기술 상태를 가슴 오브의 밝기와 동작으로 번역한 eSIM 브랜드 시스템.", note: "보이지 않는 네트워크 핸드오프를 캐릭터의 표정·빛·동작으로 전환해 온보딩, 상태 피드백, 런치 영상과 소셜 콘텐츠에서 같은 서비스 약속을 유지함.", tags: ["#브랜드", "#마스코트", "#eSIM", "#상태피드백", "#모션", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8e97a3254094917.6a7a5e47db608.jpg", visual: { background: "#15213b", accent: "#72d8ff", ink: "#f4fbff", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "SEARCH / GLOW / CONNECT" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 프로젝트가 문형 로고, 마스코트의 다섯 연결 상태와 온보딩·영상·소셜 응용을 실제 이미지로 연결해 서비스 상태를 브랜드 캐릭터 언어로 추출할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "브랜드일관성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["일러스트", "듀오톤", "중앙집중", "글로시", "유희적", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8e97a3254094917.6a7a5e47db608.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "문 형태 로고·Romi 마스코트·연결 상태별 가슴 오브 밝기·동작", "applications": "앱 온보딩·연결 상태·런치 영상·소셜 콘텐츠" } }, "출처": { "소스": "Behance / Maaddeline S", "수집일": "2026-08-21", "수집사유": "2026-08-10 공개 프로젝트에서 eSIM 서비스 상태와 마스코트 응용 화면·HTTP 200 대표 JPEG 확인" } }
  },
  {
    title: "Runway Agent Generation Controls — 승인·비용·모델 선택을 대화 흐름 안에", category: "AI 디자인", date: "2026-08-20", url: "https://help.runwayml.com/hc/en-us/articles/51601639579667-Creating-with-Runway-Agent#agent-settings",
    summary: "미디어 생성 전 승인 여부와 속도·비용·품질 우선순위를 설정하고, 모델·프롬프트·예상 크레딧을 계획 단계에서 검토하게 만든 공식 에이전트 화면.", note: "생성 버튼 하나로 자동화를 숨기지 않고 비용과 모델 선택 근거를 실행 직전에 노출해 크리에이티브 AI의 통제감과 예측 가능성을 높인 구조가 유용함.", tags: ["#AI디자인", "#RunwayAgent", "#생성승인", "#비용통제", "#모델선택", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/53493980845843", visual: { background: "#17171a", accent: "#9d7cff", ink: "#f7f5ff", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "PLAN / COST / APPROVE" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 생성 승인, 예상 크레딧과 속도·비용·품질 모델 선택을 실제 화면으로 제공해 통제 가능한 미디어 에이전트 설정 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53493980845843", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "승인 모드 선택→속도·비용·품질 우선순위 설정→모델·프롬프트·예상 크레딧 검토→생성", "ai_role": "작업 목적과 비용 제약에 맞춰 미디어 모델을 선택하고 실행 계획을 사전 노출" } }, "출처": { "소스": "Runway / Creating with Runway Agent", "수집일": "2026-08-20", "수집사유": "최근 갱신 공식 가이드에서 에이전트 설정과 생성 계획 실제 화면 확인" } }
  },
  {
    title: "Carbon Scrollable Tabs — 반응형 오버플로와 키보드 선택을 한 규칙으로", category: "웹 스타일가이드", date: "2026-08-20", url: "https://carbondesignsystem.com/components/tabs/usage/#scrollable",
    summary: "탭이 뷰포트를 넘을 때 줄바꿈 대신 수평 스크롤과 이동 화살표로 전환하고 자동·수동 키보드 선택을 구분한 Carbon 실제 상태 가이드.", note: "라벨 길이와 화면 폭이 달라져도 구조가 무너지지 않게 정렬·오버플로·포커스·활성화 방식을 한 컴포넌트 규칙으로 연결한 점이 제품 내비게이션에 바로 적용 가능함.", tags: ["#웹스타일가이드", "#Carbon", "#탭", "#반응형", "#키보드탐색", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/f547a2ab428541020b64356c48f408b4/3cbba/tab-usage-11.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "TAB / SCROLL / FOCUS" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 가이드가 스크롤 탭 실제 화면, 정렬·브레이크포인트와 자동·수동 키보드 동작을 함께 제공해 반응형 내비게이션 규칙으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/f547a2ab428541020b64356c48f408b4/3cbba/tab-usage-11.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "line tabs·contained tabs·vertical tabs", "rules": "오버플로 시 수평 스크롤·이동 화살표·좌우 방향키·자동/수동 활성화·브레이크포인트별 너비 전환" } }, "출처": { "소스": "IBM Carbon Design System / Tabs usage", "수집일": "2026-08-20", "수집사유": "최근 3주 내 갱신된 공식 가이드에서 실제 스크롤 상태와 반응형·키보드 규칙 확인" } }
  },
  {
    title: "Carbon Text Input Errors — 오류 원인과 수정 행동을 필드 바로 아래에", category: "콘텐츠 디자인 가이드", date: "2026-08-20", url: "https://carbondesignsystem.com/components/text-input/usage/#validation",
    summary: "레이블·도움말·플레이스홀더의 역할을 분리하고 잘못된 입력에는 붉은 경계, 아이콘, 구체적 오류 문장을 동시에 표시하는 실제 텍스트 입력 가이드.", note: "사라지는 플레이스홀더에 필수 정보를 맡기지 않고 지속 도움말과 오류 메시지의 교체 시점을 규칙화해 가입·설정 폼의 수정 가능성을 높이는 방식이 실무적임.", tags: ["#콘텐츠디자인", "#Carbon", "#폼라이팅", "#오류메시지", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/fbba7bf70afc3d71bc666b918417d7bf/text-input-usage-2.gif", visual: { background: "#f4f4f4", accent: "#da1e28", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "LABEL / HELP / ERROR" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 가이드가 레이블·도움말·플레이스홀더 작성 규칙과 오류 상태 실제 화면을 연결해 입력 폼의 안내·검증 카피 절차로 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/fbba7bf70afc3d71bc666b918417d7bf/text-input-usage-2.gif", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "content_model": "짧은 레이블→필요 시 지속 도움말→입력→검증 실패 시 구체적 오류 메시지", "examples": "sentence case 레이블·콜론 금지·필수 정보를 플레이스홀더에 두지 않기·오류 경계/아이콘/메시지 병행" } }, "출처": { "소스": "IBM Carbon Design System / Text input usage", "수집일": "2026-08-20", "수집사유": "최근 3주 내 갱신된 공식 가이드에서 실제 오류 GIF와 레이블·도움말·플레이스홀더 원칙 확인" } }
  },
  {
    title: "Seedream Market Assembly — 인물·제품·액세서리를 한 상업 장면으로", category: "AI 이미지 프롬프트", date: "2026-08-20", url: "https://help.runwayml.com/hc/en-us/articles/53253654113299-Creating-with-Seedream-5-0-Pro#multi-image-market",
    summary: "세 레퍼런스에서 은빛 로크 인물, 세라믹 꿀단지와 밀짚모자를 골라 아침 시장의 자연스러운 상업 사진으로 통합한 공식 결과.", note: "레퍼런스별 가져올 속성을 문장으로 명확히 나누고 배경·조명·초점·표정을 덧붙여 제품 캠페인 합성에서 정체성과 물성의 충돌을 줄이는 방식이 유용함.", prompt: "A woman in her 60s with silver locs, wearing a canvas apron, standing behind a wooden market stall. She's holding the ceramic honey jar from the second reference image and wearing the woven sun hat from the third. Morning market setting, string lights overhead, wooden crates of produce softly out of focus behind her, warm early light, documentary-style commercial photography, natural unposed expression.", tags: ["#AI이미지프롬프트", "#Seedream5", "#멀티레퍼런스", "#상업사진", "#제품합성", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/53289728908435", visual: { background: "#9b7658", accent: "#e3b85f", ink: "#fff7e8", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "PERSON / PRODUCT / PLACE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 세 입력 레퍼런스, 전체 프롬프트, Seedream 5.0 Pro 설정과 결과 이미지를 제공해 인물·제품·액세서리 결합 장면을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "소프트확산광", "따뜻"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53289728908435", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A woman in her 60s with silver locs, wearing a canvas apron, standing behind a wooden market stall. She's holding the ceramic honey jar from the second reference image and wearing the woven sun hat from the third. Morning market setting, string lights overhead, wooden crates of produce softly out of focus behind her, warm early light, documentary-style commercial photography, natural unposed expression.", "tool_model": "Runway Seedream 5.0 Pro", "params": "Image references 3개·1K/2K·1:1/4:3/3:4/16:9/9:16/3:2/2:3·output count 기본 4·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/53289728908435", "fragment_map": [{ "조각": "woman in her 60s with silver locs", "효과": "주체의 연령과 머리 특징 유지" }, { "조각": "holding the ceramic honey jar from the second reference", "효과": "두 번째 레퍼런스의 제품 형태와 재질 결합" }, { "조각": "wearing the woven sun hat from the third", "효과": "세 번째 레퍼런스의 액세서리와 직조 질감 적용" }, { "조각": "warm early light, documentary-style commercial photography", "효과": "자연스러운 아침 확산광과 상업 기록사진 톤 통일" }] } }, "출처": { "소스": "Runway / Creating with Seedream 5.0 Pro", "수집일": "2026-08-20", "수집사유": "최근 갱신 공식 가이드에서 세 레퍼런스·전체 프롬프트·모델 설정·공개 결과 이미지 확인" } }
  },
  {
    title: "Seedream Coffee Process — 브랜드 팔레트로 5단계 인포그래픽 렌더링", category: "AI 이미지 프롬프트", date: "2026-08-20", url: "https://help.runwayml.com/hc/en-us/articles/53253654113299-Creating-with-Seedream-5-0-Pro#coffee-process-infographic",
    summary: "제목과 다섯 단계 카피, 각 단계의 선형 아이콘, 크림·테라코타·포레스트 그린 팔레트를 한 패널에 정확히 구성한 공식 결과.", note: "텍스트 내용·순서·아이콘 관계와 브랜드 재질을 한 프롬프트에서 분리 지정해 캠페인 설명 그래픽과 소셜 카드 초안을 통제하는 데 참고됨.", prompt: "A clean, single-panel infographic titled \"Neighborhood Coffee Co: From Bean to Cup\" with a horizontal five-step process flow: \"1. Sourced\" \"2. Roasted\" \"3. Ground\" \"4. Brewed\" \"5. Served,\" each with a simple line-icon above it. Warm cream background, terracotta and forest-green accent colors, modern sans-serif typography, small-batch coffee shop branding aesthetic.", tags: ["#AI이미지프롬프트", "#Seedream5", "#인포그래픽", "#텍스트렌더링", "#브랜드그래픽", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/53289784398739", visual: { background: "#f3e6cd", accent: "#b55239", ink: "#294d36", radiusOne: "8px", radiusTwo: "24px", rotate: "-1deg", label: "TITLE / STEPS / ICONS" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 카피 프롬프트, Seedream 5.0 Pro 설정과 결과 이미지를 제공해 단계·아이콘·브랜드 팔레트가 결합된 단일 패널을 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "AI활용", "콘텐츠명료성"], "시각렌즈": ["스위스", "어스톤", "그리드", "여백중심", "매트", "따뜻"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53289784398739", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A clean, single-panel infographic titled \"Neighborhood Coffee Co: From Bean to Cup\" with a horizontal five-step process flow: \"1. Sourced\" \"2. Roasted\" \"3. Ground\" \"4. Brewed\" \"5. Served,\" each with a simple line-icon above it. Warm cream background, terracotta and forest-green accent colors, modern sans-serif typography, small-batch coffee shop branding aesthetic.", "tool_model": "Runway Seedream 5.0 Pro", "params": "Text to Image·reference 없음·1K/2K·1:1/4:3/3:4/16:9/9:16/3:2/2:3·output count 기본 4·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/53289784398739", "fragment_map": [{ "조각": "clean, single-panel infographic", "효과": "한 화면 안에서 독립적으로 읽히는 설명 구조" }, { "조각": "horizontal five-step process flow", "효과": "왼쪽에서 오른쪽으로 이어지는 다섯 단계 정보 위계" }, { "조각": "each with a simple line-icon above it", "효과": "각 카피와 대응하는 균일한 아이콘 위치" }, { "조각": "Warm cream ... terracotta and forest-green", "효과": "소규모 커피 브랜드의 따뜻한 3색 팔레트 통일" }] } }, "출처": { "소스": "Runway / Creating with Seedream 5.0 Pro", "수집일": "2026-08-20", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델 설정·공개 텍스트 렌더링 결과 확인" } }
  },
  {
    title: "Field-to-Mountain Truck — 측면 추적 중 배경을 스톱모션으로 전환", category: "AI 영상 프롬프트", date: "2026-08-20", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#truck-field-to-mountain",
    summary: "오른쪽으로 걷는 여성을 같은 측면 축에서 추적하면서 평평한 꽃밭이 산 정상으로 끊김 없이 펼쳐지는 공식 Gen-4.5 결과.", note: "주체와 카메라 방향을 같은 문장으로 고정하고 배경 변형만 단계화해 제품 런웨이·여행 캠페인의 연속 공간 전환을 설계하기 좋음.", prompt: "The camera trucks right, tracking a woman walking right along a in a field; as she progresses, the flat environment organically transforms and unfolds with a stop motion effect from a flower field to a mountaintop setting, each transformation seamless and continuous. low contrast. art film, muted warm color palette.", tags: ["#AI영상프롬프트", "#Gen45", "#트럭샷", "#스톱모션", "#공간전환", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/46974514790163", visual: { background: "#a89a7c", accent: "#d8b45f", ink: "#fff9ea", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "TRACK / TRANSFORM / CONTINUE" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 측면 추적과 꽃밭에서 산 정상으로 이어지는 연속 변형을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "비대칭", "매트", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46974514790163", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "The camera trucks right, tracking a woman walking right along a in a field; as she progresses, the flat environment organically transforms and unfolds with a stop motion effect from a flower field to a mountaintop setting, each transformation seamless and continuous. low contrast. art film, muted warm color palette.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46974514790163", "fragment_map": [{ "조각": "camera trucks right, tracking a woman walking right", "효과": "주체와 카메라의 측면 이동 방향 일치" }, { "조각": "environment organically transforms and unfolds", "효과": "평면 배경이 이동 중 순차적으로 재구성" }, { "조각": "from a flower field to a mountaintop", "효과": "전환 시작·종료 공간을 명확히 고정" }, { "조각": "stop motion effect ... seamless and continuous", "효과": "재료감 있는 변형과 끊김 없는 동선 결합" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-20", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·공개 결과 GIF 확인" } }
  },
  {
    title: "Clay Character Whip Pan — 두 표정을 모션 블러 한 번으로 연결", category: "AI 영상 프롬프트", date: "2026-08-20", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#whip-pan-clay-characters",
    summary: "당황한 점토 탐정의 과장된 표정에서 장난스러운 악당의 미소로 급격히 회전해 두 인물을 한 번의 시네마틱 연결로 묶은 공식 결과.", note: "시작 표정·종료 표정·회전 속도·재질 스타일을 짧게 분리해 캐릭터 소개와 반응 컷 사이의 에너지 있는 전환을 프리비주얼하기 좋음.", prompt: "A rapid whip pan dramatically connects two distinct claymation characters, starting from a bewildered detective's exaggerated expression, then snapping to a mischievous antagonist's sly grin, capturing their dynamic, expressive claymation movements in a cinematic style.", tags: ["#AI영상프롬프트", "#Gen45", "#WhipPan", "#클레이메이션", "#캐릭터전환", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/46989750463763", visual: { background: "#633b32", accent: "#ef9c4a", ink: "#fff4df", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "FACE / BLUR / FACE" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 두 점토 캐릭터의 표정을 급격한 휩팬으로 연결하는 전환을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "비대칭", "매트", "유희적", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46989750463763", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A rapid whip pan dramatically connects two distinct claymation characters, starting from a bewildered detective's exaggerated expression, then snapping to a mischievous antagonist's sly grin, capturing their dynamic, expressive claymation movements in a cinematic style.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46989750463763", "fragment_map": [{ "조각": "rapid whip pan dramatically connects", "효과": "빠른 회전과 모션 블러로 장면 연결" }, { "조각": "bewildered detective's exaggerated expression", "효과": "전환 시작점의 당황한 표정을 명확히 고정" }, { "조각": "snapping to a mischievous antagonist's sly grin", "효과": "종료점의 악당 표정과 대비 생성" }, { "조각": "expressive claymation movements", "효과": "점토 재질과 과장된 프레임별 움직임 유지" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-20", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·공개 결과 GIF 확인" } }
  },
  {
    title: "Runway Dev — 모델 라우터와 레시피를 한 API 경험으로", category: "AI 디자인", date: "2026-08-19", url: "https://runway.com/news/company-news/introducing-runway-dev#whats-included-in-runway-dev",
    summary: "이미지·영상·오디오 모델을 비용·품질·지연 기준으로 라우팅하고, 반복 제작을 레시피와 워크플로 엔드포인트로 묶은 개발자용 AI 미디어 플랫폼.", note: "모델 선택을 사용자에게 모두 떠넘기지 않고 목적별 프리셋과 제약 조건으로 단계화한 구조가 생성형 미디어 제품의 복잡도 설계에 참고됨.", tags: ["#AI디자인", "#RunwayDev", "#모델라우터", "#생성워크플로", "#개발자도구", "#테크IT"], thumbnail: "https://d3phaj0sisr2ct.cloudfront.net/site/images/sanity/2026/07/runway-dev-cover-2ced0585-606c-47b7-99b5-6860fc9b9206.jpg", visual: { background: "#0d0d0d", accent: "#a7ff6a", ink: "#f5f5f5", radiusOne: "24px", radiusTwo: "8px", rotate: "-1deg", label: "ROUTER / RECIPE / API" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 출시 페이지가 모델 라우터의 제약 설정, 단일 엔드포인트, 레시피와 워크플로 구조를 공개해 생성형 미디어 제품의 선택·실행 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://d3phaj0sisr2ct.cloudfront.net/site/images/sanity/2026/07/runway-dev-cover-2ced0585-606c-47b7-99b5-6860fc9b9206.jpg", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "요청 입력→비용·품질·지연 제약 설정→적합 모델 자동 선택→레시피 또는 커스텀 워크플로 실행", "ai_role": "서로 다른 미디어 모델의 선택과 제작 파이프라인을 한 인터페이스로 추상화" } }, "출처": { "소스": "Runway / Introducing Runway Dev", "수집일": "2026-08-19", "수집사유": "2026-07-23 공식 출시 페이지에서 공개 대표 이미지와 모델 라우터·레시피·워크플로 구조 확인" } }
  },
  {
    title: "Figma Nested Folders — 10단계 계층과 상속 권한을 함께 보여 주는 파일 브라우저", category: "웹·앱 UI", date: "2026-08-19", url: "https://help.figma.com/hc/en-us/articles/41753150926103-Updates-to-Figma-s-file-management#folders-can-now-be-nested",
    summary: "프로젝트를 폴더로 통합하고 최대 10단계 중첩, 부모 권한 상속과 제한 접근을 파일 브라우저·공유 모달에서 명시한 실제 제품 화면.", note: "깊은 계층을 단순 트리로만 표현하지 않고 위치·색상·권한 상속을 같은 모델로 묶어 대규모 팀 자산 탐색과 접근 제어를 함께 설계한 점이 유용함.", tags: ["#웹앱UI", "#Figma", "#파일브라우저", "#권한상속", "#정보구조", "#테크IT"], thumbnail: "https://help.figma.com/hc/article_attachments/42202327104023", visual: { background: "#f3f3f3", accent: "#7c3aed", ink: "#1f1f1f", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "FOLDER / NEST / INHERIT" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Figma 공식 가이드가 중첩 폴더 실제 화면과 10단계 계층, 부모 권한 상속·제한 규칙을 함께 제공해 팀 자산 브라우저의 정보·권한 모델로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "브랜드일관성", "접근성", "인터랙션"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://help.figma.com/hc/article_attachments/42202327104023", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "중첩 폴더가 펼쳐진 파일 브라우저와 권한 상태", "flow": "상위 폴더 진입→하위 폴더 탐색→상속 권한 확인→필요 시 제한 접근 설정" } }, "출처": { "소스": "Figma Learn / Updates to Figma's file management", "수집일": "2026-08-19", "수집사유": "2026-08-03 적용 공식 가이드에서 중첩 폴더 실제 화면과 계층·권한 규칙 확인" } }
  },
  {
    title: "Tero Saarinen Company — 움직임의 흔적을 활자와 프레임에 번역", category: "비주얼 그래픽", date: "2026-08-19", url: "https://www.behance.net/gallery/245599165/Tero-Saarinen-Company-Study-of-life-through-dance",
    summary: "무용수의 비정형 움직임과 무대의 잔상을 절단된 타이포그래피, 강한 흑백 대비와 가변 프레임으로 확장한 공연 예술 비주얼 시스템.", note: "정지 그래픽에서도 신체의 방향성과 장면 전환이 느껴지도록 글자 형태·크롭·영상 프레임을 같은 운동 원리로 묶은 방식이 문화 콘텐츠 키비주얼에 전이 가능함.", tags: ["#비주얼그래픽", "#공연예술", "#키네틱타이포", "#흑백", "#모션그래픽"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/e63b69245599165.6a3a76502e86f.jpg", visual: { background: "#111111", accent: "#f2f2f2", ink: "#ffffff", radiusOne: "0", radiusTwo: "8px", rotate: "-2deg", label: "BODY / TYPE / MOTION" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Best of Behance 공개 프로젝트가 실제 포스터·영상·타이포 적용과 무용단의 움직임 철학을 함께 보여 줘 공연 콘텐츠용 키네틱 편집 스타일로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "하드라이트", "절제", "타이포처리", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/e63b69245599165.6a3a76502e86f.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "composition": "무용수 실루엣과 절단 활자를 비대칭 프레임 안에서 교차", "motion_logic": "신체의 회전·잔상·호흡을 타이포 변형과 영상 전환 속도로 반복" } }, "출처": { "소스": "Behance / Werklig — Tero Saarinen Company", "수집일": "2026-08-19", "수집사유": "2026-08-04 공개 Best of Behance 프로젝트에서 실제 이미지·영상과 브랜드 전략 설명 확인" } }
  },
  {
    title: "Uniscent — 향의 확산을 U·S 모노그램과 확대 스캔 질감으로", category: "브랜드", date: "2026-08-19", url: "https://www.behance.net/gallery/253717077/Uniscent-Visual-Identity",
    summary: "향이 용기에서 빠져나오는 순간을 U와 S가 연결된 모노그램으로 만들고, 원료 사진의 인쇄·스캔·확대 질감을 디지털·패키지 전반에 적용한 아이덴티티.", note: "보이지 않는 감각을 로고 제스처, 모노스페이스 활자와 물성 이미지라는 세 층으로 번역해 기술적 신뢰와 감각적 기억을 동시에 확보한 방식이 참고됨.", tags: ["#브랜드", "#Uniscent", "#모노그램", "#모노스페이스", "#스캔질감", "#패키지"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c33a4e253717077.6a709f645c016.jpg", visual: { background: "#ece9df", accent: "#807567", ink: "#171717", radiusOne: "24px", radiusTwo: "0", rotate: "1deg", label: "SCENT / SCAN / SYSTEM" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Best of Behance 공개 프로젝트가 모노그램 논리, 모노스페이스 활자, 확대 스캔 원료 사진과 실제 물리·디지털 적용을 보여 줘 감각 서비스의 브랜드 시스템으로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["스위스", "모노톤", "그리드", "여백중심", "필름그레인", "매트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c33a4e253717077.6a709f645c016.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "U·S 모노그램·모노스페이스 활자·확대 스캔 원료 이미지·패키지·디지털", "concept": "보이지 않는 향의 확산을 선형 제스처와 물성 이미지로 가시화" } }, "출처": { "소스": "Behance / Lundgren+Lindqvist — Uniscent", "수집일": "2026-08-19", "수집사유": "2026-08-03 공개 Best of Behance 프로젝트에서 공식 설명과 실제 브랜드 적용 이미지 확인" } }
  },
  {
    title: "Seedream Seat Mapping — 색상 마커로 다인물 좌석을 정확히 배치", category: "AI 이미지 프롬프트", date: "2026-08-19", url: "https://help.runwayml.com/hc/en-us/articles/53253654113299-Creating-with-Seedream-5-0-Pro#multi-subject-positioning",
    summary: "인물 레퍼런스와 색상 원이 표시된 좌석 레퍼런스를 연결해 각 사람을 대응 좌석에만 배치하고 나머지 장면 구성을 유지한 공식 결과.", note: "여러 인물을 한 장면에 합성할 때 이름 대신 색상 마커를 공간 좌표로 쓰는 짧은 지시가 그룹 캠페인·좌석도 기반 합성의 오류를 줄이는 통제 방식으로 유용함.", prompt: "Place only the people in @Image 1 in the corresponding seat in @Image 2 marked with the matching circle color.", tags: ["#AI이미지프롬프트", "#Seedream5", "#다인물합성", "#공간배치", "#레퍼런스", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/53289728918547", visual: { background: "#e9e5dc", accent: "#e34d59", ink: "#202020", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "PEOPLE / MARKER / SEAT" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 인물·좌석 레퍼런스, 전체 프롬프트, Seedream 5.0 Pro 설정과 결과 이미지를 제공해 색상 마커 기반 다인물 배치를 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "그리드", "중앙집중", "소프트확산광", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53289728918547", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Place only the people in @Image 1 in the corresponding seat in @Image 2 marked with the matching circle color.", "tool_model": "Runway Seedream 5.0 Pro", "params": "Image references 2개·최대 10 references·1K/2K·1:1/4:3/3:4/16:9/9:16/3:2/2:3·output count 기본 4·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/53289728918547", "fragment_map": [{ "조각": "Place only the people in @Image 1", "효과": "첫 레퍼런스에서 인물만 추출하고 주변 요소 제외" }, { "조각": "in the corresponding seat in @Image 2", "효과": "두 번째 레퍼런스의 좌석 구조와 원근 유지" }, { "조각": "matching circle color", "효과": "색상 마커를 인물-좌석 대응 좌표로 사용" }] } }, "출처": { "소스": "Runway / Creating with Seedream 5.0 Pro", "수집일": "2026-08-19", "수집사유": "최근 갱신 공식 가이드에서 두 입력 레퍼런스·전체 프롬프트·모델 설정·공개 결과 이미지 확인" } }
  },
  {
    title: "Seedance Watercolor Panic — 한 이미지에서 감정 변화의 멀티숏 구성", category: "AI 영상 프롬프트", date: "2026-08-19", url: "https://help.runwayml.com/hc/en-us/articles/50488490233363-Creating-with-Seedance-2-0#watercolor-panic-multishot",
    summary: "한 여성 이미지에서 시험을 잊었다는 깨달음의 감정 변화를 여러 숏으로 전개하고 전체 장면을 수채 애니메이션 질감으로 통일한 공식 결과.", note: "사건·감정 변화·스타일을 짧은 세 문장 조각으로 분리해 단일 레퍼런스에서도 내러티브 컷 구성을 유도하는 방식이 숏폼 스토리보드 초안에 유용함.", prompt: "multishot video. the woman realizes that she forgot there was a test that day. watercolor animation style", tags: ["#AI영상프롬프트", "#Seedance2", "#멀티숏", "#수채애니메이션", "#감정전개", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/50576830525075", visual: { background: "#e8edf2", accent: "#6c87a8", ink: "#202838", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "EVENT / EMOTION / MULTISHOT" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 입력 이미지, 전체 프롬프트, Seedance 2.0 사양과 결과 GIF를 제공해 깨달음의 감정 변화를 수채 멀티숏으로 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["일러스트", "파스텔", "비대칭", "매트", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/50576830525075", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "multishot video. the woman realizes that she forgot there was a test that day. watercolor animation style", "tool_model": "Runway Seedance 2.0", "params": "Reference image 1개·References mode·5–15초·21:9/16:9/4:3/1:1/3:4/9:16·480p/720p/1080p·High bitrate 기본·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/50576830525075", "fragment_map": [{ "조각": "multishot video", "효과": "한 클립 안에 복수 시점과 장면 전환 구성" }, { "조각": "realizes that she forgot there was a test", "효과": "평온에서 당황으로 이어지는 명확한 감정 사건 부여" }, { "조각": "watercolor animation style", "효과": "모든 숏의 번짐·색면·윤곽 질감을 수채화로 통일" }] } }, "출처": { "소스": "Runway / Creating with Seedance 2.0", "수집일": "2026-08-19", "수집사유": "최근 공개 공식 가이드에서 입력 이미지·전체 프롬프트·모델 사양·공개 결과 GIF 확인" } }
  },
  {
    title: "Seedance Freeze-time Weave — 멈춘 전투 장면 사이를 연속 통과", category: "AI 영상 프롬프트", date: "2026-08-19", url: "https://help.runwayml.com/hc/en-us/articles/50488490233363-Creating-with-Seedance-2-0#freeze-time-continuous-shot",
    summary: "전투 장면 첫 프레임의 모든 움직임을 정지시키고 카메라만 인물과 오브젝트 사이를 극적으로 통과하게 만든 단일 연속 숏 결과.", note: "첫 프레임 역할, 시간 상태, 컷 금지, 카메라 경로를 순서대로 명시해 제품 파편·군중·액션 장면의 불릿타임 프리비주얼에 적용하기 좋음.", prompt: "use Image 1 as the starting frame for a single, continuous shot in freeze time. the camera dramatically weaves through the completely frozen scene", tags: ["#AI영상프롬프트", "#Seedance2", "#FreezeTime", "#연속숏", "#카메라동선", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/50576989804947", visual: { background: "#272a2d", accent: "#e05d43", ink: "#f7f4ef", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "FREEZE / WEAVE / CONTINUE" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 시작 프레임, 전체 프롬프트, Seedance 2.0 설정과 결과 GIF를 제공해 정지 시간 속 연속 카메라 통과를 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/50576989804947", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "use Image 1 as the starting frame for a single, continuous shot in freeze time. the camera dramatically weaves through the completely frozen scene", "tool_model": "Runway Seedance 2.0", "params": "Reference image 1개·References mode·5–15초·21:9/16:9/4:3/1:1/3:4/9:16·480p/720p/1080p·High bitrate 기본·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/50576989804947", "fragment_map": [{ "조각": "use Image 1 as the starting frame", "효과": "입력 이미지를 영상의 정확한 첫 구도로 고정" }, { "조각": "single, continuous shot", "효과": "중간 컷 없이 하나의 카메라 동선 유지" }, { "조각": "in freeze time", "효과": "인물과 환경의 모든 동작을 정지" }, { "조각": "camera dramatically weaves through", "효과": "정지 오브젝트 사이를 굴곡진 경로로 통과" }] } }, "출처": { "소스": "Runway / Creating with Seedance 2.0", "수집일": "2026-08-19", "수집사유": "최근 공개 공식 가이드에서 시작 이미지·전체 프롬프트·모델 사양·공개 결과 GIF 확인" } }
  },
  {
    title: "Figma Generative Plugins — 대화로 도구를 만들고 캔버스에서 즉시 실행", category: "AI 디자인", date: "2026-08-18", url: "https://help.figma.com/hc/en-us/articles/39582753756695-What-s-new-from-Config-2026#generative-plugins",
    summary: "Figma 에이전트에 레이어 정렬·간격 통일·텍스트 치환 같은 반복 작업을 설명하면 파일 안에서 재사용 가능한 플러그인과 네이티브 컨트롤을 만드는 공식 화면.", note: "AI가 결과 이미지만 만드는 대신 팀의 반복 조작을 작은 도구로 바꾸고 사용자가 캔버스에서 결과를 검토·수정하게 하는 인간 개입형 흐름이 실무적임.", tags: ["#AI디자인", "#FigmaAgent", "#생성형플러그인", "#자동화", "#테크IT"], thumbnail: "https://help.figma.com/hc/article_attachments/41434065586327", visual: { background: "#f3f1ff", accent: "#7c5cff", ink: "#201d2e", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "PROMPT / BUILD / RUN" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept", "근거": "Figma 공식 가이드가 에이전트 프롬프트, 생성 플러그인 모달과 캔버스 컨트롤 실제 화면을 제공해 반복 조작을 파일 내 도구로 전환하는 흐름을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://help.figma.com/hc/article_attachments/41434065586327", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "반복 작업을 자연어로 설명→에이전트가 플러그인 생성→캔버스 컨트롤로 실행→결과 검토·재사용", "ai_role": "레이어·간격·텍스트·색상 조작을 실행 가능한 파일 내 도구로 변환" } }, "출처": { "소스": "Figma Learn / What's new from Config 2026", "수집일": "2026-08-18", "수집사유": "최근 갱신 공식 가이드에서 생성형 플러그인 모달과 실제 캔버스 실행 화면 확인" } }
  },
  {
    title: "Carbon v11 Layered Shell — 테마 토큰으로 앱 셸과 레이어를 통합", category: "웹 스타일가이드", date: "2026-08-18", url: "https://carbondesignsystem.com/migrating/guide/design/#ui-shell",
    summary: "컴포넌트별 색을 걷어내고 Carbon 테마 토큰과 레이어 모델로 UI 셸의 밝기·위계를 일관되게 바꾼 v11 마이그레이션 실제 화면.", note: "제품 셸을 별도 예외 색으로 유지하지 않고 공통 테마·레이어 토큰에 흡수해 다크모드와 중첩 패널의 유지보수 비용을 줄이는 방식이 참고됨.", tags: ["#웹스타일가이드", "#Carbon", "#디자인토큰", "#테마", "#앱셸", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/3a67a4cc1003539f356ae3f08b1a4687/3cbba/ui-shell-themes.png", visual: { background: "#161616", accent: "#0f62fe", ink: "#f4f4f4", radiusOne: "0", radiusTwo: "8px", rotate: "1deg", label: "THEME / LAYER / SHELL" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 마이그레이션 가이드가 테마별 UI 셸 실제 화면과 공통 레이어·색 토큰 규칙을 제공해 제품 셸의 다크·라이트 구조로 바로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "브랜드일관성", "접근성", "인터랙션"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/3a67a4cc1003539f356ae3f08b1a4687/3cbba/ui-shell-themes.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "Carbon theme tokens·layering tokens·contextual layer tokens", "components": "UI shell·popover·notification·tabs의 v11 규칙" } }, "출처": { "소스": "IBM Carbon Design System / v11 design migration", "수집일": "2026-08-18", "수집사유": "최근 갱신 공식 문서에서 테마형 UI 셸 실제 PNG와 토큰 마이그레이션 규칙 확인" } }
  },
  {
    title: "Carbon List Copy — 병렬 문장과 줄바꿈으로 목록의 스캔 리듬 유지", category: "콘텐츠 디자인 가이드", date: "2026-08-18", url: "https://carbondesignsystem.com/components/list/usage/#content",
    summary: "목록 항목을 같은 문장 구조로 맞추고 긴 내용은 자르지 않은 채 마커 아래로 줄바꿈하며 순서형·비순서형의 의미를 실제 화면으로 구분한 가이드.", note: "기능 목록·설정 설명에서 문장 태도를 섞지 않고 마커 정렬과 줄바꿈까지 함께 검수하는 즉시 실행 가능한 체크리스트로 쓰기 좋음.", tags: ["#콘텐츠디자인가이드", "#목록", "#마이크로카피", "#줄바꿈", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/fbd21772494fe201e998f393c7de97f0/3cbba/list-usage-overflow.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "PARALLEL / WRAP / ALIGN" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 병렬 문장·논리적 순서·다중 줄 줄바꿈·마커 정렬 원칙을 실제 목록 화면과 연결해 제품 카피 검수 절차로 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/fbd21772494fe201e998f393c7de97f0/3cbba/list-usage-overflow.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "항목 중요도 판단→ordered/unordered 선택→문장 구조 병렬화→긴 문장 줄바꿈→마커 상단 정렬 확인", "visible_examples": "순서형·비순서형 목록의 다중 줄 줄바꿈과 마커 정렬" } }, "출처": { "소스": "IBM Carbon Design System / List usage", "수집일": "2026-08-18", "수집사유": "2026-08-13 갱신 공식 문서에서 실제 목록 화면과 카피·오버플로 규칙 확인" } }
  },
  {
    title: "Zeno — 데스크톱 화면을 모바일 초안과 핸드오프 점검으로", category: "Figma 플러그인", date: "2026-08-18", url: "https://www.figma.com/community/plugin/1653711948873377984",
    summary: "선택한 데스크톱 레이아웃을 모바일 버전으로 재배치하고 레이어·간격·이름을 정리하며 분리된 스타일과 불규칙 값을 핸드오프 전에 표시하는 플러그인.", note: "완성형 자동 변환보다 Auto Layout이 정돈된 파일에서 1차 모바일 초안을 만들고 사람이 예외를 다듬는 현실적인 반복 절감 도구로 평가할 수 있음.", tags: ["#Figma플러그인", "#반응형", "#AutoLayout", "#핸드오프", "#테크IT"], thumbnail: "https://uploads-us-west-2.insided.com/figma-en/attachment/9b5389c7-da4e-4150-aaa4-02174e42f111.png", visual: { background: "#edf2ff", accent: "#5c6cff", ink: "#18203a", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "ADAPT / CLEAN / HANDOFF" },
    review: { "유형": "Figma 플러그인", "가치축_이름": "유용성", "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "공식 Figma Community 링크와 공개 실행 화면이 데스크톱→모바일 변환, 레이어 정리와 핸드오프 오류 표시를 보여 줘 반복 반응형 초안 작업 시간을 직접 줄인다.", "metadata": { "정보렌즈": ["사용자흐름", "브랜드일관성", "접근성", "인터랙션"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://uploads-us-west-2.insided.com/figma-en/attachment/9b5389c7-da4e-4150-aaa4-02174e42f111.png", "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "workflow": "데스크톱 프레임 선택→Adapt to Mobile→Clean Up→Prepare for Dev→사람이 예외 수정", "repeated_task": "모바일 초안 재배치·레이어 정리·핸드오프 점검" } }, "출처": { "소스": "Figma Forum / Zeno creator showcase", "수집일": "2026-08-18", "수집사유": "2026-07-01 공개 글에서 공식 Community 링크·기능 범위·실행 화면 확인" } }
  },
  {
    title: "Ballet Stage Expansion — 단일 배우 주변을 군무 장면으로 확장", category: "AI 이미지 프롬프트", date: "2026-08-18", url: "https://help.runwayml.com/hc/en-us/articles/50317213804435-Creating-images-with-Nano-Banana#ballet-stage",
    summary: "무대 위 배우 레퍼런스를 유지하면서 주변을 발레 무용수 군집으로 확장해 조명·공간·주인공 위계를 보존한 Nano Banana Pro 공식 결과.", note: "기존 캠페인 주인공을 바꾸지 않고 주변 인원과 장면 규모만 확장하는 짧은 편집 지시라 공연·패션 키비주얼의 그룹 변주에 유용함.", prompt: "Have the stage filled with ballet dancers around her", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#레퍼런스편집", "#군무", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/50580413037075", visual: { background: "#2a2444", accent: "#e68cc8", ink: "#fff6fb", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "SUBJECT / ENSEMBLE / STAGE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 입력 이미지, 전체 편집 프롬프트, Nano Banana Pro 설정과 결과 PNG를 제공해 주인공 보존형 군무 장면 확장을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "중앙집중", "하드라이트", "럭셔리"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/50580413037075", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Have the stage filled with ballet dancers around her", "tool_model": "Runway Nano Banana Pro", "params": "Image edit·입력 레퍼런스 1개·최대 14 references·1K/2K/4K·aspect ratio는 첫 레퍼런스 일치", "output_url": "https://help.runwayml.com/hc/article_attachments/50580413037075", "fragment_map": [{ "조각": "Have the stage filled", "효과": "기존 무대의 빈 영역을 군집 장면으로 확장" }, { "조각": "with ballet dancers", "효과": "추가 인물의 의상과 동작 범주를 발레로 고정" }, { "조각": "around her", "효과": "원래 배우를 중심 주체로 보존하고 주변에 군무 배치" }] } }, "출처": { "소스": "Runway / Creating images with Nano Banana", "수집일": "2026-08-18", "수집사유": "최근 갱신 공식 가이드에서 입력·프롬프트·모델 사양·공개 결과 PNG 확인" } }
  },
  {
    title: "Jade Statue Role Swap — 재질 규칙을 조각상과 관람객에 교차 적용", category: "AI 이미지 프롬프트", date: "2026-08-18", url: "https://help.runwayml.com/hc/en-us/articles/50317213804435-Creating-images-with-Nano-Banana#jade-marble-swap",
    summary: "박물관 레퍼런스에서 조각상은 옥으로, 사람은 대리석으로 바꿔 형태와 공간은 유지하면서 두 재질의 역할만 교환한 공식 결과.", note: "대상 집합마다 서로 다른 재질 규칙을 한 문장에 지정해 전시·제품 캠페인의 초현실적 소재 치환을 명료하게 통제하는 예시임.", prompt: "All the marble statues are made of jade and all the people are made of marble", tags: ["#AI이미지프롬프트", "#NanoBananaPro", "#재질치환", "#옥", "#대리석", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/50580413040275", visual: { background: "#d9ddd6", accent: "#3f876b", ink: "#17251f", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "JADE / MARBLE / SWAP" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 박물관 입력 이미지, 전체 편집 프롬프트, Nano Banana Pro 사양과 결과 PNG를 제공해 두 대상군의 옥·대리석 재질 교환을 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "AI활용", "콘텐츠명료성"], "시각렌즈": ["3D", "모노톤", "그리드", "글로시", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/50580413040275", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "All the marble statues are made of jade and all the people are made of marble", "tool_model": "Runway Nano Banana Pro", "params": "Image edit·입력 레퍼런스 1개·최대 14 references·1K/2K/4K·aspect ratio는 첫 레퍼런스 일치", "output_url": "https://help.runwayml.com/hc/article_attachments/50580413040275", "fragment_map": [{ "조각": "All the marble statues", "효과": "첫 대상 집합을 박물관의 기존 조각상 전체로 지정" }, { "조각": "are made of jade", "효과": "조각상을 반투명 녹색 옥 재질로 변환" }, { "조각": "all the people", "효과": "두 번째 대상 집합을 관람객 전체로 분리" }, { "조각": "are made of marble", "효과": "사람의 피부·의복을 석조 질감으로 치환" }] } }, "출처": { "소스": "Runway / Creating images with Nano Banana", "수집일": "2026-08-18", "수집사유": "최근 갱신 공식 가이드에서 입력·프롬프트·모델 사양·공개 결과 PNG 확인" } }
  },
  {
    title: "Chef-to-Diner Rack Focus — 손의 디테일에서 식사의 반응으로", category: "AI 영상 프롬프트", date: "2026-08-18", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#rack-focus-chef",
    summary: "셰프의 허브 장식 손을 먼저 선명하게 잡은 뒤 초점을 건너편 손님의 미소로 이동해 조리와 반응을 한 숏 안에서 연결한 Gen-4.5 결과.", note: "초기 초점·전환 대상·마지막 초점과 흐려질 대상을 순서대로 명시해 음식·서비스 광고의 원인과 감정 반응을 컷 없이 보여 주기 좋음.", prompt: "A rack focus shot transitions from a close-up on a chef's hand meticulously garnishing a plate of haute cuisine, with individual herbs sharply defined, to the delighted expression of a diner across the table, their smile becoming crystal clear as the chef's hand gently blurs into the background.", tags: ["#AI영상프롬프트", "#Gen45", "#RackFocus", "#푸드광고", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515641107", visual: { background: "#47382e", accent: "#d7b77f", ink: "#fff5e2", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "HAND / SHIFT / REACTION" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 손→식사자 표정의 랙 포커스와 전후 흐림을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "중앙집중", "소프트확산광", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515641107", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A rack focus shot transitions from a close-up on a chef's hand meticulously garnishing a plate of haute cuisine, with individual herbs sharply defined, to the delighted expression of a diner across the table, their smile becoming crystal clear as the chef's hand gently blurs into the background.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515641107", "fragment_map": [{ "조각": "close-up on a chef's hand", "효과": "초기 초점을 셰프 손과 접시에 고정" }, { "조각": "individual herbs sharply defined", "효과": "허브의 작은 형태까지 시작 프레임에서 선명하게 표시" }, { "조각": "to the delighted expression of a diner", "효과": "초점을 건너편 사람의 감정 반응으로 이동" }, { "조각": "chef's hand gently blurs", "효과": "전경을 부드럽게 흐려 마지막 초점 분리" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-18", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·공개 결과 GIF 확인" } }
  },
  {
    title: "Botanical Gimbal Ascent — 정원 통로를 따라가며 전체 미로를 공개", category: "AI 영상 프롬프트", date: "2026-08-18", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#gimbal-garden",
    summary: "정원사의 이동을 따라 양치식물과 꽃 사이를 통과한 뒤 카메라가 상승해 햇빛이 얼룩진 식물 미로 전체를 탑뷰로 공개하는 공식 결과.", note: "추적·장애물 사이 이동·상승·최종 오버헤드라는 복합 카메라 경로를 단계별 조각으로 분리해 공간 소개 영상에 적용하기 좋음.", prompt: "A gimbal, executing complex and precise camera movement, begins tracking a gardener's path through a lush, overgrown botanical garden, weaving between towering ferns and blooming flowers, before ascending into an overhead angle, showcasing the entire sprawling, verdant labyrinth beneath a canopy of sun-dappled leaves, illuminated by natural daylight.", tags: ["#AI영상프롬프트", "#Gen45", "#Gimbal", "#공간동선", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515632147", visual: { background: "#244f35", accent: "#9ec66e", ink: "#f2f8e8", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "TRACK / WEAVE / ASCEND" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 정원사 추적·식물 사이 이동·상승·오버헤드 공개를 한 숏으로 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "고밀도", "소프트확산광", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515632147", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A gimbal, executing complex and precise camera movement, begins tracking a gardener's path through a lush, overgrown botanical garden, weaving between towering ferns and blooming flowers, before ascending into an overhead angle, showcasing the entire sprawling, verdant labyrinth beneath a canopy of sun-dappled leaves, illuminated by natural daylight.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515632147", "fragment_map": [{ "조각": "begins tracking a gardener's path", "효과": "정원사의 이동을 첫 카메라 경로로 설정" }, { "조각": "weaving between towering ferns and blooming flowers", "효과": "전경 식물 사이를 좌우로 통과하는 깊이 이동" }, { "조각": "before ascending into an overhead angle", "효과": "추적 이후 카메라를 수직 상승시켜 시점 전환" }, { "조각": "showcasing the entire sprawling, verdant labyrinth", "효과": "마지막 프레임에서 정원 전체 구조를 공개" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-18", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·공개 결과 GIF 확인" } }
  },
  {
    title: "Linear Team Initiatives — 회사 목표를 팀 책임과 프로젝트 건강도로 연결", category: "웹·앱 UI", date: "2026-08-18", url: "https://linear.app/changelog/2026-08-13-team-initiatives",
    summary: "회사 이니셔티브 아래 팀별 하위 목표를 중첩하고 소유자·리드 팀·프로젝트 진행·건강도를 한 행에서 비교하며 비공개 팀 권한까지 연결한 실제 화면.", note: "상위 전략과 실행 팀의 책임을 계층으로 보이되 진행률과 건강도를 같은 스캔 축에 두어 대규모 로드맵의 책임 공백을 줄이는 구조가 유용함.", tags: ["#웹앱UI", "#Linear", "#로드맵", "#이니셔티브", "#권한", "#테크IT"], thumbnail: "https://webassets.linear.app/images/ornj730p/production/4a9c8a92201a695eeaa5f3a6fccb507adac9c661-3600x2080.png?auto=format&dpr=2&q=95", visual: { background: "#17191c", accent: "#7c6df2", ink: "#f7f7f8", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "GOAL / TEAM / HEALTH" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Linear 공식 릴리스가 회사·팀 이니셔티브 계층, 소유자·리드 팀·프로젝트 진행·건강도와 비공개 권한을 실제 제품 화면으로 보여 줘 전략 포트폴리오 패턴으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://webassets.linear.app/images/ornj730p/production/4a9c8a92201a695eeaa5f3a6fccb507adac9c661-3600x2080.png?auto=format&dpr=2&q=95", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "회사 이니셔티브 목록·중첩 팀 목표·소유자·리드 팀·프로젝트 진행률·건강도", "flow": "회사 목표 확인→팀 하위 목표 확장→담당·진행·건강도 비교→프로젝트 상세 진입" } }, "출처": { "소스": "Linear / Team initiatives", "수집일": "2026-08-18", "수집사유": "2026-08-13 공식 릴리스에서 실제 제품 화면과 팀 책임·비공개 권한 구조 확인" } }
  },
  {
    title: "Pornichet — 세 음절 로고에 해안의 하루와 지역 서사를", category: "브랜드", date: "2026-08-18", url: "https://www.behance.net/gallery/252013975/Pornichet-branding-the-destination",
    summary: "Pornichet의 세 음절을 일출·정오·일몰의 수평선으로 바꾸고 전용 서체, 현대화 문장(紋章), 다국어 슬로건을 사인과 캠페인에 확장한 도시 브랜드.", note: "긴 지명을 읽기 쉬운 세 덩어리로 나누면서 항구·바위·경마장과 문학 유산을 글자 구조와 카피 변주에 흡수해 장소 서사를 접점 전체에 유지함.", tags: ["#브랜드", "#도시브랜딩", "#커스텀타이포", "#헤리티지", "#캠페인"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/857a4b252013975.6a44e593a9cc1.jpg", visual: { background: "#f2ddc8", accent: "#e26143", ink: "#22364d", radiusOne: "24px", radiusTwo: "0", rotate: "-2deg", label: "COAST / TYPE / STORY" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 프로젝트가 세 음절 수평선 로고, 현대화 문장, 전용 서체와 다국어 슬로건을 사인·굿즈·포스터 실제 이미지에 반복해 장소 브랜드의 재사용 가능한 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "파스텔", "그리드", "여백중심", "따뜻"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/857a4b252013975.6a44e593a9cc1.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "세 음절 수평선 로고·현대화 문장·아르누보 계열 전용 서체·해안/문학 이중 의미 슬로건", "applications": "역 사인·도시 캠페인 포스터·굿즈·관광 웹·모션" } }, "출처": { "소스": "Behance / Graphéine", "수집일": "2026-08-18", "수집사유": "2026-07-02 공개 Best of Behance 프로젝트에서 브랜드 시스템과 공개 대표 JPEG 확인" } }
  },
  {
    title: "Linear Agent 문서 편집 — 사람·에이전트 변경을 출처별로 검토", category: "AI 디자인", date: "2026-08-17", url: "https://linear.app/changelog/2026-07-23-agent-assisted-editing",
    summary: "문서 본문과 Agent 패널을 나란히 두고 AI가 바꾼 문장을 별도 하이라이트·작성자 표시·버전 기록으로 검토하게 하는 공식 제품 화면.", note: "생성 결과를 바로 덮어쓰지 않고 출처 표시·변경 강조·체크포인트 복원으로 분해해 협업형 AI 편집기의 신뢰 구조를 설계하는 데 유용함.", tags: ["#AI디자인", "#에이전트", "#문서편집", "#변경추적", "#테크IT"], thumbnail: "https://webassets.linear.app/images/ornj730p/production/15b9a90d9ef28e617836383f0b295536c437b4b1-3600x2080.png?auto=format&dpr=2&q=95", visual: { background: "#17191c", accent: "#7c6df2", ink: "#f7f7f8", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "ATTRIBUTE / REVIEW / RESTORE" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept", "근거": "Linear 공식 릴리스가 Agent 패널, AI 변경 하이라이트, 작성자 표시와 버전 복원 화면을 제공해 출처가 보이는 협업형 AI 편집 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "고밀도", "절제"], "시각아티팩트_url": "https://webassets.linear.app/images/ornj730p/production/15b9a90d9ef28e617836383f0b295536c437b4b1-3600x2080.png?auto=format&dpr=2&q=95", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "문서 선택→Agent에 편집 요청→AI 변경 구간·작성자 확인→체크포인트 비교→승인 또는 복원", "ai_role": "문서 맥락을 바탕으로 수정안을 만들고 변경 출처를 보존" } }, "출처": { "소스": "Linear / Text attribution and agent-assisted editing", "수집일": "2026-08-17", "수집사유": "2026-07-23 공식 릴리스에서 실제 Agent 편집·변경 출처·복원 제품 화면과 HTTP 200 대표 이미지 확인" } }
  },
  {
    title: "Carbon Tag Variants — 라벨·제거·선택·오버플로를 한 문법으로", category: "웹 스타일가이드", date: "2026-08-17", url: "https://carbondesignsystem.com/components/tag/usage/",
    summary: "read-only·dismissible·selectable·operational 태그의 해부, 크기, 상태, 클릭 영역과 AI 라벨 변형을 실제 화면으로 규정한 Carbon 컴포넌트 사양.", note: "같은 pill 외형 안에서 읽기·삭제·선택·상세 공개의 인터랙션 계약을 분리해 검색 필터와 고밀도 데이터 UI에 일관되게 적용하기 좋음.", tags: ["#웹스타일가이드", "#태그", "#필터", "#상태", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/a9249fb3fa733cb572bcd0dba806f190/3cbba/tag-usage-anatomy.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "50px", radiusTwo: "8px", rotate: "1deg", label: "LABEL / SELECT / DISCLOSE" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 가이드가 네 태그 변형의 해부도, 크기, 상태와 키보드·클릭 동작을 실제 PNG로 제공해 공통 태그 컴포넌트 계약으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/a9249fb3fa733cb572bcd0dba806f190/3cbba/tag-usage-anatomy.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "read-only·dismissible·selectable·operational tag와 AI label modifier", "states": "enabled·hover·focus·click·selected·disabled·skeleton" } }, "출처": { "소스": "IBM Carbon Design System / Tag usage", "수집일": "2026-08-17", "수집사유": "2026-08-13 갱신 공식 문서에서 변형·상태·클릭 영역 실제 화면과 HTTP 200 PNG 확인" } }
  },
  {
    title: "Carbon Date Format Copy — 형식·로케일·시간대를 입력 전부터 노출", category: "콘텐츠 디자인 가이드", date: "2026-08-17", url: "https://carbondesignsystem.com/components/date-picker/usage/#content",
    summary: "날짜 형식을 placeholder에 숨기지 않고 라벨 또는 helper text로 유지하며 지역별 순서, 12·24시간 표기와 시간대 원칙을 실제 입력 화면으로 설명한 가이드.", note: "입력 후 사라지는 힌트를 피하고 형식·범위·시간대 정보를 지속 카피로 남겨 예약·결제·국제화 폼의 오류를 줄이는 검수 기준으로 바로 쓸 수 있음.", tags: ["#콘텐츠디자인가이드", "#날짜입력", "#국제화", "#헬퍼텍스트", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/a8a61edbabb10c1afc6afc24f72bc1a9/3cbba/date-picker-usage-localized.png", visual: { background: "#ffffff", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "FORMAT / LOCALE / ZONE" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 날짜 형식·로케일·12/24시간·시간대 문구 규칙을 실제 지역화 입력 화면과 연결해 폼 콘텐츠 검수 절차로 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/a8a61edbabb10c1afc6afc24f72bc1a9/3cbba/date-picker-usage-localized.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "명확한 라벨 작성→형식을 라벨 또는 helper text에 지속 노출→로케일별 순서 적용→시간대 표기→오류 상태에서 문제 필드만 지목", "visible_examples": "미국식 날짜와 국제 표준 날짜 입력의 병렬 화면" } }, "출처": { "소스": "IBM Carbon Design System / Date picker usage", "수집일": "2026-08-17", "수집사유": "최근 30일 갱신 공식 문서에서 지역화 날짜 형식 실제 화면과 HTTP 200 PNG 확인" } }
  },
  {
    title: "Cutoff Denim Character — 중립 인물의 정체성을 작업복 장면으로 확장", category: "AI 이미지 프롬프트", date: "2026-08-17", url: "https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References#single-reference-denim",
    summary: "중립 인물 레퍼런스를 유지하면서 소매를 자른 데님 셔츠, 입의 건초, 뒷머리와 플라스틱 의자를 지정한 공식 Gen-4 References 결과.", note: "정체성 보존과 의상·소품·헤어·자세를 짧은 조각으로 분리해 같은 캠페인 인물의 직업·상황 변주를 빠르게 비교하기 좋음.", prompt: "@bryan wearing a denim shirt with the sleeves cut off. he holds a single piece of hay in his mouth. medium length hair in the back. sitting on a plastic lawn chair. cinematic muted color palette. shallow depth of field.", tags: ["#AI이미지프롬프트", "#Gen4References", "#캐릭터일관성", "#의상변주", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/40792559180051", visual: { background: "#6f716c", accent: "#9e8260", ink: "#f5f1e8", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "IDENTITY / WARDROBE / PROP" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 인물 레퍼런스, 전체 프롬프트, Gen-4 References 조건과 결과 PNG를 제공해 정체성 보존형 의상·소품 변환을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "소프트확산광", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/40792559180051", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "@bryan wearing a denim shirt with the sleeves cut off. he holds a single piece of hay in his mouth. medium length hair in the back. sitting on a plastic lawn chair. cinematic muted color palette. shallow depth of field.", "tool_model": "Runway Gen-4 Image References", "params": "단일 인물 Reference(@bryan)·최대 3 references·720p/1080p·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/40792559180051", "fragment_map": [{ "조각": "@bryan", "효과": "저장된 인물의 얼굴과 정체성 유지" }, { "조각": "denim shirt with the sleeves cut off", "효과": "거친 작업복 실루엣과 팔 노출" }, { "조각": "single piece of hay in his mouth", "효과": "캐릭터 역할을 읽히게 하는 작은 소품" }, { "조각": "cinematic muted color palette. shallow depth of field", "효과": "저채도 색보정과 인물 중심 초점 분리" }] } }, "출처": { "소스": "Runway / Creating with Gen-4 Image References", "수집일": "2026-08-17", "수집사유": "최근 갱신 공식 가이드에서 레퍼런스·전체 프롬프트·모델 조건·HTTP 200 결과 PNG 확인" } }
  },
  {
    title: "Airplane Wing Grip — 얼굴 정체성과 극한 바람의 행동을 결합", category: "AI 이미지 프롬프트", date: "2026-08-17", url: "https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References#airplane-wing",
    summary: "같은 인물 레퍼런스를 비행기 날개에 매달린 근접 장면으로 옮기고 머리카락의 강한 바람과 생존 행동을 한 문장에 묶은 공식 결과.", note: "얼굴 보존·접촉 지점·환경 힘·카메라 거리를 분리해 액션 캠페인에서 인물 일관성과 역동적 상황을 함께 시험하기 좋음.", prompt: "@bryan holding on to the wing of an airplane. hair flowing wildly in the wind. camera frames his face as he holds on for his life.", tags: ["#AI이미지프롬프트", "#Gen4References", "#액션", "#바람", "#캐릭터일관성", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/40794862107027", visual: { background: "#8ca7b7", accent: "#d9e4e9", ink: "#17232a", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "GRIP / WIND / CLOSE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 인물 레퍼런스, 전체 프롬프트, Gen-4 References 조건과 결과 PNG를 제공해 얼굴 일관성·날개 접촉·강풍 행동을 함께 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "중앙집중", "하드라이트", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/40794862107027", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "@bryan holding on to the wing of an airplane. hair flowing wildly in the wind. camera frames his face as he holds on for his life.", "tool_model": "Runway Gen-4 Image References", "params": "단일 인물 Reference(@bryan)·최대 3 references·720p/1080p·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/40794862107027", "fragment_map": [{ "조각": "@bryan holding on to the wing of an airplane", "효과": "동일 인물을 날개와 명확한 접촉 행동으로 결합" }, { "조각": "hair flowing wildly in the wind", "효과": "강한 공기 흐름을 머리카락 방향으로 표시" }, { "조각": "camera frames his face", "효과": "액션 중에도 얼굴 정체성이 읽히는 근접 거리" }, { "조각": "holds on for his life", "효과": "손 힘과 표정에 긴박한 생존 동기 부여" }] } }, "출처": { "소스": "Runway / Creating with Gen-4 Image References", "수집일": "2026-08-17", "수집사유": "최근 갱신 공식 가이드에서 레퍼런스·전체 프롬프트·모델 조건·HTTP 200 결과 PNG 확인" } }
  },
  {
    title: "Mesa Wide Silhouette — 광활한 풍경 안에서 인물의 축척을 최소화", category: "AI 영상 프롬프트", date: "2026-08-17", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#wide-mesa",
    summary: "바람 부는 거대한 메사 위 외로운 인물을 극소 축척으로 두고 극적인 석양 실루엣으로 환경의 압도감을 강조한 공식 Gen-4.5 결과.", note: "wide shot·환경 운동·인물 축척·역광을 독립 조각으로 나눠 모험·아웃도어 캠페인의 공간 규모를 안정적으로 설계하기 좋음.", prompt: "A wide shot captures a lone figure standing atop a vast, windswept mesa, their silhouette sharply defined against a dramatic sunset, emphasizing their smallness within the expansive landscape.", tags: ["#AI영상프롬프트", "#Gen45", "#와이드숏", "#실루엣", "#스케일", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504717203", visual: { background: "#7a4938", accent: "#ef9a5c", ink: "#fff0df", radiusOne: "24px", radiusTwo: "0", rotate: "1deg", label: "WIDE / SCALE / SILHOUETTE" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 와이드 구도·바람 부는 메사·작은 실루엣·석양 대비를 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "여백중심", "하드라이트", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504717203", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A wide shot captures a lone figure standing atop a vast, windswept mesa, their silhouette sharply defined against a dramatic sunset, emphasizing their smallness within the expansive landscape.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504717203", "fragment_map": [{ "조각": "A wide shot captures", "효과": "환경과 전신을 함께 읽는 원경" }, { "조각": "vast, windswept mesa", "효과": "바람 운동과 광활한 지형을 공간 기준으로 설정" }, { "조각": "silhouette sharply defined against a dramatic sunset", "효과": "저각 역광으로 인물 윤곽 분리" }, { "조각": "emphasizing their smallness", "효과": "인물 점유율을 줄여 환경의 압도적 축척 강화" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-17", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·HTTP 200 결과 GIF 확인" } }
  },
  {
    title: "Bear Honey POV — 손의 진입과 채집 행동을 관찰형 시점으로 고정", category: "AI 영상 프롬프트", date: "2026-08-17", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#bear-honey-pov",
    summary: "곰의 시점으로 벌집 찬 나무에 접근하고 화면 아래에서 발이 들어와 꿀을 움켜쥐는 행동을 핸드헬드 다큐 질감으로 연결한 공식 결과.", note: "시점 주체·접근 경로·손의 진입 위치·목표 행동·카메라 흔들림을 분리해 몰입형 제품 체험과 게임 시네마틱의 1인칭 동작을 통제하기 좋음.", prompt: "POV from the perspective of a bear approaching a hollowed out tree filled with honeycomb. The bear paws reach out from the bottom of the frame and grab a handful of honey. Handheld documentary film style. Natural camera shake. Raw indie film aesthetic. Natural lighting. Unpolished, authentic look. Low budget realism. Observational feel.", tags: ["#AI영상프롬프트", "#Gen45", "#POV", "#핸드헬드", "#행동설계", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504732051", visual: { background: "#574936", accent: "#d7a43f", ink: "#fff5df", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "APPROACH / REACH / GRAB" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 곰 시점·하단 발 진입·꿀 채집·자연스러운 핸드헬드 흔들림을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "필름그레인", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504732051", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "POV from the perspective of a bear approaching a hollowed out tree filled with honeycomb. The bear paws reach out from the bottom of the frame and grab a handful of honey. Handheld documentary film style. Natural camera shake. Raw indie film aesthetic. Natural lighting. Unpolished, authentic look. Low budget realism. Observational feel.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504732051", "fragment_map": [{ "조각": "POV from the perspective of a bear", "효과": "카메라를 곰의 눈높이와 주관 시점으로 고정" }, { "조각": "approaching a hollowed out tree", "효과": "목표물로 가까워지는 전진 동선" }, { "조각": "paws reach out from the bottom of the frame", "효과": "화면 하단에서 신체 일부가 진입하는 1인칭 단서" }, { "조각": "grab a handful of honey", "효과": "접근 뒤 명확한 접촉·채집 행동" }, { "조각": "Handheld documentary ... Natural camera shake", "효과": "관찰형 저예산 다큐 카메라 질감" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-17", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·HTTP 200 결과 GIF 확인" } }
  },
  {
    title: "Linear Refreshed Issue Sidebar — 속성과 Diff를 본문 옆 한 축으로", category: "웹·앱 UI", date: "2026-08-17", url: "https://linear.app/changelog/2026-07-23-agent-assisted-editing#refreshed-issue-sidebar",
    summary: "이슈 속성을 본문 가까이 재배치하고 연결된 Diff를 사이드바 상단에 고정해 작성·상태 확인·코드 검토 사이 이동을 줄인 공식 제품 화면.", note: "업무의 메타데이터와 실행 결과를 같은 보조 열에 두고 우선순위가 높은 Diff를 상단 고정해 고밀도 이슈 상세 화면의 왕복 비용을 줄이는 데 참고됨.", tags: ["#웹앱UI", "#사이드바", "#이슈관리", "#코드리뷰", "#고밀도", "#테크IT"], thumbnail: "https://webassets.linear.app/images/ornj730p/production/fdbe518ba5882edab1681f7410f9af78716021f2-3600x2058.png?auto=format&dpr=2&q=95", visual: { background: "#18191b", accent: "#7278f5", ink: "#f7f7f8", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "CONTENT / PROPERTIES / DIFFS" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Linear 공식 릴리스가 이슈 본문·속성·상단 고정 Diff의 실제 화면과 배치 의도를 제공해 업무 상세용 고밀도 사이드바 패턴으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "고밀도", "그리드", "절제"], "시각아티팩트_url": "https://webassets.linear.app/images/ornj730p/production/fdbe518ba5882edab1681f7410f9af78716021f2-3600x2058.png?auto=format&dpr=2&q=95", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "이슈 본문 확인→인접 속성 검토·수정→상단 고정 Diff 진입→코드 변경 확인→이슈로 복귀", "states": "본문·속성 그룹·Diff 연결·사이드바 선택 상태" } }, "출처": { "소스": "Linear / Text attribution and agent-assisted editing", "수집일": "2026-08-17", "수집사유": "2026-07-23 공식 릴리스에서 새 이슈 사이드바 실제 화면과 HTTP 200 대표 이미지 확인" } }
  },
  {
    title: "Flowy Baby Care — 해바라기 캐릭터로 놀이와 신뢰를 함께", category: "브랜드", date: "2026-08-17", url: "https://www.behance.net/gallery/249392779/Flowy-Baby-Care-Product",
    summary: "해바라기 성분 이야기를 둥근 캐릭터, 부드러운 파스텔과 간단한 정보 위계로 묶어 샴푸·바디워시·로션·미스트에 확장한 키즈 케어 아이덴티티.", note: "아이에게는 캐릭터와 색으로 친근함을, 보호자에게는 제품명·효능·순한 성분 카피로 신뢰를 주는 이중 독자용 패키지 계층을 추출하기 좋음.", tags: ["#브랜드", "#패키지", "#키즈", "#캐릭터", "#파스텔"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7803da249392779.6a06ec051ccd3.png", visual: { background: "#f5df8d", accent: "#ed8f76", ink: "#3b352b", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "PLAY / CARE / TRUST" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "공개 프로젝트가 해바라기 캐릭터, 부드러운 파스텔과 간결한 정보 위계를 네 제품 패키지·프로모션에 반복해 키즈 케어 브랜드 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "파스텔", "중앙집중", "매트", "따뜻", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7803da249392779.6a06ec051ccd3.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "해바라기 마스코트·부드러운 파스텔·둥근 타이포·부모용 효능 카피", "applications": "샴푸·바디워시·데일리 로션·바디 미스트·프로모션" } }, "출처": { "소스": "Behance / puguh akbar setiawan", "수집일": "2026-08-17", "수집사유": "2026-07-08 공개 프로젝트에서 전체 제품군·브랜드 응용과 HTTP 200 대표 WebP 확인" } }
  },
  {
    title: "Linear Loops — 반복 에이전트 작업을 스케줄·이벤트로 설계", category: "AI 디자인", date: "2026-08-16", url: "https://linear.app/changelog/2026-07-20-introducing-loops",
    summary: "자연어로 반복 작업을 정의하고 스케줄 또는 이벤트 트리거, 연결 도구, 실행 이력을 한 흐름에서 설정·검토하는 Linear 공식 AI UI.", note: "자동화를 프롬프트 한 줄이 아니라 트리거·권한·공유 가시성·실행 기록으로 분해해 팀용 에이전트 기능의 신뢰 지점을 설계하는 데 유용함.", tags: ["#AI디자인", "#에이전트", "#자동화", "#워크플로", "#테크IT"], thumbnail: "https://webassets.linear.app/images/ornj730p/production/6d18bd62c1abee6e9048418f7553bab34d4c1eda-3840x2160.jpg?q=95&auto=format&dpr=2", visual: { background: "#17191c", accent: "#8a7cf7", ink: "#f7f8f9", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "DEFINE / TRIGGER / REVIEW" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept", "근거": "Linear 공식 릴리스가 자연어 작업 정의, 스케줄·이벤트 트리거, 공유 실행 기록의 실제 제품 화면을 제공해 팀용 반복 에이전트 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "고밀도", "절제"], "시각아티팩트_url": "https://webassets.linear.app/images/ornj730p/production/6d18bd62c1abee6e9048418f7553bab34d4c1eda-3840x2160.jpg?q=95&auto=format&dpr=2", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "반복 작업 자연어 정의→스케줄 또는 이벤트 선택→워크스페이스·연결 도구 컨텍스트 적용→실행 기록 검토", "ai_role": "업무 맥락을 해석해 다음 행동을 결정하고 반복 실행" } }, "출처": { "소스": "https://linear.app/changelog/2026-07-20-introducing-loops", "수집일": "2026-08-16", "수집사유": "2026-07-20 공식 릴리스에서 Loops 설정·실행 제품 화면과 팀 공유 운영 조건 확인" } }
  },
  {
    title: "Carbon Tooltip — 보조 정보의 노출·배치·포커스 규칙", category: "웹 스타일가이드", date: "2026-08-16", url: "https://carbondesignsystem.com/components/tooltip/usage/",
    summary: "툴팁과 토글팁의 역할, 시작·중앙·끝 정렬, 화면 가장자리 배치와 hover·focus·Esc 상태를 실제 화면으로 규정한 Carbon 사양.", note: "짧은 보조 정보와 상호작용 콘텐츠를 분리하고 자동 배치·키보드 종료까지 상태 계약으로 묶어 고밀도 업무 UI에 적용하기 좋음.", tags: ["#웹스타일가이드", "#툴팁", "#접근성", "#상태", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/f543d9575452ac899986c6a254b364bd/3cbba/tooltip-usage-7.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "1deg", label: "ALIGN / PLACE / DISMISS" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 툴팁 정렬·배치 실제 화면과 hover·focus·Esc 동작, 토글팁 분기 규칙을 제공해 보조 정보 컴포넌트로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/f543d9575452ac899986c6a254b364bd/3cbba/tooltip-usage-7.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "tooltip·definition tooltip·toggletip 비교", "states": "closed→hover/focus open→edge-aware placement→hover away 또는 Esc dismiss" } }, "출처": { "소스": "https://carbondesignsystem.com/components/tooltip/usage/", "수집일": "2026-08-16", "수집사유": "2026-07-23 갱신 공식 문서에서 실제 툴팁 배치 화면과 접근성 동작 확인" } }
  },
  {
    title: "Carbon Form Content — 라벨·도움말·오류 메시지의 지속성 설계", category: "콘텐츠 디자인 가이드", date: "2026-08-16", url: "https://carbondesignsystem.com/components/form/usage/",
    summary: "짧은 라벨, 지속 노출 helper text, 상태 전환 오류 문구와 fluid form 예외를 실제 폼 화면으로 연결한 Carbon 콘텐츠 가이드.", note: "필수 입력 정보는 지속 텍스트로, 추가 맥락은 툴팁으로 분리하고 오류 시 도움말을 교체하는 규칙이 복잡한 설정·가입 폼 카피 검수에 즉시 쓰임.", tags: ["#콘텐츠디자인가이드", "#폼", "#마이크로카피", "#오류메시지", "#접근성"], thumbnail: "https://carbondesignsystem.com/static/e396ac4b8a6b0887466d81513b8c5736/3cbba/form-usage-6.png", visual: { background: "#ffffff", accent: "#da1e28", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "LABEL / HELP / ERROR" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 라벨·기본값·도움말·오류 문구의 작성 규칙을 실제 default·fluid 폼 화면과 연결해 폼 콘텐츠 검수 절차로 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/e396ac4b8a6b0887466d81513b8c5736/3cbba/form-usage-6.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "짧은 문장형 라벨 작성→필수 형식은 지속 도움말로 제공→상태 변경 시 오류·경고로 교체→추가 맥락만 툴팁 배치", "visible_examples": "default·fluid 폼의 라벨, helper text, tooltip, error 상태" } }, "출처": { "소스": "https://carbondesignsystem.com/components/form/usage/", "수집일": "2026-08-16", "수집사유": "최근 30일 갱신 공식 문서에서 실제 폼 화면과 실행 가능한 콘텐츠 규칙 확인" } }
  },
  {
    title: "Green Screen Isolation — 레퍼런스 인물의 배경만 단색으로 교체", category: "AI 이미지 프롬프트", date: "2026-08-16", url: "https://help.runwayml.com/hc/en-us/articles/41170686463635-Advanced-References-Use-Cases#green-screen-isolation",
    summary: "인물의 핵심 특징은 유지하면서 원래 환경을 제거하고 솔리드 그린 배경으로 분리한 공식 Gen-4 References 결과.", note: "대상 보존·배경 제거·단색 교체를 한 문장으로 분리해 캠페인 합성용 인물 에셋과 썸네일 변형을 빠르게 만드는 데 참고됨.", prompt: "remove background from [img] so he's in front of a solid green screen", tags: ["#AI이미지프롬프트", "#Gen4References", "#배경제거", "#합성", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/41176998768275", visual: { background: "#19a95b", accent: "#0b3f27", ink: "#ffffff", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "KEEP / REMOVE / ISOLATE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 4, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 17, "verdict": "accept", "근거": "Runway 공식 가이드가 입력 레퍼런스, 전체 프롬프트, Gen-4 References 조건과 결과 PNG를 제공해 주체 보존과 단색 배경 분리를 반복 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "하이채도", "중앙집중", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/41176998768275", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "remove background from [img] so he's in front of a solid green screen", "tool_model": "Runway Gen-4 Image References", "params": "인물 Reference 1장·최대 3 references·720p/1080p·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/41176998768275", "fragment_map": [{ "조각": "remove background from [img]", "효과": "레퍼런스 인물은 유지하고 기존 환경만 제거" }, { "조각": "in front of a solid green screen", "효과": "후속 합성을 위한 균일한 고채도 배경으로 교체" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/41170686463635-Advanced-References-Use-Cases", "수집일": "2026-08-16", "수집사유": "최근 갱신 공식 가이드에서 입력·프롬프트·모델 조건·결과 PNG 확인" } }
  },
  {
    title: "1900s Photo Restoration — 흑백 기록 사진의 밝은 시대색 복원", category: "AI 이미지 프롬프트", date: "2026-08-16", url: "https://help.runwayml.com/hc/en-us/articles/41170686463635-Advanced-References-Use-Cases#period-color-restoration",
    summary: "흑백 레퍼런스의 인물·구도는 유지하고 1900년대 기록물에 맞는 밝은 색을 입힌 공식 Gen-4 References 결과.", note: "복원 행동·채도 방향·시대 단서를 짧게 분리해 브랜드 헤리티지 사진과 전시 아카이브의 컬러 탐색을 비교하기 좋음.", prompt: "restore and colorize the photograph from [img]. bright and colorful. reminiscent of the 1900s", tags: ["#AI이미지프롬프트", "#Gen4References", "#컬러복원", "#아카이브", "#헤리티지"], thumbnail: "https://help.runwayml.com/hc/article_attachments/41174044323731", visual: { background: "#d9b46f", accent: "#7d3f2a", ink: "#17120e", radiusOne: "8px", radiusTwo: "24px", rotate: "2deg", label: "RESTORE / COLOR / PERIOD" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Runway 공식 가이드가 흑백 입력, 전체 복원 프롬프트, Gen-4 References 조건과 컬러 결과 PNG를 제공해 시대색 복원 방향을 재현하며 비교할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["에디토리얼", "하이채도", "중앙집중", "필름그레인", "따뜻"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/41174044323731", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "restore and colorize the photograph from [img]. bright and colorful. reminiscent of the 1900s", "tool_model": "Runway Gen-4 Image References", "params": "흑백 사진 Reference 1장·최대 3 references·720p/1080p·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/41174044323731", "fragment_map": [{ "조각": "restore and colorize the photograph", "효과": "기존 사진의 구조를 보존하며 손상감과 무채색을 복원" }, { "조각": "bright and colorful", "효과": "색 분리와 전체 채도를 높여 복원 결과를 명확히 표시" }, { "조각": "reminiscent of the 1900s", "효과": "현대적 네온 대신 초기 컬러 기록물의 시대 톤으로 제한" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/41170686463635-Advanced-References-Use-Cases", "수집일": "2026-08-16", "수집사유": "최근 갱신 공식 가이드에서 흑백 입력·프롬프트·모델 조건·컬러 결과 PNG 확인" } }
  },
  {
    title: "Rearing Horse Fall — 골든아워 역광 안에서 낙마 동작을 단계화", category: "AI 영상 프롬프트", date: "2026-08-16", url: "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide#rearing-horse-fall",
    summary: "말의 급격한 뒷발 들기, 몸통 비틀림과 카우보이의 왼쪽 낙하를 따뜻한 역광 미디엄 숏으로 연결한 공식 Gen-4.5 결과.", note: "주체 동작의 원인·몸 회전·낙하 방향을 조각화해 스포츠·웨스턴 시네마틱에서 복합 행동의 가독성을 통제하기 좋음.", prompt: "Medium shot of a cowboy perched on a horse in a dusty environment. The horse rears violently, its body twisting, causing the cowboy to lose his seat and begin to fall off to the left. Backlit, western epic, cinematic, high contrast, golden hour, dusty, warm amber, deep orange, rich brown, atmospheric, dramatic backlighting, rim light, silhouette, soft glow, high contrast shadows.", tags: ["#AI영상프롬프트", "#Gen45", "#미디엄숏", "#골든아워", "#복합동작"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313692838931", visual: { background: "#6f3b20", accent: "#f3a34a", ink: "#fff2dd", radiusOne: "24px", radiusTwo: "8px", rotate: "1deg", label: "REAR / TWIST / FALL" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 말의 뒷발 들기·회전·낙마 방향과 골든아워 역광을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "하드라이트", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313692838931", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Medium shot of a cowboy perched on a horse in a dusty environment. The horse rears violently, its body twisting, causing the cowboy to lose his seat and begin to fall off to the left. Backlit, western epic, cinematic, high contrast, golden hour, dusty, warm amber, deep orange, rich brown, atmospheric, dramatic backlighting, rim light, silhouette, soft glow, high contrast shadows.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313692838931", "fragment_map": [{ "조각": "Medium shot", "효과": "카우보이 상체와 말의 동작을 함께 읽는 거리" }, { "조각": "horse rears violently, its body twisting", "효과": "수직 상승과 회전을 결합한 원인 동작" }, { "조각": "fall off to the left", "효과": "낙하 방향을 화면 왼쪽으로 고정" }, { "조각": "golden hour ... rim light", "효과": "먼지와 실루엣 가장자리를 따뜻한 역광으로 분리" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide", "수집일": "2026-08-16", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·Gen-4.5 모델·결과 GIF 확인" } }
  },
  {
    title: "Moon Skateboard Tracking — 저각 핸드헬드로 빠른 월면 이동을 추적", category: "AI 영상 프롬프트", date: "2026-08-16", url: "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide#moon-skateboard-tracking",
    summary: "월면의 우주비행사 스케이터를 저각 핸드헬드로 빠르게 따라가며 움직임 블러와 흑백 저대비 광원을 유지한 공식 Gen-4.5 결과.", note: "카메라 높이·추적 방식·속도·블러·팔레트를 독립 조각으로 나눠 미래형 제품·스포츠 영상의 운동감을 반복 조정하기 좋음.", prompt: "A handheld low angle tracking shot, with low contrast and fast-paced motion, follows a skilled astronaut skateboarder on a moon landscape. their movements blur against the soft glow of the dark lunar environment. Film grain, low contrast, black and white", tags: ["#AI영상프롬프트", "#Gen45", "#트래킹숏", "#월면", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313692839699", visual: { background: "#171717", accent: "#d9d9d9", ink: "#ffffff", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "LOW / TRACK / BLUR" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 저각 핸드헬드 추적, 빠른 월면 이동, 흑백 저대비 블러를 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "필름그레인", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313692839699", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A handheld low angle tracking shot, with low contrast and fast-paced motion, follows a skilled astronaut skateboarder on a moon landscape. their movements blur against the soft glow of the dark lunar environment. Film grain, low contrast, black and white", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313692839699", "fragment_map": [{ "조각": "handheld low angle tracking shot", "효과": "지면 가까운 불안정 카메라가 주체를 연속 추적" }, { "조각": "fast-paced motion", "효과": "스케이트 이동 속도와 컷의 운동감 강화" }, { "조각": "movements blur against the soft glow", "효과": "주체 잔상과 어두운 환경의 부드러운 광원 대비" }, { "조각": "Film grain, low contrast, black and white", "효과": "월면 장면을 저대비 흑백 필름 질감으로 통일" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide", "수집일": "2026-08-16", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·Gen-4.5 모델·결과 GIF 확인" } }
  },
  {
    title: "Quarn AI Command Surface — 노드 캔버스와 모바일 개입 흐름", category: "웹·앱 UI", date: "2026-08-16", url: "https://www.behance.net/gallery/249921495/Quarn-AI-Workflow-Automation-UX-UI-Design",
    summary: "에이전트·데이터·자동화를 무한 노드 캔버스에서 구성하고 데스크톱과 모바일에서 검증·개입·출시하는 AI 워크플로 제품 사례.", note: "어두운 고밀도 캔버스에 초록 상태색과 단계별 제어를 일관되게 적용해 복잡한 에이전트 파이프라인의 관찰성과 개입 가능성을 함께 확보함.", tags: ["#웹앱UI", "#AI워크플로", "#노드캔버스", "#대시보드", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89eb1d249921495.6a12c94316173.png", visual: { background: "#111411", accent: "#5ce28a", ink: "#f2f7f3", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "CONNECT / VERIFY / SHIP" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 프로젝트가 브랜드 토큰, UI 컴포넌트, 무한 노드 캔버스와 모바일 검증·개입 화면을 함께 제공해 AI 자동화 제품의 제어 흐름으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "브랜드일관성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "모노톤", "고밀도", "그리드", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89eb1d249921495.6a12c94316173.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "에이전트·데이터 노드 구성→실시간 상태 관찰→오류 또는 승인 지점 개입→데스크톱·모바일에서 검증→출시", "screens": "브랜드 시스템·UI 컴포넌트·반응형 랜딩·데스크톱 노드 캔버스·모바일 운영 화면" } }, "출처": { "소스": "Behance / Rondesignlab 외", "수집일": "2026-08-16", "수집사유": "2026-07-27 공개 Best of Behance 프로젝트에서 실제 제품 화면·반응형 흐름·1400px 대표 PNG 확인" } }
  },
  {
    title: "Sport Legends Vol.1 — 운동 순간을 각진 컬러 면으로 압축", category: "비주얼 그래픽", date: "2026-08-16", url: "https://www.behance.net/gallery/253280271/Sport-Legends-Vol1",
    summary: "축구·복싱·MMA·농구의 결정적 동작을 각진 실루엣, 제한 색과 과감한 크롭으로 묶은 스포츠 포스터·커버 일러스트 시리즈.", note: "선수의 얼굴보다 힘의 방향과 관절 각도를 주 초점으로 두고 배경 정보를 줄여 이벤트 키비주얼·하이라이트 카드에 강한 운동감을 전이하기 좋음.", tags: ["#비주얼그래픽", "#일러스트", "#스포츠", "#포스터", "#하이채도"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/759979253280271.6a64c8f714c8a.jpg", visual: { background: "#20242a", accent: "#ef593f", ink: "#fff7e9", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "POSE / FORCE / CROP" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "공개 시리즈가 여러 종목의 결정적 동작을 각진 컬러 면, 제한 팔레트, 과감한 크롭으로 반복해 스포츠 캠페인용 시각 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "비대칭", "매트", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/759979253280271.6a64c8f714c8a.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "format": "축구·복싱·MMA·농구 포스터·커버 일러스트 시리즈", "transferable_style": "각진 선수 실루엣·힘의 방향을 따르는 면 분할·제한 팔레트·과감한 크롭" } }, "출처": { "소스": "Behance / Hurca!", "수집일": "2026-08-16", "수집사유": "2026-07-27 공개 Best of Behance 프로젝트에서 다종목 실제 일러스트 시리즈와 1400px 대표 JPEG 확인" } }
  },
  {
    title: "PAWLAB — 반려견 일상복을 둥근 활자와 캐릭터로 연결", category: "브랜드", date: "2026-08-16", url: "https://www.behance.net/gallery/252926149/PAWLABidentity-for-a-pet-apparel-brand",
    summary: "품질·편안함·일상성을 둥근 타이포, 친근한 일러스트와 따뜻한 자연색으로 묶어 의류·포스터·프로모션에 확장한 반려동물 패션 브랜드.", note: "반려견을 가족으로 보는 메시지가 로고의 말투, 캐릭터 제스처와 착용 맥락에 반복돼 감성 브랜드의 제품 설명과 비주얼 톤을 일관되게 설계하기 좋음.", tags: ["#브랜드", "#반려동물", "#캐릭터", "#패션", "#따뜻"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8771e0252926149.6a5b6ba859f13.jpg", visual: { background: "#e7d8bf", accent: "#b26b45", ink: "#29221c", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "CARE / WEAR / PLAY" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "공개 프로젝트가 둥근 활자, 따뜻한 자연색, 친근한 캐릭터와 일상복 메시지를 로고·의류·포스터에 반복해 반려동물 라이프스타일 브랜드로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "어스톤", "중앙집중", "매트", "따뜻"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8771e0252926149.6a5b6ba859f13.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "둥근 워드마크·친근한 반려견 일러스트·따뜻한 자연색·가족 중심 메시지", "applications": "로고·반려견 의류 콘셉트·포스터·프로모션 비주얼" } }, "출처": { "소스": "Behance / Lilia Faradzhova", "수집일": "2026-08-16", "수집사유": "2026-07-18 공개 프로젝트에서 전체 브랜드 시스템·응용 화면·1400px 대표 JPEG 확인" } }
  },
  {
    title: "Runway Gen-4.5 Output Settings — 비율·길이·FPS를 생성 전에 고정", category: "AI 디자인", date: "2026-08-15", url: "https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5#generation-settings",
    summary: "비디오 생성 직전 화면에서 화면비, 2–10초 길이와 24/25fps를 한 패널로 검토하게 하는 Runway 공식 설정 UI.", note: "프롬프트와 결과 사이에 재현 조건을 별도 체크포인트로 배치해 생성 실험의 비용과 변수를 줄이는 구조가 AI 제작 도구 설계에 유용함.", tags: ["#AI디자인", "#Gen45", "#생성설정", "#영상AI", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/49602653261331", visual: { background: "#171717", accent: "#8a68ff", ink: "#ffffff", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "RATIO / TIME / FPS" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 화면이 화면비·길이·FPS 설정을 생성 직전 한 패널에 모아 보여 줘 프롬프트 외 실행 조건을 재현 가능한 UI 계약으로 전이할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "고밀도", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/49602653261331", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "모델·입력 선택→화면비·길이·FPS 검토→생성→Use로 반복", "ai_role": "텍스트 또는 이미지 입력을 설정 조건에 따라 영상으로 생성" } }, "출처": { "소스": "Runway / Creating with Gen-4.5", "수집일": "2026-08-15", "수집사유": "최근 갱신 공식 가이드에서 실제 생성 설정 화면과 지원 범위 확인" } }
  },
  {
    title: "Carbon File Uploader States — 업로드 진행을 세 상태로 분리", category: "웹 스타일가이드", date: "2026-08-15", url: "https://carbondesignsystem.com/components/file-uploader/usage/#loading-states",
    summary: "버튼형·드롭존형 업로더의 loading, success, uploaded 상태와 오류·삭제·키보드 동작을 실제 화면으로 규정한 Carbon 공식 사양.", note: "파일 선택 이후의 비동기 상태와 되돌리기 동작을 높이·정렬·피드백 토큰으로 묶어 폼과 대량 업로드에 재사용하기 좋음.", tags: ["#웹스타일가이드", "#파일업로드", "#상태", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/54fcc8de3fcea3a8fadc89f804366c3a/3cbba/file-uploader-usage-6.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "2deg", label: "LOAD / PASS / REMOVE" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 업로드의 loading·success·uploaded 상태, 크기·정렬과 키보드 삭제 동작을 실제 PNG로 제공해 파일 입력 컴포넌트로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/54fcc8de3fcea3a8fadc89f804366c3a/3cbba/file-uploader-usage-6.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "file uploader·drag and drop zone·uploaded file row", "states": "loading→success→uploaded, error·delete·keyboard focus" } }, "출처": { "소스": "IBM Carbon Design System / File uploader usage", "수집일": "2026-08-15", "수집사유": "2026-08-13 갱신 공식 문서에서 실제 상태 화면과 접근성 규칙 확인" } }
  },
  {
    title: "Carbon Code Copy Feedback — 복사 결과를 짧은 툴팁으로 확정", category: "콘텐츠 디자인 가이드", date: "2026-08-15", url: "https://carbondesignsystem.com/components/code-snippet/usage/#copy-to-clipboard",
    summary: "inline·single-line·multi-line 코드에서 복사 버튼, ‘Copied to clipboard’ 확인 문구와 Show more/less 라벨을 실제 화면으로 정리한 가이드.", note: "명령 실행 전후의 행동 카피를 동사·완료 피드백·확장 상태로 분리해 개발자 문서와 설정 UI에 즉시 적용할 수 있음.", tags: ["#콘텐츠디자인가이드", "#마이크로카피", "#코드스니펫", "#피드백", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/2512f009d0c265ab7fa04cfc7bc502e3/3cbba/code-snippet-usage-3.png", visual: { background: "#262626", accent: "#78a9ff", ink: "#f4f4f4", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "COPY / CONFIRM / EXPAND" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 화면과 문서가 복사 행동, 완료 툴팁과 펼침·접힘 라벨을 함께 제시해 개발자용 UI 카피 검수 절차로 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/2512f009d0c265ab7fa04cfc7bc502e3/3cbba/code-snippet-usage-3.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "읽기 전용 코드 확인→Copy 실행→완료 툴팁 확인→필요 시 Show more/less", "visible_examples": "코드 블록·복사 아이콘·Copied to clipboard 툴팁" } }, "출처": { "소스": "IBM Carbon Design System / Code snippet usage", "수집일": "2026-08-15", "수집사유": "2026-08-13 갱신 공식 문서에서 실제 복사 피드백 화면과 카피 규칙 확인" } }
  },
  {
    title: "Projector Box Composition — 주석 사각형으로 실루엣 위치 고정", category: "AI 이미지 프롬프트", date: "2026-08-15", url: "https://help.runwayml.com/hc/en-us/articles/41170686463635-Advanced-References-Use-Cases#bounding-box-composition",
    summary: "극장 레퍼런스 위 경계 상자를 그린 뒤 인물을 프로젝터 스크린 뒤 실루엣으로 두고 전경의 빈 좌석과 암부를 고정한 공식 Gen-4 결과.", note: "텍스트만으로 흔들리는 주체 위치를 주석 도형과 공간 관계 문장으로 나눠 전시·공연 포스터의 레이아웃을 반복 조정하기 좋음.", prompt: "silhouetted behind a projector screen. dark. empty theater seats in foreground", tags: ["#AI이미지프롬프트", "#Gen4References", "#바운딩박스", "#극장", "#구도제어"], thumbnail: "https://help.runwayml.com/hc/article_attachments/41171206931347", visual: { background: "#151515", accent: "#8e8a83", ink: "#f2eee7", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "BOX / SILHOUETTE / DEPTH" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 주석된 입력 이미지, 전체 프롬프트, Gen-4 References 조건과 결과 PNG를 제공해 경계 상자·실루엣·전경 좌석의 공간 구성을 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "하드라이트", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/41171206931347", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "silhouetted behind a projector screen. dark. empty theater seats in foreground", "tool_model": "Runway Gen-4 Image References", "params": "주석 bounding box Reference 1장·최대 3 references·720p/1080p·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/41171206931347", "fragment_map": [{ "조각": "silhouetted behind a projector screen", "효과": "주체를 밝은 스크린 뒤 암부 실루엣으로 고정" }, { "조각": "dark", "효과": "극장 전체 노출을 낮춰 화면과 인물 대비 확보" }, { "조각": "empty theater seats in foreground", "효과": "빈 좌석을 전경에 배치해 깊이와 관객 시점 형성" }, { "조각": "annotated bounding box reference", "효과": "인물과 스크린의 점유 영역을 도형으로 제한" }] } }, "출처": { "소스": "Runway / Advanced References Use Cases", "수집일": "2026-08-15", "수집사유": "최근 갱신 공식 가이드에서 주석 입력·프롬프트·모델·결과 PNG 확인" } }
  },
  {
    title: "World-Built Sword — 캐릭터 세계관을 단일 오브젝트로 추출", category: "AI 이미지 프롬프트", date: "2026-08-15", url: "https://help.runwayml.com/hc/en-us/articles/41170686463635-Advanced-References-Use-Cases#stylized-world-object",
    summary: "캐릭터 레퍼런스의 재질·장식·색을 분석해 같은 세계에 속하는 검을 검은 배경 위 독립 오브젝트로 생성한 공식 Gen-4 결과.", note: "세계관 전체를 다시 묘사하지 않고 레퍼런스 분석·오브젝트 종류·배경 분리를 조각화해 게임 아이템과 캠페인 소품군을 확장하기 좋음.", prompt: "analyze the world from [img] and create a sword that would fit the style. generate the sword on a black background", tags: ["#AI이미지프롬프트", "#Gen4References", "#세계관", "#오브젝트", "#게임아트", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/41304214905491", visual: { background: "#090909", accent: "#c9a76b", ink: "#f5efe3", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "WORLD / OBJECT / ISOLATE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 세계관 입력 레퍼런스, 전체 프롬프트, Gen-4 References 조건과 검 결과 PNG를 제공해 스타일 속성을 독립 오브젝트로 확장하는 절차를 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["3D", "모노톤", "중앙집중", "하드라이트", "글로시", "럭셔리"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/41304214905491", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "analyze the world from [img] and create a sword that would fit the style. generate the sword on a black background", "tool_model": "Runway Gen-4 Image References", "params": "스타일 세계관 Reference 1장·최대 3 references·720p/1080p·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/41304214905491", "fragment_map": [{ "조각": "analyze the world from [img]", "효과": "레퍼런스의 재질·색·장식 규칙을 세계관으로 추출" }, { "조각": "create a sword", "효과": "추상적 스타일을 하나의 명확한 오브젝트 유형으로 변환" }, { "조각": "that would fit the style", "효과": "새 오브젝트와 기존 세계관 사이 시각 일관성 유지" }, { "조각": "on a black background", "효과": "아이템 윤곽과 반사 재질을 배경에서 분리" }] } }, "출처": { "소스": "Runway / Advanced References Use Cases", "수집일": "2026-08-15", "수집사유": "최근 갱신 공식 가이드에서 레퍼런스·프롬프트·모델·결과 PNG 확인" } }
  },
  {
    title: "Victorian Hedge Maze — 전신 구도 안에서 인물과 여우의 접근 분리", category: "AI 영상 프롬프트", date: "2026-08-15", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#full-shot-victorian-maze",
    summary: "빅토리아풍 인물이 미로를 천천히 걷는 동안 작은 여우만 카메라 쪽으로 다가오게 해 전신·환경·보조 주체의 속도를 분리한 공식 Gen-4.5 결과.", note: "full shot의 정보량 안에서 두 주체의 방향과 속도를 따로 지정해 패션 필름·게임 시네마틱의 시선 이동을 통제하기 좋음.", prompt: "A full shot observes a Victorian woman as she slowly navigates the hedgemaze, beside a small, curious fox. The fox approaches the camera.", tags: ["#AI영상프롬프트", "#Gen45", "#풀숏", "#헤지메이즈", "#듀얼모션"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504716179", visual: { background: "#455342", accent: "#b98556", ink: "#f2eadc", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "FULL / WALK / APPROACH" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 전신 구도, 인물의 느린 이동과 여우의 카메라 접근을 독립적으로 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "소프트확산광", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504716179", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A full shot observes a Victorian woman as she slowly navigates the hedgemaze, beside a small, curious fox. The fox approaches the camera.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504716179", "fragment_map": [{ "조각": "A full shot observes", "효과": "인물 전신과 주변 미로를 동시에 유지" }, { "조각": "slowly navigates the hedgemaze", "효과": "인물의 느린 이동과 공간 탐색 지정" }, { "조각": "beside a small, curious fox", "효과": "보조 주체의 크기·성격·상대 위치 설정" }, { "조각": "The fox approaches the camera", "효과": "여우만 전경으로 이동해 깊이 변화 생성" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-15", "수집사유": "최근 공개 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·결과 GIF 확인" } }
  },
  {
    title: "Antique Shop Deep Focus — 전경부터 후경 햇빛까지 초점 유지", category: "AI 영상 프롬프트", date: "2026-08-15", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#deep-focus-antique-shop",
    summary: "골동품 가게의 넘치는 진열대, 낡은 바닥과 먼지 낀 후면 창의 햇빛을 모두 또렷하게 유지하는 공식 Gen-4.5 딥 포커스 결과.", note: "전경·중경·후경의 소재를 문장 순서로 나눠 리테일 공간·전시 쇼케이스에서 탐색 가능한 정보 밀도와 깊이를 설계하기 좋음.", prompt: "A deep focus shot showcases a bustling antique shop, with every trinket on overflowing shelves in the foreground, the worn wooden floor in the mid-ground, and the distant, dust-mote-filled sunlight streaming through a back window all held in crisp, unwavering clarity.", tags: ["#AI영상프롬프트", "#Gen45", "#딥포커스", "#리테일공간", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504771731", visual: { background: "#4f3b2c", accent: "#d9b879", ink: "#fff4dc", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "FORE / MID / BACK" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 전경 진열·중경 바닥·후경 창빛을 모두 선명하게 유지하는 딥 포커스를 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "고밀도", "소프트확산광", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504771731", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A deep focus shot showcases a bustling antique shop, with every trinket on overflowing shelves in the foreground, the worn wooden floor in the mid-ground, and the distant, dust-mote-filled sunlight streaming through a back window all held in crisp, unwavering clarity.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504771731", "fragment_map": [{ "조각": "deep focus shot", "효과": "전체 깊이 범위의 초점 유지" }, { "조각": "trinket ... foreground", "효과": "전경에 작은 물건의 높은 정보 밀도 배치" }, { "조각": "worn wooden floor in the mid-ground", "효과": "중경의 재질과 원근 연결" }, { "조각": "dust-mote-filled sunlight ... back window", "효과": "후경 햇빛과 먼지 입자까지 선명하게 고정" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-15", "수집사유": "최근 공개 공식 라이브러리에서 전체 프롬프트·Gen-4.5 모델·결과 GIF 확인" } }
  },
  {
    title: "First Street Risk Factor — 기후 위험을 세 지표와 지도 행동으로", category: "웹·앱 UI", date: "2026-08-15", url: "https://payloadcms.com/case-studies/first-street",
    summary: "홍수·화재·바람 위험 수치와 손실 규모를 나란히 비교하고 각 Factor 지도로 바로 이동하게 만든 기후 데이터 제품 화면.", note: "서로 다른 재난 모델을 동일한 카드 구조·단위·CTA로 맞춰 정책·보험 사용자가 위험 수준에서 상세 지도까지 빠르게 내려가는 흐름이 참고됨.", tags: ["#웹앱UI", "#기후테크", "#데이터시각화", "#대시보드", "#테크IT"], thumbnail: "https://l4wlsi8vxy8hre4v.public.blob.vercel-storage.com/fs-riskfactor2.webp", visual: { background: "#edf3ee", accent: "#d85d46", ink: "#18231d", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "RISK / FACTOR / MAP" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 구현 사례가 Flood·Fire·Wind Factor의 실제 카드와 지도 화면을 보여 줘 서로 다른 위험 지표를 동일한 비교·상세 진입 패턴으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "어스톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://l4wlsi8vxy8hre4v.public.blob.vercel-storage.com/fs-riskfactor2.webp", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "위험 지표 카드·Factor별 지도·연구 콘텐츠", "flow": "위험 비교→Factor 선택→지도 상세→연구 근거 확인" } }, "출처": { "소스": "Payload / First Street case study", "수집일": "2026-08-15", "수집사유": "최근 공개 사례에서 실제 기후 위험 카드·지도 제품 화면과 구현 맥락 확인" } }
  },
  {
    title: "SUMMER VIBES 26 — 공감의 감정을 3D 타이포와 체인으로", category: "비주얼 그래픽", date: "2026-08-15", url: "https://www.behance.net/gallery/252712499/SUMMER-VIBES-26",
    summary: "여름의 감정과 공감이라는 주제를 추상 오브젝트, 체인, 고채도 3D 레터링과 모션 시퀀스로 전개한 비주얼 시리즈.", note: "텍스트·연결 오브젝트·색 충돌을 반복 모듈로 삼아 감정처럼 추상적인 주제를 캠페인 키비주얼과 짧은 모션으로 확장하는 문법이 선명함.", tags: ["#비주얼그래픽", "#3D타이포", "#모션그래픽", "#하이채도", "#공감"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/61dea8252712499.6a56606e0078e.jpg", visual: { background: "#eb4b84", accent: "#ffd84b", ink: "#111111", radiusOne: "50%", radiusTwo: "24px", rotate: "-3deg", label: "TYPE / CHAIN / EMPATHY" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "공개 프로젝트가 공감이라는 주제를 3D 타이포·체인·추상 패턴·모션으로 반복해 감정 캠페인에 전이 가능한 고채도 시각 문법을 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성"], "시각렌즈": ["3D", "하이채도", "비대칭", "글로시", "유희적", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/61dea8252712499.6a56606e0078e.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "style_recipe": "입체 레터링+체인 연결+고채도 색 충돌+반복 모션", "applications": "캠페인 키비주얼·타이틀 시퀀스·소셜 모션" } }, "출처": { "소스": "Behance / Leonardoworx LWX", "수집일": "2026-08-15", "수집사유": "2026-07-14 공개 프로젝트에서 정지 이미지·3D 타이포·모션 결과와 공식 미리보기 확인" } }
  },
  {
    title: "AICS Rebranding — 고압 유체 기술을 정밀한 B2B 언어로", category: "브랜드", date: "2026-08-15", url: "https://www.behance.net/gallery/252502417/AICS-rebranding",
    summary: "고압 펌프·세척 시스템 기업의 엔지니어링 정밀도와 유체 흐름을 로고, 산업 사진, 기술 그래픽과 기업 응용으로 묶은 리브랜딩.", note: "제품 부품의 신뢰성과 압력·흐름이라는 물리 속성을 심벌·선·크롭 규칙에 분산해 산업 기술 브랜드를 차갑지 않게 만드는 방식이 유용함.", tags: ["#브랜드", "#산업기술", "#B2B", "#리브랜딩", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0538d4252502417.6a50e923999de.jpg", visual: { background: "#e7ecee", accent: "#2f6f83", ink: "#12242b", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "PRESSURE / FLOW / TRUST" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 고압 시스템의 기술 정밀도와 유체 흐름을 로고·산업 사진·기업 응용에 반복해 B2B 엔지니어링 브랜드의 형태 언어로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "하드라이트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0538d4252502417.6a50e923999de.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "정밀 워드마크·유체 흐름 선·산업 부품 매크로·기술 그리드", "applications": "웹·카탈로그·차량·전시·기업 문서" } }, "출처": { "소스": "Behance / Brandglow Studio", "수집일": "2026-08-15", "수집사유": "2026-07-10 공개 프로젝트에서 전체 리브랜딩 응용과 공식 공개 이미지 확인" } }
  },
  {
    title: "Augment — 물류 AI 에이전트를 반투명 인터페이스로 설명", category: "AI 디자인", date: "2026-08-14", url: "https://www.behance.net/gallery/252281313/AI-Services-CRM-B2B-BrandWeb-Augment",
    summary: "기존 물류 도구 위에서 일하는 AI 에이전트를 반투명 채팅 UI, 작업별 데모, 그리드와 녹색 그라디언트로 시각화한 브랜드·웹 시스템.", note: "AI가 별도 앱이 아니라 기존 업무 시스템에 겹쳐 작동한다는 제품 가치를 재질·레이어·실제 대화 예시로 연결한 방식이 B2B AI 설명 화면에 유용함.", tags: ["#AI디자인", "#물류AI", "#에이전트", "#SaaS", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4051f3252281313.6a4bce5d7fffa.png", visual: { background: "#d8f45f", accent: "#0c6b48", ink: "#111511", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "AGENT / LAYER / WORKFLOW" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "공개 프로젝트가 물류별 AI 작업 데모, 기존 도구 위 반투명 대화 UI와 브랜드 그리드를 실제 화면으로 보여 줘 에이전트의 통합 방식을 시각 문법으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["글래스모피즘", "그라디언트", "그리드", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4051f3252281313.6a4bce5d7fffa.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "ai_role": "물류 시스템 안에서 요청을 이해하고 후보를 순위화하는 업무 에이전트", "visual_logic": "기존 화면 위 반투명 레이어·녹색 확장 그라디언트·프로세스 그리드" } }, "출처": { "소스": "Behance / Benoit Chabert", "수집일": "2026-08-14", "수집사유": "2026-07-10 공개 프로젝트에서 실제 에이전트 UI·워크플로 영상과 공식 1400px 대표 PNG 확인" } }
  },
  {
    title: "Carbon Menu Buttons — 액션 밀도와 반응형 축소를 규칙화", category: "웹 스타일가이드", date: "2026-08-14", url: "https://carbondesignsystem.com/components/menu-buttons/usage/",
    summary: "메뉴·콤보·오버플로 버튼을 크기, 너비, 배치, 마우스·키보드 상호작용과 반응형 전환까지 실제 상태 이미지로 정리한 Carbon 컴포넌트 가이드.", note: "페이지 전체 액션과 행·카드 액션을 구분하고 24–48px 높이, 160–288px 메뉴 폭, 키보드 포커스 이동을 함께 규칙화해 제품 헤더 설계에 바로 적용 가능함.", tags: ["#웹스타일가이드", "#Carbon", "#메뉴버튼", "#반응형", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/757ce0fc93bcd8e48a21f9c104528f79/3cbba/usage-menu-button-overview.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-2deg", label: "MENU / COMBO / OVERFLOW" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 세 버튼 변형의 실제 상태, 크기·폭·배치와 키보드 조작을 토큰 수준으로 제시해 액션 컴포넌트 규칙으로 바로 흡수할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/757ce0fc93bcd8e48a21f9c104528f79/3cbba/usage-menu-button-overview.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "components": "menu button·combo button·overflow menu", "rules": "24/32/40/48px 높이·160–288px 메뉴 폭·페이지/행 액션 분리·키보드 탐색" } }, "출처": { "소스": "IBM Carbon Design System", "수집일": "2026-08-14", "수집사유": "최근 3주 내 갱신된 공식 가이드에서 실제 상태 이미지와 접근성·반응형 규칙 확인" } }
  },
  {
    title: "Carbon Notifications — 상태·변형·행동 카피를 한 체계로 연결", category: "콘텐츠 디자인 가이드", date: "2026-08-14", url: "https://carbondesignsystem.com/components/notification/usage/",
    summary: "정보·성공·경고·오류 상태를 inline·toast·actionable·callout 변형과 연결하고 짧고 조치 가능한 메시지 작성 원칙을 실제 화면으로 설명한 가이드.", note: "상태 심각도와 알림의 방해 수준을 먼저 매핑한 뒤 사용자가 상황과 다음 행동을 한 번에 스캔하게 만드는 구조라 오류·완료 메시지 라이팅에 즉시 적용 가능함.", tags: ["#콘텐츠디자인", "#Carbon", "#알림", "#오류메시지", "#UX라이팅", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/5e9d0377294adf0adb2d8d7f6164aa7c/3cbba/1_notification_status_1120.png", visual: { background: "#f4f4f4", accent: "#da1e28", ink: "#161616", radiusOne: "0", radiusTwo: "8px", rotate: "2deg", label: "STATUS / VARIANT / ACTION" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 가이드가 네 상태와 네 알림 변형의 실제 화면, 사용 조건과 짧고 조치 가능한 문장 원칙을 연결해 제품 메시지 작성 절차로 즉시 전환할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/5e9d0377294adf0adb2d8d7f6164aa7c/3cbba/1_notification_status_1120.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "content_model": "상태→알림 변형→제목·본문·선택 행동", "examples": "informational·success·warning·error의 inline/toast/actionable/callout 실제 화면" } }, "출처": { "소스": "IBM Carbon Design System / Notification usage", "수집일": "2026-08-14", "수집사유": "최근 3주 내 갱신된 공식 가이드에서 실제 알림 화면과 행동 중심 카피 규칙 확인" } }
  },
  {
    title: "Decadia Job Ticket Flow — 불규칙 도시 브랜드를 과업 흐름에 적용", category: "웹·앱 UI", date: "2026-08-14", url: "https://www.behance.net/gallery/252625613/4003-User-Interface-User-Experience-Design",
    summary: "직업 티켓 탐색, 요구사항 수락, 도구 수령 장소 길찾기와 완료까지를 사용자 흐름·스타일가이드·와이어프레임·프로토타입으로 연결한 앱 사례.", note: "비정형 카드와 버튼이라는 강한 도시 아이덴티티를 유지하면서도 한 과업의 시작·조건 확인·이동·완료가 끊기지 않게 검증한 구조가 공공 서비스 앱에 참고됨.", tags: ["#웹앱UI", "#사용자흐름", "#프로토타입", "#공공서비스", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/06f52b252625613.6a54ac084f5cd.png", visual: { background: "#f4e950", accent: "#df4c87", ink: "#111111", radiusOne: "24px", radiusTwo: "50%", rotate: "-3deg", label: "CHOOSE / ACCEPT / COLLECT" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 17, "verdict": "accept", "근거": "공개 프로젝트가 직업 티켓 선택부터 도구 수령까지의 사용자 흐름, UI 스타일가이드와 고충실도 화면을 함께 제공해 브랜드형 과업 UI 패턴으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["브루탈리즘", "하이채도", "비대칭", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/06f52b252625613.6a54ac084f5cd.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "사용자 흐름·UI 스타일가이드·저/중/고충실도 화면·클릭 프로토타입", "flow": "직업 티켓 탐색→요구사항 수락→도구함 길찾기→수령 완료" } }, "출처": { "소스": "Behance / Bridget Bosch", "수집일": "2026-08-14", "수집사유": "2026-07-16 공개 프로젝트에서 전체 과업 흐름과 공식 1400px 대표 PNG 확인" } }
  },
  {
    title: "Portfolio 2026 — 광고·브랜드 결과를 강한 편집 리듬으로 압축", category: "비주얼 그래픽", date: "2026-08-14", url: "https://www.behance.net/gallery/253027853/PORTFOLIO-2026?l=1",
    summary: "광고, 브랜딩, 소셜 비주얼을 큰 이미지 크롭과 타이포 대비, 빠른 색 전환으로 묶어 프로젝트 성격이 달라도 하나의 쇼케이스로 읽히게 한 포트폴리오.", note: "여러 캠페인의 이질성을 숨기지 않고 크롭 강도·여백·타이포 스케일을 공통 편집 축으로 사용해 에이전시 쇼릴과 연말 아카이브 구성에 참고하기 좋음.", tags: ["#비주얼그래픽", "#포트폴리오", "#에디토리얼", "#광고", "#타이포그래피"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2f586253027853.6a5e7223a55b1.jpg", visual: { background: "#f05a3c", accent: "#f2df55", ink: "#111111", radiusOne: "0", radiusTwo: "24px", rotate: "3deg", label: "CROP / TYPE / SEQUENCE" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 3, "근거성": 4, "가치축": 4 }, "total": 16, "verdict": "accept", "근거": "공개 프로젝트가 광고·브랜드·소셜 완성물을 큰 크롭, 타이포 스케일과 색 전환으로 반복 편집해 다양한 작업을 하나의 포트폴리오 리듬으로 묶는 문법을 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "하이채도", "비대칭", "고밀도", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2f586253027853.6a5e7223a55b1.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "composition": "전면 이미지 크롭·큰 타이포·비대칭 캡션", "sequence": "프로젝트별 색과 소재는 바꾸고 크롭 강도와 타이포 위계는 반복" } }, "출처": { "소스": "Behance / Ngoc Trang", "수집일": "2026-08-14", "수집사유": "2026-07-20 공개 포트폴리오에서 다수 완성 작업과 공식 1400px 대표 JPEG 확인" } }
  },
  {
    title: "FIG — 거래 파이프라인을 편집적 투자 브랜드로 전환", category: "브랜드", date: "2026-08-14", url: "https://www.behance.net/gallery/252039531/FIG-Real-Estate-SaaS-Brand-Identity",
    summary: "상업용 부동산 인수 플랫폼의 프레임워크·성장·의사결정을 무화과나무 심벌, 구조적 레이아웃, 절제된 색과 편집 타이포로 통합한 SaaS 아이덴티티.", note: "일반적인 테크 그래픽 대신 인수 파이프라인의 구조성과 장기 투자 신뢰를 심벌·서체·레이아웃에 분산해 프리미엄 B2B SaaS 포지셔닝에 참고됨.", tags: ["#브랜드", "#SaaS", "#부동산테크", "#에디토리얼", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/824575252039531.6a45454532c36.jpg", visual: { background: "#ece7d8", accent: "#623f2b", ink: "#181612", radiusOne: "24px", radiusTwo: "0", rotate: "-2deg", label: "FRAME / GROW / DECIDE" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 무화과나무·거래 파이프라인 심벌, 편집 타이포와 절제된 색을 실제 디지털·브랜드 응용에 반복해 투자형 SaaS 아이덴티티 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "그리드", "여백중심", "매트", "절제", "럭셔리"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/824575252039531.6a45454532c36.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "무화과나무·거래 파이프라인·구조적 프레임워크를 결합한 심벌과 편집 타이포", "applications": "플랫폼·웹·프레젠테이션·마케팅 터치포인트" } }, "출처": { "소스": "Behance / Tejas Tawrej", "수집일": "2026-08-14", "수집사유": "2026-07-01 공개 프로젝트에서 브랜드 시스템의 실제 응용과 공식 1400px 대표 JPEG 확인" } }
  },
  {
    title: "Plastic-Wrapped Florals — 반투명 막 아래 소재와 인체를 함께 봉인", category: "AI 이미지 프롬프트", date: "2026-08-14", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#relaxed-pose",
    summary: "검은 배경 앞 앉은 인물과 야생화를 주름진 백색 반투명 플라스틱으로 완전히 감싸고 따뜻한 자연광으로 내부 색과 표면 광택을 동시에 드러낸 공식 Gen-4 결과.", note: "주체·소품을 한 재질 아래 묶고 투과도·주름·배경·광온도를 분리해 뷰티·패션 캠페인의 포장된 정물 같은 인물 구도를 시험하기 좋음.", prompt: "cinematic photography of a person encased completely in thin translucent plastic. colorful flowers in natural colors can be seen wrapped underneath the shiny translucent plastic. the figure sits in a relaxed pose, completely covered in the wrinkled white plastic. soft natural warm lighting. the plastic is wrapped around the figure and wildflowers. black background. surreal. ethereal", tags: ["#AI이미지프롬프트", "#Gen4Image", "#반투명", "#플라스틱", "#패션캠페인"], thumbnail: "https://help.runwayml.com/hc/article_attachments/42893921179283", visual: { background: "#121212", accent: "#efc6b4", ink: "#f6f1eb", radiusOne: "50%", radiusTwo: "24px", rotate: "2deg", label: "WRAP / WRINKLE / GLOW" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4 Image 모델과 결과 PNG를 제공해 인물·꽃의 봉인 구조, 플라스틱 투과·주름·광택과 따뜻한 광원을 독립 조각으로 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["에디토리얼", "중앙집중", "소프트확산광", "글로시", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/42893921179283", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cinematic photography of a person encased completely in thin translucent plastic. colorful flowers in natural colors can be seen wrapped underneath the shiny translucent plastic. the figure sits in a relaxed pose, completely covered in the wrinkled white plastic. soft natural warm lighting. the plastic is wrapped around the figure and wildflowers. black background. surreal. ethereal", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Relaxed pose 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/42893921179283", "fragment_map": [{ "조각": "encased completely in thin translucent plastic", "효과": "인체 전체를 얇은 반투명 막 아래 봉인" }, { "조각": "flowers ... wrapped underneath", "효과": "내부 자연색 소품이 투과되도록 배치" }, { "조각": "wrinkled white plastic", "효과": "표면에 불규칙한 주름과 글로시 하이라이트 생성" }, { "조각": "soft natural warm lighting ... black background", "효과": "따뜻한 확산광과 검은 여백으로 투과 재질 분리" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-14", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·HTTP 200 결과 PNG 확인" } }
  },
  {
    title: "Skyborne RUNWAY Balloons — 거대 레터링을 도시 상공에 부유", category: "AI 이미지 프롬프트", date: "2026-08-14", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#balloon-lettering",
    summary: "RUNWAY 글자를 이루는 거대한 풍선 군집을 푸른 도시 상공에 띄워 문자 형태, 부력, 원근과 스카이라인을 한 문장으로 통제한 공식 Gen-4 결과.", note: "읽을 문구·재질·공중 위치·도시 스케일을 최소 조각으로 분리해 론칭 이벤트와 옥외 캠페인의 초현실 레터링 구도를 빠르게 변주하기 좋음.", prompt: "balloons forming the word RUNWAY float in the sky above a city.", tags: ["#AI이미지프롬프트", "#Gen4Image", "#블루톤", "#레터링", "#옥외캠페인"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062170003", visual: { background: "#65a7db", accent: "#f4d4ad", ink: "#102844", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "TYPE / FLOAT / CITY" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4 Image 모델과 블루 스카이 결과 PNG를 제공해 풍선 문자, 부유 위치, 도시 원근을 최소 통제어로 재현할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "AI활용", "콘텐츠명료성"], "시각렌즈": ["3D", "파스텔", "중앙집중", "글로시", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062170003", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "balloons forming the word RUNWAY float in the sky above a city.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Balloon lettering 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062170003", "fragment_map": [{ "조각": "balloons forming the word RUNWAY", "효과": "풍선 군집의 외곽을 읽을 수 있는 글자 형태로 고정" }, { "조각": "float in the sky", "효과": "부력과 공중 여백 부여" }, { "조각": "above a city", "효과": "스카이라인을 축척 기준과 하단 배경으로 설정" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-14", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·HTTP 200 블루톤 결과 PNG 확인" } }
  },
  {
    title: "Alley Dolly Back — 보행자와 후퇴 카메라의 거리를 일정하게 유지", category: "AI 영상 프롬프트", date: "2026-08-14", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#dolly-alley",
    summary: "희미한 도시 불빛이 끝에 보이는 좁고 어두운 골목에서 목적 있게 걷는 한 인물을 카메라가 부드럽게 뒤로 이동하며 따라가는 공식 Gen-4.5 결과.", note: "주체 속도, 카메라 후퇴, 골목 소실점, 실루엣 분리광을 한 숏 안에서 통제해 스릴러 도입과 패션 워킹 필름의 긴장감을 설계하기 좋음.", prompt: "A dolly backward shot smoothly follows a lone figure walking purposefully down a dimly lit, narrow alleyway, their silhouette sharply defined against the distant glow of city lights.", tags: ["#AI영상프롬프트", "#Gen45", "#돌리백", "#골목", "#실루엣", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/46973623634323", visual: { background: "#18202b", accent: "#e5a368", ink: "#f5f0e8", radiusOne: "0", radiusTwo: "24px", rotate: "2deg", label: "WALK / RETREAT / GLOW" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 보행 방향, 부드러운 후퇴 이동, 좁은 소실점과 도시 역광을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46973623634323", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A dolly backward shot smoothly follows a lone figure walking purposefully down a dimly lit, narrow alleyway, their silhouette sharply defined against the distant glow of city lights.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46973623634323", "fragment_map": [{ "조각": "dolly backward shot smoothly follows", "효과": "주체와 거리를 유지하며 카메라가 후퇴" }, { "조각": "walking purposefully", "효과": "일정하고 의도적인 전진 보행" }, { "조각": "dimly lit, narrow alleyway", "효과": "좁은 소실점과 저조도 환경 고정" }, { "조각": "silhouette ... distant glow", "효과": "원거리 도시광으로 인물 윤곽 분리" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-14", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·HTTP 200 결과 GIF 확인" } }
  },
  {
    title: "Chameleon Crash Zoom — 완만한 이동을 얼굴 급확대로 반전", category: "AI 영상 프롬프트", date: "2026-08-14", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#crash-zoom-chameleon",
    summary: "이끼 낀 가지를 천천히 건너는 위장 카멜레온을 중경으로 보여 주다가 갑자기 얼굴과 독립적으로 움직이는 두 눈까지 급확대한 공식 Gen-4.5 결과.", note: "느린 주체 행동과 급격한 카메라 변화, 마지막 미세 표정의 세 박자를 분리해 제품 리빌·코미디 숏폼의 반전 타이밍을 설계하기 좋음.", prompt: "A medium shot shows a chameleon slowly traversing a moss-covered branch, its body perfectly camouflaged, then a sudden crash zoom closely frames its face, and the independent movement of its pupils as it scans its surroundings.", tags: ["#AI영상프롬프트", "#Gen45", "#크래시줌", "#타이밍", "#리빌", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/46974654697619", visual: { background: "#516447", accent: "#d0b36d", ink: "#f4efe4", radiusOne: "50%", radiusTwo: "8px", rotate: "-2deg", label: "CREEP / SNAP / SCAN" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 모델과 결과 GIF를 제공해 느린 횡이동, 급격한 얼굴 확대와 두 눈의 독립 운동을 시간 순서대로 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "매트", "유희적", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46974654697619", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A medium shot shows a chameleon slowly traversing a moss-covered branch, its body perfectly camouflaged, then a sudden crash zoom closely frames its face, and the independent movement of its pupils as it scans its surroundings.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46974654697619", "fragment_map": [{ "조각": "medium shot ... slowly traversing", "효과": "중경에서 느린 횡이동으로 시작" }, { "조각": "perfectly camouflaged", "효과": "피부색과 이끼 배경을 근접 일치" }, { "조각": "sudden crash zoom closely frames its face", "효과": "중경을 얼굴 극근접으로 순간 전환" }, { "조각": "independent movement of its pupils", "효과": "확대 뒤 두 눈에 서로 다른 탐색 운동 부여" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-14", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·HTTP 200 결과 GIF 확인" } }
  },
  {
    title: "Neon Drive-Thru Lettering — 두 문구를 화살표·별과 함께 발광 계층화", category: "AI 이미지 프롬프트", date: "2026-08-13", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#neon-sign",
    summary: "1950년대 드라이브스루 간판에 RUNWAY와 Frames를 서로 다른 크기로 배치하고 화살표·별을 발광 장식으로 묶은 공식 Gen-4 결과.", note: "문구·장식·시대·발광 재질을 짧은 조각으로 분리해 이벤트 타이틀과 야간 캠페인 키비주얼의 레터링 우선순위를 시험하기 좋음.", prompt: "1950s neon sign for a drive-thru that spells RUNWAY and Frames with a large arrow and stars", tags: ["#AI이미지프롬프트", "#Gen4Image", "#네온사인", "#레터링", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062166675", visual: { background: "#17132d", accent: "#f34f93", ink: "#f5edff", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "TYPE / ARROW / GLOW" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 제공해 1950년대 간판, 두 단계 문구, 화살표·별과 네온 발광을 조합 가능한 레터링 통제로 재현할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "AI활용", "콘텐츠명료성"], "시각렌즈": ["뉴트로", "하이채도", "중앙집중", "하드라이트", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062166675", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "1950s neon sign for a drive-thru that spells RUNWAY and Frames with a large arrow and stars", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Neon sign 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062166675", "fragment_map": [{ "조각": "1950s neon sign for a drive-thru", "효과": "복고 드라이브스루 간판의 형태와 시대 고정" }, { "조각": "spells RUNWAY and Frames", "효과": "두 문구를 발광 레터링의 읽기 계층으로 지정" }, { "조각": "large arrow and stars", "효과": "방향 화살표와 별 장식을 주변 발광 요소로 추가" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-13", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·공개 결과 PNG 확인" } }
  },
  {
    title: "Photocopy Flower Stretch — 흑백 꽃을 스캔 늘임과 거친 입자로 변형", category: "AI 이미지 프롬프트", date: "2026-08-13", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#scanner",
    summary: "꽃의 윤곽을 흑백 복사본으로 단순화한 뒤 세로 스캔 늘임, 빈티지 복사 질감과 거친 그레인을 겹친 공식 Gen-4 결과.", note: "원형 오브젝트와 출력 매체의 오류를 분리해 포스터·앨범 아트에서 재현 가능한 복사기 변형 강도를 비교하기 좋음.", prompt: "distorted black and white scanned image of a flower. vintage photocopy scan stretch effect. grain texture. gritty.", tags: ["#AI이미지프롬프트", "#Gen4Image", "#포토카피", "#스캔", "#포스터"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37148070628115", visual: { background: "#e8e5df", accent: "#202020", ink: "#111111", radiusOne: "0", radiusTwo: "24px", rotate: "-3deg", label: "SCAN / STRETCH / GRAIN" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 제공해 흑백 꽃, 복사기 스캔 늘임과 거친 입자를 독립 통제어로 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["브루탈리즘", "모노톤", "비대칭", "필름그레인", "매트"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148070628115", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "distorted black and white scanned image of a flower. vintage photocopy scan stretch effect. grain texture. gritty.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Scanner 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148070628115", "fragment_map": [{ "조각": "black and white scanned image of a flower", "효과": "꽃을 흑백 스캔 원본으로 고정" }, { "조각": "vintage photocopy", "효과": "낮은 계조와 복사기 표면 질감 부여" }, { "조각": "scan stretch effect", "효과": "스캔 방향으로 형태를 길게 늘여 왜곡" }, { "조각": "grain texture. gritty", "효과": "거친 입자와 마찰감 있는 출력 표면 추가" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-13", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·공개 결과 PNG 확인" } }
  },
  {
    title: "Zero-Gravity Raccoon — 핸드헬드 기록영화 톤으로 부유 쓰레기를 추적", category: "AI 영상 프롬프트", date: "2026-08-13", url: "https://help.runwayml.com/hc/en-us/articles/42460036199443-Text-to-Video-Prompting-Guide#zero-gravity-raccoon",
    summary: "무중력 방에서 라쿤이 쓰레기통을 뒤지고 내용물이 떠오르는 사건을 자연스러운 핸드헬드 흔들림과 저예산 기록영화 톤으로 묶은 공식 Gen-4.5 결과.", note: "주체 행동·환경 물리·카메라 흔들림·제작 질감을 문장별로 나눠 짧은 코미디 제품 필름의 통제 가능한 사건 구조로 쓰기 좋음.", prompt: "A raccoon in a plain room in zero gravity trying to steal the garbage from a silver trash can. The garbage floats out in zero gravity. Handheld documentary film style. Natural camera shake. Raw indie film aesthetic. Natural lighting. Unpolished, authentic look. Low budget realism. Observational feel.", tags: ["#AI영상프롬프트", "#Gen45", "#무중력", "#핸드헬드", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47142392965779", visual: { background: "#777873", accent: "#c6c9c4", ink: "#ffffff", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "FLOAT / SHAKE / OBSERVE" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4.5 Text to Video 모델·지원 설정·결과 GIF를 제공해 라쿤 행동, 무중력 부유, 핸드헬드 흔들림과 기록영화 질감을 순서대로 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "필름그레인", "유희적", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47142392965779", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A raccoon in a plain room in zero gravity trying to steal the garbage from a silver trash can. The garbage floats out in zero gravity. Handheld documentary film style. Natural camera shake. Raw indie film aesthetic. Natural lighting. Unpolished, authentic look. Low budget realism. Observational feel.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9 1280×720·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47142392965779", "fragment_map": [{ "조각": "raccoon ... trying to steal the garbage", "효과": "주체·목표·행동을 한 사건으로 고정" }, { "조각": "garbage floats out in zero gravity", "효과": "환경 물리와 부유하는 보조 오브젝트 지정" }, { "조각": "Handheld documentary ... Natural camera shake", "효과": "관찰자가 따라가는 불규칙 카메라 운동" }, { "조각": "Raw indie film ... Low budget realism", "효과": "정제되지 않은 저예산 기록영화 질감" }] } }, "출처": { "소스": "Runway / Text to Video Prompting Guide", "수집일": "2026-08-13", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·공개 결과 GIF 확인" } }
  },
  {
    title: "Moon Skateboard Tracking — 저각 핸드헬드와 흑백 잔상으로 속도 고정", category: "AI 영상 프롬프트", date: "2026-08-13", url: "https://help.runwayml.com/hc/en-us/articles/42460036199443-Text-to-Video-Prompting-Guide#moon-skateboarder",
    summary: "달 표면을 달리는 우주인 스케이터를 저각 핸드헬드 트래킹으로 붙잡고 빠른 동작 잔상·저대비 흑백·필름 입자를 결합한 공식 Gen-4.5 결과.", note: "카메라 높이와 추적, 주체 속도, 환경 발광, 흑백 질감을 분리해 스포츠·모빌리티 캠페인의 속도감을 반복 조정하기 좋음.", prompt: "A handheld low angle tracking shot, with low contrast and fast-paced motion, follows a skilled astronaut skateboarder on a moon landscape. their movements blur against the soft glow of the dark lunar environment. Film grain, low contrast, black and white", tags: ["#AI영상프롬프트", "#Gen45", "#트래킹숏", "#흑백", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47142392971539", visual: { background: "#151515", accent: "#d4d4d0", ink: "#ffffff", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "LOW / TRACK / BLUR" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4.5 Text to Video 모델·지원 설정·결과 GIF를 제공해 저각 핸드헬드 추적, 빠른 스케이트 동작, 잔상과 저대비 흑백 필름 질감을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "필름그레인", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47142392971539", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A handheld low angle tracking shot, with low contrast and fast-paced motion, follows a skilled astronaut skateboarder on a moon landscape. their movements blur against the soft glow of the dark lunar environment. Film grain, low contrast, black and white", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9 1280×720·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47142392971539", "fragment_map": [{ "조각": "handheld low angle tracking shot", "효과": "지면 가까이에서 주체를 따라가는 불규칙 추적" }, { "조각": "fast-paced motion", "효과": "스케이트 동작의 속도와 박자 강화" }, { "조각": "movements blur against the soft glow", "효과": "어두운 환경 발광 위에 주체 잔상 분리" }, { "조각": "Film grain, low contrast, black and white", "효과": "저대비 흑백 필름 입자로 톤 고정" }] } }, "출처": { "소스": "Runway / Text to Video Prompting Guide", "수집일": "2026-08-13", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·공개 결과 GIF 확인" } }
  },
  dailyReference({
    title: "Runway Gen-4 Image Canvas — 프롬프트·비율·변주를 한 화면으로", category: "AI 디자인", url: "https://help.runwayml.com/hc/en-us/articles/37053594806419-Creating-with-Gen-4-Image#generation-canvas",
    summary: "모델·프롬프트·레퍼런스·비율·해상도·aesthetic range와 seed를 한 생성 캔버스에 배치한 공식 제품 화면.", note: "생성 조건을 입력과 결과 옆에 모아 반복 제작의 상태와 재현성을 유지한 정보 구조가 참고할 만함.", tags: ["#AI디자인", "#생성캔버스", "#프롬프트", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/49985283637523", visual: { background: "#141414", accent: "#8a68ff", ink: "#ffffff", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "PROMPT / CONFIG / VARY" },
    axis: "재현성", scores: { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, basis: "Runway 공식 화면이 생성 입력·설정·결과의 위치를 보여줘 재현 가능한 AI 제작 캔버스로 전이할 수 있다.", info: ["정보구조", "사용자흐름", "인터랙션", "AI활용"], lenses: ["미니멀", "모노톤", "고밀도", "절제"], typeBlock: { workflow: "모델 선택→프롬프트·레퍼런스 입력→비율·해상도 설정→생성→Use/Vary", ai_role: "텍스트와 이미지 레퍼런스로 이미지 생성·변주" }, source: "Runway / Creating with Gen-4 Image", reason: "최근 갱신 공식 문서에서 실제 생성 캔버스 확인"
  }),
  dailyReference({
    title: "Carbon Progress Indicator — 방향·단계·상태를 하나의 계약으로", category: "웹 스타일가이드", url: "https://carbondesignsystem.com/components/progress-indicator/usage/#variants",
    summary: "수평·수직 진행 표시기의 완료·현재·미완료·오류·비활성 상태를 실제 화면으로 규정한 Carbon 공식 사양.", note: "온보딩과 설정 흐름을 방향별 변형과 상태 토큰으로 분리해 재사용하기 좋음.", tags: ["#웹스타일가이드", "#진행표시기", "#상태", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/0c8fe9263b520499d5834cd4e1707ae2/3cbba/progress-indicator-usage-5.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "2deg", label: "STEP / STATE / ORIENT" },
    axis: "시스템화", scores: { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, basis: "Carbon 공식 문서가 방향 변형과 상태를 실제 PNG로 제공해 다단계 흐름으로 시스템화할 수 있다.", info: ["정보구조", "사용자흐름", "접근성", "인터랙션"], lenses: ["미니멀", "그리드", "절제"], typeBlock: { tokens: "단계 원형·연결선·레이블·상태별 색과 아이콘", states: "완료→현재→미완료→오류→비활성" }, source: "Carbon / Progress indicator usage", reason: "2026-08-11 갱신 공식 문서에서 실제 상태 화면 확인"
  }),
  dailyReference({
    title: "Carbon Progress Copy — 짧은 단계명과 선택적 보조 설명", category: "콘텐츠 디자인 가이드", url: "https://carbondesignsystem.com/components/progress-indicator/usage/#content",
    summary: "단계 이름을 짧고 고유하게 쓰고 필요한 경우에만 보조 설명을 붙여 현재 위치와 다음 행동을 읽게 하는 공식 사례.", note: "가입·설정 흐름에서 제목과 설명 역할을 분리하는 즉시 실행 가능한 검수 기준임.", tags: ["#콘텐츠디자인가이드", "#마이크로카피", "#사용자흐름"], thumbnail: "https://carbondesignsystem.com/static/541ef7ab0c1a7b59b1575d48fda8a37f/3cbba/progress-indicator-usage-1.png", visual: { background: "#f4f4f4", accent: "#198038", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "LABEL / SUPPORT / NEXT" },
    axis: "실행가능성", scores: { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, basis: "공식 화면이 단계 레이블과 보조문구의 위치·길이·위계를 보여줘 UI 카피 검수에 적용할 수 있다.", info: ["정보구조", "사용자흐름", "타이포그래피", "접근성", "콘텐츠명료성"], lenses: ["미니멀", "그리드", "절제"], typeBlock: { procedure: "짧은 단계명→중복 확인→필요한 단계만 설명→현재·다음 단계 검수", visible_examples: "단계명과 보조 설명 화면" }, source: "Carbon / Progress indicator content", reason: "2026-08-11 갱신 공식 문서에서 실제 단계 카피 확인"
  }),
  dailyReference({
    title: "DreamUI — 프롬프트·스크린샷·HTML을 편집 가능한 Figma 화면으로", category: "Figma 플러그인", url: "https://forum.figma.com/showcase-your-work-14/dreamui-figma-plugin-by-noor-maqsood-56341",
    summary: "텍스트 생성, 스크린샷 재구성, HTML 변환, 토큰 추출과 접근성 검사를 한 캔버스에 묶은 Figma 플러그인.", note: "생성 이후 편집 가능한 레이어·토큰·검수로 이어지는 제작 흐름을 비교하기 좋음.", tags: ["#Figma플러그인", "#AIUI", "#디자인투코드", "#테크IT"], thumbnail: "https://uploads-us-west-2.insided.com/figma-en/attachment/66e06457-d25a-4b0f-87c0-9fff6da343e2.jpg", visual: { background: "#1e1734", accent: "#b98cff", ink: "#ffffff", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "PROMPT / EDIT / TOKEN" },
    axis: "유용성", scores: { "완성도": 4, "신규성": 4, "근거성": 4, "가치축": 5 }, basis: "Figma 공식 포럼이 실행 화면과 생성·편집·토큰·접근성 기능을 공개해 반복 UI 제작 활용성을 검토할 수 있다.", info: ["사용자흐름", "접근성", "인터랙션", "AI활용"], lenses: ["3D", "그라디언트", "고밀도"], typeBlock: { workflow: "입력→레이어 생성→채팅 수정→토큰→접근성 검사", plugin_url: "https://www.figma.com/community/plugin/1656620010944492160/dreamui-ai-ui-generator-design-system-wireframe-generator-ai-design-copilot-tokens-html" }, source: "Figma Forum / DreamUI", reason: "2026-07-24 공식 포럼에서 실행 화면과 기능 확인"
  }),
  dailyReference({
    title: "Nothing Personal — 인물 모션과 편집 그리드가 교차하는 플랫폼", category: "웹·앱 UI", url: "https://www.pentagram.com/work/nothing-personal",
    summary: "Mozilla Foundation의 매거진을 인물 모션, 대형 타이포, 모듈형 편집 그리드로 구성한 웹 경험.", note: "긴 읽기 콘텐츠를 인물·주제·모션 블록의 탐색 리듬으로 전환한 방식이 참고할 만함.", tags: ["#웹앱UI", "#에디토리얼", "#모션", "#테크IT"], thumbnail: "https://pentagram-production.imgix.net/ca2c4892-0746-4443-b3c5-6ebec35f38f5/NothingPersonal_Slide1_PeopleMotion_mp4copy.jpg?auto=compress%2Cformat&crop=entropy&fit=crop&fm=jpg&h=470&q=80&rect=96%2C0%2C1728%2C1080&w=900&s=5c14af73b5812b32bb89b21abe7dab80", visual: { background: "#f0ecdf", accent: "#e33d32", ink: "#111111", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "PEOPLE / TYPE / MOTION" },
    axis: "시스템화", scores: { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, basis: "Pentagram 공식 사례가 실제 화면과 모션·타이포·편집 그리드를 보여줘 미디어 탐색 UI로 전이할 수 있다.", info: ["정보구조", "사용자흐름", "타이포그래피", "브랜드일관성", "인터랙션"], lenses: ["에디토리얼", "비대칭", "고밀도", "하이채도"], typeBlock: { workflow: "주제 진입→모션 히어로→편집 그리드→장문 읽기", system: "대형 타이포·인물·모션·기사 카드" }, source: "Pentagram / Nothing Personal", reason: "2026-07-16 공식 작업 페이지에서 실제 화면 확인"
  }),
  dailyReference({
    title: "JETOUR — 유연한 J 심볼과 차체 그래픽의 모빌리티 아이덴티티", category: "브랜드", url: "https://www.pentagram.com/work/jetour",
    summary: "자동차 제조사의 J를 리본형 심볼과 전용 서체로 만들고 차량·디지털·공간까지 확장한 브랜드 시스템.", note: "속도 이미지를 심볼·모션·차체 적용까지 일관된 형태 언어로 확장한 점이 유용함.", tags: ["#브랜드", "#자동차", "#모빌리티", "#테크IT"], thumbnail: "https://pentagram-production.imgix.net/d1bf3473-6793-4a87-8825-e7bcd37e0c4e/1_Jetour_casestudy_title_1STILL.png?auto=compress%2Cformat&crop=entropy&fit=crop&fm=jpg&h=470&q=80&rect=0%2C80%2C3840%2C2400&w=900&s=fbbbe3e4110b80e8279dfdc7cde98842", visual: { background: "#101010", accent: "#ef4a2f", ink: "#ffffff", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "J / MOTION / MOBILITY" },
    axis: "스타일추출성", scores: { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, basis: "공식 사례가 심볼·서체·차체·디지털 응용을 함께 보여줘 모빌리티 브랜드의 형태 언어를 추출할 수 있다.", info: ["타이포그래피", "브랜드일관성"], lenses: ["미니멀", "모노톤", "중앙집중", "하드라이트", "럭셔리"], typeBlock: { system: "리본형 J·전용 서체·흑백 팔레트·차체 모션", applications: "차량·전시장·디지털·캠페인" }, source: "Pentagram / JETOUR", reason: "2026-07-30 공식 페이지에서 차량 적용 확인"
  }),
  dailyReference({
    title: "Pfizer Next Chapter — 과학 이미지를 데이터형 파랑 레이어로", category: "비주얼 그래픽", url: "https://www.pentagram.com/work/pfizer",
    summary: "현미경·분자·사람 이미지를 파랑 팔레트, 대형 타이포, 투명 레이어와 결합한 헬스케어 그래픽 시스템.", note: "과학 정보를 사진·데이터·색면의 반복 문법으로 브랜드화한 방식을 참고하기 좋음.", tags: ["#비주얼그래픽", "#헬스케어", "#블루", "#테크IT"], thumbnail: "https://pentagram-production.imgix.net/0372d77b-77e0-4994-957f-6380fc5c4528/Pfizer_CaseStudy_1_THUMBNAIL.jpg?auto=compress%2Cformat&crop=entropy&fit=crop&fm=jpg&h=470&q=80&rect=169%2C0%2C1730%2C1080&w=900&s=846347ed5125e822359c700a6b3fb998", visual: { background: "#eaf2ff", accent: "#0063ff", ink: "#081f5c", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "SCIENCE / DATA / BLUE" },
    axis: "스타일추출성", scores: { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, basis: "공식 사례가 과학 사진·데이터·타이포·파랑 레이어의 반복 가능한 조합을 실제 그래픽으로 보여준다.", info: ["정보구조", "타이포그래피", "브랜드일관성"], lenses: ["에디토리얼", "듀오톤", "그리드", "글로시", "차가움"], typeBlock: { style_recipe: "과학 매크로+파랑 레이어+대형 산세리프+데이터 선", applications: "캠페인·디지털·연구 커뮤니케이션" }, source: "Pentagram / Pfizer", reason: "2026-07-28 공식 페이지에서 그래픽 시스템 확인"
  }),
  dailyReference({
    title: "Cool-chrome Architecture — 청록 보석색과 액체 크롬 건축", category: "AI 이미지 프롬프트", url: "https://help.runwayml.com/hc/en-us/articles/37053594806419-Creating-with-Gen-4-Image#cool-chrome-buildings",
    summary: "고전 건축을 검은 심연에서 비틀고 청록·파랑·보라 보석색과 반투명 크롬으로 감싼 공식 결과.", note: "형태 왜곡·차가운 팔레트·크롬 재질을 분리해 테크 광고 키비주얼을 설계하기 좋음.", prompt: "photograph of warped ornate classic buildings in a black abyss. the buildings are in surreal shapes. the buildings curve and bend impossibly high into the black sky in a glitched swirl formation, defying gravity. stark white color palette with cool blue and green tones. distorted. warped, squished, and extremely deformed and exaggerated. avant-garde. vibrant red, blue, purple, jewel green. conjoined bubblegum stretch. hologram. encased in translucent liquid chrome with an iridescent sheen.", tags: ["#AI이미지프롬프트", "#Gen4Image", "#블루톤", "#액체크롬", "#3D"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37089796809363", visual: { background: "#061326", accent: "#39d7e8", ink: "#e9fbff", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "WARP / CHROME / CYAN" },
    axis: "재현성", scores: { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, basis: "공식 문서가 전체 프롬프트·모델 설정·청록 크롬 결과를 함께 제공해 재현 가능한 블루톤 표본이다.", info: ["AI활용", "콘텐츠명료성"], lenses: ["3D", "하이채도", "중앙집중", "글로시", "차가움", "몽환"], typeBlock: { prompt: "photograph of warped ornate classic buildings in a black abyss. the buildings are in surreal shapes. the buildings curve and bend impossibly high into the black sky in a glitched swirl formation, defying gravity. stark white color palette with cool blue and green tones. distorted. warped, squished, and extremely deformed and exaggerated. avant-garde. vibrant red, blue, purple, jewel green. conjoined bubblegum stretch. hologram. encased in translucent liquid chrome with an iridescent sheen.", tool_model: "Runway Gen-4 Image", params: "Text to Image·720p/1080p·지원 비율 6종·seed 미공개", output_url: "https://help.runwayml.com/hc/article_attachments/37089796809363", fragment_map: [{ "조각": "warped ornate buildings", "효과": "건축 왜곡" }, { "조각": "cool blue and green tones", "효과": "청록 팔레트" }, { "조각": "translucent liquid chrome", "효과": "크롬 반사" }] }, source: "Runway / Creating with Gen-4 Image", reason: "공식 가이드에서 프롬프트·설정·결과 확인"
  }),
  dailyReference({
    title: "High Elf Reference — 동일 인물을 왕실 판타지 룩으로", category: "AI 이미지 프롬프트", url: "https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References#high-elf-character",
    summary: "중립 인물 레퍼런스를 백발·보석 서클릿·왕실 의상으로 바꾸면서 얼굴 일관성을 유지한 공식 결과.", note: "정체성은 레퍼런스에 맡기고 의상·색보정·심도만 텍스트로 제어하는 워크플로로 쓰기 좋음.", prompt: "@bryan as a high elf in a castle. cinematic with professional color grading. muted color palette. shallow depth of field. pointed ears. flowing white hair. jeweled circlet. elaborate ethereal regal elven attire.", tags: ["#AI이미지프롬프트", "#Gen4References", "#캐릭터일관성"], thumbnail: "https://help.runwayml.com/hc/article_attachments/40792559180435", visual: { background: "#aba79d", accent: "#d7c28b", ink: "#161616", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "IDENTITY / WARDROBE / DEPTH" },
    axis: "재현성", scores: { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, basis: "공식 문서가 입력 레퍼런스·전체 프롬프트·결과를 제공해 정체성 보존형 변환을 재현할 수 있다.", info: ["AI활용", "브랜드일관성"], lenses: ["에디토리얼", "어스톤", "중앙집중", "소프트확산광", "몽환"], typeBlock: { prompt: "@bryan as a high elf in a castle. cinematic with professional color grading. muted color palette. shallow depth of field. pointed ears. flowing white hair. jeweled circlet. elaborate ethereal regal elven attire.", tool_model: "Runway Gen-4 Image References", params: "single reference @bryan·최대 3 references·seed 미공개", output_url: "https://help.runwayml.com/hc/article_attachments/40792559180435", fragment_map: [{ "조각": "@bryan", "효과": "얼굴 유지" }, { "조각": "muted color palette", "효과": "저채도" }, { "조각": "jeweled circlet", "효과": "장신구 변환" }] }, source: "Runway / Gen-4 Image References", reason: "공식 문서에서 레퍼런스·프롬프트·결과 확인"
  }),
  dailyReference({
    title: "Perfume Pedestal — 향수병 상승을 따라가는 제품 숏", category: "AI 영상 프롬프트", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#perfume-pedestal",
    summary: "손이 향수병을 들어 올리는 동작에 맞춰 카메라가 상승하고 프리즘광과 청분홍 배경이 유리를 강조하는 공식 결과.", note: "주체 동작과 카메라 이동을 같은 방향으로 묶어 제품 동작을 크게 읽히게 만들기 좋음.", prompt: "A woman's slender fingers with delicate, polished nails gently grasp the faceted cap of a clear glass perfume bottle, illuminated by soft, prismatic light. The hand lifts the bottle, revealing the faint tattoo on her wrist while the camera executes a gentle pedestal up, following the bottle's ascent. The color palette combines natural skin tones with the opalescent hues of the perfume bottle and the soft cool blue and warm pink background. Commercial beauty photography, ethereal, soft focus, product shot, iridescent, soft pastels", tags: ["#AI영상프롬프트", "#Gen45", "#제품광고", "#Pedestal"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504754579", visual: { background: "#b8dbea", accent: "#f3a9bc", ink: "#17242c", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "LIFT / PEDESTAL / PRISM" },
    axis: "재현성", scores: { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, basis: "공식 라이브러리가 전체 프롬프트·Gen-4.5 모델·GIF를 제공해 수직 추적과 프리즘광을 재현할 수 있다.", info: ["AI활용", "콘텐츠명료성"], lenses: ["에디토리얼", "파스텔", "중앙집중", "소프트확산광", "글로시"], typeBlock: { prompt: "A woman's slender fingers with delicate, polished nails gently grasp the faceted cap of a clear glass perfume bottle, illuminated by soft, prismatic light. The hand lifts the bottle, revealing the faint tattoo on her wrist while the camera executes a gentle pedestal up, following the bottle's ascent. The color palette combines natural skin tones with the opalescent hues of the perfume bottle and the soft cool blue and warm pink background. Commercial beauty photography, ethereal, soft focus, product shot, iridescent, soft pastels", tool_model: "Runway Gen-4.5 Text to Video", params: "2–10초·720p·24/25fps·seed 미공개", output_url: "https://help.runwayml.com/hc/article_attachments/47313504754579", fragment_map: [{ "조각": "hand lifts the bottle", "효과": "제품 상승" }, { "조각": "gentle pedestal up", "효과": "수직 추적" }, { "조각": "prismatic light", "효과": "유리 하이라이트" }] }, source: "Runway / Camera Terms", reason: "공식 라이브러리에서 프롬프트·모델·GIF 확인"
  }),
  dailyReference({
    title: "Iridescent Still-life Orbit — 뱀·레몬·꽃을 도는 모션", category: "AI 영상 프롬프트", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#iridescent-still-life-orbit",
    summary: "무지갯빛 흰 뱀, 노란 레몬, 분홍 꽃을 파스텔 배경에 고정하고 카메라만 느리게 공전시키는 공식 결과.", note: "정물의 상대 위치를 유지한 채 궤도와 속도만 통제해 3D 제품 릴에 전이하기 좋음.", prompt: "Camera orbits a meticulously arranged, surreal still life featuring an iridescent albino snake coiled among vibrant yellow lemons, soft pink flowers, and shimmering, glitter-dusted flora against a gentle pastel backdrop. The camera executes a slow, deliberate orbit.", tags: ["#AI영상프롬프트", "#Gen45", "#Orbit", "#정물", "#3D"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515624083", visual: { background: "#f5d7df", accent: "#f0d348", ink: "#2c2430", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "STILL LIFE / ORBIT / IRIDESCENT" },
    axis: "재현성", scores: { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, basis: "공식 라이브러리가 전체 프롬프트·Gen-4.5 모델·GIF를 제공해 파스텔 정물과 공전 카메라를 재현할 수 있다.", info: ["AI활용", "콘텐츠명료성"], lenses: ["3D", "파스텔", "중앙집중", "글로시", "유희적", "몽환"], typeBlock: { prompt: "Camera orbits a meticulously arranged, surreal still life featuring an iridescent albino snake coiled among vibrant yellow lemons, soft pink flowers, and shimmering, glitter-dusted flora against a gentle pastel backdrop. The camera executes a slow, deliberate orbit.", tool_model: "Runway Gen-4.5 Text to Video", params: "2–10초·720p·24/25fps·seed 미공개", output_url: "https://help.runwayml.com/hc/article_attachments/47313515624083", fragment_map: [{ "조각": "surreal still life", "효과": "정물 배치" }, { "조각": "iridescent albino snake", "효과": "무지갯빛 곡선" }, { "조각": "slow, deliberate orbit", "효과": "느린 공전" }] }, source: "Runway / Camera Terms", reason: "공식 라이브러리에서 프롬프트·모델·GIF 확인"
  }),
  dailyReference({
    title: "Under the Skin — 완벽주의가 자기 의심으로 굳어지는 순간", category: "공감형 웹툰", url: "https://www.behance.net/gallery/252193743/Under-the-Skin-Comic-Project",
    summary: "무엇이든 최고여야 한다는 아이의 압박이 시험·비교·침묵을 거쳐 감정적 정체와 자기 의심으로 변하는 연속 컷 만화.", note: "성과 압박을 표정, 반복되는 프레임, 분홍 대각선과 청회색 그레인으로 누적해 독자가 자신의 완벽주의 경험을 투영하게 하는 전개가 참고할 만함.", tags: ["#공감형웹툰", "#완벽주의", "#자기의심", "#감정서사", "#연속컷"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f18bcf252193743.6a4938a4255ec.jpg", visual: { background: "#d8d8e2", accent: "#df8fad", ink: "#1f2f59", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "PRESSURE / DOUBT / PAUSE" },
    axis: "스타일추출성", scores: { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, basis: "공개 프로젝트가 완벽주의에서 자기 의심으로 이동하는 전체 서사와 실제 연속 컷을 함께 보여 줘 감정 누적형 공감 콘텐츠의 컷 구성·표정·색 대비 문법으로 추출할 수 있다.", info: ["사용자흐름", "타이포그래피", "콘텐츠명료성"], lenses: ["일러스트", "듀오톤", "비대칭", "고밀도", "필름그레인", "절제"], typeBlock: { panels: "가족의 기대→시험과 비교→자기 검열→감정적 정체와 자기 의심", empathy_point: "최고여야 한다는 압박이 일상 장면과 표정의 반복 속에서 스스로를 멈추게 하는 경험으로 드러남" }, source: "Behance / Lina Serzhan — Under the Skin", reason: "2026-07-04 공개 프로젝트에서 전체 서사 설명, 실제 연속 컷과 안정적인 1400px 대표 이미지 확인"
  }),
  {
    title: "Linear 모바일 코딩 세션 — 이동 중에도 Diff를 보고 에이전트를 조향", category: "AI 디자인", date: "2026-08-08", url: "https://linear.app/changelog/2026-07-30-coding-sessions-on-mobile",
    summary: "모바일 Changes 탭에서 코드 변경을 검토하고 특정 줄을 메시지에 첨부해 Linear Agent의 다음 작업을 조향하는 공식 제품 흐름.", note: "AI 작업을 단순 채팅이 아니라 상태 확인→라인 선택→피드백→재실행의 검토 루프로 묶어 작은 화면에서도 책임 있는 개입 지점을 유지한 점이 참고할 만함.", tags: ["#AI디자인", "#에이전트", "#코드리뷰", "#모바일", "#사용자흐름", "#테크IT"], thumbnail: "https://webassets.linear.app/images/ornj730p/production/de5bfa7b44714eef4e54f0bb4c6bfab6841eb716-3600x2360.png?auto=format&dpr=2&q=95", visual: { background: "#17191c", accent: "#8a8f98", ink: "#f7f8f9", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "REVIEW / SELECT / STEER" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Linear 공식 릴리스가 모바일 할당 목록과 Changes 탭 실제 화면, 코드 줄 선택부터 에이전트 재지시까지의 흐름을 함께 제공해 모바일 AI 검토 패턴으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "고밀도", "모노톤", "절제"], "시각아티팩트_url": "https://webassets.linear.app/images/ornj730p/production/de5bfa7b44714eef4e54f0bb4c6bfab6841eb716-3600x2360.png?auto=format&dpr=2&q=95", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "할당된 코딩 세션 확인→Diff Changes 탭 진입→변경 줄 선택→메시지에 인용→Linear Agent 재지시", "ai_role": "코드 변경을 생성하고 사용자의 라인 단위 피드백으로 반복 수정" } }, "출처": { "소스": "https://linear.app/changelog/2026-07-30-coding-sessions-on-mobile", "수집일": "2026-08-08", "수집사유": "2026-07-30 공식 릴리스에서 모바일 코딩 세션 실제 화면과 검토·조향 흐름 확인" } }
  },
  {
    title: "Carbon AI Form — 폼 전체의 AI 개입을 토큰으로 표시", category: "웹 스타일가이드", date: "2026-08-08", url: "https://carbondesignsystem.com/components/form/style/#ai-presence",
    summary: "기존 폼 구조를 유지하면서 배경·내외부 그림자·그라디언트 테두리·대형 AI 라벨만 토큰으로 추가한 Carbon 공식 스타일 사양.", note: "입력 컴포넌트를 새로 만들지 않고 컨테이너 차등 토큰만으로 AI 개입 범위를 표시해 기존 디자인 시스템에 흡수하기 좋은 접근임.", tags: ["#웹스타일가이드", "#폼", "#디자인토큰", "#AI상태", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/a40acc6ee3570dc67daa66970387d2cd/3cbba/form-style-presence.png", visual: { background: "#f4f4f4", accent: "#8a3ffc", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "2deg", label: "LAYER / AURA / LABEL" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 문서가 AI 폼의 실제 측정 화면과 layer·shadow·aura·border·label 토큰을 명시해 기존 폼 시스템의 AI 변형으로 바로 흡수할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "브랜드일관성", "접근성", "AI활용"], "시각렌즈": ["미니멀", "그라디언트", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/a40acc6ee3570dc67daa66970387d2cd/3cbba/form-style-presence.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "$layer·$ai-drop-shadow·$ai-inner-shadow·$ai-aura-start-sm·$ai-aura-stop·$ai-border-start/end", "states": "기본 폼 구조 유지→AI 컨테이너 토큰 적용→large AI label로 범위 표기" } }, "출처": { "소스": "https://carbondesignsystem.com/components/form/style/#ai-presence", "수집일": "2026-08-08", "수집사유": "2026-07-29 갱신 공식 문서에서 AI 폼 실제 PNG와 토큰 사양 확인" } }
  },
  {
    title: "Carbon Form Typography — 제목·라벨·도움말·오류의 문장 체계", category: "콘텐츠 디자인 가이드", date: "2026-08-08", url: "https://carbondesignsystem.com/components/form/style/#typography",
    summary: "폼 제목과 라벨을 sentence case로 통일하고 제목·필드·도움말·오류 메시지의 크기와 역할을 실제 폼 화면에 대응시킨 공식 가이드.", note: "카피의 문장 규칙과 위계 토큰을 한 화면에서 함께 검수할 수 있어 복합 폼의 명료성·오류 안내 품질을 표준화하기 좋음.", tags: ["#콘텐츠디자인가이드", "#폼카피", "#오류메시지", "#타이포그래피", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/c1959db420f228d56fb794e8a11e8cc6/3cbba/form-style-3.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "TITLE / LABEL / ERROR" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 문서가 sentence case 규칙, 제목·라벨·필드·도움말·오류별 타입 토큰과 실제 폼 화면을 제공해 폼 카피 검수 절차에 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/c1959db420f228d56fb794e8a11e8cc6/3cbba/form-style-3.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "폼 역할 분리→제목·라벨 sentence case 확인→각 역할별 타입 토큰 적용→도움말과 오류 메시지 중복·위계 검수", "visible_examples": "제목·라벨·필드 텍스트·도움말·오류 메시지가 배치된 공식 폼 화면" } }, "출처": { "소스": "https://carbondesignsystem.com/components/form/style/#typography", "수집일": "2026-08-08", "수집사유": "2026-07-29 갱신 공식 문서에서 폼 카피 규칙·타입 토큰·실제 화면 확인" } }
  },
  {
    title: "Disposable Night Skate — 일회용 플래시의 과노출과 비네팅", category: "AI 이미지 프롬프트", date: "2026-08-08", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#disposable-film",
    summary: "야간 스케이트파크의 인물을 직접 플래시·필름 비네팅·약한 과노출·저채도 색으로 고정한 Runway 공식 결과.", note: "플래시 위치와 노출, 가장자리 감광, 팔레트를 분리해 패션·청춘 캠페인의 즉흥적인 필름 룩을 반복 제작하기 좋음.", prompt: "Classic disposable flash photography taken at night of a man on a skateboard at a skate park. Characteristics and qualities of a disposable flash camera, on film, vignette and slight overexposure. Overall muted color", tags: ["#AI이미지프롬프트", "#Gen4Image", "#일회용카메라", "#비네팅", "#필름그레인"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37148070587283", visual: { background: "#302f2d", accent: "#f6e8c8", ink: "#ffffff", radiusOne: "0", radiusTwo: "24px", rotate: "-3deg", label: "FLASH / VIGNETTE / FILM" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 제공해 야간 직접 플래시, 비네팅, 약한 과노출과 저채도 필름 톤을 조합해 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "하드라이트", "필름그레인"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148070587283", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Classic disposable flash photography taken at night of a man on a skateboard at a skate park. Characteristics and qualities of a disposable flash camera, on film, vignette and slight overexposure. Overall muted color", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·reference 없음·공식 Disposable film 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148070587283", "fragment_map": [{ "조각": "disposable flash photography taken at night", "효과": "야간 직접 플래시의 강한 전경 노출" }, { "조각": "on film, vignette", "효과": "프레임 가장자리 감광" }, { "조각": "slight overexposure", "효과": "하이라이트를 가볍게 날린 인화 톤" }, { "조각": "Overall muted color", "효과": "채도를 낮춘 즉흥적 필름 팔레트" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-08-08", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·결과 PNG 확인" } }
  },
  {
    title: "Heavy-grain Fisheye — 왜곡된 근접 인물과 먼지 입자", category: "AI 이미지 프롬프트", date: "2026-08-08", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#heavy-grain-film",
    summary: "카메라를 들여다보는 인물을 흑백 어안 렌즈와 강한 필름 입자·먼지·노이즈로 왜곡한 Runway 공식 결과.", note: "렌즈 왜곡과 표면 노이즈를 별도 조각으로 제어해 음악·스트리트 캠페인의 거칠고 밀착된 인물 컷을 설계하기 좋음.", prompt: "black and white fisheye lens photo with heavy film grain captures a man peering directly into the camera. the fisheye lens distorts the subject and background. visible dust particles. visible noise.", tags: ["#AI이미지프롬프트", "#Gen4Image", "#어안렌즈", "#흑백", "#필름그레인"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37153279782675", visual: { background: "#b8b8b4", accent: "#2a2a29", ink: "#111111", radiusOne: "50%", radiusTwo: "0", rotate: "3deg", label: "FISHEYE / GRAIN / DUST" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 제공해 어안 왜곡, 흑백 대비, 강한 입자와 먼지 노이즈를 분리해 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "필름그레인", "매트"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37153279782675", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "black and white fisheye lens photo with heavy film grain captures a man peering directly into the camera. the fisheye lens distorts the subject and background. visible dust particles. visible noise.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·reference 없음·공식 Heavy grain film 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37153279782675", "fragment_map": [{ "조각": "black and white fisheye lens photo", "효과": "흑백 어안 렌즈의 원형 왜곡" }, { "조각": "peering directly into the camera", "효과": "시선과 얼굴을 프레임 중심에 밀착" }, { "조각": "heavy film grain", "효과": "굵은 필름 입자층" }, { "조각": "visible dust particles. visible noise", "효과": "먼지와 전자 노이즈를 표면에 중첩" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-08-08", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·결과 PNG 확인" } }
  },
  {
    title: "Porcelain Light Pulse — 고정 극근접에서 투사광만 호흡시키기", category: "AI 영상 프롬프트", date: "2026-08-08", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#extreme-close-up",
    summary: "매끈한 백색 얼굴을 극근접 고정 프레임에 두고 파랑·보라 투사광 띠만 미세하게 확장·수축시키는 공식 Gen-4.5 결과.", note: "카메라를 정지한 채 빛의 색·범위·주기만 움직여 뷰티·테크 캠페인에서 소재와 광원 변화에 집중시키기 좋음.", prompt: "A smooth, porcelain-white face fills the frame with emphasis on the closed, featureless eyes and the abstract, multi-colored light pattern projected across the upper face. The projected light pulses and shifts subtly, causing the blue and purple bands to slowly expand and contract, as the camera holds in a static, tight frame. Against a softly blurred coral-red background. Avant-garde portraiture, surreal.", tags: ["#AI영상프롬프트", "#Gen45", "#극근접", "#투사광", "#블루퍼플", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/46973434672275", visual: { background: "#4e47a8", accent: "#ef6f68", ink: "#f8f5ff", radiusOne: "50%", radiusTwo: "24px", rotate: "2deg", label: "STATIC / PULSE / COLOR" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공해 고정 극근접 구도와 파랑·보라 투사광의 느린 맥동을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "듀오톤", "중앙집중", "소프트확산광", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46973434672275", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A smooth, porcelain-white face fills the frame with emphasis on the closed, featureless eyes and the abstract, multi-colored light pattern projected across the upper face. The projected light pulses and shifts subtly, causing the blue and purple bands to slowly expand and contract, as the camera holds in a static, tight frame. Against a softly blurred coral-red background. Avant-garde portraiture, surreal.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46973434672275", "fragment_map": [{ "조각": "porcelain-white face fills the frame", "효과": "얼굴 표면이 화면을 채우는 극근접" }, { "조각": "light pulses and shifts subtly", "효과": "투사광의 미세한 밝기·위치 변화" }, { "조각": "blue and purple bands slowly expand and contract", "효과": "청보라 색 띠의 느린 호흡 운동" }, { "조각": "camera holds in a static, tight frame", "효과": "카메라 동작을 제거해 광원 변화만 강조" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples", "수집일": "2026-08-08", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·결과 GIF 확인" } }
  },
  {
    title: "Painted Elephant Close-up — 주름과 문양을 정면 근접으로 고정", category: "AI 영상 프롬프트", date: "2026-08-08", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#close-up",
    summary: "흰 고대 문자형 페인트가 놓인 코끼리 얼굴을 창백한 빛 아래 근접 촬영해 피부 질감과 표식을 동시에 읽게 하는 공식 결과.", note: "주체의 재질·그래픽 표식·광원·샷 크기를 짧게 결합해 동물·환경 캠페인의 상징적 인서트 숏을 만들기 좋음.", prompt: "A close-up isolates an elder elephant's face, where white paint patterns resembling ancient script are painted across its leathery surface under a pallid light.", tags: ["#AI영상프롬프트", "#Gen45", "#클로즈업", "#피부질감", "#상징그래픽"], thumbnail: "https://help.runwayml.com/hc/article_attachments/46972936445075", visual: { background: "#7f7c75", accent: "#e8e3d8", ink: "#171716", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "CLOSE / TEXTURE / MARK" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공해 정면 근접 샷, 가죽 같은 피부, 백색 문자 패턴과 창백한 광원을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "소프트확산광", "매트", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46972936445075", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A close-up isolates an elder elephant's face, where white paint patterns resembling ancient script are painted across its leathery surface under a pallid light.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46972936445075", "fragment_map": [{ "조각": "A close-up isolates", "효과": "배경 정보를 줄이고 얼굴을 단독 프레이밍" }, { "조각": "elder elephant's face", "효과": "주름과 연령감이 드러나는 피부 질감" }, { "조각": "white paint patterns resembling ancient script", "효과": "피부 위 상징적 백색 문자 패턴" }, { "조각": "under a pallid light", "효과": "채도를 낮춘 창백한 확산 조명" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples", "수집일": "2026-08-08", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·결과 GIF 확인" } }
  },
  {
    title: "Linear Guided Reviews — 큰 Diff를 설명 단위로 재구성", category: "웹·앱 UI", date: "2026-08-08", url: "https://linear.app/changelog/2026-07-30-coding-sessions-on-mobile#guided-reviews-are-now-generally-available",
    summary: "큰 pull request를 의미 있는 변경 묶음과 설명으로 나누고 코드·파일 탐색과 한 화면에서 연결한 Linear의 공식 리뷰 UI.", note: "코드량이 아니라 변경 의도 단위로 검토 순서를 설계해 고밀도 개발자 도구에서 인지 부하와 탐색 왕복을 줄인 점이 실무적으로 유용함.", tags: ["#웹앱UI", "#코드리뷰", "#Diff", "#개발자도구", "#정보구조", "#테크IT"], thumbnail: "https://webassets.linear.app/images/ornj730p/production/0bae3de361f646dc692b226b236f9f7e1ae19224-3600x2200.png?auto=format&dpr=2&q=95", visual: { background: "#17191c", accent: "#7c83f7", ink: "#f7f8f9", radiusOne: "8px", radiusTwo: "24px", rotate: "1deg", label: "GROUP / EXPLAIN / REVIEW" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Linear 공식 릴리스가 Guided Review의 실제 제품 화면과 대형 PR을 설명 가능한 변경 묶음으로 나누는 동작을 제공해 고밀도 코드 검토 흐름으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "고밀도", "그리드", "모노톤", "절제"], "시각아티팩트_url": "https://webassets.linear.app/images/ornj730p/production/0bae3de361f646dc692b226b236f9f7e1ae19224-3600x2200.png?auto=format&dpr=2&q=95", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "큰 PR 진입→Guided Review 섹션 선택→변경 이유 확인→관련 코드 검토→피드백 또는 승인", "states": "섹션 목록·현재 설명·코드 문맥·리뷰 진행 상태" } }, "출처": { "소스": "https://linear.app/changelog/2026-07-30-coding-sessions-on-mobile", "수집일": "2026-08-08", "수집사유": "2026-07-30 공식 릴리스에서 Guided Review 실제 화면과 GA 기능 설명 확인" } }
  },
  {
    title: "SADDEXLEEY — 소말리아 문화 모티프를 절제된 전시 아이덴티티로", category: "브랜드", date: "2026-08-06", url: "https://www.behance.net/gallery/252717171/Somalia-National-Pavilion-La-Biennale-di-Venezia-2026",
    summary: "소말리아 국색과 문화 패턴을 타이포그래피에 흡수하고 전시 그래픽·인쇄물·디지털 커뮤니케이션으로 확장한 국가관 아이덴티티.", note: "작품을 압도하지 않는 제한된 색·타입 시스템으로 문화적 고유성과 국제 전시의 정보 위계를 함께 유지한 점이 참고할 만함.", tags: ["#브랜드", "#전시아이덴티티", "#타이포그래피", "#문화브랜딩", "#그리드"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/da596e252717171.6a566fb6f21ca.png", visual: { background: "#d85c3e", accent: "#3975a8", ink: "#171717", radiusOne: "0", radiusTwo: "24px", rotate: "2deg", label: "TYPE / CULTURE / PAVILION" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 프로젝트가 소말리아 문화 모티프에서 도출한 타이포·국색·패턴을 전시 환경, 인쇄, 디지털 적용 이미지와 함께 보여줘 문화 브랜드의 시각 시스템으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "듀오톤", "그리드", "타이포처리", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/da596e252717171.6a566fb6f21ca.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "국색 기반 제한 팔레트·문화 패턴을 흡수한 타이포그래피·유연한 전시 그래픽", "applications": "환경 그래픽·포스터·인쇄물·디지털 커뮤니케이션" } }, "출처": { "소스": "Behance / DE_FORM — Somalia National Pavilion SADDEXLEEY", "수집일": "2026-08-06", "수집사유": "2026-07-14 공개 프로젝트에서 다수의 실제 적용 이미지와 공식 전시·제작 맥락 확인" } }
  },
  {
    title: "VHS Window Silhouettes — 역광 실루엣 위에 아날로그 오류를 층화", category: "AI 이미지 프롬프트", date: "2026-08-06", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#vhs-window-silhouettes",
    summary: "밝은 창 앞 두 인물을 실루엣으로 단순화하고 트래킹 라인·필름 마모·색 번짐·그레인을 겹친 공식 Gen-4 결과.", note: "명암 구조를 먼저 고정한 뒤 오류 질감을 항목별로 더해 레트로 테크 캠페인의 가독성과 손상 강도를 비교하기 좋음.", prompt: "VHS footage of the silhouettes of two characters in a dark room with a bright window. the window light creates a stark contrast behind the two subjects. Aesthetic includes extremely noticeable VHS film artifacts, tracking lines, worn film texture, analog color bleeding, grainy quality", tags: ["#AI이미지프롬프트", "#VHS", "#실루엣", "#필름그레인", "#생성형AI"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37153279788179", visual: { background: "#171923", accent: "#7585ad", ink: "#f3eee4", radiusOne: "0", radiusTwo: "24px", rotate: "2deg", label: "VHS / TRACK / BLEED" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4 Image 모델과 결과 PNG를 제공해 역광 실루엣, 트래킹 라인, 마모, 색 번짐, 그레인을 독립 통제어로 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "필름그레인", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37153279788179", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "VHS footage of the silhouettes of two characters in a dark room with a bright window. the window light creates a stark contrast behind the two subjects. Aesthetic includes extremely noticeable VHS film artifacts, tracking lines, worn film texture, analog color bleeding, grainy quality", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 VHS 스타일 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37153279788179", "fragment_map": [{ "조각": "silhouettes ... with a bright window", "효과": "밝은 창과 어두운 두 인물의 명암 구조 고정" }, { "조각": "VHS film artifacts", "효과": "오류 강도를 전경에서 명확히 확대" }, { "조각": "tracking lines, worn film texture", "효과": "수평 주사선과 테이프 마모층 추가" }, { "조각": "analog color bleeding, grainy quality", "효과": "색 번짐과 거친 노이즈 결합" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-06", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·공개 결과 PNG 확인" } }
  },
  {
    title: "Piñata Bird Wire — 얇은 종이 깃털과 단일 선 구도의 조합", category: "AI 이미지 프롬프트", date: "2026-08-06", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#pinata-bird-wire",
    summary: "전화선 위 새를 여러 색의 얇은 티슈 페이퍼로 치환해 실루엣과 재질이 즉시 읽히는 공식 Gen-4 결과.", note: "주체·지지선·재질·색 범위를 짧게 분리한 구조라 캐릭터형 패키지나 시즌 캠페인의 소재 변형을 비교하기 좋음.", prompt: "piñata bird on a telephone wire. thin tissue paper in assorted colors.", tags: ["#AI이미지프롬프트", "#피냐타", "#종이질감", "#캐릭터", "#생성형AI"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37153288715027", visual: { background: "#d8ebed", accent: "#ef5f67", ink: "#292a2d", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "PAPER / COLOR / PERCH" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4 Image 모델과 결과 PNG를 제공해 전화선 구도, 새 실루엣, 티슈 페이퍼 두께와 다색 재질을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["일러스트", "하이채도", "비대칭", "매트", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37153288715027", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "piñata bird on a telephone wire. thin tissue paper in assorted colors.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Piñata 텍스처 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37153288715027", "fragment_map": [{ "조각": "piñata bird", "효과": "새를 축제 장식물 실루엣으로 치환" }, { "조각": "on a telephone wire", "효과": "가느다란 수평선 위에 배치" }, { "조각": "thin tissue paper", "효과": "얇고 겹치는 종이 프린지 질감" }, { "조각": "assorted colors", "효과": "여러 색 띠를 작은 면으로 분산" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-06", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·공개 결과 PNG 확인" } }
  },
  {
    title: "Crowd Freeze Handheld — 정지 인물과 군중 흐름을 한 숏에서 분리", category: "AI 영상 프롬프트", date: "2026-08-06", url: "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide#crowd-freeze-handheld",
    summary: "중앙 인물은 멈춘 채 주변 군중만 흐르게 하고 외침과 느린 줌아웃·핸드헬드 흔들림을 순서화한 공식 Gen-4.5 결과.", note: "주체 정지와 환경 움직임을 분리하고 감정 행동 뒤 카메라 반응을 붙여 다큐형 브랜드 필름의 시선 집중을 테스트하기 좋음.", prompt: "Handheld camera: The man stands still as the crowd moves around him. He starts yelling as the camera slowly zooms out. Natural camera shake.", tags: ["#AI영상프롬프트", "#Gen45", "#핸드헬드", "#군중", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/48389644369683", visual: { background: "#5a5650", accent: "#c68b62", ink: "#f4f0e8", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "STILL / CROWD / PULL BACK" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4.5 Image to Video 모델, 입력 이미지와 결과 GIF를 제공해 정지 주체, 이동 군중, 외침, 줌아웃과 흔들림을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용"], "시각렌즈": ["에디토리얼", "중앙집중", "필름그레인", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/48389644369683", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Handheld camera: The man stands still as the crowd moves around him. He starts yelling as the camera slowly zooms out. Natural camera shake.", "tool_model": "Runway Gen-4.5 Image to Video", "params": "Image to Video·공식 입력 이미지·2–10초 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/48389644369683", "fragment_map": [{ "조각": "The man stands still", "효과": "중앙 주체를 움직임 기준점으로 고정" }, { "조각": "crowd moves around him", "효과": "환경 인물에만 흐르는 움직임 부여" }, { "조각": "He starts yelling", "효과": "정지 뒤 단일 감정 행동 삽입" }, { "조각": "slowly zooms out. Natural camera shake", "효과": "공간 확장과 다큐식 흔들림 유지" }] } }, "출처": { "소스": "Runway / Image to Video Prompting Guide", "수집일": "2026-08-06", "수집사유": "최근 갱신 공식 가이드에서 프롬프트·모델·입력 이미지·공개 결과 GIF 확인" } }
  },
  {
    title: "Worm’s-eye Pit Reveal — 토벽 수렴선 끝에 하늘과 인물을 순차 공개", category: "AI 영상 프롬프트", date: "2026-08-06", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#worms-eye-pit",
    summary: "구덩이 바닥에서 정사각 하늘을 올려 보고 구름의 미세 움직임 뒤 역광 인물들이 들여다보게 한 공식 Gen-4.5 결과.", note: "고정 시점·수렴 구도·환경 미세 움직임·주체 진입을 단계로 나눠 서스펜스 숏의 정보 공개 타이밍을 설계하기 좋음.", prompt: "A rectangular, hand-dug earthen pit extends downwards, its dark brown soil walls leading to a square opening of bright sky above. The worm's eye view camera is at the bottom of the pit, looking directly upwards, capturing the subtle ambient movement cloud wisps against the bright blue sky. Suddenly, the silhouettes of backlit men peer down into the hole. The composition emphasizes the deep, confining nature of the pit, with its walls converging towards the distant, starkly contrasting sky.", tags: ["#AI영상프롬프트", "#Gen45", "#웜즈아이", "#수렴구도", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504725651", visual: { background: "#5b4638", accent: "#72b9db", ink: "#f3eadf", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "PIT / SKY / REVEAL" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 Text to Video 모델과 결과 GIF를 제공해 바닥 시점, 토벽 수렴선, 구름 미세 운동과 역광 인물 진입을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "듀오톤", "중앙집중", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504725651", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A rectangular, hand-dug earthen pit extends downwards, its dark brown soil walls leading to a square opening of bright sky above. The worm's eye view camera is at the bottom of the pit, looking directly upwards, capturing the subtle ambient movement cloud wisps against the bright blue sky. Suddenly, the silhouettes of backlit men peer down into the hole. The composition emphasizes the deep, confining nature of the pit, with its walls converging towards the distant, starkly contrasting sky.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504725651", "fragment_map": [{ "조각": "worm's eye view camera is at the bottom", "효과": "시점을 구덩이 바닥에 고정" }, { "조각": "walls leading to a square opening", "효과": "수렴선이 정사각 하늘로 향함" }, { "조각": "subtle ambient movement cloud wisps", "효과": "환경에만 미세 운동 부여" }, { "조각": "Suddenly ... backlit men peer down", "효과": "마지막에 역광 실루엣 진입" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-06", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·공개 결과 GIF 확인" } }
  },
  {
    title: "Figma Make Properties & Annotations — 직접 조작과 위치 기반 프롬프트의 결합", category: "AI 디자인", date: "2026-08-06", url: "https://www.figma.com/blog/properties-panel-and-annotations-now-in-figma-make/#properties-and-annotations",
    summary: "간격·타입·레이아웃은 속성 패널에서 직접 조정하고, 복합 의도는 캔버스 주석으로 에이전트에 전달하는 최신 편집 흐름.", note: "정량 속성과 자연어 의도를 같은 변경 스택에서 검토한 뒤 적용하게 해 AI 편집의 예측 가능성을 높이는 패턴으로 참고하기 좋음.", tags: ["#AI디자인", "#FigmaMake", "#속성패널", "#주석", "#테크IT"], thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/d1366af0a7f2c9945aa6a7a693f319518f22fc63-3840x2160.png?auto=format&fit=max&h=452&q=75&rect=0%2C1%2C3840%2C2159&w=804", visual: { background: "#e8f1ff", accent: "#0d99ff", ink: "#1e1e1e", radiusOne: "12px", radiusTwo: "24px", rotate: "-2deg", label: "EDIT / ANNOTATE / APPLY" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Figma 공식 글이 속성 패널, 캔버스 주석, 변경 스택이 함께 보이는 실제 제품 화면과 적용 절차를 제공해 AI 보조 편집 흐름으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://cdn.sanity.io/images/599r6htc/regionalized/d1366af0a7f2c9945aa6a7a693f319518f22fc63-3840x2160.png?auto=format&fit=max&h=452&q=75&rect=0%2C1%2C3840%2C2159&w=804", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "요소 선택→정량 속성 직접 편집 또는 위치 주석 작성→변경 스택 검토→적용", "ai_role": "캔버스 위치와 편집 의도를 연결해 코드 기반 화면 수정" } }, "출처": { "소스": "Figma / A properties panel and annotations, now in Figma Make", "수집일": "2026-08-06", "수집사유": "2026-07-30 공식 글에서 실제 제품 화면과 편집·검토·적용 흐름 확인" } }
  },
  {
    title: "Carbon Select State Matrix — 10개 상태를 한 컴포넌트 계약으로", category: "웹 스타일가이드", date: "2026-08-06", url: "https://carbondesignsystem.com/components/select/usage/#universal-behaviors",
    summary: "기본·인라인 셀렉트의 enabled부터 read-only까지 10개 상태와 입력 높이·폭·상호작용을 실제 화면으로 연결한 공식 사양.", note: "폼 컴포넌트의 시각 상태와 접근 가능한 행동을 같은 상태표로 관리해 디자인·개발·QA 간 누락을 줄이기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#셀렉트", "#상태설계", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/9c6cee511c8bd96adba83f9daf44a418/3cbba/select-usage-1.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "2deg", label: "STATE / INPUT / CONTRACT" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 문서가 실제 셀렉트 화면과 10개 상태, 변형, 크기, 마우스·키보드 행동을 함께 명세해 폼 컴포넌트 계약으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "접근성", "인터랙션"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/9c6cee511c8bd96adba83f9daf44a418/3cbba/select-usage-1.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "default·inline·fluid 변형과 10개 상태", "states": "상태별 시각 변화와 마우스·키보드 입력 계약" } }, "출처": { "소스": "Carbon Design System / Select usage", "수집일": "2026-08-06", "수집사유": "최근 갱신 공식 문서에서 실제 셀렉트 PNG와 상태·변형·행동 명세 확인" } }
  },
  {
    title: "Carbon Select List Copy — 짧은 라벨과 빈도 기반 정렬 규칙", category: "콘텐츠 디자인 가이드", date: "2026-08-06", url: "https://carbondesignsystem.com/components/select/usage/#content",
    summary: "라벨은 1~3단어로 제한하고 도움말은 판단 정보만 남기며 목록은 알파벳·증가값·사용 빈도로 정렬하는 공식 규칙.", note: "라벨·도움말·옵션 순서가 서로 다른 문제를 맡도록 분리해 선택 속도와 오류 예방을 함께 검수하기 좋음.", tags: ["#콘텐츠디자인가이드", "#폼카피", "#셀렉트", "#옵션정렬", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/ba152f441d3fffcd2fd0ddb4ddc52622/3cbba/select-list-order.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-1deg", label: "LABEL / HELP / ORDER" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 문서가 실제 옵션 목록 화면과 1~3단어 라벨, 도움말 교체 조건, 알파벳·증가값·빈도 정렬 규칙을 제공해 폼 카피 검수에 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/ba152f441d3fffcd2fd0ddb4ddc52622/3cbba/select-list-order.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "라벨 1~3단어화→도움말 판단 정보 유지→경고·오류 시 교체→옵션 정렬", "visible_examples": "목록 순서와 레이블·도움말 관계가 보이는 실제 셀렉트 화면" } }, "출처": { "소스": "Carbon Design System / Select usage", "수집일": "2026-08-06", "수집사유": "최근 갱신 공식 문서에서 실제 목록 PNG와 라벨·도움말·정렬 규칙 확인" } }
  },
  {
    title: "Carbon Tile AI Presence — 선택 카드에 설명 가능한 AI 상태를 이식", category: "AI 디자인", date: "2026-08-05", url: "https://carbondesignsystem.com/components/tile/usage/#ai-presence",
    summary: "기본·클릭·선택 타일의 기능은 유지하면서 AI 라벨, 오라, 설명 팝오버를 공통 상태로 더한 Carbon 공식 컴포넌트 패턴.", note: "기존 카드의 클릭 계약을 바꾸지 않고 생성 근거와 설명 진입점만 일관되게 더해 추천·자동화 대시보드에 적용하기 좋음.", tags: ["#AI디자인", "#Carbon", "#타일", "#설명가능성", "#디자인시스템", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/dd6721e604f28a5d87251025e0b88611/3cbba/tile-usage-AI-presence.png", visual: { background: "#f4f4f4", accent: "#8a3ffc", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "TILE / AI / EXPLAIN" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 문서가 기본·클릭·선택 타일의 AI 라벨 적용 화면과 설명 팝오버 역할, 비AI 상태와 동일한 기능 계약을 함께 제공해 추천·자동화 카드의 설명 가능한 AI 상태로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "그라디언트", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/dd6721e604f28a5d87251025e0b88611/3cbba/tile-usage-AI-presence.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "기존 타일 변형 유지→AI 라벨 부착→라벨을 설명 팝오버 트리거로 사용", "states": "base·clickable·selectable 타일의 기본 기능과 AI 시각 상태 병행" } }, "출처": { "소스": "Carbon Design System / Tile usage", "수집일": "2026-08-05", "수집사유": "2026-07-29 갱신 공식 문서에서 실제 AI 타일 PNG와 기능·설명 규칙 확인" } }
  },
  {
    title: "Carbon Base Tile Structure — 64×128 최소 크기와 16px 패딩을 고정", category: "웹 스타일가이드", date: "2026-08-05", url: "https://carbondesignsystem.com/components/tile/style/#base-tile-structure",
    summary: "타일 컨테이너의 최소 높이·폭과 콘텐츠 사방 패딩을 px·rem·spacing token으로 동시에 명세한 공식 구조 사양.", note: "카드의 내용 길이가 달라도 최소 치수와 내부 여백을 토큰 하나로 맞춰 대시보드 밀도와 반응형 일관성을 유지하기 좋음.", tags: ["#웹스타일가이드", "#Carbon", "#타일", "#간격토큰", "#대시보드", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/dba4bb7bbf07bfd511874e8f2ac00196/3cbba/tile-style-structure-base.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "2deg", label: "64H / 128W / 16PAD" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 스타일 문서가 실제 측정 화면과 최소 높이 64px, 최소 폭 128px, 사방 16px 및 spacing-05 토큰을 함께 제공해 카드 기반 제품의 기본 타일 규칙으로 바로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "접근성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/dba4bb7bbf07bfd511874e8f2ac00196/3cbba/tile-style-structure-base.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "min-height 64px·min-width 128px·content padding 16px·$spacing-05", "application": "기본 타일을 카드·대시보드 모듈의 치수 기반으로 사용" } }, "출처": { "소스": "Carbon Design System / Tile style", "수집일": "2026-08-05", "수집사유": "2026-07-29 갱신 공식 문서에서 실제 구조 측정 PNG와 px·rem·토큰 사양 확인" } }
  },
  {
    title: "Carbon Tile Keyboard Copy — Tab·Enter·Space의 역할을 변형별로 분리", category: "콘텐츠 디자인 가이드", date: "2026-08-05", url: "https://carbondesignsystem.com/components/tile/accessibility/#keyboard-interaction",
    summary: "비상호작용·클릭·단일 선택·다중 선택 타일마다 포커스 이동과 실행 키를 실제 탭 순서 화면과 함께 설명한 공식 지침.", note: "도움말·접근성 명세에서 ‘키보드 사용 가능’이라는 일반론 대신 변형별 키와 포커스 결과를 정확한 동작 문장으로 작성하기 좋음.", tags: ["#콘텐츠디자인가이드", "#키보드", "#접근성", "#포커스", "#마이크로카피", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/ff0aa6363d2500b8d1d7f31aca96069d/3cbba/tile-accessibility-1.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-1deg", label: "TAB / ENTER / SPACE" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 접근성 문서가 타일 변형별 Tab·Enter·Space·화살표 키의 실제 탭 순서 화면과 결과 문장을 제공해 도움말 카피, 디자인 주석, QA 체크리스트로 즉시 전환할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/ff0aa6363d2500b8d1d7f31aca96069d/3cbba/tile-accessibility-1.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "타일 변형 식별→탭 정지점 명세→실행 키와 포커스 결과 작성→키보드 QA", "visible_examples": "비상호작용 타일 내부 링크와 직접 상호작용 타일의 탭 순서 비교 화면" } }, "출처": { "소스": "Carbon Design System / Tile accessibility", "수집일": "2026-08-05", "수집사유": "2026-07-29 갱신 공식 문서에서 실제 탭 순서 PNG와 변형별 키보드 동작 문장 확인" } }
  },
  {
    title: "Horror Candle Portrait — 촛불 하나로 얼굴과 배후 실루엣을 분리", category: "AI 이미지 프롬프트", date: "2026-08-05", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#horror-candle-portrait",
    summary: "야간 인물, 작은 촛불, 거의 보이지 않는 배후 형상, 고대비·저채도·어두운 팔레트를 한 장면에 통제한 공식 Gen-4 결과.", note: "키라이트를 촛불 하나로 제한하고 배경 위협의 가시성을 낮춰 게임 키아트·스릴러 캠페인의 긴장도 테스트에 쓰기 좋음.", prompt: "cinematic photography at night of a woman with a fearful expression. she holds a small candle that gently illuminates her face. a terrifying figure can be seen behind her, barely visible and blending in with the dark black background. High contrast, desaturated, unstable movement, dark color palette, horror aesthetic", tags: ["#AI이미지프롬프트", "#Gen4", "#호러", "#로우키", "#시네마틱", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37067207453971", visual: { background: "#191716", accent: "#d89b55", ink: "#f0e5d3", radiusOne: "50%", radiusTwo: "24px", rotate: "2deg", label: "CANDLE / SHADOW / DREAD" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4 Image 모델 조건과 결과 PNG를 제공해 촛불 키라이트, 전경 표정, 배후 실루엣의 낮은 가시성, 고대비 저채도 팔레트를 조합해 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "하드라이트", "필름그레인", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37067207453971", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cinematic photography at night of a woman with a fearful expression. she holds a small candle that gently illuminates her face. a terrifying figure can be seen behind her, barely visible and blending in with the dark black background. High contrast, desaturated, unstable movement, dark color palette, horror aesthetic", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37067207453971", "fragment_map": [{ "조각": "small candle that gently illuminates her face", "효과": "단일 저조도 키라이트로 표정 강조" }, { "조각": "figure ... barely visible", "효과": "배후 위협을 낮은 가시성으로 유지" }, { "조각": "High contrast, desaturated", "효과": "명암 대비를 높이고 색 정보를 억제" }, { "조각": "dark color palette, horror aesthetic", "효과": "검은 배경 중심의 장르 톤 고정" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-05", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·HTTP 200 결과 PNG 확인" } }
  },
  {
    title: "Symmetrical Bus Stop Blur — 정지 인물과 통과 차량의 시간축을 대칭 배치", category: "AI 이미지 프롬프트", date: "2026-08-05", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#symmetrical-bus-stop-blur",
    summary: "버스 정류장의 정지 인물을 중앙 대칭으로 두고 지나가는 차량만 다채로운 모션 블러로 흘린 공식 Gen-4 결과.", note: "고정 주체와 이동 환경을 한 프레임에서 분리해 모빌리티·도시 서비스 캠페인의 속도 대비와 시선 고정을 실험하기 좋음.", prompt: "cinematic still of a woman waiting at a bus stop. dynamic motion blur conveys colorful vehicles passing in a blur. whimsical muted color palette. gentle symmetry. symmetrical composition.", tags: ["#AI이미지프롬프트", "#Gen4", "#대칭구도", "#모션블러", "#모빌리티", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062148627", visual: { background: "#777b78", accent: "#d67b68", ink: "#f4f1e9", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "STILL / FLOW / SYMMETRY" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트, Gen-4 Image 모델 조건과 결과 PNG를 제공해 정지 인물, 차량 모션 블러, 저채도 다색 팔레트와 중앙 대칭 구도를 독립 통제어로 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "사용자흐름"], "시각렌즈": ["에디토리얼", "파스텔", "중앙집중", "소프트확산광", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062148627", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cinematic still of a woman waiting at a bus stop. dynamic motion blur conveys colorful vehicles passing in a blur. whimsical muted color palette. gentle symmetry. symmetrical composition.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062148627", "fragment_map": [{ "조각": "woman waiting at a bus stop", "효과": "정지 기준 주체와 도시 맥락 설정" }, { "조각": "dynamic motion blur ... vehicles passing", "효과": "차량에만 횡방향 시간 흐름 부여" }, { "조각": "whimsical muted color palette", "효과": "다채롭지만 저채도인 도시 색감" }, { "조각": "gentle symmetry", "효과": "인물과 정류장을 중앙 대칭으로 고정" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-05", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·HTTP 200 결과 PNG 확인" } }
  },
  {
    title: "School Gym Establishing Shot — 빈 체육관에 단일 진입으로 서사를 시작", category: "AI 영상 프롬프트", date: "2026-08-05", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#establishing-school-gym",
    summary: "1990년대 학교 체육관의 대칭 원경, 정지 배너와 철골, 왼쪽에서 들어오는 학생 한 명으로 공간과 사건을 동시에 여는 공식 Gen-4.5 결과.", note: "장소 정보는 고정 요소로, 이야기 시작은 한 번의 화면 진입으로 분리해 제품 필름·게임 컷신의 짧은 도입부를 설계하기 좋음.", prompt: "A symmetrical establishing shot frames a 1990s school gymnasium bleachers. Faded championship banners hanging motionless from exposed steel rafters. A lone student enters from the left to sit on the bleachers.", tags: ["#AI영상프롬프트", "#Gen45", "#설정숏", "#대칭", "#진입동선", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515598611", visual: { background: "#8c8172", accent: "#b94d3f", ink: "#f4efe6", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "ESTABLISH / ENTER / SIT" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 Text to Video 모델, 지원 설정과 결과 GIF를 제공해 대칭 설정숏, 정지 환경, 좌측 진입과 착석 동작을 순서대로 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "필름그레인", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515598611", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A symmetrical establishing shot frames a 1990s school gymnasium bleachers. Faded championship banners hanging motionless from exposed steel rafters. A lone student enters from the left to sit on the bleachers.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515598611", "fragment_map": [{ "조각": "symmetrical establishing shot", "효과": "장소 전체를 대칭 원경으로 소개" }, { "조각": "banners hanging motionless", "효과": "환경의 정적 기준 유지" }, { "조각": "enters from the left", "효과": "주체의 시작 위치와 진입 방향 지정" }, { "조각": "to sit on the bleachers", "효과": "진입 뒤 명확한 종료 행동 부여" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-05", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·HTTP 200 결과 GIF 확인" } }
  },
  {
    title: "Lakeside Horizontal Pan — 숲에서 보트까지 한 축으로 시선을 인계", category: "AI 영상 프롬프트", date: "2026-08-05", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#horizontal-pan-rowboat",
    summary: "고정 회전축에서 소나무와 호수를 좌우로 훑고 선착장의 보트 한 척에서 멈추는 공식 Gen-4.5 패닝 결과.", note: "시작 환경, 이동 방향, 종료 피사체를 한 문장으로 분리해 공간 소개형 웹 히어로·여행 필름의 시선 유도 테스트에 쓰기 좋음.", prompt: "A horizontal pan, from a fixed point, sweeps left to right across pine trees and over a lake to end on a single rowboat docked nearby.", tags: ["#AI영상프롬프트", "#Gen45", "#패닝", "#시선유도", "#로케이션", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504738835", visual: { background: "#56736b", accent: "#d9c28d", ink: "#f4f0e7", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "LEFT → RIGHT → BOAT" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 Text to Video 모델, 지원 설정과 결과 GIF를 제공해 고정 회전축, 좌→우 패닝 경로와 보트 종료 프레임을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용"], "시각렌즈": ["에디토리얼", "어스톤", "비대칭", "소프트확산광", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504738835", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A horizontal pan, from a fixed point, sweeps left to right across pine trees and over a lake to end on a single rowboat docked nearby.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504738835", "fragment_map": [{ "조각": "horizontal pan, from a fixed point", "효과": "카메라 위치를 고정하고 회전만 허용" }, { "조각": "left to right", "효과": "패닝 방향을 단일 축으로 고정" }, { "조각": "across pine trees and over a lake", "효과": "전경에서 수면으로 공간 레이어 전환" }, { "조각": "end on a single rowboat", "효과": "종료 프레임의 단일 피사체 지정" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-05", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·HTTP 200 결과 GIF 확인" } }
  },
  {
    title: "FetchSandbox — 개발자 AI SaaS의 복잡한 기능을 한 흐름으로 번역", category: "웹·앱 UI", date: "2026-08-05", url: "https://www.behance.net/gallery/252782065/FetchSandbox-AI-SaaS-Landing-Page",
    summary: "애플리케이션 구축·테스트·배포 기능을 명확한 히어로, 기능 블록, 전환 CTA로 정리한 개발자용 AI SaaS 랜딩 경험.", note: "기술 구매자와 비기술 의사결정자가 같은 페이지에서 제품 가치와 다음 행동을 이해하도록 정보 밀도와 시각 위계를 조절한 방식이 유용함.", tags: ["#웹앱UI", "#SaaS", "#개발자도구", "#랜딩페이지", "#AI제품", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/667111252782065.6a57c700e63a5.jpg", visual: { background: "#111827", accent: "#56d8c5", ink: "#f8fafc", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "BUILD / TEST / DEPLOY" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 4, "신규성": 3, "근거성": 5, "가치축": 4 }, "total": 16, "verdict": "accept", "근거": "공개 프로젝트가 개발·테스트·배포의 가치 제안, 기능 섹션과 CTA가 이어지는 실제 랜딩 화면을 제공해 복잡한 개발자 AI 제품을 단계형 SaaS 정보 구조로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그라디언트", "그리드", "여백중심", "차가움"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/667111252782065.6a57c700e63a5.jpg", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "히어로·기능 소개·제품 가치·CTA 중심 SaaS 랜딩", "flow": "문제 인지→AI 개발 기능 이해→신뢰 형성→시작 CTA" } }, "출처": { "소스": "Behance / Deepak Singh", "수집일": "2026-08-05", "수집사유": "2026-07-15 공개 프로젝트에서 실제 UI 화면과 HTTP 200 공식 1400px 대표 JPEG 확인" } }
  },
  {
    title: "Graphic Design Portfolio 2026 — 타이포와 모션을 고채도 쇼릴로 압축", category: "비주얼 그래픽", date: "2026-08-05", url: "https://www.behance.net/gallery/252076827/GRAPHIC-DESIGN-PORTFOLIO-2026",
    summary: "브랜드·타이포·모션 작업을 고채도 색면, 초대형 글자, 빠른 화면 전환으로 묶어 한 편의 시각 쇼릴처럼 구성한 포트폴리오.", note: "서로 다른 프로젝트를 색 대비와 타이포 스케일이라는 공통 문법으로 연결해 연말 결산·스튜디오 쇼릴의 편집 리듬을 설계하기 좋음.", tags: ["#비주얼그래픽", "#포트폴리오", "#타이포그래피", "#모션그래픽", "#하이채도"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/abda80252076827.6a520c2e6807d.gif", visual: { background: "#ee5b45", accent: "#ffe65c", ink: "#101010", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "TYPE / COLOR / MOTION" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 3, "근거성": 4, "가치축": 4 }, "total": 16, "verdict": "accept", "근거": "공개 프로젝트가 고채도 색면, 초대형 타이포, 모션 전환이 실제로 이어지는 대표 GIF와 다수 완성 작업을 제공해 이질적인 결과물을 하나의 쇼릴 리듬으로 묶는 편집 문법을 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "하이채도", "비대칭", "고밀도", "하드라이트", "유희적", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/abda80252076827.6a520c2e6807d.gif", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "composition": "초대형 타이포와 작업 이미지를 고밀도 색면 위에서 빠르게 교차", "motion_logic": "프로젝트 전환마다 색·스케일·방향을 바꾸되 강한 타이포를 공통 앵커로 유지" } }, "출처": { "소스": "Behance / RAAGAV SUNDAR", "수집일": "2026-08-05", "수집사유": "2026-07-21 공개 프로젝트에서 다수 완성 작업과 HTTP 200 공식 대표 GIF 확인" } }
  },
  {
    title: "Thunder Liquid — 신화와 언더그라운드 전자음악을 음료 체계로 결합", category: "브랜드", date: "2026-08-05", url: "https://www.behance.net/gallery/252662141/Thunder-Liquid-Beverage-Brand-Identity",
    summary: "그리스 신화 일러스트, 과감한 타이포, 제품별 색 체계를 탄산수·생수·에너지드링크 패키지와 라이브 접점에 확장한 브랜드 시스템.", note: "서로 다른 음료 SKU를 한 세계관으로 묶으면서도 색과 그래픽 밀도로 즉시 구분해 패키지 라인업 설계에 참고하기 좋음.", tags: ["#브랜드", "#패키지", "#음료", "#일러스트", "#하이채도", "#음악문화"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f6f518252662141.6a55477ad1d16.png", visual: { background: "#21102d", accent: "#f2d12d", ink: "#ffffff", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "MYTH / BASS / LIQUID" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 프로젝트가 신화 기반 일러스트, 과감한 타이포, 제품별 색 체계와 캔·병·굿즈·디지털·라이브 응용을 실제 이미지로 보여 줘 문화 기반 음료 브랜드 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "비대칭", "고밀도", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f6f518252662141.6a55477ad1d16.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "그리스 신화 도상·언더그라운드 전자음악·과감한 타이포·SKU 색 구분", "applications": "탄산수·생수·에너지드링크 패키지·굿즈·디지털 커뮤니케이션·라이브 이벤트" } }, "출처": { "소스": "Behance / Sevennesi Studio", "수집일": "2026-08-05", "수집사유": "2026-07-13 공개 프로젝트에서 패키지·굿즈·디지털 실제 응용과 HTTP 200 공식 1400px 대표 PNG 확인" } }
  },
  {
    title: "ELAS — 접힘과 틈으로 여성 디자인사를 드러내는 편집 시스템", category: "비주얼 그래픽", date: "2026-08-04", url: "https://www.behance.net/gallery/252279123/ELAS",
    summary: "브라질 여성 모더니스트 디자이너 세 명의 기록을 다이컷·접지·레이어, 적색·라일락 대비와 가변 타이포 리듬으로 펼치는 실물 출판물.", note: "역사적 비가시성을 ‘접힘과 틈’이라는 물성으로 번역해 내용, 제본, 그리드, 타이포가 같은 서사를 말하게 만드는 편집 설계가 참고할 만함.", tags: ["#비주얼그래픽", "#편집디자인", "#다이컷", "#타이포그래피", "#문화아카이브"], thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/11673d252279123.Y3JvcCw0NDE4LDM0NTYsMzgyLDA.png", visual: { background: "#c4a5c9", accent: "#c6353f", ink: "#201b22", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "FOLD / GAP / REVEAL" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공개 프로젝트가 다이컷·접지·레이어가 실제로 작동하는 책의 전개, 정밀 그리드, 타이포 스케일과 적색·라일락 팔레트를 함께 보여 줘 역사·리서치 콘텐츠를 물성 중심 편집 시스템으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "듀오톤", "비대칭", "고밀도", "매트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/11673d252279123.Y3JvcCw0NDE4LDM0NTYsMzgyLDA.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "composition": "접지와 다이컷으로 이미지·정보를 단계적으로 공개하고 가변 타이포 스케일로 페이지 리듬 형성", "material_logic": "접힘=변화·저항, 틈=가려진 역사의 재발견이라는 개념을 제본 구조에 연결" } }, "출처": { "소스": "Behance / Elis Torchetti", "수집일": "2026-08-04", "수집사유": "2026-07-06 공개 프로젝트에서 실제 출판물 전개·제본·완성 이미지와 HTTP 200 공식 커버 WebP 확인" } }
  },
  {
    title: "the archive — 세대의 옷을 기록물처럼 다루는 슬로 패션 아이덴티티", category: "브랜드", date: "2026-08-04", url: "https://www.behance.net/gallery/250766671/the-archive-Fashion-Brand-Identity",
    summary: "오래 입는 기본 의복을 사람과 기억의 기록으로 정의하고 절제된 워드마크, 에디토리얼 사진, 포장과 룩북에 일관되게 확장한 브랜드 시스템.", note: "제품의 새로움보다 보존과 시간성을 브랜드 핵심 서사로 삼아 패션·라이프스타일 캠페인의 사진 방향과 타이포 위계를 함께 설계하기 좋음.", tags: ["#브랜드", "#슬로패션", "#아트디렉션", "#에디토리얼", "#지속가능성"], thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/45b284250766671.Y3JvcCwzMTY2LDI0NzcsMCww.png", visual: { background: "#d8d0c3", accent: "#6e6255", ink: "#1d1b18", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "GARMENT / MEMORY / TIME" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 케이스가 슬로 패션의 보존 서사, 워드마크와 타이포, 아트 디렉션·사진, 포장과 디지털 응용을 실제 이미지로 보여 줘 시간성과 기록을 중심으로 한 라이프스타일 브랜드 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "여백중심", "필름그레인", "매트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/45b284250766671.Y3JvcCwzMTY2LDI0NzcsMCww.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "기록·보존 서사를 절제된 워드마크, 뉴트럴 팔레트, 인물 중심 에디토리얼 사진으로 통합", "applications": "룩북·라벨·포장·디지털 콘텐츠·브랜드 사진" } }, "출처": { "소스": "Behance / Paula Vázquez", "수집일": "2026-08-04", "수집사유": "2026-06-08 공개 프로젝트에서 아이덴티티·아트 디렉션·사진·패키지 실제 이미지와 HTTP 200 공식 커버 WebP 확인" } }
  },
  {
    title: "Crimson Circle High Angle — 붉은 군집과 청회색 계곡을 위에서 분리", category: "AI 영상 프롬프트", date: "2026-08-04", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#high-angle-crimson-circle",
    summary: "붉은 로브 인물들이 안개 계곡에서 원무를 추는 장면을 하이 앵글, 월광, 장축 그림자, 적색·청회색 대비로 통제한 공식 Gen-4.5 결과.", note: "군집 동선과 배경 지형, 팔레트 대비, 확산광을 분리해 공연·게임·패션 필름의 집단 안무 프리비즈에 쓰기 좋음.", prompt: "A group of figures wearing heavy, hooded robes, predominantly deep red with a few in grey, hold hands and dance in a circle within a misty valley. The high-angle shot captures the entire formation amidst a field of blooming red wildflowers and jagged grey rocks, with dense fog obscuring the background. Soft, diffused moonlight filters through the haze, casting long, faint shadows across the dirt clearing in the center. The color palette features a stark contrast between the blood-red robes and flowers against the cool, desaturated blue-greys of the mist and stone.", tags: ["#AI영상프롬프트", "#Gen45", "#하이앵글", "#군집안무", "#듀오톤", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/46974514787731", visual: { background: "#74808d", accent: "#9e1d27", ink: "#f2ece7", radiusOne: "50%", radiusTwo: "24px", rotate: "3deg", label: "HIGH ANGLE / CIRCLE / FOG" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트, Gen-4.5 Text to Video 모델, 지원 설정과 결과 GIF를 제공해 하이 앵글 군집 안무, 안개·월광, 적색과 청회색 대비를 독립적으로 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "듀오톤", "중앙집중", "소프트확산광", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46974514787731", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A group of figures wearing heavy, hooded robes, predominantly deep red with a few in grey, hold hands and dance in a circle within a misty valley. The high-angle shot captures the entire formation amidst a field of blooming red wildflowers and jagged grey rocks, with dense fog obscuring the background. Soft, diffused moonlight filters through the haze, casting long, faint shadows across the dirt clearing in the center. The color palette features a stark contrast between the blood-red robes and flowers against the cool, desaturated blue-greys of the mist and stone.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46974514787731", "fragment_map": [{ "조각": "hold hands and dance in a circle", "효과": "군집을 원형 안무로 고정" }, { "조각": "high-angle shot captures the entire formation", "효과": "위에서 전체 대형을 프레이밍" }, { "조각": "soft, diffused moonlight filters through the haze", "효과": "안개 속 확산 월광" }, { "조각": "blood-red ... against cool, desaturated blue-greys", "효과": "주체와 환경의 적색·청회색 대비" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-04", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·결과 GIF 확인" } }
  },
  {
    title: "Opalescent Bloom Low Angle — 골격 재질과 꽃 성장의 상승축을 결합", category: "AI 영상 프롬프트", date: "2026-08-04", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#low-angle-opalescent-bloom",
    summary: "오팔빛 골격 갑옷의 피사체를 로우 앵글로 올려다보며 카메라 상승, 촉수 흔들림, 분홍 꽃의 성장과 보라색 재질 대비를 묶은 공식 결과.", note: "재질 변화와 생물학적 성장, 제스처, 카메라 이동을 같은 상승 방향으로 정렬해 미래형 인터페이스·뷰티 필름의 모션 문법으로 전이하기 좋음.", prompt: "Viewed from a low angle, an ethereal, alien-like opalescent creature with pearlescent intricate skeletal armor appears majestic as it gracefully shifts its posture, causing long, thin tendrils to sway gently. The camera rises steadily, following the upward trajectory of the dynamic natural growth of pink flower blossoms along the figure's shoulders and neck. The palette features shimmering opals, pale pinks, and deep purples nestled in the crevices of the armor.", tags: ["#AI영상프롬프트", "#Gen45", "#로우앵글", "#오팔재질", "#성장모션", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/46973045439891", visual: { background: "#4d365f", accent: "#e5a9c7", ink: "#f6f1ee", radiusOne: "24px", radiusTwo: "50%", rotate: "-3deg", label: "LOW ANGLE / OPAL / BLOOM" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "Runway 공식 라이브러리가 전체 프롬프트, Gen-4.5 모델, 지원 설정과 결과 GIF를 제공해 로우 앵글·카메라 상승, 오팔 골격 재질, 촉수 흔들림과 꽃 성장의 동시 진행을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["3D", "그라디언트", "중앙집중", "글로시", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46973045439891", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Viewed from a low angle, an ethereal, alien-like opalescent creature with pearlescent intricate skeletal armor appears majestic as it gracefully shifts its posture, causing long, thin tendrils to sway gently. The camera rises steadily, following the upward trajectory of the dynamic natural growth of pink flower blossoms along the figure's shoulders and neck. The palette features shimmering opals, pale pinks, and deep purples nestled in the crevices of the armor.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46973045439891", "fragment_map": [{ "조각": "Viewed from a low angle", "효과": "피사체를 장엄하게 올려다보는 시점" }, { "조각": "pearlescent intricate skeletal armor", "효과": "오팔·진주광 골격 표면" }, { "조각": "camera rises steadily", "효과": "꽃 성장과 같은 상승 카메라 축" }, { "조각": "dynamic natural growth of pink flower blossoms", "효과": "어깨에서 목으로 이어지는 개화 모션" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-04", "수집사유": "최근 갱신 공식 라이브러리에서 전체 프롬프트·모델·결과 GIF 확인" } }
  },
  {
    title: "Arkansas Museum of Fine Arts — 관람 목적 중심으로 재구성한 문화 플랫폼", category: "웹·앱 UI", date: "2026-08-04", url: "https://www.behance.net/gallery/252462819/Arkansas-Museum-of-Fine-Art",
    summary: "내부 부서가 아니라 전시·공연·수업·방문 계획의 관람객 목적을 중심으로 내비게이션과 카드형 콘텐츠를 재배열한 반응형 박물관 웹 경험.", note: "콘텐츠가 자주 바뀌는 문화·교육 서비스에서 ‘지금 무엇을 할 수 있는가’를 먼저 보여 주고 CMS 운영성과 접근성을 함께 확보한 구조가 유용함.", tags: ["#웹앱UI", "#박물관", "#콘텐츠탐색", "#반응형", "#접근성"], thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0774ef252462819.Y3JvcCwyNDg1LDE5NDQsMCww.jpg", visual: { background: "#ebe6dc", accent: "#c95336", ink: "#22201c", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "VISIT / DISCOVER / JOIN" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 케이스가 전시·공연·수업·방문 계획의 실제 반응형 화면과 관람객 목적 기반 정보 구조, 카드 컴포넌트, CMS·접근성 운영 원칙을 함께 보여 줘 복합 문화 플랫폼으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "그리드", "여백중심", "매트", "따뜻"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0774ef252462819.Y3JvcCwyNDg1LDE5NDQsMCww.jpg", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "홈·전시·공연·수업·캘린더·방문 계획·모바일 탐색", "flow": "현재 프로그램 발견→유형별 탐색→상세 확인→방문 계획 또는 수업 등록" } }, "출처": { "소스": "Behance / Few — Digital Product Agency", "수집일": "2026-08-04", "수집사유": "2026-07-09 공개 프로젝트에서 실제 반응형 화면과 HTTP 200 공식 커버 WebP 확인" } }
  },
  {
    title: "Carbon AI Components — 기본 컴포넌트를 AI 상태로 전환하는 공통 계약", category: "AI 디자인", date: "2026-08-04", url: "https://carbondesignsystem.com/guidelines/carbon-for-ai/#ai-components",
    summary: "기존 Carbon 컴포넌트에 AI 라벨·설명 팝오버·광원 토큰을 더하고 사용자가 수정하면 기본 상태로 되돌리는 공식 AI UI 체계.", note: "기존 입력·표·모달의 상태 계약을 확장해 투명성, 설명 가능성, 되돌리기를 제품 전체에 일관되게 설계하기 좋음.", tags: ["#AI디자인", "#CarbonForAI", "#설명가능성", "#상태전환", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/4e9185d76c959f84347c87532769dc67/3cbba/ai-components-light.png", visual: { background: "#f4f4f4", accent: "#8a3ffc", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "LABEL / EXPLAIN / REVERT" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 가이드가 AI 라벨, 설명 팝오버, 광원 토큰, 사용자 수정 뒤 기본 상태와 AI 제안 사이를 오가는 실제 컴포넌트 화면과 구현 순서를 함께 제공해 제품 전반의 AI 상태 계약으로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "그라디언트", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/4e9185d76c959f84347c87532769dc67/3cbba/ai-components-light.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "기본 컴포넌트→AI presence 적용→AI 라벨·설명 노출→사용자 수정 시 기본 상태→revert로 AI 제안 복원", "controls": "AI 광원·테두리 토큰, 라벨 위치, 설명 진입점, 수정·복원 상태" } }, "출처": { "소스": "Carbon Design System / Carbon for AI", "수집일": "2026-08-04", "수집사유": "2026-07-29 갱신 공식 가이드에서 실제 AI 컴포넌트 PNG와 상태·토큰·되돌리기 규칙 확인" } }
  },
  {
    title: "Carbon Code Snippet Structure — 단일·다중·인라인 코드의 치수를 한 체계로", category: "웹 스타일가이드", date: "2026-08-04", url: "https://carbondesignsystem.com/components/code-snippet/style/#structure",
    summary: "코드 길이에 따라 단일 행, 다중 행, 인라인 변형을 나누고 컨테이너·패딩·버튼 크기와 상태 토큰을 수치로 고정한 공식 사양.", note: "개발자 문서와 콘솔 UI의 복사 버튼·포커스 영역을 코드 길이와 무관한 공통 토큰으로 정리하기 좋음.", tags: ["#웹스타일가이드", "#코드스니펫", "#개발자도구", "#간격토큰", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/b660e91f05ee91a71d4fc5c8389ba491/3cbba/code-snippet-style-1.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "2deg", label: "40PX / 768PX / COPY" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 스타일 문서가 단일·다중·인라인 코드 스니펫의 실제 측정 화면과 높이, 최대 폭, 패딩, 아이콘·버튼 크기 및 상태 토큰을 제공해 개발자 제품의 코드 표시 컴포넌트로 바로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "접근성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/b660e91f05ee91a71d4fc5c8389ba491/3cbba/code-snippet-style-1.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "single 40px·max 768px·padding 16/48px, multi min 288px·padding 16/40px, inline 16px·horizontal 8px", "states": "enabled→hover→focus→active, 복사·펼치기 버튼 크기와 포커스 테두리 고정" } }, "출처": { "소스": "Carbon Design System / Code snippet style", "수집일": "2026-08-04", "수집사유": "2026-07-29 갱신 공식 문서에서 실제 구조 측정 PNG와 토큰 확인" } }
  },
  {
    title: "Carbon Loading Completion — 사라진 스피너 뒤의 완료 상태까지 전달", category: "콘텐츠 디자인 가이드", date: "2026-08-04", url: "https://carbondesignsystem.com/components/loading/accessibility/#convey-when-loading-has-completed",
    summary: "로딩 아이콘이 사라질 때 적절한 요소로 포커스를 옮기거나 보이지 않는 완료 메시지를 노출해 비시각 사용자에게 상태 변화를 전달하는 공식 지침.", note: "‘로딩 중’ 카피뿐 아니라 완료 시점의 포커스·상태 문구까지 명세해 비동기 화면 QA에 즉시 적용 가능함.", tags: ["#콘텐츠디자인가이드", "#로딩", "#상태메시지", "#접근성", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/94df4404300d345a85c71261a4d42db4/3cbba/loading-accessibility-2.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-1deg", label: "LOADING / COMPLETE / FOCUS" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 접근성 문서가 로딩 완료 뒤 포커스를 받을 컨트롤과 비노출 완료 메시지의 실제 주석 화면, aria-live·role=status 구현 선택지를 함께 제공해 비동기 상태 카피와 QA 절차로 즉시 실행할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/94df4404300d345a85c71261a4d42db4/3cbba/loading-accessibility-2.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "로딩 시작 title 확인→완료 뒤 포커스 이동 가능 여부 판단→대상 컨트롤 또는 비노출 완료 문구 명세→보조기술 QA", "visible_examples": "로딩 완료 뒤 포커스 대상과 프로그래밍 방식 완료 메시지를 표시한 공식 주석 화면" } }, "출처": { "소스": "Carbon Design System / Loading accessibility", "수집일": "2026-08-04", "수집사유": "2026-07-29 갱신 공식 문서에서 실제 완료 상태 주석 PNG와 접근성 절차 확인" } }
  },
  {
    title: "Gen-4 Reference High Elf — 인물 정체성을 유지하며 의상·공간을 전환", category: "AI 이미지 프롬프트", date: "2026-08-04", url: "https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References#single-reference-high-elf",
    summary: "중립 조명의 인물 레퍼런스 하나를 유지한 채 백발·장신구·성 내부·얕은 심도·저채도 그레이딩을 순차 지정한 공식 결과.", note: "캠페인 인물의 정체성을 유지하면서 의상, 장소, 색보정만 바꾸는 캐릭터 연속성 테스트에 쓰기 좋음.", prompt: "@bryan as a high elf in a castle. cinematic with professional color grading. muted color palette. shallow depth of field. pointed ears. flowing white hair. jeweled circlet. elaborate ethereal regal elven attire.", tags: ["#AI이미지프롬프트", "#Gen4References", "#캐릭터일관성", "#시네마틱", "#생성형AI", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/40792559180435", visual: { background: "#bbb7ad", accent: "#d8c59a", ink: "#25231f", radiusOne: "50%", radiusTwo: "24px", rotate: "2deg", label: "IDENTITY / ATTIRE / CASTLE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 References 가이드가 전체 프롬프트, Gen-4 Image References 모델, 단일 레퍼런스 조건과 결과 PNG를 제공해 인물 정체성을 보존한 채 의상·장소·심도·색보정을 독립적으로 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "소프트확산광", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/40792559180435", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "@bryan as a high elf in a castle. cinematic with professional color grading. muted color palette. shallow depth of field. pointed ears. flowing white hair. jeweled circlet. elaborate ethereal regal elven attire.", "tool_model": "Runway Gen-4 Image References", "params": "단일 인물 Reference(@bryan)·최대 3개 reference 지원·720p/1080p·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/40792559180435", "fragment_map": [{ "조각": "@bryan as a high elf in a castle", "효과": "인물 정체성을 유지하며 역할과 공간 전환" }, { "조각": "professional color grading, muted color palette", "효과": "저채도 시네마 색보정" }, { "조각": "shallow depth of field", "효과": "인물과 성 배경의 초점 분리" }, { "조각": "flowing white hair, jeweled circlet, elaborate attire", "효과": "헤어·장신구·의상 구체화" }] } }, "출처": { "소스": "Runway / Creating with Gen-4 Image References", "수집일": "2026-08-04", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·단일 레퍼런스 조건·결과 PNG 확인" } }
  },
  {
    title: "Gen-4 Dual Reference Flowerfield — 인물과 장면 경로를 따로 만든 뒤 결합", category: "AI 이미지 프롬프트", date: "2026-08-04", url: "https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References#dual-reference-flowerfield",
    summary: "전신 캐릭터와 야생화 들판을 별도 레퍼런스로 만든 뒤 한 프롬프트에서 합쳐 의상·비례와 환경을 동시에 고정한 공식 결과.", note: "인물과 로케이션을 두 제작 경로로 분리해 캠페인 연속성과 배경 교체 실패를 줄이는 실험 구조로 쓰기 좋음.", prompt: "@fullbodyelfbryan in @flowerfield", tags: ["#AI이미지프롬프트", "#Gen4References", "#멀티레퍼런스", "#환경합성", "#생성형AI", "#테크IT"], thumbnail: "https://help.runwayml.com/hc/article_attachments/40942695708179", visual: { background: "#9ba884", accent: "#e2c9d0", ink: "#252820", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "CHARACTER + SCENE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 캐릭터와 꽃밭의 두 레퍼런스, 결합 프롬프트, Gen-4 Image References 조건과 결과 PNG를 나란히 제공해 인물·장면 경로를 분리한 합성 절차를 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "브랜드일관성"], "시각렌즈": ["에디토리얼", "파스텔", "중앙집중", "소프트확산광", "따뜻"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/40942695708179", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "@fullbodyelfbryan in @flowerfield", "tool_model": "Runway Gen-4 Image References", "params": "2 References(전신 캐릭터+꽃밭 장면)·최대 3개 reference 지원·720p/1080p·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/40942695708179", "fragment_map": [{ "조각": "@fullbodyelfbryan", "효과": "전신 비례·의상·인물 정체성 고정" }, { "조각": "@flowerfield", "효과": "야생화 밀도·지평선·자연광 장면 고정" }, { "조각": "in", "효과": "인물-환경 포함 관계로 결합" }] } }, "출처": { "소스": "Runway / Creating with Gen-4 Image References", "수집일": "2026-08-04", "수집사유": "최근 갱신 공식 가이드에서 두 레퍼런스 경로·결합 프롬프트·모델·결과 PNG 확인" } }
  },
  {
    title: "Synchrony — 선택형 AI 코치가 개입 강도를 사용자에게 돌려주는 소셜 앱", category: "웹·앱 UI", date: "2026-08-03", url: "https://www.behance.net/gallery/252290443/Synchrony-The-Social-App-Built-for-Belonging",
    summary: "신경다양성 성인을 위해 관심사·소통 방식 기반 매칭, 검증 멤버십, 필요할 때만 부르는 AI 소셜 코치를 차분한 모바일 흐름으로 설계한 사례.", note: "AI 도움을 사용자 호출형으로 두고 온보딩·매칭·대화의 인지 부담을 줄이는 포용적 인터랙션 설계가 참고할 만함.", tags: ["#웹앱UI", "#모바일앱", "#포용디자인", "#AI코치", "#온보딩", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c1b4a3252290443.6a4bf7a8c951b.png", visual: { background: "#e9e5f1", accent: "#7b68a6", ink: "#282333", radiusOne: "24px", radiusTwo: "50px", rotate: "2deg", label: "MATCH / CHAT / OPTIONAL AI" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "공개 케이스가 온보딩·관심사 매칭·대화·선택형 AI 코치의 실제 화면과 설계 원칙을 함께 보여 줘 포용적 소셜 제품 흐름으로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "파스텔", "그리드", "여백중심", "소프트확산광", "따뜻"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c1b4a3252290443.6a4bf7a8c951b.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "프로필 온보딩·관심사/소통 방식·Sync Mates·대화·Jesse AI 코치", "flow": "검증 가입→선호 입력→적합 매칭→대화→필요 시 AI 코치 호출" } }, "출처": { "소스": "Behance / Few — Digital Product Agency", "수집일": "2026-08-03", "수집사유": "2026-07-06 공개 프로젝트에서 실제 모바일 화면과 안정적 1400px 대표 PNG 확인" } }
  },
  {
    title: "How Firms Go Global — 역량과 제약을 듀오톤 시스템 맵으로 분리", category: "비주얼 그래픽", date: "2026-08-03", url: "https://www.behance.net/gallery/252507779/How-Firms-Go-Global-Data-Visualization",
    summary: "기업 국제화 연구를 중앙 허브 구조로 재배치하고 통제 가능한 역량은 틸, 시장 제약과 결과는 오렌지로 나눈 고밀도 데이터 시각화.", note: "복잡한 연구를 공간 관계·색 역할·통계 강조의 세 층으로 읽게 해 전략 프레임워크 시각화에 전이하기 좋음.", tags: ["#비주얼그래픽", "#데이터시각화", "#시스템맵", "#듀오톤", "#정보디자인"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/98550f252507779.6a51018ed05a6.jpg", visual: { background: "#e8e4d8", accent: "#1f8f88", ink: "#2b2923", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "CAPABILITY / CONSTRAINT / OUTCOME" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "공개 결과가 중앙 허브, 틸·오렌지 의미 체계, 통계 강조를 실제 고밀도 화면으로 보여 줘 전략·연구 내용을 시스템 맵 스타일로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "듀오톤", "그리드", "고밀도", "타이포처리", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/98550f252507779.6a51018ed05a6.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "composition": "중앙 허브를 중심으로 연구 근거·역량·제약·결과를 방사형 연결", "color_logic": "틸=통제 가능한 역량·오렌지=시장 현실과 제약" } }, "출처": { "소스": "Behance / Zhara Diane RIOS", "수집일": "2026-08-03", "수집사유": "2026-07-10 공개 프로젝트에서 실제 시각화와 안정적 1400px 대표 JPEG 확인" } }
  },
  {
    title: "FORTH Institutional Rebrand — 연구 조직의 다기관 아이덴티티를 한 시스템으로 통합", category: "브랜드", date: "2026-08-03", url: "https://www.behance.net/gallery/252630823/FORTH-Institutional-Rebranding",
    summary: "연구소·부서별로 흩어진 연구기관 FORTH의 로고, 웹, 인쇄물을 단순한 규칙과 응용 체계로 통합한 기관 리브랜딩.", note: "전담 디자이너 없이 여러 내부 팀이 쓰는 과학 조직에서 신뢰감은 유지하고 적용 편차를 줄이는 장기 운영형 브랜드 시스템이 참고할 만함.", tags: ["#브랜드", "#연구기관", "#아이덴티티시스템", "#사이언스", "#테크IT"], thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/max_808/715663252630823.Y3JvcCwxNDY2LDExNDcsMjEwLDA.png", visual: { background: "#f2f0e9", accent: "#1e5d74", ink: "#1d2528", radiusOne: "8px", radiusTwo: "0", rotate: "2deg", label: "SCIENCE / SYSTEM / SCALE" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "공개 프로젝트가 로고·웹사이트·문서·사인 적용을 실제 이미지로 보여 주고 다기관 운영 조건을 설명해 연구 조직용 확장 브랜드 시스템으로 추출할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["스위스", "모노톤", "그리드", "여백중심", "매트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/max_808/715663252630823.Y3JvcCwxNDY2LDExNDcsMjEwLDA.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "기관 로고·기업 웹사이트·문서·명함·사인", "operating_context": "다수 연구소와 내부 팀이 전담 감독 없이 일관되게 적용하는 단순 지침" } }, "출처": { "소스": "Behance / Christos Tsoumplekas", "수집일": "2026-08-03", "수집사유": "2026-07-13 공개 프로젝트에서 연구기관 실제 디지털·인쇄 적용과 공식 대표 PNG 확인" } }
  },
  {
    title: "Gen-4 Anime Flat Shading — 보랏빛 헤어와 평면 명암을 분리 제어", category: "AI 이미지 프롬프트", date: "2026-08-03", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#anime-flat-shading",
    summary: "보라색 머리의 전사를 중심으로 흐린 배경, 과장된 특징, 저채도 팔레트와 평면 명암을 결합한 공식 애니메이션형 결과.", note: "주체 특징·배경 초점·명암 방식·팔레트를 조각으로 분리해 캐릭터 키비주얼의 일관성을 비교하기 좋음.", prompt: "anime-style illustration of a warrior woman with purple hair. muted color palette. exaggerated features. slightly blurry background. flat shading style common in japanese artwork.", tags: ["#AI이미지프롬프트", "#애니메이션", "#평면명암", "#캐릭터", "#저채도"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062135187", visual: { background: "#6e5a86", accent: "#b49bdd", ink: "#221c2a", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "ANIME / FLAT / MUTED" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·1920×1088 결과 PNG를 제공해 캐릭터, 팔레트, 초점, 평면 명암을 독립 조절하며 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["일러스트", "파스텔", "중앙집중", "매트", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062135187", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "anime-style illustration of a warrior woman with purple hair. muted color palette. exaggerated features. slightly blurry background. flat shading style common in japanese artwork.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·reference 없음·positive natural-language prompt·공개 결과 1920×1088·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062135187", "fragment_map": [{ "조각": "warrior woman with purple hair", "효과": "캐릭터 역할과 헤어 컬러 고정" }, { "조각": "muted color palette", "효과": "전경과 배경 채도를 함께 낮춤" }, { "조각": "slightly blurry background", "효과": "주체보다 배경 초점을 완만하게 분리" }, { "조각": "flat shading", "효과": "면 중심 명암 형성" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-03", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·1920×1088 결과 PNG 확인" } }
  },
  {
    title: "Damaged Film Longhorn — 손상된 유제와 과노출을 다층 질감으로 합성", category: "AI 이미지 프롬프트", date: "2026-08-03", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#damaged-film-longhorn",
    summary: "롱혼 소의 일상 장면에 거친 입자, 스크래치, 물자국, 빛샘, 화학 얼룩과 유제 손상을 겹친 공식 필름 결과.", note: "손상 원인과 노출·색·초점을 층별 통제해 아카이브형 캠페인 비주얼의 시간감을 설계하기 좋음.", prompt: "extremely damaged film photography of a longhorn steer eating hay. The grainy texture, slightly overexposed film, muted colors, visible film scratches and water damage, and light leaks convey a candid scene in a timeless aesthetic. historical wear and tear. Chemical stains, burn marks, emulsion deterioration patterns.", tags: ["#AI이미지프롬프트", "#필름그레인", "#유제손상", "#빛샘"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37153288697875", visual: { background: "#a9987d", accent: "#d6b779", ink: "#322b24", radiusOne: "0", radiusTwo: "24px", rotate: "3deg", label: "GRAIN / LEAK / EMULSION" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 제공해 노출, 입자, 스크래치, 얼룩, 유제 손상을 조합 가능한 필름 질감으로 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "필름그레인", "매트", "따뜻"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37153288697875", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "extremely damaged film photography of a longhorn steer eating hay. The grainy texture, slightly overexposed film, muted colors, visible film scratches and water damage, and light leaks convey a candid scene in a timeless aesthetic. historical wear and tear. Chemical stains, burn marks, emulsion deterioration patterns.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·reference 없음·positive natural-language prompt·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37153288697875", "fragment_map": [{ "조각": "slightly overexposed film, muted colors", "효과": "오래된 과노출 인화 톤" }, { "조각": "film scratches and water damage", "효과": "선형 스크래치와 물자국 중첩" }, { "조각": "light leaks", "효과": "프레임 가장자리 노출 누출" }, { "조각": "Chemical stains, burn marks, emulsion deterioration", "효과": "화학·열·유제 손상 표면층 추가" }] } }, "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-03", "수집사유": "최근 갱신 공식 가이드에서 전체 프롬프트·모델·결과 PNG 확인" } }
  },
  {
    title: "Aerial Storm Boat — 폭풍 속 작은 배의 스케일을 수직 시점으로 강조", category: "AI 영상 프롬프트", date: "2026-08-03", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#aerial-storm-boat",
    summary: "거센 파도에 흔들리는 낡은 어선을 정수리 시점 항공 카메라로 내려다보며 자연과 주체의 크기 대비를 만든 공식 결과.", note: "카메라 고도·피치 동작·파도 규모·주체 비율을 묶어 재난·환경 캠페인의 압도적 스케일 숏을 설계하기 좋음.", prompt: "An aerial shot looks directly down onto a small, weathered fishing boat, its deck visible and pitching violently as it navigates through towering, frothing waves during a fierce storm, the boat appearing precariously small against the immense power of the ocean.", tags: ["#AI영상프롬프트", "#Gen45", "#항공숏", "#폭풍", "#스케일"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515599123", visual: { background: "#324853", accent: "#d7e3e7", ink: "#11191d", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "AERIAL / PITCH / SCALE" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공해 수직 항공 시점, 배의 피치, 파도 반응, 크기 대비를 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515599123", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "An aerial shot looks directly down onto a small, weathered fishing boat, its deck visible and pitching violently as it navigates through towering, frothing waves during a fierce storm, the boat appearing precariously small against the immense power of the ocean.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515599123", "fragment_map": [{ "조각": "aerial shot looks directly down", "효과": "수직 하향 항공 시점" }, { "조각": "deck visible and pitching violently", "효과": "갑판과 상하 회전 동시 노출" }, { "조각": "towering, frothing waves", "효과": "포말이 큰 폭풍 파도" }, { "조각": "boat appearing precariously small", "효과": "환경 대비 주체 비율 축소" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-03", "수집사유": "최근 갱신 공식 예시에서 전체 프롬프트·모델·결과 GIF 확인" } }
  },
  {
    title: "Ancient Street Tilt-up — 조약돌에서 건축과 하늘까지 한 축으로 공개", category: "AI 영상 프롬프트", date: "2026-08-03", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#ancient-street-tilt-up",
    summary: "낡은 조약돌 바닥에서 시작해 오래된 건물의 세부를 지나 한 점 구름이 있는 푸른 하늘까지 천천히 올려 보는 공식 틸트업 결과.", note: "시작점·중간 공개 대상·종료 프레임을 순서대로 명시해 건축 브랜드 영상의 한 숏 안 정보 전개를 통제하기 좋음.", prompt: "A tilt up shot begins on the weathered cobblestones of an ancient city street, slowly rising to showcase the intricate architectural details of centuries-old buildings, then continues upward to reveal a vast, clear blue sky with a single, wispy cloud.", tags: ["#AI영상프롬프트", "#Gen45", "#틸트업", "#건축", "#순차공개"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504744723", visual: { background: "#8c867c", accent: "#9ec9df", ink: "#292724", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "GROUND / FACADE / SKY" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공해 바닥, 건축 세부, 하늘을 잇는 틸트업의 시작·경유·종료점을 재현할 수 있다.", "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "중앙집중", "소프트확산광", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504744723", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A tilt up shot begins on the weathered cobblestones of an ancient city street, slowly rising to showcase the intricate architectural details of centuries-old buildings, then continues upward to reveal a vast, clear blue sky with a single, wispy cloud.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2–10초·16:9/9:16/1:1/4:3/3:4/21:9·720p·24/25fps·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504744723", "fragment_map": [{ "조각": "begins on the weathered cobblestones", "효과": "시작 프레임을 지면에 고정" }, { "조각": "slowly rising", "효과": "수직 회전을 완만하게 설정" }, { "조각": "showcase architectural details", "효과": "중간 구간에서 파사드 정보 노출" }, { "조각": "reveal a vast, clear blue sky", "효과": "넓은 하늘을 종료 프레임으로 공개" }] } }, "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-08-03", "수집사유": "최근 갱신 공식 예시에서 전체 프롬프트·모델·결과 GIF 확인" } }
  },
  {
    title: "Carbon AI Modal Scope — 전체·부분 생성 범위를 모달 안에서 구분", category: "AI 디자인", date: "2026-08-03", url: "https://carbondesignsystem.com/components/modal/usage/#ai-presence",
    summary: "모달 전체가 AI 생성일 때와 일부 필드만 AI 생성일 때 라벨·아우라 범위를 다르게 적용하는 공식 컴포넌트 사례.", note: "생성 범위를 컨테이너와 부분 콘텐츠로 나눠 사용자가 AI 개입 수준을 판단하게 만드는 패턴으로 전이하기 좋음.", tags: ["#AI디자인", "#모달", "#AI투명성", "#생성범위", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/57bc4193daba4848eb3152b719d15243/3cbba/modal-usage-ai-presence-w.png", visual: { background: "#f4f4f4", accent: "#8a3ffc", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "BROAD / FOCUSED / EXPLAIN" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 문서가 전체·부분 AI 범위가 적용된 실제 모달 화면과 라벨·설명 팝오버 규칙을 함께 제공해 AI 개입 범위 표시로 재현할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "그라디언트", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/57bc4193daba4848eb3152b719d15243/3cbba/modal-usage-ai-presence-w.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "범위 판단→전체면 컨테이너 AI 스타일→부분이면 해당 컴포넌트만 AI 스타일→라벨로 설명 팝오버 진입", "ai_role": "모달 내 AI 생성 범위와 설명 가능성 표시" } }, "출처": { "소스": "Carbon Design System / Modal usage", "수집일": "2026-08-03", "수집사유": "2026-07-29 갱신 공식 문서에서 AI 모달 실제 PNG와 범위 규칙 확인" } }
  },
  {
    title: "Carbon AI Tag Tokens — 18px 태그 안의 AI 라벨 간격을 고정", category: "웹 스타일가이드", date: "2026-08-03", url: "https://carbondesignsystem.com/components/tag/style/#ai-presence",
    summary: "AI 태그 본체 토큰은 일반 태그와 공유하고 인라인 AI 라벨 크기와 4px 간격만 추가하는 공식 스타일 규칙.", note: "기존 칩 시스템을 복제하지 않고 작은 차등 토큰만 추가해 AI 상태를 확장하는 컴포넌트 계약으로 쓰기 좋음.", tags: ["#웹스타일가이드", "#태그", "#AI상태", "#간격토큰", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/579e848460e738cc4b2bfe64a62cbf52/3cbba/tag-style-structure-ai.png", visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "50px", radiusTwo: "8px", rotate: "2deg", label: "18PX / 4PX / INLINE AI" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Carbon 공식 스타일 문서가 AI 태그 구조 PNG와 높이·패딩·라벨 크기 토큰을 명시해 기존 태그 시스템의 AI 변형으로 바로 시스템화할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "접근성", "AI활용"], "시각렌즈": ["미니멀", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/579e848460e738cc4b2bfe64a62cbf52/3cbba/tag-style-structure-ai.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "tag sm 18px·inline AI label small·padding-right 4px/$spacing-02", "states": "일반 태그 토큰 공유→AI 라벨만 추가→텍스트 색과 라벨 색 일치" } }, "출처": { "소스": "Carbon Design System / Tag style", "수집일": "2026-08-03", "수집사유": "2026-07-17 갱신 공식 문서에서 AI 태그 구조 PNG와 수치 토큰 확인" } }
  },
  {
    title: "Carbon Modal Title as Message — 짧은 오류 문장을 제목 하나로 끝내기", category: "콘텐츠 디자인 가이드", date: "2026-08-03", url: "https://carbondesignsystem.com/components/modal/usage/#title-as-message",
    summary: "짧고 직접적인 메시지는 제목에 온전히 담고 중복 본문을 제거해 모달의 판단 속도를 높이는 공식 콘텐츠 규칙.", note: "제목과 본문이 같은 말을 반복하는 오류·확인 모달을 줄이고 핵심 행동만 남기는 카피 검수 기준으로 즉시 적용 가능함.", tags: ["#콘텐츠디자인가이드", "#모달", "#오류메시지", "#UI카피", "#테크IT"], thumbnail: "https://carbondesignsystem.com/static/a991065de12f0225c4bb3ed9b55ddc49/3cbba/modal-usage-title.png", visual: { background: "#f4f4f4", accent: "#da1e28", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-1deg", label: "TITLE = MESSAGE" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "Carbon 공식 문서가 제목만으로 메시지를 전달하는 실제 모달 화면과 본문 제거 조건을 제공해 오류·확인 카피 검수에 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/a991065de12f0225c4bb3ed9b55ddc49/3cbba/modal-usage-title.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "메시지 한 문장화→제목만으로 목적 이해 확인→중복 본문 삭제→행동 버튼 능동형 동사 검수", "visible_examples": "짧은 메시지를 모달 제목 전체로 사용하고 본문을 생략한 공식 화면" } }, "출처": { "소스": "Carbon Design System / Modal usage", "수집일": "2026-08-03", "수집사유": "2026-07-29 갱신 공식 문서에서 title-as-message 실제 PNG와 카피 조건 확인" } }
  },
  {
    title: "Carbon AI Label — 설명 가능성 팝오버를 여는 일관된 진입점",
    category: "AI 디자인", date: "2026-08-02", url: "https://carbondesignsystem.com/components/ai-label/usage/#explainability-popover",
    summary: "AI 생성 여부를 표시하는 라벨을 설명 가능성 팝오버의 트리거로 사용하고, 개요·근거·아티팩트·추가 행동을 한 흐름으로 연결한 Carbon 공식 패턴.",
    note: "AI 표식을 장식이나 생성 버튼으로 오용하지 않고, 사용자가 모델 근거를 확인하는 고정 진입점으로 운영하는 제품 규칙을 설계하기 좋음.",
    tags: ["#AI디자인", "#설명가능성", "#AI라벨", "#팝오버", "#투명성", "#테크IT"],
    thumbnail: "https://carbondesignsystem.com/static/64d77c6982c783a3227be6c1d38dada2/3cbba/ai-label-explainability-01.png",
    visual: { background: "#f4f4f4", accent: "#8a3ffc", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "AI / EXPLAIN / VERIFY" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Carbon 공식 문서가 AI 라벨과 설명 가능성 팝오버의 실제 화면, 열기·닫기 동작, 콘텐츠 구조와 되돌리기 규칙을 함께 제공해 생성형 제품의 투명성 패턴으로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그라디언트", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/64d77c6982c783a3227be6c1d38dada2/3cbba/ai-label-explainability-01.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "AI 라벨 인지→선택 또는 키보드 포커스→설명 가능성 팝오버→근거·아티팩트 확인→추가 행동 또는 닫기", "ai_role": "AI 생성 상태를 표시하고 설명·검증 정보에 접근하는 일관된 트리거" } },
      "출처": { "소스": "Carbon Design System / AI label usage", "수집일": "2026-08-02", "수집사유": "2026-07-29 갱신된 공식 문서에서 설명 가능성 팝오버 실제 PNG와 AI 라벨의 배치·행동·되돌리기 규칙이 확인됨" }
    }
  },
  {
    title: "Carbon UI Shell Header — 상태·간격·반응형을 하나의 헤더 계약으로",
    category: "웹 스타일가이드", date: "2026-08-02", url: "https://carbondesignsystem.com/components/UI-shell-header/style/#structure",
    summary: "48px 헤더 안에서 메뉴·제품명·링크·액션의 토큰과 상호작용 상태를 규정하고, 작은 화면에서는 메뉴를 좌측 패널로 접는 Carbon 공식 사양.",
    note: "복합 B2B 제품의 전역 탐색을 상태 토큰, 클릭 영역, 반응형 이동 규칙까지 포함한 재사용 가능한 셸 컴포넌트로 정리하기 좋음.",
    tags: ["#웹스타일가이드", "#UIShell", "#헤더", "#상태토큰", "#반응형", "#테크IT"],
    thumbnail: "https://carbondesignsystem.com/static/00d98d07d00c19094c33c61ad30cf009/3cbba/header-style-6.png",
    visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "2deg", label: "SHELL / STATE / SCALE" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Carbon 공식 문서가 헤더의 실제 구조 측정 PNG, 48px 규격, 간격·색상 토큰, 상태와 모바일 접힘 규칙을 함께 제공해 전역 탐색 컴포넌트로 시스템화할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "접근성", "인터랙션"], "시각렌즈": ["미니멀", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/00d98d07d00c19094c33c61ad30cf009/3cbba/header-style-6.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "48px 헤더·16/32px 제품명 여백·16px 링크 여백·상태별 배경/텍스트/포커스 토큰", "states": "enabled→hover→focus→active→selected, 좁은 화면에서 헤더 메뉴를 좌측 내비게이션 상단으로 이동" } },
      "출처": { "소스": "Carbon Design System / UI shell header style", "수집일": "2026-08-02", "수집사유": "2026-07-29 갱신된 공식 문서에서 실제 구조·반응형 PNG와 상태·크기·간격 토큰이 확인됨" }
    }
  },
  {
    title: "Carbon Header Accessibility — 기본 동작과 제품별 예외만 구분해 주석",
    category: "콘텐츠 디자인 가이드", date: "2026-08-02", url: "https://carbondesignsystem.com/components/UI-shell-header/accessibility/#design-recommendations",
    summary: "기본 헤더의 Tab·Enter·Space·Skip link 동작을 재사용하고, 제품이 이름이나 키보드 흐름을 바꿀 때만 차이를 명시적으로 주석 처리하는 Carbon 공식 가이드.",
    note: "모든 화면에 같은 설명을 반복하지 않고 기준 동작과 예외 카피만 남겨 디자이너·개발자 QA 문서를 간결하고 검증 가능하게 만들기 좋음.",
    tags: ["#콘텐츠디자인가이드", "#접근성주석", "#키보드탐색", "#헤더", "#디자인QA", "#테크IT"],
    thumbnail: "https://carbondesignsystem.com/static/a0161850237784042e803c337eb412ea/3cbba/header-accessibility-1.png",
    visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "TAB / LABEL / EXCEPTION" },
    review: {
      "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Carbon 공식 문서가 Skip link와 키보드 이동의 실제 PNG, 기본 접근성 동작, 제품별 예외 주석 절차를 함께 제시해 디자인 QA 문서에 즉시 적용할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/a0161850237784042e803c337eb412ea/3cbba/header-accessibility-1.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "Carbon 기본 Tab·Enter·Space·Skip link 확인→제품별 아이콘 이름과 포커스 순서 비교→다른 동작만 화면에 주석→개발·QA 기준으로 공유", "visible_examples": "Tab 키로 Skip to main을 드러내고 헤더 요소 사이를 이동하는 실제 화면과 주석 예시" } },
      "출처": { "소스": "Carbon Design System / UI shell header accessibility", "수집일": "2026-08-02", "수집사유": "2026-07-29 갱신된 공식 문서에서 실제 키보드 포커스 PNG와 기본·예외 접근성 주석 절차가 확인됨" }
    }
  },
  {
    title: "Storybook Frog Picnic — 굵은 선과 단순 도형으로 고정한 동화 삽화",
    category: "AI 이미지 프롬프트", date: "2026-08-02", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#storybook-frog-picnic",
    summary: "연잎 위 피크닉 장면을 굵은 외곽선, 정돈된 색면, 손그림 잉크선으로 제한해 작은 화면에서도 읽히는 공식 Gen-4 삽화 결과.",
    note: "주체·행동 뒤에 선 굵기와 도형 단순화 규칙을 붙이는 구조가 온보딩 일러스트와 캐릭터 카드의 스타일 일관성을 빠르게 테스트하기 좋음.",
    prompt: "Storybook illustration of a frog having a picnic on a lily pad, thick lines, clean bold shapes, hand-drawn quality, precise ink-like lines",
    tags: ["#AI이미지프롬프트", "#Gen4Image", "#동화삽화", "#굵은선", "#캐릭터", "#생성형AI"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148070563475",
    visual: { background: "#a9d88f", accent: "#f2c45f", ink: "#24382b", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "STORY / BOLD / INK" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·지원 설정·결과 PNG를 제공하고 주체, 행동, 선 굵기, 도형, 잉크 질감을 조합 가능한 통제어로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "중앙집중", "매트", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148070563475", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Storybook illustration of a frog having a picnic on a lily pad, thick lines, clean bold shapes, hand-drawn quality, precise ink-like lines", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Illustration 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148070563475", "fragment_map": [{ "조각": "frog having a picnic on a lily pad", "효과": "한 장면에서 주체·행동·장소를 명확히 고정" }, { "조각": "thick lines", "효과": "축소 화면에서도 캐릭터 윤곽을 선명하게 유지" }, { "조각": "clean bold shapes", "효과": "세부 묘사를 줄이고 큰 색면 중심으로 단순화" }, { "조각": "hand-drawn quality, precise ink-like lines", "효과": "기계적 벡터보다 손그림 잉크의 미세한 결을 부여" }] } },
      "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-02", "수집사유": "2026-07-31 KST 갱신된 공식 가이드에서 전체 프롬프트·모델·지원 설정·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Surreal Anatomy — 흰 배경에서 인체 왜곡만 전면화한 아방가르드 이미지",
    category: "AI 이미지 프롬프트", date: "2026-08-02", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#surreal-anatomy-white-stage",
    summary: "인체를 비현실적으로 굽히고 압축한 형태를 순백 배경과 시네마틱 표현으로 분리해 실루엣 변화가 즉시 읽히는 공식 Gen-4 결과.",
    note: "변형 동사와 강도, 배경, 무드를 따로 제어해 패션 키비주얼이나 콘셉트 포스터에서 형태 실험의 범위를 비교하기 좋음.",
    prompt: "the man curves and bends impossibly. distorted, warped, squished, and extremely deformed and exaggerated. surreal anatomy. cinematic, avant garde. solid white background",
    tags: ["#AI이미지프롬프트", "#Gen4Image", "#초현실", "#인체왜곡", "#아방가르드", "#생성형AI"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062162067",
    visual: { background: "#f4f4f1", accent: "#222222", ink: "#111111", radiusOne: "50%", radiusTwo: "8px", rotate: "-2deg", label: "BEND / WARP / STAGE" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·지원 설정·결과 PNG를 제공하고 왜곡 동사, 강도, 무드, 흰 배경을 독립적인 형태 통제어로 재사용하게 한다.",
      "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "중앙집중", "여백중심", "매트", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062162067", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "the man curves and bends impossibly. distorted, warped, squished, and extremely deformed and exaggerated. surreal anatomy. cinematic, avant garde. solid white background", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Surreal anatomy 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062162067", "fragment_map": [{ "조각": "curves and bends impossibly", "효과": "관절과 몸통의 방향을 비현실적인 곡선으로 전환" }, { "조각": "distorted, warped, squished", "효과": "늘임·비틀림·압축 변형을 중첩" }, { "조각": "extremely deformed and exaggerated", "효과": "형태 변형 강도를 최대치로 올려 실루엣 차이를 명확화" }, { "조각": "solid white background", "효과": "환경 정보를 제거해 인체 형태만 전면에 분리" }] } },
      "출처": { "소스": "Runway / Gen-4 Image Prompting Guide", "수집일": "2026-08-02", "수집사유": "2026-07-31 KST 갱신된 공식 가이드에서 전체 프롬프트·모델·지원 설정·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Volcanic Rock Humanoid — 바위 더미가 보행 생명체로 변하는 단일 숏",
    category: "AI 영상 프롬프트", date: "2026-08-02", url: "https://help.runwayml.com/hc/en-us/articles/39789879462419-Gen-4-Video-Prompting-Guide#volcanic-rock-humanoid",
    summary: "정지한 화산암 더미를 거친 암석 표면의 인간형으로 변환한 뒤 장면 안을 걷게 하는 두 단계 동작의 공식 Gen-4 결과.",
    note: "변형과 후속 보행을 짧은 문장으로 분리해 소재 일관성을 유지하면서 로봇·게임 크리처·VFX 콘셉트의 상태 전환을 검증하기 좋음.",
    prompt: "the pile of rocks transforms into a humanoid made out of rugged volcanic rocks. the rock humanoid walks around the scene.",
    tags: ["#AI영상프롬프트", "#Gen4", "#변형", "#화산암", "#크리처", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/39884510638227",
    visual: { background: "#4a453f", accent: "#9b7656", ink: "#f0e8df", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "ROCK / FORM / WALK" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 모델·입력 이미지·결과 GIF를 제공하고 초기 오브젝트, 변형 재질, 인간형 상태, 후속 보행을 단계별 통제어로 재현하게 한다.",
      "metadata": { "정보렌즈": ["인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["3D", "어스톤", "중앙집중", "매트", "하드라이트", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/39884510638227", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "the pile of rocks transforms into a humanoid made out of rugged volcanic rocks. the rock humanoid walks around the scene.", "tool_model": "Runway Gen-4 Image to Video", "params": "Image to Video·5/10초·공식 입력 이미지·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/39884510638227", "fragment_map": [{ "조각": "pile of rocks", "효과": "변형 전 정지 오브젝트와 재질 기준을 설정" }, { "조각": "transforms into a humanoid", "효과": "바위 더미를 인간형 관절 구조로 단계적으로 전환" }, { "조각": "made out of rugged volcanic rocks", "효과": "변형 뒤에도 거친 화산암 표면을 유지" }, { "조각": "walks around the scene", "효과": "완성된 인간형에 공간 내 보행 동작을 부여" }] } },
      "출처": { "소스": "Runway / Gen-4 Video Prompting Guide", "수집일": "2026-08-02", "수집사유": "2026-07-31 KST 갱신된 공식 가이드에서 전체 프롬프트·모델·입력·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Handheld Mouse Track — 작은 주체의 도주를 낮은 시점으로 추적",
    category: "AI 영상 프롬프트", date: "2026-08-02", url: "https://help.runwayml.com/hc/en-us/articles/39789879462419-Gen-4-Video-Prompting-Guide#handheld-mouse-track",
    summary: "작은 쥐가 빠르게 달아나는 동작을 핸드헬드 카메라가 같은 높이에서 따라가며 속도감과 미세 흔들림을 만드는 공식 Gen-4 결과.",
    note: "카메라 스타일·추적 대상·동작 방향만 남긴 최소 프롬프트가 로봇 주행, 미니어처 제품, 게임 카메라의 추적 안정성을 비교하기 좋음.",
    prompt: "the handheld camera tracks the mouse as it scurries away.",
    tags: ["#AI영상프롬프트", "#Gen4", "#핸드헬드", "#추적카메라", "#미니어처", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/39885554866067",
    visual: { background: "#847466", accent: "#c9b59c", ink: "#211d19", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "LOW / TRACK / SCURRY" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 모델·입력 이미지·결과 GIF를 제공하고 핸드헬드 질감, 추적 관계, 빠른 도주 동작을 최소 통제어로 재현하게 한다.",
      "metadata": { "정보렌즈": ["인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["어스톤", "비대칭", "소프트확산광", "필름그레인", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/39885554866067", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "the handheld camera tracks the mouse as it scurries away.", "tool_model": "Runway Gen-4 Image to Video", "params": "Image to Video·5/10초·공식 입력 이미지·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/39885554866067", "fragment_map": [{ "조각": "handheld camera", "효과": "미세 흔들림과 즉흥적인 촬영 질감을 부여" }, { "조각": "tracks the mouse", "효과": "작은 주체를 프레임 안에 유지하는 추적 관계 설정" }, { "조각": "scurries", "효과": "짧고 빠른 보폭과 불규칙한 이동 속도 생성" }, { "조각": "away", "효과": "카메라에서 멀어지는 진행 방향과 공간 깊이를 명시" }] } },
      "출처": { "소스": "Runway / Gen-4 Video Prompting Guide", "수집일": "2026-08-02", "수집사유": "2026-07-31 KST 갱신된 공식 가이드에서 전체 프롬프트·모델·입력·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Carbon Checkbox AI Presence — 선택 항목의 생성 근거를 라벨에서 확인",
    category: "AI 디자인", date: "2026-08-01", url: "https://carbondesignsystem.com/components/checkbox/usage/#ai-presence",
    summary: "체크박스 그룹 또는 개별 라벨에 AI 표시를 붙이고, 같은 표시를 설명 가능성 팝오버의 트리거로 사용하는 Carbon 공식 패턴.",
    note: "AI가 추천한 선택지와 사용자가 직접 고른 항목을 같은 폼 안에서 구분하면서도 기존 체크 동작을 유지하는 설명 가능성 패턴으로 전이하기 좋음.",
    tags: ["#AI디자인", "#체크박스", "#설명가능성", "#폼", "#디자인시스템", "#테크IT"],
    thumbnail: "https://carbondesignsystem.com/static/9b292d6421efda71c44fa96f4be93833/3cbba/checkbox-usage-10.png",
    visual: { background: "#f4f4f4", accent: "#8a3ffc", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "AI / SELECT / EXPLAIN" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Carbon 공식 문서가 AI 라벨이 결합된 실제 체크박스 화면과 그룹·개별 배치, 설명 팝오버 트리거 규칙을 함께 제공해 AI 추천 선택 상태로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/9b292d6421efda71c44fa96f4be93833/3cbba/checkbox-usage-10.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "AI 추천 범위 판단→그룹 또는 개별 체크박스 라벨에 AI 표시→표시 선택 시 설명 팝오버→사용자 선택 유지", "ai_role": "추천·생성된 선택 항목의 범위와 근거 확인 진입점을 표시" } },
      "출처": { "소스": "Carbon Design System / Checkbox usage", "수집일": "2026-08-01", "수집사유": "2026-07-23 갱신된 공식 문서에서 AI presence 체크박스 PNG와 구현 규칙이 확인됨" }
    }
  },
  {
    title: "Carbon AI Data Table Tokens — 전체·셀·행 단위 생성 상태를 계층화",
    category: "웹 스타일가이드", date: "2026-08-01", url: "https://carbondesignsystem.com/components/data-table/style/#ai-presence",
    summary: "AI가 만든 범위에 따라 테이블 전체, 개별 셀, 행·열에 서로 다른 라벨 크기와 그라디언트·테두리·호버 토큰을 적용하는 공식 스타일 규칙.",
    note: "데이터 제품에서 생성 범위를 표 전체와 부분 결과로 나눠 보여 주되 기존 밀도와 선택 행동을 유지하는 토큰 계약으로 흡수하기 좋음.",
    tags: ["#웹스타일가이드", "#데이터테이블", "#AI상태", "#토큰", "#B2B", "#테크IT"],
    thumbnail: "https://carbondesignsystem.com/static/bdb0b42225252338ea81fce0a3ff94e7/3cbba/style-ai-presence-datatable-row-hover.png",
    visual: { background: "#f4f4f4", accent: "#8a3ffc", ink: "#161616", radiusOne: "0", radiusTwo: "8px", rotate: "2deg", label: "TABLE / CELL / ROW" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Carbon 공식 스타일 문서가 AI 행 호버 실제 화면과 전체·셀·행별 라벨 크기, 배경·테두리·그림자 토큰을 명시해 데이터 테이블 상태 체계로 시스템화할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "브랜드일관성", "접근성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "그라디언트", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/bdb0b42225252338ea81fce0a3ff94e7/3cbba/style-ai-presence-datatable-row-hover.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "$ai-drop-shadow·$ai-inner-shadow·$ai-aura-start-sm/$ai-aura-stop·$ai-border-strong", "states": "전체 테이블 large 라벨→개별 셀 medium 라벨→행·열 mini 라벨→AI 행 hover" } },
      "출처": { "소스": "Carbon Design System / Data table style", "수집일": "2026-08-01", "수집사유": "2026-07-23 갱신된 공식 문서에서 AI 생성 행의 실제 호버 PNG와 범위별 토큰 표가 확인됨" }
    }
  },
  {
    title: "Carbon Tooltip Naming — 아이콘 버튼의 보이는 이름을 설계 주석으로 고정",
    category: "콘텐츠 디자인 가이드", date: "2026-08-01", url: "https://carbondesignsystem.com/components/tooltip/accessibility/#design-recommendations",
    summary: "아이콘 전용 버튼에 툴팁 텍스트를 직접 배치하거나 설계 주석으로 명시하고, 이름 없는 아이콘 버튼은 사용하지 않도록 실제 화면으로 비교한 공식 가이드.",
    note: "개발 전달 전에 아이콘의 동작 이름을 카피로 확정해 시각 사용자와 스크린리더 사용자에게 같은 의미를 제공하는 검수 절차로 바로 적용할 수 있음.",
    tags: ["#콘텐츠디자인가이드", "#툴팁", "#아이콘버튼", "#접근성", "#UI카피", "#테크IT"],
    thumbnail: "https://carbondesignsystem.com/static/f7588222a7d58e32c9bd5123ce07233c/3cbba/tooltip-accessibility-tab-1.png",
    visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "0", rotate: "-2deg", label: "NAME / FOCUS / TOOLTIP" },
    review: {
      "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Carbon 공식 접근성 문서가 키보드 포커스와 툴팁 이름이 보이는 실제 화면, 권장·비권장 예시, aria-labelledby 구현 근거를 함께 제공해 아이콘 카피 검수에 즉시 적용할 수 있다.",
      "metadata": { "정보렌즈": ["사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/f7588222a7d58e32c9bd5123ce07233c/3cbba/tooltip-accessibility-tab-1.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "아이콘 동작 이름 작성→툴팁 또는 설계 주석에 고정→키보드 포커스 노출 확인→접근성 이름과 화면 카피 일치 검수", "visible_examples": "Tab 포커스에서 툴팁 이름이 노출되는 아이콘 버튼과 이름 없는 버튼의 권장·비권장 비교" } },
      "출처": { "소스": "Carbon Design System / Tooltip accessibility", "수집일": "2026-08-01", "수집사유": "2026-07-23 갱신된 공식 문서에서 실제 툴팁 포커스 PNG와 구체적인 버튼 이름 작성 기준이 확인됨" }
    }
  },
  {
    title: "Seedream Market Composite — 인물·제품·모자를 세 레퍼런스에서 결합",
    category: "AI 이미지 프롬프트", date: "2026-08-01", url: "https://help.runwayml.com/hc/en-us/articles/53253654113299-Creating-with-Seedream-5-0-Pro#multi-image-market-composite",
    summary: "은빛 로크 헤어의 상인, 도자기 꿀단지, 직조 모자를 세 입력에서 가져와 아침 시장의 다큐멘터리형 상업 사진으로 결합한 공식 결과.",
    note: "인물 정체성·제품·착용 소품·환경광을 역할별 레퍼런스로 분리해 브랜드 캠페인의 합성 요구를 한 문장으로 통제하는 데 유용함.",
    prompt: "A woman in her 60s with silver locs, wearing a canvas apron, standing behind a wooden market stall. She's holding the ceramic honey jar from the second reference image and wearing the woven sun hat from the third. Morning market setting, string lights overhead, wooden crates of produce softly out of focus behind her, warm early light, documentary-style commercial photography, natural unposed expression.",
    tags: ["#AI이미지프롬프트", "#멀티레퍼런스", "#제품합성", "#상업사진", "#자연광"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/53289728908435",
    visual: { background: "#b88a5e", accent: "#e8c886", ink: "#33261f", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "PERSON / PRODUCT / PROP" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Seedream 5.0 Pro 모델·세 입력 이미지·지원 설정·최종 결과 PNG를 제공해 역할 분리형 상업 합성으로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "비대칭", "소프트확산광", "따뜻"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53289728908435", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A woman in her 60s with silver locs, wearing a canvas apron, standing behind a wooden market stall. She's holding the ceramic honey jar from the second reference image and wearing the woven sun hat from the third. Morning market setting, string lights overhead, wooden crates of produce softly out of focus behind her, warm early light, documentary-style commercial photography, natural unposed expression.", "tool_model": "Runway Seedream 5.0 Pro", "params": "Image·3 reference images·1K/2K·1:1/4:3/3:4/16:9/9:16/3:2/2:3·최대 10 references·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/53289728908435", "fragment_map": [{ "조각": "woman ... silver locs, wearing a canvas apron", "효과": "인물의 연령·헤어·작업복을 주체 기준으로 고정" }, { "조각": "ceramic honey jar from the second reference", "효과": "두 번째 입력의 제품 형태를 손에 결합" }, { "조각": "woven sun hat from the third", "효과": "세 번째 입력의 직조 소품을 착용 상태로 이전" }, { "조각": "warm early light, documentary-style commercial photography", "효과": "자연스러운 아침 확산광과 비연출 상업 사진 톤 부여" }] } },
      "출처": { "소스": "Runway / Creating with Seedream 5.0 Pro", "수집일": "2026-08-01", "수집사유": "2026-07-08 갱신된 공식 가이드에서 전체 프롬프트·모델·설정·입력 레퍼런스·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Seedream Sketch Repair — 표시 영역을 실제 오브젝트로 치환하고 구도를 보존",
    category: "AI 이미지 프롬프트", date: "2026-08-01", url: "https://help.runwayml.com/hc/en-us/articles/53253654113299-Creating-with-Seedream-5-0-Pro#sketch-guided-scene-edit",
    summary: "스케치로 표시한 집·헛간·인물·구름 위치에 거대 정원 장식, 소, 로봇 농부, 문자를 넣고 표시선은 지우되 원래 구도를 유지한 공식 편집 결과.",
    note: "러프 주석을 위치 계약으로 쓰면서 추가·이동·교체·문자 삽입·선 제거를 한 번에 명시해 아트디렉션 피드백을 재현 가능한 편집 명령으로 바꾸기 좋음.",
    prompt: "Edit the image based on the sketching. Add a giant garden gnome sitting on the house in the upper-left marked area, move the cow from the fiel to the top of the red barn, replace the stick figure with a robot farmer, and write Odd Day in the clouds in the top right area. Remove all the read and white sketched lines. Keep the composition unchanged. Make the newly added objects blend naturally into the original scene.",
    tags: ["#AI이미지프롬프트", "#스케치편집", "#구도보존", "#로봇", "#아트디렉션", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/53289728913683",
    visual: { background: "#d9d8be", accent: "#bf3c35", ink: "#293329", radiusOne: "8px", radiusTwo: "24px", rotate: "-3deg", label: "SKETCH / EDIT / PRESERVE" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 편집 프롬프트·Seedream 5.0 Pro 모델·스케치 입력·지원 설정·최종 결과 PNG를 함께 제공해 위치 주석 기반 장면 편집으로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["일러스트", "그리드", "하이채도", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53289728913683", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Edit the image based on the sketching. Add a giant garden gnome sitting on the house in the upper-left marked area, move the cow from the fiel to the top of the red barn, replace the stick figure with a robot farmer, and write Odd Day in the clouds in the top right area. Remove all the read and white sketched lines. Keep the composition unchanged. Make the newly added objects blend naturally into the original scene.", "tool_model": "Runway Seedream 5.0 Pro", "params": "Image edit·1 sketch reference·1K/2K·1:1/4:3/3:4/16:9/9:16/3:2/2:3·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/53289728913683", "fragment_map": [{ "조각": "based on the sketching", "효과": "주석선과 표시 영역을 편집 좌표로 사용" }, { "조각": "add ... move ... replace ... write", "효과": "추가·이동·교체·문자 삽입을 명시적 작업 목록으로 분리" }, { "조각": "Remove all the ... sketched lines", "효과": "완성본에서 지시용 표시선을 제거" }, { "조각": "Keep the composition unchanged", "효과": "새 오브젝트가 들어가도 원래 프레이밍과 공간 배치를 보존" }] } },
      "출처": { "소스": "Runway / Creating with Seedream 5.0 Pro", "수집일": "2026-08-01", "수집사유": "2026-07-08 갱신된 공식 가이드에서 전체 편집 프롬프트·모델·설정·스케치 입력·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Mechanical Bull Desert Track — 기계 생물의 질주와 먼지를 핸드헬드로 추적",
    category: "AI 영상 프롬프트", date: "2026-08-01", url: "https://help.runwayml.com/hc/en-us/articles/39789879462419-Gen-4-Video-Prompting-Guide#mechanical-bull-desert-track",
    summary: "사막을 달리는 기계 황소를 핸드헬드 카메라가 따라가고, 이동에 반응한 먼지 꼬리와 시네마틱 실사 질감을 결합한 공식 Gen-4 결과.",
    note: "주체 이동·환경 반응·카메라 추적·모션 스타일을 짧은 네 조각으로 분리해 로보틱스와 하드웨어 캠페인의 동작 검증 숏으로 쓰기 좋음.",
    prompt: "a handheld camera tracks the mechanical bull as it runs across the desert. the movement disturbs dust that trails behind the mechanical creature. cinematic live-action.",
    tags: ["#AI영상프롬프트", "#Gen4", "#핸드헬드", "#로보틱스", "#먼지", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/39855504656659",
    visual: { background: "#b99266", accent: "#4d5b60", ink: "#1f2425", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "TRACK / MACHINE / DUST" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 모델·입력 이미지·결과 GIF를 제공하고 추적 카메라, 기계 주체, 먼지 반응, 실사 모션을 독립 통제어로 재사용하게 한다.",
      "metadata": { "정보렌즈": ["인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["어스톤", "비대칭", "하드라이트", "필름그레인", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/39855504656659", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "a handheld camera tracks the mechanical bull as it runs across the desert. the movement disturbs dust that trails behind the mechanical creature. cinematic live-action.", "tool_model": "Runway Gen-4 Image to Video", "params": "Image to Video·5/10초·공식 입력 이미지·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/39855504656659", "fragment_map": [{ "조각": "handheld camera tracks", "효과": "미세 흔들림을 가진 추적 카메라 경로" }, { "조각": "mechanical bull ... runs across the desert", "효과": "기계 생물의 횡방향 질주 동작" }, { "조각": "dust that trails behind", "효과": "이동 속도에 반응하는 먼지 꼬리 생성" }, { "조각": "cinematic live-action", "효과": "렌더보다 실제 촬영에 가까운 모션 질감 부여" }] } },
      "출처": { "소스": "Runway / Gen-4 Video Prompting Guide", "수집일": "2026-08-01", "수집사유": "2026-07-31 KST 갱신된 공식 가이드에서 전체 프롬프트·모델·입력·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Bubbling Mirror Lock-off — 반사면만 유기적으로 변형하는 고정 숏",
    category: "AI 영상 프롬프트", date: "2026-08-01", url: "https://help.runwayml.com/hc/en-us/articles/39789879462419-Gen-4-Video-Prompting-Guide#bubbling-mirror-lockoff",
    summary: "거울을 살피는 인물은 유지하고 반사면에서 크기가 다른 반투명 거품만 솟게 하며 카메라를 고정한 공식 Gen-4 결과.",
    note: "정지 카메라·주체 행동·재질 변화의 범위를 분리해 스마트 미러, 디스플레이 재질, 미래형 인터페이스 콘셉트에서 한 요소만 변형하는 숏으로 활용하기 좋음.",
    prompt: "the woman inspects her reflection in the mirror. the surface of the mirror bubbles with large, organically-shaped translucent bubbles in varying sizes. locked camera",
    tags: ["#AI영상프롬프트", "#Gen4", "#고정카메라", "#재질변형", "#미래인터페이스", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/39884510635667",
    visual: { background: "#b6acaa", accent: "#d5e2dd", ink: "#292726", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "LOCK / REFLECT / BUBBLE" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 모델·입력 이미지·결과 GIF를 제공하고 인물 행동, 거울 표면, 거품 크기, 고정 카메라를 독립 통제어로 재현하게 한다.",
      "metadata": { "정보렌즈": ["인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "중앙집중", "소프트확산광", "글로시", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/39884510635667", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "the woman inspects her reflection in the mirror. the surface of the mirror bubbles with large, organically-shaped translucent bubbles in varying sizes. locked camera", "tool_model": "Runway Gen-4 Image to Video", "params": "Image to Video·5/10초·공식 입력 이미지·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/39884510635667", "fragment_map": [{ "조각": "inspects her reflection", "효과": "인물의 시선과 작은 관찰 동작을 유지" }, { "조각": "surface of the mirror bubbles", "효과": "변형 범위를 거울 표면에만 제한" }, { "조각": "organically-shaped translucent bubbles in varying sizes", "효과": "크기 차가 있는 반투명 유기 거품 재질 생성" }, { "조각": "locked camera", "효과": "프레임 이동 없이 표면 변화만 비교 가능하게 고정" }] } },
      "출처": { "소스": "Runway / Gen-4 Video Prompting Guide", "수집일": "2026-08-01", "수집사유": "2026-07-31 KST 갱신된 공식 가이드에서 전체 프롬프트·모델·입력·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "ATLAS AI Workspace — 문서·에이전트·일정·자동화를 한 셸에 통합",
    category: "웹·앱 UI", date: "2026-08-01", url: "https://www.behance.net/gallery/252272351/ATLAS-AI-Operating-System-for-Modern-Teams",
    summary: "팀의 문서, AI 에이전트, 일정, 워크플로, 인사이트를 하나의 작업 공간에 묶어 여러 도구 전환을 줄인 다크 테마 SaaS UI 콘셉트.",
    note: "탐색 셸과 대시보드 모듈을 유지한 채 문서·에이전트·자동화를 작업 객체로 나란히 배치해 복합 AI 제품의 정보 구조를 비교하기 좋음.",
    tags: ["#웹앱UI", "#AI워크스페이스", "#에이전트", "#대시보드", "#SaaS", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/aae9ff252272351.Y3JvcCw1MjM2LDQwOTYsMCww.png",
    visual: { background: "#111216", accent: "#9f8cff", ink: "#f2f2f4", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "DOCS / AGENTS / FLOW" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 4 }, "total": 17, "verdict": "accept",
      "근거": "Behance 공개 프로젝트가 문서·AI 에이전트·일정·워크플로·인사이트가 결합된 실제 Figma 화면과 다크 SaaS 셸을 보여 줘 복합 AI 작업 공간의 탐색·모듈 구조로 시스템화할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "브랜드일관성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "모노톤", "그라디언트", "그리드", "고밀도", "차가움"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/404/aae9ff252272351.Y3JvcCw1MjM2LDQwOTYsMCww.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "통합 홈→문서·프로젝트 탐색→AI 에이전트 호출→일정·워크플로 실행→인사이트 확인", "ui_system": "다크 셸·좌측 탐색·모듈 카드·보라색 상태 강조·고밀도 대시보드 그리드" } },
      "출처": { "소스": "Behance / Mariana Kosovchych", "수집일": "2026-08-01", "수집사유": "2026-07-06 공개된 Figma UI/UX 프로젝트에서 통합 AI 작업 공간의 실제 화면과 200 응답 공식 커버 PNG가 확인됨" }
    }
  },
  {
    title: "KyroAI — 복잡한 비즈니스 데이터를 선명한 신뢰 언어로 바꾼 브랜드",
    category: "브랜드", date: "2026-08-01", url: "https://www.behance.net/gallery/252500427/KyroAI-AI-Startup-Branding",
    summary: "데이터 복잡성을 명확한 인사이트로 바꾸는 AI 비즈니스 인텔리전스의 약속을 미니멀 로고, 굵은 타이포, 정밀한 색 체계와 디지털 응용으로 확장한 브랜드 시스템.",
    note: "추상적인 AI 지능을 장식적 신호보다 정보의 선명도와 정렬, 대비로 표현해 B2B 데이터 제품이 프리미엄과 신뢰를 동시에 구축하는 방식을 참고하기 좋음.",
    tags: ["#브랜드", "#AI스타트업", "#비즈니스인텔리전스", "#데이터", "#미니멀", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/63ea2d252500427.6a50de8cc3dae.jpg",
    visual: { background: "#101419", accent: "#95f0cf", ink: "#f4f7f7", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "DATA / CLARITY / TRUST" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "Behance 공개 프로젝트가 AI 비즈니스 인텔리전스의 로고·타이포·팔레트·디지털 응용을 다수 실제 이미지로 보여 줘 데이터 명료성과 신뢰를 연결하는 B2B 브랜드 문법을 추출할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "AI활용"], "시각렌즈": ["미니멀", "모노톤", "그리드", "여백중심", "글로시", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/63ea2d252500427.6a50de8cc3dae.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "transferable_style": "정밀한 산세리프·어두운 데이터 배경·민트 포인트·정렬 중심 레이아웃·절제된 광택", "applications": "AI SaaS 로고·대시보드 브랜드 셸·세일즈 자료·디지털 캠페인" } },
      "출처": { "소스": "Behance / Tasrif Uddin·Lyro", "수집일": "2026-08-01", "수집사유": "2026-07-10 공개된 AI 스타트업 브랜드 프로젝트에서 로고·타이포·팔레트·디지털 응용과 공개 대표 JPEG가 확인됨" }
    }
  },
  {
    title: "Carbon AI Modal — 생성 범위와 설명 가능성을 한 대화상자에서 표시",
    category: "AI 디자인", date: "2026-07-31", url: "https://carbondesignsystem.com/components/modal/usage/",
    summary: "AI가 모달 전체에 관여할 때 전용 라벨과 설명 팝오버를 일관되게 적용하고, 일부 콘텐츠만 생성됐을 때는 해당 요소에만 AI 상태를 한정하는 Carbon 공식 패턴.",
    note: "AI 개입 범위를 컨테이너 전체와 부분 생성으로 나눠 표시해 사용자가 무엇을 검토해야 하는지 빠르게 판단하게 만드는 설명 가능성 패턴으로 전이하기 좋음.",
    tags: ["#AI디자인", "#모달", "#설명가능성", "#AI상태", "#디자인시스템", "#테크IT"],
    thumbnail: "https://carbondesignsystem.com/static/57bc4193daba4848eb3152b719d15243/3cbba/modal-usage-ai-presence-w.png",
    visual: { background: "#f4f4f4", accent: "#8a3ffc", ink: "#161616", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "AI / SCOPE / EXPLAIN" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Carbon 공식 문서가 AI 라벨이 포함된 실제 모달 화면과 전체·부분 AI 개입 규칙, 설명 팝오버 동작을 함께 제공해 생성형 기능의 설명 가능성 상태로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그라디언트", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/57bc4193daba4848eb3152b719d15243/3cbba/modal-usage-ai-presence-w.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "AI 범위 판단→전체 모달 또는 생성된 하위 요소에 AI 라벨 적용→라벨 선택 시 설명 팝오버→사용자 검토·행동", "ai_role": "생성된 콘텐츠의 범위와 근거 확인 진입점을 시각적으로 표시" } },
      "출처": { "소스": "Carbon Design System / Modal usage", "수집일": "2026-07-31", "수집사유": "2026-07-17 갱신된 공식 문서에서 AI presence 실제 모달 PNG와 범위별 적용 규칙이 확인됨" }
    }
  },
  {
    title: "Carbon Inline Loading States — 처리·완료·오류를 같은 자리에서 전환",
    category: "웹 스타일가이드", date: "2026-07-31", url: "https://carbondesignsystem.com/components/inline-loading/usage/",
    summary: "데이터 처리 중인 위치를 유지한 채 inactive·active·finished·error 상태와 라벨을 전환하고, 완료 후 1.5초 유지와 오류 알림 연결까지 규정한 Carbon 컴포넌트.",
    note: "저장·생성·업데이트처럼 짧은 비동기 작업에서 레이아웃 점프 없이 상태와 후속 행동을 연결하는 토큰·컴포넌트 계약으로 흡수하기 좋음.",
    tags: ["#웹스타일가이드", "#인라인로딩", "#상태전환", "#비동기UI", "#접근성", "#테크IT"],
    thumbnail: "https://carbondesignsystem.com/static/4f87738c3eff94a870c4fffb9d32898e/3cbba/inline-loading-states.png",
    visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "8px", radiusTwo: "50%", rotate: "2deg", label: "LOAD / DONE / ERROR" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Carbon 공식 문서가 네 가지 로딩 상태의 실제 PNG, 라벨 전환, 정렬·완료 시간·오류 처리 규칙을 함께 제공해 비동기 상태 컴포넌트로 시스템화할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/4f87738c3eff94a870c4fffb9d32898e/3cbba/inline-loading-states.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "상태 아이콘·16px 정렬·active/finished/error 라벨·완료 1.5초 유지", "states": "inactive→active→finished 또는 error→인라인 알림·폼 오류 처리" } },
      "출처": { "소스": "Carbon Design System / Inline loading usage", "수집일": "2026-07-31", "수집사유": "2026-07-23 갱신된 공식 컴포넌트 문서에서 실제 상태 PNG와 구현 가능한 상태·행동 규칙이 확인됨" }
    }
  },
  {
    title: "Carbon Toggle Content — 대상 라벨과 3단어 상태를 분리해 쓰는 규칙",
    category: "콘텐츠 디자인 가이드", date: "2026-07-31", url: "https://carbondesignsystem.com/components/toggle/usage/",
    summary: "토글 라벨은 영향을 받는 대상을 설명하고 상태 텍스트는 세 단어 이하의 형용사로 쓰며, 즉시 적용되지 않는 선택에는 체크박스와 버튼을 쓰도록 구분한 공식 가이드.",
    note: "설정 화면에서 대상·현재 상태·행동을 한 문구에 섞지 않게 해 번역, 접근성 이름, 제품별 설정 카피를 일관되게 운영하는 체크리스트로 바로 적용할 수 있음.",
    tags: ["#콘텐츠디자인가이드", "#토글", "#상태카피", "#설정UI", "#접근성", "#테크IT"],
    thumbnail: "https://carbondesignsystem.com/static/20cc6cc2c93aa843e54d6cbb67fdd1bd/3cbba/toggle-usage-anatomy.png",
    visual: { background: "#f4f4f4", accent: "#0f62fe", ink: "#161616", radiusOne: "50%", radiusTwo: "8px", rotate: "-2deg", label: "LABEL / STATE / ACTION" },
    review: {
      "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Carbon 공식 문서가 실제 토글 해부도와 필수 라벨·상태 텍스트 위치, 세 단어 제한, 형용사 사용과 대체 컴포넌트 기준을 함께 제시해 설정 카피에 즉시 적용할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://carbondesignsystem.com/static/20cc6cc2c93aa843e54d6cbb67fdd1bd/3cbba/toggle-usage-anatomy.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "영향 대상 라벨 작성→현재 상태를 세 단어 이하 형용사로 표시→즉시 적용 여부 확인→아니면 체크박스+버튼으로 전환", "visible_examples": "기본·소형 토글의 라벨, 스위치, 상태 텍스트, 체크 표시를 구분한 실제 해부도" } },
      "출처": { "소스": "Carbon Design System / Toggle usage", "수집일": "2026-07-31", "수집사유": "2026-07-22 갱신된 공식 문서에서 실제 토글 해부도와 구체적인 라벨·상태 카피 규칙이 확인됨" }
    }
  },
  {
    title: "Neighborhood Coffee Flow — 읽히는 5단계 공정을 한 패널에 생성",
    category: "AI 이미지 프롬프트", date: "2026-07-31", url: "https://help.runwayml.com/hc/en-us/articles/53253654113299-Creating-with-Seedream-5-0-Pro#text-graphic-coffee-flow",
    summary: "크림 배경, 테라코타·포레스트 그린, 라인 아이콘과 현대적 산세리프로 커피 공정을 5단계 수평 인포그래픽으로 생성한 공식 Seedream 5.0 Pro 결과.",
    note: "제목·단계명·아이콘·색·레이아웃을 한 프롬프트에서 명시해 온보딩, 서비스 프로세스, 기술 파이프라인 설명 그래픽의 초안을 빠르게 만드는 데 유용함.",
    prompt: "A clean, single-panel infographic titled \"Neighborhood Coffee Co: From Bean to Cup\" with a horizontal five-step process flow: \"1. Sourced\" \"2. Roasted\" \"3. Ground\" \"4. Brewed\" \"5. Served,\" each with a simple line-icon above it. Warm cream background, terracotta and forest-green accent colors, modern sans-serif typography, small-batch coffee shop branding aesthetic.",
    tags: ["#AI이미지프롬프트", "#인포그래픽", "#프로세스", "#타이포그래피", "#그리드", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/53289784398739",
    visual: { background: "#f4ead7", accent: "#b5543c", ink: "#234536", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "FLOW / TYPE / ICON" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Seedream 5.0 Pro 모델·해상도와 비율 설정·결과 PNG를 제공해 텍스트가 포함된 단계형 인포그래픽으로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "어스톤", "그리드", "여백중심", "매트", "따뜻"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53289784398739", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A clean, single-panel infographic titled \"Neighborhood Coffee Co: From Bean to Cup\" with a horizontal five-step process flow: \"1. Sourced\" \"2. Roasted\" \"3. Ground\" \"4. Brewed\" \"5. Served,\" each with a simple line-icon above it. Warm cream background, terracotta and forest-green accent colors, modern sans-serif typography, small-batch coffee shop branding aesthetic.", "tool_model": "Runway Seedream 5.0 Pro", "params": "Text to Image·1K/2K·1:1/4:3/3:4/16:9/9:16/3:2/2:3·기본 16:9·기본 4 outputs·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/53289784398739", "fragment_map": [{ "조각": "clean, single-panel infographic", "효과": "공정 전체를 하나의 독립 패널에 고정" }, { "조각": "horizontal five-step process flow", "효과": "좌→우로 읽는 5단계 정보 계층 생성" }, { "조각": "simple line-icon above it", "효과": "각 단계명 위에 동일 굵기의 시각 표식 배치" }, { "조각": "warm cream ... terracotta and forest-green", "효과": "따뜻한 바탕과 두 보조색으로 브랜드 일관성 확보" }] } },
      "출처": { "소스": "Runway / Creating with Seedream 5.0 Pro", "수집일": "2026-07-31", "수집사유": "2026-07-08 갱신된 공식 모델 가이드에서 전체 프롬프트·모델·설정·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Liquid Chrome AR Intrusion — 일상 도시에 전기 블루 CGI를 침투",
    category: "AI 이미지 프롬프트", date: "2026-07-31", url: "https://prompthero.com/prompt/eb697bc5c34-riverflow-riverflow-25-imageanalysis-subjectmatter-mainsubject-a-sunny-ordinary-russian-street-with-trolleybus-wires-and-old-buildings-daytime-but-a-huge-liquid-chrome",
    summary: "낮은 시점의 일상 거리 위로 전기 블루 액체 크롬 조형물이 전선과 하늘을 가르며 솟는 장면을 실사 휴대폰 질감과 무결점 CGI의 대비로 통제한 공개 결과.",
    note: "현실 배경과 합성 레이어의 재질·엣지·광원을 의도적으로 다르게 정의해 AR, 공간 컴퓨팅, 미래형 인터페이스 캠페인의 침투형 키비주얼로 전이하기 좋음.",
    prompt: `{"image_analysis":{"subject_matter":{"main_subject":"A sunny ordinary Russian street with trolleybus wires and old buildings, daytime — but a huge liquid-chrome 3D AR sculpture, like a frozen blue splash crossed with a winged figure, erupts upward through the wires as if rendered into the real city","visible_features":["real street, marshrutka, pedestrians","massive glossy blue 3D liquid form rising","white sketchy energy lines trailing"],"digital_layer":"an AR / 3D-rendered chrome creature composited into a real phone-shot street"},"composition_and_layout":{"type":"vertical phone video still, low angle up","framing":"AR form dominating sky, street below","background":"blue sky, city facades"},"aesthetic_style":{"core_aesthetics":["AR intrusion","Cyber-gothic","Web 3D"],"visual_artifacts":{"texture":"phone-video grain on the real, flawless CGI on the form","edges":"hard seam between real and rendered"}},"color_palette":{"dominant":"bright real-city daylight","accents":["electric chrome blue","white energy streaks"],"lighting":"natural daylight on street, self-lit CGI"},"mood_and_vibe":{"atmosphere":"something divine rendering itself into ordinary reality","keywords":["apparition","AR","intrusion"]},"negative":"no text, no letters, no captions, no watermark, no logo"}}`,
    tags: ["#AI이미지프롬프트", "#블루톤", "#액체크롬", "#AR", "#3D", "#테크IT"],
    thumbnail: "https://cdn.prompthero.com/ycrrz6dnvmah724a280ezf2kql-riverflow-riverflow-25-imageanalysis-subjectmatter-mainsubject-a-sunny-ordinary-russian-street-with-trolleybus-wires-and-old-buildings-daytime-but-a-huge-liquid-chrome.jpeg",
    visual: { background: "#72b8ee", accent: "#1557ff", ink: "#f7fbff", radiusOne: "50%", radiusTwo: "24px", rotate: "-3deg", label: "AR / CHROME / BLUE" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "PromptHero 공개 페이지가 전체 구조화 프롬프트·Riverflow 2.5 모델·832×1248 JPG 설정·공개 결과 JPEG를 함께 제공해 현실과 블루 CGI의 재질 대비를 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["3D", "하이채도", "중앙집중", "글로시", "차가움"], "시각아티팩트_url": "https://cdn.prompthero.com/ycrrz6dnvmah724a280ezf2kql-riverflow-riverflow-25-imageanalysis-subjectmatter-mainsubject-a-sunny-ordinary-russian-street-with-trolleybus-wires-and-old-buildings-daytime-but-a-huge-liquid-chrome.jpeg", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": `{"image_analysis":{"subject_matter":{"main_subject":"A sunny ordinary Russian street with trolleybus wires and old buildings, daytime — but a huge liquid-chrome 3D AR sculpture, like a frozen blue splash crossed with a winged figure, erupts upward through the wires as if rendered into the real city","visible_features":["real street, marshrutka, pedestrians","massive glossy blue 3D liquid form rising","white sketchy energy lines trailing"],"digital_layer":"an AR / 3D-rendered chrome creature composited into a real phone-shot street"},"composition_and_layout":{"type":"vertical phone video still, low angle up","framing":"AR form dominating sky, street below","background":"blue sky, city facades"},"aesthetic_style":{"core_aesthetics":["AR intrusion","Cyber-gothic","Web 3D"],"visual_artifacts":{"texture":"phone-video grain on the real, flawless CGI on the form","edges":"hard seam between real and rendered"}},"color_palette":{"dominant":"bright real-city daylight","accents":["electric chrome blue","white energy streaks"],"lighting":"natural daylight on street, self-lit CGI"},"mood_and_vibe":{"atmosphere":"something divine rendering itself into ordinary reality","keywords":["apparition","AR","intrusion"]},"negative":"no text, no letters, no captions, no watermark, no logo"}}`, "tool_model": "Riverflow 2.5", "params": "Image·832×1248·JPG·세로 2:3 근사·공개 seed 없음", "output_url": "https://cdn.prompthero.com/ycrrz6dnvmah724a280ezf2kql-riverflow-riverflow-25-imageanalysis-subjectmatter-mainsubject-a-sunny-ordinary-russian-street-with-trolleybus-wires-and-old-buildings-daytime-but-a-huge-liquid-chrome.jpeg", "fragment_map": [{ "조각": "massive glossy blue 3D liquid form rising", "효과": "전기 블루의 유광 액체 조형물을 화면 중심에 수직 배치" }, { "조각": "vertical phone video still, low angle up", "효과": "거리와 하늘을 함께 잡는 낮은 세로 시점" }, { "조각": "phone-video grain on the real, flawless CGI on the form", "효과": "현실 레이어의 그레인과 CGI 표면의 매끈함을 분리" }, { "조각": "natural daylight on street, self-lit CGI", "효과": "환경광과 자체 발광의 이중 조명 체계 생성" }] } },
      "출처": { "소스": "PromptHero / @rewera", "수집일": "2026-07-31", "수집사유": "2026-06-24 공개된 비주얼 우선 소스에서 전체 프롬프트·모델·설정·200 응답 결과 JPEG와 실제 블루 CGI가 확인됨" }
    }
  },
  {
    title: "Crane Down to Glowing Monitor — 고립된 작업자를 수직 하강으로 발견",
    category: "AI 영상 프롬프트", date: "2026-07-31", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#crane-glowing-monitor",
    summary: "어두운 사무실 위에서 카메라가 부드럽게 내려와 빛나는 모니터를 응시하는 인물의 얼굴에서 멈추며 저대비 색보정으로 고립감을 만든 공식 Gen-4.5 결과.",
    note: "수직 카메라 경로와 단일 발광 화면만으로 개발자 작업, 보안 관제, 데이터 운영처럼 정적인 기술 업무에 발견과 긴장을 부여하는 도입 숏으로 활용하기 좋음.",
    prompt: "A crane/jib shot moves smoothly downwards, revealing a lone figure hunched over a desk in a dimly lit office, the camera stopping to frame their face as they stare intently at a glowing monitor, the scene bathed in a moody color grade with low contrast, emphasizing their isolation.",
    tags: ["#AI영상프롬프트", "#Gen45", "#크레인숏", "#모니터", "#저대비", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504755859",
    visual: { background: "#191d24", accent: "#78b8d8", ink: "#f4f7f8", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "CRANE / SCREEN / ISOLATION" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 하강 크레인, 정지 지점, 모니터 광원과 저대비 색보정을 독립 제어어로 재사용하게 한다.",
      "metadata": { "정보렌즈": ["AI활용", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["모노톤", "중앙집중", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504755859", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A crane/jib shot moves smoothly downwards, revealing a lone figure hunched over a desk in a dimly lit office, the camera stopping to frame their face as they stare intently at a glowing monitor, the scene bathed in a moody color grade with low contrast, emphasizing their isolation.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Crane/Jib 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504755859", "fragment_map": [{ "조각": "crane/jib shot moves smoothly downwards", "효과": "높은 위치에서 책상으로 이어지는 안정적 수직 하강" }, { "조각": "camera stopping to frame their face", "효과": "이동을 멈추고 인물의 집중 표정을 최종 초점으로 고정" }, { "조각": "stare intently at a glowing monitor", "효과": "화면을 단일 동기와 발광 광원으로 사용" }, { "조각": "moody color grade with low contrast", "효과": "어두운 환경의 경계를 부드럽게 눌러 고립감 강화" }] } },
      "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-07-31", "수집사유": "2026-06-27 갱신된 공식 카메라 가이드에서 전체 프롬프트·모델·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Elastic Building Static Shot — 고정 프레임 안에서 건축만 유기적으로 변형",
    category: "AI 영상 프롬프트", date: "2026-07-31", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#static-elastic-building",
    summary: "카메라는 완전히 고정한 채 아파트 건물만 원형과 유기적 추상 형태로 늘어나고 휘게 해, 시점 이동 없이 변형 자체를 읽히게 만든 공식 Gen-4.5 결과.",
    note: "카메라 운동과 피사체 운동을 명시적으로 분리해 클라우드 확장, 적응형 UI, 가변 인프라처럼 시스템 변화의 전후를 한 구도에서 비교하는 모션 문법으로 유용함.",
    prompt: "Static, completely still establishing shot remains motionless, focused on a single apartment building. The apartment building begins to stretch and curve with an elastic-like quality, bending into circular shapes and impossibly stretching and bending into an organic abstract shape. The camera is entirely motionless for the duration of the scene, with movement only occurring from the building moving within the locked perspective.",
    tags: ["#AI영상프롬프트", "#Gen45", "#고정카메라", "#건축변형", "#모션제어", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515634835",
    visual: { background: "#d8d5cf", accent: "#535b61", ink: "#1c2023", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "STATIC / ELASTIC / TRANSFORM" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 고정 카메라, 잠긴 원근, 탄성 변형과 원형·유기 형태를 재현 가능한 모션 조각으로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "인터랙션"], "시각렌즈": ["미니멀", "모노톤", "중앙집중", "매트", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515634835", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Static, completely still establishing shot remains motionless, focused on a single apartment building. The apartment building begins to stretch and curve with an elastic-like quality, bending into circular shapes and impossibly stretching and bending into an organic abstract shape. The camera is entirely motionless for the duration of the scene, with movement only occurring from the building moving within the locked perspective.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Static camera 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515634835", "fragment_map": [{ "조각": "Static, completely still establishing shot", "효과": "장면 전체의 기준 구도를 완전히 고정" }, { "조각": "stretch and curve with an elastic-like quality", "효과": "건물 표면과 구조에 고무 같은 연속 변형 적용" }, { "조각": "bending into circular shapes ... organic abstract shape", "효과": "직선 건축을 원형·유기 실루엣으로 단계적 변환" }, { "조각": "movement only occurring from the building", "효과": "환경·카메라 운동을 억제하고 피사체 변화만 분리" }] } },
      "출처": { "소스": "Runway / Camera Terms, Prompts, & Examples", "수집일": "2026-07-31", "수집사유": "2026-06-27 갱신된 공식 카메라 가이드에서 전체 프롬프트·모델·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "KONTOUR Studios Web — 검정·시그널 레드로 서비스 계층을 압축",
    category: "웹·앱 UI", date: "2026-07-31", url: "https://www.behance.net/gallery/252611015/KONTOUR-STUDIOS-Website-Brand-Identity",
    summary: "고대비 검정·시그널 레드, 큰 제목과 짧은 서비스 태그, 프로젝트 메타데이터를 조합해 크리에이티브 스튜디오의 포지셔닝과 작업 탐색을 빠르게 연결한 웹 UI.",
    note: "브랜드 강도가 높은 색과 타이포를 유지하면서 서비스·프로젝트·상세 메타를 그리드로 분리해 에이전시·개발 스튜디오 포트폴리오의 정보 밀도를 설계하기 좋음.",
    tags: ["#웹앱UI", "#포트폴리오", "#고대비", "#그리드", "#에이전시", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/55442b252611015.6a5443964aa51.png",
    visual: { background: "#090909", accent: "#f22d22", ink: "#f5f5f2", radiusOne: "0", radiusTwo: "24px", rotate: "2deg", label: "STUDIO / GRID / RED" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Behance 프로젝트가 실제 데스크톱 웹 화면과 브랜드 색·타입·그리드·프로젝트 정보 계층을 함께 공개해 스튜디오 포트폴리오의 재사용 가능한 UI 시스템으로 분석할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["브루탈리즘", "모노톤", "하이채도", "그리드", "고밀도", "하드라이트"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/55442b252611015.6a5443964aa51.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "screens": "브랜드 히어로·서비스 태그·프로젝트 리뷰·작업 메타·웹 적용", "reusable_pattern": "검정 바탕+시그널 레드 행동점+대형 제목+짧은 태그+세부 메타 그리드" } },
      "출처": { "소스": "Behance / KONTOUR STUDIOS", "수집일": "2026-07-31", "수집사유": "2026-07-13 공개된 프로젝트에서 실제 웹 화면, 정보 계층과 1400px 공식 대표 WebP가 확인됨" }
    }
  },
  {
    title: "Galaxy S25 Material Frames — 스마트폰 표면을 색·질감 실험의 무대로 전환",
    category: "비주얼 그래픽", date: "2026-07-31", url: "https://www.behance.net/gallery/249693711/Galaxy-S25-S25-%28Personal-Project%29",
    summary: "스마트폰의 카메라 링, 금속 프레임, 유리와 화면을 다양한 각도·재질·조명으로 재구성해 제품 형태를 유지하면서도 독립적인 3D 모션 스타일프레임으로 확장한 개인 연구.",
    note: "하드웨어의 고정된 비례와 디테일을 보존한 채 표면 재질·반사·카메라·색만 변주해 반도체·디바이스 캠페인의 제품 중심 비주얼 시스템을 설계하기 좋음.",
    tags: ["#비주얼그래픽", "#3D", "#제품모션", "#스마트폰", "#재질", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/41e917249693711.6a0ed7d9ba977.png",
    visual: { background: "#d8d9dc", accent: "#6f52d9", ink: "#121316", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "DEVICE / MATERIAL / FRAME" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Behance 프로젝트가 스마트폰 형태를 다양한 각도에서 유지하며 금속·유리·화면 재질과 조명·모션 스타일프레임을 다수 공개해 하드웨어 캠페인의 시각 규칙을 추출할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "타이포그래피"], "시각렌즈": ["3D", "모노톤", "비대칭", "글로시", "럭셔리", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/41e917249693711.6a0ed7d9ba977.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "카메라 링·금속 프레임·유리 패널·제품 실루엣·근접 카메라·재질별 하이라이트", "reusable_rule": "제품 비례는 고정하고 카메라 각도, 표면 재질, 키·림 라이트와 색만 장면별 변주" } },
      "출처": { "소스": "Behance / Galaxy S25 S25+ Personal Project", "수집일": "2026-07-31", "수집사유": "2026-07-02 공개된 프로젝트에서 실제 3D 스타일프레임·모션 테스트와 1398px 공식 대표 WebP가 확인됨" }
    }
  },
  {
    title: "ENRICH Identity — 모듈 교체 그리드로 매번 다른 브랜드 패턴 생성",
    category: "브랜드", date: "2026-07-31", url: "https://www.behance.net/gallery/252109841/ENRICH-Brand-Identity-System",
    summary: "정사각 그리드의 각 셀을 승인된 도형과 투명 요소로 자동 교체해 반복되지 않으면서도 일관된 패턴을 만들고, 전진 화살표·이중 언어 타이포·3D 그래픽까지 확장한 B2B 아이덴티티.",
    note: "브랜드 자산을 고정 템플릿이 아니라 승인 요소의 조합 규칙으로 정의해 캠페인·프레젠테이션·디지털 화면에 확장 가능한 생성형 브랜드 시스템으로 참고하기 좋음.",
    tags: ["#브랜드", "#브랜드시스템", "#모듈그리드", "#생성패턴", "#B2B", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/af4bfe252109841.6a46d3960895e.jpg",
    visual: { background: "#f3f1ed", accent: "#ef5a2e", ink: "#151515", radiusOne: "24px", radiusTwo: "8px", rotate: "3deg", label: "GRID / REPLACE / GROW" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Behance 프로젝트가 정사각 모듈 교체 규칙, 승인 도형·투명 요소, 전진 화살표, 이중 언어 타입과 실제 디지털·인쇄 응용을 공개해 생성형 브랜드 문법을 추출할 수 있다.",
      "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["3D", "하이채도", "그리드", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/af4bfe252109841.6a46d3960895e.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "identity_system": "e+전진 화살표 심벌·Jali 이중 언어 타입·정사각 모듈·승인 도형·투명 요소·3D 응용", "transferable_rule": "그리드 셀을 승인 자산으로 자동 교체하되 크기와 투명도만 달리해 비반복 패턴 생성" } },
      "출처": { "소스": "Behance / ENRICH Brand Identity System", "수집일": "2026-07-31", "수집사유": "2026-07-12 공개된 프로젝트에서 패턴 생성 규칙, 실제 응용과 1400px 공식 대표 WebP가 확인됨" }
    }
  },
  {
    title: "Runway Enhance Prompt — 짧은 의도를 카메라·조명·질감·모션 지시로 확장",
    category: "AI 디자인", date: "2026-07-30", url: "https://help.runwayml.com/hc/en-us/articles/50012632982163-Enhancing-your-Prompts",
    summary: "생성 입력창의 별 아이콘으로 짧은 문장을 이미지·영상 모델에 맞는 카메라, 조명, 질감, 움직임, 무드 지시로 확장하고 사용자가 다시 편집하게 하는 공식 워크플로.",
    note: "AI가 제안한 상세 지시를 최종값이 아닌 검토 가능한 초안으로 남겨, 초보자의 진입 장벽을 낮추면서도 크리에이티브 디렉터가 통제권을 유지하는 입력 패턴을 참고하기 좋음.",
    tags: ["#AI디자인", "#프롬프트보조", "#생성UI", "#카메라언어", "#검토흐름", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/50012632974611",
    visual: { background: "#17171a", accent: "#c9ff67", ink: "#f7f7f4", radiusOne: "24px", radiusTwo: "8px", rotate: "-2deg", label: "INTENT / ENHANCE / REVIEW" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 실제 생성 입력 UI와 4단계 조작, 자동으로 보강되는 카메라·조명·질감·모션 항목을 함께 공개해 검토 가능한 프롬프트 보조 패턴으로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "고밀도", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/50012632974611", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "짧은 의도 입력→별 아이콘 선택→모델 최적화 상세 지시 생성→사용자 검토·수정→생성", "ai_role": "카메라·조명·질감·모션·무드의 누락을 보완하되 편집 가능한 초안으로 반환" } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/50012632982163-Enhancing-your-Prompts", "수집일": "2026-07-30", "수집사유": "최근 공개된 공식 기능 가이드에서 실제 입력 UI, 단계별 조작과 200 응답 PNG가 확인됨" }
    }
  },
  {
    title: "VA Card Status Error — 문제·해결 행동·접근성 공지를 한 카드 상태로 결합",
    category: "콘텐츠 디자인 가이드", date: "2026-07-30", url: "https://design.va.gov/components/card/card-status/",
    summary: "누락 상태 라벨, 무엇이 잘못됐는지와 고치는 방법, 본문과 단일 행동 링크를 빨간 테두리 카드에 묶고 스크린리더 자동 공지까지 규정한 VA 공식 패턴.",
    note: "오류 카피를 문제 설명에서 끝내지 않고 해결 행동과 구체적 링크 라벨까지 한 컴포넌트 계약으로 묶어 신청·계정·데이터 수정 흐름의 콘텐츠 품질을 일관되게 만들기 좋음.",
    tags: ["#콘텐츠디자인가이드", "#오류메시지", "#상태카드", "#접근성", "#폼디자인", "#테크IT"],
    thumbnail: "https://design.va.gov/images/components/card-status/card-status-with-error.png",
    visual: { background: "#f3f6fa", accent: "#b50909", ink: "#1b1b1b", radiusOne: "8px", radiusTwo: "24px", rotate: "2deg", label: "STATUS / ERROR / RECOVERY" },
    review: {
      "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "VA 공식 문서가 실제 오류 상태 PNG와 상태·제목·오류·본문·링크 구조, 50자 제목·행동형 카피·role=alert·aria-describedby 규칙을 함께 제공해 폼 오류 카드에 즉시 적용할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "절제"], "시각아티팩트_url": "https://design.va.gov/images/components/card-status/card-status-with-error.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "상태 라벨→무엇이 잘못됐는지→고치는 방법→설명 본문→구체적인 단일 행동 링크", "visible_examples": "빨간 테두리·상태 태그·인라인 오류·본문·행동 링크가 결합된 Card Status 오류 상태" } },
      "출처": { "소스": "https://design.va.gov/components/card/card-status/", "수집일": "2026-07-30", "수집사유": "최근 90일 내 갱신된 공식 컴포넌트 문서에서 실제 오류 상태 PNG와 콘텐츠·접근성 구현 규칙이 확인됨" }
    }
  },
  {
    title: "Astronaut Helmet Reflection — 중앙 인물과 헬멧 속 우주를 한 초점으로 고정",
    category: "AI 이미지 프롬프트", date: "2026-07-30", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#centered-astronaut",
    summary: "중앙 배치한 우주비행사, 헬멧에 비친 심우주, 위쪽의 희미한 광원과 얕은 심도를 최소 문장으로 통제한 공식 Gen-4 Image 결과.",
    note: "제품·인물을 정면 영웅 구도로 고정하면서 반사면 안에 기술 세계관을 압축해 반도체, 우주산업, 미래형 인터페이스 캠페인의 키비주얼 문법으로 전이하기 좋음.",
    prompt: "cinematic portrait of an astronaut in center frame. deep space visible in helmet reflection. shadows, lit by dim light from above. shallow depth of field",
    tags: ["#AI이미지프롬프트", "#우주비행사", "#헬멧반사", "#중앙구도", "#얕은심도", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148070574611",
    visual: { background: "#141821", accent: "#6f8db8", ink: "#f2f4f7", radiusOne: "50%", radiusTwo: "24px", rotate: "2deg", label: "ASTRONAUT / REFLECTION / CENTER" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 제공하고 중앙 배치, 헬멧 반사, 상부 저조도와 얕은 심도를 독립 통제어로 재사용하게 한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["미니멀", "중앙집중", "하드라이트", "글로시", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148070574611", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cinematic portrait of an astronaut in center frame. deep space visible in helmet reflection. shadows, lit by dim light from above. shallow depth of field", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Centered subject 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148070574611", "fragment_map": [{ "조각": "astronaut in center frame", "효과": "우주복 인물을 화면 중앙의 대칭적 영웅 피사체로 고정" }, { "조각": "deep space visible in helmet reflection", "효과": "유리 헬멧 반사면 안에 심우주 환경을 압축" }, { "조각": "lit by dim light from above", "효과": "상부의 약한 키라이트로 헬멧과 어깨 윤곽 분리" }, { "조각": "shallow depth of field", "효과": "배경 정보를 흐리고 얼굴·헬멧에 초점 집중" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-30", "수집사유": "최근 갱신된 공식 프롬프트 가이드에서 전체 프롬프트·모델·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "RUNWAY Theater Marquee — 대칭 극장과 네온 간판에 읽히는 문자를 배치",
    category: "AI 이미지 프롬프트", date: "2026-07-30", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#theater-marquee-text",
    summary: "극장 정면의 대형 네온 간판에 RUNWAY와 FRAMES 문자를 명시하고 대칭 구도로 고정해 텍스트가 중심이 되는 공식 Gen-4 Image 결과.",
    note: "이미지 생성에서 장식과 문자를 따로 지시하지 않고 장소·간판·표시 문구·대칭을 한 구조로 묶어 행사 타이틀, 제품 출시, 개발자 컨퍼런스 그래픽을 설계할 때 유용함.",
    prompt: "cinematic still of a theater with a large neon sign that reads RUNWAY. the marquee boldly spells the word FRAMES. symmetrical",
    tags: ["#AI이미지프롬프트", "#네온사인", "#타이포그래피", "#대칭구도", "#이벤트그래픽", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148070603411",
    visual: { background: "#21162e", accent: "#f2b04d", ink: "#fff2d4", radiusOne: "24px", radiusTwo: "0", rotate: "-2deg", label: "MARQUEE / TYPE / SYMMETRY" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 제공하고 극장, 대형 네온 간판, 두 단계 문자와 대칭 구도를 텍스트 중심 생성 조각으로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "타이포그래피", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "하이채도", "중앙집중", "하드라이트", "럭셔리"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148070603411", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cinematic still of a theater with a large neon sign that reads RUNWAY. the marquee boldly spells the word FRAMES. symmetrical", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Theater marquee 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148070603411", "fragment_map": [{ "조각": "cinematic still of a theater", "효과": "극장 정면을 영화적 야간 장면으로 설정" }, { "조각": "large neon sign that reads RUNWAY", "효과": "대형 발광 간판에 첫 번째 읽을 문구 지정" }, { "조각": "marquee boldly spells the word FRAMES", "효과": "마키 영역에 굵고 명확한 두 번째 타이틀 지정" }, { "조각": "symmetrical", "효과": "간판과 건축 축을 중앙에 맞춘 정면 대칭 구도" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-30", "수집사유": "최근 갱신된 공식 프롬프트 가이드에서 전체 프롬프트·모델·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Cowboy Fall at Golden Hour — 림라이트와 낙마 동작을 중간 숏에 고정",
    category: "AI 영상 프롬프트", date: "2026-07-30", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#medium-cowboy-fall",
    summary: "황금 시간대의 먼지 낀 환경에서 말이 몸을 비틀며 일어서고 카우보이가 왼쪽으로 떨어지는 순간을 중간 숏·역광·림라이트로 통제한 공식 Gen-4.5 결과.",
    note: "주체와 탈것의 서로 다른 동작, 낙하 방향, 역광과 먼지 레이어를 한 문장에 분리해 로보틱스·모빌리티·게임 트레일러의 고에너지 액션 숏 설계에 참고하기 좋음.",
    prompt: "Medium shot of a cowboy perched on a horse in a dusty environment. The horse rears violently, its body twisting, causing the cowboy to lose his seat and begin to fall off to the left. Backlit, western epic, cinematic, high contrast, golden hour, dusty, warm amber, deep orange, rich brown, atmospheric, dramatic backlighting, rim light, silhouette, soft glow, high contrast shadows.",
    tags: ["#AI영상프롬프트", "#Gen45", "#미디엄숏", "#낙하동작", "#림라이트", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/46972905969171",
    visual: { background: "#38271e", accent: "#e58b3c", ink: "#fff0d2", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "REAR / FALL / RIM LIGHT" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 중간 숏, 말의 비틀림, 왼쪽 낙하, 먼지·역광·림라이트를 재현 가능한 액션 조각으로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름"], "시각렌즈": ["에디토리얼", "어스톤", "비대칭", "하드라이트", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46972905969171", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Medium shot of a cowboy perched on a horse in a dusty environment. The horse rears violently, its body twisting, causing the cowboy to lose his seat and begin to fall off to the left. Backlit, western epic, cinematic, high contrast, golden hour, dusty, warm amber, deep orange, rich brown, atmospheric, dramatic backlighting, rim light, silhouette, soft glow, high contrast shadows.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Medium shot 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46972905969171", "fragment_map": [{ "조각": "Medium shot ... in a dusty environment", "효과": "인물과 말의 상반신 동작, 먼지 공간을 함께 유지" }, { "조각": "horse rears violently, its body twisting", "효과": "말의 수직 상승과 몸통 회전을 결합" }, { "조각": "cowboy ... fall off to the left", "효과": "인물의 균형 상실과 왼쪽 낙하 방향 고정" }, { "조각": "dramatic backlighting, rim light, silhouette", "효과": "황금빛 역광으로 두 피사체의 윤곽과 먼지 분리" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples", "수집일": "2026-07-30", "수집사유": "최근 갱신된 공식 카메라 예시에서 전체 프롬프트·모델·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Egret Feather Push-in — 조감 시점에서 깃털의 미세 떨림을 추적",
    category: "AI 영상 프롬프트", date: "2026-07-30", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples#birds-eye-egret",
    summary: "백로의 몸통과 주 날개깃을 정확한 조감 구도로 프레이밍하고 미세한 떨림과 매우 느린 푸시인으로 층진 흰 깃털 표면을 탐색하는 공식 Gen-4.5 결과.",
    note: "형태 변화가 적은 소재에서 미세 진동과 느린 카메라 전진만으로 정보를 드러내 반도체 웨이퍼, 섬유, 바이오 소재처럼 정교한 표면 연구를 보여 주는 숏에 전이하기 좋음.",
    prompt: "The central body and primary feathers of a majestic white egret, viewed from a bird's eye view directly from above, are meticulously framed, showcasing the pristine texture and layered structure of its plumage. The egret's body shivers slightly, causing a minute ripple through its feathers, suggesting preening or adjusting, while the camera performs a very slow, controlled push-in, focusing on the feather details.",
    tags: ["#AI영상프롬프트", "#Gen45", "#조감", "#표면질감", "#슬로우푸시인", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/46974654696723",
    visual: { background: "#e9eceb", accent: "#b9c9ce", ink: "#24292b", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "FEATHER / RIPPLE / PUSH IN" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 조감 프레이밍, 깃털 층, 미세 떨림과 느린 푸시인을 표면 탐색 모션으로 재현하게 한다.",
      "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "중앙집중", "소프트확산광", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46974654696723", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "The central body and primary feathers of a majestic white egret, viewed from a bird's eye view directly from above, are meticulously framed, showcasing the pristine texture and layered structure of its plumage. The egret's body shivers slightly, causing a minute ripple through its feathers, suggesting preening or adjusting, while the camera performs a very slow, controlled push-in, focusing on the feather details.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Bird's eye view 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46974654696723", "fragment_map": [{ "조각": "bird's eye view directly from above", "효과": "피사체의 중심축과 날개 구조를 수직 조감으로 고정" }, { "조각": "pristine texture and layered structure", "효과": "흰 깃털의 겹과 표면 결을 주요 정보로 강조" }, { "조각": "body shivers slightly ... minute ripple", "효과": "구도를 유지한 채 깃털 사이로 미세한 파동 전달" }, { "조각": "very slow, controlled push-in", "효과": "표면 세부를 향해 안정적으로 느리게 전진" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples", "수집일": "2026-07-30", "수집사유": "최근 갱신된 공식 카메라 예시에서 전체 프롬프트·모델·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Sedai.io — 자율 클라우드를 3D 시스템과 다크·라이트 제품 화면으로 설명",
    category: "웹·앱 UI", date: "2026-07-30", url: "https://www.behance.net/gallery/249646897/Sedaiio",
    summary: "스스로 최적화하는 클라우드 플랫폼의 추상 개념을 3D 오브젝트, 다크·라이트 테마, 모듈형 CMS 웹사이트와 기술 설명 영상으로 연결한 제품 경험.",
    note: "신뢰가 필요한 B2B 클라우드 기능을 추상 3D에만 맡기지 않고 가치 제안·제품 화면·설명 영상의 정보 밀도를 단계적으로 높여 기술과 효용을 함께 이해시키는 방식이 좋음.",
    tags: ["#웹앱UI", "#클라우드", "#SaaS", "#3D", "#다크모드", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e473b3249646897.6a0da0cfb5500.jpg",
    visual: { background: "#17181d", accent: "#8ce1c5", ink: "#f6f6f4", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "CLOUD / 3D / AUTONOMOUS" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공개 프로젝트가 자율 클라우드의 가치 제안, 실제 웹 화면, 라이트·다크 테마, 3D 그래픽, CMS 구조와 성능 최적화 맥락을 함께 보여 제품 UI 시스템으로 전이할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "브랜드일관성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["3D", "그라디언트", "그리드", "고밀도", "글로시", "차가움"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e473b3249646897.6a0da0cfb5500.jpg", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "추상 클라우드 가치 제안→3D 원리 시각화→제품 기능 화면→설명 영상·전환", "system": "라이트·다크 테마, 3D 기반 비주얼, 유연한 CMS 모듈과 최적화된 이미지·영상·셰이더" } },
      "출처": { "소스": "Behance / Sedai.io project", "수집일": "2026-07-30", "수집사유": "최근 90일 내 공개된 프로젝트에서 실제 클라우드 제품 웹 화면, 3D 시스템과 1400px 공식 대표 JPEG가 확인됨" }
    }
  },
  {
    title: "HUAWEI MATEPAD PRO MAX — 억제된 조명과 모션으로 하드웨어 형태를 부각",
    category: "비주얼 그래픽", date: "2026-07-30", url: "https://www.behance.net/gallery/249574703/HUAWEI-MATEPAD-PRO-MAX",
    summary: "경량 설계와 하드웨어 성능의 균형을 미니멀한 구도, 절제된 광원, 유동적 모션과 정밀한 제품 CGI로 보여 주는 태블릿 캠페인 비주얼.",
    note: "기능 아이콘이나 수치보다 얇은 단면, 금속 표면, 화면과 프레임의 경계를 광원과 카메라 이동으로 읽게 해 프리미엄 하드웨어 런칭 영상의 장면 밀도를 조절하는 법을 참고하기 좋음.",
    tags: ["#비주얼그래픽", "#하드웨어", "#태블릿", "#제품CGI", "#미니멀", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a0bd2b249574703.6a4275342653a.png",
    visual: { background: "#eef0f1", accent: "#77838f", ink: "#14171a", radiusOne: "8px", radiusTwo: "24px", rotate: "-2deg", label: "HARDWARE / LIGHT / MOTION" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공개 프로젝트가 태블릿의 얇은 비례와 금속·유리 표면을 미니멀 구도, 통제된 광원, 유동적 모션으로 반복 적용한 3D 캠페인 시스템과 고해상도 결과를 보여 준다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "타이포그래피"], "시각렌즈": ["3D", "미니멀", "모노톤", "중앙집중", "하드라이트", "글로시", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a0bd2b249574703.6a4275342653a.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "style_system": "밝은 중성 배경·금속/유리 제품 CGI·절제된 키/림라이트·느린 제품 중심 모션", "applications": "제품 단면·후면 카메라·디스플레이·액세서리의 런칭 필름과 스틸 프레임" } },
      "출처": { "소스": "Behance / MILLARC CGI", "수집일": "2026-07-30", "수집사유": "최근 90일 내 공개된 프로젝트에서 실제 제품 CGI·모션 프레임과 1400px 공식 대표 PNG가 확인됨" }
    }
  },
  {
    title: "Verabid — 체크 심볼과 규칙형 레이아웃으로 신뢰를 만드는 프롭테크 아이덴티티",
    category: "브랜드", date: "2026-07-30", url: "https://www.behance.net/gallery/252984105/Verabid-logo-brand-Identity-modern-check-mark-tech",
    summary: "부동산 소프트웨어의 단순성·신뢰성·현대 기술을 체크 형태의 V 심볼, 선명한 색 대비와 일관된 가이드 응용으로 연결한 테크 브랜드 시스템.",
    note: "검증을 뜻하는 익숙한 체크 제스처를 소프트웨어 이름의 이니셜과 결합해 작은 앱 아이콘부터 마케팅 화면까지 인지가 유지되는 B2B 신뢰 신호를 설계한 점이 실무적임.",
    tags: ["#브랜드", "#프롭테크", "#소프트웨어", "#체크심볼", "#브랜드가이드", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0d17d9252984105.6a5d7858b50cc.jpg",
    visual: { background: "#f5f7f6", accent: "#38c69a", ink: "#142522", radiusOne: "24px", radiusTwo: "8px", rotate: "2deg", label: "VERIFY / V / TRUST" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "공개 프로젝트가 부동산 소프트웨어의 검증·신뢰 의미를 체크형 V 심볼, 컬러, 로고 규칙과 실제 브랜드 가이드 응용으로 반복해 B2B 제품 아이덴티티에 전이 가능하다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "타이포그래피", "콘텐츠명료성"], "시각렌즈": ["미니멀", "하이채도", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0d17d9252984105.6a5d7858b50cc.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "체크 제스처와 V 이니셜을 결합한 심볼·고대비 포인트 컬러·규칙형 가이드", "applications": "로고 락업·아이콘·디지털 제품·브랜드 문서·마케팅 터치포인트" } },
      "출처": { "소스": "Behance / Verabid brand identity", "수집일": "2026-07-30", "수집사유": "2026-07-20 공개된 프로젝트에서 소프트웨어 브랜드의 시각 시스템, 실제 응용과 1400px 공식 대표 JPEG가 확인됨" }
    }
  },
  {
    title: "Gemini Omni Flash in Runway — 참조·첫 프레임·영상 편집을 한 패널에 결합",
    category: "AI 디자인", date: "2026-07-29", url: "https://help.runwayml.com/hc/en-us/articles/53031657806611-Creating-with-Gemini-Omni-Flash",
    summary: "텍스트, 첫 프레임, 최대 10개 참조 이미지와 기존 영상을 조합해 3~10초 생성·편집 결과를 만드는 Runway의 멀티모달 영상 워크플로.",
    note: "첫 프레임은 시간축의 시작점, 참조는 외형 제약, 프롬프트는 동작 제어로 역할을 분리해 복합 생성 기능의 입력 정보 구조와 오류 예방 문구를 설계할 때 유용함.",
    tags: ["#AI디자인", "#멀티모달", "#영상생성", "#참조이미지", "#워크플로", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/53056853154963",
    visual: { background: "#17171a", accent: "#b9ff66", ink: "#f5f5f2", radiusOne: "24px", radiusTwo: "0", rotate: "-2deg", label: "FRAME / REFERENCE / EDIT" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공식 가이드가 실제 입력·참조·출력 GIF와 모드별 단계, 길이·해상도·비율·비용을 함께 공개해 멀티모달 영상 생성 흐름을 제품 패턴으로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "고밀도", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/53056853154963", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "Video 탭·모델 선택→Frame 또는 Edit Video→프롬프트·첫 프레임·참조 입력→3~10초 720p 출력", "ai_role": "첫 프레임의 시간적 연속성과 여러 참조의 외형 제약을 결합해 신규 생성과 기존 영상 편집을 수행" } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/53031657806611-Creating-with-Gemini-Omni-Flash", "수집일": "2026-07-29", "수집사유": "최근 공개된 공식 가이드에서 모드별 UI 구조, 전체 예시 프롬프트와 200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "New York State Design System — 토큰·웹 컴포넌트·접근성·MCP를 묶은 공공 시스템",
    category: "웹 스타일가이드", date: "2026-07-29", url: "https://designsystem.ny.gov/",
    summary: "뉴욕주 기관 서비스용 디자인 토큰, WCAG 대응 웹 컴포넌트, Figma 라이브러리와 MCP 서버 업데이트를 하나의 공개 문서 체계로 운영하는 디자인 시스템.",
    note: "실제 서비스 제작자가 토큰·컴포넌트·접근성·Figma·개발 자동화로 바로 이동하게 해 다기관 디자인 시스템의 역할별 탐색과 도입 가치를 설명하는 방식이 명확함.",
    tags: ["#웹스타일가이드", "#디자인시스템", "#웹컴포넌트", "#접근성", "#MCP", "#테크IT"],
    thumbnail: "https://designsystem.ny.gov/assets/img/nysds_og_image.png",
    visual: { background: "#eef5f8", accent: "#154973", ink: "#182a38", radiusOne: "8px", radiusTwo: "24px", rotate: "2deg", label: "TOKENS / WCAG / COMPONENTS" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 사이트가 실제 토큰·WCAG 컴포넌트·Figma 라이브러리·코드 리소스와 2026년 7월 릴리스를 한 구조로 연결해 여러 기관이 공유할 규칙으로 즉시 흡수할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "브랜드일관성", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://designsystem.ny.gov/assets/img/nysds_og_image.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "색·간격·타이포그래피·반응형 여백과 CSS 변수", "components": "WCAG 2.1 AA 웹 컴포넌트·Figma 라이브러리·MCP 서버·접근성 가이드" } },
      "출처": { "소스": "https://designsystem.ny.gov/", "수집일": "2026-07-29", "수집사유": "2026-07-08 릴리스와 공식 1200×630 디자인 시스템 커버, 실제 컴포넌트·토큰 탐색 구조가 확인됨" }
    }
  },
  {
    title: "VA One Thing per Page — 단일 응답 폼을 주석 화면과 조건부 오류로 설명",
    category: "콘텐츠 디자인 가이드", date: "2026-07-29", url: "https://design.va.gov/patterns/ask-users-for/a-single-response",
    summary: "한 페이지에서 하나의 논리적 질문만 다루도록 폼을 나누고 라디오·설명·조건부 공개·오류 상태를 실제 주석 화면으로 규정한 VA 공식 패턴.",
    note: "인지 부하 원칙을 추상 문장으로 끝내지 않고 질문 묶기, 흐름 테스트, 명확한 후속 라벨과 개별 오류 메시지까지 연결해 복잡한 신청 폼에 바로 적용 가능함.",
    tags: ["#콘텐츠디자인가이드", "#폼디자인", "#원씽퍼페이지", "#접근성", "#오류메시지", "#테크IT"],
    thumbnail: "https://design.va.gov/images/patterns/ask-users-for/a-single-response/single-response-annotated.png",
    visual: { background: "#f4f7fb", accent: "#005ea8", ink: "#1b1b1b", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "ONE QUESTION / ONE PAGE" },
    review: {
      "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "VA 공식 가이드가 실제 주석 폼, 조건부 공개와 오류 화면, 8단계 질문 그룹화 절차, 접근성 기준을 함께 제시해 신청 폼 콘텐츠 설계에 즉시 실행할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://design.va.gov/images/patterns/ask-users-for/a-single-response/single-response-annotated.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "질문 개념 나열→페이지별 분리→카드소팅·조사→관련 묶음 구성→흐름 테스트→반복 개선", "visible_examples": "단일 라디오 응답 주석 화면·폼 설명 포함형·조건부 공개·필드별 오류 상태" } },
      "출처": { "소스": "https://design.va.gov/patterns/ask-users-for/a-single-response", "수집일": "2026-07-29", "수집사유": "2026-06-18 갱신된 공식 패턴에서 실제 주석 PNG, 프로덕션 사례와 구현·접근성 절차가 확인됨" }
    }
  },
  {
    title: "Liquid Chrome Landmark — 고전 건축 전체를 유동 금속 표면으로 치환",
    category: "AI 이미지 프롬프트", date: "2026-07-29", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#liquid-chrome-landmark",
    summary: "고전 장식 건물을 액체 크롬으로 감싸 주변 백색 석조와 대비시키고 부드러운 무지갯빛 반사를 남긴 공식 Gen-4 Image 결과.",
    note: "형태는 보존하고 표면 재질만 전환하는 지시가 반도체·하드웨어·미래 인터페이스 캠페인에서 익숙한 오브젝트를 기술적 키비주얼로 바꾸는 데 유용함.",
    prompt: "facing a classic ornate building fully encased in liquid chrome. the shiny, reflective building starkly contrasts the white stone building around it. liquid chrome with a soft iridescent sheen",
    tags: ["#AI이미지프롬프트", "#크롬", "#반사", "#건축", "#미래소재", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062184083",
    visual: { background: "#dfe3e7", accent: "#7aa7c7", ink: "#20262b", radiusOne: "24px", radiusTwo: "0", rotate: "3deg", label: "CHROME / REFLECTION / LANDMARK" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 제공하고 건축 형태, 액체 크롬, 주변 석재 대비, 무지갯빛 반사를 독립 통제어로 재사용하게 한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["3D", "모노톤", "중앙집중", "글로시", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062184083", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "facing a classic ornate building fully encased in liquid chrome. the shiny, reflective building starkly contrasts the white stone building around it. liquid chrome with a soft iridescent sheen", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Chrome 스타일 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062184083", "fragment_map": [{ "조각": "classic ornate building", "효과": "장식적 건축 실루엣과 세부 형태를 기준 오브젝트로 고정" }, { "조각": "fully encased in liquid chrome", "효과": "건물 전체 표면을 흐르는 금속 재질로 치환" }, { "조각": "starkly contrasts the white stone building around it", "효과": "반사 금속과 매트한 백색 석재의 재질 대비" }, { "조각": "soft iridescent sheen", "효과": "크롬 하이라이트에 은은한 스펙트럼 색 변화 추가" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-29", "수집사유": "최근 갱신된 공식 프롬프트 가이드에서 전체 프롬프트·모델·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Marble Hand at Sea — 파도 속 거대 조각을 삼분할로 배치한 시네마틱 정지화",
    category: "AI 이미지 프롬프트", date: "2026-07-29", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#rule-of-thirds-marble-hand",
    summary: "바다 아래에서 솟는 거대한 대리석 손과 절벽을 부분 가림·삼분할 구도·저채도 무드로 제어해 규모와 긴장을 만든 공식 결과.",
    note: "거대한 상징 오브젝트를 중앙에서 비켜 두고 파도·절벽·가림을 깊이 레이어로 사용해 클라우드 규모, 데이터 이동, 미래 인프라의 서사형 키비주얼로 전이하기 좋음.",
    prompt: "cinematic still of a giant marble hand statue rising from beneath ocean waves and reaching towards rocky cliffs. partially obscured. rule of thirds composition. moody color palette.",
    tags: ["#AI이미지프롬프트", "#삼분할", "#대리석", "#오션", "#스케일", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148070579731",
    visual: { background: "#cad3d8", accent: "#557482", ink: "#1d292f", radiusOne: "50%", radiusTwo: "24px", rotate: "-3deg", label: "MARBLE / OCEAN / THIRDS" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 제공하고 거대 대리석 손, 파도·절벽, 부분 가림, 삼분할 구도를 조합 가능한 제어 조각으로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "매트", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148070579731", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cinematic still of a giant marble hand statue rising from beneath ocean waves and reaching towards rocky cliffs. partially obscured. rule of thirds composition. moody color palette.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Rule of thirds 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148070579731", "fragment_map": [{ "조각": "giant marble hand statue", "효과": "매트한 석재 표면의 초대형 상징 피사체" }, { "조각": "rising from beneath ocean waves", "효과": "파도 가림과 수직 상승 방향으로 규모감 생성" }, { "조각": "reaching towards rocky cliffs", "효과": "손끝과 절벽 사이에 화면 방향성과 긴장 형성" }, { "조각": "partially obscured. rule of thirds composition", "효과": "피사체 일부를 숨기고 중심에서 벗어나 깊이 강조" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-29", "수집사유": "최근 갱신된 공식 프롬프트 가이드에서 전체 프롬프트·모델·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Luminous Fog Orbit — 발광 안개 속 인물을 공격적 원운동으로 흐리는 숏",
    category: "AI 영상 프롬프트", date: "2026-07-29", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#soft-focus-fog-orbit",
    summary: "정지한 반사 수면과 희미한 인물을 두꺼운 발광 안개로 감싸고 카메라가 빠르게 원을 돌며 주변을 회화적 흐림으로 바꾸는 공식 Gen-4.5 결과.",
    note: "피사체 운동 없이 환경 확산과 카메라 궤도만으로 변화를 만들어 AI·데이터·보안처럼 비가시적 기술의 몰입형 전환 장면에 적용하기 좋음.",
    prompt: "A solitary figure, their form indistinct and shimmering, stands at the edge of an impossibly still, reflective body of water. The entire scene is enveloped in a thick, luminous fog that diffuses all light into a soft, glowing halo around the figure and the water's surface. The aggressive camera movement circles the figure, further blurring the already indistinct surroundings into a painterly haze. Soft, all-encompassing ambient light from the luminous fog, creating a halo effect and dissolving harsh lines, enhancing the ethereal quality.",
    tags: ["#AI영상프롬프트", "#Gen45", "#소프트포커스", "#오비트", "#발광안개", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515639955",
    visual: { background: "#d8e3e4", accent: "#8fc9d1", ink: "#24363a", radiusOne: "50%", radiusTwo: "0", rotate: "2deg", label: "FOG / HALO / ORBIT" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 정지 수면, 발광 안개, 헤일로, 원형 카메라 운동과 회화적 흐림을 재현 가능한 모션 조각으로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "인터랙션"], "시각렌즈": ["그라디언트", "중앙집중", "소프트확산광", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515639955", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A solitary figure, their form indistinct and shimmering, stands at the edge of an impossibly still, reflective body of water. The entire scene is enveloped in a thick, luminous fog that diffuses all light into a soft, glowing halo around the figure and the water's surface. The aggressive camera movement circles the figure, further blurring the already indistinct surroundings into a painterly haze. Soft, all-encompassing ambient light from the luminous fog, creating a halo effect and dissolving harsh lines, enhancing the ethereal quality.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Soft focus 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515639955", "fragment_map": [{ "조각": "impossibly still, reflective body of water", "효과": "움직임이 없는 거울 수면을 기준 배경으로 고정" }, { "조각": "thick, luminous fog", "효과": "환경 경계를 녹이는 밝은 확산층 생성" }, { "조각": "aggressive camera movement circles the figure", "효과": "중앙 인물을 축으로 빠른 원형 궤도 운동" }, { "조각": "painterly haze ... halo effect", "효과": "주변을 회화적 흐림과 빛 고리로 변환" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-29", "수집사유": "최근 갱신된 공식 카메라 예시에서 전체 프롬프트·모델·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Scripted Elephant Close-up — 피부 위 백색 문양을 창백한 빛으로 고정한 숏",
    category: "AI 영상 프롬프트", date: "2026-07-29", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#elephant-close-up",
    summary: "노령 코끼리 얼굴을 꽉 채운 클로즈업에서 가죽 표면과 고대 문자 같은 백색 페인트를 창백한 단일 광원으로 드러낸 공식 Gen-4.5 결과.",
    note: "대상·표면·문양·광원만으로 프레임을 제한해 바이오테크, 센서, 소재 연구처럼 미세한 표면 정보를 상징적으로 보여 주는 티저 숏에 활용하기 좋음.",
    prompt: "A close-up isolates an elder elephant's face, where white paint patterns resembling ancient script are painted across its leathery surface under a pallid light.",
    tags: ["#AI영상프롬프트", "#Gen45", "#클로즈업", "#표면질감", "#문양", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515593875",
    visual: { background: "#b9b7ad", accent: "#f2efe5", ink: "#282a28", radiusOne: "0", radiusTwo: "50%", rotate: "-2deg", label: "CLOSE / SURFACE / SCRIPT" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 클로즈업, 노령 피부, 문자형 백색 페인트와 창백한 조명을 독립된 표면 통제어로 재사용하게 한다.",
      "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["모노톤", "중앙집중", "하드라이트", "매트", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515593875", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A close-up isolates an elder elephant's face, where white paint patterns resembling ancient script are painted across its leathery surface under a pallid light.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Close up 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515593875", "fragment_map": [{ "조각": "close-up isolates", "효과": "배경을 배제하고 얼굴 표면을 화면 대부분에 배치" }, { "조각": "elder elephant's face", "효과": "깊은 주름과 두꺼운 피부의 자연 질감 강조" }, { "조각": "white paint patterns resembling ancient script", "효과": "유기적 표면 위에 고대 문자 같은 고대비 선형 문양" }, { "조각": "under a pallid light", "효과": "채도를 억제한 창백한 조명으로 표면 굴곡 분리" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-29", "수집사유": "최근 갱신된 공식 카메라 예시에서 전체 프롬프트·모델·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "T-BL E-commerce — 거친 패션 이미지와 고대비 타이포로 만든 쇼핑 흐름",
    category: "웹·앱 UI", date: "2026-07-29", url: "https://www.behance.net/gallery/252406761/T-BL-e-commerce-web",
    summary: "대형 패션 이미지, 짧은 제품 카피, 극단적인 흑백 대비와 반복 그리드를 결합해 브랜드 탐색에서 상품 선택으로 이어지는 현대 의류 커머스 웹 UI.",
    note: "브랜드 무드를 유지하면서 히어로·컬렉션·상품 카드의 정보 밀도를 단계적으로 높여 감성 이미지와 구매 정보가 충돌하지 않는 커머스 계층을 참고하기 좋음.",
    tags: ["#웹앱UI", "#이커머스", "#패션", "#타이포그래피", "#그리드", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/97207c252406761.Y3JvcCwyMTU4LDE2ODcsMCw1.jpg",
    visual: { background: "#eceae4", accent: "#111111", ink: "#111111", radiusOne: "0", radiusTwo: "24px", rotate: "2deg", label: "FASHION / GRID / COMMERCE" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept",
      "근거": "Behance 공개 프로젝트의 실제 반응형 커머스 화면과 Figma 제작 정보가 히어로·컬렉션·상품 카드·CTA를 반복 가능한 그리드와 타이포 위계로 시스템화한다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "브랜드일관성", "인터랙션"], "시각렌즈": ["에디토리얼", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/404/97207c252406761.Y3JvcCwyMTU4LDE2ODcsMCw1.jpg", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "브랜드 히어로→컬렉션 탐색→상품 그리드→제품 선택·구매 CTA", "ui_system": "대형 산세리프 타이포·흑백 팔레트·반복 카드 그리드·이미지 중심 섹션 위계" } },
      "출처": { "소스": "Behance / Marta Verba", "수집일": "2026-07-29", "수집사유": "2026-07-13 공개된 UI/UX 프로젝트에서 실제 이커머스 화면과 200 응답 공식 커버 JPEG가 확인됨" }
    }
  },
  {
    title: "Choonsik at Bonte Museum — 미술관 공간과 캐릭터를 결합한 3D 모션 세계",
    category: "비주얼 그래픽", date: "2026-07-29", url: "https://www.behance.net/gallery/216306583/KAKAO-CHOONSIK-with-BONTE-MUSEUM",
    summary: "제주 본태박물관의 건축·전시 맥락 안에 춘식이 캐릭터를 배치하고 조형물, 공간 이동, 재질과 빛을 연결한 공식 협업 3D 모션 프로젝트.",
    note: "실제 장소의 건축 특징을 캐릭터 비율과 동선에 맞게 단순화해 브랜드 캐릭터가 전시·공간 콘텐츠로 확장될 때 배경과 주체의 스케일을 조율하는 방식이 좋음.",
    tags: ["#비주얼그래픽", "#3D모션", "#캐릭터", "#공간브랜딩", "#전시", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/2a6179216306583.Y3JvcCwxMDA3LDc4OCwzNjEsMA.png",
    visual: { background: "#e8dfcf", accent: "#f4c34f", ink: "#302b27", radiusOne: "50%", radiusTwo: "24px", rotate: "-3deg", label: "CHARACTER / SPACE / MOTION" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 4, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공개 프로젝트가 실제 박물관 건축과 캐릭터의 스케일, 3D 재질, 공간 이동, 전시형 장면을 다수 결과 이미지·영상으로 보여 줘 캐릭터 공간 콘텐츠의 스타일 규칙을 추출할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "사용자흐름", "인터랙션"], "시각렌즈": ["3D", "파스텔", "중앙집중", "소프트확산광", "유희적", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/404/2a6179216306583.Y3JvcCwxMDA3LDc4OCwzNjEsMA.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "transferable_style": "둥근 캐릭터 비율·실제 건축의 단순화·따뜻한 재질·전시 동선을 따른 공간 전환", "applications": "브랜드 캐릭터 전시·박물관 미디어월·공간형 캠페인·3D 티저 모션" } },
      "출처": { "소스": "Behance / SUESS STUDIO 외", "수집일": "2026-07-29", "수집사유": "2026-05-29 공개된 90일 내 프로젝트에서 다수 3D 모션 결과와 200 응답 공식 커버 PNG가 확인됨" }
    }
  },
  {
    title: "Runway Dev — 생성 미디어 모델·레시피·워크플로를 한 API로 묶은 개발자 플랫폼",
    category: "AI 디자인", date: "2026-07-28", url: "https://runway.com/news/company-news/introducing-runway-dev",
    summary: "이미지·영상·오디오·실시간 캐릭터 모델과 반복 제작 레시피, 다단계 워크플로, 사용량·보안 제어를 하나의 개발자 경험으로 통합한 AI 미디어 플랫폼.",
    note: "모델 선택을 기능 목록으로 끝내지 않고 대량 상품 비주얼, 다국어 영상, 스크립트-스토리보드처럼 결과 중심 레시피로 추상화해 생성형 기능의 제품 정보 구조를 설계할 때 참고하기 좋음.",
    tags: ["#AI디자인", "#개발자도구", "#생성미디어", "#API", "#워크플로", "#테크IT"],
    thumbnail: "https://d3phaj0sisr2ct.cloudfront.net/site/images/news/runway-dev-cover.jpg",
    visual: { background: "#101010", accent: "#d8ff5f", ink: "#f7f7f2", radiusOne: "24px", radiusTwo: "0", rotate: "-2deg", label: "MODEL / RECIPE / WORKFLOW" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공식 출시 화면과 모델·레시피·워크플로·캐릭터·엔터프라이즈 제어 구조, 실제 대량 제작 사례가 생성 미디어 기능을 개발자 제품으로 패키징하는 재현 가능한 정보 구조를 보여 준다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "절제"], "시각아티팩트_url": "https://d3phaj0sisr2ct.cloudfront.net/site/images/news/runway-dev-cover.jpg", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "모델 선택→목적형 Recipe 호출→다단계 Workflow 연결→Characters 실시간 경험→사용량·보안 운영", "ai_role": "여러 생성 미디어 모델과 제작 규칙을 단일 API 및 결과 중심 엔드포인트로 추상화" } },
      "출처": { "소스": "https://runway.com/news/company-news/introducing-runway-dev", "수집일": "2026-07-28", "수집사유": "2026-07-08 공개된 공식 출시 페이지에서 1920×1080 제품 커버와 구체적 기능·운영 구조가 확인됨" }
    }
  },
  {
    title: "Basis Design System — AI Chat까지 확장된 광고 기술 제품 컴포넌트 체계",
    category: "웹 스타일가이드", date: "2026-07-28", url: "https://design.basis.com/",
    summary: "광고 기술 애플리케이션을 위한 파운데이션·접근성·컴포넌트·패턴을 한 탐색 구조로 묶고 AI Chat과 Compass 파운데이션을 최신 항목으로 확장한 공개 디자인 시스템.",
    note: "왼쪽 분류 탐색, 상태별 컴포넌트 예시, 디자이너·개발자 가이드를 한 셸에 배치해 데이터 밀도가 높은 B2B 도구와 AI 대화 기능을 같은 시스템 안에서 운영하는 방법이 명확함.",
    tags: ["#웹스타일가이드", "#디자인시스템", "#AI챗", "#B2B", "#컴포넌트", "#테크IT"],
    thumbnail: "https://framerusercontent.com/images/DQ7MDIQZy5y9hQOARrIXQ3efDGs.png",
    visual: { background: "#f4f6f8", accent: "#3757d5", ink: "#18212b", radiusOne: "8px", radiusTwo: "24px", rotate: "2deg", label: "FOUNDATION / AI CHAT / COMPONENTS" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 사이트의 실제 문서 셸과 파운데이션·접근성·상태별 컴포넌트·AI Chat 항목이 B2B 제품 규칙을 탐색·비교·구현 가능한 단위로 시스템화한다.",
      "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "접근성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://framerusercontent.com/images/DQ7MDIQZy5y9hQOARrIXQ3efDGs.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "색·타이포그래피·간격·테두리·애니메이션·접근성 파운데이션", "components": "Accordion·App Header·Card·폼 상태·Disabled Button 사례·AI Chat 컴포넌트" } },
      "출처": { "소스": "https://design.basis.com/", "수집일": "2026-07-28", "수집사유": "2026-07-23 갱신된 공식 디자인 시스템에서 AI Chat·Compass 파운데이션과 200 응답 공식 커버가 확인됨" }
    }
  },
  {
    title: "Pixel Ruins Campfire — 밤의 거대 유적과 작은 불빛을 픽셀 장면으로 압축",
    category: "AI 이미지 프롬프트", date: "2026-07-28", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#pixel-ruins",
    summary: "광대한 폐허의 밤, 모닥불 옆 두 인물을 제한된 픽셀 단위와 고전 게임 화면 문법으로 구성해 규모 대비와 서사를 동시에 만든 공식 결과.",
    note: "거대한 환경·작은 캐릭터·점광원을 세 덩어리로 단순화해 개발자 행사, 게임 기술, 데이터 인프라 주제의 히어로 그래픽을 저해상도 언어로 전환하기 좋음.",
    prompt: "pixel art of two people resting near a campfire at night in vast ruins. pixelated scene reminiscent of a nostalgic video game.",
    tags: ["#AI이미지프롬프트", "#픽셀아트", "#게임", "#야간", "#유적", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148070572563",
    visual: { background: "#151728", accent: "#ff9d45", ink: "#f1eadf", radiusOne: "0", radiusTwo: "8px", rotate: "2deg", label: "PIXEL / RUINS / CAMPFIRE" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 이미지를 제공하고 픽셀 표현, 두 인물, 밤의 거대 폐허, 모닥불 점광원을 조합 가능한 통제 조각으로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["일러스트", "중앙집중", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148070572563", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "pixel art of two people resting near a campfire at night in vast ruins. pixelated scene reminiscent of a nostalgic video game.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Pixel 스타일 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148070572563", "fragment_map": [{ "조각": "pixel art", "효과": "형태와 명암을 제한된 픽셀 단위로 단순화" }, { "조각": "two people resting near a campfire", "효과": "작은 인물 두 명과 주황 점광원으로 서사 중심 형성" }, { "조각": "at night in vast ruins", "효과": "어두운 거대 구조와 작은 피사체의 규모 대비" }, { "조각": "reminiscent of a nostalgic video game", "효과": "고전 게임 화면의 제한 팔레트와 장면 문법 부여" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-28", "수집사유": "최근 갱신된 공식 프롬프트 가이드에서 전체 프롬프트·모델·공개 결과 이미지가 확인됨" }
    }
  },
  {
    title: "Dancer in Motion — 고정된 들판과 흐려지는 인물을 분리한 움직임 초상",
    category: "AI 이미지 프롬프트", date: "2026-07-28", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#in-motion-dancer",
    summary: "꽃밭 배경은 선명하게 유지하고 춤추는 인물에만 자연스러운 모션 블러와 부분 가림을 적용해 정지 이미지 안에 시간감을 만든 공식 결과.",
    note: "배경 초점과 피사체 흐림을 반대로 설계해 음악·웨어러블·모션 기술 캠페인에서 기능 설명 없이 속도와 감정의 흔적을 전달하는 데 유용함.",
    prompt: "dancer in a calm field of flowers. natural motion blur emphasizes the subject's movement against the still environment. Subject appears partially obscured, creating mysterious narrative. background in focus",
    tags: ["#AI이미지프롬프트", "#모션블러", "#인물", "#꽃밭", "#서사"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148070593171",
    visual: { background: "#dedcc8", accent: "#8d5f96", ink: "#23211f", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "MOTION / STILL / OBSCURED" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 이미지를 제공하고 고정 배경, 피사체 모션 블러, 부분 가림을 독립된 초점·서사 통제어로 재사용할 수 있게 한다.",
      "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "비대칭", "소프트확산광", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148070593171", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "dancer in a calm field of flowers. natural motion blur emphasizes the subject's movement against the still environment. Subject appears partially obscured, creating mysterious narrative. background in focus", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 In motion 스타일 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148070593171", "fragment_map": [{ "조각": "dancer in a calm field of flowers", "효과": "정적인 자연 배경과 동작 인물을 한 프레임에 배치" }, { "조각": "natural motion blur emphasizes the subject's movement", "효과": "피사체에만 방향성 있는 흐림을 적용" }, { "조각": "Subject appears partially obscured", "효과": "형태 일부를 숨겨 잔상과 미스터리 강화" }, { "조각": "background in focus", "효과": "환경은 선명하게 고정해 움직임 대비를 극대화" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-28", "수집사유": "최근 갱신된 공식 프롬프트 가이드에서 전체 프롬프트·모델·공개 결과 이미지가 확인됨" }
    }
  },
  {
    title: "Abyssal Submarine Extreme Wide — 심해 협곡에서 시스템 규모를 드러내는 흑백 숏",
    category: "AI 영상 프롬프트", date: "2026-07-28", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#extreme-wide-submarine",
    summary: "거대한 고대 암반과 거의 보이지 않는 잠수함의 비율을 극단적 와이드·흑백 화면으로 고정해 심해의 압도적 규모와 고립감을 만든 공식 Gen-4.5 결과.",
    note: "주체를 작게 두고 환경을 정보로 사용하는 구도가 클라우드·데이터센터·사이버보안처럼 보이지 않는 거대 인프라를 상징하는 오프닝 숏에 적합함.",
    prompt: "An extreme wide shot, in black and white, reveals a vast, silent underwater canyon, its ancient rock formations dwarfing a small, barely visible submarine navigating the abyssal plain.",
    tags: ["#AI영상프롬프트", "#Gen45", "#익스트림와이드", "#심해", "#모노톤", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504717843",
    visual: { background: "#111820", accent: "#91a5b7", ink: "#edf2f4", radiusOne: "0", radiusTwo: "50%", rotate: "3deg", label: "ABYSS / SCALE / EXTREME WIDE" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 극단적 와이드, 흑백, 거대 협곡, 작은 잠수함의 규모 대비를 재현 가능한 숏 조각으로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["모노톤", "여백중심", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504717843", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "An extreme wide shot, in black and white, reveals a vast, silent underwater canyon, its ancient rock formations dwarfing a small, barely visible submarine navigating the abyssal plain.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Extreme wide 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504717843", "fragment_map": [{ "조각": "extreme wide shot", "효과": "환경이 화면 대부분을 차지하는 초광역 숏" }, { "조각": "in black and white", "효과": "색 정보를 제거해 암반의 명암과 깊이 강조" }, { "조각": "ancient rock formations dwarfing", "효과": "거대 암반을 기준척도로 삼아 압도적 규모 생성" }, { "조각": "small, barely visible submarine navigating", "효과": "미세하게 이동하는 잠수함으로 방향성과 고립감 부여" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-28", "수집사유": "최근 갱신된 공식 카메라 예시에서 전체 프롬프트·모델·공개 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Salt Lake Negative Space — 광대한 마른 호수와 작은 붉은 지프의 이동",
    category: "AI 영상 프롬프트", date: "2026-07-28", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#negative-space-jeep",
    summary: "상공에서 본 마른 소금 호수의 빈 면에 작은 짙은 붉은 지프만 천천히 이동시키고 무거운 필름 그레인으로 관찰 다큐의 질감을 더한 공식 Gen-4.5 결과.",
    note: "제품 크기를 과감히 줄이고 이동 경로와 빈 표면을 주인공으로 삼아 모빌리티·위치 데이터·원격 운영 캠페인의 여백 중심 모션 문법으로 활용하기 좋음.",
    prompt: "Negative space scene, shot from above of a vast dried salt lake with a dark red jeep driving slowly. The composition frames the jeep extremely small against the environment of the salt lake, emphasizing the negative space. Raw indie film aesthetic. Heavy grain. Unpolished, authentic, low-budget realism with a surreal, observational feel.",
    tags: ["#AI영상프롬프트", "#Gen45", "#네거티브스페이스", "#탑뷰", "#필름그레인", "#모빌리티"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504736403",
    visual: { background: "#d6c9b0", accent: "#711f25", ink: "#29231f", radiusOne: "50%", radiusTwo: "0", rotate: "-3deg", label: "SALT / SPACE / SLOW DRIVE" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 예시가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 탑뷰, 작은 이동 주체, 광대한 여백, 느린 속도, 무거운 그레인을 독립된 모션 통제어로 재사용하게 한다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름"], "시각렌즈": ["에디토리얼", "어스톤", "여백중심", "필름그레인", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504736403", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Negative space scene, shot from above of a vast dried salt lake with a dark red jeep driving slowly. The composition frames the jeep extremely small against the environment of the salt lake, emphasizing the negative space. Raw indie film aesthetic. Heavy grain. Unpolished, authentic, low-budget realism with a surreal, observational feel.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Negative space 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504736403", "fragment_map": [{ "조각": "shot from above of a vast dried salt lake", "효과": "표면 패턴과 이동 경로가 보이는 수직 탑뷰" }, { "조각": "dark red jeep driving slowly", "효과": "넓은 중성 배경에 작은 적색 이동점 생성" }, { "조각": "frames the jeep extremely small", "효과": "주체보다 여백을 강조하는 극단적 비율" }, { "조각": "Raw indie film aesthetic. Heavy grain", "효과": "매끈한 생성 영상에 거친 관찰 다큐 질감 추가" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-28", "수집사유": "최근 갱신된 공식 카메라 예시에서 전체 프롬프트·모델·공개 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Nova AI Smart Ring — 웨어러블·모바일·분석 대시보드를 잇는 건강 데이터 경험",
    category: "웹·앱 UI", date: "2026-07-28", url: "https://www.behance.net/gallery/252633107/Nova-AI-Smart-Ring-UIUX-3D-Design",
    summary: "스마트 링의 연속 건강 데이터를 하루 단위 안내, 장기 추세 대시보드, AI 설명으로 번역하고 3D 제품 표현까지 하나의 고급 웨어러블 생태계로 연결한 UI 사례.",
    note: "센서 수치를 그대로 노출하지 않고 상태 요약→원인 설명→장기 비교로 점진 공개하며 제품 재질·모션과 인터페이스 톤을 일치시킨 점이 AI 헬스 제품 설계에 구체적임.",
    tags: ["#웹앱UI", "#웨어러블", "#헬스데이터", "#대시보드", "#AI어시스턴트", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/32cb1a252633107.6a552cffc6797.jpg",
    visual: { background: "#111416", accent: "#d8d1bf", ink: "#f2f0e9", radiusOne: "50%", radiusTwo: "24px", rotate: "2deg", label: "RING / INSIGHT / ECOSYSTEM" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공개된 실제 모바일·분석 대시보드·AI 안내·3D 제품 화면이 연속 센서 데이터에서 일일 요약과 장기 추세, 설명 가능한 인사이트로 이어지는 웨어러블 경험을 시스템화한다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "브랜드일관성", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "글로시", "럭셔리"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/32cb1a252633107.6a552cffc6797.jpg", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "링 데이터 동기화→오늘의 상태 요약→AI 설명과 행동 안내→장기 추세 비교→제품·구독 탐색", "screens": "모바일 데일리 인사이트·건강 지표 상세·AI 어시스턴트·장기 분석 대시보드·랜딩 페이지" } },
      "출처": { "소스": "https://www.behance.net/gallery/252633107/Nova-AI-Smart-Ring-UIUX-3D-Design", "수집일": "2026-07-28", "수집사유": "2026-07-14 공개된 실제 UI·3D 제품·모션·대시보드 화면과 200 응답 대표 JPEG가 확인됨" }
    }
  },
  {
    title: "SAMSUNG VIVATECH 2026 — 십장생도를 360° AI 미디어 파사드로 재구성",
    category: "비주얼 그래픽", date: "2026-07-28", url: "https://www.behance.net/gallery/251883341/SAMSUNG-VIVATECH-2026",
    summary: "한국 전통 십장생도의 열 가지 자연 상징을 AI로 고해상도 재생성하고 초대형 360° 전시 파사드의 레이어·깊이·움직임으로 확장한 테크 전시 콘텐츠.",
    note: "원화의 상징과 질감을 보존하면서 산·구름·물·동식물을 깊이별 모션 레이어로 분해해 로컬 문화 자산을 글로벌 기술 행사 스케일로 번역한 과정이 실무적으로 선명함.",
    tags: ["#비주얼그래픽", "#미디어아트", "#360파사드", "#십장생도", "#AI활용", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a73a63251883341.6a44a215b171b.png",
    visual: { background: "#efe6d4", accent: "#db4d37", ink: "#1f342d", radiusOne: "0", radiusTwo: "50%", rotate: "-2deg", label: "HERITAGE / AI / 360°" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "실제 전시 파사드·스타일 프레임·제작 과정이 전통 회화의 상징·질감·색을 고해상도 AI 복원과 깊이별 모션 레이어로 전환하는 확장 가능한 미디어아트 문법을 보여 준다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "비대칭", "매트", "몽환", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a73a63251883341.6a44a215b171b.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "십장생 자연 상징·전통 채색 질감·파노라마 산수·안개·수면·동식물 레이어", "reusable_rule": "문화 원형의 상징 목록과 색·질감을 보존한 뒤 전경·중경·후경으로 분해해 초대형 화면의 순환 모션으로 재조합" } },
      "출처": { "소스": "https://www.behance.net/gallery/251883341/SAMSUNG-VIVATECH-2026", "수집일": "2026-07-28", "수집사유": "2026-07-07 공개된 실제 VivaTech 파사드·스타일 프레임·과정 이미지와 200 응답 대표 PNG가 확인됨" }
    }
  },
  {
    title: "TENSTORRENT DEPLOY — 모듈 컴퓨팅을 살아 움직이는 데이터 경로로 만든 브랜드 패키지",
    category: "브랜드", date: "2026-07-28", url: "https://www.behance.net/gallery/252051371/TENSTORRENT-DEPLOY",
    summary: "정밀 그리드, 조립되는 큐브, 발광 데이터 경로, 2D 인터페이스 그래픽을 결합해 반도체 컴퓨팅 시스템의 배치·연결·처리를 하나의 모션 브랜드 언어로 시각화.",
    note: "실물 칩을 반복 노출하지 않고 노드 연결, 블록 조립, 그리드 확장이라는 동사로 기술 브랜드의 기능을 표현해 반도체·클라우드 캠페인 시스템으로 전이하기 좋음.",
    tags: ["#브랜드", "#반도체", "#모션브랜딩", "#모듈", "#데이터경로", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/max_808/bc6f50252051371.Y3JvcCwyMjc4LDE3ODEsMCww.png",
    visual: { background: "#080b12", accent: "#d8ff43", ink: "#f1f4f6", radiusOne: "0", radiusTwo: "24px", rotate: "3deg", label: "NODE / BLOCK / DEPLOY" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "실제 브랜드 모션과 다수 스타일 프레임이 그리드·모듈 블록·발광 경로·2D UI 그래픽을 반복해 컴퓨팅 배치와 데이터 이동을 확장 가능한 반도체 브랜드 문법으로 추출하게 한다.",
      "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "AI활용", "콘텐츠명료성"], "시각렌즈": ["3D", "모노톤", "그리드", "고밀도", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/max_808/bc6f50252051371.Y3JvcCwyMjc4LDE3ODEsMCww.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "정밀 그리드·모듈 큐브·발광 데이터 경로·2D 인터페이스 오버레이·암색 배경과 산성 라임 포인트", "applications": "브랜드 필름·제품 배치 메시지·이벤트 화면·소셜 모션·기술 프레젠테이션" } },
      "출처": { "소스": "https://www.behance.net/gallery/252051371/TENSTORRENT-DEPLOY", "수집일": "2026-07-28", "수집사유": "2026-07-01 공개된 실제 클라이언트 브랜드 패키지에서 모션 결과·스타일 프레임·200 응답 대표 PNG가 확인됨" }
    }
  },
  {
    title: "Forever Founder — 창립자의 지식을 실시간 대화형 아바타로 보존한 AI 경험",
    category: "AI 디자인", date: "2026-07-27", url: "https://runwayml.com/news/customers/rga",
    summary: "R/GA의 50년 기록과 창립자 관점을 지식 베이스·음성·실시간 비디오 에이전트로 결합해 조직의 역사와 원칙을 대화 가능한 경험으로 만든 사례.",
    note: "단일 아바타의 외형보다 자료 큐레이션, 페르소나 지침, 음성 조정, 현장 대화 검증을 한 흐름으로 묶어 브랜드 아카이브를 온보딩·검색 인터페이스로 전환한 점이 구체적임.",
    tags: ["#AI디자인", "#실시간아바타", "#지식베이스", "#브랜드아카이브", "#Runway", "#테크IT"],
    thumbnail: "https://d3phaj0sisr2ct.cloudfront.net/site/images/sanity/2026/07/runwayrga-a-1920x1080-93c567f2-5f06-4b77-a5dd-1a90f9aca1fc.png",
    visual: { background: "#101010", accent: "#8ef0c6", ink: "#f5f2eb", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "ARCHIVE / AVATAR / DIALOGUE" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway와 R/GA가 공개한 실제 행사 화면, 145개 질문·20회 대화·10분 연속 운용 결과와 자료·음성·프롬프트 조정 과정을 통해 브랜드 지식을 대화형 온보딩 경험으로 전환하는 절차를 검증할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "브랜드일관성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "모노톤", "중앙집중", "절제", "모션필"], "시각아티팩트_url": "https://d3phaj0sisr2ct.cloudfront.net/site/images/sanity/2026/07/runwayrga-a-1920x1080-93c567f2-5f06-4b77-a5dd-1a90f9aca1fc.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "창립자 저서·기록 정리→단일 이미지 기반 아바타 프로토타입→음성·페르소나·지식 베이스 조정→행사 현장 대화 검증→다국어 온보딩 확장", "ai_role": "기관의 정적 기록을 검색·응답·표정이 결합된 실시간 브랜드 인터페이스로 변환" } },
      "출처": { "소스": "https://runwayml.com/news/customers/rga", "수집일": "2026-07-27", "수집사유": "2026-07-17 공개된 Runway 공식 고객 사례에서 실제 아바타 화면과 제작·운용 지표가 확인됨" }
    }
  },
  {
    title: "Figma Auto Layout Flexbox Parity — 패딩·보더·갭을 CSS와 맞춘 레이아웃 규칙",
    category: "웹 스타일가이드", date: "2026-07-27", url: "https://help.figma.com/hc/en-us/articles/42031586813719-Use-auto-layout-with-CSS-Flexbox-in-mind",
    summary: "Auto Layout의 최소 패딩, inside stroke, border-box 분배, auto gap과 단일 자식 정렬을 CSS Flexbox 동작과 일치시키고 이전·이후 화면으로 설명한 공식 규칙.",
    note: "디자인 캔버스와 브라우저 레이아웃 사이의 예외를 시각 비교와 마이그레이션 체크리스트로 묶어 컴포넌트 시스템의 구현 오차를 줄이는 기준으로 바로 활용 가능함.",
    tags: ["#웹스타일가이드", "#Figma", "#AutoLayout", "#CSSFlexbox", "#컴포넌트", "#테크IT"],
    thumbnail: "https://help.figma.com/hc/article_attachments/42168623814423",
    visual: { background: "#f2f1ed", accent: "#7c5cff", ink: "#181818", radiusOne: "0", radiusTwo: "24px", rotate: "2deg", label: "PADDING / BORDER / GAP" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Figma 공식 문서가 패딩 최소값, inside stroke, border-box, auto gap의 이전·이후 실제 화면과 업그레이드 절차를 함께 제공해 CSS와 디자인 컴포넌트의 레이아웃 규칙으로 즉시 흡수할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "브랜드일관성", "접근성", "인터랙션"], "시각렌즈": ["미니멀", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://help.figma.com/hc/article_attachments/42168623814423", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "padding minimum·inside stroke·border-box sizing·auto gap 0 minimum", "components": "Auto Layout frame·fill-container children·nested stroke·single-child stack·layout version migration" } },
      "출처": { "소스": "https://help.figma.com/hc/en-us/articles/42031586813719-Use-auto-layout-with-CSS-Flexbox-in-mind", "수집일": "2026-07-27", "수집사유": "2026년 7월 기본 적용되는 공식 Auto Layout 업데이트에서 실제 전후 비교 PNG·GIF 7개가 확인됨" }
    }
  },
  {
    title: "Progress DevTools Screenshot Guide — 제품 화면의 박스·화살표·라벨 주석 규칙",
    category: "콘텐츠 디자인 가이드", date: "2026-07-27", url: "https://www.telerik.com/documentation/style-guide/screenshots",
    summary: "문서용 제품 화면을 준비하고 필요한 영역만 자른 뒤 박스, 화살표, 번호, 라벨을 일관된 색과 간격으로 올리는 Progress DevTools의 공식 이미지 가이드.",
    note: "UI 설명 문서에서 강조 요소가 제품 화면을 가리지 않도록 캡처 준비·주석·파일명·캡션을 한 절차로 묶어 튜토리얼과 릴리스 노트 제작에 즉시 적용하기 좋음.",
    tags: ["#콘텐츠디자인가이드", "#스크린샷", "#문서디자인", "#주석", "#개발자도구", "#테크IT"],
    thumbnail: "https://www.telerik.com/documentation/style-guide/assets/f2b996b67ef944f48760bddf2fb412d1/screenshots-example.png",
    visual: { background: "#f5f6f7", accent: "#ff5a37", ink: "#202124", radiusOne: "24px", radiusTwo: "0", rotate: "-2deg", label: "CAPTURE / ANNOTATE / EXPLAIN" },
    review: {
      "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "Progress 공식 가이드가 UI 캡처 준비, 자르기, 박스·화살표·라벨 주석, 파일명과 캡션 규칙을 실제 예시 화면과 함께 제시해 제품 문서 이미지 제작 절차로 곧바로 실행할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "접근성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "하드라이트", "절제"], "시각아티팩트_url": "https://www.telerik.com/documentation/style-guide/assets/f2b996b67ef944f48760bddf2fb412d1/screenshots-example.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "제품 UI 정리→관련 영역 캡처·크롭→박스·화살표·번호·라벨 주석→설명 문장·캡션 연결→의미 있는 파일명 저장", "visible_examples": "그리드 UI 위 선택 영역 박스, 방향 화살표, 텍스트 라벨과 문서 전용 강조색 예시" } },
      "출처": { "소스": "https://www.telerik.com/documentation/style-guide/screenshots", "수집일": "2026-07-27", "수집사유": "2026-07-16 갱신된 공식 스타일가이드에서 실제 제품 화면 주석 예시 PNG가 확인됨" }
    }
  },
  {
    title: "DreamUI — 프롬프트에서 편집 가능한 화면·플로·토큰·코드까지 생성",
    category: "Figma 플러그인", date: "2026-07-27", url: "https://www.figma.com/community/plugin/1656620010944492160/dreamui-ai-ui-generator-design-system-wireframe-generator-ai-design-copilot-tokens-html",
    summary: "텍스트 프롬프트, 스크린샷, 사용자 스토리를 각각 편집 가능한 UI 화면, 연결 제품, 와이어프레임 플로와 개발용 코드로 바꾸는 Figma Community AI 플러그인.",
    note: "단일 생성 버튼보다 화면 생성·선택 영역 대화 편집·토큰 추출·코드 변환을 한 도구 안에 묶어 초기 제품 구조와 디자인 시스템 실험을 빠르게 반복하기 좋음.",
    tags: ["#Figma플러그인", "#AIUI", "#와이어프레임", "#디자인토큰", "#코드변환", "#테크IT"],
    thumbnail: "https://www.figma.com/community/thumbnail?resource_id=1656620010944492160&resource_type=plugin",
    visual: { background: "#161822", accent: "#8a70ff", ink: "#f7f4ff", radiusOne: "24px", radiusTwo: "50%", rotate: "3deg", label: "PROMPT / FLOW / TOKENS" },
    review: {
      "유형": "Figma 플러그인", "가치축_이름": "유용성", "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "Figma Community 공식 1243×763 커버와 2026-07-24 공개 소개가 프롬프트 화면 생성, 연결 제품, 스크린샷 재구성, 선택 영역 편집, 플로·토큰·코드 기능을 실제 플러그인 화면으로 확인시킨다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용"], "시각렌즈": [], "시각아티팩트_url": "https://www.figma.com/community/thumbnail?resource_id=1656620010944492160&resource_type=plugin", "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "workflow": "프롬프트·스크린샷·사용자 스토리 입력→편집 가능한 UI·연결 화면·와이어프레임 생성→선택 영역 대화 편집→토큰·HTML 코드 출력", "repeated_task": "초기 화면 구조, 디자인 시스템 토큰, 사용자 플로와 개발 전달물의 반복 생성" } },
      "출처": { "소스": "https://forum.figma.com/showcase-your-work-14/dreamui-figma-plugin-by-noor-maqsood-56341", "수집일": "2026-07-27", "수집사유": "2026-07-24 공개된 Figma Forum 소개와 Community 공식 커버·플러그인 페이지가 확인됨" }
    }
  },
  {
    title: "Blue-Glow Ruins Portrait — 청색 발광 페이지와 필름 톤의 시네마틱 초상",
    category: "AI 이미지 프롬프트", date: "2026-07-27", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#cinematic-blue-glow",
    summary: "고대 유적에서 책을 읽는 인물을 옅은 블루 발광, 얕은 심도, 저채도 시네마 팔레트와 미세 필름 그레인으로 묶은 공식 Gen-4 Image 결과.",
    note: "광원 출처를 책 페이지로 한정하고 주변의 네이비·블루 톤을 렌즈·심도·그레인과 함께 제어해 AI·클라우드·지식 제품의 캠페인 키비주얼로 전이하기 좋음.",
    prompt: "cinematic photograph of a contemplative elven woman reading a book in ancient ruins. the pages of the book emit a faint blue glow. medium close-up portrait with a shallow depth of field to focus on the queen. muted cinematic color palette with slight film grain. art directed, professional composition. movie still. theatrical, anamorphic lens, 35mm",
    tags: ["#AI이미지프롬프트", "#블루톤", "#시네마틱", "#35mm", "#발광", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37153288703891",
    visual: { background: "#152238", accent: "#63b9f4", ink: "#edf4fa", radiusOne: "50%", radiusTwo: "24px", rotate: "-3deg", label: "BLUE GLOW / 35MM / RUINS" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·1920×1088 결과를 함께 제공하고 청색 발광원, 35mm 아나모픽 렌즈, 얕은 심도, 저채도 팔레트와 필름 그레인을 독립 통제어로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["에디토리얼", "듀오톤", "중앙집중", "필름그레인", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37153288703891", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cinematic photograph of a contemplative elven woman reading a book in ancient ruins. the pages of the book emit a faint blue glow. medium close-up portrait with a shallow depth of field to focus on the queen. muted cinematic color palette with slight film grain. art directed, professional composition. movie still. theatrical, anamorphic lens, 35mm", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Cinematic 예시·결과 1920×1088·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37153288703891", "fragment_map": [{ "조각": "pages ... emit a faint blue glow", "효과": "책을 유일한 시안·블루 발광원으로 설정" }, { "조각": "medium close-up ... shallow depth of field", "효과": "인물과 발광 페이지에 초점을 고정하고 유적을 흐림" }, { "조각": "muted cinematic color palette with slight film grain", "효과": "저채도 냉색 톤과 미세한 필름 입자 결합" }, { "조각": "theatrical, anamorphic lens, 35mm", "효과": "광원 번짐과 넓은 영화적 프레이밍 부여" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-27", "수집사유": "최근 갱신된 공식 프롬프트 가이드에서 전체 프롬프트·모델·1920×1088 블루톤 결과가 확인됨" }
    }
  },
  {
    title: "CRT Static Dancer — 어두운 들판의 발광 노이즈 인체",
    category: "AI 이미지 프롬프트", date: "2026-07-27", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#static-hologram-dancer",
    summary: "야간 들판의 동작 중인 인물을 CRT 정적 노이즈와 부드러운 자발광으로 구성하고 Portra 필름의 어두운 시네마 톤으로 마감한 공식 결과.",
    note: "실루엣·노이즈 재질·동작 포즈·주변 노출을 분리해 사이버보안, 통신, 데이터 스트림처럼 보이지 않는 기술을 인체 중심 캠페인 그래픽으로 번역하기 좋음.",
    prompt: "cinematic, ethereal mysterious. professional action shot of character made entirely of glowing and glitching CRT static. dynamic and expressive dance pose caught mid-motion. moody and dark cinematic scene captured on portra film. night time. a surreal action scene in a vast field.",
    tags: ["#AI이미지프롬프트", "#CRT", "#글리치", "#홀로그램", "#Portra", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37153279794451",
    visual: { background: "#111116", accent: "#a8e6ff", ink: "#f0edf7", radiusOne: "0", radiusTwo: "50%", rotate: "3deg", label: "STATIC / GLOW / MOTION" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·1360×768 결과를 제공하고 CRT 정적 재질, 자발광, 동작 중 포즈, Portra 필름과 야간 들판을 재조합 가능한 시각 통제어로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["3D", "모노톤", "중앙집중", "필름그레인", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37153279794451", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cinematic, ethereal mysterious. professional action shot of character made entirely of glowing and glitching CRT static. dynamic and expressive dance pose caught mid-motion. moody and dark cinematic scene captured on portra film. night time. a surreal action scene in a vast field.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Static hologram 예시·결과 1360×768·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37153279794451", "fragment_map": [{ "조각": "character made entirely of glowing and glitching CRT static", "효과": "인체 실루엣을 발광하는 스캔라인·노이즈 재질로 치환" }, { "조각": "dynamic and expressive dance pose caught mid-motion", "효과": "정지 이미지에 방향성과 운동 에너지 부여" }, { "조각": "moody and dark cinematic scene captured on portra film", "효과": "발광 피사체가 돋보이는 어두운 필름 톤 형성" }, { "조각": "night time ... in a vast field", "효과": "검은 여백이 큰 야외 공간으로 노이즈 윤곽 분리" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-27", "수집사유": "최근 갱신된 공식 프롬프트 가이드에서 전체 프롬프트·모델·1360×768 결과가 확인됨" }
    }
  },
  {
    title: "Red Circle High Angle — 안개 계곡의 원형 군무를 내려다보는 숏",
    category: "AI 영상 프롬프트", date: "2026-07-27", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#high-angle-red-circle",
    summary: "회청색 안개와 바위 사이에서 짙은 붉은 로브 인물들이 손을 잡고 원형으로 움직이는 장면을 하이앵글·확산 월광으로 통제한 공식 Gen-4.5 결과.",
    note: "군집 형태, 카메라 높이, 중앙 여백, 적색과 냉회색 대비를 한 문장에 고정해 네트워크·커뮤니티·협업 시스템의 상징적 티저 모션으로 전이하기 좋음.",
    prompt: "A group of figures wearing heavy, hooded robes, predominantly deep red with a few in grey, hold hands and dance in a circle within a misty valley. The high-angle shot captures the entire formation amidst a field of blooming red wildflowers and jagged grey rocks, with dense fog obscuring the background. Soft, diffused moonlight filters through the haze, casting long, faint shadows across the dirt clearing in the center. The color palette features a stark contrast between the blood-red robes and flowers against the cool, desaturated blue-greys of the mist and stone.",
    tags: ["#AI영상프롬프트", "#Gen45", "#하이앵글", "#원형구도", "#컬러대비", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504721939",
    visual: { background: "#303941", accent: "#a91f2c", ink: "#eef0ed", radiusOne: "50%", radiusTwo: "0", rotate: "-3deg", label: "CIRCLE / MIST / HIGH ANGLE" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·640×360 결과 GIF를 제공하고 원형 군무, 하이앵글, 안개·월광, 적색과 냉회색 대비를 독립된 운동·색 통제어로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름", "인터랙션"], "시각렌즈": ["듀오톤", "중앙집중", "소프트확산광", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504721939", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A group of figures wearing heavy, hooded robes, predominantly deep red with a few in grey, hold hands and dance in a circle within a misty valley. The high-angle shot captures the entire formation amidst a field of blooming red wildflowers and jagged grey rocks, with dense fog obscuring the background. Soft, diffused moonlight filters through the haze, casting long, faint shadows across the dirt clearing in the center. The color palette features a stark contrast between the blood-red robes and flowers against the cool, desaturated blue-greys of the mist and stone.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720 생성 지원·24/25fps·공식 High angle 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504721939", "fragment_map": [{ "조각": "hold hands and dance in a circle", "효과": "집단의 연결을 하나의 반복 원형 운동으로 고정" }, { "조각": "high-angle shot captures the entire formation", "효과": "군집 형태와 중앙 여백을 한 프레임에서 읽히게 함" }, { "조각": "soft, diffused moonlight filters through the haze", "효과": "안개 속에 긴 약한 그림자와 확산된 깊이 생성" }, { "조각": "blood-red ... against cool, desaturated blue-greys", "효과": "적색 피사체와 냉회색 환경의 강한 온도 대비" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-27", "수집사유": "2026-06-27 갱신된 공식 카메라 예시에서 전체 프롬프트·모델·640×360 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Blue Corridor Frame-within-Frame — 빛의 문으로 걸어가는 냉색 실루엣",
    category: "AI 영상 프롬프트", date: "2026-07-27", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#frame-within-frame-blue-corridor",
    summary: "반투명 드레스의 인물이 물기 어린 끝없는 복도를 걸어가고, 수직 광원이 만든 내부 프레임이 실루엣을 감싸는 공식 Gen-4.5 숏.",
    note: "외부 화면·복도·수직 빛을 삼중 깊이로 배치하고 저대비 블루그레이 팔레트를 유지해 보안 게이트, 데이터 터널, 미래 인터페이스의 전환 장면으로 활용하기 좋음.",
    prompt: "Frame within frame composition of a lone female figure with a distinct bob haircut, wearing a flowing, semi-sheer dress with full sleeves, is silhouetted from behind as she walks away from the viewer. The composition is centered and framing the figure with a vertical light source at the far end of a seemingly endless, watery corridor. Ethereal, dreamscape, surreal, cinematic, low contrast, cool blue-gray.",
    tags: ["#AI영상프롬프트", "#Gen45", "#프레임인프레임", "#블루그레이", "#복도", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504734355",
    visual: { background: "#26333f", accent: "#b8dceb", ink: "#eef6f8", radiusOne: "0", radiusTwo: "50%", rotate: "2deg", label: "FRAME / CORRIDOR / BLUE" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 예시가 전체 프롬프트·Gen-4.5 모델·640×360 결과 GIF를 제공하고 후면 보행, 중앙 실루엣, 수직 광원 내부 프레임, 저대비 블루그레이를 재현 가능한 구도·운동 조각으로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름", "인터랙션"], "시각렌즈": ["미니멀", "모노톤", "중앙집중", "글로시", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504734355", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Frame within frame composition of a lone female figure with a distinct bob haircut, wearing a flowing, semi-sheer dress with full sleeves, is silhouetted from behind as she walks away from the viewer. The composition is centered and framing the figure with a vertical light source at the far end of a seemingly endless, watery corridor. Ethereal, dreamscape, surreal, cinematic, low contrast, cool blue-gray.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720 생성 지원·24/25fps·공식 Frame within frame 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504734355", "fragment_map": [{ "조각": "silhouetted from behind as she walks away", "효과": "후면 실루엣과 한 방향 보행으로 진입감을 형성" }, { "조각": "frame within frame composition", "효과": "외부 화면 안에 복도와 수직 빛의 내부 프레임 추가" }, { "조각": "vertical light source at the far end", "효과": "원근의 종착점을 밝은 세로선으로 고정" }, { "조각": "low contrast, cool blue-gray", "효과": "물기 있는 공간 전체를 저대비 냉색 톤으로 통일" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-27", "수집사유": "2026-06-27 갱신된 공식 카메라 예시에서 전체 프롬프트·모델·640×360 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Edição Folha — 인쇄 지면에서 네이티브 기사로 이어지는 두 탭 독서 흐름",
    category: "웹·앱 UI", date: "2026-07-27", url: "https://www.behance.net/gallery/252515439/Edicao-Folha",
    summary: "신문 지면 복제본의 각 헤드라인을 인터랙티브 영역으로 매핑해 앱 밖 검색 없이 반응형 기사, 공유·저장·선물 기능으로 이어지게 한 실제 편집 제품 개선.",
    note: "익숙한 인쇄 지면은 보존하면서 숨은 링크 영역과 네이티브 액션 바를 덧붙여 수동 열람을 측정 가능한 디지털 독서 여정으로 바꾼 점이 콘텐츠 플랫폼 설계에 구체적임.",
    tags: ["#웹앱UI", "#뉴스앱", "#에디토리얼", "#독서흐름", "#인터랙션", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e43ad5252515439.6a5669e64c2c5.png",
    visual: { background: "#f3efe7", accent: "#c51f2f", ink: "#171717", radiusOne: "0", radiusTwo: "24px", rotate: "-2deg", label: "PRINT / TAP / NATIVE" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공개된 실제 지면·모바일 화면과 구현 결과가 헤드라인 터치 영역, 네이티브 기사, 공유·저장·선물 액션, 시작 화면 개인화를 연결해 편집 콘텐츠 앱의 재사용 가능한 독서 흐름으로 시스템화한다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e43ad5252515439.6a5669e64c2c5.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "인쇄 지면 열람→헤드라인 터치 영역 선택→반응형 네이티브 기사→공유·저장·선물→앱 시작 화면 개인화", "screens": "지면 복제본·터치 힌트·네이티브 기사·액션 바·공유 모달·업데이트 배너·홈 선택" } },
      "출처": { "소스": "https://www.behance.net/gallery/252515439/Edicao-Folha", "수집일": "2026-07-27", "수집사유": "2026-07-14 공개된 실제 제품 개선 사례에서 전체 독서 흐름과 200 응답 대표 PNG가 확인됨" }
    }
  },
  {
    title: "This Is Random #17 — 데이터·AI·업무 압력을 초현실 편집 이미지로 번역",
    category: "비주얼 그래픽", date: "2026-07-27", url: "https://www.behance.net/gallery/253245709/This-Is-Random-17-Personal-Project",
    summary: "학업 성취의 평준화, 데이터 중심 의사결정, AI와 지속가능성 같은 추상 주제를 인물·사물의 비현실적 결합과 강한 여백으로 압축한 최신 에디토리얼 이미지 모음.",
    note: "복잡한 산업 논점을 설명 아이콘으로 축소하지 않고 하나의 역설적 장면과 제한된 색으로 기억점 있게 만드는 방식이 리포트 표지·테크 아티클 일러스트에 유용함.",
    tags: ["#비주얼그래픽", "#에디토리얼", "#초현실", "#개념일러스트", "#AI", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/48e70a253245709.6a63991c43ad6.jpg",
    visual: { background: "#e9e2d6", accent: "#ea6045", ink: "#202020", radiusOne: "50%", radiusTwo: "0", rotate: "3deg", label: "IDEA / COLLISION / EDITORIAL" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 4, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "2026년 5~7월 실제 발행 에디토리얼 이미지가 하나의 추상 논점을 인물·사물의 역설적 충돌, 제한 팔레트, 큰 여백과 단일 초점으로 압축해 테크 리포트용 개념 시각 문법으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["콘텐츠명료성", "타이포그래피"], "시각렌즈": ["에디토리얼", "비대칭", "여백중심", "필름그레인", "몽환"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/48e70a253245709.6a63991c43ad6.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "현실 인물·사물의 비례 전복, 제한된 색, 큰 여백, 단일 초현실 행동, 편집 캡션", "reusable_rule": "한 논점을 상반된 두 대상을 충돌시키는 단일 장면으로 만들고 배경 정보를 줄여 역설을 주 초점으로 고정" } },
      "출처": { "소스": "Behance / Sebastian Cestaro", "수집일": "2026-07-27", "수집사유": "2026-07-24 공개된 Best of Behance 프로젝트에서 실제 발행 이미지 7개와 200 응답 대표 JPEG가 확인됨" }
    }
  },
  {
    title: "LÔCÔ Art Market — 상자·테이프·라벨을 문화 생산 라인으로 확장한 아이덴티티",
    category: "브랜드", date: "2026-07-27", url: "https://www.behance.net/gallery/253122291/LOCO-Art-Market",
    summary: "골판지 상자, 포장 테이프, 운송 라벨과 창고 표식을 모듈로 삼아 아트 마켓의 인쇄·공간·소셜·웹 경험을 하나의 유희적 공장 시스템으로 연결.",
    note: "일상 물류 재료의 기능적 색과 반복 구조를 브랜드 규칙으로 추출하고 내부 글리프 생성 도구까지 만든 점이 시즌별 콘텐츠를 빠르게 확장하는 실무형 아이덴티티로 뛰어남.",
    tags: ["#브랜드", "#아트마켓", "#패키징", "#모듈시스템", "#타이포그래피", "#툴메이킹"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c0c904253122291.6a6190bcc96c3.png",
    visual: { background: "#c9a879", accent: "#ff4f2f", ink: "#17120e", radiusOne: "0", radiusTwo: "24px", rotate: "-3deg", label: "BOX / LABEL / CULTURE" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "실제 행사·인쇄·디지털 화면과 내부 글리프 생성기가 상자 비례, 테이프 고채도, 모노 글꼴, 라벨·손글씨의 역할을 반복해 시즌형 문화 브랜드의 확장 가능한 스타일 시스템으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "하이채도", "그리드", "비대칭", "매트", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c0c904253122291.6a6190bcc96c3.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "기울고 겹치는 상자형 로고·골판지 매트 질감·고가시성 테이프·운송 라벨·모노/가변폭/손글씨 타이포·Glyph Box Generator", "applications": "행사 입구·부스 사인·배너·포스터·소셜 캐러셀·웹·패키지·스티커" } },
      "출처": { "소스": "Behance / M — N Associates", "수집일": "2026-07-27", "수집사유": "2026-07-23 공개된 Best of Behance 프로젝트에서 전체 브랜드 시스템과 실제 행사·디지털 응용, 200 응답 대표 PNG가 확인됨" }
    }
  },
  {
    title: "헤빵 — 집순이·운동 회피·그냥 힘든 날을 밝게 푸는 공감형 인스타툰",
    category: "공감형 웹툰", date: "2026-07-26", url: "https://www.hankookilbo.com/News/Read/A2023071306070001632",
    summary: "평범한 일상을 귀여운 그림체와 짧은 컷 전개로 가볍게 넘기면서도, 다들 내심 갖고 있는 귀찮음과 무기력을 유쾌한 공감 포인트로 묶는 국내 인스타툰 사례.",
    note: "직장·관계 같은 큰 서사보다 집순이, 운동 싫음, 그냥 다 힘든 날 같은 미세한 감정을 짧은 카피와 캐릭터 반응으로 정리해 소셜 캐러셀형 공감 콘텐츠 문법을 참고하기 좋음.",
    tags: ["#공감형웹툰", "#국내작가", "#인스타툰", "#일상공감", "#짧은서사", "#캐릭터반응"],
    thumbnail: "https://newsimg.hankookilbo.com/cms/articlerelease/2023/07/13/94aa49b5-e7ee-4136-bc1c-e87e0b7b74a5.png",
    visual: { background: "#f3e6d8", accent: "#ff9772", ink: "#2e2a26", radiusOne: "50%", radiusTwo: "24px", rotate: "-2deg", label: "RELATABLE / DAILY / LIGHT" },
    review: {
      "유형": "공감형 웹툰", "가치축_이름": "스타일추출성", "scores": { "완성도": 4, "신규성": 4, "근거성": 4, "가치축": 4 }, "total": 16, "verdict": "accept",
      "근거": "한국일보 기사가 헤빵을 인스타툰 작가로 직접 소개하고 실제 컷 이미지를 여러 장 공개하며 집순이, 운동이 싫은 사람의 특징 같은 일상 공감 소재를 밝고 유쾌한 톤으로 반복 전개하는 방식을 확인할 수 있다.",
      "metadata": { "정보렌즈": ["콘텐츠명료성", "브랜드일관성"], "시각렌즈": ["일러스트", "여백중심", "유희적"], "시각아티팩트_url": "https://newsimg.hankookilbo.com/cms/articlerelease/2023/07/13/94aa49b5-e7ee-4136-bc1c-e87e0b7b74a5.png", "커버리지_카테고리": "공감형 웹툰", "보안_등급": "raw_ok", "type_block": { "format": "인스타그램 캐러셀형 단편 일상툰", "transferable_style": "짧은 공감 카피·둥근 캐릭터 반응·일상 무기력 소재·한 화 완결 구조" } },
      "출처": { "소스": "https://www.hankookilbo.com/News/Read/A2023071306070001632", "수집일": "2026-07-26", "수집사유": "한국일보가 2023-07-14 기사에서 헤빵을 국내 인스타툰 작가로 소개하고 실제 작품 컷 이미지를 다수 공개하며 일상 공감형 소재를 직접 설명함" }
    }
  },
  {
    title: "Lo-Fi Space Reader — 우주선 독서 장면을 1980년대 애니 패널로",
    category: "AI 이미지 프롬프트", date: "2026-07-26", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#lo-fi-spaceship-reading",
    summary: "우주선 안에서 책을 읽는 인물을 손그림 패널, 저채도 파스텔, 소프트 그레인으로 묶어 미래 배경과 향수 어린 인쇄 감각을 공존시킨 공식 Gen-4 Image 결과.",
    note: "주제·시대감·인쇄 질감·팔레트를 분리해 통제하므로 AI·우주 테크 콘텐츠를 인간적인 에디토리얼 일러스트로 번역할 때 재사용하기 좋음.",
    prompt: "a hand drawn panel from an old japanese anime about a woman reading a book in a spaceship. Lo-fi 1980s japanese magazine art style, muted tones, pastel color palette, soft grain, nostalgic aesthetic, animated",
    tags: ["#AI이미지프롬프트", "#우주선", "#로파이", "#애니패널", "#파스텔", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37067220608659",
    visual: { background: "#d9d1bc", accent: "#9ab7c7", ink: "#2f3440", radiusOne: "0", radiusTwo: "24px", rotate: "-3deg", label: "LO-FI / SPACE / READER" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 함께 제공하고 우주선 배경, 손그림 패널, 저채도 파스텔과 소프트 그레인을 조합 가능한 통제어로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["일러스트", "파스텔", "그리드", "필름그레인", "따뜻"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37067220608659", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "a hand drawn panel from an old japanese anime about a woman reading a book in a spaceship. Lo-fi 1980s japanese magazine art style, muted tones, pastel color palette, soft grain, nostalgic aesthetic, animated", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Aesthetic Styles 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37067220608659", "fragment_map": [{ "조각": "woman reading a book in a spaceship", "효과": "미래형 우주선 안에 정적인 일상 서사를 배치" }, { "조각": "hand drawn panel", "효과": "완결된 한 컷짜리 손그림 프레임 구성" }, { "조각": "lo-fi 1980s japanese magazine art style", "효과": "1980년대 인쇄 애니 패널의 단순화된 선과 면" }, { "조각": "muted tones, pastel color palette, soft grain", "효과": "저채도 파스텔과 부드러운 인쇄 그레인 결합" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-26", "수집사유": "최근 갱신된 공식 가이드에서 전체 프롬프트·모델 설정·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Iridescent Wing Macro — 검은 나비 날개의 미세한 광택 운동",
    category: "AI 영상 프롬프트", date: "2026-07-26", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#macro-iridescent-butterfly",
    summary: "검은 나비 날개의 무지갯빛 비늘을 거대한 지형처럼 확대하고 날개의 미세한 움직임만 남긴 공식 Gen-4.5 매크로 결과.",
    note: "피사체 크기보다 표면의 광택·패턴·미세 운동을 주인공으로 만드는 문법이라 반도체 웨이퍼, 센서, 소재 기술의 티저 모션으로 전이하기 좋음.",
    prompt: "A macro close-up explores the iridescent facets of a black butterfly wing. Wings gently move",
    tags: ["#AI영상프롬프트", "#Gen45", "#매크로", "#무지갯빛", "#미세운동", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515589907",
    visual: { background: "#111318", accent: "#5ec6c8", ink: "#f1f0ea", radiusOne: "50%", radiusTwo: "24px", rotate: "3deg", label: "MACRO / FACETS / GENTLE" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 매크로 배율, 검은 날개, 무지갯빛 미세면과 약한 운동을 분리해 소재 중심 숏으로 반복 재현한다.",
      "metadata": { "정보렌즈": ["AI활용", "인터랙션"], "시각렌즈": ["3D", "그라디언트", "중앙집중", "글로시", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515589907", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A macro close-up explores the iridescent facets of a black butterfly wing. Wings gently move", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Macro 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515589907", "fragment_map": [{ "조각": "macro close-up", "효과": "작은 표면을 화면 전체의 지형처럼 확대" }, { "조각": "iridescent facets", "효과": "각도에 따라 색이 달라지는 미세 광택 면 강조" }, { "조각": "black butterfly wing", "효과": "검은 바탕으로 무지갯빛 반사의 대비 확보" }, { "조각": "Wings gently move", "효과": "형태는 유지하면서 표면 반사만 변하는 미세 운동" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-26", "수집사유": "2026-06-27 갱신된 공식 카메라 예시에서 전체 프롬프트·모델 설정·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Bioluminescent Console Push-In — 발광 눈으로 좁혀 가는 외계 조작실",
    category: "AI 영상 프롬프트", date: "2026-07-26", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#push-in-bioluminescent-alien",
    summary: "검은 보호 장비를 입은 물고기형 생명체가 콘솔을 조작하는 중경에서 시작해 비늘과 생체 발광 눈까지 천천히 좁혀 가는 공식 Gen-4.5 숏.",
    note: "행동·카메라 전진·재질 디테일·포트홀 주변광의 우선순위를 한 문장으로 고정해 게임, 로보틱스, 미래형 인터페이스의 인트로로 활용하기 좋음.",
    prompt: "A medium shot of a fish-like alien creature in sleek, black protective gear, observing a console with a single three-fingered hand. The camera slowly pushes in, framing the alien's intricate facial scales and large, bioluminescent eyes, illuminated by natural, ambient light filtering through a porthole, highlighting its focused expression.",
    tags: ["#AI영상프롬프트", "#Gen45", "#푸시인", "#생체발광", "#미래인터페이스", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515615379",
    visual: { background: "#0b1118", accent: "#76e2cf", ink: "#e9f4f1", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "CONSOLE / PUSH / GLOW" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공식 Gen-4.5 결과와 전체 프롬프트가 콘솔 조작 행동, 느린 푸시인, 얼굴 비늘, 발광 눈과 포트홀 주변광을 분리해 미래형 인터페이스 공개 숏으로 반복 재현한다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름", "인터랙션"], "시각렌즈": ["3D", "듀오톤", "중앙집중", "글로시", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515615379", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A medium shot of a fish-like alien creature in sleek, black protective gear, observing a console with a single three-fingered hand. The camera slowly pushes in, framing the alien's intricate facial scales and large, bioluminescent eyes, illuminated by natural, ambient light filtering through a porthole, highlighting its focused expression.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Push in 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515615379", "fragment_map": [{ "조각": "medium shot ... observing a console", "효과": "행동과 공간을 함께 읽히는 중경으로 시작" }, { "조각": "camera slowly pushes in", "효과": "관찰 화면에서 표정 중심 화면으로 부드럽게 전진" }, { "조각": "intricate facial scales and large, bioluminescent eyes", "효과": "비늘 재질과 발광 눈을 종착점 디테일로 설정" }, { "조각": "ambient light filtering through a porthole", "효과": "포트홀 자연광으로 검은 보호 장비와 얼굴을 분리" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-26", "수집사유": "2026-06-27 갱신된 공식 카메라 예시에서 전체 프롬프트·모델 설정·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Figma Variables HTML to Design — 코드 화면을 토큰에 다시 연결하는 복귀 흐름",
    category: "AI 디자인", date: "2026-07-26", url: "https://www.figma.com/release-notes/#bring-code-backed-screens-onto-the-canvas-with-variables-attached",
    summary: "Make 미리보기, Figma MCP, Chrome 캡처로 가져온 코드 기반 화면의 색·타입·간격을 기존 변수에 바인딩하고 Auto Layout까지 유지하는 공식 캔버스 흐름.",
    note: "AI·코드 결과를 하드코딩된 최종물로 남기지 않고 기존 디자인 시스템 토큰과 편집 가능한 레이아웃에 재결합해 왕복 제작의 정리 비용을 줄임.",
    tags: ["#AI디자인", "#Figma", "#MCP", "#디자인토큰", "#오토레이아웃", "#테크IT"],
    thumbnail: "https://i.vimeocdn.com/video/2180479793-828fe12414fedeec619c17ffecb05e3761e8e715d200486d987c5e8fd5a7a18e-d",
    visual: { background: "#1e1e1e", accent: "#a7e5ca", ink: "#ffffff", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "CODE / VARIABLES / REFLOW" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Figma 공식 2026-07-16 릴리스가 실제 Variables HTML to Design 영상을 제공하고 코드 화면 가져오기, 기존 변수 바인딩, Auto Layout 복구를 재현 가능한 왕복 제작 흐름으로 공개한다.",
      "metadata": { "정보렌즈": ["사용자흐름", "브랜드일관성", "인터랙션", "AI활용"], "시각렌즈": ["미니멀", "그리드", "고밀도", "절제", "모션필"], "시각아티팩트_url": "https://i.vimeocdn.com/video/2180479793-828fe12414fedeec619c17ffecb05e3761e8e715d200486d987c5e8fd5a7a18e-d", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "Make·MCP·Chrome에서 코드 화면 가져오기→기존 색·타입·간격 변수 자동 바인딩→Auto Layout 프레임 편집·리플로", "ai_role": "코드 기반 화면을 생성·캡처한 뒤 디자인 시스템 변수와 편집 가능한 구조로 재결합" } },
      "출처": { "소스": "https://www.figma.com/release-notes/", "수집일": "2026-07-26", "수집사유": "2026-07-16 공식 릴리스의 실제 기능 영상과 200 응답 3840×2160 Vimeo 포스터가 확인됨" }
    }
  },
  {
    title: "Apple 27 Design Kits — 코드 명명과 상태를 맞춘 플랫폼 컴포넌트",
    category: "웹 스타일가이드", date: "2026-07-26", url: "https://developer.apple.com/hello/july26/#design-resources",
    summary: "iOS·iPadOS·macOS 27의 키보드, 탭 바, 메뉴, 버튼, 슬라이더, 토글을 Liquid Glass·다크 모드·확장 상태와 함께 제공하는 공식 Figma·Sketch 키트.",
    note: "컴포넌트 이름을 코드와 맞추고 리사이징·상태·다크 모드를 한 키트에 묶어 플랫폼 UI의 디자인→구현 정합성을 관리하는 기준으로 유용함.",
    tags: ["#웹스타일가이드", "#Apple", "#디자인키트", "#컴포넌트상태", "#다크모드", "#테크IT"],
    thumbnail: "https://developer.apple.com/click/images/mcfly/hellojuly26-design-resources_2x.jpg",
    visual: { background: "#0b0b0d", accent: "#b9d8ff", ink: "#ffffff", radiusOne: "24px", radiusTwo: "50%", rotate: "-2deg", label: "PLATFORM / STATE / CODE" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Apple 공식 2026년 7월 자료가 실제 다크 모드 컴포넌트 콜라주와 함께 Liquid Glass, 확장 상태, 코드 정렬 명명, 리사이징과 macOS 다크 모드까지 공개해 플랫폼 UI 규칙으로 즉시 흡수할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "브랜드일관성", "접근성", "인터랙션"], "시각렌즈": ["글래스모피즘", "모노톤", "그리드", "글로시", "차가움"], "시각아티팩트_url": "https://developer.apple.com/click/images/mcfly/hellojuly26-design-resources_2x.jpg", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "Liquid Glass·플랫폼별 다크 모드·코드와 정렬된 명명", "components": "키보드·탭 바·컨텍스트 메뉴·액션 버튼·슬라이더·토글의 확장 상태와 리사이징" } },
      "출처": { "소스": "https://developer.apple.com/hello/july26/", "수집일": "2026-07-26", "수집사유": "2026년 7월 Apple Developer 공식 페이지에서 실제 플랫폼 컴포넌트 콜라주와 200 응답 1400×708 이미지가 확인됨" }
    }
  },
  {
    title: "Cantor8 — 디지털 자산 인프라를 기관급 신뢰로 번역한 웹",
    category: "웹·앱 UI", date: "2026-07-26", url: "https://www.behance.net/gallery/252610351/Cantor8",
    summary: "Canton Network 기반 디지털 자산 인프라의 연결·확장 구조를 절제된 화면 위계와 상호작용으로 설명해 금융기관의 신뢰를 만든 공개 웹 경험.",
    note: "복잡한 블록체인 인프라를 기능 나열보다 생태계 연결, 기관 신뢰, 확장 흐름의 순서로 풀어 B2B 핀테크 사이트의 정보 구조에 참고할 만함.",
    tags: ["#웹앱UI", "#핀테크", "#디지털자산", "#정보구조", "#인터랙션", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b40478252610351.6a57ccccb1483.png",
    visual: { background: "#18191b", accent: "#dfefb1", ink: "#f5f5ef", radiusOne: "0", radiusTwo: "24px", rotate: "3deg", label: "ASSETS / CONNECT / TRUST" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 4 }, "total": 17, "verdict": "accept",
      "근거": "공개 실제 웹 화면과 라이브 사이트가 디지털 자산 인프라의 연결 구조, 기관 신뢰 메시지와 상호작용을 일관된 위계로 반복해 B2B 핀테크 정보 구조로 시스템화한다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "브랜드일관성", "인터랙션"], "시각렌즈": ["미니멀", "모노톤", "그리드", "여백중심", "절제", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b40478252610351.6a57ccccb1483.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "기관급 디지털 자산 문제→Canton Network 연결 인프라→보안·확장 가치→라이브 제품 탐색", "screens": "도입·생태계 설명·연결 구조·기관 신뢰 메시지·반응형 웹·인터랙션" } },
      "출처": { "소스": "Behance / Le:mma Studio", "수집일": "2026-07-26", "수집사유": "2026-07-16 공개된 UI/UX Featured 프로젝트에서 실제 웹 화면·라이브 사이트와 200 응답 og:image가 확인됨" }
    }
  },
  {
    title: "REMINI — 투명 젤과 별 입자를 쌓은 K-pop 3D 캐릭터",
    category: "비주얼 그래픽", date: "2026-07-26", url: "https://www.behance.net/gallery/252489311/_",
    summary: "반투명 젤 재질, 별 입자, 둥근 실루엣과 파스텔 광원을 반복해 공식 캐릭터를 스티커·오브젝트·장면으로 확장한 Cinema 4D·Blender 시리즈.",
    note: "캐릭터의 핵심 실루엣을 고정하고 투명도·입자·표정·소품만 바꿔 팬 콘텐츠를 연속 생산하는 3D 그래픽 시스템으로 참고하기 좋음.",
    tags: ["#비주얼그래픽", "#3D캐릭터", "#젤재질", "#파스텔", "#Kpop"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/max_808/1469e5252489311.Y3JvcCwyNDU0LDE5MjAsNTQsMA.jpg",
    visual: { background: "#d9e9f6", accent: "#efc8e4", ink: "#40354d", radiusOne: "50%", radiusTwo: "24px", rotate: "-4deg", label: "GEL / STAR / CHARACTER" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "공개 다중 결과물이 둥근 캐릭터 실루엣, 반투명 젤, 별 입자, 파스텔 광원을 반복해 스티커·3D 오브젝트·장면으로 확장 가능한 스타일 규칙을 명확히 보여 준다.",
      "metadata": { "정보렌즈": ["브랜드일관성"], "시각렌즈": ["3D", "파스텔", "중앙집중", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/projects/max_808/1469e5252489311.Y3JvcCwyNDU0LDE5MjAsNTQsMA.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "format": "Cinema 4D·Blender 기반 공식 캐릭터 3D 시리즈", "transferable_style": "둥근 실루엣·반투명 젤·별 입자·파스텔 광원·표정과 소품 변주" } },
      "출처": { "소스": "Behance / Allabo-x 외", "수집일": "2026-07-26", "수집사유": "2026-07-23 공개된 Best of Behance 프로젝트에서 다중 공식 캐릭터 결과물과 200 응답 og:image가 확인됨" }
    }
  },
  {
    title: "SYNORA — 오로라와 별의 흐름으로 구축한 AI 플랫폼 브랜드",
    category: "브랜드", date: "2026-07-26", url: "https://www.behance.net/gallery/252444713/SYNORA-Premium-AI-Platform-Design",
    summary: "오로라형 그라디언트, 별 점, 심야 네이비와 미니멀한 UI를 하나의 규칙으로 묶어 복잡한 AI 기능을 차분하고 프리미엄하게 보이게 한 아이덴티티.",
    note: "추상적인 AI의 지능·흐름·가능성을 오로라 곡선과 별 점의 반복 규칙으로 줄여 로고, 웹, 제품 UI에 일관되게 적용한 점이 AI 서비스 브랜딩에 유용함.",
    tags: ["#브랜드", "#AI플랫폼", "#오로라", "#그라디언트", "#테크브랜딩", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2cb228252444713.6a4f8d699faa7.png",
    visual: { background: "#071224", accent: "#7fe7d6", ink: "#f0f5ff", radiusOne: "24px", radiusTwo: "50%", rotate: "2deg", label: "AURORA / STAR / INTELLIGENCE" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 4 }, "total": 17, "verdict": "accept",
      "근거": "공개 로고·웹·제품 UI가 오로라형 그라디언트, 별 점, 심야 네이비와 여백 규칙을 반복해 AI 플랫폼의 차분한 프리미엄 스타일로 추출 가능하다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "AI활용"], "시각렌즈": ["미니멀", "그라디언트", "여백중심", "글로시", "차가움"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2cb228252444713.6a4f8d699faa7.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "identity": "오로라 곡선·별 점·심야 네이비·소프트 글로우", "applications": "로고·랜딩 페이지·AI 제품 UI·디지털 캠페인" } },
      "출처": { "소스": "Behance / Vollyt Design", "수집일": "2026-07-26", "수집사유": "2026-07-09 공개된 AI 플랫폼 아이덴티티에서 다중 브랜드·UI 결과물과 200 응답 og:image가 확인됨" }
    }
  },
  {
    title: "Liquid Chrome Architecture — 냉색 고전 건축을 휘감는 홀로그램 액체",
    category: "AI 이미지 프롬프트", date: "2026-07-25", url: "https://help.runwayml.com/hc/en-us/articles/37053594806419-Creating-with-Gen-4-Image#h_01JGX3TAG7VBAKJKGW50003P4C",
    summary: "백색 고전 건축을 검은 심연 속에서 비현실적으로 휘고 연결한 뒤 블루·그린 냉색과 액체 크롬의 무지갯빛 반사를 입힌 공식 Gen-4 Image 결과.",
    note: "형태 왜곡, 냉색 팔레트, 연결 재질, 표면 반사를 각각 분리해 통제하므로 테크 캠페인의 추상 건축 키비주얼과 소재 탐색에 바로 전이할 수 있음.",
    prompt: "photograph of warped ornate classic buildings in a black abyss. the buildings are in surreal shapes. the buildings curve and bend impossibly high into the black sky in a glitched swirl formation, defying gravity. stark white color palette with cool blue and green tones. distorted. warped, squished, and extremely deformed and exaggerated. avant-garde. vibrant red, blue, purple, jewel green. conjoined bubblegum stretch. hologram. encased in translucent liquid chrome with an iridescent sheen.",
    tags: ["#AI이미지프롬프트", "#블루톤", "#액체크롬", "#추상건축", "#3D", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37089796809363",
    visual: { background: "#080a0e", accent: "#48d4d0", ink: "#f3f5f7", radiusOne: "24px", radiusTwo: "50%", rotate: "-3deg", label: "WARP / CHROME / IRIDESCENT" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·지원 설정·1342×760 결과 PNG를 제공하고 건축 왜곡, 냉색, 액체 크롬과 무지갯빛 반사를 조합 가능한 통제어로 분리한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["3D", "그라디언트", "중앙집중", "글로시", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37089796809363", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "photograph of warped ornate classic buildings in a black abyss. the buildings are in surreal shapes. the buildings curve and bend impossibly high into the black sky in a glitched swirl formation, defying gravity. stark white color palette with cool blue and green tones. distorted. warped, squished, and extremely deformed and exaggerated. avant-garde. vibrant red, blue, purple, jewel green. conjoined bubblegum stretch. hologram. encased in translucent liquid chrome with an iridescent sheen.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·1080p/720p·지원 비율 16:9/9:16/1:1/4:3/3:4/21:9·예시의 seed/aesthetic range 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37089796809363", "fragment_map": [{ "조각": "warped ornate classic buildings in a black abyss", "효과": "검은 음영 속 백색 고전 건축을 주 피사체로 분리" }, { "조각": "cool blue and green tones", "효과": "블루·시안·그린 계열의 차가운 색 대비" }, { "조각": "glitched swirl formation, defying gravity", "효과": "건축 덩어리를 중력에서 벗어난 나선형 실루엣으로 왜곡" }, { "조각": "encased in translucent liquid chrome with an iridescent sheen", "효과": "반투명 액체 크롬과 무지갯빛 표면 반사" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/37053594806419-Creating-with-Gen-4-Image", "수집일": "2026-07-25", "수집사유": "2026-06-01 갱신된 공식 가이드에서 전체 프롬프트·모델 설정·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Hologram Static Figure — 밤의 꽃밭에 세운 백색 신호 인체",
    category: "AI 이미지 프롬프트", date: "2026-07-25", url: "https://help.runwayml.com/hc/en-us/articles/37053594806419-Creating-with-Gen-4-Image#h_01JGX3TAG7HPHKZTS20F3XGVS0",
    summary: "밤의 꽃밭 한가운데 역동적인 인체를 흰 홀로그램 노이즈로 구성하고 Aesthetic Range 5로 구조적 변주 폭을 넓힌 공식 결과.",
    note: "피사체·재질·환경·포즈를 짧게 고정한 뒤 단일 설정값으로 변주 폭을 비교할 수 있어 AI 캠페인 콘셉트 탐색과 배치 실험에 효율적임.",
    prompt: "cinematic photograph of a human made entirely of white hologram static in a field of flowers at night. dynamic pose",
    tags: ["#AI이미지프롬프트", "#홀로그램", "#노이즈", "#야간", "#콘셉트탐색", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37053594801683",
    visual: { background: "#101016", accent: "#efeff5", ink: "#d7e9df", radiusOne: "50%", radiusTwo: "24px", rotate: "4deg", label: "STATIC / NIGHT / RANGE 5" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 가이드가 동일 프롬프트의 Aesthetic Range 0·3·5 결과를 나란히 제공해 피사체 의미는 유지하면서 구조적 변주 강도를 조절하는 실험 기준으로 재사용할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["3D", "모노톤", "중앙집중", "하드라이트", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37053594801683", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "cinematic photograph of a human made entirely of white hologram static in a field of flowers at night. dynamic pose", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·Aesthetic Range 5·1080p/720p·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37053594801683", "fragment_map": [{ "조각": "human made entirely of white hologram static", "효과": "인체를 백색 신호 노이즈 재질로 치환" }, { "조각": "in a field of flowers at night", "효과": "어두운 자연 배경과 밝은 디지털 피사체 대비" }, { "조각": "dynamic pose", "효과": "정적인 중앙 배치 안에 관절 방향과 실루엣 긴장 부여" }, { "조각": "Aesthetic Range 5", "효과": "프롬프트 의미를 유지하며 구조·구도의 변주 폭 확대" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/37053594806419-Creating-with-Gen-4-Image", "수집일": "2026-07-25", "수집사유": "2026-06-01 갱신된 공식 가이드에서 전체 프롬프트·Aesthetic Range 5 설정·200 응답 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Lunar Skate Tracking — 저시점으로 병주하는 흑백 우주 스케이터",
    category: "AI 영상 프롬프트", date: "2026-07-25", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#tracking-astronaut-skateboarder",
    summary: "달 표면을 질주하는 우주 스케이터를 핸드헬드 저시점 카메라가 빠르게 병주하고 필름 그레인과 낮은 대비로 속도를 번지게 한 Gen-4.5 공식 숏.",
    note: "카메라 높이·추적 방식·속도·잔상·톤을 한 문장에 묶어 웨어러블·모빌리티·미래 스포츠 캠페인의 역동적 추적 숏으로 재사용하기 좋음.",
    prompt: "A handheld low angle tracking shot, with low contrast and fast-paced motion, follows a skilled astronaut skateboarder on a moon landscape. their movements blur against the soft glow of the dark lunar environment. Film grain, low contrast, black and white",
    tags: ["#AI영상프롬프트", "#Gen45", "#트래킹숏", "#우주", "#필름그레인", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504752019",
    visual: { background: "#141414", accent: "#d8d8d2", ink: "#f4f4ef", radiusOne: "0", radiusTwo: "50%", rotate: "-4deg", label: "LOW / TRACK / LUNAR" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 저시점 핸드헬드 추적, 빠른 병주, 달 표면 잔상, 흑백 그레인을 독립 통제어로 제시한다.",
      "metadata": { "정보렌즈": ["AI활용", "인터랙션"], "시각렌즈": ["미니멀", "모노톤", "비대칭", "필름그레인", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504752019", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A handheld low angle tracking shot, with low contrast and fast-paced motion, follows a skilled astronaut skateboarder on a moon landscape. their movements blur against the soft glow of the dark lunar environment. Film grain, low contrast, black and white", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Tracking 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504752019", "fragment_map": [{ "조각": "handheld low angle tracking shot", "효과": "피사체 아래에서 흔들림을 유지하며 옆으로 병주" }, { "조각": "fast-paced motion", "효과": "빠른 보드 이동과 카메라 추적 속도 동기화" }, { "조각": "movements blur against the soft glow", "효과": "달 표면의 부드러운 광원 위로 피사체 잔상 형성" }, { "조각": "Film grain, low contrast, black and white", "효과": "기록 필름 같은 저대비 흑백 질감" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-25", "수집사유": "2026-06-27 갱신된 공식 카메라 예시에서 전체 프롬프트·모델 설정·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Chrome Bubble Shallow Focus — 흐린 방을 비추는 부유 금속 표면",
    category: "AI 영상 프롬프트", date: "2026-07-25", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#shallow-focus-chrome-bubble",
    summary: "어두운 방을 매우 천천히 가로지르는 크롬 버블 하나에만 얕은 초점을 고정하고 왜곡 반사와 주변 보케를 몽환적으로 유지한 공식 Gen-4.5 결과.",
    note: "초점 깊이·이동 속도·반사 왜곡·배경 해상도를 독립적으로 지정해 핀테크·하드웨어·소재 브랜드의 정적인 고급 모션 루프로 옮기기 좋음.",
    prompt: "A shallow focus shot isolates a single, chrome bubble floating impossibly slowly through a dimly lit, silent room, its warping surface reflecting a distorted, blurred reality, while the surrounding furniture and walls dissolve into an impressionistic dreamscape, rendered in a low-contrast, observational style that evokes a sense of surreal tranquility.",
    tags: ["#AI영상프롬프트", "#Gen45", "#얕은초점", "#크롬", "#반사재질", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504778259",
    visual: { background: "#24252b", accent: "#b9c2cf", ink: "#f0eee8", radiusOne: "50%", radiusTwo: "50%", rotate: "3deg", label: "SHALLOW / CHROME / DRIFT" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공식 Gen-4.5 출력과 전체 프롬프트가 얕은 초점, 단일 크롬 버블, 극저속 부유, 왜곡 반사, 저대비 보케를 분리해 고급 소재 모션으로 반복 재현한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["3D", "모노톤", "중앙집중", "글로시", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504778259", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A shallow focus shot isolates a single, chrome bubble floating impossibly slowly through a dimly lit, silent room, its warping surface reflecting a distorted, blurred reality, while the surrounding furniture and walls dissolve into an impressionistic dreamscape, rendered in a low-contrast, observational style that evokes a sense of surreal tranquility.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Shallow focus 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504778259", "fragment_map": [{ "조각": "shallow focus shot isolates a single, chrome bubble", "효과": "단일 금속 구체만 선명하게 분리" }, { "조각": "floating impossibly slowly", "효과": "중력감이 거의 없는 극저속 수평 부유" }, { "조각": "warping surface reflecting a distorted, blurred reality", "효과": "곡면 크롬에 주변 공간을 늘여 반사" }, { "조각": "furniture and walls dissolve into an impressionistic dreamscape", "효과": "배경 가구와 벽을 저대비 보케로 해체" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-25", "수집사유": "2026-06-27 갱신된 공식 카메라 예시에서 전체 프롬프트·모델 설정·200 응답 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Figma Parallel AI Edits — 캔버스를 멈추지 않는 동시 이미지 생성",
    category: "AI 디자인", date: "2026-07-25", url: "https://www.figma.com/release-notes/#run-multiple-ai-image-edits-and-keep-designing-while-they-load",
    summary: "AI 이미지 편집을 여러 건 동시에 실행하고 캔버스 작업을 계속하면서 각 작업의 로딩 상태와 진행 아이콘을 추적하는 Figma의 병렬 생성 흐름.",
    note: "생성 대기 시간을 모달로 막지 않고 캔버스 안의 비동기 작업 상태로 바꿔, 다수 에셋을 비교·편집하는 캠페인 제작 도구의 상호작용 모델로 참고할 만함.",
    tags: ["#AI디자인", "#Figma", "#병렬생성", "#로딩상태", "#비동기UX", "#테크IT"],
    thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/afc9f3fa873586b43f0f708ab372c4b2f7fb4385-2988x1680.jpg?auto=format",
    visual: { background: "#1f1f1f", accent: "#a7e5ca", ink: "#ffffff", radiusOne: "24px", radiusTwo: "0", rotate: "-2deg", label: "QUEUE / EDIT / CONTINUE" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept",
      "근거": "Figma 공식 릴리스가 실제 편집 화면 영상 프레임과 병렬 실행·백그라운드 지속·진행 상태 아이콘을 공개해 생성형 도구의 비차단 작업 큐 패턴으로 전이할 수 있다.",
      "metadata": { "정보렌즈": ["사용자흐름", "인터랙션", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "고밀도", "절제", "모션필"], "시각아티팩트_url": "https://cdn.sanity.io/images/599r6htc/regionalized/afc9f3fa873586b43f0f708ab372c4b2f7fb4385-2988x1680.jpg?auto=format", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "툴바에서 복수 AI 이미지 편집 시작→캔버스 작업 지속→개별 로딩 상태 추적→완료 결과 비교", "ai_role": "이미지 편집 생성 작업을 병렬 큐로 처리하고 상태를 캔버스에 피드백" } },
      "출처": { "소스": "https://www.figma.com/release-notes/", "수집일": "2026-07-25", "수집사유": "2026-07-07 공식 릴리스의 실제 기능 영상 프레임과 안정적인 2988×1680 공개 이미지 URL이 확인됨" }
    }
  },
  {
    title: "Illoca — 건축 도면의 겹을 제품 경험으로 번역한 웹",
    category: "웹·앱 UI", date: "2026-07-25", url: "https://www.behance.net/gallery/252077017/Illoca",
    summary: "트레이싱지, 축척 표시, 연필선, 겹친 도면의 온도를 브랜드와 반응형 웹, 인터랙션, 모션으로 연결한 건축 AI 도구의 공개 제품 경험.",
    note: "전통 건축가의 작업 언어를 지우지 않고 레이어·주석·종이 질감으로 디지털 도구의 기능적 신뢰를 만든 방식이 전문직 AI 제품 온보딩에 유효함.",
    tags: ["#웹앱UI", "#건축AI", "#레이어", "#인터랙션", "#모션", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/55d39c252077017.6a467620a28c2.jpg",
    visual: { background: "#d9d0bd", accent: "#d56a4b", ink: "#22211f", radiusOne: "0", radiusTwo: "24px", rotate: "2deg", label: "PAPER / LAYERS / SUPERPOWER" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 4, "가치축": 4 }, "total": 18, "verdict": "accept",
      "근거": "공개 웹 화면·모션·라이브 사이트가 트레이싱지 레이어, 도면 표식, 재료감, 건축가 중심 메시지를 반복해 전문직 AI 도구의 정보 구조와 브랜드 상호작용으로 시스템화한다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "브랜드일관성", "인터랙션", "AI활용"], "시각렌즈": ["에디토리얼", "어스톤", "비대칭", "매트", "따뜻", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/55d39c252077017.6a467620a28c2.jpg", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "건축가의 종이 기반 문제 맥락→AI 도구의 마찰 제거 가치→레이어형 기능 시연→라이브 제품 탐색", "screens": "브랜드 도입·제품 메시지·레이어형 도면 인터페이스·인터랙션·반응형 웹·모션 데모" } },
      "출처": { "소스": "Behance / Unseen Studio", "수집일": "2026-07-25", "수집사유": "2026-07-23 공개된 Best of Behance 프로젝트에서 실제 웹 화면·모션·라이브 사이트와 200 응답 og:image가 확인됨" }
    }
  },
  {
    title: "Revolut CGI R&D Vol.2 — 재질 시뮬레이션으로 확장한 카드 오브젝트",
    category: "비주얼 그래픽", date: "2026-07-25", url: "https://www.behance.net/gallery/253112605/Revolut-CGI-RnD-Vol-2",
    summary: "Houdini·Redshift·Photoshop의 절차형 워크플로로 카드 형태를 유지하면서 유체, 입자, 금속, 반투명 표면을 연속 실험한 CGI 시리즈.",
    note: "동일한 제품 실루엣을 고정하고 재질·시뮬레이션·광원만 교체해 캠페인 변주를 만드는 방식이 핀테크·하드웨어 3D 키비주얼 시스템에 직접 적용 가능함.",
    tags: ["#비주얼그래픽", "#CGI", "#Houdini", "#재질실험", "#제품시각화", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ef7d8c253112605.6a6097ebdffd8.jpg",
    visual: { background: "#1a1831", accent: "#d4ff6b", ink: "#faf7f1", radiusOne: "24px", radiusTwo: "50%", rotate: "-4deg", label: "CARD / MATERIAL / SIMULATION" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공개 CGI 시리즈가 하나의 카드 실루엣에 절차형 재질·시뮬레이션·표면 반사·광원 변주를 반복 적용해 제품 캠페인의 확장 가능한 3D 스타일 문법을 추출하게 한다.",
      "metadata": { "정보렌즈": ["브랜드일관성"], "시각렌즈": ["3D", "그라디언트", "중앙집중", "글로시", "럭셔리"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ef7d8c253112605.6a6097ebdffd8.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "format": "절차형 3D 카드 오브젝트 시리즈", "transferable_style": "고정 실루엣·재질 시뮬레이션 교체·반사광 제어·연속 캠페인 변주" } },
      "출처": { "소스": "Behance / Mondlicht Studios", "수집일": "2026-07-25", "수집사유": "2026-07-22 공개된 Best of Behance 프로젝트에서 Houdini·Redshift 기반 다중 결과물과 200 응답 og:image가 확인됨" }
    }
  },
  {
    title: "Jieyuan AI Agent — 해석과 연결을 구조화한 테크 브랜드",
    category: "브랜드", date: "2026-07-25", url: "https://www.behance.net/gallery/252752029/AI-agent-Tech-Brand-Design",
    summary: "AI 에이전트의 해석·연결·응답 개념을 정밀한 기하 형태와 반복 그리드, 냉색 디지털 응용물로 확장한 테크 브랜드 시스템.",
    note: "추상적인 AI 기능을 하나의 기하 모듈과 반복 규칙으로 줄이고 패키지·그래픽·디지털 접점에 확장해 B2B AI 제품의 일관성 설계에 참고할 만함.",
    tags: ["#브랜드", "#AI에이전트", "#테크브랜딩", "#기하그래픽", "#그리드", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6c01fc252752029.6a574cbd10af2.jpg",
    visual: { background: "#151a2c", accent: "#6b8cff", ink: "#f4f5f7", radiusOne: "0", radiusTwo: "24px", rotate: "3deg", label: "AGENT / LINK / SYSTEM" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 4 }, "total": 17, "verdict": "accept",
      "근거": "공개 아이덴티티가 AI 에이전트의 연결 개념을 기하 모듈, 반복 그리드, 냉색 팔레트와 다중 응용물로 확장해 기술 브랜드의 재사용 가능한 시각 규칙으로 추출된다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "AI활용"], "시각렌즈": ["미니멀", "그라디언트", "그리드", "글로시", "차가움"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6c01fc252752029.6a574cbd10af2.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "identity": "AI 에이전트 연결 개념·기하 모듈·냉색 디지털 팔레트", "applications": "브랜드 그래픽·패키지·디지털 접점·캠페인 응용" } },
      "출처": { "소스": "Behance / Resauce Studio", "수집일": "2026-07-25", "수집사유": "2026-07-22 공개된 테크 브랜드 프로젝트에서 다중 응용 결과물과 200 응답 og:image가 확인됨" }
    }
  },
  {
    title: "Blue Tulle Portrait — 하늘색 배경과 무중력 베일의 단순 프롬프트",
    category: "AI 이미지 프롬프트", date: "2026-07-24", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#simple-blue-tulle-portrait",
    summary: "푸른 하늘을 닮은 단색 배경 앞에서 반투명 튤 베일이 얼굴과 화면을 감싸는 구도를 짧은 문장 하나로 만든 공식 Gen-4 Image 결과.",
    note: "피사체·소재·배경색만 남긴 최소 프롬프트가 푸른 면과 반투명 직물의 대비를 안정적으로 형성해 뷰티 캠페인의 초기 방향 탐색에 유용함.",
    prompt: "elegant portrait of a woman draped in a flowing sheer tulle veil against a blue background that resembles a sky.",
    tags: ["#AI이미지프롬프트", "#블루톤", "#튤소재", "#미니멀", "#뷰티캠페인"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37067220591123",
    visual: { background: "#4f85c7", accent: "#f4b08d", ink: "#f8f4ee", radiusOne: "50%", radiusTwo: "24px", rotate: "3deg", label: "BLUE / TULLE / FLOW" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 4 }, "total": 17, "verdict": "accept",
      "근거": "Runway 공식 가이드가 짧은 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 함께 제공하고 푸른 배경, 반투명 튤, 얼굴 중심 구도를 최소 통제어로 재현해 상세 프롬프트 전의 방향 탐색 기준점으로 쓸 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["미니멀", "파스텔", "중앙집중", "소프트확산광", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37067220591123", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "elegant portrait of a woman draped in a flowing sheer tulle veil against a blue background that resembles a sky.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Simple 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37067220591123", "fragment_map": [{ "조각": "elegant portrait", "효과": "얼굴 중심의 정제된 뷰티 포트레이트 구도" }, { "조각": "flowing sheer tulle veil", "효과": "반투명 직물이 얼굴 주변을 유동적으로 감싸는 레이어" }, { "조각": "blue background that resembles a sky", "효과": "결과 전반을 지배하는 선명한 하늘색 냉색 면" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-24", "수집사유": "최근 갱신된 공식 가이드에서 짧은 전체 프롬프트와 200 응답의 블루 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Pastel Baroque Birthday — 부드러운 유화와 꽃 모티프의 케이크 초상",
    category: "AI 이미지 프롬프트", date: "2026-07-24", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#pastel-baroque-birthday",
    summary: "생일 케이크를 든 인물을 차가운 파스텔과 따뜻한 포인트, 매끈한 유화 명암, 꽃 모티프로 층화한 공식 Gen-4 Image 결과.",
    note: "주제·팔레트·명암법·장식 모티프·밀도를 각각 조절할 수 있어 뷰티·패션·시즌 캠페인의 고전적이면서 현대적인 에디토리얼에 유용함.",
    prompt: "elegant baroque artwork of a woman holding a birthday cake. elegant artistry, muted cool pastel color palette with pops of pastel warmth. smooth oil painting with finely blended shading. painted floral motifs. elaborate. a chaotic yet elegant scene",
    tags: ["#AI이미지프롬프트", "#파스텔", "#바로크", "#유화질감", "#에디토리얼"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062126099",
    visual: { background: "#d9d4ea", accent: "#efb8a8", ink: "#43334f", radiusOne: "24px", radiusTwo: "50%", rotate: "-4deg", label: "PASTEL / OIL / FLORAL" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "Runway 공식 결과와 전체 프롬프트가 인물·케이크·냉온 파스텔·유화 명암·꽃 장식·장면 밀도를 명시해 시즌 캠페인용 바로크 초상으로 반복 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["에디토리얼", "파스텔", "중앙집중", "소프트확산광", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062126099", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "elegant baroque artwork of a woman holding a birthday cake. elegant artistry, muted cool pastel color palette with pops of pastel warmth. smooth oil painting with finely blended shading. painted floral motifs. elaborate. a chaotic yet elegant scene", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Pastel baroque 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062126099", "fragment_map": [{ "조각": "woman holding a birthday cake", "효과": "인물과 케이크를 중앙 서사 피사체로 고정" }, { "조각": "muted cool pastel ... pops of pastel warmth", "효과": "차가운 파스텔 바탕에 따뜻한 포인트 대비" }, { "조각": "smooth oil painting with finely blended shading", "효과": "경계가 부드러운 유화 명암과 표면 질감" }, { "조각": "painted floral motifs ... chaotic yet elegant", "효과": "꽃 장식의 밀도를 높이되 우아한 위계를 유지" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-24", "수집사유": "최근 갱신된 공식 가이드에서 전체 프롬프트와 200 응답의 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Porcelain Pulse Close-up — 정지 프레임 안에서 팽창하는 투사광",
    category: "AI 영상 프롬프트", date: "2026-07-24", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#porcelain-pulse-closeup",
    summary: "도자기처럼 흰 얼굴의 감긴 눈 위로 블루·퍼플 투사광이 맥동하고 산호색 배경은 흐리게 유지되는 Gen-4.5 공식 숏.",
    note: "카메라는 고정하고 투사광의 폭과 밝기만 서서히 변화시켜 뷰티·웨어러블·앨범 티저에서 작은 움직임으로 강한 집중을 만드는 문법임.",
    prompt: "A smooth, porcelain-white face fills the frame with emphasis on the closed, featureless eyes and the abstract, multi-colored light pattern projected across the upper face. The projected light pulses and shifts subtly, causing the blue and purple bands to slowly expand and contract, as the camera holds in a static, tight frame. Against a softly blurred coral-red background. Avant-garde portraiture, surreal.",
    tags: ["#AI영상프롬프트", "#Gen45", "#익스트림클로즈업", "#투사광", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504712979",
    visual: { background: "#f07a72", accent: "#6c63ff", ink: "#f6f5f1", radiusOne: "50%", radiusTwo: "0", rotate: "3deg", label: "STATIC / PULSE / EXPAND" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 카메라 라이브러리가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 제공하고 고정 클로즈업, 블루·퍼플 밴드의 맥동, 산호색 배경을 분리해 반복 가능한 모션 표본으로 만든다.",
      "metadata": { "정보렌즈": ["AI활용", "인터랙션"], "시각렌즈": ["미니멀", "듀오톤", "중앙집중", "소프트확산광", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504712979", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A smooth, porcelain-white face fills the frame with emphasis on the closed, featureless eyes and the abstract, multi-colored light pattern projected across the upper face. The projected light pulses and shifts subtly, causing the blue and purple bands to slowly expand and contract, as the camera holds in a static, tight frame. Against a softly blurred coral-red background. Avant-garde portraiture, surreal.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Extreme close up 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504712979", "fragment_map": [{ "조각": "porcelain-white face fills the frame", "효과": "도자기 질감의 얼굴이 화면을 채우는 극단적 근접 구도" }, { "조각": "blue and purple bands ... expand and contract", "효과": "냉색 투사광 밴드가 천천히 팽창·수축" }, { "조각": "camera holds in a static, tight frame", "효과": "피사체 변화만 보이도록 카메라 완전 고정" }, { "조각": "softly blurred coral-red background", "효과": "산호색 보케로 냉색 광원과 보색 대비" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-24", "수집사유": "최근 갱신된 공식 Gen-4.5 카메라 예시에서 전체 프롬프트와 200 응답의 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Opalescent Bloom Rise — 진주 골격을 따라 상승하는 로우앵글",
    category: "AI 영상 프롬프트", date: "2026-07-24", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#opalescent-bloom-rise",
    summary: "진주빛 골격 갑옷의 생명체가 자세를 바꾸고 분홍 꽃이 어깨에서 목으로 자라는 궤적을 카메라가 상승하며 추적하는 공식 결과.",
    note: "재질·미세 신체 움직임·성장 방향·카메라 궤적·팔레트를 한 흐름으로 묶어 향수·주얼리·미래형 패션 필름의 공개 숏을 설계하기 좋음.",
    prompt: "Viewed from a low angle, an ethereal, alien-like opalescent creature with pearlescent intricate skeletal armor appears majestic as it gracefully shifts its posture, causing long, thin tendrils to sway gently. The camera rises steadily, following the upward trajectory of the dynamic natural growth of pink flower blossoms along the figure's shoulders and neck. The palette features shimmering opals, pale pinks, and deep purples nestled in the crevices of the armor.",
    tags: ["#AI영상프롬프트", "#Gen45", "#로우앵글", "#성장모션", "#3D", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515601555",
    visual: { background: "#321f52", accent: "#efb7d5", ink: "#e9eef2", radiusOne: "0", radiusTwo: "50%", rotate: "-3deg", label: "PEARL / BLOOM / RISE" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공식 Gen-4.5 결과와 전체 프롬프트가 진주 골격 재질, 촉수의 미세 흔들림, 꽃의 상향 성장, 상승 카메라, 오팔·핑크·퍼플 팔레트를 분리해 미래형 패션 숏으로 재현한다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름"], "시각렌즈": ["3D", "그라디언트", "중앙집중", "글로시", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515601555", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Viewed from a low angle, an ethereal, alien-like opalescent creature with pearlescent intricate skeletal armor appears majestic as it gracefully shifts its posture, causing long, thin tendrils to sway gently. The camera rises steadily, following the upward trajectory of the dynamic natural growth of pink flower blossoms along the figure's shoulders and neck. The palette features shimmering opals, pale pinks, and deep purples nestled in the crevices of the armor.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·2~10초·1280×720·24/25fps·공식 Low angle 예시·seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515601555", "fragment_map": [{ "조각": "opalescent creature with pearlescent intricate skeletal armor", "효과": "진주·오팔 반사를 가진 골격형 3D 재질" }, { "조각": "tendrils to sway gently", "효과": "가느다란 촉수의 느린 보조 움직임" }, { "조각": "camera rises steadily ... upward trajectory", "효과": "꽃의 성장 방향을 따라가는 지속 상승 카메라" }, { "조각": "shimmering opals, pale pinks, and deep purples", "효과": "오팔 하이라이트와 핑크·딥퍼플의 층진 팔레트" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-24", "수집사유": "최근 갱신된 공식 Gen-4.5 카메라 예시에서 전체 프롬프트와 200 응답의 결과 GIF가 확인됨" }
    }
  },
  {
    title: "GOV.UK Interruption Panel — 여정을 멈추는 역상 확인 상태",
    category: "웹 스타일가이드", date: "2026-07-24", url: "https://design-system.service.gov.uk/components/panel/",
    summary: "GOV.UK Frontend v6.4.0이 중요한 정보를 놓치지 않도록 여정을 일시 중단하고 명시적 확인 뒤 재개하는 Panel 변형을 공개.",
    note: "제목·설명·주 행동·수정 링크를 하나의 역상 컨테이너에 묶고 짧은 카피 규칙까지 제공해 고위험 입력 확인 패턴으로 바로 흡수할 수 있음.",
    tags: ["#웹스타일가이드", "#GOVUK", "#인터럽션패널", "#접근성", "#서비스디자인"],
    thumbnail: "https://design-system.service.gov.uk/images/homepage-illustration.svg",
    visual: { background: "#1d70b8", accent: "#ffdd00", ink: "#ffffff", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "PAUSE / CONFIRM / RESUME" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 v6.4.0 문서가 실제 인터럽션 패널, 확인·수정 행동, HTML/Nunjucks API, 짧은 카피 원칙과 접근성 맥락을 함께 제공해 고위험 입력 확인 컴포넌트로 흡수할 수 있다.",
      "metadata": { "정보렌즈": ["사용자흐름", "접근성", "콘텐츠명료성", "인터랙션"], "시각렌즈": [], "시각아티팩트_url": "https://design-system.service.gov.uk/images/homepage-illustration.svg", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "GOV.UK blue 역상 면·inverse-text 기능 색·고대비 행동", "components": "Panel interruption variant·actions items·confirmation variant·HTML/Nunjucks 예시" } },
      "출처": { "소스": "https://design-system.service.gov.uk/", "수집일": "2026-07-24", "수집사유": "2026-07-16 공식 v6.4.0 릴리스와 실제 인터럽션 패널 상태·코드·공개 SVG가 확인됨" }
    }
  },
  {
    title: "Fire Panel Point List — 현장 입력부터 잠금·PDF 인계까지",
    category: "웹·앱 UI", date: "2026-07-24", url: "https://www.behance.net/gallery/252666695/Fire-Panel-Point-List-App",
    summary: "화재 패널의 포인트·존 기록을 데스크톱·태블릿·모바일에서 동일하게 입력하고 저장·재개·잠금·PDF 출력하는 현장 점검 앱.",
    note: "중단이 잦고 조도가 불안정한 현장 조건을 전제로 동일한 단계 구조와 높은 대비, 자동 행 확장, 잠금 상태를 설계한 점이 산업용 폼 UX에 구체적임.",
    tags: ["#웹앱UI", "#현장점검", "#반응형", "#PDF워크플로", "#산업UI", "#테크IT"],
    thumbnail: "https://raw.githubusercontent.com/tsuki-cruz/fire-panel-point-list-demo-public/main/docs/screenshots/desktop/01-landing-screen.png",
    visual: { background: "#13181d", accent: "#e44d3a", ink: "#f5f6f7", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "ENTER / LOCK / HANDOFF" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "공개 데스크톱·태블릿·모바일 화면과 저장·재개·잠금·PDF·이메일 인계 흐름이 실제 코드 저장소와 함께 제공돼 중단 복원력이 필요한 산업용 입력 시스템으로 전이할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "인터랙션", "콘텐츠명료성"], "시각렌즈": ["미니멀", "고밀도", "그리드", "하드라이트", "절제"], "시각아티팩트_url": "https://raw.githubusercontent.com/tsuki-cruz/fire-panel-point-list-demo-public/main/docs/screenshots/desktop/01-landing-screen.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "기록 유형 선택→포인트·존 입력→자동 검증·행 확장→저장·재개→잠금→PDF·이메일 인계", "screens": "랜딩·주소형/재래형 입력·완료 목록·잠금·PDF 출력·모바일·태블릿" } },
      "출처": { "소스": "https://www.behance.net/gallery/252666695/Fire-Panel-Point-List-App", "수집일": "2026-07-24", "수집사유": "2026-07-14 공개된 실제 반응형 화면·시연·공개 저장소의 200 응답 PNG가 확인됨" }
    }
  },
  {
    title: "Heat Wave — 코발트 대문자와 기록 사진을 교차한 포스터",
    category: "비주얼 그래픽", date: "2026-07-24", url: "https://dribbble.com/shots/27110448-Heat-Wave-Editorial-Archive-Poster",
    summary: "화면을 채우는 코발트 대문자 사이로 흑백 기록 사진을 끼우고 종이 그레인과 라임 포인트를 더한 에디토리얼 포스터.",
    note: "거대한 단어를 이미지 프레임처럼 사용하고 작은 기록 메타와 단일 형광색으로 긴장을 조절해 전시·행사·문화 콘텐츠의 템플릿으로 추출하기 좋음.",
    tags: ["#비주얼그래픽", "#에디토리얼", "#코발트블루", "#타이포포스터", "#필름그레인"],
    thumbnail: "https://cdn.dribbble.com/userupload/46816870/file/f197d35c2e8ab4ab0ba6d571e6964b44.png?resize=752x&vertical=center",
    visual: { background: "#020985", accent: "#91cc2c", ink: "#d8d1c4", radiusOne: "0", radiusTwo: "0", rotate: "-3deg", label: "TYPE / ARCHIVE / TENSION" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "공개 포스터와 팔레트가 코발트 초대형 타이포, 흑백 사진 삽입, 종이 그레인, 라임 포인트, 기록 메타의 위계를 명확히 보여 문화 캠페인용 에디토리얼 문법으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "듀오톤", "비대칭", "필름그레인"], "시각아티팩트_url": "https://cdn.dribbble.com/userupload/46816870/file/f197d35c2e8ab4ab0ba6d571e6964b44.png?resize=752x&vertical=center", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "코발트 초대형 제목·흑백 기록 사진·종이 그레인·라임 포인트·소형 아카이브 메타", "reusable_rule": "제목 글자를 주 프레임으로 키우고 사진을 글자 사이에 교차시킨 뒤 단일 형광색으로 시선 종착점 설정" } },
      "출처": { "소스": "https://dribbble.com/shots/27110448-Heat-Wave-Editorial-Archive-Poster", "수집일": "2026-07-24", "수집사유": "최근 3일 내 공개 검색된 Dribbble shot에서 원본 포스터·팔레트·구성 설명과 200 응답 PNG가 확인됨" }
    }
  },
  {
    title: "Innovation Endeavors — 기술 펀드를 위한 절제된 4분할 브랜드",
    category: "브랜드", date: "2026-07-24", url: "https://www.behance.net/gallery/253036157/Innovation-Endeavors",
    summary: "기존 심볼의 자산은 유지하고 저채도 블루·그린, 교토 세리프, 룰드 라인, 4분할 그리드와 손그림을 확장한 벤처 펀드 리브랜딩.",
    note: "인지 자산을 버리지 않으면서 컬러 채도·워드마크 비례·편집 그리드·일러스트 역할만 정교화해 성숙 단계의 테크 브랜드를 진화시키는 방법이 선명함.",
    tags: ["#브랜드", "#테크브랜드", "#벤처캐피털", "#에디토리얼그리드", "#리브랜딩", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a05ad5253036157.6a5eae2407b50.png",
    visual: { background: "#e8e6df", accent: "#3e5d84", ink: "#22231f", radiusOne: "24px", radiusTwo: "0", rotate: "3deg", label: "ANCHOR / GRID / EVOLVE" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "심볼 보존, 저채도 팔레트 확장, 세리프 워드마크, 룰드 라인, 4분할 그리드, 손그림 응용이 실제 웹·인쇄 화면으로 공개돼 성숙기 테크 브랜드의 진화 규칙으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "타이포그래피", "정보구조"], "시각렌즈": ["에디토리얼", "어스톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a05ad5253036157.6a5eae2407b50.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "기존 심볼 유지·저채도 블루/그린·교토 세리프·룰드 라인·4분할 그리드·손그림", "applications": "웹사이트·포트폴리오·인쇄물·인용문·창업가 스토리·일러스트" } },
      "출처": { "소스": "https://www.behance.net/gallery/253036157/Innovation-Endeavors", "수집일": "2026-07-24", "수집사유": "2026-07-20 공개된 Best of Behance 프로젝트에서 리브랜딩 규칙과 실제 웹·인쇄 응용, 200 응답 WebP가 확인됨" }
    }
  },
  {
    title: "Mixed-media Rainforest Figure — 종이·페인트·낙서를 층화한 콜라주",
    category: "AI 이미지 프롬프트", date: "2026-07-23", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#mixed-media-rainforest-collage",
    summary: "깊은 녹색 열대우림 위에 적주황 페인트 인물, 핫핑크 낙서, 테이프와 찢긴 종이 가장자리를 겹친 공식 Gen-4 Image 결과.",
    note: "배경 사진·단색 페인트 피사체·손그림 강조·종이 가장자리를 독립 레이어로 분리해 문화·패션 캠페인 콜라주의 밀도와 색 대비를 재현하기 좋음.",
    prompt: "mixed media collage featuring realistic scenery with a solid color block subject. in a tropical rainforest with a deep, moody green color palette. a human figure made entirely of vibrant, textured red-orange paint stands in the center of the frame. hand-drawn hot pink scribbles accentuate the silhouette. mixed media accents made of duct tape, collage style magazine cutouts with torn paper edges",
    tags: ["#AI이미지프롬프트", "#콜라주", "#혼합매체", "#컬러블록", "#캠페인그래픽", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/42893942774419",
    visual: { background: "#153f34", accent: "#ee593d", ink: "#ff7fc8", radiusOne: "0", radiusTwo: "50%", rotate: "-4deg", label: "PAPER / PAINT / SCRIBBLE" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 PNG를 함께 제공하고 사진 배경, 페인트 피사체, 낙서, 테이프, 찢긴 종이의 역할을 분리해 캠페인 콜라주로 재조합할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["에디토리얼", "하이채도", "비대칭", "필름그레인", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/42893942774419", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "mixed media collage featuring realistic scenery with a solid color block subject. in a tropical rainforest with a deep, moody green color palette. a human figure made entirely of vibrant, textured red-orange paint stands in the center of the frame. hand-drawn hot pink scribbles accentuate the silhouette. mixed media accents made of duct tape, collage style magazine cutouts with torn paper edges", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Collage 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/42893942774419", "fragment_map": [{ "조각": "realistic scenery ... tropical rainforest", "효과": "사실적이고 깊은 녹색의 배경 레이어" }, { "조각": "figure made entirely of vibrant, textured red-orange paint", "효과": "중앙 피사체를 적주황 페인트 컬러 블록으로 분리" }, { "조각": "hand-drawn hot pink scribbles", "효과": "실루엣 경계를 따라가는 핫핑크 제스처" }, { "조각": "duct tape ... torn paper edges", "효과": "테이프와 찢긴 종이로 아날로그 콜라주 질감 추가" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-23", "수집사유": "공식 Gen-4 Image 가이드에서 전체 프롬프트와 200 응답의 결과 PNG가 확인됨" }
    }
  },
  {
    title: "Blue Studio Cat Portrait — 확산광과 단색 배경의 팝 에디토리얼",
    category: "AI 이미지 프롬프트", date: "2026-07-23", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#blue-studio-cat-portrait",
    summary: "별 모양 선글라스와 보타이를 착용한 고양이를 균일한 확산광과 선명한 솔리드 블루 배경으로 분리한 공식 결과.",
    note: "피사체 전면의 부드러운 조도와 채도 높은 블루 배경의 경계를 명확히 해 캐릭터·펫·소형 제품 캠페인에서 안정적인 냉색 키비주얼로 전이하기 좋음.",
    prompt: "portrait photography of a siberian cat wearing star-shaped sunglasses and a bowtie. The cat's mouth is open, as if meowing. The diffused lighting evenly illuminates the subject while creating a sharp contrast with the solid blue background.",
    tags: ["#AI이미지프롬프트", "#블루톤", "#에디토리얼", "#확산광", "#팝컬러", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37153279792787",
    visual: { background: "#184fbd", accent: "#f2cc45", ink: "#ffffff", radiusOne: "50%", radiusTwo: "24px", rotate: "4deg", label: "BLUE / DIFFUSE / POP" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 결과가 균일한 확산광, 채도 높은 솔리드 블루, 별 모양 소품의 명확한 색 대비를 보여 주고 전체 프롬프트가 피사체·조명·배경을 분리해 광고형 포트레이트로 재현한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["에디토리얼", "하이채도", "중앙집중", "소프트확산광", "유희적"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37153279792787", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "portrait photography of a siberian cat wearing star-shaped sunglasses and a bowtie. The cat's mouth is open, as if meowing. The diffused lighting evenly illuminates the subject while creating a sharp contrast with the solid blue background.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Portrait photography 예시·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37153279792787", "fragment_map": [{ "조각": "siberian cat wearing star-shaped sunglasses and a bowtie", "효과": "중앙 캐릭터와 팝한 소품을 한 묶음으로 고정" }, { "조각": "mouth is open, as if meowing", "효과": "정적인 포트레이트에 표정과 서사 부여" }, { "조각": "diffused lighting evenly illuminates", "효과": "털과 소품 전면을 고르게 드러내는 소프트 광원" }, { "조각": "sharp contrast with the solid blue background", "효과": "고채도 블루 면과 피사체의 또렷한 분리" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-23", "수집사유": "공식 Gen-4 Image 가이드에서 블루 결과물·전체 프롬프트와 200 응답의 PNG가 확인됨" }
    }
  },
  {
    title: "Zero-gravity Raccoon — 관찰형 핸드헬드와 무중력 오브젝트 모션",
    category: "AI 영상 프롬프트", date: "2026-07-23", url: "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide#zero-gravity-raccoon",
    summary: "은색 쓰레기통을 뒤지는 너구리와 떠오르는 쓰레기를 자연광·카메라 흔들림·저예산 다큐 질감으로 묶은 Gen-4.5 공식 숏.",
    note: "주체 행동, 환경 물리, 핸드헬드 카메라, 관찰형 질감을 각각 지시해 초현실 상황도 촬영된 사건처럼 보이게 만드는 소셜 영상 문법으로 유용함.",
    prompt: "A raccoon in a plain room in zero gravity trying to steal the garbage from a silver trash can. The garbage floats out in zero gravity. Handheld documentary film style. Natural camera shake. Raw indie film aesthetic. Natural lighting. Unpolished, authentic look. Low budget realism. Observational feel.",
    tags: ["#AI영상프롬프트", "#Gen45", "#핸드헬드", "#무중력", "#다큐질감", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313737306003",
    visual: { background: "#d8d6cf", accent: "#7f8587", ink: "#1b1d1d", radiusOne: "50%", radiusTwo: "0", rotate: "-3deg", label: "FLOAT / SHAKE / OBSERVE" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 Gen-4.5 가이드가 전체 프롬프트와 결과 GIF를 제공하고 주체 행동·무중력 환경·카메라 흔들림·자연광·관찰형 질감을 분리해 초현실 다큐 숏으로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "필름그레인", "절제", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313737306003", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A raccoon in a plain room in zero gravity trying to steal the garbage from a silver trash can. The garbage floats out in zero gravity. Handheld documentary film style. Natural camera shake. Raw indie film aesthetic. Natural lighting. Unpolished, authentic look. Low budget realism. Observational feel.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·공식 예시·duration/aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313737306003", "fragment_map": [{ "조각": "raccoon ... trying to steal the garbage", "효과": "명확한 목표를 가진 연속 주체 동작" }, { "조각": "garbage floats out in zero gravity", "효과": "주변 소품이 천천히 부유하는 환경 물리" }, { "조각": "Handheld documentary ... Natural camera shake", "효과": "현장 촬영처럼 불규칙한 카메라 움직임" }, { "조각": "Natural lighting ... Observational feel", "효과": "연출감을 낮춘 관찰형 인디 필름 톤" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide", "수집일": "2026-07-23", "수집사유": "공식 Gen-4.5 가이드에서 전체 프롬프트와 200 응답의 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Needle-felt Corgi Timeline — 7초 표정 연기를 고정한 타임스탬프 숏",
    category: "AI 영상 프롬프트", date: "2026-07-23", url: "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide#needle-felt-corgi-timeline",
    summary: "마트의 니들펠트 코기를 2초 단위 시선 전환, 1초 크래시줌, 눈 찡그림, 느린 눈썹 움직임으로 제어한 공식 Gen-4.5 예시.",
    note: "외형·공간·소프트 광원은 자연어로 고정하고 표정과 카메라의 사건 순서를 타임코드로 분리해 짧은 캐릭터 광고의 코믹 비트를 설계하기 좋음.",
    prompt: "A needle-felted orange and white Corgi character wearing a yellow, green, and orange sweater stands in a grocery store aisle, initially facing away from the lens. The Corgi abruptly turns its head to face the camera, triggering a rapid crash zoom directly into its shiny black bead eyes as it squints suspiciously and its woolly brow furrows deeply. The background features blurred shelves stocked with colorful red and blue products under bright, linear fluorescent ceiling lights. The lighting is soft and diffuse, highlighting the fuzzy, fibrous texture of the felted wool against the bokeh of the supermarket. [00:00 through 00:02] looking away, then turns towards camera [00:02 through 00:03] rapidly crash zoom to closely frame his eyes [00:03 through 00:04] black eyes squint [00:04 through 00:07] brow slowly furrows",
    tags: ["#AI영상프롬프트", "#Gen45", "#타임스탬프", "#크래시줌", "#캐릭터모션", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313692840339",
    visual: { background: "#f1d56a", accent: "#e87535", ink: "#163c35", radiusOne: "24px", radiusTwo: "50%", rotate: "4deg", label: "TURN / ZOOM / SQUINT" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공식 Gen-4.5 결과와 전체 프롬프트가 캐릭터 재질·마트 조명·크래시줌·눈과 눈썹 연기를 7초 타임스탬프로 고정해 짧은 표정 중심 광고 숏으로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름"], "시각렌즈": ["3D", "하이채도", "중앙집중", "소프트확산광", "유희적", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313692840339", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A needle-felted orange and white Corgi character wearing a yellow, green, and orange sweater stands in a grocery store aisle, initially facing away from the lens. The Corgi abruptly turns its head to face the camera, triggering a rapid crash zoom directly into its shiny black bead eyes as it squints suspiciously and its woolly brow furrows deeply. The background features blurred shelves stocked with colorful red and blue products under bright, linear fluorescent ceiling lights. The lighting is soft and diffuse, highlighting the fuzzy, fibrous texture of the felted wool against the bokeh of the supermarket. [00:00 through 00:02] looking away, then turns towards camera [00:02 through 00:03] rapidly crash zoom to closely frame his eyes [00:03 through 00:04] black eyes squint [00:04 through 00:07] brow slowly furrows", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·7초 타임스탬프 예시·duration 00:07·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313692840339", "fragment_map": [{ "조각": "needle-felted ... fuzzy, fibrous texture", "효과": "니들펠트 섬유가 보이는 촉각적 캐릭터 재질" }, { "조각": "bright, linear fluorescent ceiling lights", "효과": "마트 공간의 선형 형광등과 배경 보케" }, { "조각": "[00:02 through 00:03] rapidly crash zoom", "효과": "시선 전환 직후 1초 동안 눈으로 급격히 접근" }, { "조각": "[00:03 through 00:07] ... squint ... brow slowly furrows", "효과": "눈 찡그림 뒤 느린 눈썹 연기로 코믹한 의심 표현" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide", "수집일": "2026-07-23", "수집사유": "공식 Gen-4.5 타임스탬프 가이드에서 전체 프롬프트와 200 응답의 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Figma Agent Custom Tools — 캔버스에서 직접 만드는 셰이더와 플러그인",
    category: "AI 디자인", date: "2026-07-22", url: "https://www.figma.com/blog/agent-custom-tools-context-skills/",
    summary: "디자인 에이전트가 생성형 플러그인, 디더·유체 하프톤 셰이더, 데이터 기반 화면과 접근성 검사를 실제 캔버스에 만드는 공식 사례.",
    note: "효과를 한 번 생성하는 데서 끝나지 않고 조절 가능한 속성과 재사용 도구로 남겨 팀의 시각 실험을 반복 가능한 제작 시스템으로 바꾸는 점이 좋음.",
    tags: ["#AI디자인", "#FigmaAgent", "#셰이더", "#생성형플러그인", "#테크IT"],
    thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/3eb5f213296d83bbe51727a7935c471a2ba98649-3264x2176.png?w=804&h=536&q=75&fit=max&auto=format",
    visual: { background: "#e8e5df", accent: "#f06332", ink: "#171717", radiusOne: "24px", radiusTwo: "0", rotate: "-3deg", label: "AGENT / SHADER / TOOL" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공식 Figma 캔버스에서 생성형 플러그인과 디더·유체 하프톤·파티클 셰이더의 실제 결과 및 조절 패널이 공개돼 AI 시각 실험을 재사용 가능한 도구로 전환할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "인터랙션", "브랜드일관성"], "시각렌즈": ["에디토리얼", "모노톤", "비대칭", "하드라이트", "필름그레인"], "시각아티팩트_url": "https://cdn.sanity.io/images/599r6htc/regionalized/3eb5f213296d83bbe51727a7935c471a2ba98649-3264x2176.png?w=804&h=536&q=75&fit=max&auto=format", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "효과 요구 작성→에이전트가 PropsKit 도구·셰이더 생성→캔버스 적용→속성 조절→팀 재사용", "controls": "패턴 유형·스케일·임계값·색상·레이어 효과·프로젝트 맥락" } },
      "출처": { "소스": "https://www.figma.com/blog/agent-custom-tools-context-skills/", "수집일": "2026-07-22", "수집사유": "2026-06-24 공개된 공식 사례에서 셰이더 라이브러리·실행 패널·생성형 플러그인 결과가 확인됨" }
    }
  },
  {
    title: "UiChemy — Figma 레이어를 네이티브 WordPress 위젯으로 변환",
    category: "Figma 플러그인", date: "2026-07-22", url: "https://www.figma.com/community/plugin/1265873702834050352",
    summary: "Auto Layout·계층·글로벌 스타일을 읽어 Elementor 위젯과 반응형 페이지로 내보내는 Figma 플러그인의 실제 변환 화면.",
    note: "정적 HTML이 아니라 편집 가능한 네이티브 위젯으로 매핑하고 전역 스타일과 브레이크포인트까지 옮겨 반복적인 디자인 재구축 시간을 줄이기 좋음.",
    tags: ["#Figma플러그인", "#WordPress", "#디자인투코드", "#AutoLayout", "#테크IT"],
    thumbnail: "https://ps.w.org/uichemy/assets/Screenshot-1.jpg?rev=3337720",
    visual: { background: "#f1f4f8", accent: "#6b46e5", ink: "#14151a", radiusOne: "24px", radiusTwo: "50%", rotate: "3deg", label: "FIGMA / MAP / PUBLISH" },
    review: {
      "유형": "Figma 플러그인", "가치축_이름": "유용성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 Community 플러그인과 1200×840 실행 화면, 2026년 7월 릴리스가 확인돼 Figma 구조를 편집 가능한 WordPress 요소로 옮기는 반복 제작 시간을 줄일 수 있다.",
      "metadata": { "정보렌즈": ["사용자흐름", "브랜드일관성", "인터랙션"], "시각렌즈": [], "시각아티팩트_url": "https://ps.w.org/uichemy/assets/Screenshot-1.jpg?rev=3337720", "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "workflow": "Figma 프레임·Auto Layout 정리→UiChemy 태깅→사이트 연결→네이티브 위젯 가져오기", "repeated_task": "Figma 웹 시안을 Elementor·Gutenberg·Bricks 페이지로 재구축" } },
      "출처": { "소스": "https://wordpress.org/plugins/uichemy/", "수집일": "2026-07-22", "수집사유": "공식 Figma Community 링크, 실제 실행 스크린샷과 2026-07-14 업데이트 내역이 확인됨" }
    }
  },
  {
    title: "Dreamy Cloud Maze — 빛샘과 미세 그레인으로 만든 1990s 몽환 사진",
    category: "AI 이미지 프롬프트", date: "2026-07-22", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#dreamy-cloud-maze",
    summary: "구름으로 된 미로와 인물을 소프트 포커스·빛샘·별 모양 플레어·미세 그레인으로 묶은 공식 Gen-4 Image 결과.",
    note: "광원마다 플레어 강도를 낮게 고정하고 흐림·빛샘·그레인을 분리해 패션 캠페인의 몽환 효과를 과하지 않게 조절하는 어휘로 유용함.",
    prompt: "1990s dreamy photography of a man surrounded by fluffy maze walls. the maze walls are made entirely of clouds. Dreamlike, soft focus, light leaks, star lens flare at 5% on all light sources, fine grain, soft gaussian blur, ethereal glow, motion blur",
    tags: ["#AI이미지프롬프트", "#Gen4Image", "#몽환", "#소프트포커스", "#필름그레인"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37067207449235",
    visual: { background: "#d9d6ee", accent: "#f4bb82", ink: "#222137", radiusOne: "50%", radiusTwo: "24px", rotate: "4deg", label: "CLOUD / LEAK / GRAIN" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 Gen-4 Image 가이드가 전체 프롬프트와 결과 이미지를 제공하고 플레어 강도·빛샘·그레인·가우시안 블러를 분리해 몽환 사진의 후처리 효과를 조합 가능하게 만든다.",
      "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["에디토리얼", "파스텔", "중앙집중", "소프트확산광", "필름그레인", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37067207449235", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "1990s dreamy photography of a man surrounded by fluffy maze walls. the maze walls are made entirely of clouds. Dreamlike, soft focus, light leaks, star lens flare at 5% on all light sources, fine grain, soft gaussian blur, ethereal glow, motion blur", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Dreamy 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37067207449235", "fragment_map": [{ "조각": "fluffy maze walls ... entirely of clouds", "효과": "부드러운 구름 재질의 미로 공간" }, { "조각": "star lens flare at 5% on all light sources", "효과": "모든 광원에 낮은 강도의 별 모양 플레어" }, { "조각": "fine grain, soft gaussian blur", "효과": "미세 입자와 부드러운 초점 이탈" }, { "조각": "light leaks ... ethereal glow", "효과": "가장자리 빛샘과 확산광 무드" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-22", "수집사유": "최근 갱신된 공식 가이드에서 전체 프롬프트·Gen-4 Image 모델·결과 이미지가 확인됨" }
    }
  },
  {
    title: "Vaporwave Marble Face — 네온 블루·퍼플 사이버 조각",
    category: "AI 이미지 프롬프트", date: "2026-07-22", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#vaporwave-marble-face",
    summary: "대리석 얼굴을 사이버 공간에 놓고 포화 핑크·퍼플·블루와 네온 발광, 90년대 그래픽 요소로 제어한 공식 결과.",
    note: "차가운 블루·퍼플 공간광에 핑크 네온을 포인트로 더해 반사성 조각과 배경을 분리하는 테크·뷰티 캠페인 컬러 키로 활용하기 좋음.",
    prompt: "vaporwave. a marble face in cyberspace. saturated pink, purple, and blues. Retro aesthetics. Glowing neon elements. 90s design elements",
    tags: ["#AI이미지프롬프트", "#블루톤", "#Vaporwave", "#네온", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062122003",
    visual: { background: "#172b75", accent: "#e34ce6", ink: "#d9f5ff", radiusOne: "0", radiusTwo: "50%", rotate: "-4deg", label: "BLUE / MARBLE / NEON" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 Gen-4 Image 결과가 포화 블루·퍼플 공간광, 핑크 네온, 대리석 표면의 냉색 반사를 명확히 보여 주고 전체 프롬프트가 컬러·재질·시대를 분리해 재현한다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["Y2K", "하이채도", "듀오톤", "중앙집중", "글로시", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062122003", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "vaporwave. a marble face in cyberspace. saturated pink, purple, and blues. Retro aesthetics. Glowing neon elements. 90s design elements", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Vaporwave 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062122003", "fragment_map": [{ "조각": "a marble face in cyberspace", "효과": "반사성 대리석 조각을 사이버 공간의 중심에 고정" }, { "조각": "saturated pink, purple, and blues", "효과": "블루·퍼플 중심의 고채도 냉색 그라데이션" }, { "조각": "Glowing neon elements", "효과": "핑크 네온 포인트와 표면 림라이트" }, { "조각": "90s design elements", "효과": "복고형 디지털 그래픽 문법" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-22", "수집사유": "최근 갱신된 공식 가이드에서 블루톤 결과물·전체 프롬프트·Gen-4 Image 모델이 확인됨" }
    }
  },
  {
    title: "Giant Soda Push-in — 거대 오브제를 오르는 인물을 따라가는 숏",
    category: "AI 영상 프롬프트", date: "2026-07-22", url: "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide#giant-soda-push-in",
    summary: "입력 이미지의 거대한 탄산음료 오브제를 인물이 오르는 동안 카메라가 천천히 밀고 들어가는 Gen-4.5 공식 예시.",
    note: "첫 프레임이 공간·조명·스타일을 담당하고 텍스트는 주체 동작과 카메라 이동만 지시해 거대 제품 캠페인의 움직임을 간결하게 통제함.",
    prompt: "The camera slowly pushes in as the person scales the giant soda.",
    tags: ["#AI영상프롬프트", "#Gen45", "#푸시인", "#거대제품", "#모션필"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/48389644368403",
    visual: { background: "#d7ecf0", accent: "#e34f38", ink: "#182127", radiusOne: "50%", radiusTwo: "24px", rotate: "3deg", label: "SCALE / PUSH IN / GIANT" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 Gen-4.5 입력 이미지와 결과 GIF, 전체 프롬프트가 주체의 상승 동작과 느린 푸시인을 분리해 거대 제품 캠페인의 단일 숏으로 반복 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름"], "시각렌즈": ["3D", "중앙집중", "하드라이트", "유희적", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/48389644368403", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "The camera slowly pushes in as the person scales the giant soda.", "tool_model": "Runway Gen-4.5 Image to Video", "params": "Image to Video·공식 입력 이미지·duration/aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/48389644368403", "fragment_map": [{ "조각": "slowly pushes in", "효과": "거대 오브제의 규모를 유지하며 완만하게 전진" }, { "조각": "person scales", "효과": "인물의 연속적인 상승 동작" }, { "조각": "the giant soda", "효과": "제품을 환경 크기로 확장한 초현실 스케일" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide", "수집일": "2026-07-22", "수집사유": "최근 갱신된 공식 Gen-4.5 가이드에서 입력 이미지·전체 프롬프트·결과 GIF가 확인됨" }
    }
  },
  {
    title: "Fox Painting Whip-pan — 현실과 그림을 왕복하는 3단 카메라",
    category: "AI 영상 프롬프트", date: "2026-07-22", url: "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide#fox-painting-whip-pan",
    summary: "여성에서 여우 그림으로, 다시 표정으로, 움직이는 그림으로 빠르게 왕복하며 사건 순서를 통제한 Gen-4.5 예시.",
    note: "반복되는 휩팬 사이에 표정 변화와 정지 이미지의 생동을 순서대로 배치해 짧은 반전형 소셜 영상의 비트 설계에 유용함.",
    prompt: "Whip pan to painting of a fox. Whip pan back to the woman with a curious expression. Whip pan back to the fox painting, the fox is moving.",
    tags: ["#AI영상프롬프트", "#Gen45", "#휩팬", "#시퀀스", "#반전"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/48389644370579",
    visual: { background: "#e7ddcf", accent: "#c94f35", ink: "#24201c", radiusOne: "0", radiusTwo: "50%", rotate: "-3deg", label: "PAN / REVEAL / MOVE" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공식 Gen-4.5 결과와 전체 프롬프트가 세 번의 휩팬, 인물 표정 변화, 그림 속 여우의 움직임을 문장 순서로 고정해 반전형 단일 숏의 시간 구조로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름"], "시각렌즈": ["에디토리얼", "비대칭", "하드라이트", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/48389644370579", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Whip pan to painting of a fox. Whip pan back to the woman with a curious expression. Whip pan back to the fox painting, the fox is moving.", "tool_model": "Runway Gen-4.5 Image to Video", "params": "Image to Video·공식 입력 이미지·duration/aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/48389644370579", "fragment_map": [{ "조각": "Whip pan to painting of a fox", "효과": "첫 번째 고속 횡이동으로 그림을 공개" }, { "조각": "back to the woman with a curious expression", "효과": "인물 반응을 중간 비트로 삽입" }, { "조각": "back to the fox painting", "효과": "동일 경로의 세 번째 휩팬으로 기대 형성" }, { "조각": "the fox is moving", "효과": "마지막 프레임에 초현실 반전 부여" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide", "수집일": "2026-07-22", "수집사유": "최근 갱신된 공식 Gen-4.5 가이드에서 입력 이미지·순차 프롬프트·결과 GIF가 확인됨" }
    }
  },
  {
    title: "Lingowire — 연습과 커뮤니티를 연결한 언어 학습 앱",
    category: "웹·앱 UI", date: "2026-07-22", url: "https://www.behance.net/gallery/252429911/Lingowire-Logo-App-Design",
    summary: "온보딩, 자기주도 학습, 파트너·그룹 대화, 기능 소개, 다운로드 랜딩을 하나의 친근한 시스템으로 연결한 출시 앱.",
    note: "혼자 연습하기와 사람에게 연결하기를 같은 탐색 구조 안에 두고 30명 베타 테스트까지 거쳐 학습 동기와 커뮤니티 전환을 함께 설계한 점이 좋음.",
    tags: ["#웹앱UI", "#언어학습", "#커뮤니티", "#온보딩", "#모바일앱"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a5e548252429911.6a4f498f62ac0.png",
    visual: { background: "#eef5ef", accent: "#f2a65a", ink: "#173a32", radiusOne: "24px", radiusTwo: "50%", rotate: "4deg", label: "LEARN / PRACTICE / CONNECT" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "온보딩·학습·파트너와 그룹 연결·랜딩 페이지의 실제 화면과 30명 베타 테스트가 공개돼 언어 학습 서비스의 개인 연습→사회적 연습 흐름으로 전이할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "파스텔", "그리드", "여백중심", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a5e548252429911.6a4f498f62ac0.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "온보딩→언어·목표 선택→자기주도 연습→파트너·그룹 연결→반복 학습", "screens": "온보딩·기능 소개·학습·커뮤니티 연결·다운로드 랜딩" } },
      "출처": { "소스": "https://www.behance.net/gallery/252429911/Lingowire-Logo-App-Design", "수집일": "2026-07-22", "수집사유": "2026-07-14 공개된 출시 모바일 앱·랜딩 화면·스타일가이드·베타 테스트 결과가 확인됨" }
    }
  },
  {
    title: "Madrid Design Festival — 분야별 별표가 확장되는 가변 포스터 시스템",
    category: "비주얼 그래픽", date: "2026-07-22", url: "https://www.behance.net/gallery/252476045/Madrid-Design-Festival-Brand-Identity",
    summary: "하나의 별표를 분야별 비율과 리듬으로 변형하고 이미지 프레임·타이포·포스터에 반복한 흑백·적색 페스티벌 그래픽.",
    note: "중심 구조는 유지하면서 팔 길이와 비례만 바꿔 여러 디자인 분야를 구분해 다중 트랙 행사에서 통일성과 탐색성을 동시에 확보함.",
    tags: ["#비주얼그래픽", "#포스터", "#가변시스템", "#타이포그래피", "#페스티벌"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/735978252476045.6a5031e9779ba.png",
    visual: { background: "#f4f2ee", accent: "#e52b23", ink: "#111111", radiusOne: "0", radiusTwo: "24px", rotate: "-5deg", label: "POINT / EXPAND / CONNECT" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "분야별 별표 변형, 이미지 마스크, 흑백 기반과 에디션 색, 두 서체의 역할이 다수 포스터에 공개돼 복합 행사의 가변 그래픽 문법으로 재조합할 수 있다.",
      "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["스위스", "모노톤", "비대칭", "그리드", "하드라이트", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/735978252476045.6a5031e9779ba.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "분야별 별표·이미지 마스크·Impact와 Editorial Today·흑백과 적색", "reusable_rule": "중심점은 고정하고 방사형 팔의 비율·길이·리듬과 에디션 색만 변주" } },
      "출처": { "소스": "https://www.behance.net/gallery/252476045/Madrid-Design-Festival-Brand-Identity", "수집일": "2026-07-22", "수집사유": "2026-07-09 공개된 완성 포스터·가변 심벌 규칙·타이포와 색상 시스템이 확인됨" }
    }
  },
  {
    title: "NetCarbon — 산업 에너지와 자연을 겹친 연속 불꽃 아이덴티티",
    category: "브랜드", date: "2026-07-22", url: "https://www.behance.net/gallery/252155935/NetCarbon-Brand-Identity",
    summary: "불꽃·공기·잎·탄소 6번 원소를 심벌과 워드마크에 결합하고 오렌지·적색과 딥그린·블루로 확장한 클린에너지 브랜드.",
    note: "산업적 힘과 환경 책임을 단일 심벌의 외곽과 내부 드롭 형태, 냉온 팔레트로 동시에 표현해 기후테크 브랜딩의 메시지 균형이 좋음.",
    tags: ["#브랜드", "#클린에너지", "#기후테크", "#심벌시스템", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/58b3f1252155935.6a47fa259b741.png",
    visual: { background: "#123d38", accent: "#f26732", ink: "#f2eadc", radiusOne: "50%", radiusTwo: "24px", rotate: "3deg", label: "FLAME / CARBON / CONTROL" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "연속 불꽃·공기·잎을 결합한 심벌, 탄소 원자번호를 반영한 워드마크, 냉온 팔레트와 실제 응용이 공개돼 기후테크 브랜드의 산업성과 지속가능성을 함께 표현할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "타이포그래피", "콘텐츠명료성"], "시각렌즈": ["미니멀", "듀오톤", "중앙집중", "글로시", "럭셔리"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/58b3f1252155935.6a47fa259b741.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "연속 불꽃 외곽과 공기·잎 드롭, 탄소 6을 반영한 E, 냉온 팔레트", "applications": "로고·컬러·타이포·디지털 및 산업 접점" } },
      "출처": { "소스": "https://www.behance.net/gallery/252155935/NetCarbon-Brand-Identity", "수집일": "2026-07-22", "수집사유": "2026-07-03 공개된 기후테크 아이덴티티의 심벌 논리·색상·타이포·완성 응용이 확인됨" }
    }
  },
  {
    title: "LOLA — 사람 승인을 색으로 구분하는 AI 프로젝트 매니저",
    category: "AI 디자인", date: "2026-07-21", url: "https://www.behance.net/gallery/252306581/LOLA-An-AI-Project-Manager-for-Creative-Teams",
    summary: "요청을 읽어 담당자·프로젝트·우선순위를 제안하고 사람이 승인하는 실제 운영형 AI 에이전트와 상태 중심 브랜드 시스템.",
    note: "AI 제안·사람 승인·추가 질문을 색으로 분리해 자동화의 주체와 책임 경계를 한눈에 읽게 만드는 휴먼 인 더 루프 패턴이 좋음.",
    tags: ["#AI디자인", "#AI에이전트", "#휴먼인더루프", "#상태디자인", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b137fe252306581.6a5a3d0d6cc63.png",
    visual: { background: "#f4ead8", accent: "#f28c6f", ink: "#171717", radiusOne: "24px", radiusTwo: "50%", rotate: "-3deg", label: "PROPOSE / APPROVE / ASK" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept",
      "근거": "실제 운영 중인 요청 분류 에이전트가 제안·승인·질문의 세 상태를 색과 화면으로 공개해 창작팀 자동화에서 사람의 최종 통제권을 보존하는 패턴으로 전이할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름", "콘텐츠명료성", "인터랙션"], "시각렌즈": ["미니멀", "듀오톤", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b137fe252306581.6a5a3d0d6cc63.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "요청 접수→AI가 담당자·프로젝트·우선순위 제안→사람 승인 또는 추가 질문", "controls": "따뜻한 색=AI 제안·차가운 색=사람 승인·크림=확인 질문·propose-only 모드" } },
      "출처": { "소스": "https://www.behance.net/gallery/252306581/LOLA-An-AI-Project-Manager-for-Creative-Teams", "수집일": "2026-07-21", "수집사유": "2026-07-07 공개된 실제 운영형 AI 에이전트의 제품 화면·상태 규칙·구현 흐름이 확인됨" }
    }
  },
  {
    title: "Orange Tulle Portrait — 블루 배경과 네온 피치 광원의 레이어",
    category: "AI 이미지 프롬프트", date: "2026-07-21", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#detailed-tulle-portrait",
    summary: "블루·퍼플 배경 위에 오렌지 튤과 네온 피치 광원을 겹쳐 무중력 바로크 초상을 만드는 Gen-4 Image 예시.",
    note: "차가운 배경과 따뜻한 반투명 소재를 색온도·레이어·광원 단위로 분리해 패션·뷰티 캠페인의 블루톤 키비주얼을 설계하기 좋음.",
    prompt: "elegant portrait of a woman draped in a sheer tulle veil against a blue background that resembles a sky. Close-up, ethereal warm orange lighting, soft glowing focus. natural face. The orange-toned tulle veil is draped over her head and flows around her face with multiple flowing layers in a weightless, extravagant baroque painting style. The flowing fabric takes up most of the scene, dramatically swirling throughout the environment. Glowing orange lighting creates a dreamy atmosphere. blend of pastel and vibrant color palettes. rich purples and blues, warm pinkish orange skin tone. avant-garde. elegant artistry, elaborate yet minimalist. a chaotic yet elegant scene. dramatic weightless flowing fabric. glowing, gel lighting, ethereal. electric neon peach accents.",
    tags: ["#AI이미지프롬프트", "#블루톤", "#패션캠페인", "#젤라이팅", "#Gen4Image"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37067220594835",
    visual: { background: "#334a9b", accent: "#ff8f72", ink: "#fff4ef", radiusOne: "50%", radiusTwo: "24px", rotate: "4deg", label: "BLUE / TULLE / PEACH" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 가이드가 전체 프롬프트·Gen-4 Image·결과 이미지를 함께 제공하고 블루 배경, 오렌지 튤, 젤 광원, 클로즈업을 구체적으로 명시해 캠페인 초상으로 반복 비교할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["에디토리얼", "하이채도", "중앙집중", "소프트확산광", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37067220594835", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "elegant portrait of a woman draped in a sheer tulle veil against a blue background that resembles a sky. Close-up, ethereal warm orange lighting, soft glowing focus. natural face. The orange-toned tulle veil is draped over her head and flows around her face with multiple flowing layers in a weightless, extravagant baroque painting style. The flowing fabric takes up most of the scene, dramatically swirling throughout the environment. Glowing orange lighting creates a dreamy atmosphere. blend of pastel and vibrant color palettes. rich purples and blues, warm pinkish orange skin tone. avant-garde. elegant artistry, elaborate yet minimalist. a chaotic yet elegant scene. dramatic weightless flowing fabric. glowing, gel lighting, ethereal. electric neon peach accents.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Detailed 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37067220594835", "fragment_map": [{ "조각": "blue background that resembles a sky", "효과": "풍부한 블루·퍼플 공간색 형성" }, { "조각": "orange-toned tulle veil ... multiple flowing layers", "효과": "반투명 오렌지 소재의 겹과 깊이 생성" }, { "조각": "warm orange lighting ... electric neon peach accents", "효과": "차가운 배경과 대비되는 피치 계열 젤 광원" }, { "조각": "Close-up ... soft glowing focus", "효과": "얼굴 중심의 부드러운 캠페인 초점" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-21", "수집사유": "최근 갱신된 공식 가이드에서 블루톤 결과물·전체 프롬프트·모델 조건이 확인됨" }
    }
  },
  {
    title: "Glitchcore Fabric Portrait — 데이터모시와 CRT 이상을 섞은 패션 이미지",
    category: "AI 이미지 프롬프트", date: "2026-07-21", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#glitchcore-fabric-portrait",
    summary: "흐르는 아방가르드 의상에 데이터모시·크로매틱 애버레이션·CRT 정적을 낮은 대비로 자연스럽게 혼합한 공식 예시.",
    note: "오류 효과를 장식 필터가 아니라 소재 흐름·저대비 사진·픽셀 변형의 계층으로 정의해 테크 패션 비주얼의 통제 어휘로 쓰기 좋음.",
    prompt: "abstract, glitchy cinematic photography of a woman wearing an avant garde outfit with cascading layers of flowing fabric. Glitch art, glitchcore, grain texture, datamosh, melting pixels, chromatic aberration, CRT static accents. The low-contrast glitched photograph is naturally blended with visual anomalies.",
    tags: ["#AI이미지프롬프트", "#글리치코어", "#패션", "#CRT", "#테크IT"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37067220597011",
    visual: { background: "#231c2e", accent: "#58d8de", ink: "#f5f0fb", radiusOne: "24px", radiusTwo: "0", rotate: "-5deg", label: "DATAMOSH / CRT / FABRIC" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 결과와 전체 프롬프트가 소재·그레인·데이터모시·색수차·CRT 정적을 분리해 제시하므로 테크 패션 이미지의 디지털 이상 강도를 조합해 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["에디토리얼", "듀오톤", "비대칭", "필름그레인", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37067220597011", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "abstract, glitchy cinematic photography of a woman wearing an avant garde outfit with cascading layers of flowing fabric. Glitch art, glitchcore, grain texture, datamosh, melting pixels, chromatic aberration, CRT static accents. The low-contrast glitched photograph is naturally blended with visual anomalies.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Glitchcore 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37067220597011", "fragment_map": [{ "조각": "cascading layers of flowing fabric", "효과": "의상 층의 방향성과 유동적 실루엣" }, { "조각": "datamosh, melting pixels", "효과": "픽셀 용해와 프레임 압축 오류 질감" }, { "조각": "chromatic aberration, CRT static accents", "효과": "색 분리와 아날로그 화면 노이즈" }, { "조각": "low-contrast ... naturally blended", "효과": "오류 효과를 사진에 저대비로 통합" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-21", "수집사유": "최근 갱신된 공식 가이드에서 전체 프롬프트·결과 이미지·모델 조건이 확인됨" }
    }
  },
  {
    title: "Perfume Pedestal Up — 오팔 유리병을 따라 상승하는 뷰티 제품 숏",
    category: "AI 영상 프롬프트", date: "2026-07-21", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#pedestal-perfume",
    summary: "손이 향수병을 들어 올리는 동작을 페데스털 업 카메라가 따라가며 오팔 반사와 블루·핑크 배경을 드러내는 Gen-4.5 예시.",
    note: "손·제품·카메라의 수직 이동을 같은 속성으로 묶어 작은 제품을 영웅적으로 드러내는 뷰티 커머셜 숏에 적용하기 좋음.",
    prompt: "A woman's slender fingers with delicate, polished nails gently grasp the faceted cap of a clear glass perfume bottle, illuminated by soft, prismatic light. The hand lifts the bottle, revealing the faint tattoo on her wrist while the camera executes a gentle pedestal up, following the bottle's ascent. The color palette combines natural skin tones with the opalescent hues of the perfume bottle and the soft cool blue and warm pink background. Commercial beauty photography, ethereal, soft focus, product shot, iridescent, soft pastels",
    tags: ["#AI영상프롬프트", "#Gen45", "#페데스털", "#제품광고", "#향수"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504754579",
    visual: { background: "#c9dafa", accent: "#efb1c8", ink: "#222235", radiusOne: "50%", radiusTwo: "24px", rotate: "3deg", label: "LIFT / PEDESTAL / IRIDESCENT" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 Gen-4.5 출력과 전체 프롬프트가 손의 상승, 병의 오팔 반사, 페데스털 업, 블루·핑크 배경을 함께 규정해 제품 공개 숏으로 반복 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["미니멀", "파스텔", "중앙집중", "소프트확산광", "글로시", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504754579", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A woman's slender fingers with delicate, polished nails gently grasp the faceted cap of a clear glass perfume bottle, illuminated by soft, prismatic light. The hand lifts the bottle, revealing the faint tattoo on her wrist while the camera executes a gentle pedestal up, following the bottle's ascent. The color palette combines natural skin tones with the opalescent hues of the perfume bottle and the soft cool blue and warm pink background. Commercial beauty photography, ethereal, soft focus, product shot, iridescent, soft pastels", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·공식 Pedestal 예시·duration/aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504754579", "fragment_map": [{ "조각": "hand lifts the bottle", "효과": "손과 제품의 수직 상승 동작" }, { "조각": "gentle pedestal up, following the bottle's ascent", "효과": "제품을 놓치지 않는 부드러운 수직 카메라" }, { "조각": "soft, prismatic light", "효과": "유리 면의 오팔 분광 반사" }, { "조각": "cool blue and warm pink background", "효과": "파스텔 냉온 색 대비" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-21", "수집사유": "최근 갱신된 공식 카메라 예시에서 전체 프롬프트·Gen-4.5 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Pastel Snake Orbit — 초현실 스틸라이프를 천천히 도는 카메라",
    category: "AI 영상 프롬프트", date: "2026-07-21", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#orbit-pastel-snake",
    summary: "알비노 뱀·노란 레몬·핑크 꽃·글리터 식물을 파스텔 배경에 배치하고 느린 궤도 카메라로 전체 재질을 탐색하는 공식 예시.",
    note: "고정된 제품형 스틸라이프에 느린 오빗만 부여해 소재 반사와 전후 관계를 보여 주는 럭셔리 티저의 기본 움직임으로 좋음.",
    prompt: "Camera orbits a meticulously arranged, surreal still life featuring an iridescent albino snake coiled among vibrant yellow lemons, soft pink flowers, and shimmering, glitter-dusted flora against a gentle pastel backdrop. The camera executes a slow, deliberate orbit.",
    tags: ["#AI영상프롬프트", "#Gen45", "#오빗", "#스틸라이프", "#럭셔리"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313515624083",
    visual: { background: "#f2dce7", accent: "#f1dc4d", ink: "#25231f", radiusOne: "24px", radiusTwo: "50%", rotate: "-4deg", label: "SNAKE / STILL LIFE / ORBIT" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 Gen-4.5 결과와 전체 프롬프트가 주체·보조 소재·파스텔 배경·느린 오빗을 분리해 명시하므로 럭셔리 스틸라이프의 전후 관계와 재질 반사를 안정적으로 탐색할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["3D", "파스텔", "중앙집중", "글로시", "럭셔리", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313515624083", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Camera orbits a meticulously arranged, surreal still life featuring an iridescent albino snake coiled among vibrant yellow lemons, soft pink flowers, and shimmering, glitter-dusted flora against a gentle pastel backdrop. The camera executes a slow, deliberate orbit.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·공식 Orbit 예시·duration/aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313515624083", "fragment_map": [{ "조각": "iridescent albino snake coiled", "효과": "중앙 주체의 곡선과 오팔 반사" }, { "조각": "yellow lemons, soft pink flowers", "효과": "레몬·핑크의 밝은 색 대비" }, { "조각": "glitter-dusted flora", "효과": "회전 중 점광 하이라이트 생성" }, { "조각": "slow, deliberate orbit", "효과": "스틸라이프 전면과 후면을 느리게 공개" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-21", "수집사유": "최근 갱신된 공식 카메라 예시에서 전체 프롬프트·Gen-4.5 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Mexico & Taiwan Impression — 문화 기호를 색면으로 압축한 포스터",
    category: "비주얼 그래픽", date: "2026-07-21", url: "https://www.behance.net/gallery/252924549/Mexico-Taiwan-Impression-Poster-Design",
    summary: "멕시코의 태양석·마리골드와 대만의 오페라·창살·난초를 따뜻한 삼색과 청록·적색의 두 포스터로 재구성한 문화 그래픽.",
    note: "복수의 문화 상징을 세미오틱 모듈과 제한 팔레트로 묶어 지역 캠페인에서 정보 밀도와 즉시 인식성을 동시에 확보한 사례임.",
    tags: ["#비주얼그래픽", "#포스터", "#문화기호", "#일러스트", "#하이채도"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9f360b252924549.6a5b689663046.jpeg",
    visual: { background: "#f06a3b", accent: "#0f817f", ink: "#171717", radiusOne: "0", radiusTwo: "50%", rotate: "-3deg", label: "SYMBOL / COLOR / PLACE" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "두 지역의 문화 상징·인쇄 규격·제한 팔레트와 완성 포스터가 함께 공개돼 지역 행사 그래픽에서 상징 모듈과 색 체계를 재사용할 수 있다.",
      "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["일러스트", "하이채도", "중앙집중", "고밀도", "따뜻"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9f360b252924549.6a5b689663046.jpeg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "system": "문화 상징을 중앙 모티프·장식 테두리·제한 팔레트로 모듈화", "applications": "700×1000mm 디지털 인쇄 포스터 2종" } },
      "출처": { "소스": "https://www.behance.net/gallery/252924549/Mexico-Taiwan-Impression-Poster-Design", "수집일": "2026-07-21", "수집사유": "2026-07-18 공개된 완성 포스터·문화 기호 설명·인쇄 규격이 확인됨" }
    }
  },
  {
    title: "Operational Command Dashboard — KPI·알림·주문을 한 화면에 묶은 UI",
    category: "웹·앱 UI", date: "2026-07-21", url: "https://www.behance.net/gallery/252438853/Modern-Operational-Dashboard-UI-Design",
    summary: "실시간 KPI, 운영 알림, 지역 비교, 성과 분석, 주문 관리 테이블을 단일 의사결정 화면으로 통합한 엔터프라이즈 대시보드.",
    note: "핵심 수치에서 예외 알림과 상세 주문으로 내려가는 시선 순서를 명확히 해 운영자가 문제를 발견하고 바로 조치하는 정보 구조가 좋음.",
    tags: ["#웹앱UI", "#운영대시보드", "#데이터시각화", "#엔터프라이즈", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3a5c4c252438853.6a4f73e1101e6.jpg",
    visual: { background: "#e7edf1", accent: "#3d68d7", ink: "#141820", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "KPI / ALERT / ORDER" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화",
      "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "KPI·실시간 알림·지역 비교·분석 차트·주문 테이블이 실제 화면에서 계층화돼 운영형 B2B 제품의 요약→예외→상세 패턴으로 흡수할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "콘텐츠명료성", "인터랙션"], "시각렌즈": ["미니멀", "그리드", "고밀도", "여백중심", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3a5c4c252438853.6a4f73e1101e6.jpg", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "KPI 확인→운영 알림 탐색→지역 성과 비교→주문 상세 검토", "screens": "실시간 운영 대시보드·지역 비교·주문 관리 테이블" } },
      "출처": { "소스": "https://www.behance.net/gallery/252438853/Modern-Operational-Dashboard-UI-Design", "수집일": "2026-07-21", "수집사유": "2026-07-09 공개된 실제 운영 대시보드 화면과 KPI·알림·분석·주문 관리 구조가 확인됨" }
    }
  },
  {
    title: "CotaSonic — 데이터 기반 견적 플랫폼의 레이더 아이덴티티",
    category: "브랜드", date: "2026-07-21", url: "https://www.behance.net/gallery/252395513/CotaSonic",
    summary: "견적 검색·비교·모니터링을 레이더 심벌, 오렌지·블루 팔레트, 기술적 워드마크와 랜딩 페이지로 확장한 테크 브랜드.",
    note: "제품의 핵심 행위인 탐색과 비교를 심벌·색·그래픽 자산·디지털 화면까지 일관되게 번역해 B2B 데이터 서비스 브랜딩에 유용함.",
    tags: ["#브랜드", "#테크브랜드", "#데이터플랫폼", "#레이더", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/08432a252395513.6a4e65152bd38.jpg",
    visual: { background: "#163c75", accent: "#f37a24", ink: "#ffffff", radiusOne: "50%", radiusTwo: "24px", rotate: "4deg", label: "SEARCH / COMPARE / DECIDE" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "레이더 기반 심벌·기술적 로고·오렌지와 블루 팔레트·랜딩 페이지·소셜 자산이 한 시스템으로 공개돼 데이터 기반 B2B 서비스의 속도와 신뢰를 일관되게 표현할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "정보구조", "콘텐츠명료성"], "시각렌즈": ["미니멀", "듀오톤", "그리드", "글로시", "차가움"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/08432a252395513.6a4e65152bd38.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "레이더·검색 로직의 심벌, 기술적 워드마크, 오렌지·블루 팔레트", "applications": "랜딩 페이지·소셜 미디어·문구·브랜드 자산" } },
      "출처": { "소스": "https://www.behance.net/gallery/252395513/CotaSonic", "수집일": "2026-07-21", "수집사유": "2026-07-08 공개된 테크 플랫폼의 전체 아이덴티티·디지털 응용·대표 이미지가 확인됨" }
    }
  },
  {
    title: "Workflow Lab — 디자인 수정에서 접근성 PR까지 잇는 AI 핸드오프",
    category: "AI 디자인", date: "2026-07-20", url: "https://www.figma.com/blog/workflow-lab-deploying-designs-directly-with-figma-make/",
    summary: "Figma 에이전트의 합성 페르소나 검토에서 실제 코드 수정·접근성 주석·GitHub PR까지 연결한 공식 디자인-코드 워크플로.",
    note: "작은 UX 개선을 티켓으로 넘기지 않고 디자인 의도·접근성 요구·코드 변경 이력을 한 흐름에 보존하는 협업 모델로 전이하기 좋음.",
    tags: ["#AI디자인", "#FigmaMake", "#접근성", "#디자인투코드", "#테크IT"],
    thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/109e9f7c7d82c472f812ee14861b883dd4b1665a-3840x2160.png?rect=2,0,3837,2160&w=1080&h=608&q=75&fit=max&auto=format",
    visual: { background: "#ece9ff", accent: "#5b49d8", ink: "#171717", radiusOne: "24px", radiusTwo: "50%", rotate: "-3deg", label: "REVIEW / CODE / PR" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "실제 모바일 여정 화면·에이전트 피드백·공유 컴포넌트 수정·접근성 주석·병합 PR이 한 사례로 공개돼 디자이너 주도 소규모 개선 흐름으로 반복 적용할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름", "접근성", "인터랙션"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://cdn.sanity.io/images/599r6htc/regionalized/109e9f7c7d82c472f812ee14861b883dd4b1665a-3840x2160.png?rect=2,0,3837,2160&w=1080&h=608&q=75&fit=max&auto=format", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "합성 페르소나 검토→팀 합의→프로덕션 코드 연결→공유 컴포넌트 수정→접근성 주석→PR 병합", "controls": "브랜치 범위·공유 의존성·aria-label·포커스 순서·빈 상태 메시지" } },
      "출처": { "소스": "https://www.figma.com/blog/workflow-lab-deploying-designs-directly-with-figma-make/", "수집일": "2026-07-20", "수집사유": "2026-07-16 공개된 공식 사례에서 실제 화면과 디자인-코드-PR 전 과정이 확인됨" }
    }
  },
  {
    title: "Worried Presenter — 발표를 듣고 스크립트를 코칭하는 Figma 플러그인",
    category: "Figma 플러그인", date: "2026-07-20", url: "https://www.figma.com/community/plugin/1647613618742509370/worried-presenter",
    summary: "디자인 발표를 녹음·전사·분석해 더 자신감 있고 이야기 중심인 발표 스크립트와 개선 피드백을 제공하는 AI 코치.",
    note: "디자인 리뷰 전에 발표 논리와 전달 품질을 반복 점검해 시각 산출물의 의도 설명과 이해관계자 설득을 함께 다듬기 좋음.",
    tags: ["#Figma플러그인", "#발표코칭", "#AI활용", "#디자인리뷰", "#테크IT"],
    thumbnail: "https://www.figma.com/community/thumbnail?resource_id=1647613618742509370&resource_type=plugin",
    visual: { background: "#f4f1ea", accent: "#7957e8", ink: "#171717", radiusOne: "24px", radiusTwo: "50%", rotate: "3deg", label: "LISTEN / COACH / PRESENT" },
    review: {
      "유형": "Figma 플러그인", "가치축_이름": "유용성",
      "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "공식 3840×1916 커버에서 발표 목록·AI 스크립트 코치·녹음·전사·피드백 기능이 실제 화면으로 확인돼 디자인 리뷰 준비 시간을 반복적으로 줄일 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성", "사용자흐름"], "시각렌즈": [], "시각아티팩트_url": "https://www.figma.com/community/thumbnail?resource_id=1647613618742509370&resource_type=plugin", "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "workflow": "발표 선택→발표 녹음→전사·분석→스토리형 스크립트와 개선 피드백 확인", "repeated_task": "디자인 발표 리허설과 설명 문장 개선" } },
      "출처": { "소스": "https://forum.figma.com/ask-the-community-7/our-new-ai-powered-presentation-coach-56163", "수집일": "2026-07-20", "수집사유": "2026-07-19 공개된 공식 Community 플러그인과 실제 제품 화면 커버가 확인됨" }
    }
  },
  {
    title: "Blue Nails Minimal Portrait — 네이비 배경의 날카로운 35mm 초상",
    category: "AI 이미지 프롬프트", date: "2026-07-20", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#modern-blue-nails",
    summary: "검은 손과 긴 블루 네일을 어두운 네이비 배경·35mm·미니멀 조형으로 분리한 공식 Gen-4 Image 예시.",
    note: "피사체·배경을 같은 블루 계열 안에서 명도와 광택으로 분리해 뷰티·액세서리 캠페인의 절제된 컬러 키를 설계하기 좋음.",
    prompt: "photorealistic. a black hand with long blue nails holding the face from the side. The person is bald but has some short hair around their face and head with dark skin, with a minimal, simple, dark blue background, 35mm. sharp, clean, minimalistic.",
    tags: ["#AI이미지프롬프트", "#블루톤", "#미니멀", "#뷰티캠페인", "#Gen4Image"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062120211",
    visual: { background: "#101b3d", accent: "#3189ff", ink: "#edf5ff", radiusOne: "50%", radiusTwo: "0", rotate: "-5deg", label: "NAVY / NAILS / 35MM" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept",
      "근거": "공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 이미지를 함께 제공하며 네이비 배경, 블루 네일, 35mm, 날카로운 미니멀 처리를 명시해 블루톤 초상을 반복 비교할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["미니멀", "모노톤", "중앙집중", "글로시", "차가움"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062120211", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "photorealistic. a black hand with long blue nails holding the face from the side. The person is bald but has some short hair around their face and head with dark skin, with a minimal, simple, dark blue background, 35mm. sharp, clean, minimalistic.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Modern 스타일 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062120211", "fragment_map": [{ "조각": "long blue nails", "효과": "손끝에 글로시한 블루 포인트 형성" }, { "조각": "minimal, simple, dark blue background", "효과": "저채도 네이비 면으로 피사체 윤곽 분리" }, { "조각": "35mm. sharp, clean, minimalistic", "효과": "선명하고 절제된 캠페인 초상 질감" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-20", "수집사유": "공식 프롬프트 가이드에서 블루톤 결과물·전체 프롬프트·모델 조건이 확인됨" }
    }
  },
  {
    title: "Sage Perfume Still Life — 소재 배치로 만드는 미니멀 제품 광고",
    category: "AI 이미지 프롬프트", date: "2026-07-20", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide#product-photography-perfume",
    summary: "독특한 향수병을 세이지 그린 팔레트·꽃·목재·밝은 조명으로 구성한 공식 제품 사진 프롬프트.",
    note: "제품 실루엣, 컬러 키, 보조 소재, 조명의 역할을 짧게 분리해 뷰티 제품 KV의 구도와 재질 실험 기준선으로 쓰기 좋음.",
    prompt: "modern product photography of perfume in a unique bottle. minimalist, clean. sage green color palette. thoughtfully arranged floral and wood elements. bright lighting accentuates the perfume bottle.",
    tags: ["#AI이미지프롬프트", "#제품광고", "#향수", "#스틸라이프", "#Gen4Image"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37148062154003",
    visual: { background: "#d8dfcc", accent: "#8b6a46", ink: "#1d251d", radiusOne: "24px", radiusTwo: "50%", rotate: "4deg", label: "SAGE / GLASS / LIGHT" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "공식 가이드가 전체 프롬프트·Gen-4 Image 모델·결과 이미지를 함께 제공하고 향수병·세이지 팔레트·꽃과 목재·밝은 조명을 분리해 제품 스틸라이프로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["미니멀", "어스톤", "중앙집중", "소프트확산광", "글로시", "절제"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37148062154003", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "modern product photography of perfume in a unique bottle. minimalist, clean. sage green color palette. thoughtfully arranged floral and wood elements. bright lighting accentuates the perfume bottle.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·공식 Product photography 예시·720p/1080p 지원·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37148062154003", "fragment_map": [{ "조각": "perfume in a unique bottle", "효과": "향수병 실루엣을 주 피사체로 고정" }, { "조각": "sage green color palette", "효과": "차분한 식물성 컬러 키 형성" }, { "조각": "thoughtfully arranged floral and wood elements", "효과": "꽃과 목재로 자연 소재의 높이·깊이 구성" }, { "조각": "bright lighting accentuates the perfume bottle", "효과": "유리 윤곽과 투과 반사를 밝게 강조" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-20", "수집사유": "공식 가이드에서 제품 사진 전체 프롬프트·모델·결과 이미지가 확인됨" }
    }
  },
  {
    title: "Arc to Crash Zoom — 수평 아크에서 눈으로 급가속하는 카메라",
    category: "AI 영상 프롬프트", date: "2026-07-20", url: "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide#arc-crash-zoom",
    summary: "피사체를 크게 도는 수평 아크 뒤 눈에 초점을 맞춘 급격한 크래시 줌으로 마감하는 Gen-4.5 이미지 투 비디오 예시.",
    note: "두 카메라 동작을 순서와 종착 초점으로 연결해 짧은 제품·인물 숏의 에너지와 시선 도착점을 동시에 제어하는 데 유용함.",
    prompt: "The camera executes an aggressive, sweeping horizontal arc around the subject, followed by an extremely rapid, aggressive crash zoom that concludes with a sharp focus on the subject's eyes.",
    tags: ["#AI영상프롬프트", "#Gen45", "#크래시줌", "#카메라무브", "#모션"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/48369404758291",
    visual: { background: "#201b2b", accent: "#ea6b59", ink: "#f7f4ee", radiusOne: "50%", radiusTwo: "0", rotate: "6deg", label: "ARC / ZOOM / FOCUS" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 Gen-4.5 가이드가 입력 이미지 기반 전체 프롬프트와 결과 GIF를 함께 제공해 수평 아크·크래시 줌·눈의 종착 초점을 하나의 연속 숏으로 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "인터랙션"], "시각렌즈": ["비대칭", "하드라이트", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/48369404758291", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "The camera executes an aggressive, sweeping horizontal arc around the subject, followed by an extremely rapid, aggressive crash zoom that concludes with a sharp focus on the subject's eyes.", "tool_model": "Runway Gen-4.5 Image to Video", "params": "Image to Video·공식 예시 입력 이미지·duration/aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/48369404758291", "fragment_map": [{ "조각": "aggressive, sweeping horizontal arc", "효과": "피사체 주위를 빠르고 크게 도는 수평 카메라" }, { "조각": "followed by an extremely rapid crash zoom", "효과": "아크 이후 급격한 전진 가속" }, { "조각": "sharp focus on the subject's eyes", "효과": "마지막 프레임의 시선 도착점 고정" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide", "수집일": "2026-07-20", "수집사유": "최근 갱신된 공식 Gen-4.5 가이드에서 전체 프롬프트와 결과 GIF가 확인됨" }
    }
  },
  {
    title: "Coastal Bus Leading Lines — 곡선 도로로 움직임을 유도하는 숏",
    category: "AI 영상 프롬프트", date: "2026-07-20", url: "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples#leading-lines-bus",
    summary: "해안 도로의 곡선을 선행선으로 삼아 흰색·주황 버스가 배경에서 전경으로 접근하는 Gen-4.5 영상 예시.",
    note: "도로 곡선, 주체 이동, 전경 도착, 석양 색 대비를 한 문장에 묶어 모빌리티 캠페인의 진행 방향과 깊이를 설계하기 좋음.",
    prompt: "Leading line composition of a classic white and orange municipal bus with tinted windows navigating a curve on a coastal road. The bus slowly approaches from the background, smoothly turning the bend and heading towards the foreground. The bright white and orange of the bus pop against the deep purples, oranges, and blues of the sky and distant landscape, imbued with the golden hour light. Anime art style, hand-drawn aesthetic, serene atmosphere.",
    tags: ["#AI영상프롬프트", "#Gen45", "#선행선", "#모빌리티", "#골든아워"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/47313504733075",
    visual: { background: "#33264f", accent: "#ef8f45", ink: "#fff7e8", radiusOne: "24px", radiusTwo: "50%", rotate: "-6deg", label: "CURVE / APPROACH / GOLDEN HOUR" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 가이드가 전체 프롬프트·Gen-4.5 모델·결과 GIF를 함께 제공해 해안 도로의 선행선, 버스의 전경 접근, 골든아워 색 대비를 반복 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["일러스트", "하이채도", "비대칭", "하드라이트", "따뜻", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313504733075", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Leading line composition of a classic white and orange municipal bus with tinted windows navigating a curve on a coastal road. The bus slowly approaches from the background, smoothly turning the bend and heading towards the foreground. The bright white and orange of the bus pop against the deep purples, oranges, and blues of the sky and distant landscape, imbued with the golden hour light. Anime art style, hand-drawn aesthetic, serene atmosphere.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·공식 Leading lines 예시·duration/aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313504733075", "fragment_map": [{ "조각": "Leading line composition", "효과": "곡선 도로가 주체 이동 방향을 안내" }, { "조각": "approaches from the background ... foreground", "효과": "배경에서 전경으로 이어지는 깊이와 접근 동작" }, { "조각": "white and orange ... deep purples, oranges, and blues", "효과": "버스와 석양 배경의 고채도 색 대비" }, { "조각": "golden hour light", "효과": "따뜻한 저각광과 긴 그림자" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313504791059-Camera-Terms-Prompts-Examples", "수집일": "2026-07-20", "수집사유": "최근 갱신된 공식 카메라 예시에서 프롬프트·모델·결과 GIF가 확인됨" }
    }
  },
  {
    title: "Decagon QA Workspace — AI 인사이트와 편집형 데이터 테이블의 결합",
    category: "웹·앱 UI", date: "2026-07-20", url: "https://www.figma.com/blog/how-decagon-uses-ai-for-design-system-saturation/",
    summary: "AI 고객지원 분석 프롬프트, 워크플로 탭, QA 대시보드, 편집형 데이터 테이블을 공통 디자인 시스템으로 묶은 실제 제품 화면.",
    note: "자유 질의형 AI와 구조화된 분석·검수 도구를 한 작업 공간에서 오가게 해 에이전트 제품의 탐색성과 통제감을 함께 설계한 사례임.",
    tags: ["#웹앱UI", "#AI에이전트", "#데이터테이블", "#QA대시보드", "#테크IT"],
    thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/971c05ae16b76a56dd3c005f2e5751985b7c0020-3744x2238.png?rect=1,0,3742,2238&w=1080&h=646&q=75&fit=max&auto=format",
    visual: { background: "#ebe7fa", accent: "#7057e5", ink: "#1b1a20", radiusOne: "24px", radiusTwo: "0", rotate: "2deg", label: "ASK / ANALYZE / QA" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "AI 질의·워크플로 탭·추천 분석·QA 대시보드·편집형 테이블과 실제 디자인 시스템 컴포넌트가 공개돼 에이전트형 B2B 제품의 정보 구조와 상태 패턴으로 흡수할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "AI활용", "콘텐츠명료성", "인터랙션"], "시각렌즈": ["미니멀", "그리드", "고밀도", "여백중심", "절제"], "시각아티팩트_url": "https://cdn.sanity.io/images/599r6htc/regionalized/971c05ae16b76a56dd3c005f2e5751985b7c0020-3744x2238.png?rect=1,0,3742,2238&w=1080&h=646&q=75&fit=max&auto=format", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "질문 입력→분석 워크플로 선택→추천 질의 실행→QA 테이블 검토·편집", "screens": "AI 분석 홈·워크플로 탭·추천 질문·QA 대시보드·편집형 데이터 테이블" } },
      "출처": { "소스": "https://www.figma.com/blog/how-decagon-uses-ai-for-design-system-saturation/", "수집일": "2026-07-20", "수집사유": "2026-07-10 공개된 공식 사례에서 실제 AI 분석·QA 제품 화면이 확인됨" }
    }
  },
  {
    title: "The Wheel of Time S3 — 색·굴절·단계 설계로 전달하는 VFX 콘셉트",
    category: "비주얼 그래픽", date: "2026-07-20", url: "https://www.behance.net/gallery/251918485/The-Wheel-of-Time-S3-Concept-Designs",
    summary: "시안 블루 에너지, 유리 숲, 모래·굴절 효과, 포털 변형을 단계별 콘셉트와 최종 장면으로 연결한 VFX 아트 디렉션.",
    note: "추상적인 힘을 색 대비·두께·불투명도·반사·변형 단계로 분해해 모션·VFX 팀에 넘기는 시각 명세 방식이 구체적임.",
    tags: ["#비주얼그래픽", "#VFX", "#콘셉트아트", "#시안블루", "#모션필"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c6d36d251918485.6a42a73646723.jpg",
    visual: { background: "#261d18", accent: "#69d7ff", ink: "#f6eee5", radiusOne: "0", radiusTwo: "50%", rotate: "5deg", label: "ENERGY / REFRACTION / STAGES" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "공개 콘셉트와 최종 장면이 방사형 에너지·시안/어스톤 대비·유리 굴절·포털 왜곡의 단계별 설계를 보여 줘 복합 VFX의 아트 디렉션 명세로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "사용자흐름"], "시각렌즈": ["3D", "하이채도", "중앙집중", "하드라이트", "글로시", "몽환", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c6d36d251918485.6a42a73646723.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "abstract_only", "type_block": { "elements": "방사형 에너지 직조·시안 발광·사막 어스톤·유리 굴절·모래 파동·포털 왜곡", "reusable_rule": "효과를 색·두께·불투명도·반사·변형 강도 단계로 나눠 콘셉트에서 최종 합성까지 연결" } },
      "출처": { "소스": "https://www.behance.net/gallery/251918485/The-Wheel-of-Time-S3-Concept-Designs", "수집일": "2026-07-20", "수집사유": "2026-07-18 공개된 다수의 콘셉트 이미지·단계 설명·최종 영상이 확인됨" }
    }
  },
  {
    title: "EBAT — 예술·과학·기술을 연결하는 교육 브랜드 시스템",
    category: "브랜드", date: "2026-07-20", url: "https://www.behance.net/gallery/252920017/Manual-de-marca-EBAT",
    summary: "디지털 신기술 교육을 인간의 창의적 확장으로 정의하고 계산적 구조와 문화적 표현을 함께 묶은 브랜드 매뉴얼.",
    note: "기술 교육의 차가운 이미지를 그대로 쓰지 않고 엄격한 정보 구조와 유연한 그래픽 언어를 조합해 포용성과 혁신을 동시에 전달함.",
    tags: ["#브랜드", "#브랜드가이드", "#기술교육", "#예술과기술", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/a4cb21252920017.6a5b41628b82d.png",
    visual: { background: "#f2efe7", accent: "#3159d8", ink: "#171717", radiusOne: "24px", radiusTwo: "0", rotate: "-4deg", label: "ART / SCIENCE / TECHNOLOGY" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "로고·타이포·컬러·그래픽 규칙과 교육 브랜드 응용물이 공개돼 예술·과학·기술을 연결하는 기관의 계산적이면서 유연한 시각 문법으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "타이포그래피", "콘텐츠명료성"], "시각렌즈": ["스위스", "그리드", "비대칭", "하이채도", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/a4cb21252920017.6a5b41628b82d.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "계산적 그리드와 유연한 문화 그래픽을 결합한 예술·기술 교육 아이덴티티", "applications": "브랜드 매뉴얼·타이포·컬러·그래픽 모듈·교육 커뮤니케이션" } },
      "출처": { "소스": "https://www.behance.net/gallery/252920017/Manual-de-marca-EBAT", "수집일": "2026-07-20", "수집사유": "2026-07-18 공개된 공식 브랜드 매뉴얼과 실제 응용 이미지가 확인됨" }
    }
  },
  {
    title: "Driven by Destiny — 생성·합성·보정으로 연결한 AI 시네마 파이프라인",
    category: "AI 디자인", date: "2026-07-19", url: "https://www.behance.net/gallery/252856383/Ayrton-Senna-Driven-by-Destiny",
    summary: "AI 이미지·영상 합성·보이스·업스케일을 거쳐 Premiere 편집과 DaVinci 색보정으로 마감한 모터스포츠 콘셉트 필름 제작 흐름.",
    note: "생성 결과를 단일 툴의 완성본으로 보지 않고 장면 제작·합성·편집·컬러 피니시 단계로 분리해 캠페인 필름 제작 체크리스트로 추상화하기 좋음.",
    tags: ["#AI디자인", "#AI필름", "#모터스포츠", "#후반제작", "#생성형AI"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a8fdf8252856383.6a597fa0047ca.png",
    visual: { background: "#171717", accent: "#f1c928", ink: "#f7f4ec", radiusOne: "0", radiusTwo: "50%", rotate: "-4deg", label: "GENERATE / EDIT / GRADE" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 3 }, "total": 16, "verdict": "accept",
      "근거": "생성 이미지·영상·보이스·향상 도구와 Premiere 편집·DaVinci 색보정이 완성 장면과 함께 공개돼 멀티툴 AI 필름 제작 단계를 캠페인 워크플로로 전이할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "사용자흐름", "브랜드일관성"], "시각렌즈": ["에디토리얼", "중앙집중", "하드라이트", "필름그레인", "럭셔리", "모션필"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a8fdf8252856383.6a597fa0047ca.png", "커버리지_카테고리": "AI 디자인", "보안_등급": "abstract_only", "type_block": { "workflow": "AI 이미지·영상·보이스 생성→장면 합성·향상→Premiere 편집→DaVinci 색보정·피니시", "controls": "장면별 생성 일관성·컷 연결·시네마틱 대비·필름 질감" } },
      "출처": { "소스": "https://www.behance.net/gallery/252856383/Ayrton-Senna-Driven-by-Destiny", "수집일": "2026-07-19", "수집사유": "2026-07-17 공개된 완성 필름 장면과 생성·편집·색보정 제작 흐름이 확인됨" }
    }
  },
  {
    title: "StyleSync — 미세 스타일 불일치를 한 번에 찾는 Figma 검사기",
    category: "Figma 플러그인", date: "2026-07-19", url: "https://www.figma.com/community/plugin/1656255634480891540",
    summary: "현재 페이지의 폰트 크기·반경·색·선 두께·행간·자간·불투명도 차이를 감지하고 영향 레이어를 모아 수정하는 품질 점검 플러그인.",
    note: "핸드오프 직전 육안 검수에서 놓치기 쉬운 1px·1pt급 차이를 규칙 기반 목록으로 바꿔 디자인 시스템 정합성 검토 시간을 줄임.",
    tags: ["#Figma플러그인", "#디자인QA", "#스타일검사", "#핸드오프"],
    thumbnail: "https://www.figma.com/community/thumbnail?resource_id=1656255634480891540&resource_type=plugin",
    visual: { background: "#f3f3f3", accent: "#2457f5", ink: "#171717", radiusOne: "8px", radiusTwo: "0", rotate: "0deg", label: "SCAN / SELECT / FIX" },
    review: {
      "유형": "Figma 플러그인", "가치축_이름": "유용성",
      "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "공식 커버에 실제 캔버스·검사 패널·영향 레이어 선택·일괄 수정 화면이 보여 핸드오프 전 미세 스타일 편차를 반복적으로 줄이는 QA 도구로 즉시 적용할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "접근성", "사용자흐름"], "시각렌즈": [], "시각아티팩트_url": "https://www.figma.com/community/thumbnail?resource_id=1656255634480891540&resource_type=plugin", "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "workflow": "현재 페이지 스캔→미세 불일치 목록 확인→영향 레이어 선택→공통 값으로 수정", "repeated_task": "폰트 크기·반경·색·선·행간·자간·불투명도 정합성 검사" } },
      "출처": { "소스": "https://www.figma.com/community/plugin/1656255634480891540", "수집일": "2026-07-19", "수집사유": "2026-07-13 공개된 공식 Community 커버에서 실행 화면과 검사·수정 흐름이 확인됨" }
    }
  },
  {
    title: "Liquid Chrome Architecture — 왜곡 강도를 단계적으로 높이는 이미지 반복",
    category: "AI 이미지 프롬프트", date: "2026-07-19", url: "https://help.runwayml.com/hc/en-us/articles/37053594806419-Creating-with-Gen-4-Image",
    summary: "고전 건축을 검은 공간에 분리한 뒤 곡률·글리치·액체 크롬·홀로그램 재질을 추가해 변형 강도를 높인 공식 이미지 반복 예시.",
    note: "기본 장면을 유지한 채 형태 왜곡과 재질 지시만 증분하는 방식이라 캠페인 키 비주얼의 변주 강도를 비교하는 프롬프트 실험에 유용함.",
    prompt: "photograph of warped ornate classic buildings in a black abyss. the buildings are in surreal shapes. the buildings curve and bend impossibly high into the black sky in a glitched swirl formation, defying gravity. stark white color palette with cool blue and green tones. distorted. warped, squished, and extremely deformed and exaggerated. avant-garde. vibrant red, blue, purple, jewel green. conjoined bubblegum stretch. hologram. encased in translucent liquid chrome with an iridescent sheen.",
    tags: ["#AI이미지프롬프트", "#Gen4Image", "#액체크롬", "#초현실건축"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/37089796809363",
    visual: { background: "#080808", accent: "#6ad8df", ink: "#f7f7f7", radiusOne: "0", radiusTwo: "50%", rotate: "6deg", label: "WARP / CHROME / ITERATE" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "Runway 공식 문서가 전체 수정 프롬프트·Gen-4 Image 모델·지원 해상도·4개 결과를 함께 제공해 형태 왜곡과 액체 크롬 재질의 증분 효과를 반복 비교할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["3D", "하이채도", "비대칭", "글로시", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37089796809363", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "photograph of warped ornate classic buildings in a black abyss. the buildings are in surreal shapes. the buildings curve and bend impossibly high into the black sky in a glitched swirl formation, defying gravity. stark white color palette with cool blue and green tones. distorted. warped, squished, and extremely deformed and exaggerated. avant-garde. vibrant red, blue, purple, jewel green. conjoined bubblegum stretch. hologram. encased in translucent liquid chrome with an iridescent sheen.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·4개 배치·720p/1080p 지원·공식 예시 비율/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37089796809363", "fragment_map": [{ "조각": "warped ornate classic buildings in a black abyss", "효과": "건축 윤곽을 검은 배경에서 분리" }, { "조각": "curve and bend impossibly high into a glitched swirl formation", "효과": "수직 구조를 나선형으로 강하게 왜곡" }, { "조각": "encased in translucent liquid chrome with an iridescent sheen", "효과": "표면에 반투명 크롬과 무지갯빛 반사 부여" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/37053594806419-Creating-with-Gen-4-Image", "수집일": "2026-07-19", "수집사유": "공식 가이드에서 전체 프롬프트·모델·해상도 설정·생성 결과가 함께 확인됨" }
    }
  },
  {
    title: "Floating Boulder Composite — 두 레퍼런스를 한 장면으로 결합",
    category: "AI 이미지 프롬프트", date: "2026-07-19", url: "https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References",
    summary: "인물 레퍼런스와 부유 바위 장면을 태그로 불러와 피사체 정체성과 환경 구도를 한 이미지에 결합한 공식 멀티레퍼런스 예시.",
    note: "피사체와 배경을 각각 독립 레퍼런스로 관리해 캐릭터 일관성을 유지하면서 캠페인 장면을 확장하는 합성 워크플로를 이해하기 좋음.",
    prompt: "@bryan sits atop the floating boulder in IMG_1",
    tags: ["#AI이미지프롬프트", "#Gen4Image", "#멀티레퍼런스", "#장면합성"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/40794868929811",
    visual: { background: "#6d99af", accent: "#bf6c31", ink: "#151515", radiusOne: "50%", radiusTwo: "0", rotate: "-5deg", label: "SUBJECT / SCENE / COMBINE" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공식 문서가 인물·부유 바위 입력 레퍼런스, 태그형 전체 프롬프트, Gen-4 Image 결과를 함께 공개해 주체 보존과 장면 결합을 반복 재현할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["중앙집중", "소프트확산광", "따뜻", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/40794868929811", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "@bryan sits atop the floating boulder in IMG_1", "tool_model": "Runway Gen-4 Image References", "params": "Reference 2장(@bryan 인물·IMG_1 부유 바위)·최대 3개 Reference 지원·공식 예시 비율/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/40794868929811", "fragment_map": [{ "조각": "@bryan", "효과": "저장된 인물의 정체성과 외형 유지" }, { "조각": "floating boulder in IMG_1", "효과": "부유 바위의 환경·조명·공간 관계 참조" }, { "조각": "sits atop", "효과": "인물과 바위 사이의 접촉 자세 지정" }] } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References", "수집일": "2026-07-19", "수집사유": "최근 갱신된 공식 References 가이드에서 입력 이미지·태그 프롬프트·생성 결과가 함께 확인됨" }
    }
  },
  {
    title: "Blue Orb Concept Car — 시안·옐로 대비의 에디토리얼 3D 광고",
    category: "AI 이미지 프롬프트", date: "2026-07-19", url: "https://lexica.art/prompt/7cfcecb1-06d0-40d9-84c3-2f8682b6bead",
    summary: "시안 블루 차체와 네온 옐로 포인트를 투명 오브·반사 바닥·제품 시점으로 묶은 미래형 콘셉트카 광고 이미지.",
    note: "차량 비례를 유지하면서 색 대비·광택 도장·유리·타이어·반사 환경이 한 세트로 통제돼 3D 자동차 캠페인의 컬러 키 테스트에 적합함.",
    prompt: "Futuristic sci-fi blue car, Flat Design, Product-View, editorial photography, transparent orb, product photography, natural lighting, neon yellow lights, natural daytime lighting, zbrush, 8k",
    tags: ["#AI이미지프롬프트", "#자동차", "#블루톤", "#3D", "#제품광고"],
    thumbnail: "https://lexica.art/prompt/7cfcecb1-06d0-40d9-84c3-2f8682b6bead/opengraph-image?d26e3adb96114073",
    visual: { background: "#173869", accent: "#e2dc24", ink: "#eef7ff", radiusOne: "50%", radiusTwo: "0", rotate: "4deg", label: "CYAN / YELLOW / PRODUCT" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "공개 결과 4장과 전체 프롬프트·Aperture v3.5·832×1152 설정에서 시안 차체, 옐로 키라이트, 유리·도장·타이어 반사가 일관되게 확인돼 에디토리얼 자동차 제품 광고로 반복 생성할 수 있다.",
      "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["3D", "하이채도", "중앙집중", "글로시", "럭셔리"], "시각아티팩트_url": "https://lexica.art/prompt/7cfcecb1-06d0-40d9-84c3-2f8682b6bead/opengraph-image?d26e3adb96114073", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Futuristic sci-fi blue car, Flat Design, Product-View, editorial photography, transparent orb, product photography, natural lighting, neon yellow lights, natural daytime lighting, zbrush, 8k", "tool_model": "Lexica Aperture v3.5", "params": "832×1152·guidance/seed 미공개", "output_url": "https://lexica.art/prompt/7cfcecb1-06d0-40d9-84c3-2f8682b6bead/opengraph-image?d26e3adb96114073", "fragment_map": [{ "조각": "Futuristic sci-fi blue car", "효과": "브랜드 비종속 미래형 차체와 시안 도장" }, { "조각": "Product-View, editorial photography", "효과": "차량 비례를 읽기 쉬운 광고형 제품 시점" }, { "조각": "transparent orb, neon yellow lights", "효과": "유리 투과와 시안·옐로 보색 대비" }, { "조각": "zbrush, 8k", "효과": "글로시 도장·금속·타이어의 3D 표면 디테일 강화" }] } },
      "출처": { "소스": "https://lexica.art/prompt/7cfcecb1-06d0-40d9-84c3-2f8682b6bead", "수집일": "2026-07-19", "수집사유": "공개 결과에서 블루·시안 차체와 옐로 조명, 차체 비례·광택·반사 환경이 확인되고 프롬프트·모델·크기가 공개됨" }
    }
  },
  {
    title: "DesignAI Interior — 생성·탐색·저장을 연결한 모바일 공간 설계",
    category: "웹·앱 UI", date: "2026-07-19", url: "https://www.behance.net/gallery/252882405/AI-Interior-Design-Mobile-App",
    summary: "공간 사진에서 AI 인테리어 콘셉트를 생성하고 스타일 탐색·즐겨찾기·프로젝트 관리로 이어지는 모바일 앱 화면 시스템.",
    note: "생성 CTA를 홈의 핵심 과업으로 두고 결과를 방 유형·스타일·프로젝트 단위로 다시 찾게 해 AI 산출물이 일회성으로 끝나지 않는 정보 구조를 보여 줌.",
    tags: ["#웹앱UI", "#AI인테리어", "#모바일앱", "#프로젝트관리", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/260d4f252882405.6a5a29d48cf2c.png",
    visual: { background: "#f4f0e8", accent: "#2f6b4a", ink: "#1e2420", radiusOne: "24px", radiusTwo: "50%", rotate: "-3deg", label: "GENERATE / EXPLORE / SAVE" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 4 }, "total": 17, "verdict": "accept",
      "근거": "AI 제안 홈·방별 프로젝트 카드·탐색·즐겨찾기·관리 화면이 공개돼 공간 생성 결과를 장기 프로젝트로 전환하는 모바일 정보 구조와 흐름으로 흡수할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "AI활용", "콘텐츠명료성"], "시각렌즈": ["미니멀", "어스톤", "그리드", "여백중심", "소프트확산광", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/260d4f252882405.6a5a29d48cf2c.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "공간/스타일 선택→AI 콘셉트 생성→영감 탐색→즐겨찾기→프로젝트 관리", "screens": "홈·AI 제안·프로젝트 목록·방 유형 필터·탐색·즐겨찾기" } },
      "출처": { "소스": "https://www.behance.net/gallery/252882405/AI-Interior-Design-Mobile-App", "수집일": "2026-07-19", "수집사유": "최근 공개된 1405×1054 공식 프로젝트 이미지에서 AI 생성과 프로젝트 관리 모바일 화면이 확인됨" }
    }
  },
  {
    title: "Cloud Hosting Campaign — 서버 개념을 네온 3D 카드로 설명",
    category: "비주얼 그래픽", date: "2026-07-19", url: "https://www.behance.net/gallery/252889105/Social-Media-Campaign-Web-Hosting-Cloud-Services",
    summary: "공유·전용 호스팅, 클라우드, 도메인, 비즈니스 메일을 서버·퍼즐·케이블 3D 메타포와 일관된 그린 톤으로 설명한 소셜 캠페인.",
    note: "보이지 않는 인프라 서비스를 하나의 오브젝트 메타포와 질문형 헤드라인으로 번역해 기술 콘텐츠를 카드 시리즈로 확장하는 규칙이 명확함.",
    tags: ["#비주얼그래픽", "#클라우드", "#웹호스팅", "#3D", "#테크IT"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/40785d252889105.6a5a47e3ea647.png",
    visual: { background: "#0f351f", accent: "#8cf8a7", ink: "#f3fff6", radiusOne: "0", radiusTwo: "50%", rotate: "5deg", label: "SERVER / METAPHOR / SERIES" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 4, "신규성": 4, "근거성": 4, "가치축": 4 }, "total": 16, "verdict": "accept",
      "근거": "호스팅·클라우드·도메인의 실제 캠페인 카드에서 서버·퍼즐·케이블 3D 메타포와 그린 광원·질문형 헤드라인이 반복돼 기술 서비스 설명 그래픽 문법으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["콘텐츠명료성", "브랜드일관성", "타이포그래피", "AI활용"], "시각렌즈": ["3D", "하이채도", "고밀도", "글로시", "차가움"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/40785d252889105.6a5a47e3ea647.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "서버 랙·퍼즐·케이블·그린 네온·질문형 헤드라인·서비스 필", "reusable_rule": "기술 개념마다 하나의 3D 오브젝트 메타포를 배정하고 공통 색·광원·타입 위계로 시리즈화" } },
      "출처": { "소스": "https://www.behance.net/gallery/252889105/Social-Media-Campaign-Web-Hosting-Cloud-Services", "수집일": "2026-07-19", "수집사유": "2026-07-17 공개된 1400×1024 실제 소셜 카드 묶음과 기술 서비스별 그래픽 규칙이 확인됨" }
    }
  },
  {
    title: "FYND — 3D 프린팅의 발견 경험을 브랜드 시스템으로 확장",
    category: "브랜드", date: "2026-07-19", url: "https://www.behance.net/gallery/250225465/FYND",
    summary: "돋보기 모티프·유희적 워드마크·보라색 시스템을 3D 프린팅 제품 큐레이션과 잃어버린 장난감 복원 캠페인에 연결한 아이덴티티.",
    note: "기술 기능인 3D 복원을 ‘찾기’라는 감정적 행동으로 번역해 제품·캠페인·스토리텔링을 하나의 브랜드 약속으로 묶는 방식이 실무적임.",
    tags: ["#브랜드", "#3D프린팅", "#테크IT", "#일러스트", "#캠페인"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a29267250225465.6a56cafad542b.jpg",
    visual: { background: "#e7dbf1", accent: "#59309d", ink: "#211a28", radiusOne: "50%", radiusTwo: "0", rotate: "-6deg", label: "SEARCH / PRINT / RESTORE" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 4, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "돋보기 심벌·유희적 워드마크·보라색 시스템이 실제 3D 프린터, 제품 복원 캠페인, 일러스트 응용으로 연결돼 기술 기능을 발견 경험으로 전환하는 브랜드 문법으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "콘텐츠명료성", "사용자흐름"], "시각렌즈": ["일러스트", "하이채도", "중앙집중", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a29267250225465.6a56cafad542b.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "돋보기 기반 심벌·둥근 워드마크·보라/화이트 팔레트·발견과 복원 메시지", "applications": "3D 프린터 환경·제품 표지·빈티지 장난감 복원 캠페인·일러스트" } },
      "출처": { "소스": "https://www.behance.net/gallery/250225465/FYND", "수집일": "2026-07-19", "수집사유": "2026-07-17 공개된 공식 1401×788 대표 이미지와 3D 프린팅 기반 브랜드·캠페인 응용이 확인됨" }
    }
  },
  {
    title: "Maison WeCraft — 수공예 유산을 절제된 실버 시스템으로 번역",
    category: "브랜드", date: "2026-07-18", url: "https://www.behance.net/gallery/252695393/Maison-WeCraft-Brand-Identity",
    summary: "수공예 갤러리의 ‘House of Craft’ 개념을 모노그램·세리프 조합·실버 물성·여백 중심 편집으로 연결한 프리미엄 아이덴티티.",
    note: "수공예를 장식적 민속 이미지로 재현하지 않고 금속 질감과 조용한 타이포 위계로 추상화해, 문화·리빙 브랜드의 현대적 헤리티지 표현에 전이하기 좋음.",
    tags: ["#브랜드", "#수공예", "#헤리티지", "#럭셔리", "#편집디자인"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7d7dc2252695393.6a5701e8c8bf5.png",
    visual: { background: "#e7e5df", accent: "#9b9a96", ink: "#1c1b19", radiusOne: "0", radiusTwo: "50%", rotate: "-3deg", label: "CRAFT / SILVER / RESTRAINT" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "모노그램·타이포·아이콘·실버 소재·웹 응용이 같은 절제된 규칙으로 반복돼 수공예 기반 프리미엄 브랜드의 현대적 헤리티지 문법으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "타이포그래피"], "시각렌즈": ["미니멀", "모노톤", "여백중심", "글로시", "럭셔리"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7d7dc2252695393.6a5701e8c8bf5.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "elements": "모노그램·세리프/산세리프 조합·실버 물성·아이콘·웹/인쇄 응용", "reusable_rule": "수공예의 손맛을 직접 묘사하지 않고 금속 질감과 넓은 여백, 낮은 채도의 타이포 위계로 현대화" } },
      "출처": { "소스": "https://www.behance.net/gallery/252695393/Maison-WeCraft-Brand-Identity", "수집일": "2026-07-18", "수집사유": "2026-07-15 공개된 전체 아이덴티티와 1396×1056 공식 대표 이미지가 확인됨" }
    }
  },
  {
    title: "O Brasileirão Voltou — 트로피로 시선을 모으는 시네마틱 스포츠 KV",
    category: "비주얼 그래픽", date: "2026-07-18", url: "https://www.behance.net/gallery/252884613/O-Brasileirao-Voltou-Direcao-de-Arte",
    summary: "세 명의 골키퍼를 트로피 앞에 배치하고 원근·빛과 그림자·깊이로 우승 목표를 집중시키는 스포츠 캠페인 키 비주얼.",
    note: "여러 인물을 단순 나열하지 않고 공통 목표물을 소실점과 최고 명도로 설정해, 팀·제품군 캠페인에서 복수 주체의 시선을 하나로 묶는 구성법이 명확함.",
    tags: ["#비주얼그래픽", "#스포츠캠페인", "#키비주얼", "#시네마틱", "#빛과그림자"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/fae933252884613.6a5a3361bcd6b.png",
    visual: { background: "#171b20", accent: "#d8b34d", ink: "#f2eee5", radiusOne: "50%", radiusTwo: "0", rotate: "5deg", label: "DEPTH / TROPHY / FOCUS" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "복수 인물의 시선·원근·최고 명도를 중앙 트로피에 수렴시킨 1080×1440 결과가 공개돼 스포츠·팀 캠페인의 목표 집중형 합성 규칙으로 재사용할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성"], "시각렌즈": ["중앙집중", "하드라이트", "필름그레인", "럭셔리"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/fae933252884613.6a5a3361bcd6b.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "골키퍼 3인·중앙 트로피·저채도 경기장·금색 하이라이트·원근 안개", "reusable_rule": "복수 주체를 전경 양쪽에 두고 공통 목표물을 소실점과 최고 명도로 설정해 시선을 수렴" } },
      "출처": { "소스": "https://www.behance.net/gallery/252884613/O-Brasileirao-Voltou-Direcao-de-Arte", "수집일": "2026-07-18", "수집사유": "2026-07-17 공개된 캠페인 방향 설명과 1080×1440 공식 키 비주얼이 확인됨" }
    }
  },
  {
    title: "Future Luxury Showroom — 밝은 유리 공간의 자동차 광고", category: "AI 이미지 프롬프트", date: "2026-07-17", url: "https://lexica.art/prompt/65563c5a-4346-4da2-b18b-e5a1047c51d1",
    summary: "미래형 럭셔리 자동차를 유리벽·광택 바닥·밝은 조명으로 구성한 깨끗한 하이테크 쇼룸 광고 비주얼.",
    note: "차량 자체보다 반사 환경과 건축 배경을 함께 지시해 차체 표면의 광택과 프리미엄 인상을 만드는 스튜디오형 자동차 광고에 참고하기 좋음.",
    tags: ["#AI이미지프롬프트", "#자동차", "#3D", "#쇼룸광고"],
    thumbnail: "https://lexica.art/prompt/65563c5a-4346-4da2-b18b-e5a1047c51d1/opengraph-image?d26e3adb96114073",
    prompt: "Futuristic car, luxury, dealership, cleanliness, high-tech design, shiny surfaces, cutting-edge technology, bright showroom, glass walls, spotless, modern architecture, sleek lines, polished floors, minimalistic, exclusive models, innovative, prestige, gleaming lights, advanced features, elegance",
    visual: { background: "#e9edf0", accent: "#3f8fc9", ink: "#17212a", radiusOne: "0", radiusTwo: "50%", rotate: "-4deg", label: "GLASS / POLISH / SHOWROOM" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 결과 이미지와 전체 프롬프트·Aperture v3·guidance 7·1152×768 설정이 함께 있어 유리와 광택 반사를 활용한 밝은 자동차 쇼룸 광고로 반복 생성할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["3D", "모노톤", "중앙집중", "글로시", "럭셔리"], "시각아티팩트_url": "https://lexica.art/prompt/65563c5a-4346-4da2-b18b-e5a1047c51d1/opengraph-image?d26e3adb96114073", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Futuristic car, luxury, dealership, cleanliness, high-tech design, shiny surfaces, cutting-edge technology, bright showroom, glass walls, spotless, modern architecture, sleek lines, polished floors, minimalistic, exclusive models, innovative, prestige, gleaming lights, advanced features, elegance", "tool_model": "Lexica Aperture v3", "params": "guidance scale 7·1152×768", "output_url": "https://lexica.art/prompt/65563c5a-4346-4da2-b18b-e5a1047c51d1/opengraph-image?d26e3adb96114073", "fragment_map": [{ "조각": "bright showroom, glass walls", "효과": "밝고 투명한 미래형 실내 공간" }, { "조각": "shiny surfaces, polished floors", "효과": "차체와 바닥에 정돈된 광택 반사" }, { "조각": "minimalistic, prestige, elegance", "효과": "요소를 줄인 프리미엄 광고 톤" }] } }, "출처": { "소스": "https://lexica.art/prompt/65563c5a-4346-4da2-b18b-e5a1047c51d1", "수집일": "2026-07-17", "수집사유": "공개 결과 이미지와 프롬프트·모델·guidance·크기 설정이 모두 확인된 미래형 자동차 쇼룸 표본" } }
  },
  {
    title: "Forest Cinematic Car — 자연광 로케이션 무드", category: "AI 이미지 프롬프트", date: "2026-07-17", url: "https://lexica.art/prompt/f56637fa-f7ea-4aa6-a450-4e990860320e",
    summary: "숲이라는 단일 환경과 시네마틱 톤을 결합해 자동차를 자연 속 캠페인 키비주얼로 만든 로케이션 이미지.",
    note: "스튜디오 조명과 반대로 숲의 깊이·자연광·차체 대비를 모델 해석에 맡기는 짧은 프롬프트라, 로케이션 방향을 빠르게 탐색하는 초기 광고 시안에 유용함.",
    tags: ["#AI이미지프롬프트", "#자동차", "#시네마틱", "#로케이션광고"],
    thumbnail: "https://lexica.art/prompt/f56637fa-f7ea-4aa6-a450-4e990860320e/opengraph-image?d26e3adb96114073",
    prompt: "Car in a forest, cinematic",
    visual: { background: "#1f2b25", accent: "#b8c86a", ink: "#f2eee4", radiusOne: "50%", radiusTwo: "0", rotate: "7deg", label: "FOREST / DEPTH / CINEMA" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 4, "신규성": 3, "근거성": 4, "가치축": 4 }, "total": 15, "verdict": "accept", "근거": "공개 결과와 Aperture v2·guidance 7·512×768·2048×3072 업스케일 설정이 있어 숲의 자연광과 깊이를 활용한 자동차 로케이션 무드를 반복 비교할 수 있다.", "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["어스톤", "중앙집중", "소프트확산광", "몽환"], "시각아티팩트_url": "https://lexica.art/prompt/f56637fa-f7ea-4aa6-a450-4e990860320e/opengraph-image?d26e3adb96114073", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Car in a forest, cinematic", "tool_model": "Lexica Aperture v2", "params": "guidance scale 7·512×768·upscaled 2048×3072", "output_url": "https://lexica.art/prompt/f56637fa-f7ea-4aa6-a450-4e990860320e/opengraph-image?d26e3adb96114073", "fragment_map": [{ "조각": "Car in a forest", "효과": "자동차와 숲의 자연적 스케일 대비" }, { "조각": "cinematic", "효과": "깊이감 있는 조명과 캠페인형 색보정" }] } }, "출처": { "소스": "https://lexica.art/prompt/f56637fa-f7ea-4aa6-a450-4e990860320e", "수집일": "2026-07-17", "수집사유": "결과 이미지·모델·guidance·원본 및 업스케일 크기가 확인된 시네마틱 자동차 로케이션 표본" } }
  },
  {
    title: "Automotive AI Lab — 컬러풀한 3D 디자인 프로세스 비주얼", category: "AI 이미지 프롬프트", date: "2026-07-17", url: "https://lexica.art/prompt/28d3f62d-8ec5-4bc4-8cbe-ac0250889d8b",
    summary: "자동차 디자인 랩과 AI 3D 모델링 과정을 컬러풀하고 미니멀한 초현실 기술 광고로 번역한 세로형 비주얼.",
    note: "완성차 영웅 숏이 아니라 설계 화면·랩 환경·데이터 이미지를 함께 보여 줘 모빌리티 기술이나 디자인 프로세스를 소개하는 B2B 광고에 전이하기 좋음.",
    tags: ["#AI이미지프롬프트", "#자동차", "#3D모델링", "#테크광고"],
    thumbnail: "https://lexica.art/prompt/28d3f62d-8ec5-4bc4-8cbe-ac0250889d8b/opengraph-image?d26e3adb96114073",
    prompt: "Car visualization, work of AI 3d modelling in computer, on a lab of automotive design. Data science in business, finance and innovation.. surrealistic landscape. colorful, minimal. hiper realistic fashion technology. 35mm. award winning photography.",
    visual: { background: "#d9d5f0", accent: "#f0643f", ink: "#21223b", radiusOne: "0 50% 50% 50%", radiusTwo: "50%", rotate: "-8deg", label: "LAB / DATA / 3D MODEL" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 4, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공개 결과와 전체 프롬프트·Aperture v3.5·832×1152 설정이 있어 자동차 3D 설계와 데이터 랩을 컬러풀한 기술 광고 장면으로 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "콘텐츠명료성"], "시각렌즈": ["3D", "하이채도", "비대칭", "글로시", "유희적"], "시각아티팩트_url": "https://lexica.art/prompt/28d3f62d-8ec5-4bc4-8cbe-ac0250889d8b/opengraph-image?d26e3adb96114073", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "Car visualization, work of AI 3d modelling in computer, on a lab of automotive design. Data science in business, finance and innovation.. surrealistic landscape. colorful, minimal. hiper realistic fashion technology. 35mm. award winning photography.", "tool_model": "Lexica Aperture v3.5", "params": "832×1152·guidance/seed 미공개", "output_url": "https://lexica.art/prompt/28d3f62d-8ec5-4bc4-8cbe-ac0250889d8b/opengraph-image?d26e3adb96114073", "fragment_map": [{ "조각": "AI 3d modelling in computer, on a lab of automotive design", "효과": "차량과 디지털 설계 환경을 한 장면에 결합" }, { "조각": "surrealistic landscape. colorful, minimal", "효과": "기술 이미지를 컬러풀한 추상 광고로 전환" }, { "조각": "hiper realistic fashion technology. 35mm", "효과": "패션 테크 캠페인처럼 정제된 카메라 질감" }] } }, "출처": { "소스": "https://lexica.art/prompt/28d3f62d-8ec5-4bc4-8cbe-ac0250889d8b", "수집일": "2026-07-17", "수집사유": "공개 결과·전체 프롬프트·Aperture v3.5·세로 크기가 확인된 자동차 디자인 랩 3D 광고 표본" } }
  },
  {
    title: "Turners Cars — 신뢰와 속도를 연결한 자동차 브랜드 시스템", category: "브랜드", date: "2026-07-16", url: "https://www.behance.net/gallery/249568333/Car-Branding-Automotive-Branding-Modern-Logo-Design",
    summary: "굵은 자동차 심벌과 명확한 타이포그래피를 차량·사인·패키지·소셜·디지털 화면에 확장한 자동차 판매 브랜드 아이덴티티.",
    note: "자동차 실루엣을 직접 묘사하는 데서 그치지 않고 신뢰와 주행 자신감이라는 메시지를 접점별 일관된 고대비 시스템으로 반복한 점이 실무적임.",
    tags: ["#브랜드", "#자동차", "#아이덴티티", "#접점확장"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/151f54249568333.6a0af3bc1a530.jpg",
    visual: { background: "#121417", accent: "#e44b35", ink: "#f3f1ea", radiusOne: "0", radiusTwo: "50%", rotate: "-5deg", label: "TRUST / DRIVE / SYSTEM" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 3, "근거성": 4, "가치축": 5 }, "total": 17, "verdict": "accept", "근거": "로고·가이드·차량·사인·패키지·소셜·UI의 공개 응용 이미지가 동일한 고대비 조형 언어로 연결돼 자동차 서비스 브랜드의 접점 확장 규칙으로 추출할 수 있다.", "metadata": { "정보렌즈": ["브랜드일관성", "타이포그래피"], "시각렌즈": ["미니멀", "하이채도", "그리드", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/151f54249568333.6a0af3bc1a530.jpg", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "굵은 자동차 심벌·고대비 팔레트·명확한 산세리프를 전 접점에 반복", "applications": "차량·사인·패키지·소셜 캠페인·디지털 UI" } }, "출처": { "소스": "https://www.behance.net/gallery/249568333/Car-Branding-Automotive-Branding-Modern-Logo-Design", "수집일": "2026-07-16", "수집사유": "2026-05-18 공개된 자동차 브랜드의 다중 접점 실제 응용 이미지와 시스템 규칙이 확인됨" } }
  },
  {
    title: "Car Check — 차량 이력을 한 흐름으로 묶은 모바일 앱", category: "웹·앱 UI", date: "2026-07-16", url: "https://www.behance.net/gallery/248044553/Mobile-App-Design-Car-Check",
    summary: "차량 이력·MOT·주행거리·세금·소유 정보를 조회와 관리 흐름으로 통합한 자동차 정보 앱 UI.",
    note: "구매 전 확인해야 할 분산 정보를 상태별 카드와 명확한 우선순위로 묶어, 복잡한 차량 데이터의 모바일 정보 구조와 신뢰 설계를 참고하기 좋음.",
    tags: ["#웹앱UI", "#자동차", "#차량이력", "#모바일앱"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/cd1104248044553.69eb35f17e020.png",
    visual: { background: "#161a22", accent: "#6bd46b", ink: "#f5f6f2", radiusOne: "50%", radiusTwo: "0", rotate: "6deg", label: "HISTORY / STATUS / OWNERSHIP" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "차량 이력·검사·주행거리·세금·소유 도구의 실제 모바일 화면이 공개돼 복합 차량 정보를 조회·판단·관리하는 카드형 제품 구조로 전이할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "콘텐츠명료성", "접근성"], "시각렌즈": ["미니멀", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/cd1104248044553.69eb35f17e020.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "차량 검색→이력·MOT·주행거리·세금 확인→소유 차량 관리", "screens": "차량 요약·상태 카드·상세 기록·소유 도구·앱스토어 프리뷰" } }, "출처": { "소스": "https://www.behance.net/gallery/248044553/Mobile-App-Design-Car-Check", "수집일": "2026-07-16", "수집사유": "2026-04-24 공개된 차량 정보 앱의 실제 화면과 주요 조회·관리 흐름이 확인됨" } }
  },
  {
    title: "Automotive Visual Direction — 광고 수준의 자동차 CGI 조명 실험", category: "비주얼 그래픽", date: "2026-07-16", url: "https://www.behance.net/gallery/247937759/Automotive-Visual-Direction-CGI",
    summary: "차량 콘셉트를 제품 중심 숏·라이프스타일 장면·캠페인 구도로 변주한 고완성도 3D 자동차 광고 비주얼 시리즈.",
    note: "차체 도장과 유리·금속 반사, 배경 대비, 카메라 높이, 키라이트 방향을 장면별로 비교할 수 있어 고급 3D 제품 이미지의 아트 디렉션 표본으로 유용함.",
    tags: ["#비주얼그래픽", "#자동차", "#3D", "#CGI광고"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ec2a96247937759.69e66df8823b0.jpg",
    visual: { background: "#242427", accent: "#dc402d", ink: "#f1eee8", radiusOne: "50%", radiusTwo: "0", rotate: "8deg", label: "CGI / LIGHT / MATERIAL" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "제품 숏·라이프스타일·캠페인 구도의 공개 CGI 결과에서 차체 재질·조명·카메라·배경 변수를 비교할 수 있어 자동차 광고용 3D 아트 디렉션 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["브랜드일관성"], "시각렌즈": ["3D", "중앙집중", "하드라이트", "글로시", "럭셔리"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ec2a96247937759.69e66df8823b0.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "자동차 차체·금속·유리·도장·스튜디오 및 로케이션 배경", "reusable_rule": "차량 형태를 고정하고 키라이트·반사 환경·카메라 높이·배경 대비를 장면별로 변주" } }, "출처": { "소스": "https://www.behance.net/gallery/247937759/Automotive-Visual-Direction-CGI", "수집일": "2026-07-16", "수집사유": "2026-04-20 공개된 자동차 CGI 시리즈에서 광고형 실제 결과와 3D·후반 제작 워크플로가 확인됨" } }
  },
  {
    title: "Red Scarf Dog — GPT Image Subject Edit", category: "AI 이미지 프롬프트", date: "2026-07-16", url: "https://helpx.adobe.com/firefly/web/work-with-images/generate-images/generate-images-using-gpt-image.html",
    summary: "반려견 원본을 Subject로 고정하고 짧은 텍스트 지시로 빨간 스카프를 추가한 GPT Image 편집 예시.",
    note: "피사체 정체성과 구도를 입력 이미지에 맡기고 추가할 요소만 간결하게 지시해, 제품·인물 에셋의 국소 변형 프롬프트를 설계할 때 참고하기 좋음.",
    tags: ["#AI이미지프롬프트", "#GPTImage", "#피사체참조", "#이미지편집"],
    thumbnail: "https://helpx-prod.scene7.com/is/image/HelpxProd/generate-images-from-text-14?$pjpeg$&jpegSize=200&wid=1200",
    prompt: "A dog wearing a red scarf.",
    visual: { background: "#e7e2d8", accent: "#c9342f", ink: "#201d1a", radiusOne: "50%", radiusTwo: "50%", rotate: "-5deg", label: "SUBJECT / ADD / PRESERVE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 4, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 17, "verdict": "accept", "근거": "공식 문서가 반려견 Subject 입력·GPT Image 모델·프롬프트·생성 결과를 함께 공개해 피사체를 유지한 단일 요소 추가 편집으로 반복 검증할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["미니멀", "중앙집중", "따뜻"], "시각아티팩트_url": "https://helpx-prod.scene7.com/is/image/HelpxProd/generate-images-from-text-14?$pjpeg$&jpegSize=200&wid=1200", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A dog wearing a red scarf.", "tool_model": "GPT Image in Adobe Firefly", "params": "Subject 이미지 1장·Wide 4:3/Square 1:1/Tall 2:3 중 선택·공식 예시는 비율 미공개", "output_url": "https://helpx-prod.scene7.com/is/image/HelpxProd/generate-images-from-text-14?$pjpeg$&jpegSize=200&wid=1200", "fragment_map": [{ "조각": "A dog", "효과": "Subject 이미지의 반려견을 편집 대상으로 고정" }, { "조각": "wearing a red scarf", "효과": "목 주변에 빨간색 착용 요소 추가" }] } }, "출처": { "소스": "https://helpx.adobe.com/firefly/web/work-with-images/generate-images/generate-images-using-gpt-image.html", "수집일": "2026-07-16", "수집사유": "2026-06-16 갱신된 공식 가이드에서 모델·Subject 입력·프롬프트·생성 결과가 함께 확인됨" } }
  },
  {
    title: "Valley Tulip Vase — GPT Image 1.5 Multi-reference", category: "AI 이미지 프롬프트", date: "2026-07-16", url: "https://helpx.adobe.com/firefly/web/work-with-images/edit-images/edit-an-image-using-text.html",
    summary: "두 장의 참조 이미지를 결합해 계곡 배경의 테이블 위 노란 꽃병과 튤립 장면을 만든 GPT Image 1.5 예시.",
    note: "오브젝트·식물·배경 관계를 한 문장으로 고정하고 복수 참조를 더해, 캠페인 합성 시 장면 구조와 소재 일관성을 분리 제어하는 방식이 실무적임.",
    tags: ["#AI이미지프롬프트", "#GPTImage15", "#멀티레퍼런스", "#장면합성"],
    thumbnail: "https://helpx-prod.scene7.com/is/image/HelpxProd/edit-an-image-using-text-53-firefly?$pjpeg$&jpegSize=200&wid=1300",
    prompt: "A yellow vase with a tulip on a table, set against a valley backdrop.",
    visual: { background: "#ddd6bd", accent: "#d9a928", ink: "#25352b", radiusOne: "0 50% 50% 50%", radiusTwo: "50%", rotate: "4deg", label: "2 REFS / OBJECT / SCENE" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공식 문서가 GPT Image 1.5·참조 이미지 2장·전체 프롬프트·생성 결과를 함께 공개해 오브젝트와 배경을 결합하는 멀티레퍼런스 합성을 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "브랜드일관성"], "시각렌즈": ["미니멀", "어스톤", "중앙집중", "소프트확산광", "따뜻"], "시각아티팩트_url": "https://helpx-prod.scene7.com/is/image/HelpxProd/edit-an-image-using-text-53-firefly?$pjpeg$&jpegSize=200&wid=1300", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A yellow vase with a tulip on a table, set against a valley backdrop.", "tool_model": "GPT Image 1.5 in Adobe Firefly", "params": "Reference/Subject 이미지 2장·1K/2K/4K 지원·공식 예시 비율과 해상도 미공개", "output_url": "https://helpx-prod.scene7.com/is/image/HelpxProd/edit-an-image-using-text-53-firefly?$pjpeg$&jpegSize=200&wid=1300", "fragment_map": [{ "조각": "A yellow vase with a tulip", "효과": "노란 꽃병과 단일 튤립을 핵심 피사체로 설정" }, { "조각": "on a table", "효과": "정물의 접지면과 스케일 고정" }, { "조각": "set against a valley backdrop", "효과": "실내 오브젝트와 원경 자연 배경의 레이어 결합" }] } }, "출처": { "소스": "https://helpx.adobe.com/firefly/web/work-with-images/edit-images/edit-an-image-using-text.html", "수집일": "2026-07-16", "수집사유": "2026-06-16 갱신된 공식 가이드에서 GPT Image 1.5 멀티레퍼런스 입력과 생성 결과가 확인됨" } }
  },
  {
    title: "Iridescent Butterfly Macro — Gen-4.5 Camera Term", category: "AI 영상 프롬프트", date: "2026-07-16", url: "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples",
    summary: "검은 나비 날개의 무지갯빛 표면을 매크로로 탐색하면서 날개에는 미세한 움직임만 부여한 Gen-4.5 영상 예시.",
    note: "샷 크기·재질·움직임을 각각 한 조각으로 분리해 제품 소재나 미세 표면을 보여 주는 짧은 매크로 영상의 통제 어휘로 쓰기 좋음.",
    tags: ["#AI영상프롬프트", "#Gen45", "#매크로", "#재질모션"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/46972936444819",
    prompt: "A macro close-up explores the iridescent facets of a black butterfly wing. Wings gently move.",
    visual: { background: "#171821", accent: "#6bd8d2", ink: "#f4a6d7", radiusOne: "50%", radiusTwo: "50%", rotate: "10deg", label: "MACRO / IRIDESCENCE / MICRO MOTION" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "Runway 공식 카메라 용어 라이브러리가 전체 프롬프트·Gen-4.5 모델·매크로 결과 GIF를 함께 제공해 재질 탐색과 미세 동작을 분리해 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["중앙집중", "하이채도", "글로시", "몽환", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46972936444819", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A macro close-up explores the iridescent facets of a black butterfly wing. Wings gently move.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "공식 camera-term 예시·aspect ratio/duration/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46972936444819", "fragment_map": [{ "조각": "A macro close-up explores", "효과": "표면 세부가 화면을 채우는 매크로 탐색" }, { "조각": "iridescent facets of a black butterfly wing", "효과": "검은 바탕 위 무지갯빛 반사 재질" }, { "조각": "Wings gently move", "효과": "구도를 해치지 않는 미세한 날개 동작" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/46749315925395-Camera-Terms-Prompts-Examples", "수집일": "2026-07-16", "수집사유": "최근 갱신된 공식 Gen-4.5 카메라 예시에서 프롬프트와 결과 GIF가 함께 확인됨" } }
  },
  {
    title: "Moon Skateboard Tracking — Gen-4.5 Motion Stack", category: "AI 영상 프롬프트", date: "2026-07-16", url: "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide",
    summary: "달 표면의 우주비행사 스케이트보더를 로우 앵글 핸드헬드로 추적하고 흑백 필름 질감과 빠른 모션 블러를 결합한 예시.",
    note: "주체·카메라 높이·추적 방식·속도·필름 질감을 독립 조각으로 분해할 수 있어 스포츠·패션 무빙 이미지의 운동감 설계에 전이하기 좋음.",
    tags: ["#AI영상프롬프트", "#Gen45", "#트래킹숏", "#필름그레인"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/46974514791443",
    prompt: "A handheld low angle tracking shot, with low contrast and fast-paced motion, follows a skilled astronaut skateboarder on a moon landscape. Their movements blur against the soft glow of the dark lunar environment. Film grain, low contrast, black and white.",
    visual: { background: "#202126", accent: "#d7d5cc", ink: "#f6f5f1", radiusOne: "50%", radiusTwo: "0", rotate: "-9deg", label: "LOW ANGLE / TRACK / GRAIN" },
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "공식 Gen-4.5 가이드가 로우 앵글·핸드헬드 추적·빠른 동작·흑백 필름 질감을 포함한 전체 프롬프트와 결과 GIF를 제공해 운동감 있는 단일 숏으로 재현할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "인터랙션"], "시각렌즈": ["모노톤", "비대칭", "필름그레인", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/46974514791443", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A handheld low angle tracking shot, with low contrast and fast-paced motion, follows a skilled astronaut skateboarder on a moon landscape. Their movements blur against the soft glow of the dark lunar environment. Film grain, low contrast, black and white.", "tool_model": "Runway Gen-4.5 Text to Video", "params": "Text to Video·공식 예시·aspect ratio/duration/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/46974514791443", "fragment_map": [{ "조각": "handheld low angle tracking shot", "효과": "낮은 시점의 흔들리는 추적 카메라" }, { "조각": "fast-paced motion", "효과": "스케이트 동작의 빠른 속도감" }, { "조각": "movements blur against the soft glow", "효과": "어두운 배경과 피사체 모션 블러의 대비" }, { "조각": "Film grain, low contrast, black and white", "효과": "거친 흑백 다큐멘터리 필름 톤" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313737321107-Text-to-Video-Prompting-Guide", "수집일": "2026-07-16", "수집사유": "최근 갱신된 공식 Text to Video 가이드에서 Gen-4.5 프롬프트와 결과 GIF가 함께 확인됨" } }
  },
  {
    title: "Deliver good DfE services — 16개 매뉴얼을 하나의 콘텐츠 모델로 통합",
    category: "콘텐츠 디자인 가이드", date: "2026-07-16", url: "https://design-histories.education.gov.uk/deliver-good-dfe-services/publishing-the-first-release-of-deliver-good-dfe-services",
    summary: "분산된 16개 매뉴얼과 500여 페이지를 표준·컬렉션·상세 가이드·단계형 안내 같은 콘텐츠 유형으로 재구성한 DfE 서비스 가이드 첫 릴리스.",
    note: "홈·컬렉션·상세 가이드·입문 단계·다운로드 패턴의 실제 화면이 함께 공개돼 대규모 지침을 한 제품으로 통합할 때 콘텐츠 모델과 탐색 구조를 참고하기 좋음.",
    tags: ["#콘텐츠디자인", "#정보구조", "#콘텐츠모델", "#가이드통합"],
    thumbnail: "https://cloud-cube-eu2.s3.amazonaws.com/pkwmignaq6f6/public/Homepage_0f3b485905.png",
    visual: { background: "#f3f2f1", accent: "#1d70b8", ink: "#0b0c0c", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "16 SOURCES / 500+ PAGES" },
    review: {
      "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "홈·컬렉션·상세 가이드·단계형 입문·다운로드 패턴의 실제 화면과 16개 출처 통합 절차가 공개돼 대규모 운영 가이드의 콘텐츠 모델 설계에 바로 전이할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "콘텐츠명료성", "접근성"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://cloud-cube-eu2.s3.amazonaws.com/pkwmignaq6f6/public/Homepage_0f3b485905.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "16개 매뉴얼 감사→공통 콘텐츠 유형 정의→표준·가이드 우선 이관→소유자·검토일·다운로드 패턴 적용", "evidence": "500여 페이지 중 1차 범위의 홈·컬렉션·상세 가이드·입문·다운로드 화면 공개" } },
      "출처": { "소스": "https://design-histories.education.gov.uk/deliver-good-dfe-services/publishing-the-first-release-of-deliver-good-dfe-services", "수집일": "2026-07-16", "수집사유": "2026-06-29 갱신된 공식 디자인 히스토리에서 콘텐츠 유형별 실제 화면 5개와 통합 절차가 확인됨" }
    }
  },
  {
    title: "TechNews Ecosystem — 고밀도 뉴스와 개인화 흐름을 잇는 퍼블리싱 UI",
    category: "웹·앱 UI", date: "2026-07-16", url: "https://www.behance.net/gallery/252744033/Building-a-news-ecosystemfor-the-tech-industry",
    summary: "무료 뉴스 집계·유료 전문 콘텐츠·세분 검색·개인화 피드를 공통 그리드와 채널별 성격으로 묶은 기술 뉴스 플랫폼 UI.",
    note: "많은 기사와 검색 조건을 읽기 쉬운 그리드로 정리하면서 무료 탐색에서 구독 콘텐츠로 이어지는 정보 밀도와 전환 경로를 함께 설계한 점이 실무적임.",
    tags: ["#웹앱UI", "#뉴스플랫폼", "#개인화피드", "#에디토리얼그리드"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/322dd3252744033.6a572510157ee.png",
    visual: { background: "#f1efe9", accent: "#ef4d32", ink: "#171717", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "NEWS / FILTER / FLOW" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "무료 집계·유료 채널·다중 검색·개인화 피드의 실제 데스크톱 화면이 공통 그리드로 연결돼 고밀도 퍼블리싱 제품의 탐색과 구독 전환 구조로 전이할 수 있다.",
      "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "타이포그래피", "접근성", "콘텐츠명료성"], "시각렌즈": ["에디토리얼", "그리드", "고밀도", "모노톤", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/322dd3252744033.6a572510157ee.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "주제 검색·필터→개인화 뉴스 피드→전문 콘텐츠 티저→구독 채널", "screens": "뉴스 블로그·유료 매거진·집계 검색·개인화 결과·디자인 시스템 적용" } },
      "출처": { "소스": "https://www.behance.net/gallery/252744033/Building-a-news-ecosystemfor-the-tech-industry", "수집일": "2026-07-16", "수집사유": "2026-07-15 공개된 다채널 뉴스 플랫폼의 실제 UI와 공통 그리드 시스템이 확인됨" }
    }
  },
  {
    title: "Same Logo, Different Perception — 표면과 공정으로 달라지는 물성 실험",
    category: "비주얼 그래픽", date: "2026-07-16", url: "https://www.behance.net/gallery/252739669/Same-Logo-Different-Perception",
    summary: "동일한 로고를 크롬 도금·샌드블라스트 알루미늄·무광 도장과 인쇄·레이저·각인·잉크·연마 공정에 적용해 대비와 깊이를 비교한 CMF 표본.",
    note: "그래픽 자체를 바꾸지 않고 표면 반사·거칠기·깊이·조명 각도를 통제 변수로 만들어 프로토타입 전에 가독성과 제조 효과를 비교할 수 있음.",
    tags: ["#비주얼그래픽", "#CMF", "#표면처리", "#로고응용"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/012417252739669.6a5706660e3ef.png",
    visual: { background: "#d9dad7", accent: "#8b8e8a", ink: "#171717", radiusOne: "50%", radiusTwo: "0", rotate: "8deg", label: "SURFACE / LIGHT / DEPTH" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "동일 로고를 세 가지 표면과 여러 제조 공정에 나란히 적용한 실물 결과가 공개돼 반사·대비·깊이·가독성을 조절하는 CMF 그래픽 문법으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["브랜드일관성", "접근성"], "시각렌즈": ["미니멀", "모노톤", "중앙집중", "하드라이트", "글로시", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/012417252739669.6a5706660e3ef.png", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "동일 로고·크롬·샌드블라스트 알루미늄·무광 도장·인쇄·레이저·각인·잉크·연마", "reusable_rule": "아트워크를 고정하고 표면·공정·광원 각도만 바꿔 대비·깊이·가독성을 비교" } },
      "출처": { "소스": "https://www.behance.net/gallery/252739669/Same-Logo-Different-Perception", "수집일": "2026-07-16", "수집사유": "2026-07-15 공개된 표면·공정별 실물 비교 이미지와 제작 변수가 확인됨" }
    }
  },
  {
    title: "CASA 13 — 정사각 모듈과 ASCII 도구로 확장하는 스튜디오 아이덴티티",
    category: "브랜드", date: "2026-07-16", url: "https://www.behance.net/gallery/252410471/CASA-13-Branding-and-Visual-Identity",
    summary: "정사각형을 타이포·패턴·레이아웃의 기본 단위로 두고 SVG 그리드 생성기와 ASCII 변환 도구로 응용을 확장한 디자인 스튜디오 브랜드.",
    note: "개별 결과물을 반복 제작하는 대신 편집 가능한 SVG 도구를 브랜드 시스템 일부로 만들어 제작 속도와 일관성을 동시에 확보한 방식이 좋음.",
    tags: ["#브랜드", "#모듈시스템", "#ASCII", "#생성도구"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/674f66252410471.6a4eab3538aad.png",
    visual: { background: "#ecebe6", accent: "#e54835", ink: "#171717", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "GRID / ASCII / SVG" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "정사각 모듈·ASCII 그래픽·편집 가능한 SVG 생성 도구가 타이포와 패턴, 디지털 응용에 반복돼 확장 가능한 브랜드 제작 문법으로 추출할 수 있다.",
      "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성", "AI활용"], "시각렌즈": ["뉴트로", "모노톤", "그리드", "고밀도", "절제"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/674f66252410471.6a4eab3538aad.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "정사각형을 타이포·그래픽·레이아웃의 공통 구축 단위로 사용하는 모듈 아이덴티티", "elements": "C13 Grid Builder·ASCII to SVG·픽셀 패턴·터미널 언어·편집 가능한 SVG" } },
      "출처": { "소스": "https://www.behance.net/gallery/252410471/CASA-13-Branding-and-Visual-Identity", "수집일": "2026-07-16", "수집사유": "2026-07-14 공개된 브랜드 응용 이미지와 두 가지 SVG 생성 도구의 규칙이 확인됨" }
    }
  },
  {
    title: "JMPY.me — 브랜드 링크와 동적 QR을 캔버스에서 관리",
    category: "Figma 플러그인", date: "2026-07-15", url: "https://www.figma.com/community/plugin/1652124319511508893",
    summary: "선택한 프레임·슬라이드·노드에서 브랜드 단축 링크와 동적 QR을 만들고 UTM·로고·색상·분석 설정까지 한 흐름에서 처리하는 Figma 플러그인.",
    note: "캠페인 링크 생성·QR 스타일링·캔버스 삽입·성과 추적을 연결해 반복적인 마케팅 에셋 제작과 수정 부담을 줄이는 흐름이 실무적임.",
    tags: ["#Figma플러그인", "#QR코드", "#브랜드링크", "#캠페인운영"],
    thumbnail: "https://uploads-us-west-2.insided.com/figma-en/attachment/327684ef-e646-43b0-9a01-4dcca3d40a6d.png",
    visual: { background: "#f1f4ff", accent: "#5a49e8", ink: "#171717", radiusOne: "50%", radiusTwo: "0 50% 50% 50%", rotate: "6deg", label: "LINK / QR / TRACK" },
    review: {
      "유형": "Figma 플러그인", "가치축_이름": "유용성",
      "scores": { "완성도": 4, "신규성": 3, "근거성": 4, "가치축": 5 }, "total": 16, "verdict": "accept",
      "근거": "공개 실행 화면에서 링크 단축·UTM·브랜드 QR·캔버스 삽입·분석 흐름이 확인돼 캠페인 링크와 QR 에셋의 반복 제작 시간을 줄일 수 있다.",
      "metadata": { "정보렌즈": ["사용자흐름", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://uploads-us-west-2.insided.com/figma-en/attachment/327684ef-e646-43b0-9a01-4dcca3d40a6d.png", "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "workflow": "노드 선택→브랜드 링크·UTM 또는 QR 설정→캔버스 삽입→동적 목적지·성과 확인", "repeated_task": "캠페인 단축 링크와 브랜드 QR 제작·수정" } },
      "출처": { "소스": "https://www.figma.com/community/plugin/1652124319511508893", "수집일": "2026-07-15", "수집사유": "2026-07-13 공개된 Figma Community 플러그인과 공식 Figma 포럼의 실제 실행 화면 5개가 확인됨" }
    }
  },
  {
    title: "Figma Agent Skills — 팀의 판단 기준을 재사용하는 AI 워크플로", category: "AI 디자인", date: "2026-07-15", url: "https://www.figma.com/blog/got-skills-make-the-figma-agent-a-better-collaborator/",
    summary: "디자인 비평·UX 라이팅·접근성 검사·리뷰 회고처럼 반복되는 팀 판단을 슬래시 명령형 스킬로 저장하고 캔버스 안에서 다시 실행하는 AI 협업 흐름.", note: "팀이 합의한 검토 기준과 맥락을 에이전트에 연결해 결과의 일관성과 설명 가능성을 높이는 운영 방식이 실무적임.",
    tags: ["#AI디자인", "#FigmaAgent", "#디자인비평", "#팀워크플로"], thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/2dcb38fa0a3fd5b22b72b531ebe5de2b109614fd-3264x1836.png?q=75&fit=crop&crop=focalpoint&auto=format", visual: { background: "#191919", accent: "#5ee17a", ink: "#f6f5f1", radiusOne: "0", radiusTwo: "50%", rotate: "-7deg", label: "SKILL / CRITIQUE / REUSE" },
    review: { "유형": "AI 디자인", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "실제 Figma 캔버스와 에이전트 작업 화면에서 비평·UX 라이팅·리뷰 회고를 스킬로 저장하고 재호출하는 절차가 공개돼 팀별 AI 디자인 검수 흐름으로 반복 적용할 수 있다.", "metadata": { "정보렌즈": ["AI활용", "사용자흐름", "브랜드일관성", "콘텐츠명료성"], "시각렌즈": ["미니멀", "그리드", "하이채도", "절제"], "시각아티팩트_url": "https://cdn.sanity.io/images/599r6htc/regionalized/2dcb38fa0a3fd5b22b72b531ebe5de2b109614fd-3264x1836.png?q=75&fit=crop&crop=focalpoint&auto=format", "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "workflow": "팀 기준·예시 작성→슬래시 명령 호출→캔버스 검토→공유 채팅 재사용", "controls": "스킬 범위·첨부 맥락·공개/비공개 채팅·디자인 시스템 연결" } }, "출처": { "소스": "https://www.figma.com/blog/got-skills-make-the-figma-agent-a-better-collaborator/", "수집일": "2026-07-15", "수집사유": "2026-07-01 공개된 공식 글에서 실제 에이전트 작업 화면과 반복 가능한 팀 스킬 사례가 확인됨" } }
  },
  {
    title: "Bodylura — 운동과 식단을 한 흐름으로 묶은 피트니스 앱", category: "웹·앱 UI", date: "2026-07-15", url: "https://www.behance.net/gallery/252449193/Bodylura-All-in-One-Fitness-App",
    summary: "사용자 수준과 목표에 맞춘 운동 프로그램 선택부터 식단 구성·음식 기록까지 하나의 모바일 여정으로 연결한 피트니스 제품 UI.", note: "목표 설정·계획·실행·기록의 반복 루프로 구조화한 정보 우선순위를 참고하기 좋음.", tags: ["#웹앱UI", "#피트니스앱", "#목표설정", "#진행기록"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/229cbb252449193.6a4fa40d3439d.png", visual: { background: "#f4efe9", accent: "#e96d5a", ink: "#171717", radiusOne: "50% 0 50% 50%", radiusTwo: "50%", rotate: "-5deg", label: "GOAL / PLAN / TRACK" },
    review: { "유형": "웹·앱 UI", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 3, "근거성": 4, "가치축": 4 }, "total": 16, "verdict": "accept", "근거": "운동 수준·목표 선택, 프로그램 구성, 식단 계획과 음식 기록의 실제 모바일 화면이 공개돼 웰니스 앱의 목표-계획-기록 순환 구조로 전이할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "콘텐츠명료성"], "시각렌즈": ["미니멀", "여백중심", "파스텔", "따뜻"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/229cbb252449193.6a4fa40d3439d.png", "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "flow": "수준·목표 선택→운동 프로그램→식단 계획→음식·진행 기록", "screens": "온보딩·프로그램·운동 상세·식단·트래킹" } }, "출처": { "소스": "https://www.behance.net/gallery/252449193/Bodylura-All-in-One-Fitness-App", "수집일": "2026-07-15", "수집사유": "2026-07-09 공개된 실제 모바일 화면이 확인됨" } }
  },
  {
    title: "Compilation 35 — 기하 형태와 사이키델릭 컬러의 모듈 조합", category: "비주얼 그래픽", date: "2026-07-15", url: "https://www.behance.net/gallery/247515423/Compilation-35",
    summary: "굵고 깨끗한 선, 반복되는 기하 모듈, 고채도 대비를 조합해 포스터·패턴·패키지로 확장한 일러스트레이션 시리즈.", note: "단순한 요소를 색 대비와 밀도 변화로 여러 매체에 확장해 캠페인 그래픽 모듈을 설계할 때 참고하기 좋음.", tags: ["#비주얼그래픽", "#사이키델릭", "#기하일러스트", "#고채도"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf4845247515423.6a213bce990fc.jpg", visual: { background: "#ffea35", accent: "#f0366b", ink: "#122b7a", radiusOne: "50%", radiusTwo: "0 100% 0 100%", rotate: "12deg", label: "SHAPE / COLOR / REPEAT" },
    review: { "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 4, "가치축": 5 }, "total": 18, "verdict": "accept", "근거": "기하 모듈·굵은 선·고채도 대비·반복 패턴이 여러 포스터와 패키지 결과물에 일관되게 적용돼 캠페인용 그래픽 문법으로 재조합할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성"], "시각렌즈": ["일러스트", "하이채도", "중앙집중", "글로시", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf4845247515423.6a213bce990fc.jpg", "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "elements": "원·곡선 띠·방사형 선·굵은 외곽선", "reusable_rule": "모듈 크기·반복 밀도·색 조합을 바꿔 매체 확장" } }, "출처": { "소스": "https://www.behance.net/gallery/247515423/Compilation-35", "수집일": "2026-07-15", "수집사유": "2026-07-02 공개된 다수의 완성 결과물이 확인됨" } }
  },
  {
    title: "YES PLEASE MORE — 통제된 혼돈의 에디토리얼 브랜드", category: "브랜드", date: "2026-07-15", url: "https://www.behance.net/gallery/243126691/YES-PLEASE-MORE-BRANDING-PROJECT",
    summary: "에디토리얼 그리드, 실험 타이포, 콜라주와 하프톤을 웹·소셜·사진·인쇄 전반에 확장한 감각 중심 브랜드 시스템.", note: "정돈된 그리드와 불완전한 개입의 규칙을 함께 두어 여러 제작자가 참여해도 통제된 혼돈의 톤을 유지함.", tags: ["#브랜드", "#에디토리얼", "#콜라주", "#실험타이포"], thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0ad2c9243126691.697b13d8ec6b5.png", visual: { background: "#ece8dd", accent: "#e84a34", ink: "#171717", radiusOne: "0", radiusTwo: "50%", rotate: "-6deg", label: "GRID / COLLAGE / SENSE" },
    review: { "유형": "브랜드", "가치축_이름": "스타일추출성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "에디토리얼 그리드·실험 타이포·콜라주·하프톤과 감각 기관 모티프가 웹·소셜·사진·인쇄 매체에 반복돼 브랜드 문법으로 추출할 수 있다.", "metadata": { "정보렌즈": ["타이포그래피", "브랜드일관성"], "시각렌즈": ["에디토리얼", "비대칭", "고밀도", "필름그레인", "유희적"], "시각아티팩트_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0ad2c9243126691.697b13d8ec6b5.png", "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "system": "편집 그리드 위에 불완전한 콜라주 개입을 허용하는 가변 아이덴티티", "elements": "실험 타이포·하프톤·그레인·감각 기관 모티프" } }, "출처": { "소스": "https://www.behance.net/gallery/243126691/YES-PLEASE-MORE-BRANDING-PROJECT", "수집일": "2026-07-15", "수집사유": "2026-07-07 공개된 웹·소셜·인쇄 적용 이미지가 확인됨" } }
  },
  {
    title: "Koi Breach — High-angle Gen-4.5 Motion Prompt", category: "AI 영상 프롬프트", date: "2026-07-15", url: "https://help.runwayml.com/hc/en-us/articles/47313698911891-Introduction-to-Prompting",
    summary: "고각 구도에서 잉어가 수면을 뚫고 올라오며 연잎 사이로 잔잔한 파문을 만드는 공식 영상 프롬프트 예시.", note: "카메라 각도·주체 행동·환경 반응을 분리해 영상 움직임의 인과를 명료하게 제어하는 표본으로 유용함.", prompt: "High angle looking down at a serene pond. A koi fish emerges and breaches the surface, sending gentle ripples through the surrounding lily pads.", tags: ["#AI영상프롬프트", "#Runway", "#고각", "#수면모션"], thumbnail: "https://help.runwayml.com/hc/article_attachments/47313698901139",
    review: { "유형": "AI 영상 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "공식 가이드가 전체 프롬프트·Gen-4.5 모델·생성 결과 GIF를 함께 제공해 구도와 행동, 환경 반응의 연결을 재현하며 비교할 수 있다.", "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["중앙집중", "소프트확산광", "차가움", "모션필"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/47313698901139", "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "High angle looking down at a serene pond. A koi fish emerges and breaches the surface, sending gentle ripples through the surrounding lily pads.", "tool_model": "Runway Gen-4.5", "params": "Text to Video·공식 예시·duration/aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/47313698901139", "fragment_map": [{ "조각": "High angle looking down", "효과": "연못과 연잎 관계를 읽는 고각 구도" }, { "조각": "emerges and breaches the surface", "효과": "잉어의 상승과 수면 돌파 동작" }, { "조각": "sending gentle ripples", "효과": "주체 행동에 반응하는 잔잔한 파문" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/47313698911891-Introduction-to-Prompting", "수집일": "2026-07-15", "수집사유": "공식 가이드에서 프롬프트·모델·결과 영상이 함께 확인됨" } }
  },
  {
    title: "Nord 5 — 18 New Components and a Redesigned Docs Workspace", category: "웹 스타일가이드", date: "2026-07-15", url: "https://nordhealth.design/updates/july-2026-component-updates",
    summary: "검색·명암 모드·실시간 예제·접근성·API 문서를 한 셸에 묶고 18개 컴포넌트와 56개 파트를 목적별로 재구성한 릴리스.", note: "블록과 전체 페이지 템플릿까지 연결해 탐색→미리보기→복사→구현의 간격을 줄인 운영형 디자인 시스템 사례임.",
    tags: ["#웹스타일가이드", "#Nord", "#컴포넌트", "#문서시스템"], thumbnail: "https://nordhealth.design/_og/s/o_9yjk0w.png", visual: { background: "#eef6f3", accent: "#0b7356", ink: "#16332b", radiusOne: "0", radiusTwo: "8%", rotate: "0deg", label: "18 COMPONENTS / 56 PARTS" },
    review: { "유형": "웹 스타일가이드", "가치축_이름": "시스템화", "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept", "근거": "목적별 컴포넌트 분류와 Storybook 예제·접근성·API·블록·템플릿이 동일 문서 셸에서 실제 화면으로 연결돼 디자인 시스템 탐색과 구현 구조로 바로 흡수할 수 있다.", "metadata": { "정보렌즈": ["정보구조", "사용자흐름", "접근성", "브랜드일관성"], "시각렌즈": ["미니멀", "그리드", "여백중심", "절제"], "시각아티팩트_url": "https://nordhealth.design/_og/s/o_9yjk0w.png", "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "전역 light·dark mode와 공통 상태", "components": "18개 신규 컴포넌트·56개 파트·Blocks·Templates" } }, "출처": { "소스": "https://nordhealth.design/updates/july-2026-component-updates", "수집일": "2026-07-15", "수집사유": "2026년 7월 공식 릴리스의 새 문서 셸과 컴포넌트·블록 실제 미리보기가 확인됨" } }
  },
  {
    title: "Find User Insights — Less Content, More Confidence", category: "콘텐츠 디자인 가이드", date: "2026-07-15", url: "https://design-histories.education.gov.uk/find-user-insights/redesigning-the-homepage-less-content-more-confidence",
    summary: "AI 리서치 서비스 홈의 비필수 설명을 옮기고 즉시 시작 CTA·사용 예·AI 투명성 정보를 재배치해 진입률을 55%에서 70%로 높인 개편.", note: "신경다양성 사용자 피드백, 전후 화면, 문구 변경, 전환 지표가 함께 있어 설명량과 신뢰 정보를 조절하는 근거로 쓰기 좋음.",
    tags: ["#콘텐츠디자인", "#AI서비스", "#인지부하", "#전환율"], thumbnail: "https://cloud-cube-eu2.s3.amazonaws.com/pkwmignaq6f6/public/Find_user_insights_revised_homepage_4aecc5dfa4.png", visual: { background: "#e8f1f8", accent: "#1d70b8", ink: "#0b0c0c", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "55% → 70%" },
    review: { "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept", "근거": "사용자 발화·개편 전후 화면·CTA 문구·정보 이동·15%p 전환 상승이 연결돼 AI 서비스 홈의 인지 부하와 신뢰 콘텐츠를 조정하는 절차로 즉시 적용할 수 있다.", "metadata": { "정보렌즈": ["콘텐츠명료성", "사용자흐름", "정보구조", "접근성", "AI활용"], "시각렌즈": [], "시각아티팩트_url": "https://cloud-cube-eu2.s3.amazonaws.com/pkwmignaq6f6/public/Find_user_insights_revised_homepage_4aecc5dfa4.png", "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "필요성 검토→비필수 설명 이동→상단 CTA·사용 예 추가→AI 신뢰 설명 명료화→전환 측정", "evidence": "홈→서비스 전환 55%→70%" } }, "출처": { "소스": "https://design-histories.education.gov.uk/find-user-insights/redesigning-the-homepage-less-content-more-confidence", "수집일": "2026-07-15", "수집사유": "2026-07-10 공개된 공식 전후 화면·사용자 발화·전환 지표가 확인됨" } }
  },
  {
    title: "Ethereal Tulle Portrait — Detailed Gen-4 Image Prompt", category: "AI 이미지 프롬프트", date: "2026-07-15", url: "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide",
    summary: "푸른 배경과 오렌지 튤, 젤 조명, 소프트 포커스, 바로크 회화성을 구체화한 공식 이미지 생성 예시.", note: "피사체·소재·조명·초점·색 대비·무드를 독립 조각으로 분해해 상세 지시가 결과 밀도를 바꾸는 방식을 비교하기 좋음.",
    prompt: "elegant portrait of a woman draped in a sheer tulle veil against a blue background that resembles a sky. Close-up, ethereal warm orange lighting, soft glowing focus. natural face. The orange-toned tulle veil is draped over her head and flows around her face with multiple flowing layers in a weightless, extravagant baroque painting style. The flowing fabric takes up most of the scene, dramatically swirling throughout the environment. Glowing orange lighting creates a dreamy atmosphere. blend of pastel and vibrant color palettes. rich purples and blues, warm pinkish orange skin tone. avant-garde. elegant artistry, elaborate yet minimalist. a chaotic yet elegant scene. dramatic weightless flowing fabric. glowing, gel lighting, ethereal. electric neon peach accents.",
    tags: ["#이미지프롬프트", "#Gen4Image", "#젤조명", "#몽환초상"], thumbnail: "https://help.runwayml.com/hc/article_attachments/37067220594835", visual: { background: "#342a6f", accent: "#ff8f6b", ink: "#f7eefb", radiusOne: "50% 50% 0 50%", radiusTwo: "50%", rotate: "5deg", label: "TULLE / GEL LIGHT / GLOW" },
    review: { "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성", "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 4 }, "total": 18, "verdict": "accept", "근거": "공식 가이드가 전체 프롬프트·Gen-4 Image 모델·텍스트 생성 조건·1920×1088 결과 이미지를 함께 제공해 조명과 소재 중심 초상 구성을 반복 비교할 수 있다.", "metadata": { "정보렌즈": ["AI활용"], "시각렌즈": ["에디토리얼", "하이채도", "중앙집중", "소프트확산광", "글로시", "몽환"], "시각아티팩트_url": "https://help.runwayml.com/hc/article_attachments/37067220594835", "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "elegant portrait of a woman draped in a sheer tulle veil against a blue background that resembles a sky. Close-up, ethereal warm orange lighting, soft glowing focus. natural face. The orange-toned tulle veil is draped over her head and flows around her face with multiple flowing layers in a weightless, extravagant baroque painting style. The flowing fabric takes up most of the scene, dramatically swirling throughout the environment. Glowing orange lighting creates a dreamy atmosphere. blend of pastel and vibrant color palettes. rich purples and blues, warm pinkish orange skin tone. avant-garde. elegant artistry, elaborate yet minimalist. a chaotic yet elegant scene. dramatic weightless flowing fabric. glowing, gel lighting, ethereal. electric neon peach accents.", "tool_model": "Runway Gen-4 Image", "params": "Text to Image·reference 없음·positive natural-language prompt·공개 결과 1920×1088·aspect ratio/seed 미공개", "output_url": "https://help.runwayml.com/hc/article_attachments/37067220594835", "fragment_map": [{ "조각": "sheer tulle veil with multiple flowing layers", "효과": "얼굴 주변 무중력 소재 레이어" }, { "조각": "ethereal warm orange lighting, soft glowing focus", "효과": "따뜻한 젤 조명과 확산광" }, { "조각": "rich purples and blues, electric neon peach accents", "효과": "차가운 배경과 복숭아색 대비" }] } }, "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/35694045317139-Gen-4-Image-Prompting-Guide", "수집일": "2026-07-15", "수집사유": "공식 가이드에서 상세 프롬프트·모델·생성 조건·결과 이미지가 확인됨" } }
  },
  {
    title: "Figma Weave — 재사용 가능한 AI 비주얼 워크플로",
    category: "AI 디자인", date: "2026-07-14", url: "https://www.figma.com/blog/connecting-figma-and-weave/",
    summary: "스타일 전이·제품 촬영·소재 추출 같은 생성 과정을 노드형 워크플로로 구성하고 Figma 캔버스와 Community에서 재사용하는 AI 디자인 환경.",
    note: "완성 이미지만 공유하지 않고 입력·모델·수정 단계를 재사용 가능한 도구로 묶어 브랜드 비주얼 제작의 판단 과정을 팀 자산으로 전환한 점이 유용함.",
    prompt: "Generate a 3D product render from a beer glass, a hop leaf, and a background; refine lighting, camera angle, and texture.",
    tags: ["#AI디자인", "#FigmaWeave", "#생성워크플로", "#브랜드시스템"],
    thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/d6b5115bb3fc17ee7d5cdb4192a7a3b99d60679a-3264x1836.png?w=1200&q=70&fit=max&auto=format",
    visual: { background: "#d8f052", accent: "#4b35cc", ink: "#171717", radiusOne: "0", radiusTwo: "50%", rotate: "-8deg", label: "INPUT / MODEL / REUSE" },
    review: {
      "유형": "AI 디자인", "가치축_이름": "재현성",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 4 }, "total": 19, "verdict": "accept",
      "근거": "입력 이미지·프롬프트·Gemini 모델·조명·카메라·질감 조정이 노드로 공개돼 브랜드 비주얼 제작 절차를 팀 단위로 재현하고 반복할 수 있다.",
      "metadata": { "렌즈": ["AI활용", "브랜드일관성", "정보구조"], "커버리지_카테고리": "AI 디자인", "보안_등급": "raw_ok", "type_block": { "prompt": "Generate a 3D product render from a beer glass, a hop leaf, and a background; refine lighting, camera angle, and texture.", "model": "Gemini 3 (Nano Banana Pro) in Figma Weave", "settings": "beer glass·hop leaf·background 입력 노드, 프롬프트/이미지 생성 노드, lighting·camera angle·texture 조정, Community workflow publish" } },
      "출처": { "소스": "https://www.figma.com/blog/connecting-figma-and-weave/", "수집일": "2026-07-14", "수집사유": "2026-06-24 공개된 실제 노드 화면과 결과물·팀 적용 사례가 확인됨" }
    }
  },
  {
    title: "Apple 27 Design Kits — Expanded States and Dark Mode",
    category: "웹 스타일가이드", date: "2026-07-14", url: "https://developer.apple.com/news/?id=e2lxw9l1",
    summary: "iOS·iPadOS·macOS 27의 Liquid Glass 컴포넌트와 상태를 Figma·Sketch 키트로 확장하고 코드 명명·리사이즈·다크 모드 기준을 정렬한 공식 UI 자료.",
    note: "시각 스타일만 배포하지 않고 상태 범위, 코드와 맞춘 이름, 리사이즈 동작을 함께 갱신해 디자인 시스템 핸드오프 기준을 점검하기 좋음.",
    tags: ["#웹스타일가이드", "#Apple", "#UI키트", "#컴포넌트상태"],
    thumbnail: "https://devimages-cdn.apple.com/wwdc-services/articles/images/5903ECCD-08EE-4974-ACF6-141C8B5AAEB2/2048.jpeg",
    visual: { background: "#17191f", accent: "#9ca9ff", ink: "#f6f5f1", radiusOne: "0", radiusTwo: "50% 0 50% 0", rotate: "0deg", label: "STATE / RESIZE / DARK" },
    review: {
      "유형": "웹 스타일가이드", "가치축_이름": "시스템화",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "확장된 컴포넌트 상태·코드 정렬 명명·리사이즈·다크 모드가 실제 공식 키트 화면으로 공개돼 멀티플랫폼 UI 시스템 운영 기준으로 전이할 수 있다.",
      "metadata": { "렌즈": ["브랜드일관성", "인터랙션", "접근성"], "커버리지_카테고리": "웹 스타일가이드", "보안_등급": "raw_ok", "type_block": { "tokens": "Liquid Glass 재질·다크 모드·플랫폼별 시각 기준", "components": "키보드·탭 바·액션 메뉴·알림·버튼·토글·슬라이더 및 상태" } },
      "출처": { "소스": "https://developer.apple.com/news/?id=e2lxw9l1", "수집일": "2026-07-14", "수집사유": "2026-06-23 공개된 공식 Figma·Sketch 디자인 키트와 실제 컴포넌트 미리보기가 확인됨" }
    }
  },
  {
    title: "DfE Find User Insights — Guidance를 Trust로 바꾼 콘텐츠 개편",
    category: "콘텐츠 디자인 가이드", date: "2026-07-14", url: "https://design-histories.education.gov.uk/find-user-insights/when-guidance-is-not-guidance",
    summary: "모호한 ‘Guidance’ 페이지를 연구 출처·검증 기준 중심의 ‘About the research’로 바꾸고 오류 안내는 발생 시점으로 이동한 실제 콘텐츠 디자인 사례.",
    note: "사용자 인용, 기존 화면, 개편 화면, 오류 시나리오 원칙이 한 흐름에 있어 신뢰 정보와 문제 해결 문구의 노출 시점을 설계하는 체크리스트로 쓰기 좋음.",
    tags: ["#콘텐츠디자인", "#신뢰설계", "#맥락안내", "#사용자조사"],
    thumbnail: "https://cloud-cube-eu2.s3.eu-west-1.amazonaws.com/pkwmignaq6f6/public/Find_user_insights_revised_guidance_page_About_the_research_in_this_service_0d1a207f02.png",
    visual: { background: "#e7f1fb", accent: "#1d70b8", ink: "#0b0c0c", radiusOne: "0", radiusTwo: "0", rotate: "0deg", label: "EXPECT / TRUST / MOMENT" },
    review: {
      "유형": "콘텐츠 디자인 가이드", "가치축_이름": "실행가능성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "사용자 발화와 개편 전후 화면을 근거로 신뢰 정보는 앞당기고 오류 지원은 발생 시점에 배치하는 절차가 명확해 AI 서비스 콘텐츠 흐름에 바로 적용할 수 있다.",
      "metadata": { "렌즈": ["콘텐츠명료성", "사용자흐름", "정보구조", "AI활용"], "커버리지_카테고리": "콘텐츠 디자인 가이드", "보안_등급": "raw_ok", "type_block": { "procedure": "기대 불일치 조사→신뢰 정보 재구성→오류 시나리오 분리→맥락별 안내 배치", "examples": "기존 Guidance 화면과 개편 About the research 화면·사용자 인용" } },
      "출처": { "소스": "https://design-histories.education.gov.uk/find-user-insights/when-guidance-is-not-guidance", "수집일": "2026-07-14", "수집사유": "2026-07-10 공개된 실제 전후 화면과 사용자 조사·적용 절차가 확인됨" }
    }
  },
  {
    title: "Super Paste — Bulk Content Population for Figma",
    category: "Figma 플러그인", date: "2026-07-14", url: "https://forum.figma.com/showcase-your-work-14/super-paste-generate-copy-paste-text-images-plugin-55733",
    summary: "텍스트·이미지·CSV를 함께 가져와 중첩 레이어를 감지하고 큰 레이아웃에 현실적인 콘텐츠를 일괄 채우는 Figma 플러그인.",
    note: "반복적인 목업 데이터 입력을 그룹·저장 목록·중첩 구조 단위로 묶어 대시보드와 카드 변형 제작 시간을 직접 줄임.",
    tags: ["#Figma플러그인", "#벌크입력", "#CSV", "#목업데이터"],
    thumbnail: "https://uploads-us-west-2.insided.com/figma-en/attachment/cb0455a8-f5d8-4d62-8c1a-cc35864ec85d.gif",
    visual: { background: "#fff0c9", accent: "#ff5c35", ink: "#171717", radiusOne: "100% 0 70% 30%", radiusTwo: "0", rotate: "11deg", label: "COPY / CSV / POPULATE" },
    review: {
      "유형": "Figma 플러그인", "가치축_이름": "유용성",
      "scores": { "완성도": 4, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 17, "verdict": "accept",
      "근거": "공개 데모가 텍스트·이미지·CSV를 중첩 레이어에 일괄 적용하는 과정을 보여줘 반복 목업 데이터 입력 시간을 확실히 절감한다.",
      "metadata": { "렌즈": ["사용자흐름", "콘텐츠명료성"], "커버리지_카테고리": "Figma 플러그인", "보안_등급": "raw_ok", "type_block": { "workflow": "콘텐츠 목록 또는 CSV 입력→중첩 레이어 감지→텍스트·이미지 일괄 적용", "repeated_task": "카드·테이블·대형 레이아웃의 목업 데이터 채우기" } },
      "출처": { "소스": "https://forum.figma.com/showcase-your-work-14/super-paste-generate-copy-paste-text-images-plugin-55733", "수집일": "2026-07-14", "수집사유": "2026-07-07 공개 글에 실제 플러그인 GIF와 기능·Community 링크가 확인됨" }
    }
  },
  {
    title: "겨울 호숫가 강아지에 빨간 모자 추가 — Gemini 3.1 편집 프롬프트",
    category: "AI 이미지 프롬프트", date: "2026-07-14", url: "https://helpx.adobe.com/in/firefly/web/work-with-images/generate-images/generate-images-using-gemini.html",
    summary: "기존 강아지 사진을 참조 이미지로 유지하면서 빨간 크리스마스 모자만 추가해 국소적 편집과 장면 보존을 비교하는 공식 Gemini 예시.",
    note: "짧은 명령으로 추가 요소를 한정하고 참조 이미지·모델·해상도·비율을 고정해 편집 보존력과 지시 이행을 반복 검증하기 좋음.",
    prompt: "A puppy wearing a red Christmas hat.",
    tags: ["#이미지프롬프트", "#Gemini31", "#참조이미지", "#국소편집"],
    thumbnail: "https://helpx-prod.scene7.com/is/image/HelpxProd/non-adobe-models-in-firefly-gemini-01?$png$&jpegSize=200&wid=1173",
    visual: { background: "#e6edf2", accent: "#b9252f", ink: "#17222a", radiusOne: "50% 50% 10% 10%", radiusTwo: "50%", rotate: "0deg", label: "REFERENCE / ADD / PRESERVE" },
    review: {
      "유형": "AI 이미지 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 4, "신규성": 3, "근거성": 5, "가치축": 5 }, "total": 17, "verdict": "accept",
      "근거": "공식 페이지에 입력·결과 이미지와 정확한 프롬프트·Gemini 3.1 모델·해상도·비율 설정이 함께 공개돼 참조 보존 편집을 재현할 수 있다.",
      "metadata": { "렌즈": ["AI활용", "브랜드일관성"], "커버리지_카테고리": "AI 이미지 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "A puppy wearing a red Christmas hat.", "model": "Gemini 3.1 (Nano Banana 2) in Adobe Firefly", "settings": "reference image 1장·Square 1:1·2K·Generate image 편집" } },
      "출처": { "소스": "https://helpx.adobe.com/in/firefly/web/work-with-images/generate-images/generate-images-using-gemini.html", "수집일": "2026-07-14", "수집사유": "2026-06-29 갱신된 공식 예제에 프롬프트·모델·설정·입출력 이미지가 모두 확인됨" }
    }
  },
  {
    title: "숲 배경으로 번지는 불길 — Aleph 2.0 Extra Motion",
    category: "AI 영상 프롬프트", date: "2026-07-14", url: "https://help.runwayml.com/hc/en-us/articles/52150503729171-Aleph-2-0-Prompting-Guide",
    summary: "편집된 키프레임에 없던 불길의 확산 동작만 Extra motion으로 추가해 원본 인물과 주변 장면을 유지하는 인컨텍스트 영상 편집 예시.",
    note: "키프레임이 정의한 외형과 텍스트가 정의한 추가 움직임을 분리해 영상 재촬영 없이 필요한 변화만 통제하는 검증 기준으로 유용함.",
    prompt: "fire begins to spread up the trees",
    tags: ["#영상프롬프트", "#Aleph20", "#키프레임", "#모션편집"],
    thumbnail: "https://help.runwayml.com/hc/article_attachments/52354918953363",
    visual: { background: "#252221", accent: "#ef633f", ink: "#f6f5f1", radiusOne: "0 100% 0 100%", radiusTwo: "50%", rotate: "6deg", label: "KEYFRAME / EXTRA MOTION / KEEP" },
    review: {
      "유형": "AI 영상 프롬프트", "가치축_이름": "재현성",
      "scores": { "완성도": 4, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 18, "verdict": "accept",
      "근거": "입력 영상·편집 키프레임·정확한 Extra motion 프롬프트·Aleph 2.0 출력이 한 세트로 공개돼 국소 모션 편집을 반복 재현할 수 있다.",
      "metadata": { "렌즈": ["AI활용", "인터랙션"], "커버리지_카테고리": "AI 영상 프롬프트", "보안_등급": "raw_ok", "type_block": { "prompt": "fire begins to spread up the trees", "model": "Runway Aleph 2.0", "settings": "Edit Studio·입력 영상+편집 키프레임·Extra motion 사용·기존 장면 보존" } },
      "출처": { "소스": "https://help.runwayml.com/hc/en-us/articles/52150503729171-Aleph-2-0-Prompting-Guide", "수집일": "2026-07-14", "수집사유": "공식 API 기준 2026-06-30 갱신된 가이드에 입력·키프레임·프롬프트·출력이 모두 확인됨" }
    }
  },
  {
    title: "Linear Coding Sessions — 이슈·에이전트·Diff 통합 흐름",
    category: "웹·앱 UI", date: "2026-07-14", url: "https://linear.app/changelog/2026-06-11-coding-sessions",
    summary: "이슈의 맥락에서 코딩 세션을 시작하고 진행 상태·결과 diff·후속 피드백을 같은 스레드에서 검토하는 에이전트 작업 UI.",
    note: "업무 위임에서 코드 검토까지 화면과 맥락을 분리하지 않고 이어 주어 AI 작업의 상태·산출물·다음 행동을 명료하게 만드는 사례임.",
    tags: ["#웹앱UI", "#에이전트UX", "#코드리뷰", "#상태피드백"],
    thumbnail: "https://webassets.linear.app/images/ornj730p/production/020e273126f3f486fdc16fdc7b6a8a337fe31aa1-3600x2160.png?auto=format&dpr=2&q=95",
    visual: { background: "#202124", accent: "#8f7df0", ink: "#f4f4f5", radiusOne: "12%", radiusTwo: "50%", rotate: "0deg", label: "ISSUE / AGENT / DIFF" },
    review: {
      "유형": "웹·앱 UI", "가치축_이름": "시스템화",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "이슈 위임·세션 진행·diff 검토·피드백 반복을 하나의 작업 맥락에 연결한 실제 화면이 공개돼 에이전트형 업무 도구의 상태 구조로 전이할 수 있다.",
      "metadata": { "렌즈": ["정보구조", "사용자흐름", "인터랙션", "AI활용"], "커버리지_카테고리": "웹·앱 UI", "보안_등급": "raw_ok", "type_block": { "structure": "이슈 상세 안의 에이전트 세션·상태 피드·diff 검토", "states": "위임→진행→diff 준비→리뷰→후속 수정" } },
      "출처": { "소스": "https://linear.app/changelog/2026-06-11-coding-sessions", "수집일": "2026-07-14", "수집사유": "2026-06-11 공개된 공식 릴리스에서 에이전트 세션·diff·완료 상태의 실제 제품 화면이 확인됨" }
    }
  },
  {
    title: "Garble — Pen Plotter Typography with Human Interruption",
    category: "비주얼 그래픽", date: "2026-07-14", url: "https://www.itsnicethat.com/articles/stanley-plowman-garble-graphic-design-publication-project-060726",
    summary: "Helvetica 경로에 도형을 분산한 뒤 펜 교체·종이 이동·겹쳐 찍기로 기계의 정밀함과 사람의 오류를 충돌시킨 플로터 서체와 진.",
    note: "기하 경로, 펜 크기, 간격, 오버프린트, 작업 중 개입을 명시적 변수로 삼아 디지털 규칙에서 불완전한 질감을 추출하는 방식이 돋보임.",
    tags: ["#비주얼그래픽", "#실험타이포", "#펜플로터", "#오버프린트"],
    thumbnail: "https://admin.itsnicethat.com/images/9GOSVysCoHKG6MYudMMhuz6qsZI=/279532/width-1440/stanley-plowman-pen-plotter-illustration-itsnicethat-13.jpeg",
    visual: { background: "#f3e857", accent: "#e4483f", ink: "#17225d", radiusOne: "50% 0", radiusTwo: "0 50%", rotate: "-11deg", label: "PLOT / INTERRUPT / OVERPRINT" },
    review: {
      "유형": "비주얼 그래픽", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 5, "근거성": 5, "가치축": 5 }, "total": 20, "verdict": "accept",
      "근거": "기하 경로·도형 분산·펜 교체·종이 이동·오버프린트가 반복 가능한 제작 변수로 공개돼 인간적 오류가 있는 타이포 그래픽 문법으로 추출된다.",
      "metadata": { "렌즈": ["타이포그래피", "인터랙션"], "커버리지_카테고리": "비주얼 그래픽", "보안_등급": "raw_ok", "type_block": { "mood": "기계 정밀성과 아날로그 오류의 충돌", "elements": "Helvetica 경로·기하 도형·다색 펜·오버프린트·수동 개입" } },
      "출처": { "소스": "https://www.itsnicethat.com/articles/stanley-plowman-garble-graphic-design-publication-project-060726", "수집일": "2026-07-14", "수집사유": "2026-07-06 공개된 제작 과정과 다수의 실제 결과 이미지가 확인됨" }
    }
  },
  {
    title: "Ronnie Scott’s — Typography as Jazz Performance",
    category: "브랜드", date: "2026-07-14", url: "https://www.itsnicethat.com/articles/dan-cottrell-studio-ronnie-scotts-branding-graphic-design-project-080726",
    summary: "Railroad Gothic과 Century Condensed를 고정 레이아웃 대신 공연처럼 움직이는 조합으로 운용해 재즈 클럽의 디지털·인쇄 접점을 묶은 리브랜딩.",
    note: "역사적 네온 로고는 보존하면서 활자 대비와 프로그램 편집 리듬을 새 시스템으로 확장해 헤리티지 브랜드의 변화 범위를 조절한 방식이 좋음.",
    tags: ["#브랜드", "#재즈브랜딩", "#타이포그래피", "#헤리티지"],
    thumbnail: "https://media.itsnicethat.com/original_images/DanCottrellStudio_RonnieScotts_05.gif",
    visual: { background: "#191718", accent: "#d8b05a", ink: "#f6f5f1", radiusOne: "0", radiusTwo: "50%", rotate: "8deg", label: "HERITAGE / TYPE / RHYTHM" },
    review: {
      "유형": "브랜드", "가치축_이름": "스타일추출성",
      "scores": { "완성도": 5, "신규성": 4, "근거성": 5, "가치축": 5 }, "total": 19, "verdict": "accept",
      "근거": "보존한 네온 로고와 두 서체의 크기·밀도·편집 리듬이 디지털 공연 목록과 인쇄 프로그램에 반복돼 헤리티지 브랜드의 유연한 시각 문법으로 추출된다.",
      "metadata": { "렌즈": ["브랜드일관성", "타이포그래피"], "커버리지_카테고리": "브랜드", "보안_등급": "raw_ok", "type_block": { "mood": "늦은 밤의 재즈 리듬과 역사성", "elements": "Railroad Gothic·Century Condensed·네온 로고·공연 프로그램 리듬" } },
      "출처": { "소스": "https://www.itsnicethat.com/articles/dan-cottrell-studio-ronnie-scotts-branding-graphic-design-project-080726", "수집일": "2026-07-14", "수집사유": "2026-07-08 공개된 디지털·인쇄 적용 이미지와 시스템 설계 근거가 확인됨" }
    }
  },
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
