function cambiarCopas() {

    let valor = document.getElementById("selectCopas");
    valor = (valor.options[valor.selectedIndex].value);
    let copa1;
    let copa2;
    copa1 = document.getElementById('copa1');
    copa2 = document.getElementById('copa2');

    if (valor == 1) {
        copa2.setAttribute("hidden", true);
        copa1.removeAttribute("hidden");
    } else {

        copa1.setAttribute("hidden", true);
        copa2.removeAttribute("hidden");

    }
}