const STORAGE_KEYS = {
  users: "shadowArchiveUsers",
  session: "shadowArchiveSession",
  posts: "shadowArchivePosts",
  comments: "shadowArchiveComments",
  anonymousId: "shadowArchiveAnonymousId",
};

const CURATED_POSTS = [
  {
    id: "case-lee-hyung-ho",
    title: "이형호 유괴 살해 사건",
    clue: "43일간 이어진 협박 전화와 몸값 요구, 끝내 풀리지 않은 진범",
    content:
      "1991년 서울 압구정동에서 초등학생 이형호 군이 유괴된 뒤, 범인은 여러 차례 전화를 걸어 거액의 몸값을 요구했습니다.\n수사기관은 음성 분석과 잠복 수사를 병행했지만 범인을 특정하지 못했고, 아이는 실종 후 오랜 시간이 지난 뒤 숨진 채 발견됐습니다.\n치밀한 통화 계획과 현장 흔적 부족 때문에 지금까지도 대표적인 국내 미제 사건으로 회자됩니다.",
    type: "국내 범죄",
    status: "미해결",
    reality: "실제",
    authorUsername: "admin",
    authorNickname: "관리자",
    createdAt: "2026-04-11T12:20:00.000Z",
    likes: [],
    sourceUrl: "https://namu.wiki/w/%EC%9D%B4%ED%98%95%ED%98%B8%20%EC%9C%A0%EA%B4%B4%20%EC%82%B4%ED%95%B4%20%EC%82%AC%EA%B1%B4",
    visualTheme: "theme-domestic-crime",
    issuePoints: [
      "범인의 협박 전화 패턴과 전달 지시 변경이 어떤 의도를 가졌는지",
      "현장 단서 부족이 계획범의 특성인지 수사 누락의 결과인지",
      "당시 수사기법으로 놓친 음성·동선 분석 포인트가 무엇이었는지",
    ],
    analysisPrompts: [
      "통화 시점별 요구 조건 변화가 범인의 심리와 어떤 관련이 있는지 정리해 보세요.",
      "몸값 전달 지점의 위치를 기준으로 범인의 생활권을 추정해 보세요.",
      "언론 보도가 수사 방향에 어떤 영향을 줬는지 검토해 보세요.",
    ],
    opsSummary:
      "협박 전화의 반복성과 전달 지점 변화가 이 사건의 핵심입니다. 당시 기술로는 한계가 있었지만, 지금 시점에서는 통화 패턴과 범행 동선 재구성이 가장 중요한 분석축으로 보입니다.",
    timeline: [
      "1991년 서울에서 이형호 군 유괴 발생",
      "범인이 수차례 몸값과 전달 조건을 바꾸며 전화",
      "수사기관이 잠복과 추적을 병행했으나 범인 특정 실패",
      "실종 후 상당 시간이 지나 숨진 채 발견",
    ],
    relatedCases: ["개구리소년 실종 사건", "이춘재 연쇄살인 사건", "블랙 달리아 사건"],
  },
  {
    id: "case-frog-boys",
    title: "개구리소년 실종 사건",
    clue: "다섯 아이가 집을 나선 뒤 사라졌고, 오랜 세월 뒤 야산에서 유해로 발견된 사건",
    content:
      "1991년 대구에서 다섯 명의 초등학생이 와룡산으로 간다고 나선 뒤 돌아오지 않았고, 당시에는 단순 가출이나 길 잃음 가능성도 함께 거론됐습니다.\n그러나 수색이 장기화되면서 납치와 타살 가능성이 꾸준히 제기됐고, 11년 뒤 유해가 발견되면서 사건은 더 큰 충격을 남겼습니다.\n발견 당시의 위치, 유류품 상태, 수사 초기 대응을 둘러싼 의문이 많아 지금도 한국 사회에서 상징적인 장기 미제 사건으로 남아 있습니다.",
    type: "국내 범죄",
    status: "미해결",
    reality: "실제",
    authorUsername: "admin",
    authorNickname: "관리자",
    createdAt: "2026-04-10T20:10:00.000Z",
    likes: [],
    sourceUrl: "https://namu.wiki/w/%EA%B0%9C%EA%B5%AC%EB%A6%AC%20%EC%86%8C%EB%85%84%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    visualTheme: "theme-domestic-crime",
    issuePoints: [
      "초기 실종 판단과 수사 전환 시점이 적절했는지",
      "유해 발견 위치가 당시 수색 범위와 어떻게 어긋났는지",
      "타살 가능성과 사고 가능성 중 어느 쪽 단서가 더 강한지",
    ],
    analysisPrompts: [
      "실종 당일 아이들의 이동 동선을 시간순으로 다시 배열해 보세요.",
      "발견 지점의 지형 특성이 은폐나 사고 설명에 어떤 영향을 주는지 검토해 보세요.",
      "초동수사 단계에서 빠졌다고 여겨지는 조치를 정리해 보세요.",
    ],
    opsSummary:
      "이 사건은 단순 실종 판단이 얼마나 큰 시간을 잃게 만드는지 보여줍니다. 초동 대응, 장기 수색, 유해 발견 후 재해석까지 단계마다 논쟁 포인트가 분명한 사건입니다.",
    timeline: [
      "1991년 대구에서 다섯 명의 초등학생 실종",
      "장기간 수색과 공개 제보가 이어짐",
      "장시간 사건 미해결 상태 유지",
      "2002년 와룡산에서 유해 발견 후 의문 재점화",
    ],
    relatedCases: ["이형호 유괴 살해 사건", "이춘재 연쇄살인 사건", "타만 슈드 사건"],
  },
  {
    id: "case-dyatlov",
    title: "디아틀로프 고개 사건",
    clue: "텐트가 안쪽에서 찢긴 채 발견됐고, 등산대원 9명이 혹한 속에서 흩어져 숨진 사건",
    content:
      "1959년 소련 우랄산맥에서 경험 많은 대학생 등반대가 야영 도중 갑작스럽게 텐트를 떠난 흔적이 발견됐습니다.\n대원들은 충분한 방한 장비 없이 눈밭과 숲 쪽으로 이동한 상태로 차례로 발견됐고, 일부는 저체온증 외에 강한 외상을 입고 있었습니다.\n자연재해, 군사 실험, 집단 공황 등 수많은 가설이 제기됐지만 사건 정황의 기이함 때문에 지금도 세계적인 미스터리 사건으로 자주 언급됩니다.",
    type: "해외 이상현상",
    status: "부분 해결",
    reality: "실제",
    authorUsername: "admin",
    authorNickname: "관리자",
    createdAt: "2026-04-09T18:00:00.000Z",
    likes: [],
    sourceUrl: "https://namu.wiki/w/%EB%94%94%EC%95%84%ED%8B%80%EB%A1%9C%ED%94%84%20%EA%B3%A0%EA%B0%9C%20%EC%82%AC%EA%B1%B4",
    visualTheme: "theme-overseas-anomaly",
    issuePoints: [
      "텐트 절개와 대원들의 이동 방향이 어떤 비상 상황을 뜻하는지",
      "저체온증 외 외상이 자연 환경만으로 설명 가능한지",
      "후대 조사 결과가 초기 음모론을 얼마나 해소했는지",
    ],
    analysisPrompts: [
      "대원 발견 위치를 기준으로 마지막 행동 순서를 가정해 보세요.",
      "자연재해 가설과 인위적 개입 가설의 강점·약점을 비교해 보세요.",
      "당시 수색 기록에서 해석이 갈리는 부분을 골라 보세요.",
    ],
    opsSummary:
      "이 사건은 한 장면씩 보면 설명 가능해 보이지만, 전체를 연결하면 다시 미스터리해지는 구조를 가집니다. 그래서 타임라인 재배치와 행동 순서 가정이 핵심 분석 도구가 됩니다.",
    timeline: [
      "1959년 대학생 등반대가 우랄산맥 원정 시작",
      "야영 도중 텐트가 안쪽에서 찢긴 흔적 발견",
      "대원들이 눈밭과 숲에서 차례로 발견",
      "후대 조사에서 자연재해설이 재부상",
    ],
    relatedCases: ["타만 슈드 사건", "버뮤다 삼각지대", "메리 셀레스트호 사건"],
  },
  {
    id: "case-black-dahlia",
    title: "블랙 달리아 사건",
    clue: "할리우드 지망생의 잔혹한 시신 훼손과 미궁에 빠진 수사",
    content:
      "1947년 미국 로스앤젤레스에서 엘리자베스 쇼트의 시신이 심하게 훼손된 상태로 발견되면서 전국적인 충격을 일으켰습니다.\n사건의 잔혹성, 언론 보도의 과열, 수많은 자백과 용의자 난립이 겹치면서 오히려 핵심 단서 정리가 더 어려워졌습니다.\n시간이 흐를수록 전설과 추측이 덧붙었지만, 공식적으로는 끝내 범인이 특정되지 않아 미국 범죄사에서 가장 유명한 미제 사건 중 하나로 남았습니다.",
    type: "해외 범죄",
    status: "미해결",
    reality: "실제",
    authorUsername: "admin",
    authorNickname: "관리자",
    createdAt: "2026-04-08T17:00:00.000Z",
    likes: [],
    sourceUrl: "https://namu.wiki/w/%EB%B8%94%EB%9E%99%20%EB%8B%AC%EB%A6%AC%EC%95%84",
    visualTheme: "theme-overseas-crime",
    issuePoints: [
      "과도한 언론 보도가 수사 정보를 오염시켰는지",
      "자백자와 용의자 난립이 실제 수사에 어떤 혼선을 줬는지",
      "시신 훼손 방식이 범인의 배경을 얼마나 드러내는지",
    ],
    analysisPrompts: [
      "당시 보도와 공식 수사 발표 사이의 차이를 구분해 보세요.",
      "반복적으로 등장하는 용의자 유형을 비교해 보세요.",
      "도시 환경과 범행 노출 위험을 기준으로 범인의 행동 반경을 추정해 보세요.",
    ],
    opsSummary:
      "블랙 달리아 사건은 범행 잔혹성만큼이나 언론 환경이 사건 해석을 왜곡한 대표 사례입니다. 실제 수사와 대중 서사를 분리해서 보는 것이 중요합니다.",
    timeline: [
      "1947년 로스앤젤레스에서 시신 발견",
      "언론이 사건을 대대적으로 보도하며 별칭 확산",
      "수많은 자백자와 용의자가 등장",
      "끝내 공식 범인 특정 없이 미제 사건으로 남음",
    ],
    relatedCases: ["이형호 유괴 살해 사건", "이춘재 연쇄살인 사건", "타만 슈드 사건"],
  },
  {
    id: "case-lee-choon-jae",
    title: "이춘재 연쇄살인 사건",
    clue: "장기간 지역 사회를 공포에 몰아넣었던 연쇄범죄와 뒤늦은 자백",
    content:
      "1980년대 후반부터 경기도 일대에서 여성들을 상대로 한 연쇄 살인 사건이 이어지면서 전국적인 공포가 확산됐습니다.\n당시 수사력 한계와 잘못된 용의선상 설정으로 장기간 미제처럼 남았고, 사건은 대중문화와 괴담에도 큰 영향을 남겼습니다.\n훗날 이춘재의 자백과 재수사로 여러 사실이 드러났지만, 초기 수사의 오류와 장기 미제의 상징성 때문에 여전히 한국 범죄사에서 매우 중요한 사건으로 다뤄집니다.",
    type: "국내 범죄",
    status: "부분 해결",
    reality: "실제",
    authorUsername: "admin",
    authorNickname: "관리자",
    createdAt: "2026-04-07T13:00:00.000Z",
    likes: [],
    sourceUrl: "https://namu.wiki/w/%EC%9D%B4%EC%B6%98%EC%9E%AC%20%EC%97%B0%EC%87%84%EC%82%B4%EC%9D%B8%20%EC%82%AC%EA%B1%B4",
    visualTheme: "theme-domestic-crime",
    issuePoints: [
      "당시 연쇄범죄 수사 체계의 한계가 무엇이었는지",
      "잘못된 수사와 오판이 어떤 2차 피해를 낳았는지",
      "뒤늦은 자백 이후에도 남는 공백이 무엇인지",
    ],
    analysisPrompts: [
      "초기 사건별 공통점을 기준으로 수사 방식의 강점과 약점을 정리해 보세요.",
      "후속 재수사에서 새롭게 확인된 사실이 무엇인지 비교해 보세요.",
      "장기 미제가 사회 공포에 어떤 방식으로 각인됐는지 생각해 보세요.",
    ],
    opsSummary:
      "장기 미제로 기억되던 사건이 뒤늦게 큰 전환점을 맞았지만, 동시에 초창기 수사의 허점도 크게 드러난 사례입니다. 해결과 미해결의 층위가 함께 존재합니다.",
    timeline: [
      "1980년대 후반부터 경기 남부 일대 연쇄 살인 발생",
      "장기간 범인 특정 실패와 사회적 공포 확산",
      "오랜 시간이 지난 뒤 이춘재 자백",
      "재수사와 재심 과정에서 초기 수사 오류 재조명",
    ],
    relatedCases: ["개구리소년 실종 사건", "이형호 유괴 살해 사건", "블랙 달리아 사건"],
  },
  {
    id: "case-taman-shud",
    title: "타만 슈드 사건",
    clue: "정체불명의 남성과 암호처럼 여겨진 종이 조각, 오랫동안 밝혀지지 않은 신원",
    content:
      "1948년 호주 애들레이드 해변에서 신원이 확인되지 않은 남성이 숨진 채 발견됐고, 그의 주머니와 소지품에서는 출처를 알 수 없는 단서들이 나왔습니다.\n특히 '타만 슈드' 문구가 적힌 종이 조각과 수첩 속의 문자 배열은 암호, 첩보 활동, 독살설 등 다양한 추측을 낳았습니다.\n시간이 지나며 과학수사로 일부 실마리가 보강됐지만, 사건의 전체 맥락과 당시 행적은 오랫동안 세계적 미스터리로 남아 있었습니다.",
    type: "해외 이상현상",
    status: "부분 해결",
    reality: "실제",
    authorUsername: "admin",
    authorNickname: "관리자",
    createdAt: "2026-04-06T12:00:00.000Z",
    likes: [],
    sourceUrl: "https://namu.wiki/w/%ED%83%80%EB%A7%8C%20%EC%88%8C%EB%93%9C%20%EC%82%AC%EA%B1%B4",
    visualTheme: "theme-overseas-anomaly",
    issuePoints: [
      "신원 미확인 상태가 왜 오랫동안 유지됐는지",
      "종이 조각과 메모의 의미가 실제 핵심 단서인지",
      "첩보설·독살설 같은 가설이 어디서 힘을 얻었는지",
    ],
    analysisPrompts: [
      "소지품 목록 중 사건 서사에 가장 큰 영향을 준 단서를 골라 보세요.",
      "신원 확인 지연의 원인을 시대적 한계와 연결해 보세요.",
      "후대 과학수사 결과가 무엇을 해결했고 무엇을 못 했는지 정리해 보세요.",
    ],
    opsSummary:
      "타만 슈드 사건은 신원 불명, 암호처럼 보이는 메모, 불명확한 사망 경위가 한데 겹친 전형적인 퍼즐형 미스터리입니다. 그래서 단서의 의미를 과대해석하지 않는 태도도 중요합니다.",
    timeline: [
      "1948년 호주 해변에서 신원 불명의 남성 발견",
      "소지품에서 '타만 슈드' 종이 조각 확인",
      "메모와 전화번호, 책 조각이 단서로 부상",
      "후대 과학수사로 신원 관련 실마리 일부 보강",
    ],
    relatedCases: ["디아틀로프 고개 사건", "메리 셀레스트호 사건", "버뮤다 삼각지대"],
  },
  {
    id: "case-bermuda",
    title: "버뮤다 삼각지대",
    clue: "선박과 항공기 실종담이 반복적으로 축적되며 현대 전설이 된 해역",
    content:
      "북대서양의 특정 해역은 오래전부터 선박과 항공기의 실종 사례가 집중된 장소처럼 알려지며 대중적으로 '버뮤다 삼각지대'라는 이름을 얻었습니다.\n실제 사례마다 기상 악화, 항법 오류, 통신 문제 등 현실적인 설명이 제시되기도 했지만, 사건들이 한데 묶이며 초자연적 장소라는 이미지가 강해졌습니다.\n과학적 반론이 꾸준히 존재함에도 대중문화 속에서는 대표적인 해외 이상현상 미스터리로 자주 소비되고 있습니다.",
    type: "해외 이상현상",
    status: "부분 해결",
    reality: "실제",
    authorUsername: "admin",
    authorNickname: "관리자",
    createdAt: "2026-04-05T11:00:00.000Z",
    likes: [],
    sourceUrl: "https://namu.wiki/w/%EB%B2%84%EB%AE%A4%EB%8B%A4%20%EC%82%BC%EA%B0%81%EC%A7%80%EB%8C%80",
    visualTheme: "theme-overseas-anomaly",
    issuePoints: [
      "실제 사고 사례와 대중적 전설이 어떻게 섞였는지",
      "기상·항법 오류 설명이 어느 정도 설득력을 가지는지",
      "반복적 미디어 재생산이 사건 인식에 어떤 영향을 줬는지",
    ],
    analysisPrompts: [
      "대표 실종 사례가 공통적으로 공유하는 조건을 분류해 보세요.",
      "과학적 설명과 초자연적 설명이 충돌하는 지점을 비교해 보세요.",
      "왜 이 해역만 특별한 이름과 서사를 얻게 됐는지 정리해 보세요.",
    ],
    opsSummary:
      "버뮤다 삼각지대는 개별 사건보다도 '사건들을 묶어 전설화한 방식'을 보는 게 중요합니다. 실제 이상현상인지, 서사 강화의 결과인지를 분리해 생각할 필요가 있습니다.",
    timeline: [
      "여러 선박·항공기 실종 사례가 반복적으로 언급됨",
      "특정 해역에 '버뮤다 삼각지대'라는 이름이 정착",
      "과학적 설명과 초자연적 해석이 동시에 확산",
      "현대에는 대중문화 속 상징적 미스터리로 자리잡음",
    ],
    relatedCases: ["메리 셀레스트호 사건", "디아틀로프 고개 사건", "타만 슈드 사건"],
  },
  {
    id: "case-mary-celeste",
    title: "메리 셀레스트호 사건",
    clue: "배는 멀쩡했지만 승무원만 사라진 채 바다 위를 떠돌던 유령선 미스터리",
    content:
      "1872년 대서양에서 발견된 상선 메리 셀레스트호는 선체와 화물 상태가 비교적 온전했지만, 선장과 승무원 전원이 흔적 없이 사라져 있었습니다.\n격투 흔적이나 대규모 파손이 뚜렷하지 않았기 때문에 폭동, 해적, 보험 사기, 자연재해 등 수많은 가설이 뒤섞이며 사건은 빠르게 전설이 됐습니다.\n후대 연구에서는 일부 현실적인 설명이 제안됐지만, '사람만 사라진 배'라는 상징성 덕분에 지금도 대표적인 해양 미스터리로 꼽힙니다.",
    type: "해외 이상현상",
    status: "부분 해결",
    reality: "실제",
    authorUsername: "admin",
    authorNickname: "관리자",
    createdAt: "2026-04-04T10:00:00.000Z",
    likes: [],
    sourceUrl: "https://namu.wiki/w/%EB%A9%94%EB%A6%AC%20%EC%85%80%EB%A0%88%EC%8A%A4%ED%8A%B8%ED%98%B8",
    visualTheme: "theme-overseas-anomaly",
    issuePoints: [
      "배 상태와 승무원 실종이 왜 함께 설명되기 어려운지",
      "격투 흔적 부재가 어떤 가설을 강화하거나 약화시키는지",
      "후대 창작물이 사건 인식에 얼마나 큰 영향을 줬는지",
    ],
    analysisPrompts: [
      "발견 당시 선박 상태를 기준으로 가능한 시나리오를 나눠 보세요.",
      "구명정, 화물, 항해 기록 같은 요소가 각각 어떤 의미를 가지는지 정리해 보세요.",
      "실제 사건과 후대 전설이 갈라지는 지점을 찾아 보세요.",
    ],
    opsSummary:
      "메리 셀레스트호 사건은 사실관계 자체보다도 '이상할 만큼 멀쩡한 배'라는 이미지가 전설성을 키웠습니다. 남은 물적 상태와 사라진 인원의 불균형이 핵심입니다.",
    timeline: [
      "1872년 항해 중이던 상선 메리 셀레스트호 출항",
      "대서양에서 선원 없는 상태로 발견",
      "선체와 화물은 비교적 온전한 상태 유지",
      "후대에 다양한 해양 괴담과 가설로 확대 재생산",
    ],
    relatedCases: ["버뮤다 삼각지대", "타만 슈드 사건", "디아틀로프 고개 사건"],
  },
];

