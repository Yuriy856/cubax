
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

    // Scroll mouse
    mousewheel: {
        sensitivity: 1,
    },

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

// function pow(x, n) {
//     if (n < 0) return NaN;
//     if (Math.round(n) != n) return NaN;

//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }


// console.log(pow(3, 4.1));

// POPUP ANIMATION

const buttonsFeedback = document.querySelectorAll('.button__feedback');
const popupClose = document.querySelector('.popup__close');
const popupFeedBack = document.querySelector('.popup');

for (let i = 0; i < buttonsFeedback.length; i++) {
    buttonsFeedback[i].addEventListener('click', () => {
        popupFeedBack.classList.add('popup__active');
    })
}

popupClose.addEventListener('click', () => {
    popupFeedBack.classList.remove('popup__active');
})






































// Потрібно спробувати створити масив який буде містити активовані елементи!



// const questioBtns = document.getElementsByClassName("question__button");

// for (let i = 0; i < questioBtns.length; i++) {

//     questioBtns[i].addEventListener("click", function () {

//         this.classList.toggle("active");

//         let panel = this.nextElementSibling;

//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = (panel.scrollHeight * 3) + "px";
//         }
//     });
// }



// let questioBtnsActive = document.getElementsByClassName(".question__button .active");
// questioBtnsActive.addEventListener('click', () => {
//     console.log(questioBtnsActive);
// })






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
