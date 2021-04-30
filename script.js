const btn = document.querySelector(".btn"),
	elem = document.querySelector(".box");
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }
function myAnimation() {
	if (pos < 300) {
		pos++;
		changePos(pos);
		requestAnimationFrame(myAnimation);
		// btn.setAttribute('disabled', 'disabled');
	} else if (pos === 300) {
		pos = 0;
		// btn.removeAttribute('disabled');
	}
}

function changePos(pos) {
	elem.style.top = pos + "px";
	elem.style.left = pos + "px";
}


btn.addEventListener("click", () => {
	console.log(pos);
	if (pos === 0) {
		requestAnimationFrame(myAnimation);
	}
});