const seedComments = [
  {
    id: crypto.randomUUID(),
    postId: CURATED_POSTS[0].id,
    parentId: null,
    content:
      "무전 기록의 반복 구간이 정확히 37초 단위라면 사람이 낸 장난이라기보다 자동 송신 장치 오작동 가능성도 있어 보여요.",
    authorUsername: "admin",
    authorNickname: "관리자",
    createdAt: "2026-04-11T13:05:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-lee-hyung-ho",
    parentId: null,
    content:
      "이 사건은 녹음된 통화 내용만 다시 정리해도 범인 패턴이 꽤 보이는데, 당시 기술 한계 때문에 놓친 게 많았던 것 같아요.",
    authorUsername: "casewatcher01",
    authorNickname: "미제추적러",
    createdAt: "2026-04-11T13:20:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-lee-hyung-ho",
    parentId: null,
    content:
      "몸값 전달 지점 바뀌는 흐름 보면 즉흥형이라기보다 주변 동선에 익숙한 사람 느낌이 강합니다.",
    authorUsername: "coldcase_lab",
    authorNickname: "콜드케이스랩",
    createdAt: "2026-04-11T13:32:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-frog-boys",
    parentId: null,
    content:
      "개구리소년은 초동수사 얘기 나올 때마다 너무 아쉽습니다. 단순 실종으로 본 시간이 너무 길었어요.",
    authorUsername: "archiver_k",
    authorNickname: "기록보관인",
    createdAt: "2026-04-11T13:41:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-frog-boys",
    parentId: null,
    content:
      "유해 발견 위치랑 당시 수색 범위 비교해보면, 지형 판단을 잘못했는지 아니면 다른 가능성이 있는지 계속 생각하게 됩니다.",
    authorUsername: "terrain_note",
    authorNickname: "지형메모",
    createdAt: "2026-04-11T13:55:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-dyatlov",
    parentId: null,
    content:
      "눈사태 계열 설명이 예전보단 설득력 있어졌는데, 그래도 일부 부상 정도는 아직도 찜찜하다는 의견이 많은 이유를 알겠어요.",
    authorUsername: "snowfield77",
    authorNickname: "설원관측",
    createdAt: "2026-04-11T14:04:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-dyatlov",
    parentId: null,
    content:
      "텐트를 안쪽에서 찢고 나왔다는 부분이 워낙 강렬해서 아직도 군사 실험설 쪽으로 기우는 사람들 많더라고요.",
    authorUsername: "nightsignal",
    authorNickname: "야간신호",
    createdAt: "2026-04-11T14:17:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-black-dahlia",
    parentId: null,
    content:
      "블랙 달리아는 언론이 사건 자체를 너무 키워버려서 오히려 진짜 단서들이 뒤섞인 케이스처럼 보입니다.",
    authorUsername: "paperghost",
    authorNickname: "신문괴담",
    createdAt: "2026-04-11T14:25:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-bermuda",
    parentId: null,
    content:
      "버뮤다 삼각지대는 실제 사고보다도 '사건을 한데 묶어 서사화한 방식' 자체가 더 흥미로운 것 같습니다.",
    authorUsername: "oceanfile",
    authorNickname: "해양파일",
    createdAt: "2026-04-11T14:33:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-taman-shud",
    parentId: null,
    content:
      "타만 슈드는 이름 없는 단서들이 너무 많이 남아서 오히려 진실이 멀어진 느낌이에요. 하나하나 보면 의미 있어 보이는데 연결이 안 됨.",
    authorUsername: "cipherroom",
    authorNickname: "암호방",
    createdAt: "2026-04-11T14:44:00.000Z",
    likes: [],
  },
  {
    id: crypto.randomUUID(),
    postId: "case-mary-celeste",
    parentId: null,
    content:
      "메리 셀레스트호는 괴담처럼 퍼졌지만, 그래서 더 오래 살아남은 케이스 같아요. 현실 설명이 있어도 분위기가 너무 강합니다.",
    authorUsername: "saltarchive",
    authorNickname: "염해기록",
    createdAt: "2026-04-11T14:52:00.000Z",
    likes: [],
    isSample: true,
  },
];

