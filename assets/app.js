const i18n = {
  ko: {
    pageTitle: 'Design Workflow Studio | Stitch + Gemini UI Lab',
    pageDescription: 'Stitch MCP, Gemini CLI, Hermes Agent로 디자인 요청을 수집하고 실제 Stitch 생성 시안 3가지를 비교하는 전용 디자인 워크플로 스튜디오.',
    skip: '본문으로 바로가기',
    brandAria: 'Design Workflow Studio 홈',
    navAria: '주요 섹션',
    langAria: '언어 선택',
    navWorkflow: '워크플로',
    navDirections: '3가지 시안',
    navStitch: 'Stitch 결과',
    navRequests: '요청 방식',
    navDeploy: '운영 원칙',
    navCta: '디자인 요청하기',
    heroEyebrow: 'GitHub Pages 전용 공개 디자인 허브',
    languageNote: '한국어 기본 · English compatible',
    heroTitle: '아이디어를 바로 비교 가능한 3개의 전문 UI 방향으로 바꿉니다.',
    heroLead: 'Gemini 3.1 Pro가 디자인 방향을 정의하고, Stitch MCP가 실제 시각 시안을 생성하며, 최종 선택안은 코드/페이지로 정리하는 반복형 디자인 워크플로입니다.',
    heroPrimary: '실제 Stitch 결과 보기',
    heroSecondary: '요청 템플릿 보기',
    metricsAria: '워크플로 요약 수치',
    metricDirections: '실제 Stitch 화면',
    metricTools: '확인된 MCP 도구',
    metricHub: '전용 GitHub Pages',
    heroPanelAria: '디자인 워크플로 미리보기',
    queueStep: '01 · Brief intake',
    queueStatus: '검증 완료',
    promptLabel: 'Generated Stitch design system',
    variantAria: '세 가지 시안 카드',
    workflowEyebrow: '운영 방식',
    workflowTitle: '요청이 들어오면 항상 같은 기준으로 설계합니다.',
    workflowLead: '이 허브는 디자인 요청을 누적하고, 각 요청마다 브리프·Stitch 프롬프트·원본 출력·결정사항을 남기는 공개 랜딩 페이지입니다.',
    step1: '목표, 사용자, 화면 종류, 톤, 참고 서비스를 짧게 수집합니다.',
    step2: 'Gemini 3.1 Pro로 색상, 타입, 밀도, 레이아웃 기준을 정합니다.',
    step3: 'Stitch MCP에 실제 프롬프트를 보내 화면과 디자인 시스템을 생성합니다.',
    step4: '보수적·강력 추천·실험적 방향을 비교 가능한 형태로 만듭니다.',
    step5: '선택안을 다듬고 HTML/React/Next.js 등으로 배포합니다.',
    directionsEyebrow: '첫 테스트 세트',
    directionsTitle: '같은 목적, 완전히 다른 3가지 디자인 언어',
    directionsLead: '단순 색상 변경이 아니라 정보 밀도, 검토 방식, 인터랙션 모델 자체를 다르게 잡았습니다.',
    tabsAria: '디자인 방향 선택',
    tabPro: '전문가용 컨트롤 센터',
    tabEditorial: '에디토리얼 갤러리',
    tabBoard: '크리에이티브 보드',
    proTitle: '전문가용 컨트롤 센터',
    proBody: '프롬프트, 생성 시안, 내보내기 코드를 한 화면에서 동시에 보는 고밀도 운영 UI입니다.',
    proPoint1: '3단 컬럼: 브리프 · 시안 · 코드',
    proPoint2: 'Inter + Fira Code, 12–14px 중심',
    proPoint3: '다크 패널, 파란 액션, 개발자 도구 같은 밀도',
    copyPrompt: 'Stitch 프롬프트 복사',
    proMockAria: '전문가용 컨트롤 센터 목업',
    briefAria: '브리프 예시',
    editorialTitle: '에디토리얼 갤러리',
    editorialBody: '클라이언트와 함께 보기 좋은 차분한 검토 공간입니다. 큰 카드와 여백으로 선택 피로를 줄입니다.',
    editorialPoint1: '상단 5단계 진행 바',
    editorialPoint2: '대형 가로 캐러셀, 스냅 스크롤',
    editorialPoint3: '따뜻한 라이트 팔레트와 세리프 헤딩',
    editorialMockAria: '에디토리얼 갤러리 목업',
    galleryCard: '넉넉한 여백과 큰 미리보기로 의사결정을 돕습니다.',
    boardTitle: '크리에이티브 보드',
    boardBody: 'FigJam/Miro처럼 시안을 공간에 펼쳐 놓고 드래그하며 선택하는 실험적인 캔버스 UI입니다.',
    boardPoint1: '플로팅 브리프 패널',
    boardPoint2: '흩어진 3개 시안 노드와 연결선',
    boardPoint3: 'Export Zone으로 드롭하는 제스처',
    boardMockAria: '크리에이티브 보드 목업',
    stitchEyebrow: '실제 Stitch MCP 출력',
    stitchTitle: 'Stitch MCP로 생성한 3개 화면을 랜딩 페이지에 반영했습니다.',
    stitchLead: 'Google Stitch MCP 서버와 OAuth 인증을 사용해 생성한 원본 JSON, 스크린샷, HTML을 저장했습니다. 아래 이미지는 외부 URL이 아니라 저장소에 보관한 실제 결과물입니다.',
    stitchMetaAria: 'Stitch 생성 메타데이터',
    provenanceAria: 'Stitch 검증 요약',
    prov1Title: '원본 응답 보관',
    prov1Body: 'create_project, generate_screen_from_text, list_screens JSON을 designs/에 보관했습니다.',
    prov2Title: '로컬 산출물 보관',
    prov2Body: '3개 PNG와 3개 HTML을 assets/stitch-run-001/에 저장해 만료 URL에 의존하지 않습니다.',
    prov3Title: '한국어 기본',
    prov3Body: '랜딩 페이지는 한국어를 기본으로 렌더링하고, EN 토글과 ?lang=en을 지원합니다.',
    shotProAlt: 'Stitch가 생성한 Pro Control Center 디자인 스크린샷',
    shotProTitle: '고밀도 전문가 대시보드',
    shotProBody: '브리프, Stitch Prompt, 3개 Variant, Export Code를 한 화면에 넣은 개발자 도구형 방향입니다.',
    shotEditorialAlt: 'Stitch가 생성한 Editorial Gallery 디자인 스크린샷',
    shotEditorialTitle: '차분한 클라이언트 리뷰 공간',
    shotEditorialBody: '큰 카드, 넉넉한 여백, 단계 진행 바를 중심으로 의사결정 피로를 줄이는 방향입니다.',
    shotBoardAlt: 'Stitch가 생성한 Creative Board 디자인 스크린샷',
    shotBoardTitle: '공간형 실험 캔버스',
    shotBoardBody: 'FigJam/Miro처럼 시안을 흩뿌려 비교하고 Export Zone으로 선택하는 플레이풀한 방향입니다.',
    openHtml: 'HTML 열기',
    requestEyebrow: '앞으로의 요청 방식',
    requestTitle: '디자인 요청은 짧아도 됩니다. 대신 결정 기준은 남깁니다.',
    requestLead: '아래 포맷으로 요청하면 Gemini/Stitch 워크플로에 바로 넣을 수 있습니다.',
    copy: '복사',
    templateText: '목표: 어떤 화면/사이트를 만들고 싶은지\n사용자: 누가 쓰는지\n톤: 전문적 / 따뜻함 / 실험적 / 고급스러움\n참고: 닮았으면 하는 서비스나 싫은 예시\n필수 요소: 반드시 들어가야 하는 콘텐츠\n출력: 3개 시안 / HTML / Next.js / PPT 등',
    deployEyebrow: 'GitHub Pages 운영',
    deployTitle: '공개 저장소 + GitHub Pages로 운영',
    deployBody: '이 사이트는 전용 공개 저장소에서 관리하고, GitHub Pages가 바로 배포할 수 있도록 순수 HTML/CSS/JS로 구성했습니다.',
    principle1Title: '요청 누적',
    principle1Body: 'requests/에 브리프와 결정사항을 보관합니다.',
    principle2Title: '시안 비교',
    principle2Body: '매 요청마다 최소 3개 방향을 비교합니다.',
    principle3Title: '선택 후 구현',
    principle3Body: '선택된 방향만 코드로 강화해 산출물 품질을 유지합니다.',
    footer: 'Built for ongoing Stitch MCP + Gemini design requests.',
    copyPromptToast: 'Stitch 프롬프트를 복사했습니다.',
    copyTemplateToast: '요청 템플릿을 복사했습니다.',
    copiedToast: '복사했습니다.'
  },
  en: {
    pageTitle: 'Design Workflow Studio | Stitch + Gemini UI Lab',
    pageDescription: 'A dedicated GitHub Pages landing page for collecting design requests and comparing three real Stitch MCP design outputs.',
    skip: 'Skip to content',
    brandAria: 'Design Workflow Studio home',
    navAria: 'Primary sections',
    langAria: 'Language selection',
    navWorkflow: 'Workflow',
    navDirections: '3 directions',
    navStitch: 'Stitch results',
    navRequests: 'Request format',
    navDeploy: 'Operating model',
    navCta: 'Request a design',
    heroEyebrow: 'Dedicated GitHub Pages design hub',
    languageNote: 'Korean default · English compatible',
    heroTitle: 'Turn ideas into three professional UI directions you can compare immediately.',
    heroLead: 'Gemini 3.1 Pro defines the design stance, Stitch MCP generates real visual directions, and the selected concept is converted into code or a landing page.',
    heroPrimary: 'View real Stitch output',
    heroSecondary: 'See request template',
    metricsAria: 'Workflow summary metrics',
    metricDirections: 'real Stitch screens',
    metricTools: 'verified MCP tools',
    metricHub: 'dedicated GitHub Pages site',
    heroPanelAria: 'Design workflow preview',
    queueStep: '01 · Brief intake',
    queueStatus: 'Verified',
    promptLabel: 'Generated Stitch design system',
    variantAria: 'Three direction cards',
    workflowEyebrow: 'Operating model',
    workflowTitle: 'Every request is designed with the same clear decision standard.',
    workflowLead: 'This hub collects design requests and keeps the brief, Stitch prompt, original outputs, and decisions together on a public landing page.',
    step1: 'Capture the goal, audience, screen type, tone, and references in a compact brief.',
    step2: 'Use Gemini 3.1 Pro to define color, typography, density, and layout criteria.',
    step3: 'Send a concrete prompt to Stitch MCP to generate screens and a design system.',
    step4: 'Compare conservative, recommended, and experimental directions side by side.',
    step5: 'Refine the selected direction and ship it as HTML, React, Next.js, or another format.',
    directionsEyebrow: 'First test set',
    directionsTitle: 'One goal, three distinct design languages',
    directionsLead: 'These are not color swaps. Each direction changes information density, review behavior, and the interaction model.',
    tabsAria: 'Select a design direction',
    tabPro: 'Pro Control Center',
    tabEditorial: 'Editorial Gallery',
    tabBoard: 'Creative Board',
    proTitle: 'Pro Control Center',
    proBody: 'A high-density operations UI that shows the brief, generated designs, and export code on one screen.',
    proPoint1: 'Three columns: brief · variants · code',
    proPoint2: 'Inter + Fira Code, centered on 12–14px UI text',
    proPoint3: 'Dark panels, blue actions, developer-tool density',
    copyPrompt: 'Copy Stitch prompt',
    proMockAria: 'Pro Control Center mockup',
    briefAria: 'Brief example',
    editorialTitle: 'Editorial Gallery',
    editorialBody: 'A calmer review space for client-facing decisions. Large cards and generous spacing reduce choice fatigue.',
    editorialPoint1: 'Five-step progress indicator',
    editorialPoint2: 'Large horizontal carousel with snap scrolling',
    editorialPoint3: 'Warm light palette and serif headings',
    editorialMockAria: 'Editorial Gallery mockup',
    galleryCard: 'Generous spacing and large previews help decisions feel easier.',
    boardTitle: 'Creative Board',
    boardBody: 'An experimental canvas UI where variants are arranged spatially, similar to FigJam or Miro.',
    boardPoint1: 'Floating brief panel',
    boardPoint2: 'Three scattered variant nodes with connectors',
    boardPoint3: 'Drop-to-export gesture through an Export Zone',
    boardMockAria: 'Creative Board mockup',
    stitchEyebrow: 'Actual Stitch MCP output',
    stitchTitle: 'Three screens generated through Stitch MCP are built into this landing page.',
    stitchLead: 'The original JSON, screenshots, and HTML were created with the Google Stitch MCP server and OAuth authentication. The images below are stored in this repository, not linked from expiring external URLs.',
    stitchMetaAria: 'Stitch generation metadata',
    provenanceAria: 'Stitch verification summary',
    prov1Title: 'Raw responses archived',
    prov1Body: 'create_project, generate_screen_from_text, and list_screens JSON are stored under designs/.',
    prov2Title: 'Local artifacts archived',
    prov2Body: 'Three PNG screenshots and three HTML files are stored under assets/stitch-run-001/ so the site does not rely on expiring URLs.',
    prov3Title: 'Korean first',
    prov3Body: 'The landing page renders Korean by default while supporting an EN toggle and ?lang=en.',
    shotProAlt: 'Stitch-generated Pro Control Center design screenshot',
    shotProTitle: 'High-density expert dashboard',
    shotProBody: 'A developer-tool direction that combines the brief, Stitch prompt, three variants, and export code in one view.',
    shotEditorialAlt: 'Stitch-generated Editorial Gallery design screenshot',
    shotEditorialTitle: 'Calm client review space',
    shotEditorialBody: 'A direction focused on large cards, generous whitespace, and a step indicator to reduce decision fatigue.',
    shotBoardAlt: 'Stitch-generated Creative Board design screenshot',
    shotBoardTitle: 'Spatial experimental canvas',
    shotBoardBody: 'A playful FigJam/Miro-like direction where variants are scattered for comparison and selected through an Export Zone.',
    openHtml: 'Open HTML',
    requestEyebrow: 'Future request format',
    requestTitle: 'Design requests can be short. The decision criteria should stay explicit.',
    requestLead: 'Use this format and the request can go directly into the Gemini/Stitch workflow.',
    copy: 'Copy',
    templateText: 'Goal: what screen or site should be designed\nAudience: who will use it\nTone: professional / warm / experimental / premium\nReferences: services to resemble or avoid\nMust-haves: required content and sections\nOutput: 3 directions / HTML / Next.js / deck, etc.',
    deployEyebrow: 'GitHub Pages operations',
    deployTitle: 'Public repository + GitHub Pages',
    deployBody: 'This site is maintained in a dedicated public repository and implemented as plain HTML/CSS/JS so GitHub Pages can deploy it directly.',
    principle1Title: 'Request archive',
    principle1Body: 'Briefs and decisions are stored under requests/.',
    principle2Title: 'Direction comparison',
    principle2Body: 'Every request compares at least three directions.',
    principle3Title: 'Implement after selection',
    principle3Body: 'Only the selected direction is strengthened into production code to keep output quality high.',
    footer: 'Built for ongoing Stitch MCP + Gemini design requests.',
    copyPromptToast: 'Stitch prompt copied.',
    copyTemplateToast: 'Request template copied.',
    copiedToast: 'Copied.'
  }
};

