# Stitch run 001 — Design Workflow Studio

## 목적

`gabelul/stitch-kit`의 디자인 워크플로를 실제 Stitch MCP로 검증하기 위한 첫 생성 결과입니다.

## MCP 검증

- MCP 서버: `https://stitch.googleapis.com/mcp`
- 클라이언트 설정: Antigravity IDE user MCP 설정에 `stitch` 서버 등록 확인
- 인증: `gcloud auth print-access-token` 기반 Google OAuth 토큰 + `X-Goog-User-Project: claude-mcp-desktop-app`
- 확인된 Stitch MCP 도구 수: 14개

## 생성 결과

- Stitch project: `projects/15420315932607600576`
- 생성 모델: `GEMINI_3_1_PRO`
- 디바이스: `DESKTOP`
- 생성 화면: 3개

| 방향 | Screen ID | 스크린샷 | HTML |
|---|---|---|---|
| Pro Control Center | `07f1417d6dd94f1b82d2cfe0ea5d1fcb` | `../../assets/stitch-run-001/pro-control-center.png` | `../../assets/stitch-run-001/pro-control-center.html` |
| Editorial Gallery | `fd64b2f302bd46e5989140ca546d7f73` | `../../assets/stitch-run-001/editorial-gallery.png` | `../../assets/stitch-run-001/editorial-gallery.html` |
| Creative Board | `92bfa807014e4d67aedf6f7c81019590` | `../../assets/stitch-run-001/creative-board.png` | `../../assets/stitch-run-001/creative-board.html` |

## 보관 파일

- `create_project.json`: 프로젝트 생성 응답
- `generate_screen_from_text.json`: 3개 화면 생성 응답 원본
- `screens-manifest.json`: 사이트 반영용 정리 메타데이터
- `project_id.txt`: 숫자형 프로젝트 ID

## 다음 실험 후보

1. 가장 마음에 드는 방향을 선택한다.
2. Stitch `edit_screens` 또는 `generate_variants`로 해당 화면만 2차 개선한다.
3. 선택 화면의 HTML을 정리해 재사용 가능한 React/Next.js 컴포넌트로 변환한다.
