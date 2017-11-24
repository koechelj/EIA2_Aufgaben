var fuenfteAufgabe;
(function (fuenfteAufgabe) {
    //Skifahrer Klasse (Bauplan f�r Objekt Skifahrer)
    class Skifahrer {
        //Constructor nimmt Attribute entgegen und verarbeitet sie
        //mit this werden den Koordinaten Werte zugewiesen
        constructor(x, y, Kopffarbe, Koerperfarbe, Skifarbe) {
            this.x = x;
            this.y = y;
            this.Kopffarbe = Kopffarbe;
            this.Koerperfarbe = Koerperfarbe;
            this.Skifarbe = Skifarbe;
        }
        //Update MoveandDrawYourself  
        UpdateSkifahrer() {
            this.drawSkifahrer(); //Aufruf
            this.moveSkifahrer();
        }
        //Methoden: Skifahrer zeichnen und bewegen
        //Methoden greifen mit this direkt auf Objekteigenschaften zu
        drawSkifahrer() {
            //Kopf
            fuenfteAufgabe.crc2.beginPath();
            fuenfteAufgabe.crc2.arc(this.x, this.y, 10, 0, 4 * Math.PI);
            fuenfteAufgabe.crc2.fillStyle = this.Kopffarbe;
            fuenfteAufgabe.crc2.fill();
            //K�rper
            fuenfteAufgabe.crc2.fillStyle = this.Koerperfarbe;
            fuenfteAufgabe.crc2.fillRect(this.x - 8, this.y + 8, 10, 15);
            //Skibretter
            fuenfteAufgabe.crc2.beginPath();
            fuenfteAufgabe.crc2.moveTo(this.x - 7, this.y + 21);
            fuenfteAufgabe.crc2.lineTo(this.x - 7, this.y + 23);
            fuenfteAufgabe.crc2.lineTo(this.x + 12, this.y + 30);
            fuenfteAufgabe.crc2.lineTo(this.x + 12, this.y + 28);
            fuenfteAufgabe.crc2.closePath();
            fuenfteAufgabe.crc2.stroke();
            fuenfteAufgabe.crc2.fillStyle = this.Skifarbe;
            fuenfteAufgabe.crc2.fill();
        }
        moveSkifahrer() {
            if (this.x > 800)
                this.x = 0;
            this.x += 5; //Geschwindigkeit d. Skifahrers
            this.y += 0.5; //Winkel in dem er nach unten f�hrt
        }
    }
    fuenfteAufgabe.Skifahrer = Skifahrer;
})(fuenfteAufgabe || (fuenfteAufgabe = {}));
//# sourceMappingURL=Skifahrer.js.map