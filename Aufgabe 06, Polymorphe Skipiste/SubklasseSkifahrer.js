var sechsteAufgabe;
(function (sechsteAufgabe) {
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
            sechsteAufgabe.crc2.beginPath();
            sechsteAufgabe.crc2.arc(this.x, this.y, 10, 0, 4 * Math.PI);
            sechsteAufgabe.crc2.fillStyle = this.Kopffarbe;
            sechsteAufgabe.crc2.fill();
            //K�rper
            sechsteAufgabe.crc2.fillStyle = this.Koerperfarbe;
            sechsteAufgabe.crc2.fillRect(this.x - 8, this.y + 8, 10, 15);
            //Skibretter
            sechsteAufgabe.crc2.beginPath();
            sechsteAufgabe.crc2.moveTo(this.x - 7, this.y + 21);
            sechsteAufgabe.crc2.lineTo(this.x - 7, this.y + 23);
            sechsteAufgabe.crc2.lineTo(this.x + 12, this.y + 30);
            sechsteAufgabe.crc2.lineTo(this.x + 12, this.y + 28);
            sechsteAufgabe.crc2.closePath();
            sechsteAufgabe.crc2.stroke();
            sechsteAufgabe.crc2.fillStyle = this.Skifarbe;
            sechsteAufgabe.crc2.fill();
        }
        moveSkifahrer() {
            if (this.x > 800)
                this.x = 0;
            this.x += 5; //Geschwindigkeit d. Skifahrers
            this.y += 0.5; //Winkel in dem er nach unten f�hrt
        }
    }
    sechsteAufgabe.Skifahrer = Skifahrer;
})(sechsteAufgabe || (sechsteAufgabe = {}));
//# sourceMappingURL=SubklasseSkifahrer.js.map