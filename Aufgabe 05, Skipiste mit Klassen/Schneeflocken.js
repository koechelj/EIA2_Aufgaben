var fuenfteAufgabe;
(function (fuenfteAufgabe) {
    //Schneeflocken Klasse (Bauplan f�r Objekt Skifahrer)
    //Export macht Klasse �ber Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
    class Schneeflocken {
        //Constructor nimmt Infos entgegen und verarbeitet sie
        //this verweist auf die Eigenschaften und Methoden des Objekts
        constructor(x, y, radius, winkel, circle, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.winkel = winkel;
            this.circle = circle;
            this.color = color;
        }
        //Update MoveandDrawYourself   (Update im HTML aufrufen)
        UpdateSkifahrer() {
            this.drawSchneeflocken();
            this.moveSchneeflocken();
        }
        //Methoden
        drawSchneeflocken() {
            fuenfteAufgabe.crc2.beginPath();
            fuenfteAufgabe.crc2.arc(this.x, this.y, this.radius, this.winkel, this.circle * Math.PI);
            fuenfteAufgabe.crc2.fillStyle = this.color;
            fuenfteAufgabe.crc2.fill();
        }
        moveSchneeflocken() {
            this.x > 800; //Bereich in dem es schneit
            this.x = 0;
            this.y += 0.6; //Geschwindigkeit d. Schneeflocken
        }
    }
    fuenfteAufgabe.Schneeflocken = Schneeflocken;
})(fuenfteAufgabe || (fuenfteAufgabe = {}));
//# sourceMappingURL=Schneeflocken.js.map