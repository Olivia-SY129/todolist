const body = document.querySelector('body');

const IMG_NUMBER = 5;

function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

function showBgImg(num) {
    body.style.backgroundImage = `url("imgs/${getRandomInt(num)}.jpg")`;
}

showBgImg(IMG_NUMBER);