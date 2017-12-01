namespace StudiVZ {
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    //saveData gibt Meldung zurück, ob Speicherung erfolgreich war oder nicht (string)
    function saveData(_input: string): string {
        return "Hier fehlt noch der richtige Code...";
    }
    //queryData nimmt Martikelnummer entgegen und liefert Datensatz aus Studentenarray als String zurück oder Fehlermeldung
    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
    }
}