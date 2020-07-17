const sliderContainer = document.getElementById('slider-container');
const sliderElementImg = document.querySelectorAll('.slider-element img');
const sliderElement = document.querySelectorAll('.slider-element');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

var counter = 1;
var size = sliderElementImg[0].clientWidth;
var countOfElemets = sliderElement.length;


sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';


rightArrow.addEventListener('click', function () {
    rightArrow.style.opacity = '1';
    setTimeout(function () { rightArrow.style.opacity = '0.5'; }, 400)
    if (counter >= countOfElemets - 1) return;
    sliderContainer.style.transition = 'transform 0.7s ease-in-out';
    counter++
    sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

leftArrow.addEventListener('click', function () {
    leftArrow.style.opacity = '1';
    setTimeout(function () { leftArrow.style.opacity = '0.5'; }, 400)
    if (counter <= 0) return;
    sliderContainer.style.transition = 'transform 0.7s ease-in-out';
    counter--
    sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

sliderContainer.addEventListener('transitionend', function () {
    if (sliderElement[counter].id === 'lastClone') {
        sliderContainer.style.transition = 'none';
        counter = countOfElemets - 2;
        sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (sliderElement[counter].id === 'firstClone') {
        sliderContainer.style.transition = 'none';
        counter = countOfElemets - counter;
        sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})