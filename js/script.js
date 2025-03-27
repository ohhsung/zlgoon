window.onload = () => {
  // 헤더
  let header = document.querySelector('.header');
  let headerLogo = document.querySelector('.logo img')

  let section02 = document.querySelector('.section-02');

  let footer = document.querySelector('.footer');
  let topBtn = document.querySelector('.top-btn');

  let section02Top = section02.offsetTop;
  let footerTop = footer.offsetTop;

  let windowHeight = window.innerHeight;

  window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    
    if (scroll > 1) {
      headerLogo.src = 'img/logo/logo.png';
      header.classList.add('active');
    } else {
      headerLogo.src = 'img/logo/logo_wh.png';
      header.classList.remove('active');
    }

    // 탑버튼 푸터위 고정
    if (windowHeight + scroll >= footerTop) {
      topBtn.classList.add('active')
    } else {
      topBtn.classList.remove('active')
    }

    // 탑버튼 생성 제거
    if (windowHeight + scroll >= section02Top) {
      topBtn.classList.add('show')
    } else {
      topBtn.classList.remove('show')
    }

  });

  // 섹션 2 슬라이더
  var swiper = new Swiper(".swiperSection02", {
    slidesPerView: 'auto',
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

  // 섹션 4 배너 자동 슬라이더
  var swiper = new Swiper(".swiperSection04", {
    slidesPerView: 6.3,
    spaceBetween: 20,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 3000,
  });

  let footerBtn = document.querySelector('.family-site .btn');
  let footerGnb = document.querySelector('.family-site .gnb');

  footerBtn.addEventListener('click', () => {
    footerGnb.classList.toggle('active')
  });
};