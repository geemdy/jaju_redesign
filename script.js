// script.js

document.addEventListener("DOMContentLoaded", function () {
  /* ================== 메인 슬라이드 ================== */
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const barFill = document.querySelector(".slider-bar-fill");

  let currentIndex = 0;
  const totalSlides = slides.length;
  let timer = null;

  if (totalSlides > 0 && barFill) {
    barFill.style.width = `${100 / totalSlides}%`;
  }

  function updateSliderBar() {
    if (!barFill) return;
    const offset = 100 * currentIndex;
    barFill.style.transform = `translateX(${offset}%)`;
  }

  function goToSlide(index) {
    if (!totalSlides) return;
    slides[currentIndex].classList.remove("active");
    currentIndex = (index + totalSlides) % totalSlides;
    slides[currentIndex].classList.add("active");
    updateSliderBar();
  }

  function startAutoSlide() {
    stopAutoSlide();
    timer = setInterval(function () {
      goToSlide(currentIndex + 1);
    }, 4000);
  }

  function stopAutoSlide() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  if (totalSlides > 0) {
    slides[0].classList.add("active");
    updateSliderBar();
    startAutoSlide();
  }

  if (slider) {
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);
  }

  /* ================== 로고 클릭 시 새로고침 ================== */
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", function () {
      window.location.reload();
    });
  }

  /* ================== 이번 주 인기상품 데이터 ================== */
  const weeklyData = {
    womenfashion: {
      products: [
        {
          id: "women-main",
          featured: true,
          category: "여성 하의",
          name: "여 데님 밴딩 팬츠",
          price: "49,900원",
          img: "img/weekly/women-main.jpg",
        },
        {
          id: "women-1",
          category: "여성 하의",
          name: "여 루즈핏 와이드 데님 팬츠",
          price: "49,000원",
          img: "img/weekly/women-1.jpg",
        },
        {
          id: "women-2",
          category: "여성 상의",
          name: "여 워싱 카라 긴팔 티셔츠",
          price: "49,000원",
          img: "img/weekly/women-2.jpg",
        },
        {
          id: "women-3",
          category: "여성 상의",
          name: "여 루즈핏 셔링 블라우스",
          price: "49,000원",
          img: "img/weekly/women-3.jpg",
        },
        {
          id: "women-4",
          category: "여성 상의",
          name: "여 루즈핏 소매 셔링 블라우스",
          price: "39,900원",
          img: "img/weekly/women-4.jpg",
        },
        {
          id: "women-5",
          category: "여성 원피스",
          name: "여 돌담 체크 반팔 원피스",
          price: "69,900원",
          img: "img/weekly/women-5.jpg",
        },
        {
          id: "women-6",
          category: "여성 아우터",
          name: "여 라이트 패딩 루즈핏 언발란스 자켓",
          price: "69,900원",
          img: "img/weekly/women-6.jpg",
        },
        {
          id: "women-7",
          category: "여성 상의",
          name: "여 소프트 모크넥 5부 티셔츠",
          price: "19,900원",
          img: "img/weekly/women-7.jpg",
        },
        {
          id: "women-8",
          category: "여성 하의",
          name: "여 쿠션 와이드 팬츠",
          price: "39,900원",
          img: "img/weekly/women-8.jpg",
        },
      ],
    },

    menfashion: {
      products: [
        {
          id: "men-main",
          featured: true,
          category: "남성 아우터",
          name: "남 코듀로이 카라 자켓",
          price: "79,900원",
          img: "img/weekly/men-main.jpg",
        },
        {
          id: "men-1",
          category: "남성 상의",
          name: "남 도톰 긴팔 티셔츠",
          price: "29,000원",
          img: "img/weekly/men-1.jpg",
        },
        {
          id: "men-2",
          category: "남성 아우터",
          name: "남 라이트 패딩 봄버 점퍼",
          price: "79,900원",
          img: "img/weekly/men-2.jpg",
        },
        {
          id: "men-3",
          category: "남성 상의",
          name: "남 라이트 플란넬 체크 셔츠",
          price: "49,900원",
          img: "img/weekly/men-3.jpg",
        },
        {
          id: "men-4",
          category: "남성 상의",
          name: "남 워싱 스웨트 셔츠",
          price: "49,900원",
          img: "img/weekly/men-4.jpg",
        },
        {
          id: "men-5",
          category: "남성 하의",
          name: "남 데님 밴딩 팬츠",
          price: "49,900원",
          img: "img/weekly/men-5.jpg",
        },
        {
          id: "men-6",
          category: "남성 하의",
          name: "남 스트레이트 데님 팬츠",
          price: "49,900원",
          img: "img/weekly/men-6.jpg",
        },
        {
          id: "men-7",
          category: "남성 상의",
          name: "남 데님 셔츠",
          price: "49,900원",
          img: "img/weekly/men-7.jpg",
        },
        {
          id: "men-8",
          category: "남성 상의",
          name: "남 스마트 코튼 반팔 티셔츠",
          price: "19,900원",
          img: "img/weekly/men-8.jpg",
        },
      ],
    },

    pajamafashion: {
      products: [
        {
          id: "pajama-main",
          featured: true,
          category: "여성 라운지웨어",
          name: "남 코듀로이 카라 자켓",
          price: "79,900원",
          img: "img/weekly/pajama-main.jpg",
        },
        {
          id: "pajama-1",
          category: "남성 라운지웨어",
          name: "남 피치스킨 라운지 세트",
          price: "49,000원",
          img: "img/weekly/pajama-1.jpg",
        },
        {
          id: "pajama-2",
          category: "남성 파자마",
          name: "남 스마트 코튼 10부 파자마 세트",
          price: "49,000원",
          img: "img/weekly/pajama-2.jpg",
        },
        {
          id: "pajama-3",
          category: "남성 파자마",
          name: "남 코튼 리오셀 파자마 세트",
          price: "69,900원",
          img: "img/weekly/pajama-3.jpg",
        },
        {
          id: "pajama-4",
          category: "남성 라운지웨어",
          name: "남 워스마트 코튼 라운드넥 긴팔 라운지 티셔츠",
          price: "25,900원",
          img: "img/weekly/pajama-4.jpg",
        },
        {
          id: "pajama-5",
          category: "여성 파자마",
          name: "여 피치스킨 10부 파자마 세트",
          price: "49,900원",
          img: "img/weekly/pajama-5.jpg",
        },
        {
          id: "pajama-6",
          category: "여성 파자마",
          name: "여 피치스킨 10부 파자마 팬츠",
          price: "25,900원",
          img: "img/weekly/pajama-6.jpg",
        },
        {
          id: "pajama-7",
          category: "여성 파자마",
          name: "여 이중지 패턴 파자마 로브",
          price: "49,900원",
          img: "img/weekly/pajama-7.jpg",
        },
        {
          id: "pajama-8",
          category: "여성 파자마",
          name: "여 플란넬 파자마 원피스",
          price: "49,900원",
          img: "img/weekly/pajama-8.jpg",
        },
      ],
    },

    uwfashion: {
      products: [
        {
          id: "uw-main",
          featured: true,
          category: "여성 언더웨어",
          name: "여 모달 저자극 힙허거 팬티 3매",
          price: "19,900원",
          img: "img/weekly/uw-main.jpg",
        },
        {
          id: "uw-1",
          category: "남성 언더웨어",
          name: "남 120수 모달 노라인 드로즈 팬티",
          price: "15,900원",
          img: "img/weekly/uw-1.jpg",
        },
        {
          id: "uw-2",
          category: "남성 언더웨어",
          name: "남 50수 코튼 런닝",
          price: "9,900원",
          img: "img/weekly/uw-2.jpg",
        },
        {
          id: "uw-3",
          category: "남성 언더웨어",
          name: "남 80수 코튼 트렁크 팬티",
          price: "15,900원",
          img: "img/weekly/uw-3.jpg",
        },
        {
          id: "uw-4",
          category: "남성 언더웨어",
          name: "남녀공용 코튼 라운드넥 티셔츠 3매",
          price: "19,900원",
          img: "img/weekly/uw-4.jpg",
        },
        {
          id: "uw-5",
          category: "여성 언더웨어",
          name: "여 120수 모달 노라인 브라캐미솔",
          price: "29,900원",
          img: "img/weekly/uw-5.jpg",
        },
        {
          id: "uw-6",
          category: "여성 언더웨어",
          name: "여 코튼 체크 힙허거 팬티 3매",
          price: "9,900원",
          img: "img/weekly/uw-6.jpg",
        },
        {
          id: "uw-7",
          category: "여성 언더웨어",
          name: "여 720도 스트레치 코튼 브라렛",
          price: "29,900원",
          img: "img/weekly/uw-7.jpg",
        },
        {
          id: "uw-8",
          category: "여성 언더웨어",
          name: "여 코튼 립 롱 크롭브라",
          price: "29,900원",
          img: "img/weekly/uw-8.jpg",
        },
      ],
    },

    fashionacc: {
      products: [
        {
          id: "acc-main",
          featured: true,
          category: "가방",
          name: "초경량 패커블 파우치 M",
          price: "11,900원",
          img: "img/weekly/acc-main.jpg",
        },
        {
          id: "acc-1",
          category: "가방",
          name: "사각사각 짐백",
          price: "49,900원",
          img: "img/weekly/acc-1.jpg",
        },
        {
          id: "acc-2",
          category: "가방",
          name: "돌담 보따리 숄더백",
          price: "49,900원",
          img: "img/weekly/acc-2.jpg",
        },
        {
          id: "acc-3",
          category: "가방",
          name: "돌담 토드백",
          price: "39,900원",
          img: "img/weekly/acc-3.jpg",
        },
        {
          id: "acc-4",
          category: "모자",
          name: "패턴 니트 햇",
          price: "39,900원",
          img: "img/weekly/acc-4.jpg",
        },
        {
          id: "acc-5",
          category: "가방",
          name: "초경량 행잉 오거나이저",
          price: "29,900원",
          img: "img/weekly/acc-5.jpg",
        },
        {
          id: "acc-6",
          category: "슈즈",
          name: "컬러 클로그",
          price: "39,900원",
          img: "img/weekly/acc-6.jpg",
        },
        {
          id: "acc-7",
          category: "양말",
          name: "남 도톰 코튼 스트라이프 장목 양말 1족",
          price: "5,900원",
          img: "img/weekly/acc-7.jpg",
        },
        {
          id: "acc-8",
          category: "양말",
          name: "남 코튼 무압박 단목 양말 1족",
          price: "5,900원",
          img: "img/weekly/acc-8.jpg",
        },
      ],
    },

    fabric: {
      products: [
        {
          id: "fabric-main",
          featured: true,
          category: "베개",
          name: "와이드핏 분할 경추 베개_60x38cm",
          price: "29,900원",
          img: "img/weekly/fabric-main.jpg",
        },
        {
          id: "fabric-1",
          category: "수건/타월",
          name: "뱀부 세면타월 2개 베이지",
          price: "15,900원",
          img: "img/weekly/fabric-1.jpg",
        },
        {
          id: "fabric-2",
          category: "수건/타월",
          name: "거즈 경량 세면타월 화이트",
          price: "5,900원",
          img: "img/weekly/fabric-2.jpg",
        },
        {
          id: "fabric-3",
          category: "이불",
          name: "스트라이프 피치스킨 차렵이불 SS 틸블루",
          price: "25,900원",
          img: "img/weekly/fabric-3.jpg",
        },
        {
          id: "fabric-4",
          category: "거실화/쿠션/러그",
          name: "퀄팅 워셔블 거실화 M 베이지",
          price: "11,900원",
          img: "img/weekly/fabric-4.jpg",
        },
        {
          id: "fabric-5",
          category: "패드/토퍼/커버",
          name: "침대시트 고정집게 65-130cm 4입",
          price: "7,900원",
          img: "img/weekly/fabric-5.jpg",
        },
        {
          id: "fabric-6",
          category: "이불",
          name: "먼지가 적은 진드기 방지 차렵이불 SS 화이트",
          price: "69,900원",
          img: "img/weekly/fabric-6.jpg",
        },
        {
          id: "fabric-7",
          category: "이불",
          name: "밍크 폴리스 극세사 블랭킷 140x170cm 네이비",
          price: "29,900원",
          img: "img/weekly/fabric-7.jpg",
        },
        {
          id: "fabric-8",
          category: "베개",
          name: "낮은 경추 지지형 베개솜 60x40cm",
          price: "11,900원",
          img: "img/weekly/fabric-8.jpg",
        },
      ],
    },

    clean: {
      products: [
        {
          id: "clean-main",
          featured: true,
          category: "욕실/청소",
          name: "싹쓸이 스퀴지",
          price: "5,900원",
          img: "img/weekly/clean-1.jpg",
        },
        {
          id: "clean-1",
          category: "욕실/청소",
          name: "물때가 안 끼는 샤워 호스 1.7M",
          price: "5,900원",
          img: "img/weekly/clean-2.jpg",
        },
        {
          id: "clean-2",
          category: "욕실/청소",
          name: "간편 벽걸이 스테인리스 걸이",
          price: "7,900원",
          img: "img/weekly/clean-3.jpg",
        },
        {
          id: "clean-3",
          category: "욕실/청소",
          name: "깨끗한 욕실 청소솔",
          price: "7,900원",
          img: "img/weekly/clean-4.jpg",
        },
        {
          id: "clean-4",
          category: "욕실/청소",
          name: "간편하게 사용하는 실리콘 미니 스퀴지 2개입",
          price: "19,800원",
          img: "img/weekly/clean-5.jpg",
        },
        {
          id: "clean-5",
          category: "욕실/청소",
          name: "대나무 휴대용 티슈 3개",
          price: "4,900원",
          img: "img/weekly/clean-6.jpg",
        },
        {
          id: "clean-6",
          category: "욕실/청소",
          name: "바꿔쓰는 필터 3입",
          price: "7,900원",
          img: "img/weekly/clean-7.jpg",
        },
        {
          id: "clean-7",
          category: "욕실/청소",
          name: "스테인리스 부착 변기솔",
          price: "25,900원",
          img: "img/weekly/clean-8.jpg",
        },
        {
          id: "clean-8",
          category: "욕실/청소",
          name: "탄탄 틈새솔 그레이",
          price: "7,900원",
          img: "img/weekly/clean-9.jpg",
        },
      ],
    },

    living: {
      products: [
        {
          id: "living-main",
          featured: true,
          category: "수납/정리",
          name: "벤트 우드 원목 논슬립 옷걸이 3개 42cm",
          price: "6,900원",
          img: "img/weekly/living-main.jpg",
        },
        {
          id: "living-1",
          category: "공구/가구/DIY",
          name: "튼튼한 2단 접이식 사다리 그레이",
          price: "39,900원",
          img: "img/weekly/living-1.jpg",
        },
        {
          id: "living-2",
          category: "카트/생활잡화",
          name: "자석형 세라믹 택배칼 2개",
          price: "9,900원",
          img: "img/weekly/living-2.jpg",
        },
        {
          id: "living-3",
          category: "수납/정리",
          name: "데일리 3단 서랍장 44x36x77cm",
          price: "159,000원",
          img: "img/weekly/living-3.jpg",
        },
        {
          id: "living-4",
          category: "수납/정리",
          name: "라인 PVC 바지걸이 20개 그레이",
          price: "29,900원",
          img: "img/weekly/living-4.jpg",
        },
        {
          id: "living-5",
          category: "수납/정리",
          name: "옷장 깔끔 속옥 정리함 24칸 그레이",
          price: "15,900원",
          img: "img/weekly/living-5.jpg",
        },
        {
          id: "living-6",
          category: "카트/생활잡화",
          name: "니트 양말 슬립 보드 4P",
          price: "5,900원",
          img: "img/weekly/living-6.jpg",
        },
        {
          id: "living-7",
          category: "카트/생활잡화",
          name: "굽히지 않고 편하게 신는 구둣주걱",
          price: "7,900원",
          img: "img/weekly/living-7.jpg",
        },
        {
          id: "living-8",
          category: "카트/생활잡화",
          name: "메탈 접이식 손거울",
          price: "4,900원",
          img: "img/weekly/living-8.jpg",
        },
      ],
    },

    kitchen: {
      products: [
        {
          id: "kitchen-main",
          featured: true,
          category: "프라이팬/냄비/찜기",
          name: "스테인리스 찜기+돔형뚜껑 세트 20-24cm",
          price: "35,900원",
          img: "img/weekly/kitchen-main.jpg",
        },
        {
          id: "kitchen-1",
          category: "주방수납/정리",
          name: "스텐 와이어팬 정리대 세로형",
          price: "19,900원",
          img: "img/weekly/kitchen-1.jpg",
        },
        {
          id: "kitchen-2",
          category: "프라이팬/냄비/찜기",
          name: "면 삶을 때 좋은 넓은 스텐냄비 24cm",
          price: "49,900원",
          img: "img/weekly/kitchen-2.jpg",
        },
        {
          id: "kitchen-3",
          category: "조리도구",
          name: "자주 쓰는 스테인리스 조리도구 6P",
          price: "49,900원",
          img: "img/weekly/kitchen-3.jpg",
        },
        {
          id: "kitchen-4",
          category: "밀폐용기/저장용기",
          name: "스테인리스 원형 세칸나눔찬통 600ml",
          price: "13,900원",
          img: "img/weekly/kitchen-4.jpg",
        },
        {
          id: "kitchen-5",
          category: "주방잡화",
          name: "자주 쓰는 고무장갑 36cm 2개 라이트베이지",
          price: "5,900원",
          img: "img/weekly/kitchen-5.jpg",
        },
        {
          id: "kitchen-6",
          category: "프라이팬/냄비/찜기",
          name: "논스틱 코팅 프라이팬 20cm",
          price: "11,900원",
          img: "img/weekly/kitchen-6.jpg",
        },
        {
          id: "kitchen-7",
          category: "주방잡화",
          name: "사탕수수 위생장갑 200매",
          price: "3,900원",
          img: "img/weekly/kitchen-7.jpg",
        },
        {
          id: "kitchen-8",
          category: "밀폐용기/저장용기",
          name: "사탕수수 패턴 지퍼백 중형 50매",
          price: "5,900원",
          img: "img/weekly/kitchen-8.jpg",
        },
      ],
    },

    tableware: {
      products: [
        {
          id: "tableware-main",
          featured: true,
          category: "식기/그릇/쟁반",
          name: "다미 원형 접시 소 16cm",
          price: "10,900원",
          img: "img/weekly/tableware-main.jpg",
        },
        {
          id: "tableware-1",
          category: "잔/컵/물병",
          name: "내열 스태킹 유리잔 340ml",
          price: "6,900원",
          img: "img/weekly/tableware-1.jpg",
        },
        {
          id: "tableware-2",
          category: "수저/양식기",
          name: "슬림 라인 티스푼 2개입",
          price: "7,900원",
          img: "img/weekly/tableware-2.jpg",
        },
        {
          id: "tableware-3",
          category: "식기/그릇/쟁반",
          name: "오발형 월넛 우드 쟁반 34x22cm",
          price: "15,900원",
          img: "img/weekly/tableware-3.jpg",
        },
        {
          id: "tableware-4",
          category: "수저/양식기",
          name: "지음 디저트 포크 2개",
          price: "9,900원",
          img: "img/weekly/tableware-4.jpg",
        },
        {
          id: "tableware-5",
          category: "스낵",
          name: "소면오징어",
          price: "2,900원",
          img: "img/weekly/tableware-5.jpg",
        },
        {
          id: "tableware-6",
          category: "수저/양식기",
          name: "옻칠 수저 세트 4P",
          price: "23,900원",
          img: "img/weekly/tableware-6.jpg",
        },
        {
          id: "tableware-7",
          category: "식기/그릇/쟁반",
          name: "논슬립 컬러 사각쟁반 36x28cm 차콩",
          price: "19,900원",
          img: "img/weekly/tableware-7.jpg",
        },
        {
          id: "tableware-8",
          category: "잔/컵/물병",
          name: "다미 커피잔",
          price: "6,900원",
          img: "img/weekly/tableware-8.jpg",
        },
      ],
    },

    beauty: {
      products: [
        {
          id: "beauty-main",
          featured: true,
          category: "홈 프래그런스",
          name: "자주 라벤더 민트 히말라야 배쓰솔트 650g",
          price: "11,900원",
          img: "img/weekly/beauty-main.jpg",
        },
        {
          id: "beauty-1",
          category: "미용소품",
          name: "전동코털깎이 블랙",
          price: "8,900원",
          img: "img/weekly/beauty-1.jpg",
        },
        {
          id: "beauty-2",
          category: "미용소품",
          name: "환경을 생각한 착한 소재 비누망 그레이",
          price: "1,900원",
          img: "img/weekly/beauty-2.jpg",
        },
        {
          id: "beauty-3",
          category: "구강용품",
          name: "초극세모 혀클리너 그레이",
          price: "4,500원",
          img: "img/weekly/beauty-3.jpg",
        },
        {
          id: "beauty-4",
          category: "구강용품",
          name: "스펀지 치실 50M",
          price: "2,900원",
          img: "img/weekly/beauty-4.jpg",
        },
        {
          id: "beauty-5",
          category: "뷰티",
          name: "자주 소나무 두피 진정 샴푸 500ml",
          price: "15,900원",
          img: "img/weekly/beauty-5.jpg",
        },
        {
          id: "beauty-6",
          category: "뷰티",
          name: "자주 소나무 두피 진정 스케일러 200ml",
          price: "13,900원",
          img: "img/weekly/beauty-6.jpg",
        },
        {
          id: "beauty-7",
          category: "미용소품",
          name: "깔끔한 엠보형 흑면봉 200P",
          price: "3,900원",
          img: "img/weekly/beauty-7.jpg",
        },
        {
          id: "beauty-8",
          category: "홈 프래그런스",
          name: "자주 레몬 스피어민트 바디 스프레이 250ml",
          price: "9,900원",
          img: "img/weekly/beauty-8.jpg",
        },
      ],
    },

    digital: {
      products: [
        {
          id: "digital-main",
          featured: true,
          category: "모바일/컴퓨터용",
          name: "마그네틱 스피커 베이지",
          price: "39,900원",
          img: "img/weekly/digital-main.jpg",
        },
        {
          id: "digital-1",
          category: "모바일/컴퓨터용품",
          name: "메탈 데스크용 멀티탭 수납함 카키",
          price: "19,900원",
          img: "img/weekly/digital-1.jpg",
        },
        {
          id: "digital-2",
          category: "멀티탭",
          name: "슬림 절전 멀티탭 4구 4.5M",
          price: "19,900원",
          img: "img/weekly/digital-2.jpg",
        },
        {
          id: "digital-3",
          category: "멀티탭",
          name: "슬림 개별 절전 멀티탭 4구 2.5M",
          price: "23,900원",
          img: "img/weekly/digital-3.jpg",
        },
        {
          id: "digital-4",
          category: "모바일/컴퓨터용",
          name: "자주 쓰는 멀티탭 보관함",
          price: "23,900원",
          img: "img/weekly/digital-4.jpg",
        },
        {
          id: "digital-5",
          category: "생활/시즌 가전",
          name: "PD로 더 빠른 고속 3포트 충전기(65W)",
          price: "49,900원",
          img: "img/weekly/digital-5.jpg",
        },
        {
          id: "digital-6",
          category: "멀티탭",
          name: "USB 4포트로 더 빠른 멀티탭 3구 2.5M",
          price: "39,900원",
          img: "img/weekly/digital-6.jpg",
        },
        {
          id: "digital-7",
          category: "생활/시즌 가전",
          name: "고속 충전 보조배터리(10,000mAh) 틸블루",
          price: "35,900원",
          img: "img/weekly/digital-7.jpg",
        },
        {
          id: "digital-8",
          category: "모바일/컴퓨터용",
          name: "오래 사용하는 C타입용 고속 케이블(2M)",
          price: "8,900원",
          img: "img/weekly/digital-8.jpg",
        },
      ],
    },
  };

  /* ================== 이번 주 인기상품 렌더링 ================== */
  const mainArea = document.querySelector(".weekly-main-product");
  const gridArea = document.querySelector(".weekly-grid");
  const tabButtons = document.querySelectorAll(".weekly-tab");

  if (mainArea && gridArea && tabButtons.length > 0) {
    // 찜 상태 저장용
    const likedSet = new Set();

    function renderWeekly(categoryKey) {
      const data = weeklyData[categoryKey];
      if (!data) return;

      const products = data.products;
      const main = products.find((p) => p.featured);
      const others = products.filter((p) => !p.featured);

      // 큰 카드
      mainArea.innerHTML = `
          <article class="weekly-card weekly-card--main">
            <a href="#!" class="weekly-link">
              <div class="weekly-thumb">
                <img src="${main.img}" alt="${main.name}" />
              </div>
            </a>
          </article>
        `;

      // 작은 카드 8개
      gridArea.innerHTML = others
        .map(
          (p) => `
            <article class="weekly-card weekly-card--small">
              <a href="#!" class="weekly-link">
                <div class="weekly-thumb">
                  <img src="${p.img}" alt="${p.name}" />
                </div>
                <div class="weekly-info weekly-info--small">
                  <div class="info-top">
                    <div class="info-text">
                      <span class="weekly-tag">${p.category}</span>
                      <h3 class="weekly-name">${p.name}</h3>
                      <p class="weekly-price">${p.price}</p>
                    </div>
                    <button type="button"
                            class="heart-btn ${
                              likedSet.has(p.id) ? "liked" : ""
                            }"
                            data-id="${p.id}"></button>
                  </div>
                </div>
              </a>
            </article>
          `
        )
        .join("");
    }

    // 탭 클릭 시 카테고리 변경
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const categoryKey = btn.dataset.category;
        tabButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderWeekly(categoryKey);
      });
    });

    gridArea.addEventListener("click", (e) => {
      const heart = e.target.closest(".heart-btn");
      if (!heart) return;

      // a 태그 클릭 막기
      e.preventDefault();
      e.stopPropagation();

      const id = heart.dataset.id;
      if (!id) return;

      if (likedSet.has(id)) {
        likedSet.delete(id);
        heart.classList.remove("liked");
      } else {
        likedSet.add(id);
        heart.classList.add("liked");
      }
    });

    renderWeekly("clean");
  }

  /* ================== 가을밤 섹션 하트 ================== */
  const fallSmallHearts = document.querySelectorAll(".fall-like-btn");
  fallSmallHearts.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.classList.toggle("is-on");
    });
  });

  const fallBigHearts = document.querySelectorAll(".heart-btn--unit");
  fallBigHearts.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.classList.toggle("liked");
    });
  });

  /* ================== 신제품 슬라이드 ================== */
  const newViewport = document.querySelector(".new-viewport");
  const newTrack = document.querySelector(".new-track");
  const newItems = document.querySelectorAll(".new-item");
  const newPrev = document.querySelector(".new-arrow--prev");
  const newNext = document.querySelector(".new-arrow--next");
  const newPageBtns = document.querySelectorAll(".new-page[data-page]");

  if (newViewport && newTrack && newItems.length > 0) {
    const perPage = 4;
    const totalPages = Math.ceil(newItems.length / perPage);
    let currentPage = 0;
    let viewportWidth = newViewport.clientWidth;

    function updateTransform() {
      viewportWidth = newViewport.clientWidth;
      const totalWidth = newTrack.scrollWidth;
      const maxOffset = Math.max(0, totalWidth - viewportWidth);

      let offset;
      if (currentPage === totalPages - 1) {
        offset = maxOffset;
      } else {
        offset = viewportWidth * currentPage;
      }

      newTrack.style.transform = `translateX(-${offset}px)`;
    }

    function updateArrows() {
      if (!newPrev || !newNext) return;

      // 첫 페이지 → 왼쪽 화살표 숨김
      if (currentPage === 0) {
        newPrev.classList.add("is-hidden");
      } else {
        newPrev.classList.remove("is-hidden");
      }

      // 마지막 페이지 → 오른쪽 화살표 숨김
      if (currentPage === totalPages - 1) {
        newNext.classList.add("is-hidden");
      } else {
        newNext.classList.remove("is-hidden");
      }
    }

    function goToPage(page) {
      if (page < 0 || page >= totalPages) return;
      currentPage = page;
      updateTransform();

      // 페이지 버튼 상태
      newPageBtns.forEach((btn) => btn.classList.remove("is-active"));
      const activeBtn = document.querySelector(
        `.new-page[data-page="${currentPage}"]`
      );
      if (activeBtn) activeBtn.classList.add("is-active");

      // 화살표 표시/숨기기
      updateArrows();
    }

    // 화살표 클릭
    if (newPrev) {
      newPrev.addEventListener("click", () => {
        goToPage(currentPage - 1);
      });
    }
    if (newNext) {
      newNext.addEventListener("click", () => {
        goToPage(currentPage + 1);
      });
    }

    // 숫자 버튼 클릭
    newPageBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const page = Number(btn.dataset.page);
        goToPage(page);
      });
    });

    window.addEventListener("resize", updateTransform);

    // 초기 페이지
    goToPage(0);
  }
});
