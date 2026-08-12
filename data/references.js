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
