여기는 Stitch MCP 인증 없이 프롬프트 전용 모드로 `gabelul/stitch-kit`을 테스트하기 위한 UI/UX 디자인 명세서입니다.

### 1. 워크플로우 요약 (Workflow Summary)
*   **Brief Intake (브리프 입력):** 사용자가 프로젝트 목표, 타겟 고객, 필수 요구사항을 텍스트로 입력합니다.
*   **Prompt Generation (Stitch 프롬프트 생성):** AI가 입력된 브리프를 Stitch가 이해할 수 있는 구체적인 구조화 프롬프트(JSON/Text)로 변환합니다.
*   **3 Variants (3가지 시각적 변형 생성):** 변환된 프롬프트를 바탕으로 서로 다른 레이아웃과 스타일을 가진 3개의 UI 시안이 화면에 렌더링됩니다.
*   **Review & Selection (리뷰 및 선택):** 사용자가 3개의 시안을 비교 검토하고, 가장 적합한 하나의 시안을 채택하거나 세부 조정을 지시합니다.
*   **Export (코드 추출 및 내보내기):** 최종 선택된 디자인을 React/Next.js 기반의 프론트엔드 코드로 변환하여 다운로드하거나 클립보드에 복사합니다.

---

### 2. 세 가지 디자인 방향성 (Three Design Directions)

