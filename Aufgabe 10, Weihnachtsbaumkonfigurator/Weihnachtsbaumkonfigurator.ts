namespace Aufgabe10 {
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

    //-------Platzhalter für Warenkorbinhalte-----------------------
    var korbBaumart: string[] = [baumArt[0][0], "" + baumArt[0][1]];  //wenn keine ausgewählt ist, wenn eine ausgewählt ist
    var korbBaumhalterung: string[] = ["kein Halter ausgewaehlt", "0"];
    var korbKerzen: string[] = [kerzen[0][0], "" + kerzen[0][1]];
    var korbBaumschmuck: string[][] = [];
    var korbLieferoption: string[] = ["keine Lieferoption ausgewaehlt", "0"];



    //--------------------Seitenelemente--------------------------------------

    function createElements(): void {

        //1) Baumschmuck generieren (Checkbox, Titel und Stepper) 
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
                baumschmuck.appendChild(checkboxBS);  //let baumschmuck ins HTML einfügen

                var labelBS: HTMLLabelElement = document.createElement("label"); //Titel-Element
                //befüllen
                labelBS.id = "label2" + i;
                labelBS.innerText = bestellung[i].bezeichnung;
                baumschmuck.appendChild(labelBS);   //Titel ins HTML integrieren

                var stepperBS: HTMLInputElement = document.createElement("input");  //Input-Element in Stepper Optik
                stepperBS.type = "number";
                stepperBS.name = "StepperBaumschmuck" + i;
                stepperBS.value = "1";  //angezeigte Anzahl zu Beginn
                stepperBS.id = "stepperBS" + i;
                stepperBS.min = "0";
                stepperBS.max = "30";
                stepperBS.step = "1";  //Schritte
                baumschmuck.appendChild(stepperBS);  //Stepper ins HTML integrieren
            }
        }


        //2) Kerzen generieren (Selectbox)
        let kerzen: HTMLDivElement = <HTMLDivElement>document.getElementById("kerzen");
        let selectboxK: HTMLSelectElement = document.createElement("select");
        selectboxK.name = "SelectKerzen";
        selectboxK.id = "selectKerzen";
        kerzen.appendChild(selectboxK);
        //wenn Bedingung erfüllt, dann kreiere Select Box
        for (let i: number = 0; i < bestellung.length; i++) {
            if (bestellung[i].art == "Kerzen") {
                var optionK: HTMLElement = document.createElement("option");
                optionK.innerText = bestellung[i].bezeichnung;
                optionK.id = "optionK" + i;
                selectboxK.appendChild(optionK);
            }
        }


        //3) Baumart generieren (Selectbox)
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        let selectboxBA: HTMLSelectElement = document.createElement("select");
        selectboxBA.name = "SelectBaumart";
        selectboxBA.id = "selectBaumart";
        baumart.appendChild(selectboxBA);
        for (let i: number = 0; i < bestellung.length; i++) {
            if (bestellung[i].art == "Baumart") {
                var optionBA: HTMLElement = document.createElement("option");
                optionBA.innerText = bestellung[i].bezeichnung;
                optionBA.id = "optionBA" + i;
                selectboxBA.appendChild(optionBA);
            }
        }



        //4) Baumhalterung generieren (Radiobutton Group)
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


        //5) Lieferoptionen generieren (Radiobutton Group) 
        let lieferoptionen: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < bestellung.length; i++) {
            if (bestellung[i].art == "Lieferoption") {
                var radiobuttonL: HTMLInputElement = document.createElement("input");
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
        pruefen.name = "Pruefbutton";
        pruefen.type = "button";
        pruefen.innerText = "Bestellung pruefen";
        pruefen.addEventListener("mousedown", clickButton);  //Bei click-Event soll function clickButton ausgeführt werden
        button.appendChild(pruefen);
    }





    //-------------------Warenkorb-----------------------------------------------

    //8) Warenkorb mit Zusammenfassung der Bestellung und Anzeige des Gesamtpreises 
    function warenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;  //target setzt Event auf Anfang zurück
        let stepper: HTMLInputElement[] = [];
        let checkBoxen: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        //Schleife generiert Warenkorbinhalt
        for (let i: number = 0; i < bestellung.length; i++) {
            if (bestellung[i].art == "Baumschmuck") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepperBS" + i);
                checkBoxen[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            //Baumart:
            if (target.value == bestellung[i].bezeichnung && target.id == "selectBaumart") {
                korbBaumart[0] = bestellung[i].bezeichnung;  //[0] erste Array Angabe
                korbBaumart[1] = "" + bestellung[i].preis;   //[1] zweite Array Angabe
            }
            //Baumhalterung:
            if (target.id == "radioH" + i) {
                korbBaumhalterung[0] = bestellung[i].bezeichnung;
                korbBaumhalterung[1] = "" + bestellung[i].preis;

            }
            //Lieferoption:
            if (target.id == "radioL" + i) {
                korbLieferoption[0] = bestellung[i].bezeichnung;
                korbLieferoption[1] = "" + bestellung[i].preis;

            }
            //Beleuchtung:
            if (target.value == bestellung[i].bezeichnung && target.id == "selectKerzen") {
                korbKerzen[0] = bestellung[i].bezeichnung;
                korbKerzen[1] = "" + bestellung[i].preis;

            }
            if (target.id == "check" + i || target.id == "stepperBS" + i) {
                korbBaumschmuck[i] = [bestellung[i].bezeichnung, "" + (bestellung[i].preis * parseInt(stepper[i].value))];  //parseInt wandelt string in ganze Zahl um
            }
        }


        //Warenkorb Optik erzeugen 
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        //div wird gestylt:
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "orange";
        //Text im Warenkorb
        //zuerst Baumart, Baumhalterung, Kerzen und Lieferoption:
        korb.innerHTML = "<h3>Warenkorb</h3><hr>";
        korb.innerHTML += "" + korbBaumart[0] + " " + korbBaumart[1] + " Euro <br>";
        korb.innerHTML += "Baumhalterung: " + korbBaumhalterung[0] + " " + korbBaumhalterung[1] + " Euro <br>";
        korb.innerHTML += "" + korbKerzen[0] + " " + korbKerzen[1] + " Euro <br>";
        korb.innerHTML += "Lieferoption: " + korbLieferoption[0] + " " + korbLieferoption[1] + " Euro <br>";

        //Berechnung       //parseFloat wandelt string in Kommazahl um
        gesamtpreis = parseFloat(korbBaumart[1]) + parseFloat(korbKerzen[1]) + parseFloat(korbBaumhalterung[1]) + parseFloat(korbLieferoption[1]);  //gesamtpreis definieren
        for (let i: number = 0; i < stepper.length; i++) {   //Schleife zählt so lange hoch, bis alle Stepper überprüft wurden
            if (stepper[i] != null && checkBoxen[i].checked == true) {  //wenn Stepper nicht 0 und die Checkbox abgeharkt ist...  
                gesamtpreis += parseFloat(korbBaumschmuck[i][1]);  //...rechne bisherigen gesamtpreis + Preis des Schmuckartikels zusammen
                korb.innerHTML += "" + korbBaumschmuck[i][0] + " " + korbBaumschmuck[i][1] + " Euro <br>";

            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";  //Math.round rundet Ergebnis auf ganze Zahl
    }




    //------------------Button------------------------------------------------------

    //Bestellung prüfen durch Klick auf Button: Info über fehlende o. invalide Daten
    function clickButton(_event: MouseEvent): void {
        var feedback: HTMLDivElement = document.createElement("div"); //var ist Platzhalter für das div-Element
        //var füllen:
        feedback.style.paddingBottom = "3em";

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