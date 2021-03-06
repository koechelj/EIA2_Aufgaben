var fuenfteAufgabe;
(function (fuenfteAufgabe) {
    //Schneeflocken Klasse (Bauplan f�r Objekt Baum)
    //Export macht Klasse �ber Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
    class Baum {
        //Constructor nimmt Attribute entgegen und verarbeitet sie
        //mit this werden den Koordinaten Werte zugewiesen
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
        }
        //Update MoveandDrawYourself   
        UpdateBaum() {
            this.drawTree();
        }
        //Methode: Baum zeichnen
        //Methode greift mit this direkt auf Objekteigenschaften zu
        drawTree() {
            fuenfteAufgabe.crc2.beginPath();
            fuenfteAufgabe.crc2.moveTo(this.x, this.y);
            fuenfteAufgabe.crc2.lineTo(this.x + 30, this.y - 60);
            fuenfteAufgabe.crc2.lineTo(this.x + 60, this.y);
            fuenfteAufgabe.crc2.strokeStyle = this.color;
            fuenfteAufgabe.crc2.stroke();
            fuenfteAufgabe.crc2.fillStyle = this.color;
            fuenfteAufgabe.crc2.fill();
        }
    }
    fuenfteAufgabe.Baum = Baum;
})(fuenfteAufgabe || (fuenfteAufgabe = {}));
//# sourceMappingURL=Baum.js.map