namespace StudiVZ {
    // hier ist noch die richtige Datenstruktur festzulegen
    interface StudentData {
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: string;
        Geschlecht: boolean;
        Kommentar: string;
    }
    var students: StudentData[] = []; //Die Variable ist vom Typ des Interfaces
    var stop: boolean = false;

    while (!stop) {  //solange stop Variable false ist, wird der Codeblock ausgeführt
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":  //wenn n oder N eingegeben wird, wird prompt ausgegeben
            case "N":
                //prompt ruft Eingabefeld auf für die function saveData
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":  //wenn a oder A eingegeben wird, wird Matrikel Variable erstellt
            case "A":
                //anschließend alert Box mit der function queryData(matrikel):
                var Matrikelnummer: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(Matrikelnummer));
                break;
            case "s":  //wenn s oder S eingegeben wird, ist stop Variable true und die while Schleife stoppt
            case "S":
                stop = true;
        }
    }
    //saveData gibt nach der Eingabe Meldung zurück, ob Speicherung erfolgreich war oder nicht 
    function saveData(_input: string): string {  //_input ist Parameter für die function
        //Variable um Daten in Array zu speichern. Input wird durch Kommas separiert 
        var studentenArray: any = _input.split(","); //split unterteilt den Input (strings im Array) in substrings
        studentenArray[0] = parseInt(studentenArray[0]); //Substring der Matrikelnummer wird mithilfe von parseInt in eine Zahl umgewandelt, die weiterverarbeitet werden kann
        studentenArray[3] = parseInt(studentenArray[3]);    //Substring des Alters wird ebenfalls in eine Zahl umgewandelt
        if (studentenArray[4] == "weiblich") { studentenArray[4] = true; } //Das Geschlecht steht an 5.Stelle im Daten Array 
        if (studentenArray[4] == "maennlich") { studentenArray[4] = false; }
        //isNaN prüft, ob die Eingabe keine Zahl ist (is NotaNumber)
        if (isNaN(studentenArray[0]) || isNaN(studentenArray[3]) || typeof (studentenArray[4]) != "boolean") {
            //wenn die Eingaben im studentenArray nicht den Datentypen der var students (vom Typ des Interfaces) entspricht, dann gebe folgendes aus:
            return "Ihre Eingabe stimmt nicht. Versuchen Sie es bitte erneut.";
        }
        else {
            students[studentenArray[0]] = studentenArray;
            //wenn die Eingaben im studentenArray den Datentypen der var students (vom Typ des Interfaces) entspricht, dann gebe folgendes aus:
            return "Super, Ihre Daten wurden gespeichert.";
        }
    }



    //queryData nimmt Martikelnummer entgegen und liefert Datensatz aus studentenArray als String zurück oder Fehlermeldung
    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {  //wenn die Eingabe mit einer gespeicherten Matrikelnummer übereinstimmt, dann gebe folgendes aus:
                let matrikelnummer: string = "Matrikelnummer:" + students[i].Matrikelnummer;
                let name: string = "Name:" + students[i].Name;
                let vorname: string = "Vorname:" + students[i].Vorname;
                let alter: string = "Alter:" + students[i].Alter;
                let geschlecht: string;
                if (students[i].Geschlecht)
                    geschlecht = "Geschlecht: weiblich";
                else
                    geschlecht = "Geschlecht: männlich";
                let kommentar: string = "Kommentar: " + students[i].Kommentar;

                return "Deine Daten: " + "\n" + matrikelnummer + "\n" + name + "\n" + vorname + "\n" + alter + "\n" + geschlecht + "\n" + kommentar;
            }
        }
    }
}