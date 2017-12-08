var RandomBoxes;
(function (RandomBoxes) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", keypress);
    function keypress(_event) {
        console.log(_event.keyCode);
    }
    function init() {
        //prompt Fenster �ffnen, welches nachfragt
        var eingegebeneZahl = prompt("Wie viele Quadrate moechten Sie sehen? Auf einer Skala von 10 bis 100.");
        //var quadratAnzahl vom Typ eingegebeneZahl
        var quadratAnzahl = parseInt(eingegebeneZahl); //die eingegebeneZahl soll vom string in eine number umgewandelt werden
        //wenn die eingegebeneZahl gr��er bzw. = 10 ist und wenn sie kleiner bzw. = 100 ist, dann...
        if (quadratAnzahl >= 10 && quadratAnzahl <= 100) {
            //...for Schleife ausf�hren, welche die entsprechende Quadratanzahl generiert  //Werte f�r die Parameter angeben
            for (var i = 0; i < quadratAnzahl; i++) {
                zeichneQuadrat(Math.random() * 400, Math.random() * 200, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 35, 35);
            }
        }
        else {
            alert("Da ist wohl etwas schief gelaufen. Versuchen Sie es bitte erneut.");
        }
    }
    function zeichneQuadrat(X, Y, Farbe, Hoehe, Breite) {
        console.log(Farbe);
        var div = document.createElement("div"); //div Element erstellen
        div.style.left = X + "px";
        div.style.top = Y + "px";
        div.style.width = Breite.toString() + "px"; //muss f�r .style in string umgewandelt werden
        div.style.height = Hoehe.toString() + "px";
        div.style.backgroundColor = Farbe;
        div.style.display = "inline"; //inline, weil die die Quadrate nicht alle in einer neuen Zeile beginnen sollen (div ist normalerweise Block Element)
        div.style.position = "absolute"; //div Elemente sind mit absolute losgel�st vom Textfluss
        document.body.appendChild(div); //div in body einf�gen
    }
})(RandomBoxes || (RandomBoxes = {}));
//# sourceMappingURL=RandomBoxes.js.map