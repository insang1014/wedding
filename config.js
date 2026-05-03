/**
 * Original Warm Wedding Invitation Configuration
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
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "지현석",
    father: "",
    mother: "지정길",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이예나",
    father: "",
    mother: "김복순",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-27",
    time: "10:30",
    venue: "더파티움 안양 5층 브리에홀",
    address: "안양시 동안구 시민대로 311",
    mapLinks: {
      kakao: "https://place.map.kakao.com/138147430",
      naver: "https://naver.me/xPv39iaC"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "작은 인연으로 시작된 만남이\n서로의 일상이 되었습니다.\n\n그 소중한 이야기에 여러분을 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "지현석", bank: "국민은행", number: "913101-00-026572" },
      { role: "아버지", name: "지정길", bank: "농협은행", number: "581-12-000695" }
    ],
    bride: [
      { role: "신부", name: "이예나", bank: "하나은행", number: "157-910222-38007" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "지현석 ♥ 이예나 결혼합니다.",
    description: "2026년 6월 27일, 소중한 분들을 초대합니다."
  }
};
