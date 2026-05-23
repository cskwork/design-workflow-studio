# Design Workflow Studio

Stitch + Gemini CLI + Hermes Agent 기반의 전용 디자인 워크플로 허브입니다.

## 목적

- 앞으로 들어올 디자인 요청을 한 곳에서 관리
- 요청마다 3가지 디자인 방향을 비교
- Gemini 3.1 Pro로 UI 스펙 생성
- Stitch 프롬프트를 복사/재사용 가능하게 보관
- 선택된 방향을 HTML/React/Next.js 등으로 구현

## 구조

- `index.html`: 공개 사이트 메인 페이지
- `assets/styles.css`: 디자인 시스템과 레이아웃
- `assets/app.js`: 탭, 복사, 스크롤 인터랙션
- `requests/`: 향후 디자인 요청 브리프 저장 위치
- `designs/`: 향후 선택된 디자인 산출물 저장 위치
- `designs/stitch-run-001/`: Stitch MCP로 실제 생성한 첫 3개 시안의 원본 응답/메타데이터
- `assets/stitch-run-001/`: 실제 Stitch 스크린샷 PNG와 HTML 출력물

## 로컬 확인

```bash
open index.html
python3 -m http.server 4173
```

## 배포

GitHub Pages에서 `main` 브랜치의 root 디렉터리를 배포하면 됩니다.
