let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.onclick = () => button.classList.toggle("active");
});
