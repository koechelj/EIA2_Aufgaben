var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb); //wenn sich Warenkorb ver�ndert, function neu aufrufen  
    //-------Platzhalter f�r Kontaktdaten--------------------------
    var name; //var Name: Datentyp;
    var strasse;
    var hausnr;
    var ort;
    var plz;
    var mail;
    var label;
    //-------Platzhalter f�r Warenkorbinhalte (werden mit Bezeichnung u. Preis bei  Warenkorb Inhaltsgenerierung bef�llt)-----------------------
    var korbBaumart = [Aufgabe11.baumArt[0][0], "" + Aufgabe11.baumArt[0][1]]; //1. und 2. Stelle im Warenkorb
    var korbBaumhalterung = ["kein Halter ausgewaehlt", "0"]; //1. und 2. Stelle im Warenkorb
    var korbKerzen = [Aufgabe11.kerzen[0][0], "" + Aufgabe11.kerzen[0][1]];
    var korbBaumschmuck = []; //Array wird sp�ter Infos der Schmuckartikel beeinhalten
    var korbLieferoption = ["keine Lieferoption ausgewaehlt", "0"];
    //--------------------Formelemente generieren--------------------------------------
    function createElements() {
        //1) Baumschmuck- Checkbox, Titel und Stepper generieren
        let baumschmuck = document.getElementById("baumschmuck");
        //Schleife durchsucht Array bis Bedingung erf�llt ist und generiert dann den Inhalt
        for (let i = 0; i < Aufgabe11.bestellung.length; i++) {
            //Bedingung
            if (Aufgabe11.bestellung[i].art == "Baumschmuck") {
                var checkboxBS = document.createElement("input"); //Input-Element in Checkbox Optik erstellen
                //...dann bef�lle die Variable (das Input-Element) wie folgt:
                checkboxBS.type = "checkbox";
                checkboxBS.name = "CheckboxBaumschmuck";
                checkboxBS.value = "check";
                checkboxBS.id = "check" + i;
                baumschmuck.appendChild(checkboxBS); //Checkbox ins HTML einf�gen
                var labelBS = document.createElement("label"); //Titel-Element
                //bef�llen
                labelBS.id = "label2" + i;
                labelBS.innerText = Aufgabe11.bestellung[i].bezeichnung;
                baumschmuck.appendChild(labelBS); //Label ins HTML integrieren
                var stepperBS = document.createElement("input"); //Input-Element in Stepper Optik
                stepperBS.type = "number";
                stepperBS.name = "StepperBaumschmuck" + i;
                stepperBS.value = "1"; //angezeigte Anzahl zu Beginn
                stepperBS.id = "stepperBS" + i; //i, da es f�r alle BS Stepper gilt
                stepperBS.min = "0";
                stepperBS.max = "30";
                stepperBS.step = "1"; //Schritte
                baumschmuck.appendChild(stepperBS); //Stepper ins HTML integrieren
            }
        }
        //2) Kerzen Selectbox generieren
        let kerzen = document.getElementById("kerzen");
        let selectboxK = document.createElement("select");
        selectboxK.name = "SelectKerzen";
        selectboxK.id = "selectKerzen";
        kerzen.appendChild(selectboxK);
        //wenn Bedingung erf�llt, dann kreiere Select Box:
        for (let i = 0; i < Aufgabe11.bestellung.length; i++) {
            if (Aufgabe11.bestellung[i].art == "Kerzen") {
                var optionK = document.createElement("option"); //kreiiere Optionelement
                optionK.innerText = Aufgabe11.bestellung[i].bezeichnung;
                optionK.id = "optionK" + i;
                selectboxK.appendChild(optionK);
            }
        }
        //3) Baumart Selectbox generieren
        let baumart = document.getElementById("baumart");
        let selectboxBA = document.createElement("select");
        selectboxBA.name = "SelectBaumart";
        selectboxBA.id = "selectBaumart";
        baumart.appendChild(selectboxBA);
        for (let i = 0; i < Aufgabe11.bestellung.length; i++) {
            if (Aufgabe11.bestellung[i].art == "Baumart") {
                var optionBA = document.createElement("option"); //...kreiere Optionelement
                //bef�llen
                optionBA.innerText = Aufgabe11.bestellung[i].bezeichnung;
                optionBA.id = "optionBA" + i;
                selectboxBA.appendChild(optionBA);
            }
        }
        //4) Baumhalterung Radiobutton Group generieren
        let halterung = document.getElementById("baumhalterung");
        for (let i = 0; i < Aufgabe11.bestellung.length; i++) {
            if (Aufgabe11.bestellung[i].art == "Baumhalterung") {
                var radiobuttonH = document.createElement("input");
                radiobuttonH.type = "radio";
                radiobuttonH.name = "radioGroupHalterung";
                radiobuttonH.value = "radio" + i;
                radiobuttonH.id = "radioH" + i;
                halterung.appendChild(radiobuttonH);
                var labelH = document.createElement("label");
                labelH.id = "labelH" + i;
                labelH.innerText = Aufgabe11.bestellung[i].bezeichnung;
                halterung.appendChild(labelH);
            }
        }
        //5) Lieferoptionen Radiobutton Group generieren
        let lieferoptionen = document.getElementById("lieferoptionen");
        for (let i = 0; i < Aufgabe11.bestellung.length; i++) {
            if (Aufgabe11.bestellung[i].art == "Lieferoption") {
                var radiobuttonL = document.createElement("input"); //...kreiere Inputfeld
                radiobuttonL.type = "radio";
                radiobuttonL.name = "radioGroupLieferoptionen";
                radiobuttonL.value = "radio" + i;
                radiobuttonL.id = "radioL" + i;
                lieferoptionen.appendChild(radiobuttonL);
                var labelL = document.createElement("label");
                labelL.id = "labelL" + i;
                labelL.innerText = Aufgabe11.bestellung[i].bezeichnung;
                lieferoptionen.appendChild(labelL);
            }
        }
        //6) Kontaktdatenfelder generieren 
        let kontaktdaten = document.getElementById("kontaktdaten");
        name = document.createElement("input"); //Input-Element erstellen 
        //Input-Element f�llen
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Vor-und Nachname";
        name.required = true; //Eingabe ist erforderlich
        kontaktdaten.appendChild(name); //Name Input-Element ins HTML integrieren
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
        hausnr.pattern = "[0-9]{2}"; //M�gliche Zahlen 0-9 //2 Zahlen sind erforderlich
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
        plz.pattern = "[0-9]{5}"; //M�gliche Zahlen 0-9 //5 Zahlen sind erforderlich
        plz.required = true;
        kontaktdaten.appendChild(plz);
        mail = document.createElement("input");
        mail.type = "email"; //@ muss vorkommen
        mail.name = "DatenEmail";
        mail.placeholder = "E-Mail Adresse";
        mail.required = true;
        kontaktdaten.appendChild(mail);
        //7) Botton generieren   
        let button = document.getElementById("button");
        let pruefen = document.createElement("button");
        //var f�llen:
        pruefen.type = "submit"; //submit = sende Request (alles im form-Tag) an den Server
        pruefen.innerText = "Bestellung pruefen";
        //Event-Listener lauscht da wo das Event passieren wird, n�mlich im Button
        pruefen.addEventListener("mousedown", clickButton); //Bei click-Event soll function clickButton ausgef�hrt werden
        button.appendChild(pruefen);
    }
    //-------------------Warenkorb-----------------------------------------------
    function warenkorb(_event) {
        //Variablen deklarieren        //target = das InputElement, in dem gerade das Event startet
        let target = _event.target;
        //Arrayvariablen:
        let stepper = []; //= Array f�r alle StepperInputElemente
        let checkBoxen = []; //= Array f�r alle CheckboxenInputElemente
        let gesamtpreis = 0; //Anfangsbetrag ist 0
        //-------------------Schleife generiert Anzeige im Warenkorb (Artikelbezeichnung u. Artikelpreis)---------------------------------        
        for (let i = 0; i < Aufgabe11.bestellung.length; i++) {
            //�berpr�fe und bef�lle die Arrayvariablen
            //Baumart:
            //wenn Wert im HTMLInputElement mit Artikelbezeichnung �bereinstimmt UND id der Selectbox �bereinstimmt, dann....  
            if (target.value == Aufgabe11.bestellung[i].bezeichnung && target.id == "selectBaumart") {
                korbBaumart[0] = Aufgabe11.bestellung[i].bezeichnung;
                korbBaumart[1] = "" + Aufgabe11.bestellung[i].preis; //...soll im WK  Bezeichnung u. Preis angezeigt werden
            }
            //Baumhalterung: (radioH ist RadioButtonGroup der Halterung) 
            if (target.id == "radioH" + i) {
                korbBaumhalterung[0] = Aufgabe11.bestellung[i].bezeichnung;
                korbBaumhalterung[1] = "" + Aufgabe11.bestellung[i].preis; //...soll im WK Bezeichnung u. Preis angezeigt werden
            }
            //Lieferoption: (radioL ist RadioButtonGroup der Lieferoption)
            if (target.id == "radioL" + i) {
                korbLieferoption[0] = Aufgabe11.bestellung[i].bezeichnung;
                korbLieferoption[1] = "" + Aufgabe11.bestellung[i].preis; //...soll Bezeichnung u. Preis im WK angezeigt werden
            }
            //Beleuchtung:  
            //wenn Wert im HTMLInputElement mit Artikelbezeichnung �bereinstimmt UND id der Selectbox �bereinstimmt, dann...
            if (target.value == Aufgabe11.bestellung[i].bezeichnung && target.id == "selectKerzen") {
                korbKerzen[0] = Aufgabe11.bestellung[i].bezeichnung;
                korbKerzen[1] = "" + Aufgabe11.bestellung[i].preis; //...soll Bezeichnung u. Preis im WK angezeigt werden
            }
            //Checkboxen Baumschmuck:
            //wenn id vom HTMLInputElement  mit CheckboxId ODER mit StepperId �bereinstimmt, dann...
            if (target.id == "check" + i || target.id == "stepperBS" + i) {
                //...soll Bezeichnung u. Preis*Anzahl im WK angezeigt werden
                korbBaumschmuck[i] = [Aufgabe11.bestellung[i].bezeichnung, "" + (Aufgabe11.bestellung[i].preis * parseInt(stepper[i].value))]; //parseInt wandelt string in ganze Zahl um
            }
            //Stepper Baumschmuck:
            if (Aufgabe11.bestellung[i].art == "Baumschmuck") {
                //...wird dem StepperArray, der jeweilige Stepper mit der ID "stepperBS", zugewiesen 
                stepper[i] = document.getElementById("stepperBS" + i); //i bestimmt welcher StepperArtikel gemeint ist
                //...wird dem CheckboxenArray, die jeweilige Checkbox mit der ID "check", zugewiesen
                checkBoxen[i] = document.getElementById("check" + i);
            }
        }
        //-----------Warenkorb Feld u. Optik erzeugen------------------------------
        let korb = document.getElementById("zusammenfassung");
        //bef�llen:
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "orange";
        //Text im Warenkorb
        //zeige Baumart, Baumhalterung, Beleuchtung und Lieferoption im WK an:
        korb.innerHTML = "<h3>Warenkorb</h3><hr>";
        korb.innerHTML += "Baumart:" + korbBaumart[0] + " " + korbBaumart[1] + " Euro <br>"; //1. u. 2. Arrayangabe, siehe Platzhalter ganz oben
        korb.innerHTML += "Baumhalterung: " + korbBaumhalterung[0] + " " + korbBaumhalterung[1] + " Euro <br>"; //es wurde definiert, dass 1. die Bezeichnung und 2. der Preis sein soll
        korb.innerHTML += "Beleuchtung:" + korbKerzen[0] + " " + korbKerzen[1] + " Euro <br>";
        korb.innerHTML += "Lieferoption: " + korbLieferoption[0] + " " + korbLieferoption[1] + " Euro <br>";
        //------------Berechnung Gesamtpreis----------------- //parseFloat wandelt string in Flie�kommazahl um
        //Die Preise die vorhin generiert wurden zusammenaddieren:
        gesamtpreis = parseFloat(korbBaumart[1]) + parseFloat(korbKerzen[1]) + parseFloat(korbBaumhalterung[1]) + parseFloat(korbLieferoption[1]);
        for (let i = 0; i < stepper.length; i++) {
            //Bedingung:
            if (stepper[i] != null && checkBoxen[i].checked == true) {
                gesamtpreis += parseFloat(korbBaumschmuck[i][1]); //...rechne bisherigen gesamtpreis + Preis des Schmuckartikels zusammen
                //Ausgabe f�r Schmuckartikel im WK:   Bezeichnung                   Preis
                korb.innerHTML += "Schmuckartikel:" + korbBaumschmuck[i][0] + " " + korbBaumschmuck[i][1] + " Euro <br>";
            }
        }
        //Ausgabe Endpreis:
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro"; //Math.round rundet Ergebnis auf ganze Zahl
    }
    //------------------Button EventFunktion------------------------------------------------------
    //Bestellung pr�fen u. Response fordern durch Klick auf Button: 
    function clickButton(_event) {
        var feedback = document.createElement("div"); //var ist Platzhalter f�r das div-Element
        //var f�llen:
        feedback.style.paddingBottom = "3em";
        //Bedingungen:
        //wenn die Kontaktdaten falsch ausgef�llt wurden...
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausnr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            //...gib folgendes Feedback
            feedback.innerText = "Deine Angaben sind falsch. Bitte ueberpruefe sie noch einmal.";
            feedback.style.color = "orange";
            document.body.appendChild(feedback); //var feedback ins HTML integrieren
        }
        else {
            feedback.innerText = "Deine Angaben sind richtig";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Remote_Weihnachtsbaumkonfigurator.js.map