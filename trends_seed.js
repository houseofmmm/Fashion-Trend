// 2026 Fashion Trend Seed Database
const TREND_DATA = {
  lastUpdated: "2026-06-03T10:00:00+09:00",
  meta: {
    globalScoreAvg: 88,
    koreaScoreAvg: 93,
    overallSentiment: "Avant-Garde & Optimistic",
    dominantPlatform: "Instagram / TikTok"
  },
  
  // 글로벌 트렌드 데이터
  globalTrends: [
    {
      id: "refined-maximalism",
      name: "정제된 맥시멀리즘 (Refined Maximalism)",
      score: 94,
      status: "rising",
      change: "+6%",
      description: "과거의 단순한 미니멀리즘에서 탈피하여 의도적인 색상 매칭, 대담한 레이어링, 시선을 사로잡는 오버사이즈 실루엣을 활용한 개성 있는 하이엔드 룩입니다. 과장되지만 테일러링은 극도로 정밀합니다.",
      keywords: ["대담한 컬러 매치", "멀티 레이어링", "볼드 실루엣", "자카드 직물"],
      colorPalette: ["#FF2E93", "#8B5CF6", "#06B6D4"],
      colorNames: ["Neon Rose", "Electric Violet", "Chrome Cyan"],
      sources: ["Vogue Magazine", "WWD", "Instagram"]
    },
    {
      id: "oversized-accessories",
      name: "과장된 악세서리 & 브로치 (Extroverted Accessories)",
      score: 89,
      status: "stable",
      change: "+1%",
      description: "단순한 쥬얼리에서 벗어나 볼드하고 조각적인 수지(Resin) 뱅글, 입체적인 대형 귀걸이, 가방이나 팬츠 밑단 등에 자유롭게 배치하는 변칙적 브로치 연출법이 대세로 떠올랐습니다.",
      keywords: ["대형 브로치", "청키 레진 뱅글", "볼드 귀걸이", "메탈 포인트"],
      colorPalette: ["#F59E0B", "#D97706", "#FEE2E2"],
      colorNames: ["Amber Gold", "Burnt Orange", "Soft Off-White"],
      sources: ["Vogue Magazine", "Fashion Snoops", "Instagram"]
    },
    {
      id: "cbk-minimalism",
      name: "클래식 CBK 이펙트 (Carolyn Bessette-Kennedy Minimal)",
      score: 85,
      status: "stable",
      change: "-2%",
      description: "90년대 미니멀 패션의 전설 캐롤린 베셋 케네디(Carolyn Bessette-Kennedy)의 스타일에서 영감을 받은 클래식 룩입니다. 단순한 라인, 최고급 캐시미어, 헤어밴드와 직사각형 가죽 백이 특징입니다.",
      keywords: ["90년대 미니멀", "캐시미어 코트", "가죽 실린더 백", "폴리시 룩"],
      colorPalette: ["#18181B", "#71717A", "#E4E4E7"],
      colorNames: ["Obsidian Black", "Slate Gray", "Warm Pearl"],
      sources: ["WWD", "Vogue Magazine", "Twitter"]
    },
    {
      id: "grannycore-romantic",
      name: "낭만적 그래니코어 (Granny-Core Romanticism)",
      score: 82,
      status: "rising",
      change: "+4%",
      description: "빈티지하고 러블리한 감각이 융합된 트렌드입니다. 섬세한 자수, 니트 크로셰, 셔링과 볼륨 있는 소매, 플로럴 자카드 등으로 고풍적이면서도 현대적인 로맨티시즘을 나타냅니다.",
      keywords: ["플로럴 자수", "크로셰 니트", "러플 칼라", "셔링 스커트"],
      colorPalette: ["#F472B6", "#A7F3D0", "#FEF3C7"],
      colorNames: ["Vintage Pink", "Sage Green", "Warm Cream"],
      sources: ["Fashion Snoops", "Instagram", "Pinterest"]
    }
  ],

  // 한국 트렌드 데이터
  koreanTrends: [
    {
      id: "k-pop-chrome",
      name: "K-Pop 크롬 & 리퀴드 메탈릭 (Liquid Metallics)",
      score: 97,
      status: "rising",
      change: "+9%",
      description: "아이돌 무대 의상에서 시작되어 리테일 시장으로 확산된 트렌드입니다. 젖은 듯 반짝이는 은빛 몰텐(Molten) 실버 직물, 크롬 마감 아우터, 홀로그래픽 오버레이가 첨단 디지털 스크린 속 매력을 배가시킵니다.",
      keywords: ["몰텐 실버", "크롬 블루종", "홀로그램 텍스처", "미러링 레더"],
      colorPalette: ["#E2E8F0", "#06B6D4", "#FF2E93"],
      colorNames: ["Liquid Chrome", "Digital Cyan", "Cyber Pink"],
      sources: ["YouTube", "Instagram", "WWD"]
    },
    {
      id: "cyber-noir-tech",
      name: "사이버 느와르 테크웨어 (Cyber-Noir Tech-wear)",
      score: 92,
      status: "rising",
      change: "+5%",
      description: "서울의 스트릿 감성과 아웃도어 기능성이 결합한 형태입니다. 실용적인 멀티 포켓, 탈부착 버클 스트랩, 반사 리플렉터 소재를 갖추면서도 시크한 블레이저나 테일러드 핏 팬츠와 레이어드합니다.",
      keywords: ["탈부착 포켓", "카고 스트랩 팬츠", "블랙 리플렉터", "하이브리드 자켓"],
      colorPalette: ["#09090B", "#27272A", "#8B5CF6"],
      colorNames: ["Onyx Black", "Carbon Gray", "Tech Purple"],
      sources: ["Instagram", "Fashion Snoops", "Twitter"]
    },
    {
      id: "genderfluid-tailoring",
      name: "젠더플루이드 테일러링 (Gender-Fluid Tailoring)",
      score: 91,
      status: "stable",
      change: "+3%",
      description: "성별의 경계를 허무는 한국 패션계의 지향점이 고스란히 반영되었습니다. 남성용 크롭 블레이저, 레이스 초커와 진주 목걸이를 활용한 수트 스타일링, 루즈한 드레이프 스커트 바지가 트렌드입니다.",
      keywords: ["크롭 수트", "진주 초커 스타일", "드레이프 실루엣", "와이드 배기팬츠"],
      colorPalette: ["#F4F4F5", "#A1A1AA", "#3F3F46"],
      colorNames: ["Alabaster White", "Warm Gray", "Charcoal Gray"],
      sources: ["WWD", "Vogue Magazine", "YouTube"]
    },
    {
      id: "eco-futurism",
      name: "에코 퓨처리즘 & 비건 레더 (Eco-Futurism)",
      score: 88,
      status: "rising",
      change: "+7%",
      description: "친환경 신소재가 트렌디한 디자인과 결합했습니다. 버섯 가죽(Mycelium Leather), 선인장 비건 레더, 리사이클링 나일론을 입체적이고 조각적인 아방가르드 아우터에 적용한 미래지향적 친환경 스타일입니다.",
      keywords: ["버섯 균사체 가죽", "리사이클 나일론", "비건 레더 쉴드", "에코 아방가르드"],
      colorPalette: ["#10B981", "#059669", "#E0F2FE"],
      colorNames: ["Mint Bio", "Deep Emerald", "Sky Blue Glow"],
      sources: ["Fashion Snoops", "Instagram", "WWD"]
    }
  ],

  // 플랫폼별 세부 분석
  platformSpecifics: {
    vogue: {
      platformName: "VOGUE MAGAZINE",
      reliability: "High (오피니언 리더)",
      summary: "올해 런웨이는 ‘절제된 광기(Controlled Chaos)’로 묘사됩니다. 미니멀한 실루엣에 화려한 스팽글이나 오버사이즈 주얼리로 극적인 대비를 이룹니다.",
      feed: [
        { title: "2026 F/W 런웨이를 수놓은 대담한 리퀴드 텍스처 분석", date: "2026-05-28" },
        { title: "헤리티지 브로치가 바지 밑단으로 내려간 이유", date: "2026-05-20" },
        { title: "캐롤린 베셋 케네디가 정의한 영원한 하이패션 핏의 귀환", date: "2026-05-15" }
      ]
    },
    wwd: {
      platformName: "WWD (Women's Wear Daily)",
      reliability: "High (비즈니스 및 유통)",
      summary: "글로벌 명품 유통 시장에서 한국 스트릿 브랜드들의 영향력이 사상 최고치에 달했습니다. 젠더리스 제품 라인의 발주 비중이 글로벌 리테일러 매장에서 전년 대비 32% 상승했습니다.",
      feed: [
        { title: "글로벌 바이어들이 가장 주목하는 서울 패션 브랜드 TOP 5", date: "2026-06-01" },
        { title: "리사이클 바이오 신소재 시장의 연평균 성장률 40% 돌파", date: "2026-05-25" },
        { title: "명품 하우스의 타겟 전환: 젠더리스 액티브웨어 강화", date: "2026-05-18" }
      ]
    },
    fashionSnoops: {
      platformName: "FASHION SNOOPS",
      reliability: "Very High (트렌드 예측 연구소)",
      summary: "2026 컬러 키워드는 '초자연적 인공(Hyper-Natural Synthetics)'입니다. 자연물(모래, 민트)을 닮았으나 광택 처리를 통해 인공적인 디지털 필터 효과를 부여한 색상이 대세를 이룰 것입니다.",
      feed: [
        { title: "Color Forecast: 하이퍼 네추럴 파스텔의 도래", date: "2026-05-30" },
        { title: "Material Forecast: 금속성 액체 효과의 합성 원단 트렌드", date: "2026-05-22" },
        { title: "Silhouette Forecast: 입체 가변형(Modular) 변형 블레이저", date: "2026-05-10" }
      ]
    },
    instagram: {
      platformName: "INSTAGRAM",
      reliability: "Medium (인플루언서 및 비주얼 바이럴)",
      summary: "한국 및 아시아권 패션 인플루언서 피드는 온통 크롬 바이크 쇼츠와 금속 장식이 가미된 슬링백 슈즈로 장식되고 있습니다. 해시태그 #KFashion의 노출 수가 4.5억 회를 돌파했습니다.",
      tags: ["#RefinedMaximalism", "#KFashionPulse", "#Metallics", "#StreetSeoul2026"],
      posts: [
        { author: "@seoul_streetstyle", text: "성수동에서 발견한 몰텐 실버 크롬 아우터 & 오버사이즈 크로셰 조합 🌪️✨", likes: "12.4K" },
        { author: "@hyein_style", text: "Vogue 2026 트렌드 키워드인 볼드 브로치를 가방 끈에 가득 얹어보기 📎🌸", likes: "8.9K" },
        { author: "@global_curator", text: "Is minimalism really dead? Bold colors are taking over Paris this week 🥐🎨", likes: "24.1K" }
      ]
    },
    youtube: {
      platformName: "YOUTUBE",
      reliability: "Medium (아이돌 비디오 콘텐츠 분석)",
      summary: "K-Pop 아이돌의 뮤직비디오 패션 분석 및 룩북 콘텐츠가 20~30대 타겟 패션 가이드의 핵심이 되었습니다. 사이버 느와르 느낌의 테크 에센셜 코디 영상의 평균 조회수가 급증했습니다.",
      videos: [
        { title: "2026 에스파(aespa) 뮤비 속 크롬 메탈릭 룩 정보 털어드림 💿", views: "345K", channel: "패션정보통" },
        { title: "남자도 스커트 바지를? 2026 젠더플루이드 리얼웨이 도전기 👔", views: "128K", channel: "스타일마스터" },
        { title: "실패 없는 정제된 맥시멀리즘 컬러 조합 공식 3가지 🎨", views: "210K", channel: "ColorLab" }
      ]
    },
    twitter: {
      platformName: "TWITTER (X)",
      reliability: "Medium-Low (실시간 팬덤 바이럴 & 화제성)",
      summary: "공항 패션과 패션쇼 참석 차 출국하는 아이돌들의 의상 실시간 트윗량이 패션 지표의 선행 지표 역할을 합니다. 트위터 내 '진주 초커', '크롭 블레이저' 키워드가 글로벌 트렌딩 키워드로 연달아 등록되었습니다.",
      trends: [
        { hashtag: "아이돌 공항패션", tweets: "189K tweets", sentiment: "Highly Positive" },
        { hashtag: "LiquidSilver", tweets: "87K tweets", sentiment: "Excited" },
        { hashtag: "젠더리스수트", tweets: "54K tweets", sentiment: "Neutral" }
      ]
    },
    netflix: {
      platformName: "NETFLIX",
      reliability: "Medium (미디어 기반 코스튬 영향력)",
      summary: "최신 흥행 오리지널 시리즈들의 독창적인 커스튬이 MZ세대 패션의 핵심 인스피레이션입니다. 레트로 트레이닝 셋업과 파리지앵 맥시멀 클래식 룩이 실질적 패션 매출로 환산되고 있습니다.",
      influence: [
        { show: "오징어 게임 시즌 2", style: "레트로 스포티 아크틱 (Retro Sporty Arctic)", impact: "체육복 스타일 트랙수트 및 그린/골드 바이럴 컬러 패치 유행 (+45% 쉘웨어 판매 증가)" },
        { show: "에밀리, 파리에 가다 시즌 5", style: "글래머 네오 맥시멀리즘 (Glamour Neo-Maximalism)", impact: "어깨 볼륨이 강조된 트위드 코트와 화려한 패턴 베레모 수요 급증 (+30% 프랑스풍 잡화 판매)" },
        { show: "사이버 펑크 신작 시리즈", style: "테크니컬 유틸리티 느와르 (Technical Utility Noir)", impact: "택티컬 베스트와 하네스 장식, 블랙 하이브리드 아우터의 일상 패션 편입" }
      ]
    }
  }
};
