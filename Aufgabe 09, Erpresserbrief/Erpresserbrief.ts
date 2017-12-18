namespace Erpresserbrief {

    //Event Listener installieren:
    window.addEventListener("load", erzeugeBuchstabeundTextfeld);
    document.addEventListener("keydown", TastaturColorChange); //wenn Buchstabe auf Tastatur gedrückt wird
    // >>>> besser tastaturColorChange mit Kleinbuchstabe
    document.addEventListener("keypressed", deleteBuchstabe); //für Löschen des Buchstabens, wenn Alt gedrückt und Buchstabe angeklickt wird
    // >>>> das muss anders gelöst werden, siehe weiter unten

    //Array für Buchstaben
    let Buchstabe: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //Ausgewählter Buchstabe speichern:
    var gespeicherterBuchstabe: string = ""; //flexibel, da jeder Buchstabe angeklickt werden kann

    let Briefbereich: HTMLDivElement;
    // >>>> was ist der Unterschied zwischen Briefbereich und Textfeld? Warum wird die Variable Briefbereich überhaupt angelegt?




    //-----Erzeugen des Auswahlbuchstabens-------------------------------------------------------------------------------

    function erzeugeBuchstabeundTextfeld(): void {
        //For schleife, die die Buchstaben divs generiert:
        for (let i: number = 0; i < Buchstabe.length; i++) {
            var B: HTMLDivElement = document.createElement("div"); //div Elemente erstellen
            // >>>> B ist wenig aussagekräftig und sollte auch mit Kleinbuchstabe beginnen, z.B. Letter
            B.style.width = "6%";
            B.style.margin = "0.5em";
            B.style.height = "auto";
            B.style.display = "inline"; //inline, weil die die Buchstaben nicht alle in einer neuen Zeile beginnen sollen (div ist normalerweise Block Element)
            B.style.backgroundColor = "lightgrey";
            B.innerText = Buchstabe[i];

            //Buchstabe wieder in Ursprungszustand versetzen:
            B.id = Buchstabe[i];  //Id für Buchstaben vergeben
            B.className = "Buchstaben";  //Klasse Buchstaben

            B.addEventListener("click", ClickColorChange);  //Event Aufruf
            // >>>> auch besser clickColorChange oder noch besser als Aktion: changeColorOnClick
            //Elemente in Body einfügen:
            document.body.appendChild(B);

        }

        Textfeld();  //Aufruf der Textfeld function
        // >>>> auch hier besser createTextfield
    }



    //----------Erzeugen des Textfeldes--------------------------------------------------------------

    function Textfeld(): void {
        let Textfeld: HTMLDivElement = document.createElement("div");
        Textfeld.style.width = "80%";
        Textfeld.style.height = "32em";  //Höhe muss in em angegeben werden, da Seitenhöhe nicht in Prozent berechnet werden kann
        Textfeld.style.border = "2px solid orange";
        Textfeld.style.backgroundColor = "lightgrey";
        Textfeld.style.marginTop = "1.5em";
        Textfeld.addEventListener("click", clickDomPointer); //Event Aufruf: wenn auf Textfeld geklickt wird, führe "clickDomPointer" aus   
        // >>>> warum DomPointer? Bitte einen passenden Namen finden
        //Elemente in Body einfügen:
        document.body.appendChild(Textfeld);
    }




    //----Auswahl des Buchstabens----------------------------------------------------------------------

    //Event: bei click auf Buchstaben oder Tastaturdruck, soll Farbe geändert werden
    function ClickColorChange(_event: MouseEvent): void {
        let div: HTMLHeadingElement = <HTMLHeadingElement>_event.target;  //target: Startknoten für das Event (hier ist der Signalempfang)
        div.style.backgroundColor = "yellow";  //wenn auf das Buchstaben div geklickt wird, wirds gelb
        gespeicherterBuchstabe = div.id;  //id des ausgewählten Buchstabens zwischenspeichern


        //Buchstabe, durch klicken eines anderen, in Ursprungszustand versetzen:
        let BuchstabeWiederNormal: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("Buchstaben"); //speichert jedes div der Klasse "Buchstaben" in Variable "BuchstabeWiederNormal"
        // >>>> Variablennamen mit Kleinbuchstabe beginnen lassen
        
        for (let i: number = 0; i < BuchstabeWiederNormal.length; i++) {  //geht BuchstabeWiederNormal-Liste durch und prüft, ob eine Id mit der Id, die in "gespeicherterBuchstabe" hinterlegt ist, übereinstimmt
            if (gespeicherterBuchstabe != BuchstabeWiederNormal[i].id) { //wenn gespeicherter Buchstabe gelb ist...
                BuchstabeWiederNormal[i].style.backgroundColor = "white";  //...soll er wieder in den Ursprungszustand versetzt werden
            }

        }
    }
    

    //Buchstaben auf Tastatur auswählen: 

    function TastaturColorChange(event: KeyboardEvent): void {
        // >>>> das folgende sollte unbedingt anders gelöst werden. z.B. den gedrückten Buchstaben in Großbuchstaben umwandeln
        // (dafür gibt es eine Anweisung) und prüfen, ob er im Array ist. Oder einfach prüfen, ob der Keycode in einem bestimmten Bereich liegt.
        // Drücke a/A
        if (event.key == "a" || event.key == "A") { // wenn a/A gedrückt wird
            gespeicherterBuchstabe = event.key; //speichere a/A ab
            clickDomPointer;
        }
        // Drücke b/B
        else if (event.key == "b" || event.key == "B") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }

        // Drücke c/C
        else if (event.key == "c" || event.key == "C") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke d/D
        else if (event.key == "d" || event.key == "D") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke e/E
        else if (event.key == "e" || event.key == "E") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke f/F
        else if (event.key == "f" || event.key == "F") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke g/G
        else if (event.key == "g" || event.key == "G") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke h/H
        else if (event.key == "h" || event.key == "H") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke i/I
        else if (event.key == "i" || event.key == "I") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke j/J
        else if (event.key == "j" || event.key == "J") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke k/K
        else if (event.key == "k" || event.key == "K") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke l/L
        else if (event.key == "l" || event.key == "L") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke m/M
        else if (event.key == "m" || event.key == "M") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke n/N
        else if (event.key == "n" || event.key == "N") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke o/O
        else if (event.key == "o" || event.key == "O") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke p/P
        else if (event.key == "p" || event.key == "P") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke q/Q
        else if (event.key == "q" || event.key == "Q") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke r/R
        else if (event.key == "r" || event.key == "R") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke s/S
        else if (event.key == "s" || event.key == "S") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke t/T
        else if (event.key == "t" || event.key == "T") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke u/U
        else if (event.key == "u" || event.key == "U") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke v/V
        else if (event.key == "v" || event.key == "V") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke w/W
        else if (event.key == "w" || event.key == "W") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke x/X
        else if (event.key == "x" || event.key == "X") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke y/Y
        else if (event.key == "y" || event.key == "Y") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
        // Drücke z/Z
        else if (event.key == "z" || event.key == "Z") {
            gespeicherterBuchstabe = event.key;
            clickDomPointer;
        }
    }



    //-------Mauszeiger im zweiten Feld----------------------------------------------------------

    // Event: click mit dem Mauszeiger--> erscheinen von zuvor ausgewähltem Buchstaben
    function clickDomPointer(_event: MouseEvent): void {
        // >>>> wie schon erwähnt, besser etwas wie setLetterInBlackmail(...)
        let domPointerDiv: HTMLDivElement = document.createElement("div");  //Erzeuge div 
        //div füllen mit Buchstabe:
        domPointerDiv.style.width = "2%";
        domPointerDiv.style.padding = "0.3em";
        domPointerDiv.style.height = "auto";
        domPointerDiv.style.border = "1px solid black";
        domPointerDiv.style.position = "absolute";  //Buchstaben divs werden aus normalem Fließverhalten rausgenommen
        domPointerDiv.innerText = gespeicherterBuchstabe;
        domPointerDiv.style.left = _event.pageX + "px"; //Position an der der Buchstabe erscheinen soll (ist abhängig vom _event Parameter)
        domPointerDiv.style.top = _event.pageY + "px";

        domPointerDiv.addEventListener("click", deleteBuchstabe); //wenn auf BuchstabenDiv geklickt wird führe "deleteBuchstabe" aus
        document.body.appendChild(domPointerDiv); //Div Element in Body einfügen
        Briefbereich = <HTMLDivElement>_event.target; //Briefbereich ist das EventTarget (Startknoten für Signalempfang)
        // >>>> Mit Briefbereich wird gar nichts gemacht, oder? Dann sollte man das auch weglassen.
    }



    //Event: bei gehaltener Alt-Taste und click auf Buchstabe, soll dieser gelöscht werden
    function deleteBuchstabe(_event: KeyboardEvent): void {
        // >>>> deleteBuchstabe sollte ein MouseEvent empfangen!
        if (_event.keyCode == 18) {  //wenn KeyCode 18 (also Alt Taste) gedrückt wird....
            //dann lösche Buchstabe:
            BuchstabeAlt;
            // >>>> Das ist kein Aufruf, dafür fehlen die runden Klammern. Es müsste das Event weiter gereicht werden.
            // stattdessen könnte man auch den Inhalt von BuchstabeAlt hier einfügen, dann sollte es klappen...
    }
        }

       //-------Löschen eines gesetzten Buchstabens------------------------------------------------------------------
    function BuchstabeAlt(_event: MouseEvent): void {
        let entferne: HTMLDivElement = <HTMLDivElement>_event.target; //Variable "entferne" ist das Event
        //target: Startknoten, auf den sich das Event bezieht (hier ist der Signalempfang)
        document.body.removeChild(entferne);  //Div aus Body entfernen
    }    
        
        


    }