const prompts = {
  pro: `Create a 1440px desktop web app dashboard for an AI Design Studio in dark mode. The UI must contain bilingual text, Korean and English. Background #09090B, panels #18181B with 1px solid #27272A borders. Use Inter for UI text at 12px-14px and Fira Code for code blocks. Layout is a dense 3-column grid. Left column 300px: Brief Intake textarea and structured Stitch Prompt JSON editor. Center column 760px: scrollable area showing 3 generated UI variants stacked vertically, each with a #3B82F6 Select Variant button. Right column 380px: exported React code editor with syntax highlighting and Copy Code button. Professional, data-dense, developer-focused aesthetic.`,
  editorial: `Create a 1440px desktop web app for AI design review. Light mode with a calm, minimalist editorial aesthetic. Mix Korean and English text. Background #FDFCF8, card surfaces #F4F0EA, text #292524. Typography: Playfair Display for headings, Pretendard or sans-serif for body text at 15px-18px. Top: A 5-step progress indicator: Brief, Prompt, Variants, Review, Export. Center: a large horizontal scrolling carousel displaying 3 high-quality UI variant cards. Each card has 40px padding, subtle drop shadows, no borders, and a terracotta #E04F33 primary button labeled Approve & Export. Minimal UI chrome, focus entirely on generated designs.`,
  board: `Create a 1440px desktop spatial canvas UI for an AI design workflow, similar to FigJam or Miro. Bilingual text, Korean and English. Canvas background #F3F4F6. Typography: Space Grotesk. UI elements are floating white #FFFFFF panels with 12px border radius and soft large shadows. Left: floating toolbar panel 280px wide containing inputs for Design Brief and Generate button. Center canvas: 3 generated UI variant cards scattered organically like sticky notes, connected by curved dashed lines. Each variant has a bright purple #8B5CF6 Select button. Right: a green #10B981 dashed-border drop target labeled Export Zone. Playful, vibrant, interactive aesthetic.`
};

