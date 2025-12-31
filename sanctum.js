/* =========================================
    ČÁST 1: FUNKCE
   ========================================= */

// Hodiny
const hodinyElement = document.querySelector('.clock');

if (hodinyElement) {

    function hodiny() {
        const nyni = new Date()

        let hodina = nyni.getHours();
        let minuta = nyni.getMinutes();
        let sekunda = nyni.getSeconds();

        hodina = (hodina < 10) ? "0" + hodina : hodina;
        minuta = (minuta < 10) ? "0" + minuta : minuta;
        sekunda = (sekunda < 10) ? "0" + sekunda : sekunda;

        let cas = hodina + ":" + minuta + ":" + sekunda;
        hodinyElement.textContent = cas;
    }
    hodiny();
    setInterval(hodiny, 1000);
}


/* =========================================
    ČÁST 2: PŘÍBĚHY
   ========================================= */