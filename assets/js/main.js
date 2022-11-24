const h1 = document.querySelector("h1"); // const (Konstante) speichert einen Wert. Hier wird das h1 Element in die Konstante names "h1" gespeichert.

// Eine Funktion die bei dem Event scroll etwas auf der Seite ausgeführt wird erstellt.
window.addEventListener("scroll", function () {
	const pixels = window.pageYOffset; // In die const namens "pixels" wird der Wert der Y-Achse gespeichert.

	const wght = 100 + pixels * 0.9; // In die const namens "wght" wird die Rechnung 100 + der Wert der Y-Achse x 0.4 gespeichert.
	const wdth = 100 + pixels * 0.9; // In die const namens "wdth" wird die Rechnung 100 + der Wert der Y-Achse x 0.1 gespeichert.

	h1.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}`; // Für das h1 Element werden die Werte der CSS-Eigenschaft `font-variation-settings` (wght und wdth) den vorher definierten Konstanten, also den Berechnungen namens "wght" und "wdth" zugeteilt.
});

// Damit verändern sich die Werte der CSS-Eigenschaft `font-variation-settings` beim scrollen.
