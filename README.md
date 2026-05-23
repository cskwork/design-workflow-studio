# Design Workflow Studio

Stitch MCP + Gemini CLI + Hermes Agent 기반의 전용 디자인 워크플로 허브입니다.

- Live site: https://cskwork.github.io/design-workflow-studio/
- Repository: https://github.com/cskwork/design-workflow-studio
- 기본 언어: 한국어
- 영어 호환: 상단 `KO / EN` 토글 및 `?lang=en`

## 목적

- 앞으로 들어올 디자인 요청을 한 곳에서 관리
- 요청마다 3가지 디자인 방향을 비교
- Gemini 3.1 Pro로 UI 스펙 생성
- Stitch MCP로 실제 디자인 시스템/화면 생성
- Stitch 프롬프트와 원본 응답을 복사/재사용 가능하게 보관
- 선택된 방향을 HTML/React/Next.js 등으로 구현

## 구조

- `index.html`: GitHub Pages 랜딩 페이지
- `assets/styles.css`: 디자인 시스템과 반응형 레이아웃
- `assets/app.js`: 언어 전환, 탭, 복사, 스크롤 인터랙션
- `requests/`: 향후 디자인 요청 브리프 저장 위치
- `designs/stitch-run-001/`: Stitch MCP로 실제 생성한 첫 3개 시안의 원본 응답/메타데이터
- `assets/stitch-run-001/`: 실제 Stitch 스크린샷 PNG와 HTML 출력물

## Stitch MCP provenance

- MCP 서버: `https://stitch.googleapis.com/mcp`
- Stitch project: `projects/15420315932607600576`
- Design system: `Adaptive Synthesis`
- Model: `GEMINI_3_1_PRO`
- Device: `DESKTOP`
- Output: 3 screenshots + 3 HTML files

## 로컬 확인

```bash
python3 -m http.server 4173
open http://127.0.0.1:4173/
open http://127.0.0.1:4173/?lang=en
```

## 배포

GitHub Pages에서 `main` 브랜치의 root 디렉터리를 배포하도록 운영합니다.
커밋/푸시는 사용자 승인 후 진행합니다.
