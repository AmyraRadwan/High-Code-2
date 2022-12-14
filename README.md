# :crystal_ball: justmytype.js

Heute werden wir Javascript erkunden... yay!

Tagesziel ist es:

1. Eine variable Schrift in CSS einbinden und mit Javascript zu animieren:

   - [1.0. Einbinden einer variablen Schrift](https://github.com/AmyraRadwan/High-Code-2#sparkles-step-10--einbinden-einer-variablen-schrift)
   - [1.1. Einbinden einer Javascript Datei](https://github.com/AmyraRadwan/High-Code-2#fire-step-11--einbinden-einer-javascript-datei)
   - [1.2. Die Schrift beim scrollen animieren](https://github.com/AmyraRadwan/High-Code-2#dizzy-step-12--die-schrift-beim-scrollen-animieren)

2. Optional:
   - [2.0. – CSS Library für maximal annoying Schrift](https://github.com/AmyraRadwan/High-Code-2#cyclone-step-20--css-library-f%C3%BCr-maximal-annoying-schrift)
   - [2.1. – Einbinden der CSS-Library](https://github.com/AmyraRadwan/High-Code-2#fire-step-21--einbinden-der-css-library)
   - [2.2. – Animieren eines Elements](https://github.com/AmyraRadwan/High-Code-2#dizzy-step-22--animieren-eines-elements)

**Auf geht's!**

> Wenn du letztes mal nicht da warst kannst du mit unsere :point_right: [Vorlage](vorlage.zip) herunterladen und damit arbeiten.

## :sparkles: Step 1.0. – Einbinden einer variablen Schrift

Lade dir die :point_right: [Schriftdateien](v-fonts.zip) herunter, speichere sie unter `assets` in deinem `fonts` Ordner und binde sie folgendermaßen in deine CSS Datei ein.

> `@font-face` ermöglicht das lokale einbinden von Schriftdateien. Mit `font-family` gibst du der Schrift einen Namen um sie dann mit diesem anzuwenden. Mit `src` gibst du den Pfad der Quelldatei an. Achte darauf das die Ordnerstruktur und der Dateiname stimmen.

```
@font-face {
	font-family: Edu Monument;
	src: url("../fonts/EduMonumentGroteskVariable.ttf");
}

@font-face {
	font-family: Bandeins;
	src: url("../fonts/BandeinsStrangeVariableGX.ttf");
}

@font-face {
	font-family: Movement;
	src: url("../fonts/MovementV.ttf");
}

@font-face {
	font-family: Collective Patterns;
	src: url("../fonts/CollectivePatternsVF.ttf");
}
```

Teste die Schrift jetzt indem du sie einem Textelement oder Klasse deiner Wahl zuordnest. (z.B. `h1` oder `.text`)

```
h1 {
    font-family: Edu Monument;
}
```

Prüfe jetzt ob deine Schrift angezeigt wird! :eyes:

##### CSS-Eigenschaft: `font-variation-settings`

Mit dieser Eigenschaft kannst du die Stärke und Breite von variablen Schriften einstellen. Probiere mit den Zahlen der Parametern "wght" und "wdth" deine Schrift einzustellen. Valide Werte sind `100` `200` `300` ... `900`

```
h1 {
    font-variation-settings: "wght" 100, "wdth" 100;
}
```

> Du kannst diese Werte z.B. durch `h1:hover` beim mit der Maus drüber fahren verändern.

## :fire: Step 1.1. – Einbinden einer Javascript Datei

1. Erstelle in deinem `assets` Ordner einen Ordner `js`
2. Erstelle darin eine Datei namens `main.js`
3. Gehe in deine `index.html` und scrolle runter zum closing `</body>` tag.
4. Erstelle eine Zeile über den Tag einen `<script src="assets/js/main.js"></script>` tag.

Das Ende deiner HTML sollte so aussehen:

```
...
        <script src="assets/js/main.js"></script>
    </body>
</html>
```

###### :link: Überprüfe ob die Datei richtig eingebunden wurde

1. Öffne deine `main.js` Datei und schreibe `console.log("Hello World");` rein.
2. Speichern nicht vergessen.
3. Öffne deine `index.html` Datei im Browser.
4. Öffne die Konsole (`option`+`cmd`+`i` oder Rechtsklick > Untersuchen/Inspect).
5. Wenn deine Nachricht in der Konsole ausgegeben wird hat alles geklappt! :clap:

## :dizzy: Step 1.2. – Die Schrift beim scrollen animieren

Jetzt animieren wir die Schrift beim scrollen.
Fixiere ein Element auf deiner Seite beim scrollen mit `position: fixed` in deiner CSS-Datei.

```
h1 {
    position: fixed; /* Fixiert das Element beim scrollen */
    z-index: 2; /* Hebt das Element auf der z-Achse über die anderen */
}
```

Öffne als nächstes deine `main.js` Datei und kopiere diesen Code rein.

> :warning: Achtung! Eigentlich kopiert man nicht einfach irgendwelchen Code ohne ihn zu verstehen. Hier müsst ihr uns dieses mal vertrauen. Wir erklären euch unten wie es funktioniert.

```
const animation = document.querySelector("h1");

window.addEventListener("scroll", function () {
	const pixels = window.pageYOffset;

	const fontweight = 100 + pixels * 0.9;
	const fontwidth = 100 + pixels * 0.9;

	animation.style.fontVariationSettings = `"wght" ${fontweight}, "wdth" ${fontwidth}`;
});
```

###### Erklärung:

1. `const` (Konstante) speichert einen Wert. Hier wird das `h1` Element in die Konstante names "animation" gespeichert.
2. Eine Funktion die bei dem Event scroll etwas auf der Seite ausgeführt wird erstellt.
3. In die `const` namens "pixels" wird der Wert der Y-Achse gespeichert.
4. In die `const` namens "fontweight" wird die Rechnung 100 + der Wert der Y-Achse x 0.9 gespeichert.
5. In die `const` namens "fontwidth" wird die Rechnung 100 + der Wert der Y-Achse x 0.9 gespeichert.
6. Für das `h1` Element werden die Werte der CSS-Eigenschaft `font-variation-settings` (`wght` und `wdth`) den vorher definierten Konstanten, also den Berechnungen `fontweight` und `fontwidth` zugeteilt.
7. Somit verändern sich die Werte dieser CSS-Eigenschaft beim scrollen.

> Wenn du ein anderes Element (z.B. `p` oder `.text`) animieren möchtest, muss dieses statt "h1" in die Konstante oben gespeichert werden. Probiere ein wenig mit den Zahlen der der Konstanten `fontweight` und `fontwidth` herum um für deine Scroll Länge und Schrift die richtige Einstellung zu finden.

THE END :boom:

... wait ... :shit:

## :cyclone: Step 2.0. – CSS Library für maximal annoying Schrift

Jetzt wird es richtig nervig. Aber nicht für dich! :innocent:
Wir bauen noch [obnoxious.css](https://tholman.com/obnoxious/) ein, eine CSS-Library von [Tim Holman](https://github.com/tholman).

## :fire: Step 2.1. – Einbinden der CSS-Library

Um obnoxious.css einzubinden lade dir obnoxious.css :point_right: [hier](obnoxious.css.zip) herunter und speicher die Datei mir dem Namen `obnoxious.css` unter `assets` in deinen `css` Ordner. Als nächstes bindest du die Datei in den `<head>` Tag deiner `index.html` Datei:

```
<head>
  <link rel="stylesheet" href="assets/css/obnoxious.css">
</head>
```

## :dizzy: Step 2.2. – Animieren eines Elements

Um ein Element zu animieren musst du ihm nur die Klasse `animated` mit einer der folgenden Klassen zusammen geben:

- shakeit
- intensifies
- fontalicious
- strobe
- twister

Zum Beispiel so:

```
<h1 class="animated intensifies">Annoying, too loud, to messy!</h1>
```

> Probiere einfach ein bisschen rum.

THE REAL END :boom:
