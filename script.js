const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const next = document.querySelector('#next');
const close = document.querySelector('.close');

next.addEventListener('click', function () {
    box1.style.display = "none";
    box2.style.display = "block";
});
close.addEventListener('click', function () {
    box1.style.display = "block";
    box2.style.display = "none";
});
