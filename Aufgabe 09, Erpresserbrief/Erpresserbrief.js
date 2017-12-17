var Erpresserbrief;
(function (Erpresserbrief) {
    //Event Listener installieren:
    window.addEventListener("load", erzeugeBuchstabeundTextfeld);
    document.addEventListener("keydown", TastaturColorChange); //wenn Buchstabe auf Tastatur gedr�ckt wird
    document.addEventListener("keypressed", deleteBuchstabe); //f�r L�schen des Buchstabens, wenn Alt gedr�ckt und Buchstabe angeklickt wird
    //Array f�r Buchstaben
    let Buchstabe = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //Ausgew�hlter Buchstabe speichern:
    var gespeicherterBuchstabe = ""; //flexibel, da jeder Buchstabe angeklickt werden kann
    let Briefbereich;
    //-----Erzeugen des Auswahlbuchstabens-------------------------------------------------------------------------------
    function erzeugeBuchstabeundTextfeld() {
        //For schleife, die die Buchstaben divs generiert:
        for (let i = 0; i < Buchstabe.length; i++) {
            var B = document.createElement("div"); //div Elemente erstellen
            B.style.width = "6%";
            B.style.margin = "0.5em";
            B.style.height = "auto";
            B.style.display = "inline"; //inline, weil die die Buchstaben nicht alle in einer neuen Zeile beginnen sollen (div ist normalerweise Block Element)
            B.style.backgroundColor = "lightgrey";
            B.innerText = Buchstabe[i];
            //Buchstabe wieder in Ursprungszustand versetzen:
            B.id = Buchstabe[i]; //Id f�r Buchstaben vergeben
            B.className = "Buchstaben"; //Klasse Buchstaben
            B.addEventListener("click", ClickColorChange); //Event Aufruf
            //Elemente in Body einf�gen:
            document.body.appendChild(B);
        }
        Textfeld(); //Aufruf der Textfeld function
    }
    //----------Erzeugen des Textfeldes--------------------------------------------------------------
    function Textfeld() {
        let Textfeld = document.createElement("div");
        Textfeld.style.width = "80%";
        Textfeld.style.height = "32em"; //H�he muss in em angegeben werden, da Seitenh�he nicht in Prozent berechnet werden kann
        Textfeld.style.border = "2px solid orange";
        Textfeld.style.backgroundColor = "lightgrey";
        Textfeld.style.marginTop = "1.5em";
        Textfeld.addEventListener("click", clickDomPointer); //Event Aufruf: wenn auf Textfeld geklickt wird, f�hre "clickDomPointer" aus   
        //Elemente in Body einf�gen:
        document.body.appendChild(Textfeld);
    }
    //----Auswahl des Buchstabens----------------------------------------------------------------------
    //Event: bei click auf Buchstaben oder Tastaturdruck, soll Farbe ge�ndert werden
    function ClickColorChange(_event) {
        let div = _event.target; //target: Startknoten f�r das Event (hier ist der Signalempfang)
        div.style.backgroundColor = "yellow"; //wenn auf das Buchstaben div geklickt wird, wirds gelb
        gespeicherterBuchstabe = div.id; //id des ausgew�hlten Buchstabens zwischenspeichern
        //Buchstabe, durch klicken eines anderen, in Ursprungszustand versetzen:
        let BuchstabeWiederNormal = document.getElementsByClassName("Buchstaben"); //speichert jedes div der Klasse "Buchstaben" in Variable "BuchstabeWiederNormal"
        for (let i = 0; i < BuchstabeWiederNormal.length; i++) {
            if (gespeicherterBuchstabe != BuchstabeWiederNormal[i].id) {
                BuchstabeWiederNormal[i].style.backgroundColor = "white"; //...soll er wieder in den Ursprungszustand versetzt werden
            }
        }
    }
    //Buchstaben auf Tastatur ausw�hlen: 
    function TastaturColorChange(event) {
        // Dr�cke a/A
        if (event.key == "a" || event.key == "A") {
            gespeicherterBuchstabe = event.key; //speichere a/A ab
            clickDomPointer;
        }
        else if (event.key == "b" || event.key == "B") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "c" || event.key == "C") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "d" || event.key == "D") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "e" || event.key == "E") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "f" || event.key == "F") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "g" || event.key == "G") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "h" || event.key == "H") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "i" || event.key == "I") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "j" || event.key == "J") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "k" || event.key == "K") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "l" || event.key == "L") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "m" || event.key == "M") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "n" || event.key == "N") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "o" || event.key == "O") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "p" || event.key == "P") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "q" || event.key == "Q") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "r" || event.key == "R") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "s" || event.key == "S") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "t" || event.key == "T") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "u" || event.key == "U") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "v" || event.key == "V") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "w" || event.key == "W") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "x" || event.key == "X") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "y" || event.key == "Y") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        else if (event.key == "z" || event.key == "Z") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
    }
    //-------Mauszeiger im zweiten Feld----------------------------------------------------------
    // Event: click mit dem Mauszeiger--> erscheinen von zuvor ausgew�hltem Buchstaben
    function clickDomPointer(_event) {
        let domPointerDiv = document.createElement("div"); //Erzeuge div 
        //div f�llen mit Buchstabe:
        domPointerDiv.style.width = "2%";
        domPointerDiv.style.padding = "0.3em";
        domPointerDiv.style.height = "auto";
        domPointerDiv.style.border = "1px solid black";
        domPointerDiv.style.position = "absolute"; //Buchstaben divs werden aus normalem Flie�verhalten rausgenommen
        domPointerDiv.innerText = gespeicherterBuchstabe;
        domPointerDiv.style.left = _event.pageX + "px"; //Position an der der Buchstabe erscheinen soll (ist abh�ngig vom _event Parameter)
        domPointerDiv.style.top = _event.pageY + "px";
        domPointerDiv.addEventListener("click", deleteBuchstabe); //wenn auf BuchstabenDiv geklickt wird f�hre "deleteBuchstabe" aus
        document.body.appendChild(domPointerDiv); //Div Element in Body einf�gen
        Briefbereich = _event.target; //Briefbereich ist das EventTarget (Startknoten f�r Signalempfang)
    }
    //Event: bei gehaltener Alt-Taste und click auf Buchstabe, soll dieser gel�scht werden
    function deleteBuchstabe(_event) {
        if (_event.keyCode == 18) {
            //dann l�sche Buchstabe:
            BuchstabeAlt;
        }
    }
    //-------L�schen eines gesetzten Buchstabens------------------------------------------------------------------
    function BuchstabeAlt(_event) {
        let entferne = _event.target; //Variable "entferne" ist das Event
        //target: Startknoten, auf den sich das Event bezieht (hier ist der Signalempfang)
        document.body.removeChild(entferne); //Div aus Body entfernen
    }
})(Erpresserbrief || (Erpresserbrief = {}));
//# sourceMappingURL=Erpresserbrief.js.map