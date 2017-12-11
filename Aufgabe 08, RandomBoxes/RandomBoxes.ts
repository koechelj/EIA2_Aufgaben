namespace RandomBoxes {
    window.addEventListener("load", init);
    window.addEventListener("keydown", keypress);


    function keypress(_event: KeyboardEvent): void {
        console.log(_event.keyCode);
    }


    function init(): void {


        //prompt Fenster öffnen, welches nachfragt
        var eingegebeneZahl: string = prompt("Gib eine Zahl zwischen 10 und 100 ein.");
        //var quadratAnzahl vom Typ eingegebeneZahl
        var quadratAnzahl: number = parseInt(eingegebeneZahl); //die eingegebeneZahl soll vom string in eine number umgewandelt werden

        //wenn die eingegebeneZahl größer bzw. = 10 ist und wenn sie kleiner bzw. = 100 ist, dann....
        if (quadratAnzahl >= 10 && quadratAnzahl <= 100) {

            //...for Schleife ausführen, welche die entsprechende Quadratanzahl generiert  //Werte für die Parameter angeben
            for (var i: number = 0; i < quadratAnzahl; i++) {
                zeichneQuadrat(Math.random() * 400, Math.random() * 200, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 35, 35);
                //zufällige X und Y Position, Farbe, feste Höhe, feste Breite
            }
            //andernfalls soll eine Fehlermeldung erscheinen
        } else {
            alert("Da ist wohl etwas schief gelaufen. Versuche es bitte erneut.");
        }
    }


    function zeichneQuadrat(X: number, Y: number, Farbe: string, Hoehe: number, Breite: number): void {
        console.log(Farbe);
        var div: HTMLDivElement = document.createElement("div"); //div Element erstellen
        div.style.left = X + "px";
        div.style.top = Y + "px";
        div.style.width = Breite.toString() + "px"; //muss für .style in string umgewandelt werden
        div.style.height = Hoehe.toString() + "px";
        div.style.backgroundColor = Farbe;
        div.style.display = "inline"; //inline, weil die die Quadrate nicht alle in einer neuen Zeile beginnen sollen (div ist normalerweise Block Element)
        div.style.position = "absolute"; //div Elemente sind mit absolute losgelöst vom Textfluss
        document.body.appendChild(div); //div in body einfügen
    }
}