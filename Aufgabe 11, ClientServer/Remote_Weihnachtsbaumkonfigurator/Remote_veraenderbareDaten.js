var Aufgabe11;
(function (Aufgabe11) {
    //Array  
    Aufgabe11.bestellung = [
        //Baumschmuck
        { art: "Baumschmuck", bezeichnung: "blaue Kugeln", preis: 0.50 },
        { art: "Baumschmuck", bezeichnung: "rote Kugeln", preis: 0.50 },
        { art: "Baumschmuck", bezeichnung: "goldene Kugeln", preis: 0.50 },
        { art: "Baumschmuck", bezeichnung: "orangene Kugeln", preis: 0.50 },
        { art: "Baumschmuck", bezeichnung: "silberne Kugeln", preis: 0.50 },
        { art: "Baumschmuck", bezeichnung: "Strohsterne", preis: 0.50 },
        { art: "Baumschmuck", bezeichnung: "kleine Holzsterne", preis: 0.50 },
        { art: "Baumschmuck", bezeichnung: "100 g Lametta silber", preis: 3.00 },
        { art: "Baumschmuck", bezeichnung: "100g Lametta gold", preis: 3.00 },
        //Kerzen
        { art: "Kerzen", bezeichnung: "Lichterkette mit elektrischen Kerzen", preis: 15.00 },
        { art: "Kerzen", bezeichnung: "rote Kerzen mit Halterung", preis: 12.00 },
        //Baumart
        { art: "Baumart", bezeichnung: "Nordmanntanne 1m", preis: 18.00 },
        { art: "Baumart", bezeichnung: "Nordmanntanne 1,50m", preis: 23.00 },
        { art: "Baumart", bezeichnung: "Nordmanntanne 2,00m", preis: 28.00 },
        { art: "Baumart", bezeichnung: "Blaufichte 1,20m", preis: 17.00 },
        { art: "Baumart", bezeichnung: "Blaufichte 1,70m", preis: 30.00 },
        //Baumhalterungen
        { art: "Baumhalterung", bezeichnung: "Halterung grau", preis: 9.00 },
        { art: "Baumhalterung", bezeichnung: "Halterung gruen", preis: 9.00 },
        { art: "Baumhalterung", bezeichnung: "Halterung mit Wasser befuellbar", preis: 12.00 },
        //Lieferoptionen
        { art: "Lieferoption", bezeichnung: "Standardlieferung (in 8 Werktagen)", preis: 5.99 },
        { art: "Lieferoption", bezeichnung: "Expresslieferung (in 3 Werktagen)", preis: 9.99 },
    ];
    //?
    Aufgabe11.baumArt = [];
    Aufgabe11.kerzen = [];
    for (let i = 0; i < Aufgabe11.bestellung.length; i++) {
        if (Aufgabe11.bestellung[i].art == "Baumart") {
            let temp = [Aufgabe11.bestellung[i].bezeichnung, Aufgabe11.bestellung[i].preis];
            Aufgabe11.baumArt.push(temp);
        }
        if (Aufgabe11.bestellung[i].art == "Kerzen") {
            let temp = [Aufgabe11.bestellung[i].bezeichnung, Aufgabe11.bestellung[i].preis];
            Aufgabe11.kerzen.push(temp);
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Remote_veraenderbareDaten.js.map