const state = {
  lang: 'ko'
};

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  if (queryLang === 'en' || queryLang === 'ko') return queryLang;
  const stored = localStorage.getItem('design-workflow-studio-lang');
  return stored === 'en' ? 'en' : 'ko';
}

function applyLanguage(lang) {
  state.lang = lang === 'en' ? 'en' : 'ko';
  const dict = i18n[state.lang];
  document.documentElement.lang = state.lang;
  document.title = dict.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', dict.pageDescription);

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key] !== undefined) node.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    if (dict[key] !== undefined) node.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
    const key = node.dataset.i18nAlt;
    if (dict[key] !== undefined) node.setAttribute('alt', dict[key]);
  });
  document.querySelectorAll('[data-lang-option]').forEach((button) => {
    const active = button.dataset.langOption === state.lang;
    button.setAttribute('aria-pressed', String(active));
  });
  localStorage.setItem('design-workflow-studio-lang', state.lang);
}

const toast = document.querySelector('.toast');
function showToast(message) {
  const dict = i18n[state.lang];
  toast.textContent = message || dict.copiedToast;
  toast.hidden = false;
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => { toast.hidden = true; }, 1800);
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch (error) {
    const area = document.createElement('textarea');
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    showToast(message);
  }
}

document.querySelectorAll('[data-scroll-to]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.scrollTo)?.scrollIntoView({ behavior: 'smooth' }));
});

document.querySelectorAll('[data-lang-option]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.langOption));
});

document.querySelectorAll('[role="tab"]').forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('[role="tab"]').forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
    document.querySelectorAll('[data-panel]').forEach((panel) => {
      const active = panel.dataset.panel === target;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
  });
});

document.querySelectorAll('.copy-prompt').forEach((button) => {
  button.addEventListener('click', () => copyText(prompts[button.dataset.prompt], i18n[state.lang].copyPromptToast));
});

document.getElementById('copy-template')?.addEventListener('click', () => {
  copyText(document.getElementById('template-text').innerText, i18n[state.lang].copyTemplateToast);
});

const header = document.querySelector('.site-header');
const elevate = () => header?.setAttribute('data-elevated', String(window.scrollY > 12));
window.addEventListener('scroll', elevate, { passive: true });
elevate();
applyLanguage(getInitialLanguage());
