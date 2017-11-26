var sechsteAufgabe;
(function (sechsteAufgabe) {
    //Schneeflocken Klasse (Bauplan f�r Objekt Schneeflocken)
    //Export macht Klasse �ber Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
    class Schneeflocken {
        //Constructor nimmt Attribute entgegen und verarbeitet sie
        //mit this werden den Koordinaten Werte zugewiesen
        constructor(x, y, radius, winkel, circle, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.winkel = winkel;
            this.circle = circle;
            this.color = color;
        }
        //Update MoveandDrawYourself  
        UpdateSchneeflocken() {
            this.drawSchneeflocken();
            this.moveSchneeflocken();
        }
        //Methoden Schneeflocken zeichnen und bewegen
        //Methoden greifen mit this direkt auf Objekteigenschaften zu
        drawSchneeflocken() {
            sechsteAufgabe.crc2.beginPath();
            sechsteAufgabe.crc2.arc(this.x, this.y, this.radius, this.winkel, this.circle * Math.PI);
            sechsteAufgabe.crc2.fillStyle = this.color;
            sechsteAufgabe.crc2.fill();
        }
        moveSchneeflocken() {
            if (this.y > 600)
                this.y = 0;
            this.y += 0.6; //Geschwindigkeit d. Schneeflocken
        }
    }
    sechsteAufgabe.Schneeflocken = Schneeflocken;
})(sechsteAufgabe || (sechsteAufgabe = {}));
//# sourceMappingURL=SubklasseSchneeflocken.js.map