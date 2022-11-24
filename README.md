# High Code 2

Heute werden wir Javasript erkunden... yay!

Tagesziel ist es:

1. selbst eine variablen Schrift einzubinden und diese mit Javascript zu animieren.
2. Wenn wir es schaffen binden wir danach noch eine CSS Library ein mit der wir die Schrift maximal annoying machen.

**Auf gehts!**

## Step 1 – Einbinden einer variablen Schrift

Lade dir die [Schriftdateien]() runter und binde sie folgendermaßen in deine CSS Datei ein.

> `@font-face` ermöglicht das lokale einbinden von Schriftdateien. Mit `font-family` gibst du der Schrift einen Namen um sie dann mit diesem anzuwenden. Mit `src`gibst du den Pfad der Quelldatei an. Achte darauf das die Ordnerstruktur und der Dateiname stimmen.

> Wenn du letztes mal nicht da warst kannst du mit unserer [Vorlage]() arbeiten.

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
