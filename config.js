/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "정재근",
    nameEn: "Groom",
    father: "정성현",
    mother: "송태실",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "최수빈",
    nameEn: "Bride",
    father: "최귀술",
    mother: "오명희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-27",
    time: "11:00",
    venue: "더 시그너스 웨딩홀",
    hall: "3층 단독홀",
    address: "전남광주특별시 서구 죽봉대로 52, 교직원공제회관 3층",
    tel: "062-361-3737",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1028985969",
      naver: "https://naver.me/GfCSi211"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "정재근", bank: "하나은행", number: "126-910823-36307" },
      { role: "아버지", name: "정성현", bank: "하나은행", number: "181-910158-58107" },
      { role: "어머니", name: "송태실", bank: "농협", number: "176031-51-033217" }
    ],
    bride: [
      { role: "신부", name: "최수빈", bank: "국민은행", number: "796201-01-597566" },
      { role: "아버지", name: "최귀술", bank: "하나은행", number: "722-910301-86807" },
      { role: "어머니", name: "오명희", bank: "농협", number: "635044-52-162381" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "정재근 ♥ 최수빈 결혼합니다",
    description: "2026년 12월 27일, 소중한 분들을 초대합니다."
  }
};
