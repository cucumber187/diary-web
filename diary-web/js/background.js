const backgroundImg = document.querySelector(".background-img");
const randomImg = ["1.PNG", "2.png", "3.png"];

const number = Math.floor(Math.random() * randomImg.length);
backgroundImg.src = `img/${randomImg[number]}`;
