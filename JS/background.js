
const imgs = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/5.jpg', 'imgs/6.jpg', 'imgs/7.jpg', 'imgs/8.jpg', 'imgs/9.jpg', 'imgs/11.jpg', 'imgs/12.jpg', 'imgs/13.jpg'];
const body = document.body;
const greeting = document.querySelector('.greeting');
const img = document.createElement('img');
body.appendChild(img);

img.src = imgs[Math.floor(Math.random()*imgs.length)]