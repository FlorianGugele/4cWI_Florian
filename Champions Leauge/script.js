let scrollPosition = 0;

    function scrollRight() {
        scrollPosition -= 1;
        updateScroll();
    }

    function updateScroll() {
        const container = document.querySelector('.flex.items-center');
        const scrollValue = `${scrollPosition * 100}%`;
        container.style.transform = `translateX(${scrollValue})`;
    }