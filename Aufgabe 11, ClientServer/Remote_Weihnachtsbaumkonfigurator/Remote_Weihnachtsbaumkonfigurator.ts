namespace Aufgabe11 {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);  //wenn sich Warenkorb verändert, function neu aufrufen  

    //-------Platzhalter für Kontaktdaten--------------------------
    var name: HTMLInputElement;  //var Name: Datentyp;
    var strasse: HTMLInputElement;
    var hausnr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var mail: HTMLInputElement;
    var label: HTMLLabelElement;


    //-------Platzhalter für Warenkorbinhalte (werden mit Bezeichnung u. Preis bei  Warenkorb Inhaltsgenerierung befüllt)-----------------------
    var korbBaumart: string[] = [baumArt[0][0], "" + baumArt[0][1]];  //1. und 2. Stelle im Warenkorb
    var korbBaumhalterung: string[] = ["kein Halter ausgewaehlt", "0"];  //1. und 2. Stelle im Warenkorb
    var korbKerzen: string[] = [kerzen[0][0], "" + kerzen[0][1]];
    var korbBaumschmuck: string[][] = [];  //Array wird später Infos der Schmuckartikel beeinhalten
    var korbLieferoption: string[] = ["keine Lieferoption ausgewaehlt", "0"];



    //--------------------Formelemente generieren--------------------------------------

    function createElements(): void {

        //1) Baumschmuck- Checkbox, Titel und Stepper generieren
        let baumschmuck: HTMLDivElement = <HTMLDivElement>document.getElementById("baumschmuck");
        //Schleife durchsucht Array bis Bedingung erfüllt ist und generiert dann den Inhalt
        for (let i: number = 0; i < bestellung.length; i++) {
            //Bedingung
            if (bestellung[i].art == "Baumschmuck") {  //...wenn es sich um Baumschmuck handelt...
                var checkboxBS: HTMLInputElement = document.createElement("input"); //Input-Element in Checkbox Optik erstellen
                //...dann befülle die Variable (das Input-Element) wie folgt:
                checkboxBS.type = "checkbox";
                checkboxBS.name = "CheckboxBaumschmuck";
                checkboxBS.value = "check";
                checkboxBS.id = "check" + i;
                baumschmuck.appendChild(checkboxBS);  //Checkbox ins HTML einfügen

                var labelBS: HTMLLabelElement = document.createElement("label"); //Titel-Element
                //befüllen
                labelBS.id = "label2" + i;
                labelBS.innerText = bestellung[i].bezeichnung;
                baumschmuck.appendChild(labelBS);   //Label ins HTML integrieren

                var stepperBS: HTMLInputElement = document.createElement("input");  //Input-Element in Stepper Optik
                stepperBS.type = "number";
                stepperBS.name = "StepperBaumschmuck" + i;
                stepperBS.value = "1";  //angezeigte Anzahl zu Beginn
                stepperBS.id = "stepperBS" + i;  //i, da es für alle BS Stepper gilt
                stepperBS.min = "0";
                stepperBS.max = "30";
                stepperBS.step = "1";  //Schritte
                baumschmuck.appendChild(stepperBS);  //Stepper ins HTML integrieren
            }
        }


        //2) Kerzen Selectbox generieren
        let kerzen: HTMLDivElement = <HTMLDivElement>document.getElementById("kerzen");
        let selectboxK: HTMLSelectElement = document.createElement("select");
        selectboxK.name = "SelectKerzen";
        selectboxK.id = "selectKerzen";
        kerzen.appendChild(selectboxK);
        //wenn Bedingung erfüllt, dann kreiere Select Box:
        for (let i: number = 0; i < bestellung.length; i++) {
            if (bestellung[i].art == "Kerzen") { //wenn Kerzen, dann...
                var optionK: HTMLElement = document.createElement("option"); //kreiiere Optionelement
                optionK.innerText = bestellung[i].bezeichnung;
                optionK.id = "optionK" + i;
                selectboxK.appendChild(optionK);
            }
        }


        //3) Baumart Selectbox generieren
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        let selectboxBA: HTMLSelectElement = document.createElement("select");
        selectboxBA.name = "SelectBaumart";
        selectboxBA.id = "selectBaumart";
        baumart.appendChild(selectboxBA);
        for (let i: number = 0; i < bestellung.length; i++) {
            if (bestellung[i].art == "Baumart") { //wenn Baumart, dann....
                var optionBA: HTMLElement = document.createElement("option");//...kreiere Optionelement
                //befüllen
                optionBA.innerText = bestellung[i].bezeichnung;
                optionBA.id = "optionBA" + i;
                selectboxBA.appendChild(optionBA);
            }
        }



        //4) Baumhalterung Radiobutton Group generieren
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("baumhalterung");
        for (let i: number = 0; i < bestellung.length; i++) {
            if (bestellung[i].art == "Baumhalterung") {
                var radiobuttonH: HTMLInputElement = document.createElement("input");
                radiobuttonH.type = "radio";
                radiobuttonH.name = "radioGroupHalterung";
                radiobuttonH.value = "radio" + i;
                radiobuttonH.id = "radioH" + i;
                halterung.appendChild(radiobuttonH);

                var labelH: HTMLLabelElement = document.createElement("label");
                labelH.id = "labelH" + i;
                labelH.innerText = bestellung[i].bezeichnung;
                halterung.appendChild(labelH);
            }
        }


        //5) Lieferoptionen Radiobutton Group generieren
        let lieferoptionen: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < bestellung.length; i++) {
            if (bestellung[i].art == "Lieferoption") { //wenn Lieferoption, dann...
                var radiobuttonL: HTMLInputElement = document.createElement("input");//...kreiere Inputfeld
                radiobuttonL.type = "radio";
                radiobuttonL.name = "radioGroupLieferoptionen";
                radiobuttonL.value = "radio" + i;
                radiobuttonL.id = "radioL" + i;
                lieferoptionen.appendChild(radiobuttonL);

                var labelL: HTMLLabelElement = document.createElement("label");
                labelL.id = "labelL" + i;
                labelL.innerText = bestellung[i].bezeichnung;
                lieferoptionen.appendChild(labelL);
            }
        }


        //6) Kontaktdatenfelder generieren 
        let kontaktdaten: HTMLDivElement = <HTMLDivElement>document.getElementById("kontaktdaten");
        name = document.createElement("input");  //Input-Element erstellen 
        //Input-Element füllen
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Vor-und Nachname";
        name.required = true; //Eingabe ist erforderlich
        kontaktdaten.appendChild(name);  //Name Input-Element ins HTML integrieren

        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Strasse";
        strasse.required = true;
        kontaktdaten.appendChild(strasse);

        hausnr = document.createElement("input");
        hausnr.type = "text";
        hausnr.name = "DatenHausnummer";
        hausnr.placeholder = "Hausnummer, 2 stellig";
        hausnr.pattern = "[0-9]{2}";  //Mögliche Zahlen 0-9 //2 Zahlen sind erforderlich
        hausnr.required = true;
        kontaktdaten.appendChild(hausnr);

        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.required = true;
        kontaktdaten.appendChild(ort);

        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl, 5 stellig";
        plz.pattern = "[0-9]{5}";  //Mögliche Zahlen 0-9 //5 Zahlen sind erforderlich
        plz.required = true;
        kontaktdaten.appendChild(plz);

        mail = document.createElement("input");
        mail.type = "email";  //@ muss vorkommen
        mail.name = "DatenEmail";
        mail.placeholder = "E-Mail Adresse";
        mail.required = true;
        kontaktdaten.appendChild(mail);


        //7) Botton generieren   
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let pruefen: HTMLButtonElement = document.createElement("button");
        //var füllen:
        pruefen.type = "submit";  //submit = sende Request (alles im form-Tag) an den Server
        pruefen.innerText = "Bestellung pruefen";
        //Event-Listener lauscht da wo das Event passieren wird, nämlich im Button
        pruefen.addEventListener("mousedown", clickButton);  //Bei click-Event soll function clickButton ausgeführt werden
        button.appendChild(pruefen);
    }





    //-------------------Warenkorb-----------------------------------------------

    function warenkorb(_event: Event): void {

        //Variablen deklarieren        //target = das InputElement, in dem gerade das Event startet
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //Arrayvariablen:
        let stepper: HTMLInputElement[] = [];  //= Array für alle StepperInputElemente
        let checkBoxen: HTMLInputElement[] = []; //= Array für alle CheckboxenInputElemente
        let gesamtpreis: number = 0;  //Anfangsbetrag ist 0



        //-------------------Schleife generiert Anzeige im Warenkorb (Artikelbezeichnung u. Artikelpreis)---------------------------------        

        for (let i: number = 0; i < bestellung.length; i++) {

           
            //Überprüfe und befülle die Arrayvariablen


            //Baumart:
            //wenn Wert im HTMLInputElement mit Artikelbezeichnung übereinstimmt UND id der Selectbox übereinstimmt, dann....  
            if (target.value == bestellung[i].bezeichnung && target.id == "selectBaumart") {
                korbBaumart[0] = bestellung[i].bezeichnung;
                korbBaumart[1] = "" + bestellung[i].preis;   //...soll im WK  Bezeichnung u. Preis angezeigt werden
            }


            //Baumhalterung: (radioH ist RadioButtonGroup der Halterung) 
            if (target.id == "radioH" + i) { //wenn id vom HTMLInputElement gleich "radioH" ist, dann...
                korbBaumhalterung[0] = bestellung[i].bezeichnung;
                korbBaumhalterung[1] = "" + bestellung[i].preis; //...soll im WK Bezeichnung u. Preis angezeigt werden
            }


            //Lieferoption: (radioL ist RadioButtonGroup der Lieferoption)
            if (target.id == "radioL" + i) { //wenn id vom HTMLInputElement gleich "radioL" ist, dann...
                korbLieferoption[0] = bestellung[i].bezeichnung;
                korbLieferoption[1] = "" + bestellung[i].preis; //...soll Bezeichnung u. Preis im WK angezeigt werden
            }


            //Beleuchtung:  
            //wenn Wert im HTMLInputElement mit Artikelbezeichnung übereinstimmt UND id der Selectbox übereinstimmt, dann...
            if (target.value == bestellung[i].bezeichnung && target.id == "selectKerzen") {
                korbKerzen[0] = bestellung[i].bezeichnung;
                korbKerzen[1] = "" + bestellung[i].preis; //...soll Bezeichnung u. Preis im WK angezeigt werden
            }



            //Checkboxen Baumschmuck:
            //wenn id vom HTMLInputElement  mit CheckboxId ODER mit StepperId übereinstimmt, dann...
            if (target.id == "check" + i || target.id == "stepperBS" + i) {
                //...soll Bezeichnung u. Preis*Anzahl im WK angezeigt werden
                korbBaumschmuck[i] = [bestellung[i].bezeichnung, "" + (bestellung[i].preis * parseInt(stepper[i].value))];  //parseInt wandelt string in ganze Zahl um
                //Stelle im WK
            }
            
            
            
            //Stepper Baumschmuck:
            if (bestellung[i].art == "Baumschmuck") {   //wenn es sich um BS handelt, dann...

                //...wird dem StepperArray, der jeweilige Stepper mit der ID "stepperBS", zugewiesen 
                stepper[i] = <HTMLInputElement>document.getElementById("stepperBS" + i); //i bestimmt welcher StepperArtikel gemeint ist
                
                //...wird dem CheckboxenArray, die jeweilige Checkbox mit der ID "check", zugewiesen
                checkBoxen[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
        }   

        
        

        //-----------Warenkorb Feld u. Optik erzeugen------------------------------
         
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        //befüllen:
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "orange";

        //Text im Warenkorb
        //zeige Baumart, Baumhalterung, Beleuchtung und Lieferoption im WK an:
        korb.innerHTML = "<h3>Warenkorb</h3><hr>";
        korb.innerHTML += "Baumart:" + korbBaumart[0] + " " + korbBaumart[1] + " Euro <br>";  //1. u. 2. Arrayangabe, siehe Platzhalter ganz oben
        korb.innerHTML += "Baumhalterung: " + korbBaumhalterung[0] + " " + korbBaumhalterung[1] + " Euro <br>";  //es wurde definiert, dass 1. die Bezeichnung und 2. der Preis sein soll
        korb.innerHTML += "Beleuchtung:" + korbKerzen[0] + " " + korbKerzen[1] + " Euro <br>";
        korb.innerHTML += "Lieferoption: " + korbLieferoption[0] + " " + korbLieferoption[1] + " Euro <br>";


        
        //------------Berechnung Gesamtpreis----------------- //parseFloat wandelt string in Fließkommazahl um

        //Die Preise die vorhin generiert wurden zusammenaddieren:
        gesamtpreis = parseFloat(korbBaumart[1]) + parseFloat(korbKerzen[1]) + parseFloat(korbBaumhalterung[1]) + parseFloat(korbLieferoption[1]);
        for (let i: number = 0; i < stepper.length; i++) {   //Schleife zählt so lange hoch, bis alle Stepper überprüft wurden
            //Bedingung:
            if (stepper[i] != null && checkBoxen[i].checked == true) {  //wenn Stepper nicht 0 UND die Checkbox gefüllt ist...  
                gesamtpreis += parseFloat(korbBaumschmuck[i][1]);  //...rechne bisherigen gesamtpreis + Preis des Schmuckartikels zusammen

                //Ausgabe für Schmuckartikel im WK:   Bezeichnung                   Preis
                korb.innerHTML += "Schmuckartikel:" + korbBaumschmuck[i][0] + " " + korbBaumschmuck[i][1] + " Euro <br>";
            }
        }
        //Ausgabe Endpreis:
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";  //Math.round rundet Ergebnis auf ganze Zahl
    }




    //------------------Button EventFunktion------------------------------------------------------

    //Bestellung prüfen u. Response fordern durch Klick auf Button: 
    function clickButton(_event: MouseEvent): void {
        var feedback: HTMLDivElement = document.createElement("div"); //var ist Platzhalter für das div-Element
        //var füllen:
        feedback.style.paddingBottom = "3em";

        //Bedingungen:
        
        //wenn die Kontaktdaten falsch ausgefüllt wurden...
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausnr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            //...gib folgendes Feedback
            feedback.innerText = "Deine Angaben sind falsch. Bitte ueberpruefe sie noch einmal.";
            feedback.style.color = "orange";
            document.body.appendChild(feedback);  //var feedback ins HTML integrieren
        }

        //wenn die Kontaktdaten richtig ausgefüllt wurden... 
        else {
            feedback.innerText = "Deine Angaben sind richtig";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
}