# TrendPulse 2026: Global & K-Fashion Intelligence Dashboard

**TrendPulse 2026**은 인스타그램, 유튜브, 트위터, 넷플릭스, 보그(Vogue), WWD, Fashion Snoops 등 핵심 소셜 미디어와 패션 전문지의 데이터를 종합하여 글로벌 및 한국 패션 트렌드 동향을 실시간으로 분석·시각화해 주는 프리미엄 트렌드 인텔리전스 대시보드 프로그램입니다.

본 프로그램은 **설치가 필요 없는 웹 앱(Single-Page Application)**으로 개발되어, 복잡한 로컬 실행 환경(Node.js/Python 등) 설정 없이 웹 브라우저에서 `index.html` 파일을 더블 클릭하여 즉시 실행할 수 있으며, **GitHub Pages**를 통해 바로 웹 호스팅이 가능합니다.

---

## 🌟 주요 기능 (Key Features)

1. **종합 대시보드 (Overview Dashboard)**
   - 글로벌 트렌드 지수 및 K-패션 모멘텀 점수 시각화.
   - 2026 핵심 트렌드 리포트 요약.
   - Chart.js 기반 트렌드 추이 시각화 그래프.
   
2. **플랫폼별 분석 (Platform Pulse)**
   - **Vogue / WWD:** 하이 패션 컬렉션 및 비즈니스 인사이트 요약.
   - **Instagram / YouTube / Twitter:** 케이팝 아이돌 스타일 벡터, 숏폼 비주얼 트렌드 키워드, 해시태그 분석.
   - **Netflix:** 패션 영향도가 높은 인기 오리지널 시리즈 캐릭터의 착장 분석.
   - **Fashion Snoops:** 미래 패션 무드 및 실루엣 예측 키워드 연동.

3. **실시간 패션 피드 (Live Fashion RSS Feeds)**
   - 브라우저 수준에서 CORS 프록시를 통해 **Vogue Runway** 및 **WWD**의 최신 RSS 헤드라인 뉴스를 실시간으로 크롤링하여 노출.

4. **K-Fashion vs. Global Fashion 비교 (Trend Matrix)**
   - 글로벌 트렌드(정제된 맥시멀리즘, CBK 미니멀리즘 등)와 한국 트렌드(리퀴드 메탈릭, 테크웨어 등)를 상호 비교하고 겹쳐지는 교집합 분석.

5. **트렌드 시뮬레이터 (Forecast Tool)**
   - 사용자가 직접 패션 키워드를 검색하면 해당 단어의 인기도 점수, 플랫폼별 언급 비율, 매칭되는 무드 보드 추천을 즉시 계산해 주는 시뮬레이션 기능 탑재.

---

## 📂 폴더 구조 (Project Structure)

```
fashion-trend-pulse/
├── index.html        # 대시보드 레이아웃 및 뼈대 구조
├── style.css         # 프리미엄 럭셔리 글래스모피즘(Glassmorphism) 스타일 시트
├── app.js            # RSS 피드 크롤러, 차트 렌더러 및 사용자 인터랙션 스크립트
├── trends_seed.js    # 2026 트렌드 기본 데이터베이스 (Pre-seeded Database)
└── README.md         # 프로젝트 안내서
```

---

## 🚀 실행 방법 (How to Run)

### 1. 로컬에서 실행하기 (Local Run)
- 이 저장소를 다운로드 받거나 클론합니다.
- `index.html` 파일을 더블 클릭하여 웹 브라우저(Chrome, Safari, Edge 등)에서 즉시 실행합니다.
*팁: VS Code를 사용할 경우 'Live Server' 익스텐션으로 실행하면 실시간 개발 환경을 확인할 수 있습니다.*

### 2. GitHub Pages로 배포하기 (Deploying to GitHub)
이 프로젝트는 데이터베이스 파일과 에셋이 정적으로 작동하므로 GitHub Pages에서 즉시 배포할 수 있습니다:
1. GitHub 저장소(Repository)를 생성하고 코드를 업로드합니다.
2. 저장소의 `Settings` > `Pages`로 이동합니다.
3. Source를 **Deploy from a branch**로 선택하고 Branch를 **main** (또는 master) / **root**로 설정한 후 **Save**를 누릅니다.
4. 제공되는 URL을 통해 전세계 어디서든 웹으로 대시보드를 사용할 수 있습니다!

---

## 🎨 디자인 시스템 & 기술 스택 (Tech Stack)

- **Frontend Core:** HTML5, Modern Javascript (ES6+)
- **Styling:** Vanilla CSS (CSS variables, CSS Flexbox/Grid, Backdrop Filters, Custom Keyframes)
- **Charts:** Chart.js (CDN 연동)
- **Feeds API:** Vogue / WWD RSS XML parser via Allorigins CORS Proxy
- **Aesthetic Theme:** Dark Luxury Glassmorphism (오닉스 블랙, 일렉트릭 바이올렛, 네온 로즈의 조화)
- **Typography:** Google Fonts (Outfit, Inter)

---

## 📝 라이선스 (License)
이 프로젝트는 MIT License를 따릅니다. 상업적 및 비상업적으로 자유롭게 사용 및 수정이 가능합니다.