const MOCK_COMMENT_PROFILES = {
  "2026-04-11T13:05:00.000Z": {
    authorUsername: "mock_pinkcheese",
    authorNickname: "핑크 치즈케익",
  },
  "2026-04-11T13:20:00.000Z": {
    authorUsername: "mock_casewatcher",
    authorNickname: "새벽 메모장",
  },
  "2026-04-11T13:32:00.000Z": {
    authorUsername: "mock_coldlab",
    authorNickname: "민트 도서관",
  },
  "2026-04-11T13:41:00.000Z": {
    authorUsername: "mock_archivek",
    authorNickname: "버터 스콘",
  },
  "2026-04-11T13:55:00.000Z": {
    authorUsername: "mock_terrainnote",
    authorNickname: "유리 나침반",
  },
  "2026-04-11T14:04:00.000Z": {
    authorUsername: "mock_snowfield",
    authorNickname: "화이트 모카",
  },
  "2026-04-11T14:17:00.000Z": {
    authorUsername: "mock_nightsignal",
    authorNickname: "네온 푸딩",
  },
  "2026-04-11T14:25:00.000Z": {
    authorUsername: "mock_paperghost",
    authorNickname: "라즈베리 잉크",
  },
  "2026-04-11T14:33:00.000Z": {
    authorUsername: "mock_oceanfile",
    authorNickname: "솔티 바닐라",
  },
  "2026-04-11T14:44:00.000Z": {
    authorUsername: "mock_cipherroom",
    authorNickname: "레몬 타르트",
  },
  "2026-04-11T14:52:00.000Z": {
    authorUsername: "mock_saltarchive",
    authorNickname: "플럼 소다",
  },
};

