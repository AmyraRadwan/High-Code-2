# High Code 2

Heute werden wir Javasript erkunden... yay!

Tagesziel ist es:

1. selbst eine variablen Schrift einzubinden und diese mit Javascript zu animieren.
2. Wenn wir es schaffen binden wir danach noch eine CSS Library ein mit der wir die Schrift maximal annoying machen.

**Auf gehts!**

> Wenn du letztes mal nicht da warst kannst du mit unserer [Vorlage]() arbeiten.

## Step 1.0 – Einbinden einer variablen Schrift :sparkles:

Lade dir die [Schriftdateien](https://github.com/AmyraRadwan/High-Code-2/tree/main/assets/fonts) runter und binde sie folgendermaßen in deine CSS Datei ein.

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

Teile die Schrift jetzt einem Textelement oder Klasse deiner Wahl zu. (z.B. `h1` oder `.text`)

```
h1 {
    font-family: Edu Monument;
}
```

Prüfe ob alles funktioniert :eyes:

## Step 1.1 – Einbinden einer Javascript Datei :fire:

1. Erstelle in deinem **assets** Ordner einen Ordner **js**
2. Erstelle darin eine Datei namens **main.js**
3. Gehe in deine **index.html** und scrolle runter zum closing `</body>` tag.
4. Erstelle eine Zeile über den Tag einen `<script src="main.js"></script>` tag.

Das ganze sollte dann so aussehen:

```
...
        <script src="main.js"></script>
    </body>
</html>
```
