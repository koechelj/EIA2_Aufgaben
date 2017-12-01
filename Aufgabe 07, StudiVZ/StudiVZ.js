var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    //saveData gibt Meldung zur�ck, ob Speicherung erfolgreich war oder nicht (string)
    function saveData(_input) {
        return "Hier fehlt noch der richtige Code...";
    }
    //queryData nimmt Martikelnummer entgegen und liefert Datensatz aus Studentenarray als String zur�ck oder Fehlermeldung
    function queryData(_matrikel) {
        return "Hier fehlt noch der richtige Code...";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=StudiVZ.js.map