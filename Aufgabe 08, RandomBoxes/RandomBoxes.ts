namespace RandomBoxes {
    window.addEventListener("load", init);


    function init(): void {

        //prompt Fenster �ffnen, welches nachfragt
        var eingegebeneZahl: string = prompt("Wie viele Quadrate m�chten Sie sehen? Auf einer Skala von 10 bis 100.");
        //var quadratAnzahl vom Typ eingegebeneZahl
        var quadratAnzahl: number = parseInt(eingegebeneZahl); //die eingegebeneZahl soll vom string in eine number umgewandelt werden

        //wenn die eingegebeneZahl gr��er bzw. = 10 ist und wenn sie kleiner bzw. = 100 ist, dann...
        if (quadratAnzahl >= 10 && quadratAnzahl <= 100) {

            //...for Schleife ausf�hren, welche die entsprechende Quadratanzahl generiert  //Werte f�r die Parameter angeben
            for (var i: number = 0; i < quadratAnzahl; i++) {
                zeichneQuadrat(Math.random() * 400, Math.random() * 200, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 50, 50);
                //zuf�llige X und Y Position, Farbe, feste H�he, feste Breite
            }
            //andernfalls soll eine Fehlermeldung erscheinen
        } else {
            alert("Da ist wohl etwas schief gelaufen. Versuchen Sie es bitte erneut.");
        }
    }


    function zeichneQuadrat(X: number, Y: number, Farbe: string, Hoehe: number, Breite: number): void {

        var div: HTMLDivElement = document.createElement("div"); //div Element erstellen
        div.style.width = Breite.toString(); //muss f�r .style in string umgewandelt werden
        div.style.height = Hoehe.toString();
        div.style.backgroundColor = Farbe; 
        div.style.display = "inline"; //inline, weil die die Quadrate nicht alle in einer neuen Zeile beginnen sollen (div ist normalerweise Block Element)
        div.style.position = "absolute"; //div Elemente sind mit absolute losgel�st vom Textfluss
        document.body.appendChild(div); //div in body einf�gen
    }
}