var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //Superklasse   
    class AnimiertesObjekt {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        //Methoden: in Superklasse leer lassen
        draw() {
        }
        move() {
        }
    }
    Abschlussaufgabe.AnimiertesObjekt = AnimiertesObjekt;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Superklasse.js.map