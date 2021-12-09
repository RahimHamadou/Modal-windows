// declaration de variable
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");

let toggle = false;

// action sur le btn
btn.addEventListener("click", () => {
	toggle = !toggle;
	// on fait apparaitre en display puis on mets l'opacity a 1
	if (toggle) {
		modal.style.display = "block";
		setTimeout(() => {
			modal.style.opacity = 1;
		}, 10);
	}
	// on fait l'inverse mais on laisse plus de temps ( pour transition d'opacity ) avant de display none
	else {
		modal.style.opacity = 0;
		setTimeout(() => {
			modal.style.display = "none";
		}, 500);
	}
});
