// 새 레퍼런스는 아래 형식을 유지해 맨 앞에 추가합니다.
// 원본 이미지 사용 권한이나 안정적인 직접 이미지 URL이 없을 때에는 visual 필드로 카드 미리보기를 만듭니다.
let references = [
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
