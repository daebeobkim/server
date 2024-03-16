window.addEventListener('scroll', function () {
    // 현재 스크롤 위치를 가져옵니다.
    var scrollPosition = window.scrollY;

    // 배경색을 변경합니다.
    if (scrollPosition > 100) {
        document.body.style.backgroundColor = 'lightblue';
    } else {
        document.body.style.backgroundColor = 'white';
    }
});
