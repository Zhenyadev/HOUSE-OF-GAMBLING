const iconMenu = document.querySelector('.header__button-burger');
const menuBody = document.querySelector(".header__menu");
const menuButton = document.querySelector(".header__button");
const menuButtonActive = document.querySelector(".header__button-active");
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("-active");
        menuBody.classList.toggle("-active");
        menuButton.classList.toggle("-active");
        menuButtonActive.classList.toggle("-active");
    });
}

new SimpleBar(document.getElementById('myElement'), { 
    autoHide: false, 
});

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();