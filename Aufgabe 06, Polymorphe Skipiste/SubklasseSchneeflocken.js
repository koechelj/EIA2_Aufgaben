var sechsteAufgabe;
(function (sechsteAufgabe) {
    class Schneeflocken extends sechsteAufgabe.movingObject {
        //Constructor nimmt Attribute entgegen und verarbeitet sie
        //mit this werden den Koordinaten Werte zugewiesen
        constructor(x, y, radius, winkel, circle, color) {
            super(x, y);
            this.radius = radius;
            this.winkel = winkel;
            this.circle = circle;
            this.color = color;
        }
        //Methoden Schneeflocken zeichnen und bewegen
        //Methoden greifen mit this direkt auf Objekteigenschaften zu. Die vererbten Attribute der Superklasse werden mit super gekennzeichnet 
        draw() {
            sechsteAufgabe.crc2.beginPath();
            sechsteAufgabe.crc2.arc(this.x, this.y, this.radius, this.winkel, this.circle * Math.PI);
            sechsteAufgabe.crc2.fillStyle = this.color;
            sechsteAufgabe.crc2.fill();
        }
        move() {
            if (this.y > 600)
                this.y = 0;
            this.y += 0.6; //Geschwindigkeit d. Schneeflocken
            this.draw();
        }
    }
    sechsteAufgabe.Schneeflocken = Schneeflocken;
})(sechsteAufgabe || (sechsteAufgabe = {}));
//# sourceMappingURL=SubklasseSchneeflocken.js.map