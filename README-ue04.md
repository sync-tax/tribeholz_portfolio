# Übung 4 – Die erste Website: Grid und Flexbox
HYP1UE_T1 Hypermedia 1 Webprogrammierung | 06.11.2024 | Wolfgang Hochleitner | Abgabe

Sie haben in der Vorlesung das CSS Grid Layout bzw. Bootstrap und das CSS Flexible Boxes Layout kennengelernt. Verwenden Sie beides, um Ihrer Seite mehr Struktur zu verleihen bzw. Dinge einfacher anzuordnen.

## Layout am Raster

In der letzten Übung haben Sie einen oder mehrere Container in Ihre Seite integriert, um den Inhaltsbereich in der Breite zu begrenzen. Diese Container sind ideal, um mit dem Grid Layout Modul zu experimentieren. Statten Sie alle Ihre Container mit einem Raster aus. Dieser ist – was die Spalten betrifft – sinnvollerweise in allen Abschnitten gleich, um ein konsistentes Erscheinungsbild zu gewährleisten. Sie können aber natürlich auch verschiedene Raster für unterschiedliche Bereiche anlegen, weil etwa der Start- oder Header-Bereich anders angeordnet wird, als Fließtext oder eine Bildergalerie (in der Regel ist dies aber bei einem einigermaßen feinmaschigen Raster gar nicht nötig).

### Responsive Grid

Achten Sie darauf, dass ihr Raster responsive gut funktioniert. Reduzieren Sie etwa bei kleineren Auflösungen entsprechend die Anzahl der Spalten oder verteilen Sie alternativ Elemente über mehrere Spalten. Denken Sie beim Erstellen des Grids daran, dass mobil andere Anforderungen schlagend werden können. Falls Sie etwa Bilder in drei Spalten anordnen, ist es unter Umständen sinnvoller, sechs Spalten zu definieren und ein Bild zunächst über zwei Spalten erstrecken zu lassen. Bei kleineren Auflösungen werden dann nur noch zwei Bilder nebeneinander angezeigt, indem diese sich über jeweils drei Spalten erstrecken und schließlich hat nur noch ein Bild pro Zeile Platz und nimmt alle sechs Spalten ein.

Das Tutorial [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) hat alle Eigenschaften des Grid Layouts übersichtlich mit Abbildungen dargestellt.

### Alternative: Bootstrap

Anstatt das CSS Grid Layout zu verwenden, können Sie auch das Grid-System von [Bootstrap](https://getbootstrap.com/) verwenden. Denken Sie auch hier daran, dass das Grid responsive sein soll, d.h. setzen Sie die entsprechenden Container-Breakpoint-Klassen und Breakpoints für die Spalten.

## Anordnen mit flexiblen Boxen

Das CSS Flexible Boxes Layout ist keine Konkurrenz zum Grid Layout (oder Bootstrap), sondern eine sinnvolle Ergänzung. Während im Grid das Layout der Seite festgelegt wird, können mit flexiblen Boxen Elemente darin einfach angeordnet werden.

Verwenden Sie die Eigenschaften des Flexible Box Layout Moduls, Elemente auf Ihrer auszurichten. Sehr gut geeignet sind Dinge, die aktuell mithilfe von Floats, `position`- oder `display: inline`-Anweisungen positioniert sind.

Eine Möglichkeit dafür kann eine horizontal angeordnete Navigation sein. Entfernen Sie zunächst die bestehenden Positionierungsanweisungen und geben Sie dann dem umgebenden Element (z.B. `<ul>`) die Eigenschaft `display: flex`. Mit `flex-direction` können Sie dann die Richtung bestimmen, in der die Elemente angeordnet sind, mit Eigenschaften wie `justify-content` können Sie die Verteilung von Leerräumen kontrollieren. Mithilfe der `flex`-Eigenschaft bei den `<li>`-Elementen können Sie deren grundsätzliche Breite definieren (wenn sie etwa jedes Navigationselement gleich breit gestalten wollen).

Ebenso können Sie auch ihr Formular mittels Flexible Boxes ausrichten. Beachten Sie hierbei, dass das `<fieldset>`-Element (falls in Verwendung) nicht als Flex-Container geeignet ist. Hier ist es besser, alle `<label>`- und `<input>`-Elemente mit einem eigenen Element (z.B. `<div>`) zu umgeben und dort die Eigenschaft `display: flex` zu setzen.

Auch zur vertikalen und horizontalen Zentrierung von Elementen (z.B. Titel der Seite) ist Flexbox perfekt geeignet.

Greifen Sie bei der Arbeit mit flexiblen Boxen auf das Tutorial [CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) zurück. Es enthält alle wichtigen Informationen anhand von konkreten Beispielen.

## Umsetzung und Abgabe

Der Status ihrer Webseite nach Übung 4 zählt als Abgabe. Die Seite sollte weitgehend ihrem Figma-Prototyp entsprechen (es ist aber okay, wenn nicht alles genauso umgesetzt ist).

Folgende Punkte sind für die Abgabe aber relevant und werden beurteilt:

- Vollständige und korrekte HTML-Grundstruktur mit den korrekten HTML-Elementen analog zu [Übung 2](README-ue02.md). Die Struktur soll semantisch dem Prototyp entsprechen.
- Korrekte Formatierung der Inhalte mit CSS (Schriften, Farben, Abstände, Hintergründe etc.) analog zu [Übung 2](README-ue02.md) und [Übung 3](README-ue03.md).
- Responsive Version (mindestens ein Breakpoint), sodass eine Version für breitere und schmälere Viewports existiert ([Übung 3](README-ue03.md)).
- Korrekte Verwendung des CSS Grid Layout oder Bootstrap und des CSS Flexible Boxes Layout zur Anordnung der Inhalte entsprechend des Prototyps, analog zu [Übung 4](README-ue04.md). D.h. mindestens an einer Stelle ein CSS Grid Layout oder Bootstrap in Verwendung und mindestens einmal die Flexbox zur Anordnung von Elementen eingesetzt.
- Valides HTML und CSS. Beide Validatoren dürfen keine Fehler anzeigen, auch Warnungen sollten vermieden werden.

Bewertet wird der Inhalt des GitHub-Repositories zum Zeitpunkt der Deadline von Übung 4 (siehe eLearning-System).

## Tipps und Richtlinien

- Das HTML-Markup muss nach dem aktuellen HTML-Standard validieren. Das Kriterium ist alleinig der [W3C Markup Validator](https://validator.w3.org/). Validieren Sie Ihre Seite regelmäßig und korrigieren Sie Fehler entsprechend.
- CSS muss nach dem aktuellen CSS-Standard validieren. Das Kriterium ist der [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- Denken Sie beim Schreiben bzw. Abändern ihrer CSS-Stile etwas an die in der Vorlesung vorgestellten CSS-Methodiken – vielleicht lassen sich einige Dinge ja strukturierter damit definieren.
- Falls sie viele wiederkehrende Angaben (z.B. Farbdefinitionen) haben, bietet sich an, dies über die erwähnten [CSS Custom Properties (Variablen)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) zu lösen.
- [MDN](https://developer.mozilla.org/en-US/) als Referenz für HTML-Tags und Attribute sowie für CSS verwenden.
- Bei Fragen oder Problemen zur Aufgabe eröffnen Sie ein Issue in ihrem Repository. Alternativ können Sie Fragen auch in Microsoft Teams stellen.

