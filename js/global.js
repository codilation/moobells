// Header naviation button
const toggle = document.getElementById("header-navbutton"),
			menu = document.getElementById("header-menu");

toggle.addEventListener('click', () => {
	menu.classList.toggle('open')
	toggle.classList.toggle('open');
});