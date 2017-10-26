function Eingabefeld() {
    let Eingabe = prompt("Geben Sie bitte Ihren Namen ein:", "");
    //wenn Eingabe ungleich null bzw. etwas eingegeben wurde, dann folgendes ausgeben 
    if (Eingabe != null) {
        document.getElementById("Hallo").innerHTML = "Hallo " + Eingabe + ", schoen von dir zu hoeren!";
    }
}
//# sourceMappingURL=Miniseite.js.map