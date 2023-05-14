
// HEADER ANIMATION SCROLL

let lastScrollPosition = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition) {
        // прокрутка вниз
        header.classList.add('header__scrolls');
    } else {
        // прокрутка вгору
        header.classList.remove('header__scrolls');
    }
    lastScrollPosition = currentScrollPosition;
});

// HEADER CLASS SCROLL

/* 
-Метод getBoundingClientRect() повертає об'єкт з даними DOMRect про розташування та розмір елемента. 
 Цей об'єкт містить властивості top, bottom, left, right, x, y, width та height. 
 Використовуючи ці значення можна визначити положення та розмір елемента на сторінці.
*/

const darkBlocks = document.querySelectorAll('._dark');

window.addEventListener('scroll', function () {
    let isIntersecting = false;
    for (let i = 0; i < darkBlocks.length; i++) {
        if (darkBlocks[i].getBoundingClientRect().bottom >= header.getBoundingClientRect().top
            && darkBlocks[i].getBoundingClientRect().top <= header.getBoundingClientRect().bottom) {
            isIntersecting = true;
            break;
        }
    }

    if (isIntersecting) {
        header.classList.add('header--light');
    } else {
        header.classList.remove('header--light');
    }
});



// PROJECTS SLIDER

new Swiper('.swiper', {

    // Підключення стрілок
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // // Scroll mouse
    // mousewheel: {
    //     sensitivity: 1,
    // },

    // Кількість слайдів
    slidesPerView: 2,

    // Відстань між слайдами
    spaceBetween: 20,

    // Швидкість зміни слайдів
    speed: 400,

    // slidesPerGroup: 2,

    // // Індекс слайду для перегляду
    // initialSlide: 1,

    // // Центрування слайду
    // centeredSlides: true,
});

// FANCYBOX

Fancybox.bind('[data-fancybox="gallery"]', {
    hideScrollbar: false,
});


// scroll__down

const scrollDown = document.getElementById('scroll__down');
const cubaxWalls = document.getElementById('cubax__walls');

scrollDown.addEventListener('click', () => {
    cubaxWalls.scrollIntoView({
        behavior: "smooth",
    });
});


// scroll__up

const scrollUp = document.querySelector('.scroll__up');
const sectionCubax = document.querySelector('.section__cubax');

scrollUp.addEventListener('click', () => {
    sectionCubax.scrollIntoView({
        behavior: "smooth",
    });
});



// QUESTION - Accordion

// Отримуємо доступ до селекторів елементів які нам потрібні!
const questionButtons = document.querySelectorAll('.question__button');

// зберігаємо посилання на попередню кнопку та текст.
let prevButton = null;
let prevText = null;

// Створюємо цикл для того щоб проходити по нашому масиву "questionButtons".
for (let i = 0; i < questionButtons.length; i++) {

    const questionText = document.querySelectorAll('.question__item-text');

    // зберігаємо елемент з масива "questionButtons".
    const button = questionButtons[i];
    const qText = questionText[i];

    // використовуємо метод addEventListener для додавання обробника подій.
    questionButtons[i].addEventListener('click', () => {

        // використовуємо властивість "classList" для додавання то для видалення класу!
        questionButtons[i].classList.toggle('active');

        // Робимо перевірку на наявність властивості "max-height".
        if (questionText[i].style.maxHeight) {
            questionText[i].style.maxHeight = null;
        } else {
            questionText[i].style.maxHeight = questionText[i].scrollHeight + 'px';
        }

        // Перевіряємо, чи є попередній елемент і видаляємо клас, якщо так.
        if (prevButton && prevButton !== button) {
            prevButton.classList.remove('active');
            prevText.style.maxHeight = null;
        }

        // Оновлюємо посилання на попередній елемент.
        prevButton = button;
        prevText = qText;
    });
}

// POPUP ANIMATION

// Зберігаємо посилання в змінну
const buttonsFeedback = document.querySelectorAll('.button__feedback');
const popupClose = document.querySelector('.popup__close');
const popupFeedBack = document.querySelector('.popup');
const body = document.querySelector('body');
const headerElement = document.querySelector('.header');

let transitionendHandler = () => {
    body.style.overflow = "";
    body.style.paddingRight = "";
    headerElement.style.paddingRight = "";
    console.log('good');
    popupFeedBack.removeEventListener('transitionend', transitionendHandler);
}

for (let i = 0; i < buttonsFeedback.length; i++) {
    buttonsFeedback[i].addEventListener('click', () => {
        popupFeedBack.classList.add('popup__active');

        // блокування scroll
        body.style.overflow = "hidden";
        body.style.paddingRight = "17px";
        headerElement.style.paddingRight = "17px";
    });
}

popupClose.addEventListener('click', () => {
    popupFeedBack.classList.remove('popup__active');
    popupFeedBack.addEventListener('transitionend', transitionendHandler);
});


// popup__house

const popupHouse = document.querySelector('.popup__house');
const houseBlock = document.querySelector('.house__block');
const houseClose = document.querySelector('.house__close');
const projectsSlidBtn = document.querySelectorAll('.projects__slid-btn');

for (let i = 0; i < projectsSlidBtn.length; i++) {
    projectsSlidBtn[i].addEventListener('click', () => {

        popupHouse.classList.add('popup__house-active');

        let scrollPositon = window.pageYOffset;
        console.log(scrollPositon);
        popupHouse.style.top = `${scrollPositon}px`;

        let popupHouseHeight =  popupHouse.clientHeight;
        // body.style.height = `${popupHouseHeight}px`;
        console.log(popupHouseHeight);

        let bodyTop = -parseInt(scrollPositon)
        body.style.top = `-${bodyTop}px`;
        let bodyBottom = -parseInt(popupHouseHeight);

        body.style.bottom = `-${bodyBottom}px`;
        console.log(bodyTop);


        // body.style.overflow = "hidden";
        


    })
}

houseClose.addEventListener('click', () => {
    popupHouse.classList.remove('popup__house-active');
    let scrollPositon = window.pageYOffset;
    body.style.top = `-${scrollPositon}`;
})




// Потрібно спробувати створити масив який буде містити активовані елементи!



// function pow(x, n) {
//     x = +prompt('Введіть число x:', '');
//     if (x === 0) {
//         return alert('Потрібно ввести число!')
//     }

//     n = +prompt('Введіть степінь n:', '');
//     if (n === 0) {
//         return alert('Потрібно ввести число!')
//     }
//     return x ** n;
// }

// alert(`Результат: ${pow()}`);


// let age = prompt("Скільки вам років?", 18);

// let welcome = (age < 18) ?
//     function () { alert("Привіт!"); } :
//     function () { alert("Вітання!"); };

// console.log(welcome());


// let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );

