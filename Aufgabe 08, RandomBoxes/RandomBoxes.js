var RandomBoxes;
(function (RandomBoxes) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", keypress);
    function keypress(_event) {
        console.log(_event.keyCode);
    }
    function init() {
        for (let i = 0; i < 100; i++) {
            let h = document.createElement("h2");
            //console.log(h);
            h.innerText = "Hallo, ich bin h2-Element Nr." + i;
            document.body.appendChild(h);
            if (i == 3)
                h.style.color = "red";
        }
    }
})(RandomBoxes || (RandomBoxes = {}));
//# sourceMappingURL=RandomBoxes.js.map