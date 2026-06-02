# zip² — 공동 시각예술 포트폴리오

여선주 · 차시은 · 김세아 · 주현완 팀(zip²)의 포트폴리오 사이트입니다.
흰 배경 + 미니멀 그리드 조판, 폰트는 Pretendard로 한글·영문 통일.

## 사이트 구조
- zip² (헤더 로고) = 홈 버튼 → index.html
- 작가 정보 → CV (about.html)
- 작가 포트폴리오 → 여선주 / 차시은 / 김세아 / 주현완
- 프로젝트 → 빈집 털기 기획서 (project.html)

portfolio/
├── index.html
├── about.html          (작가 정보 / CV)
├── project.html        (프로젝트 / 빈집 털기 기획서)
├── css/style.css
├── js/main.js
└── artists/
    ├── artist-a.html   (여선주)
    ├── artist-b.html   (차시은)
    ├── artist-c.html   (김세아)
    └── artist-d.html   (주현완)

## VS Code 에서 보기
1. portfolio 폴더 열기
2. Live Server 확장 설치
3. index.html 우클릭 → Open with Live Server (또는 더블클릭)

## 내용 교체
- 사진: <img src="..."> 주소 교체
- 영상: <iframe src="https://www.youtube.com/embed/영상ID"> ID 교체
- 메뉴 추가: 각 페이지 <nav class="nav"> 안 dropdown에 <li><a href>...</a></li> 추가

## 폰트 / 색상
css/style.css 상단 :root 변수만 수정하면 전체 반영.
--font: "Pretendard", -apple-system, sans-serif;
