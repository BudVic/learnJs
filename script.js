const btn = document.querySelector('.btn');
function myAnimation() {
  const element = document.querySelector('.box');
  let pos = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (pos === 300) {
      clearInterval();
    } else {
      pos++;
      element.style.top = pos + 'px';
      element.style.left = pos + 'px';
    }
  }
}
btn.addEventListener('click', myAnimation);
let num = [];
let start = new Date();
for (let i = 0; i < 1000000; i++) {
  num[i] = i ** 3;
}
let end = new Date();

alert(`${end - start} ms`);
console.log(num);