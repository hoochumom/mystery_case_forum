# 회사 컴퓨터에서 이어서 수정하는 방법

## 가장 쉬운 방법
1. 이 폴더 전체를 회사 컴퓨터로 옮깁니다.
2. `index.html`, `styles.css`, `script.js`, `write.html`, `write.js` 등을 수정합니다.
3. 필요하면 Vercel CLI로 다시 배포합니다.

## 권장 준비물
- Node.js
- Git
- Vercel CLI

## 프로젝트 핵심 파일
- `index.html`: 메인 페이지
- `write.html`: 사건 등록/수정 페이지
- `script.js`: 메인 게시판 로직
- `write.js`: 사건 등록/수정 로직
- `styles.css`: 전체 스타일
- `vercel.json`: Vercel 라우팅 설정

## 배포 명령 예시
PowerShell에서 프로젝트 폴더로 이동한 뒤:

```powershell
vercel --prod
```

## 참고
- 이 프로젝트는 현재 `localStorage` 기반이라 같은 브라우저/기기마다 데이터가 다를 수 있습니다.
- 여러 컴퓨터에서 같은 데이터를 공유하려면 나중에 Firebase나 DB 연동이 필요합니다.
