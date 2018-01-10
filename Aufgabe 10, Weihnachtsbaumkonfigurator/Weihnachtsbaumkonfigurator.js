var Aufgabe10;
(function (Aufgabe10) {
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
    //-------Platzhalter f�r Warenkorbinhalte-----------------------
    var korbBaumart = [Aufgabe10.baumArt[0][0], "" + Aufgabe10.baumArt[0][1]];
    var korbBaumhalterung = ["Baumhalterung: keine ausgew�hlt", "0"];
    var korbKerzen = [Aufgabe10.kerzen[0][0], "" + Aufgabe10.kerzen[0][1]];
    var korbBaumschmuck = [];
    var korbLieferoption = ["Lieferoption: keine ausgew�hlt", "0"];
    //--------------------Seitenelemente--------------------------------------
    function createElements() {
        //1) Baumschmuck generieren (Checkbox, Titel und Stepper) 
        let baumschmuck = document.getElementById("baumschmuck");
        //Schleife durchsucht Array bis Bedingung erf�llt ist und generiert dann den Inhalt
        for (let i = 0; i < Aufgabe10.bestellung.length; i++) {
            //Bedingung
            if (Aufgabe10.bestellung[i].art == "Baumschmuck") {
                var checkboxBS = document.createElement("input"); //Input-Element in Checkbox Optik erstellen
                //...dann bef�lle die Variable (das Input-Element) wie folgt:
                checkboxBS.type = "checkbox";
                checkboxBS.name = "CheckboxBaumschmuck";
                checkboxBS.value = "check";
                checkboxBS.id = "check" + i;
                baumschmuck.appendChild(checkboxBS); //let baumschmuck ins HTML einf�gen
                var labelBS = document.createElement("label"); //Titel-Element
                //bef�llen
                labelBS.id = "label2" + i;
                labelBS.innerText = Aufgabe10.bestellung[i].bezeichnung;
                baumschmuck.appendChild(labelBS); //Titel ins HTML integrieren
                var stepperBS = document.createElement("input"); //Input-Element in Stepper Optik
                stepperBS.type = "number";
                stepperBS.name = "StepperBaumschmuck" + i;
                stepperBS.value = "1"; //angezeigte Anzahl zu Beginn
                stepperBS.id = "stepperBS" + i;
                stepperBS.min = "0";
                stepperBS.max = "30";
                stepperBS.step = "1"; //Schritte
                baumschmuck.appendChild(stepperBS); //Stepper ins HTML integrieren
            }
        }
        //2) Kerzen generieren (Selectbox)
        let kerzen = document.getElementById("kerzen");
        let selectboxK = document.createElement("select");
        selectboxK.name = "SelectKerzen";
        selectboxK.id = "selectKerzen";
        kerzen.appendChild(selectboxK);
        //wenn Bedingung erf�llt, dann kreiere Select Box
        for (let i = 0; i < Aufgabe10.bestellung.length; i++) {
            if (Aufgabe10.bestellung[i].art == "Kerzen") {
                var optionK = document.createElement("option");
                optionK.innerText = Aufgabe10.bestellung[i].bezeichnung;
                optionK.id = "optionK" + i;
                selectboxK.appendChild(optionK);
            }
        }
        //3) Baumart generieren (Selectbox)
        let baumart = document.getElementById("baumart");
        let selectboxBA = document.createElement("select");
        selectboxBA.name = "SelectBaumart";
        selectboxBA.id = "selectBaumart";
        baumart.appendChild(selectboxBA);
        for (let i = 0; i < Aufgabe10.bestellung.length; i++) {
            if (Aufgabe10.bestellung[i].art == "Baumart") {
                var optionBA = document.createElement("option");
                optionBA.innerText = Aufgabe10.bestellung[i].bezeichnung;
                optionBA.id = "optionBA" + i;
                selectboxBA.appendChild(optionBA);
            }
        }
        //4) Baumhalterung generieren (Radiobutton Group)
        let halterung = document.getElementById("baumhalterung");
        for (let i = 0; i < Aufgabe10.bestellung.length; i++) {
            if (Aufgabe10.bestellung[i].art == "Baumhalterung") {
                var radiobuttonH = document.createElement("input");
                radiobuttonH.type = "radio";
                radiobuttonH.name = "radioGroupHalterung";
                radiobuttonH.value = "radio" + i;
                radiobuttonH.id = "radioH" + i;
                halterung.appendChild(radiobuttonH);
                var labelH = document.createElement("label");
                labelH.id = "labelH" + i;
                labelH.innerText = Aufgabe10.bestellung[i].bezeichnung;
                halterung.appendChild(labelH);
            }
        }
        //5) Lieferoptionen generieren (Radiobutton Group) 
        let lieferoptionen = document.getElementById("lieferoptionen");
        for (let i = 0; i < Aufgabe10.bestellung.length; i++) {
            if (Aufgabe10.bestellung[i].art == "Lieferung") {
                var radiobuttonL = document.createElement("input");
                radiobuttonL.type = "radio";
                radiobuttonL.name = "radioGroupLieferoptionen";
                radiobuttonL.value = "radio" + i;
                radiobuttonL.id = "radioL" + i;
                lieferoptionen.appendChild(radiobuttonL);
                var labelL = document.createElement("label");
                labelL.id = "labelL" + i;
                labelL.innerText = Aufgabe10.bestellung[i].bezeichnung;
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
        pruefen.name = "Pruefbutton";
        pruefen.type = "button";
        pruefen.innerText = "Bestellung pruefen";
        pruefen.addEventListener("mousedown", clickButton); //Bei click-Event soll function clickButton ausgef�hrt werden
        button.appendChild(pruefen);
    }
    //-------------------Warenkorb-----------------------------------------------
    //8) Warenkorb mit Zusammenfassung der Bestellung und Anzeige des Gesamtpreises 
    function warenkorb(_event) {
        let target = _event.target;
        let stepper = [];
        let checkBoxen = [];
        let gesamtpreis = 0;
        //Schleife generiert Warenkorbinhalt
        for (let i = 0; i < Aufgabe10.bestellung.length; i++) {
            if (Aufgabe10.bestellung[i].art == "Baumschmuck") {
                stepper[i] = document.getElementById("stepperBS" + i);
                checkBoxen[i] = document.getElementById("check" + i);
            }
            //Baumart:
            if (target.value == Aufgabe10.bestellung[i].bezeichnung && target.id == "selectBaumart") {
                korbBaumart[0] = Aufgabe10.bestellung[i].bezeichnung; //[0] erste Array Angabe
                korbBaumart[1] = "" + Aufgabe10.bestellung[i].preis; //[1] zweite Array Angabe
            }
            //Baumhalterung:
            if (target.id == "radioH" + i) {
                korbBaumhalterung[0] = Aufgabe10.bestellung[i].bezeichnung;
                korbBaumhalterung[1] = "" + Aufgabe10.bestellung[i].preis;
            }
            //Lieferoption:
            if (target.id == "radioL" + i) {
                korbLieferoption[0] = Aufgabe10.bestellung[i].bezeichnung;
                korbLieferoption[1] = "" + Aufgabe10.bestellung[i].preis;
            }
            //Beleuchtung:
            if (target.value == Aufgabe10.bestellung[i].bezeichnung && target.id == "selectKerzen") {
                korbKerzen[0] = Aufgabe10.bestellung[i].bezeichnung;
                korbKerzen[1] = "" + Aufgabe10.bestellung[i].preis;
            }
            if (target.id == "check" + i || target.id == "stepperBS" + i) {
                korbBaumschmuck[i] = [Aufgabe10.bestellung[i].bezeichnung, "" + (Aufgabe10.bestellung[i].preis * parseInt(stepper[i].value))]; //parseInt wandelt string in ganze Zahl um
            }
        }
        //Warenkorb Optik erzeugen 
        let korb = document.getElementById("zusammenfassung");
        //das zusammenfassung div wird gestylt:
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "orange";
        //Text im Warenkorb
        //zuerst Baumart, Baumhalterung, Kerzen und Lieferoption:
        korb.innerHTML = "<div>Warenkorb</div><hr>";
        korb.innerHTML += "" + korbBaumart[0] + " " + korbBaumart[1] + "� <br>";
        korb.innerHTML += "Halterung: " + korbBaumhalterung[0] + " " + korbBaumhalterung[1] + "� <br>";
        korb.innerHTML += "" + korbKerzen[0] + " " + korbKerzen[1] + "� <br>";
        korb.innerHTML += " " + korbLieferoption[0] + " " + korbLieferoption[1] + "� <br>";
        //Berechnung      //parseFloat wandelt string in Kommazahl um
        gesamtpreis = parseFloat(korbBaumart[1]) + parseFloat(korbKerzen[1]) + parseFloat(korbBaumhalterung[1]) + parseFloat(korbLieferoption[1]); //gesamtpreis Berechnung dieser vier Artikel
        for (let i = 0; i < stepper.length; i++) {
            if (checkBoxen[i] != null && checkBoxen[i].checked == true) {
                gesamtpreis += parseFloat(korbBaumschmuck[i][1]); //...rechne bisherigen gesamtpreis + Preis des Checkbox Artikels zusammen
                korb.innerHTML += "" + korbBaumschmuck[i][0] + " " + korbBaumschmuck[i][1] + " � <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "�"; //Math.round rundet Ergebnis auf ganze Zahl
    }
    //------------------Button------------------------------------------------------
    //Bestellung pr�fen durch Klick auf Button: Info �ber fehlende o. invalide Daten
    function clickButton(_event) {
        var feedback = document.createElement("div"); //
        feedback.style.paddingBottom = "3em";
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
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Weihnachtsbaumkonfigurator.js.map