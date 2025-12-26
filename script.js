const hodinyElement = document.querySelector('.clock');
if (hodinyElement) {

    function hodiny() {
        const ted = new Date()

        let hodina = ted.getHours();
        let minuta = ted.getMinutes();
        let sekunda = ted.getSeconds();

        hodina = (hodina < 10) ? "0" + hodina : hodina;
        minuta = (minuta < 10) ? "0" + minuta : minuta;
        sekunda = (sekunda < 10) ? "0" + sekunda : sekunda;

        let cas = hodina + ":" + minuta + ":" + sekunda

        hodinyElement.textContent = cas;
    }
    hodiny();
    setInterval(hodiny, 1000);
}

const quizButton = document.querySelector('#submit-quiz')
if (quizButton) {
    quizButton.addEventListener('click', vyhodnotitQuiz);
}

function vyhodnotitQuiz() {
    let o1 = document.querySelector('input[name="q1"]').value.trim().toLowerCase();
    // o2El atd používám jako schránku s tím, že se hledá zaškrtnuté kolečko (:checked). Pokud uživatel nic nezaškrtne, tak pc hlásí Null
    // o2 je jako čtení dopisu ze schránky. Kdyý budu chtít číst "Null" - "Nic", tak mi script spadne -> Použití ?
    // ? = Zkrácená podmínka -> je o#El skutečný? ANO -> čtu .value; NE -> dostavám prázdný text ""
    let o2El = document.querySelector('input[name="q2"]:checked'); // El používám jako označení Element
    let o2 = o2El ? o2El.value : "";
    let o3El = document.querySelector('input[name="q3"]:checked'); // El používám jako označení Element
    let o3 = o3El ? o3El.value : "";
    let o4El = document.querySelector('input[name="q4"]:checked'); // El používám jako označení Element
    let o4 = o4El ? o4El.value : "";
    let o5 = document.querySelector('input[name="q5"]').value.trim().toLowerCase();

    let skore = 0;
    if (o1 === "ram") {
        skore++;
    }
    if (o2 === "b") {
        skore++;
    }
    if (o3 === "a") {
        skore++;
    }
    if (o4 === "b") {
        skore++;
    }
    if (o5 === "tma") {
        skore++;
    }
    console.log("Počet bodů: " + skore);
}
