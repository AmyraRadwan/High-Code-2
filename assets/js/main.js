const h1 = document.querySelector("h1");

window.addEventListener("scroll", function () {
	const pixels = window.pageYOffset;

	const wght = 100 + pixels * 0.4;
	const wdth = 100 + pixels * 0.1;

	h1.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}`;
});
