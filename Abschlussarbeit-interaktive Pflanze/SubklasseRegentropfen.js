var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Regentropfen extends Abschlussaufgabe.AnimiertesObjekt {
        constructor(x, y, radius, winkel, circle, color) {
            super(x, y);
            this.radius = radius;
            this.winkel = winkel;
            this.circle = circle;
            this.color = color;
        }
        //Methoden Regentropfen zeichnen und bewegen
        //Methoden greifen mit this direkt auf Objekteigenschaften zu. Die vererbten Attribute der Superklasse werden mit super gekennzeichnet 
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.radius, this.winkel, this.circle * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fill();
        }
        move() {
            if (this.y > 600)
                this.y = 0;
            this.y += 4.8; //Geschwindigkeit d. Regentropfen
            this.draw();
        }
    }
    Abschlussaufgabe.Regentropfen = Regentropfen;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=SubklasseRegentropfen.js.map