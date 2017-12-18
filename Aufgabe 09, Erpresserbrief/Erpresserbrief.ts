namespace Erpresserbrief {

    //Event Listener installieren:
    window.addEventListener("load", erzeugeBuchstabeundTextfeld);
    document.addEventListener("keydown", TastaturColorChange); //wenn Buchstabe auf Tastatur gedr�ckt wird



    //Array f�r Buchstaben
    let Buchstabe: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //Ausgew�hlter Buchstabe speichern:
    var gespeicherterBuchstabe: string = ""; //flexibel, da jeder Buchstabe angeklickt werden kann






    //-----Erzeugen des Auswahlbuchstabens-------------------------------------------------------------------------------
    function erzeugeBuchstabeundTextfeld(): void {
        //For schleife, die die Buchstaben divs generiert:
        for (let i: number = 0; i < Buchstabe.length; i++) {
            var buchstabe: HTMLDivElement = document.createElement("div"); //div Elemente erstellen
            buchstabe.style.width = "6%";
            buchstabe.style.margin = "0.5em";
            buchstabe.style.height = "auto";
            buchstabe.style.display = "inline"; //inline, weil die die Buchstaben nicht alle in einer neuen Zeile beginnen sollen (div ist normalerweise Block Element)
            buchstabe.style.backgroundColor = "lightgrey";
            buchstabe.innerText = Buchstabe[i];

            //Buchstabe wieder in Ursprungszustand versetzen:
            buchstabe.id = Buchstabe[i];  //Id f�r Buchstaben vergeben
            buchstabe.className = "Buchstaben";  //Klasse Buchstaben

            buchstabe.addEventListener("click", clickColorChange);  //Event Aufruf
            //Elemente in Body einf�gen:
            document.body.appendChild(buchstabe);

        }

        createTextfeld();  //Aufruf der Textfeld function
    }



    //----------Erzeugen des Textfeldes--------------------------------------------------------------

    function createTextfeld(): void {
        let Textfeld: HTMLDivElement = document.createElement("div");
        Textfeld.style.width = "80%";
        Textfeld.style.height = "32em";  //H�he muss in em angegeben werden, da Seitenh�he nicht in Prozent berechnet werden kann
        Textfeld.style.border = "2px solid orange";
        Textfeld.style.backgroundColor = "lightgrey";
        Textfeld.style.marginTop = "1.5em";
        Textfeld.addEventListener("click", clickDomPointer); //Event Aufruf: wenn auf Textfeld geklickt wird, f�hre "clickDomPointer" aus   
        //Elemente in Body einf�gen:
        document.body.appendChild(Textfeld);
    }




    //----Auswahl des Buchstabens----------------------------------------------------------------------

    //Event: bei click auf Buchstaben oder Tastaturdruck, soll Farbe ge�ndert werden
    function clickColorChange(_event: MouseEvent): void {
        let div: HTMLHeadingElement = <HTMLHeadingElement>_event.target;  //target: Startknoten f�r das Event (hier ist der Signalempfang)
        div.style.backgroundColor = "yellow";  //wenn auf das Buchstaben div geklickt wird, wirds gelb
        gespeicherterBuchstabe = div.id;  //id des ausgew�hlten Buchstabens zwischenspeichern


        //Buchstabe, durch klicken eines anderen, in Ursprungszustand versetzen:
        let buchstabeWiederNormal: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("Buchstaben"); //speichert jedes div der Klasse "Buchstaben" in Variable "BuchstabeWiederNormal"

        for (let i: number = 0; i < buchstabeWiederNormal.length; i++) {  //geht BuchstabeWiederNormal-Liste durch und pr�ft, ob eine Id mit der Id, die in "gespeicherterBuchstabe" hinterlegt ist, �bereinstimmt
            if (gespeicherterBuchstabe != buchstabeWiederNormal[i].id) { //wenn gespeicherter Buchstabe gelb ist...
                buchstabeWiederNormal[i].style.backgroundColor = "white";  //...soll er wieder in den Ursprungszustand versetzt werden
            }

        }
    }




    //Buchstaben auf Tastatur ausw�hlen: 

    function TastaturColorChange(event: KeyboardEvent): void {
        // Dr�cke a/A
        if (event.key == "a" || event.key == "A") { // wenn a/A gedr�ckt wird



            // ab hier andere L�sung finden mit Zugriff auf Array!



            gespeicherterBuchstabe = event.key; //speichere a/A ab
            clickDomPointer;
        }
        // Dr�cke b/B
        else if (event.key == "b" || event.key == "B") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }

        // Dr�cke c/C
        else if (event.key == "c" || event.key == "C") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke d/D
        else if (event.key == "d" || event.key == "D") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke e/E
        else if (event.key == "e" || event.key == "E") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke f/F
        else if (event.key == "f" || event.key == "F") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke g/G
        else if (event.key == "g" || event.key == "G") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke h/H
        else if (event.key == "h" || event.key == "H") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke i/I
        else if (event.key == "i" || event.key == "I") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke j/J
        else if (event.key == "j" || event.key == "J") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke k/K
        else if (event.key == "k" || event.key == "K") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke l/L
        else if (event.key == "l" || event.key == "L") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke m/M
        else if (event.key == "m" || event.key == "M") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke n/N
        else if (event.key == "n" || event.key == "N") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke o/O
        else if (event.key == "o" || event.key == "O") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke p/P
        else if (event.key == "p" || event.key == "P") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke q/Q
        else if (event.key == "q" || event.key == "Q") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke r/R
        else if (event.key == "r" || event.key == "R") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke s/S
        else if (event.key == "s" || event.key == "S") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke t/T
        else if (event.key == "t" || event.key == "T") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke u/U
        else if (event.key == "u" || event.key == "U") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke v/V
        else if (event.key == "v" || event.key == "V") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke w/W
        else if (event.key == "w" || event.key == "W") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke x/X
        else if (event.key == "x" || event.key == "X") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke y/Y
        else if (event.key == "y" || event.key == "Y") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Dr�cke z/Z
        else if (event.key == "z" || event.key == "Z") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
    }



    //-------Mauszeiger im zweiten Feld----------------------------------------------------------

    // Event: click mit dem Mauszeiger--> erscheinen von zuvor ausgew�hltem Buchstaben
    function clickDomPointer(_event: MouseEvent): void {
        let domPointerDiv: HTMLDivElement = document.createElement("div");  //Erzeuge div 
        //div f�llen mit Buchstabe:
        domPointerDiv.style.width = "2%";
        domPointerDiv.style.padding = "0.3em";
        domPointerDiv.style.height = "auto";
        domPointerDiv.style.border = "1px solid black";
        domPointerDiv.style.position = "absolute";  //Buchstaben divs werden aus normalem Flie�verhalten rausgenommen
        domPointerDiv.innerText = gespeicherterBuchstabe;
        domPointerDiv.style.left = _event.pageX + "px"; //Position an der der Buchstabe erscheinen soll (ist abh�ngig vom _event Parameter)
        domPointerDiv.style.top = _event.pageY + "px";

        domPointerDiv.addEventListener("click", (event) => { deleteBuchstabe(event, event.altKey) }); //wenn Alt gedr�ckt und auf BuchstabenDiv geklickt wird f�hre "deleteBuchstabe" aus
        document.body.appendChild(domPointerDiv); //Div Element in Body einf�gen
    }


    //-------L�schen eines gesetzten Buchstabens-----------------------------------------------------------------   
    //Event: bei gehaltener Alt-Taste und click auf Buchstabe, soll dieser gel�scht werden
    function deleteBuchstabe(_event: MouseEvent, alt: boolean): void {
        if (alt == true) {  //wenn Alt gedr�ckt wird
            //dann: 
            let entferne: HTMLDivElement = <HTMLDivElement>_event.target; //Variable "entferne" ist das Event
            //target: Startknoten, auf den sich das Event bezieht (hier ist der Signalempfang)
            document.body.removeChild(entferne);  //Div aus Body entfernen
        }
    }



}