#### A. 전문가용 컨트롤 센터 (pro-control-center)
*   **Stance (기조):** 데이터 밀도가 높은 다중 패널 동시 제어, 극대화된 효율성 및 전문성
*   **Target User (타겟 유저):** 시니어 프로덕트 디자이너, 디자인 엔지니어, AI 프롬프트 엔지니어
*   **Palette (팔레트):** 다크 모드 기반. Background `#09090B`, Panel `#18181B`, Border `#27272A`, Accent `#3B82F6` (Blue), Text `#A1A1AA` (Muted) & `#FAFAFA` (Primary)
*   **Typography (타이포그래피):** Inter (UI Base), Fira Code (코드 및 프롬프트 에디터용 모노스페이스), 12px~14px 중심의 촘촘한 사이즈
*   **Layout (레이아웃):** 화면을 꽉 채우는 3단 컬럼 그리드 (좌측: 브리프 및 프롬프트 에디터 / 중앙: 3개의 변형 시안 세로 배열 / 우측: 속성 패널 및 Export 코드 뷰어)
*   **Core components (핵심 컴포넌트):** 리사이징 가능한 Splitter 패널, 구문 강조(Syntax highlighting)가 적용된 코드 에디터, 토글 스위치, 밀도 높은 데이터 테이블
*   **One interaction (핵심 인터랙션):** 중앙의 Variant 시안에 마우스를 호버하면, 우측 패널의 생성된 코드 블록에서 해당 컴포넌트 코드가 하이라이트 됩니다.
*   **Stitch prompt (복사형 프롬프트):**
    ```text
    Create a 1440px desktop web app dashboard for an AI Design Studio in dark mode. The UI must contain bilingual text (Korean and English). Background `#09090B`, panels `#18181B` with 1px solid `#27272A` borders. Use Inter for UI text (12px-14px) and Fira Code for code blocks. Layout is a dense 3-column grid. Left column (300px width): 'Brief Intake' textarea and a structured 'Stitch Prompt' JSON editor. Center column (760px width): Scrollable area showing 3 generated UI variants stacked vertically, each with a `#3B82F6` 'Select Variant' button. Right column (380px width): A code editor showing exported React code with syntax highlighting and a 'Copy Code' button. Professional, data-dense, developer-focused aesthetic.
    ```

#### B. 에디토리얼 갤러리 (editorial-gallery)
*   **Stance (기조):** 여백의 미, 시각적 집중, 미니멀리즘, 차분하고 감각적인 검토 환경
*   **Target User (타겟 유저):** 크리에이티브 디렉터, 프로덕트 매니저, 클라이언트
*   **Palette (팔레트):** 웜 라이트 모드. Background `#FDFCF8`, Surface `#F4F0EA`, Accent `#E04F33` (Terra Cotta), Text `#292524` (Dark Brown)
*   **Typography (타이포그래피):** Playfair Display (영문 헤딩), Pretendard (본문 및 한글 헤딩), 15px~18px 중심, 1.6 이상의 넉넉한 줄간격
*   **Layout (레이아웃):** 상단 진행률 바(Progress steps) + 중앙 집중형 1단 가로 스크롤 레이아웃 (Carousel 형태로 3개의 시안을 큼직하게 배치)
*   **Core components (핵심 컴포넌트):** 넉넉한 패딩(40px)과 부드러운 그림자를 가진 대형 이미지 카드, 타이포그래피 중심의 입력 폼, 화면 하단의 플로팅 액션 바(Floating Action Bar), 단계별 스텝퍼(Stepper)
*   **One interaction (핵심 인터랙션):** 가로 스크롤 시 각 Variant 카드가 화면 중앙에 부드럽게 스냅(Snap)되며, 선택 시 하단에서 'Export to Code' 플로팅 바가 페이드인 됩니다.
*   **Stitch prompt (복사형 프롬프트):**
    ```text
    Create a 1440px desktop web app for AI design review. Light mode with a calm, minimalist editorial aesthetic. Mix Korean and English text. Background `#FDFCF8`, card surfaces `#F4F0EA`, text `#292524`. Typography: Playfair Display for headings, Pretendard/sans-serif for body text (15px-18px). Top: A 5-step progress indicator (Brief -> Prompt -> Variants -> Review -> Export). Center: A large horizontal scrolling carousel displaying 3 high-quality UI variant cards. Each card has 40px padding, subtle drop shadows, no borders, and a beautiful terracotta `#E04F33` primary button labeled 'Approve & Export'. Minimal UI chrome, focus entirely on the generated designs.
    ```

#### C. 크리에이티브 보드 (creative-board)
*   **Stance (기조):** 무한 캔버스, 자유로운 실험, 드래그 앤 드롭, 생동감 넘치는 시각화
*   **Target User (타겟 유저):** 주니어 디자이너, 마케팅 크리에이터, 기획자
*   **Palette (팔레트):** 밝고 경쾌한 캔버스 모드. Canvas Background `#F3F4F6`, Panels `#FFFFFF`, Accent `#8B5CF6` (Vibrant Purple), Success `#10B981` (Green), Text `#111827`
*   **Typography (타이포그래피):** Space Grotesk (디스플레이용), Nunito 또는 둥근 고딕체 (본문용), 시각적으로 둥글고 친근한 폰트
*   **Layout (레이아웃):** 피그잼(FigJam) 스타일의 공간적(Spatial) 무한 캔버스. 좌측에는 브리프 입력을 위한 플로팅 툴바, 캔버스 중앙에는 포스트잇처럼 흩뿌려진 3개의 시안 노드, 우측에는 Export 영역 배치
*   **Core components (핵심 컴포넌트):** 드래그 가능한 카드 노드, 시안 간의 연결을 보여주는 컬러풀한 곡선 화살표, Corner radius 12px 이상의 둥근 패널과 큼직한 버튼
*   **One interaction (핵심 인터랙션):** 사용자가 마음에 드는 Variant 카드를 마우스로 드래그하여 우측의 'Export Zone'에 드롭하면, 화려한 폭죽 애니메이션과 함께 코드 생성이 시작됩니다.
*   **Stitch prompt (복사형 프롬프트):**
    ```text
    Create a 1440px desktop spatial canvas UI for an AI design workflow, similar to FigJam or Miro. Bilingual text (Korean and English). Canvas background `#F3F4F6`. Typography: Space Grotesk. UI elements are floating white `#FFFFFF` panels with 12px border radius and soft, large shadows. Left: A floating toolbar panel (280px wide) containing inputs for a 'Design Brief' and 'Generate' button. Center canvas: 3 generated UI variant cards scattered organically like sticky notes, connected by curved dashed lines. Each variant has a bright purple `#8B5CF6` 'Select' button. Right: A green `#10B981` dashed-border drop target labeled 'Export Zone'. Playful, vibrant, and interactive aesthetic.
    ```

---

### 3. 추천 (Recommendation)

*   **시작 방향성:** **A. 전문가용 컨트롤 센터 (pro-control-center)**
*   **추천 이유:** 프롬프트 전용 모드로 Stitch-kit의 생성 및 레이아웃 처리 능력을 가장 확실하게 스트레스 테스트(Stress-test)할 수 있는 방향입니다. 브리프(일반 텍스트), 프롬프트(JSON 구조), 생성된 UI 이미지 3장, 그리고 내보내진 코드(복잡한 모노스페이스 텍스트)라는 이질적이고 밀도 높은 데이터 타입들을 한 화면(1440px) 안에서 얼마나 논리적이고 깔끔하게 배치하는지 검증하기에 최적화되어 있습니다.
