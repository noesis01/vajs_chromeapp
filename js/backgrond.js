const images = ["01.jpg","02.jpg","03.jpg"];

const randimage = Math.floor((Math.random() * images.length));

const bgImage = document.createElement("img");
bgImage.src = `/img/${images[randimage]}`;

document.body.appendChild(bgImage);