const CURATED_SECTION_OVERRIDES = {
  "case-lee-hyung-ho": {
    issuePoints: [
      "유괴 직후 살해 가능성을 뒷받침하는 부검 소견과 협박 패턴이 서로 어떻게 연결되는지",
      "여러 차례의 전화와 장소 지시가 단독범인지 공범이 있는 범행인지 판단하는 핵심 근거가 되는지",
      "돈 전달 실패 장면에서 경찰 대응 혼선이 실제 검거 실패에 어느 정도 영향을 줬는지",
    ],
    analysisPrompts: [
      "협박 전화와 메모 전달 순서를 시간대별로 다시 정리해 보세요.",
      "범인이 현장을 직접 본 사람처럼 행동한 대목과 단순 정보 수집만으로도 가능한 대목을 구분해 보세요.",
      "양화대교 돈 전달 지점에서 공범 가설이 필요한 이유를 공간 구조 기준으로 검토해 보세요.",
    ],
    timeline: [
      "1991년 1월 29일 서울 압구정동에서 이형호 군이 실종됨",
      "범인은 약 16일 동안 수십 차례 전화와 메모로 몸값을 요구함",
      "2월 중순 최종 전달 지점에서 돈만 가져가고 피해자는 돌려보내지 않음",
      "3월 13일 잠실대교 인근 배수로에서 시신이 발견되며 공개수사로 전환됨",
    ],
  },
  "case-frog-boys": {
    issuePoints: [
      "초기 실종 사건을 가출로 보려 했던 판단이 수사 골든타임을 놓치게 했는지",
      "와룡산 지형상 조난설과 타살설 가운데 어느 쪽이 더 설득력 있는지",
      "유골 발견 이후 현장 보존과 감식이 충분했는지 여부",
    ],
    analysisPrompts: [
      "실종 당일 다섯 아이의 동선과 마지막 목격 지점을 지도처럼 다시 배열해 보세요.",
      "2002년 유골 발견 당시 공개된 정황 중 조난설과 충돌하는 부분을 추려 보세요.",
      "초기 수색 범위와 실제 발견 지점 사이의 거리와 난도를 비교해 보세요.",
    ],
    timeline: [
      "1991년 3월 26일 대구의 초등학생 5명이 집을 나간 뒤 실종됨",
      "전국적인 제보와 수색이 이어졌지만 결정적 단서를 찾지 못함",
      "2002년 9월 26일 와룡산에서 유골이 발견돼 큰 충격을 남김",
      "사망 경위 규명에 실패한 채 공소시효가 지나 장기 미제로 남음",
    ],
  },
  "case-dyatlov": {
    issuePoints: [
      "텐트가 안쪽에서 찢긴 흔적이 급박한 탈출 상황을 의미하는지",
      "일부 시신의 중증 외상이 자연 환경만으로 설명 가능한 수준인지",
      "초기 조사 기록과 후대 재분석이 어디에서 서로 충돌하는지",
    ],
    analysisPrompts: [
      "텐트에서 발견 지점까지의 이동 순서를 추정해 보세요.",
      "저체온증과 강한 외상이 동시에 나타난 이유를 여러 가설로 나눠 비교해 보세요.",
      "눈사태설, 강풍설, 인위적 위협설 각각이 설명하는 지점과 설명하지 못하는 지점을 정리해 보세요.",
    ],
    timeline: [
      "1959년 우랄 산악 지대에서 대학생 등반대가 원정을 시작함",
      "수색 과정에서 텐트가 안쪽에서 찢긴 채 발견됨",
      "대원들은 서로 떨어진 위치에서 차례로 발견되고 일부는 중증 외상을 보임",
      "공식 결론이 여러 차례 재해석되며 현재까지도 논쟁이 이어짐",
    ],
  },
  "case-black-dahlia": {
    issuePoints: [
      "언론 과열 보도가 실제 수사 기록과 대중 기억을 얼마나 왜곡했는지",
      "허위 자백과 주변 인물 제보 중 신빙성이 높은 축은 무엇인지",
      "시신 훼손 방식이 범인의 경험이나 성향을 어느 정도 드러내는지",
    ],
    analysisPrompts: [
      "공식 수사 정보와 대중적으로 유명한 전설성 서사를 구분해 정리해 보세요.",
      "엘리자베스 쇼트의 마지막 행적 중 사실 확인이 비교적 분명한 대목만 추려 보세요.",
      "허위 자백이 반복적으로 나온 이유를 당시 언론 환경과 연결해 보세요.",
    ],
    timeline: [
      "1947년 로스앤젤레스에서 엘리자베스 쇼트의 시신이 발견됨",
      "잔혹한 훼손 상태와 별칭이 결합되며 사건이 전국적으로 알려짐",
      "수많은 제보와 자백이 쏟아졌지만 결정적 물증은 확보되지 않음",
      "사건은 미국 범죄사에서 대표적인 미제 사건으로 남음",
    ],
  },
  "case-lee-choon-jae": {
    issuePoints: [
      "장기간 이어진 사건들 사이의 공통점이 동일범 판단에 어떤 역할을 했는지",
      "초기 강압수사와 오판이 사건 인식에 남긴 피해가 무엇인지",
      "뒤늦은 자백과 증거 재검토가 어디까지 사실로 받아들여질 수 있는지",
    ],
    analysisPrompts: [
      "사건별 수법과 피해자 조건의 공통점과 차이를 나눠 보세요.",
      "초기 수사 단계에서 잘못 짚은 방향이 무엇이었는지 정리해 보세요.",
      "후대 재수사에서 새로 의미를 얻은 증거가 무엇인지 추려 보세요.",
    ],
    timeline: [
      "1986년부터 경기 남부 일대에서 연쇄살인 사건이 이어짐",
      "장기간 범인을 특정하지 못한 채 대표적 미제 사건으로 남음",
      "수감 중이던 이춘재와의 연관성이 드러나며 사건이 다시 주목받음",
      "재수사 과정에서 일부 사건의 진실과 초기 수사 문제점이 재조명됨",
    ],
  },
  "case-taman-shud": {
    issuePoints: [
      "신원 불명 상태가 사건의 성격을 더 미궁으로 만든 핵심 원인인지",
      "종잇조각과 메모의 암호성이 실제 사건 단서인지 상징적 요소인지",
      "후대 과학수사 결과가 초기의 첩보설을 얼마나 약화시키는지",
    ],
    analysisPrompts: [
      "해변 발견 시점부터 소지품 확인까지 공개된 사실만 시간순으로 정리해 보세요.",
      "암호, 독극물, 신원 은폐 가설이 각각 어떤 근거 위에 서 있는지 비교해 보세요.",
      "신원 추적이 어려웠던 이유를 당시 행정 기록 한계와 함께 검토해 보세요.",
    ],
    timeline: [
      "1948년 호주 해변에서 신원 미상의 남성이 숨진 채 발견됨",
      "옷과 소지품에서 결정적 신분 단서가 거의 나오지 않음",
      "책 조각의 '타만 슈드' 문구와 메모가 공개되며 사건이 유명해짐",
      "후대 과학수사로 일부 실마리가 보강됐지만 전체 경위는 여전히 논쟁적임",
    ],
  },
  "case-bermuda": {
    issuePoints: [
      "개별 실종 사건을 하나의 지역 미스터리로 묶는 방식이 얼마나 타당한지",
      "19비행중대 사례처럼 널리 알려진 사건이 전설을 강화한 구조는 무엇인지",
      "기상, 항법, 인간 실수 같은 설명이 대중적 초자연 해석보다 얼마나 설득력 있는지",
    ],
    analysisPrompts: [
      "버뮤다 삼각지대 사례 중 기록이 비교적 분명한 사건만 골라 비교해 보세요.",
      "19비행중대 실종담에서 반복적으로 인용되는 요소가 무엇인지 정리해 보세요.",
      "지역 자체의 신비성보다 정보 확산 구조가 전설을 키운 부분이 있는지 검토해 보세요.",
    ],
    timeline: [
      "대서양의 특정 해역이 실종담과 함께 위험 지역으로 알려지기 시작함",
      "1945년 19비행중대 실종이 대표 사례로 반복 인용됨",
      "선박과 항공기 실종담이 누적되며 대중적 미스터리 이미지가 강화됨",
      "이후에는 자연적 설명과 초자연 해석이 병행되며 논쟁이 이어짐",
    ],
  },
  "case-mary-celeste": {
    issuePoints: [
      "배는 비교적 멀쩡했는데 사람만 사라졌다는 점이 어떤 가설을 강하게 만드는지",
      "구명정 부재와 화물 상태가 긴급 대피설을 얼마나 뒷받침하는지",
      "후대에 덧붙은 전설이 원래 기록을 얼마나 과장했는지",
    ],
    analysisPrompts: [
      "발견 당시 선내 상태와 실종 인원 정보를 나눠서 정리해 보세요.",
      "폭발 오인, 악천후 회피, 반란설 가운데 기록과 가장 잘 맞는 가설을 비교해 보세요.",
      "메리 셀레스트호 사건이 이후 문화적으로 어떻게 신비화됐는지 살펴보세요.",
    ],
    timeline: [
      "1872년 상선 메리 셀레스트호가 항해 중 승무원과 함께 사라짐",
      "다른 배가 선박을 발견했을 때 배는 표류 중이었지만 큰 파손은 없었음",
      "구명정이 사라져 있어 자발적 또는 긴급 이탈 가능성이 제기됨",
      "결정적 증거가 없어 다양한 해석만 남은 채 해양 미스터리의 대표 사례가 됨",
    ],
  },
};

const state = {
  users: load(STORAGE_KEYS.users, []),
  session: load(STORAGE_KEYS.session, null),
  posts: normalizePosts(load(STORAGE_KEYS.posts, CURATED_POSTS)),
  comments: normalizeComments(load(STORAGE_KEYS.comments, seedComments)),
  anonymousId: getAnonymousId(),
  latestCreatedPostId: null,
  popupReloadAfterClose: false,
  editingPostId: null,
  editingComment: null,
  replyTarget: null,
};

const authStatus = document.getElementById("authStatus");
const logoutBtn = document.getElementById("logoutBtn");
const loginLink = document.getElementById("loginLink");
const loginForm = document.getElementById("loginForm");
const authMessage = document.getElementById("authMessage");
const postForm = document.getElementById("postForm");
const postMessage = document.getElementById("postMessage");
const writeGate = document.getElementById("writeGate");
const submitPostBtn = document.getElementById("submitPostBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const realityButtons = Array.from(document.querySelectorAll(".reality-btn"));
const typeFilter = document.getElementById("typeFilter");
const searchInput = document.getElementById("searchInput");
const heroSearchInput = document.getElementById("heroSearchInput");
const heroSearchBtn = document.querySelector(".hero-search-btn");
const heroSection = document.querySelector(".hero");
const layout = document.querySelector(".layout");
const composerSection = document.querySelector(".composer");
const boardHeading = document.querySelector(".board-header h2");
const boardTag = document.querySelector(".board-header .section-tag");
const boardFilters = document.querySelector(".filters");
const searchResultMeta = document.getElementById("searchResultMeta");
const postsContainer = document.getElementById("postsContainer");
const customPopup = document.getElementById("customPopup");
const customPopupTitle = document.getElementById("customPopupTitle");
const customPopupMessage = document.getElementById("customPopupMessage");
const customPopupConfirm = document.getElementById("customPopupConfirm");
const customPopupBackdrop = document.getElementById("customPopupBackdrop");
const postTemplate = document.getElementById("postTemplate");
const postCount = document.getElementById("postCount");
const commentCount = document.getElementById("commentCount");
const memberCount = document.getElementById("memberCount");

bootstrap();

function bootstrap() {
  ensureAdmin();
  ensureCuratedPosts();
  refreshMockCommentProfiles();
  fillMissingPostSections();
  applySearchParamsFromUrl();
  persistAll();
  bindEvents();
  renderAuthState();
  renderPosts();
  renderStats();
}

function ensureAdmin() {
  const hasAdmin = state.users.some((user) => user.username === "admin");
  if (!hasAdmin) {
    state.users.unshift({
      username: "admin",
      nickname: "관리자",
      password: "admin1234",
      email: "admin@shadowarchive.local",
      birthdate: "",
      referral: "시스템",
    });
  }
}

function bindEvents() {
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }
  realityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setRealityValue(button.dataset.reality || "실제");
    });
  });
  if (postForm) {
    postForm.addEventListener("submit", handlePostSubmit);
  }
  cancelEditBtn?.addEventListener("click", resetPostForm);
  typeFilter?.addEventListener("change", renderPosts);
  searchInput?.addEventListener("input", renderPosts);
  if (heroSearchInput) {
    heroSearchInput.addEventListener("input", () => {
      searchInput.value = heroSearchInput.value;
    });
    heroSearchInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") {
        return;
      }
      event.preventDefault();
      navigateToSearchResults(heroSearchInput.value);
    });
  }
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener("click", () => {
      navigateToSearchResults(heroSearchInput?.value || "");
    });
  }
  customPopupConfirm?.addEventListener("click", hideCustomPopup);
  customPopupBackdrop?.addEventListener("click", hideCustomPopup);
}

function applySearchParamsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const keyword = params.get("q")?.trim() || "";
  const activeType = params.get("type")?.trim() || "";

  if (searchInput) {
    searchInput.value = keyword;
  }
  if (heroSearchInput) {
    heroSearchInput.value = keyword;
  }
  if (typeFilter && activeType) {
    const hasMatchingOption = Array.from(typeFilter.options).some(
      (option) => option.value === activeType,
    );
    if (hasMatchingOption) {
      typeFilter.value = activeType;
    }
  }
}

function navigateToSearchResults(rawKeyword, activeType = typeFilter?.value || "전체") {
  const keyword = String(rawKeyword || "").trim();

  if (!keyword) {
    const homeUrl = new URL("index.html", window.location.href);
    window.location.href = homeUrl.toString();
    return;
  }

  const targetUrl = new URL("index.html", window.location.href);
  targetUrl.searchParams.set("q", keyword);
  if (activeType && activeType !== "전체") {
    targetUrl.searchParams.set("type", activeType);
  }
  window.location.href = targetUrl.toString();
}

function handleLogin(event) {
  event.preventDefault();
  if (!loginForm || !authMessage) {
    return;
  }
  const formData = new FormData(loginForm);
  const username = String(formData.get("username")).trim();
  const password = String(formData.get("password")).trim();

  const matchedUser = state.users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!matchedUser) {
    authMessage.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
    return;
  }

  state.session = {
    username: matchedUser.username,
    nickname: matchedUser.nickname,
  };
  if (matchedUser.username === "admin") {
    localStorage.setItem("va-disable", "1");
  }
  persist(STORAGE_KEYS.session, state.session);
  loginForm.reset();
  authMessage.textContent = `${matchedUser.nickname}님, 사건 추적을 시작해볼까요?`;
  renderAuthState();
  renderPosts();
}

function handleLogout() {
  state.session = null;
  state.editingPostId = null;
  state.editingComment = null;
  state.replyTarget = null;
  persist(STORAGE_KEYS.session, null);
  resetPostForm();
  renderAuthState();
  renderPosts();
  authMessage.textContent = "로그아웃되었습니다.";
}

