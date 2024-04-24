// Hamburger
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav__content-list");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", (event) => {
        event.preventDefault();
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});

// Slider
class Slider {
    constructor(config) {
        this.slider = document.querySelector(config.el);
        this.sliderBox = this.slider.querySelector('.reviews__content-cards');
        this.sliderItem = this.sliderBox.children;
        this.next = this.slider.querySelector('.review__next');
        this.prev = this.slider.querySelector('.review__prev');

        this.height = this.slider.clientHeight;
        this.width = this.slider.clientWidth;
        this.moveSize = this.width;
        this.activeSlide = 0;
        this.sliderBox.style.position = 'relative';
        this.sliderBox.style.height = `${this.height}px`;
        this.sliderBox.style.overflow = 'hidden';

        for (let i = 0; i < this.sliderItem.length; i++) {
            const slides = this.sliderItem[i];
            slides.style.transition = '0ms';
            slides.style.position = 'absolute';
            slides.style.width = `${this.width}px`;

            if (i !== this.activeSlide) {
                slides.style.transform = `translateX(${this.moveSize}px)`;
            }
            if (i === this.sliderItem.length - 1) {
                slides.style.transform = `translateX(-${this.moveSize}px)`;
            }
        }

        this.next.addEventListener('click', () => this.clickBtn(this.next));
        this.prev.addEventListener('click', () => this.clickBtn(this.prev));
    }

    clickBtn(btn) {
        const nextOrPrev = btn === this.next ? this.moveSize * -1 : this.moveSize;

        for (let i = 0; i < this.sliderItem.length; i++) {
            const slides = this.sliderItem[i];
            slides.style.transition = '0ms';

            if (i !== this.activeSlide) {
                slides.style.transform = `translateX(${nextOrPrev * -1}px)`;
            }
        }

        this.sliderItem[this.activeSlide].style.transform = `translateX(${nextOrPrev}px)`;

        if (btn === this.next) {
            this.activeSlide++;

            if (this.activeSlide >= this.sliderItem.length) {
                this.activeSlide = 0;
            }
        } else if (btn === this.prev) {
            this.activeSlide--;

            if (this.activeSlide < 0) {
                this.activeSlide = this.sliderItem.length - 1;
            }
        }

        this.sliderItem[this.activeSlide].style.transform = 'translateX(0)';
    }
    startAutoplay() {
        this.autoplayTimer = setInterval(() => {
            this.clickBtn(this.next);
        }, this.autoplayInterval);
    }

    stopAutoplay() {
        clearInterval(this.autoplayTimer);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const slider = new Slider({
        el: '#carousel',
        autoplay: true, // Enable autoplay
        autoplayInterval: 500 // Autoplay interval: 5 seconds
    });
});

// Search
document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('search');
    const searchBtn = document.getElementById('search__btn');
    const searchClose = document.getElementById('search-close');

    searchBtn.addEventListener('click', () => {
        search.classList.add('show-search');
    });
    searchClose.addEventListener('click', () => {
        search.classList.remove('show-search');
    });

});
document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('login');
    const searchBtn = document.getElementById('login__btn');
    const searchClose = document.getElementById('login-close');

    searchBtn.addEventListener('click', () => {
        search.classList.add('show-login');
    });
    searchClose.addEventListener('click', () => {
        search.classList.remove('show-login');
    });

});


