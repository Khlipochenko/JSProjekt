# Tic Tac Toe Spiel

## Überblick
Dieses Projekt implementiert ein einfaches "Tic Tac Toe"-Spiel, bei dem ein menschlicher Spieler gegen den Computer spielt. Das Spiel wird in der Konsole gespielt und bietet die Möglichkeit, zwischen den Zeichen 'X' und '0' zu wählen sowie zu entscheiden, wer zuerst beginnt. Das Spiel endet, wenn einer der Spieler drei gleiche Zeichen in einer Reihe, Spalte oder Diagonale hat.

## Installation
#### 1.    Voraussetzungen:

* Node.js muss installiert sein.
* Das Modul readline-sync muss installiert sein.
#### 2.    Installation von readline-sync:

```js
npm install readline-sync
```
#### 3. Projektdatei erstellen:

* Erstellen Sie eine Datei namens ticTacToe.js und fügen Sie den gesamten Code des Projekts in diese Datei ein.

## Nutzung
#### 1. Spiel starten:

Führen Sie das Spiel in der Konsole mit folgendem Befehl aus:
```js
node index.js
```
#### 2. Spielregeln anzeigen:

Zu Beginn des Spiels werden die Spielregeln in der Konsole angezeigt.
#### 3. Wahl treffen:

Der Spieler wählt, ob er mit 'X' oder '0' spielen möchte.
Der Spieler wählt, ob er zuerst beginnen möchte.
#### 4. Zug machen:

Der Spieler gibt eine Zahl zwischen 1 und 9 ein, um das entsprechende Feld zu markieren.
#### 5. Sieg prüfen:

Das Spiel überprüft nach jedem Zug, ob einer der Spieler gewonnen hat.
#### 6. Neues Spiel:

Nach dem Ende eines Spiels wird der Spieler gefragt, ob er noch einmal spielen möchte.