function handlePostSubmit(event) {
  if (!postForm) {
    return;
  }
  event.preventDefault();

  const formData = new FormData(postForm);
  const keywords = parseKeywordInput(String(formData.get("keywords")).trim());
  const isEditing = Boolean(state.editingPostId);
  const postPayload = {
    title: String(formData.get("title")).trim(),
    content: String(formData.get("content")).trim(),
    type: String(formData.get("type")).trim(),
    status: String(formData.get("status")).trim(),
    reality: String(formData.get("reality")).trim(),
    clue: keywords.length > 0 ? keywords.join(", ") : "핵심 단서 정리 중",
    relatedCases: keywords,
  };

  if (
    !postPayload.title ||
    !postPayload.content ||
    !postPayload.type ||
    !postPayload.status ||
    !postPayload.reality ||
    keywords.length === 0
  ) {
    postMessage.textContent = "모든 항목을 입력해 주세요.";
    return;
  }

  if (isEditing) {
    const target = state.posts.find((post) => post.id === state.editingPostId);
    if (!target || !isOwner(target)) {
      postMessage.textContent = "작성자 본인만 글을 수정할 수 있습니다.";
      return;
    }

    Object.assign(target, postPayload);
    persist(STORAGE_KEYS.posts, state.posts);
    postMessage.textContent = "게시글이 수정되었습니다.";
  } else {
    const author = getCurrentAuthor();
    const newPostId = crypto.randomUUID();
    state.posts.unshift({
      id: newPostId,
      ...postPayload,
      authorUsername: author.authorUsername,
      authorNickname: author.authorNickname,
      isAnonymous: author.isAnonymous,
      anonymousOwnerId: author.anonymousOwnerId,
      createdAt: new Date().toISOString(),
    });
    state.latestCreatedPostId = newPostId;
    persist(STORAGE_KEYS.posts, state.posts);
    postMessage.textContent = "";
    showCustomPopup("등록 완료", "새 사건 글이 등록되었습니다.");
  }

  resetPostForm(false);
  renderPosts();
  if (!isEditing) {
    postsContainer?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderAuthState() {
  const isLoggedIn = Boolean(state.session);
  if (authStatus) {
    authStatus.textContent = isLoggedIn
      ? `${state.session.nickname} (@${state.session.username}) 접속 중`
      : "로그인하지 않음";
  }

  logoutBtn?.classList.toggle("hidden", !isLoggedIn);
  if (submitPostBtn) {
    submitPostBtn.disabled = false;
    submitPostBtn.textContent = state.editingPostId
        ? "수정 저장"
        : "등록";
  }
  if (writeGate) {
    writeGate.textContent = isLoggedIn ? "" : "";
  }
}

function renderPosts() {
  if (heroSearchInput && heroSearchInput.value !== searchInput.value) {
    heroSearchInput.value = searchInput.value;
  }
  const params = new URLSearchParams(window.location.search);
  const activePostId = params.get("post")?.trim() || "";
  const activeType = typeFilter.value;
  const keyword = searchInput.value.trim().toLowerCase();
  const rawKeyword = searchInput.value.trim();
  const isSearchMode = rawKeyword.length > 0;
  const isDetailMode = activePostId.length > 0;

  if (layout) {
    layout.classList.toggle("search-results-mode", isSearchMode || isDetailMode);
  }
  if (heroSection) {
    heroSection.classList.toggle("hidden", isSearchMode || isDetailMode);
  }
  if (composerSection) {
    composerSection.classList.toggle("hidden", isSearchMode || isDetailMode);
  }
  if (boardFilters) {
    boardFilters.classList.toggle("hidden", isDetailMode);
  }
  if (boardHeading) {
    boardHeading.textContent = isDetailMode ? "사건 상세" : isSearchMode ? "검색 결과" : "사건 게시판";
  }
  if (boardTag) {
    boardTag.textContent = isDetailMode ? "Case Detail" : isSearchMode ? "Search Results" : "Discussion Board";
  }

  if (isDetailMode) {
    const targetPost = state.posts.find((post) => post.id === activePostId);
    postsContainer.innerHTML = "";
    if (searchResultMeta) {
      searchResultMeta.classList.add("hidden");
      searchResultMeta.innerHTML = "";
    }
    if (!targetPost) {
      postsContainer.innerHTML = `<div class="card empty-state">선택한 게시물을 찾을 수 없습니다.</div>`;
      renderStats();
      return;
    }
    renderFullPostCard(targetPost);
    renderAuthState();
    renderStats();
    return;
  }

  const filteredPosts = [...state.posts]
    .sort((a, b) => {
      if (state.latestCreatedPostId) {
        if (a.id === state.latestCreatedPostId) {
          return -1;
        }
        if (b.id === state.latestCreatedPostId) {
          return 1;
        }
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .filter((post) => activeType === "전체" || post.type === activeType)
    .filter((post) => {
      if (!keyword) {
        return true;
      }
      return [
        post.title,
        post.clue,
        post.content,
        post.type,
        post.status,
        post.reality,
        post.authorNickname,
        post.authorUsername,
        ...(Array.isArray(post.issuePoints) ? post.issuePoints : []),
        ...(Array.isArray(post.analysisPrompts) ? post.analysisPrompts : []),
        ...(Array.isArray(post.timeline) ? post.timeline : []),
        ...(Array.isArray(post.relatedCases) ? post.relatedCases : []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    });

  postsContainer.innerHTML = "";

  if (!filteredPosts.length) {
    if (searchResultMeta) {
      if (isSearchMode) {
        searchResultMeta.classList.remove("hidden");
        searchResultMeta.innerHTML = `<span class="search-result-keyword">‘${escapeHtml(rawKeyword)}’</span> <span class="search-result-label">검색 결과</span> <span class="search-result-count">0건</span>`;
      } else {
        searchResultMeta.classList.add("hidden");
        searchResultMeta.innerHTML = "";
      }
    }
    postsContainer.innerHTML = `<div class="card empty-state">검색 조건에 맞는 사건 글이 없습니다.</div>`;
    renderStats();
    return;
  }

  if (searchResultMeta) {
    if (isSearchMode) {
      searchResultMeta.classList.remove("hidden");
      searchResultMeta.innerHTML = `<span class="search-result-keyword">‘${escapeHtml(rawKeyword)}’</span> <span class="search-result-label">검색 결과</span> <span class="search-result-count">${filteredPosts.length}건</span>`;
    } else {
      searchResultMeta.classList.add("hidden");
      searchResultMeta.innerHTML = "";
    }
  }

  if (isSearchMode) {
    filteredPosts.forEach((post) => {
      postsContainer.append(renderSearchResultCard(post));
    });
    state.latestCreatedPostId = null;
    renderAuthState();
    renderStats();
    return;
  }

  filteredPosts.forEach((post) => {
    renderFullPostCard(post);
  });

  if (state.latestCreatedPostId) {
    const latestCard = postsContainer.querySelector(`[data-post-id="${state.latestCreatedPostId}"]`);
    latestCard?.scrollIntoView({ behavior: "smooth", block: "start" });
    state.latestCreatedPostId = null;
  }

  renderAuthState();
  renderStats();
}

function renderSearchResultCard(post) {
  const item = document.createElement("article");
  item.className = "card search-result-card";
  item.tabIndex = 0;

  const title = document.createElement("h3");
  title.className = "search-result-title";
  title.textContent = post.title;

  const date = document.createElement("p");
  date.className = "search-result-date";
  date.textContent = `작성일 ${formatDate(post.createdAt)}`;

  item.append(title, date);
  item.addEventListener("click", () => {
    navigateToPostDetail(post.id);
  });
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigateToPostDetail(post.id);
    }
  });

  return item;
}

function renderFullPostCard(post) {
  const fragment = postTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".post-card");
  const title = fragment.querySelector(".post-title");
  const clue = fragment.querySelector(".post-clue");
  const content = fragment.querySelector(".post-content");
  const visual = fragment.querySelector(".post-visual");
  const visualTheme = fragment.querySelector(".visual-theme");
  const issueList = fragment.querySelector(".issue-list");
  const promptList = fragment.querySelector(".prompt-list");
  const summaryTooltipBtn = fragment.querySelector(".summary-tooltip-btn");
  const summaryTooltip = fragment.querySelector(".summary-tooltip");
  const opsSummary = fragment.querySelector(".ops-summary");
  const timelineList = fragment.querySelector(".timeline-list");
  const relatedList = fragment.querySelector(".related-list");
  const source = fragment.querySelector(".post-source");
  const sourceLink = fragment.querySelector(".source-link");
  const typeBadge = fragment.querySelector(".type-badge");
  const statusBadge = fragment.querySelector(".status-badge");
  const realityBadge = fragment.querySelector(".reality-badge");
  const date = fragment.querySelector(".post-date");
  const authorName = fragment.querySelector(".author-name");
  const authorId = fragment.querySelector(".author-id");
  const postActions = fragment.querySelector(".post-actions");
  const likeBtn = fragment.querySelector(".like-btn");
  const commentCounter = fragment.querySelector(".comment-counter");
  const commentGate = fragment.querySelector(".comment-gate");
  const commentForm = fragment.querySelector(".comment-form");
  const commentTextarea = commentForm.elements.comment;
  const commentSubmitBtn = fragment.querySelector(".comment-submit-btn");
  const commentCancelBtn = fragment.querySelector(".comment-cancel-btn");
  const commentMessage = fragment.querySelector(".comment-message");
  const commentList = fragment.querySelector(".comment-list");
  const postComments = getCommentsByPostId(post.id);
  const isEditingCommentOnThisPost =
    state.editingComment &&
    state.editingComment.postId === post.id &&
    !state.editingComment.parentId;

  card.dataset.postId = post.id;
  visual.classList.add(post.visualTheme || getVisualThemeByType(post.type));
  visualTheme.textContent = getVisualLabel(post.type);
  title.textContent = post.title;
  clue.textContent = `핵심 단서: ${post.clue}`;
  content.textContent = post.content;
  fillAnalysisList(issueList, post.issuePoints);
  fillAnalysisList(promptList, post.analysisPrompts);
  opsSummary.textContent = post.opsSummary || "운영진이 사건 핵심 정황과 토론 방향을 계속 보강 중입니다.";
  fillTimelineList(timelineList, post.timeline);
  fillRelatedList(relatedList, post.relatedCases);
  summaryTooltipBtn.addEventListener("click", () => {
    summaryTooltip.classList.toggle("hidden");
  });
  if (post.sourceUrl) {
    source.classList.remove("hidden");
    sourceLink.href = post.sourceUrl;
  }
  typeBadge.textContent = post.type;
  statusBadge.textContent = post.status;
  realityBadge.textContent = post.reality || "실제";
  realityBadge.classList.add((post.reality || "실제") === "픽션" ? "fiction" : "real");
  date.textContent = `작성일 ${formatDate(post.createdAt)}`;
  authorName.textContent = post.authorNickname;
  authorId.textContent = post.isAnonymous ? "비로그인" : `@${post.authorUsername}`;
  authorId.classList.toggle("anonymous-label", Boolean(post.isAnonymous));
  renderLikeButton(likeBtn, post.likes, "게시글", () => toggleLike("post", post.id));
  commentCounter.textContent = `댓글 ${postComments.length}개`;
  commentGate.textContent = state.session
    ? "로그인 상태에서 사건 분석 댓글을 남길 수 있습니다."
    : "비로그인 상태에서도 댓글을 작성할 수 있으며, 작성물에는 비로그인 표시가 붙습니다.";

  commentTextarea.disabled = false;
  commentSubmitBtn.disabled = false;
  commentSubmitBtn.textContent = isEditingCommentOnThisPost ? "댓글 수정 저장" : "댓글 등록";

  if (isEditingCommentOnThisPost) {
    const targetComment = state.comments.find(
      (comment) => comment.id === state.editingComment.commentId,
    );
    if (targetComment) {
      commentTextarea.value = targetComment.content;
      commentCancelBtn.classList.remove("hidden");
    }
  }

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleCommentSubmit(post.id, commentForm, commentMessage);
  });

  commentCancelBtn.addEventListener("click", () => {
    state.editingComment = null;
    state.replyTarget = null;
    renderPosts();
  });

  if (isOwner(post)) {
    postActions.append(
      actionButton("수정", () => beginEdit(post.id)),
      actionButton("삭제", () => deletePost(post.id), "danger"),
    );
  }

  renderComments(post.id, postComments, commentList, commentMessage);
  postsContainer.append(fragment);
}

function navigateToPostDetail(postId) {
  const targetUrl = new URL("index.html", window.location.href);
  targetUrl.searchParams.set("post", postId);
  window.location.href = targetUrl.toString();
}

function beginEdit(postId) {
  const post = state.posts.find((item) => item.id === postId);
  if (!post || !isOwner(post)) {
    if (postMessage) {
      postMessage.textContent = "작성자 본인만 수정할 수 있습니다.";
    }
    return;
  }
  const targetUrl = new URL("write.html", window.location.href);
  targetUrl.searchParams.set("edit", postId);
  window.location.href = targetUrl.toString();
}

function deletePost(postId) {
  const post = state.posts.find((item) => item.id === postId);
  if (!post || !isOwner(post)) {
    postMessage.textContent = "작성자 본인만 삭제할 수 있습니다.";
    return;
  }

  const shouldDelete = window.confirm("이 사건 글을 정말 삭제하시겠습니까?");
  if (!shouldDelete) {
    return;
  }

  state.posts = state.posts.filter((item) => item.id !== postId);
  state.comments = state.comments.filter((comment) => comment.postId !== postId);
  persist(STORAGE_KEYS.posts, state.posts);
  persist(STORAGE_KEYS.comments, state.comments);

  if (state.editingPostId === postId) {
    resetPostForm(false);
  }

  if (state.editingComment?.postId === postId) {
    state.editingComment = null;
  }
  if (state.replyTarget?.postId === postId) {
    state.replyTarget = null;
  }

  state.popupReloadAfterClose = true;
  showCustomPopup("삭제 완료", "게시글이 삭제되었습니다.");
}

function resetPostForm(clearMessage = true) {
  if (!postForm) {
    return;
  }
  state.editingPostId = null;
  postForm.reset();
  postForm.elements.type.value = "국내 범죄";
  postForm.elements.status.value = "미해결";
  setRealityValue("실제");
  if (postForm.elements.keywords) {
    postForm.elements.keywords.value = "";
  }
  cancelEditBtn.classList.add("hidden");
  if (clearMessage) {
    postMessage.textContent = "";
  }
  renderAuthState();
}

function handleCommentSubmit(postId, form, messageEl) {
  const formData = new FormData(form);
  const content = String(formData.get("comment")).trim();

  if (!content) {
    messageEl.textContent = "댓글 내용을 입력해 주세요.";
    return;
  }

  if (state.editingComment && state.editingComment.postId === postId) {
    const target = state.comments.find(
      (comment) => comment.id === state.editingComment.commentId,
    );
    if (state.editingComment.parentId) {
      messageEl.textContent = "대댓글 수정은 해당 답글 폼에서 진행해 주세요.";
      return;
    }
    if (!target || !isOwner(target)) {
      messageEl.textContent = "댓글 작성자만 수정할 수 있습니다.";
      return;
    }

    target.content = content;
    persist(STORAGE_KEYS.comments, state.comments);
    state.editingComment = null;
    messageEl.textContent = "댓글이 수정되었습니다.";
  } else {
    const author = getCurrentAuthor();
    state.comments.push({
      id: crypto.randomUUID(),
      postId,
      parentId: null,
      content,
      authorUsername: author.authorUsername,
      authorNickname: author.authorNickname,
      isAnonymous: author.isAnonymous,
      anonymousOwnerId: author.anonymousOwnerId,
      createdAt: new Date().toISOString(),
      likes: [],
    });
    persist(STORAGE_KEYS.comments, state.comments);
    messageEl.textContent = "댓글이 등록되었습니다.";
  }

  form.reset();
  renderPosts();
}

function renderComments(postId, comments, container, messageEl) {
  container.innerHTML = "";

  if (!comments.length) {
    container.innerHTML = `<div class="card empty-state">아직 등록된 분석 댓글이 없습니다.</div>`;
    return;
  }

  comments
    .slice()
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .filter((comment) => !comment.parentId)
    .forEach((comment) => {
      const item = document.createElement("article");
      item.className = "comment-item comment-thread";

      const meta = document.createElement("div");
      meta.className = "comment-meta";

      const authorBlock = document.createElement("div");
      authorBlock.className = "comment-meta-main";
      authorBlock.innerHTML = `
        <div class="comment-author-row">
          <span class="comment-author">${comment.authorNickname}</span>
          <span class="author-id ${comment.isAnonymous ? "anonymous-label" : ""}">${comment.isAnonymous ? "비로그인" : `@${comment.authorUsername}`}</span>
        </div>
      `;

      const side = document.createElement("div");
      side.className = "comment-actions";

      const timestamp = document.createElement("span");
      timestamp.className = "comment-date";
      timestamp.textContent = formatDate(comment.createdAt);
      authorBlock.append(timestamp);

      if (isOwner(comment)) {
        side.append(
          actionButton("수정", () => beginCommentEdit(postId, comment.id), "comment-text-btn"),
          actionButton("삭제", () => deleteComment(comment.id, messageEl), "danger comment-text-btn"),
        );
      }

      side.append(
        buildLikeAction(comment.likes, "댓글", () => toggleLike("comment", comment.id), "comment-like-btn"),
      );

      meta.append(authorBlock, side);

      const content = document.createElement("p");
      content.className = "comment-body";
      content.textContent = comment.content;
      const replyToggle = actionButton("답글", () => toggleReplyEditor(postId, comment.id), "reply-toggle comment-text-btn");
      replyToggle.disabled = !state.session;
      side.append(replyToggle);

      item.append(meta, content);
      item.append(renderReplySection(postId, comment.id, messageEl));
      container.append(item);
    });
}

function beginCommentEdit(postId, commentId) {
  const comment = state.comments.find((item) => item.id === commentId);
  if (!comment || !isOwner(comment)) {
    return;
  }

  state.editingComment = { postId, commentId };
  state.replyTarget = null;
  renderPosts();
}

function deleteComment(commentId, messageEl) {
  const comment = state.comments.find((item) => item.id === commentId);
  if (!comment || !isOwner(comment)) {
    messageEl.textContent = "댓글 작성자만 삭제할 수 있습니다.";
    return;
  }

  const shouldDelete = window.confirm("이 댓글을 정말 삭제하시겠습니까?");
  if (!shouldDelete) {
    return;
  }

  state.comments = state.comments.filter(
    (item) => item.id !== commentId && item.parentId !== commentId,
  );
  if (
    state.editingComment?.commentId === commentId ||
    state.editingComment?.parentId === commentId
  ) {
    state.editingComment = null;
  }
  if (state.replyTarget?.parentId === commentId) {
    state.replyTarget = null;
  }
  persist(STORAGE_KEYS.comments, state.comments);
  state.popupReloadAfterClose = true;
  showCustomPopup("삭제 완료", "댓글이 삭제되었습니다.");
}

function getCommentsByPostId(postId) {
  return state.comments.filter((comment) => comment.postId === postId);
}

function renderReplySection(postId, parentId, messageEl) {
  const wrapper = document.createElement("div");
  const replies = getRepliesByCommentId(parentId);

  if (replies.length) {
    const replyList = document.createElement("div");
    replyList.className = "reply-list";

    replies.forEach((reply) => {
      const item = document.createElement("article");
      item.className = "comment-item reply-item";

      const meta = document.createElement("div");
      meta.className = "comment-meta";

      const authorBlock = document.createElement("div");
      authorBlock.className = "comment-meta-main";
      authorBlock.innerHTML = `
        <div class="comment-author-row">
          <span class="comment-author">${reply.authorNickname}</span>
          <span class="author-id ${reply.isAnonymous ? "anonymous-label" : ""}">${reply.isAnonymous ? "비로그인" : `@${reply.authorUsername}`}</span>
        </div>
      `;

      const side = document.createElement("div");
      side.className = "comment-actions";

      const timestamp = document.createElement("span");
      timestamp.className = "comment-date";
      timestamp.textContent = formatDate(reply.createdAt);
      authorBlock.append(timestamp);

      if (isOwner(reply)) {
        side.append(
          actionButton("수정", () => beginReplyEdit(postId, parentId, reply.id), "comment-text-btn"),
          actionButton("삭제", () => deleteComment(reply.id, messageEl), "danger comment-text-btn"),
        );
      }

      side.append(
        buildLikeAction(reply.likes, "답글", () => toggleLike("comment", reply.id), "comment-like-btn"),
      );

      meta.append(authorBlock, side);

      const content = document.createElement("p");
      content.className = "comment-body";
      content.textContent = reply.content;

      item.append(meta, content);
      replyList.append(item);
    });

    wrapper.append(replyList);
  }

  const isReplyEditorOpen =
    state.editingComment &&
    state.editingComment.postId === postId &&
    state.editingComment.parentId === parentId;

  if (isReplyEditorOpen || state.replyTarget?.postId === postId && state.replyTarget?.parentId === parentId) {
    const replyForm = document.createElement("form");
    replyForm.className = "reply-form";

    const textarea = document.createElement("textarea");
    textarea.name = "reply";
    textarea.rows = 3;
    textarea.placeholder = "이 댓글에 대한 보충 분석이나 반론을 남겨보세요.";
    textarea.required = true;
    textarea.disabled = !state.session;

    if (isReplyEditorOpen) {
      const editingReply = state.comments.find(
        (comment) => comment.id === state.editingComment.commentId,
      );
      if (editingReply) {
        textarea.value = editingReply.content;
      }
    }

    const actions = document.createElement("div");
    actions.className = "comment-form-actions";

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "primary-btn";
    submit.textContent = isReplyEditorOpen ? "답글 수정 저장" : "답글 등록";
    submit.disabled = !state.session;

    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.className = "ghost-btn";
    cancel.textContent = "취소";
    cancel.addEventListener("click", () => {
      state.replyTarget = null;
      if (isReplyEditorOpen) {
        state.editingComment = null;
      }
      renderPosts();
    });

    const message = document.createElement("p");
    message.className = "message";

    actions.append(submit, cancel);
    replyForm.append(textarea, actions, message);

    replyForm.addEventListener("submit", (event) => {
      event.preventDefault();
      handleReplySubmit(postId, parentId, textarea.value, message);
    });

    wrapper.append(replyForm);
  }

  return wrapper;
}

function toggleReplyEditor(postId, parentId) {
  const alreadyOpen =
    state.replyTarget?.postId === postId && state.replyTarget?.parentId === parentId;
  state.replyTarget = alreadyOpen ? null : { postId, parentId };
  if (!state.editingComment?.parentId || state.editingComment.parentId !== parentId) {
    state.editingComment = null;
  }
  renderPosts();
}

function handleReplySubmit(postId, parentId, rawContent, messageEl) {
  const content = String(rawContent).trim();
  if (!content) {
    messageEl.textContent = "답글 내용을 입력해 주세요.";
    return;
  }

  if (
    state.editingComment &&
    state.editingComment.postId === postId &&
    state.editingComment.parentId === parentId
  ) {
    const target = state.comments.find(
      (comment) => comment.id === state.editingComment.commentId,
    );
    if (!target || !isOwner(target)) {
      messageEl.textContent = "답글 작성자만 수정할 수 있습니다.";
      return;
    }

    target.content = content;
    state.editingComment = null;
    state.replyTarget = null;
    persist(STORAGE_KEYS.comments, state.comments);
    renderPosts();
    return;
  }

  const author = getCurrentAuthor();
  state.comments.push({
    id: crypto.randomUUID(),
    postId,
    parentId,
    content,
    authorUsername: author.authorUsername,
    authorNickname: author.authorNickname,
    isAnonymous: author.isAnonymous,
    anonymousOwnerId: author.anonymousOwnerId,
    createdAt: new Date().toISOString(),
    likes: [],
  });
  state.replyTarget = null;
  persist(STORAGE_KEYS.comments, state.comments);
  renderPosts();
}

function getRepliesByCommentId(parentId) {
  return state.comments
    .filter((comment) => comment.parentId === parentId)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

function beginReplyEdit(postId, parentId, commentId) {
  const comment = state.comments.find((item) => item.id === commentId);
  if (!comment || !isOwner(comment)) {
    return;
  }

  state.replyTarget = { postId, parentId };
  state.editingComment = { postId, parentId, commentId };
  renderPosts();
}

function renderStats() {
  postCount.textContent = String(state.posts.length);
  commentCount.textContent = String(state.comments.length);
  memberCount.textContent = String(state.users.length);
}

function toggleLike(kind, targetId) {
  if (!state.session) {
    authMessage.textContent = "좋아요는 로그인한 회원만 사용할 수 있습니다.";
    return;
  }

  const collection = kind === "post" ? state.posts : state.comments;
  const target = collection.find((item) => item.id === targetId);
  if (!target) {
    return;
  }

  if (!Array.isArray(target.likes)) {
    target.likes = [];
  }

  const index = target.likes.indexOf(state.session.username);
  if (index >= 0) {
    target.likes.splice(index, 1);
  } else {
    target.likes.push(state.session.username);
  }

  if (kind === "post") {
    persist(STORAGE_KEYS.posts, state.posts);
  } else {
    persist(STORAGE_KEYS.comments, state.comments);
  }

  renderPosts();
}

function renderLikeButton(button, likes, label, onClick) {
  const count = Array.isArray(likes) ? likes.length : 0;
  const liked = Boolean(state.session && likes?.includes(state.session.username));
  button.innerHTML = `<span class="like-icon" aria-hidden="true">👍</span><span>좋아요 ${count}</span>`;
  button.setAttribute("aria-label", `${label} 좋아요 ${count}`);
  button.classList.toggle("is-liked", liked);
  button.addEventListener("click", onClick);
}

function buildLikeAction(likes, label, onClick, extraClass = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `action-btn like-btn ${extraClass}`.trim();
  renderLikeButton(button, likes, label, onClick);
  return button;
}

function actionButton(label, onClick, extraClass = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `action-btn ${extraClass}`.trim();
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function formatDate(isoString) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(isoString));
}

function persistAll() {
  persist(STORAGE_KEYS.users, state.users);
  persist(STORAGE_KEYS.posts, state.posts);
  persist(STORAGE_KEYS.session, state.session);
  persist(STORAGE_KEYS.comments, state.comments);
}

function persist(key, value) {
  if (value === null) {
    localStorage.removeItem(key);
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
}

function showCustomPopup(title, message) {
  if (!customPopup || !customPopupTitle || !customPopupMessage) {
    return;
  }
  customPopupTitle.textContent = title;
  customPopupMessage.textContent = message;
  customPopup.classList.remove("hidden");
  customPopup.setAttribute("aria-hidden", "false");
}

function hideCustomPopup() {
  if (!customPopup) {
    return;
  }
  customPopup.classList.add("hidden");
  customPopup.setAttribute("aria-hidden", "true");
  if (state.popupReloadAfterClose) {
    state.popupReloadAfterClose = false;
    window.location.reload();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function load(key, fallback) {
  const stored = localStorage.getItem(key);
  if (!stored) {
    return fallback;
  }

  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error(`${key} 데이터를 읽지 못했습니다.`, error);
    return fallback;
  }
}

function normalizeComments(comments) {
  return comments.map((comment) => ({
    ...comment,
    parentId: comment.parentId ?? null,
    likes: Array.isArray(comment.likes) ? comment.likes : [],
    isAnonymous: Boolean(comment.isAnonymous),
    anonymousOwnerId: comment.anonymousOwnerId || "",
  }));
}

function normalizePosts(posts) {
  return posts.map((post) => ({
    ...post,
    likes: Array.isArray(post.likes) ? post.likes : [],
    reality: post.reality || "실제",
    isAnonymous: Boolean(post.isAnonymous),
    anonymousOwnerId: post.anonymousOwnerId || "",
    visualTheme: post.visualTheme || getVisualThemeByType(post.type),
    issuePoints: Array.isArray(post.issuePoints) ? post.issuePoints : [],
    analysisPrompts: Array.isArray(post.analysisPrompts) ? post.analysisPrompts : [],
    opsSummary: post.opsSummary || "",
    timeline: Array.isArray(post.timeline) ? post.timeline : [],
    relatedCases:
      Array.isArray(post.relatedCases) && post.relatedCases.length
        ? post.relatedCases
        : parseKeywordInput(post.clue || ""),
  }));
}

function ensureCuratedPosts() {
  CURATED_POSTS.forEach((post) => {
    const existingIndex = state.posts.findIndex((item) => item.id === post.id);
    if (existingIndex === -1) {
      state.posts.push(post);
      return;
    }

    const existing = state.posts[existingIndex];
    state.posts[existingIndex] = {
      ...post,
      likes: Array.isArray(existing.likes) ? existing.likes : [],
      reality: existing.reality || post.reality || "실제",
      authorUsername: existing.authorUsername || post.authorUsername,
      authorNickname: existing.authorNickname || post.authorNickname,
      isAnonymous: Boolean(existing.isAnonymous),
      anonymousOwnerId: existing.anonymousOwnerId || "",
      createdAt: existing.createdAt || post.createdAt,
    };
  });
}

function refreshMockCommentProfiles() {
  state.comments = state.comments.map((comment) => {
    const profile = MOCK_COMMENT_PROFILES[comment.createdAt];
    if (!profile || comment.parentId) {
      return comment;
    }

    return {
      ...comment,
      ...profile,
      isMockData: true,
    };
  });
}

function fillMissingPostSections() {
  state.posts = state.posts.map((post) => {
    const fallback = buildFallbackSections(post);
    const curated = CURATED_SECTION_OVERRIDES[post.id] || {};

    return {
      ...post,
      issuePoints: chooseSection(post.issuePoints, curated.issuePoints, fallback.issuePoints),
      analysisPrompts: chooseSection(
        post.analysisPrompts,
        curated.analysisPrompts,
        fallback.analysisPrompts,
      ),
      timeline: chooseSection(post.timeline, curated.timeline, fallback.timeline),
      relatedCases: chooseSection(post.relatedCases, curated.relatedCases, fallback.relatedCases),
    };
  });
}

function chooseSection(currentValue, curatedValue, fallbackValue) {
  if (Array.isArray(currentValue) && currentValue.length) {
    return currentValue;
  }
  if (Array.isArray(curatedValue) && curatedValue.length) {
    return curatedValue;
  }
  return fallbackValue;
}

function parseKeywordInput(rawValue) {
  return Array.from(
    new Set(
      String(rawValue || "")
        .split(/[\s,]+/)
        .map((item) => item.replace(/^#+/, "").trim())
        .filter(Boolean),
    ),
  ).slice(0, 6);
}

function buildFallbackSections(post) {
  const relatedCases = getRelatedPostTitles(post);

  return {
    issuePoints: [
      `${post.title}에서 가장 먼저 검증해야 할 핵심 진술과 기록은 무엇인지`,
      `${post.clue || "현재 남아 있는 단서"}가 우연한 정황인지 의도된 흔적인지`,
      `${post.reality === "픽션" ? "설정상 숨겨진 정보" : "공개된 자료"}만으로 배제하기 어려운 대안 가설이 무엇인지`,
    ],
    analysisPrompts: [
      "사건 전후 정보를 시간순으로 다시 정리해 보세요.",
      "장소, 목격, 증거 사이에 서로 충돌하는 지점이 있는지 확인해 보세요.",
      "추가 확인이 필요해 보이는 단서 세 가지를 골라 보세요.",
    ],
    timeline: [
      "사건 또는 현상이 처음 보고됨",
      "핵심 단서 또는 이상 징후가 확인됨",
      "여러 가설과 추가 조사 기록이 축적됨",
      "현재까지도 해석이 갈리며 토론이 이어짐",
    ],
    relatedCases: relatedCases.length > 0 ? relatedCases : ["유사 미제 사건", "장기 미스터리 사례", "재조명된 사건"],
  };
}

function getRelatedPostTitles(post) {
  return state.posts
    .filter((item) => item.id !== post.id)
    .sort((a, b) => {
      const sameTypeScore = Number(b.type === post.type) - Number(a.type === post.type);
      if (sameTypeScore !== 0) {
        return sameTypeScore;
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .slice(0, 3)
    .map((item) => item.title);
}

function getSharedKeywordSet(post) {
  const keywords = new Set();

  if (post.status === "미해결") {
    keywords.add("미제");
  }
  if (post.status === "부분 해결") {
    keywords.add("재수사");
  }
  if (post.type.includes("범죄")) {
    keywords.add("범죄미스터리");
  }
  if (post.type.includes("이상현상")) {
    keywords.add("이상현상");
  }
  if (/실종|사라|유괴|행방|흔적 없이/.test(`${post.title} ${post.clue} ${post.content}`)) {
    keywords.add("실종");
  }
  if (/바다|해역|선박|항해|해변|유령선/.test(`${post.title} ${post.clue} ${post.content}`)) {
    keywords.add("해양미스터리");
  }
  if (/정체불명|암호|신원|불명/.test(`${post.title} ${post.clue} ${post.content}`)) {
    keywords.add("정체불명");
  }
  if (keywords.size < 3) {
    keywords.add("장기미스터리");
  }

  return Array.from(keywords).slice(0, 3);
}

function setRealityValue(value) {
  if (!postForm?.elements?.reality) {
    return;
  }

  postForm.elements.reality.value = value;
  realityButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.reality === value);
  });
}

function getVisualThemeByType(type) {
  if (type === "국내 범죄") {
    return "theme-domestic-crime";
  }
  if (type === "해외 범죄") {
    return "theme-overseas-crime";
  }
  if (type === "국내 이상현상") {
    return "theme-domestic-anomaly";
  }
  return "theme-overseas-anomaly";
}

function getVisualLabel(type) {
  if (type === "국내 범죄") {
    return "Domestic Crime";
  }
  if (type === "해외 범죄") {
    return "Overseas Crime";
  }
  if (type === "국내 이상현상") {
    return "Domestic Anomaly";
  }
  return "Overseas Anomaly";
}

function fillAnalysisList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.append(li);
  });
}

function fillTimelineList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.append(li);
  });
}

function fillRelatedList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "related-pill";
    button.textContent = item;
    button.addEventListener("click", () => {
      const target = state.posts.find((post) => post.title === item);
      if (target) {
        navigateToPostDetail(target.id);
        return;
      }
      navigateToSearchResults(item);
    });
    element.append(button);
  });
}

function getAnonymousId() {
  const existing = load(STORAGE_KEYS.anonymousId, "");
  if (existing) {
    return existing;
  }

  const nextId = crypto.randomUUID();
  persist(STORAGE_KEYS.anonymousId, nextId);
  return nextId;
}

function getCurrentAuthor() {
  if (state.session) {
    return {
      authorUsername: state.session.username,
      authorNickname: state.session.nickname,
      isAnonymous: false,
      anonymousOwnerId: "",
    };
  }

  return {
    authorUsername: "guest",
    authorNickname: "익명",
    isAnonymous: true,
    anonymousOwnerId: state.anonymousId,
  };
}

function isOwner(item) {
  if (item.isAnonymous) {
    return item.anonymousOwnerId && item.anonymousOwnerId === state.anonymousId;
  }

  return Boolean(state.session && item.authorUsername === state.session.username);
}

