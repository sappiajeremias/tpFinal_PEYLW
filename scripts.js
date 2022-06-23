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


function reiniciar() {
    window.location.reload();
}


function mostrarPerfil() {
    //Variables a las que tomamos su value
    let nombre, mail, fecha, sexo, provincia, jugador, formulario, perfil;


    formulario = document.getElementById("form_perfil");
    perfil = document.getElementById("info_perfil");
    nombre = document.getElementById("nombre_U").value;
    mail = document.getElementById("mail_U").value;
    fecha = document.getElementById("fecha_U").value;
    sexo = document.getElementsByName("sexo");
    provincia = document.getElementById("select_provincias").value;
    jugador = document.getElementsByName("jugador");

    if (sexo[0].checked) {
        sexo = "Hombre";
    } else if (sexo[1].checked) {
        sexo = "Mujer";
    } else {
        sexo = "Otro";
    }

    if (jugador[0].checked) {
        jugador = "SI";
    } else {
        jugador = "NO";
    }

    formulario.setAttribute("hidden", true);
    perfil.removeAttribute("hidden");

    document.getElementById("nombre_P").innerHTML = document.getElementById("nombre_P").innerHTML + nombre;
    document.getElementById("mail_P").innerHTML = document.getElementById("mail_P").innerHTML + mail;
    document.getElementById("fecha_P").innerHTML = document.getElementById("fecha_P").innerHTML + fecha;
    document.getElementById("sexo_P").innerHTML = document.getElementById("sexo_P").innerHTML + sexo;
    document.getElementById("provincia_P").innerHTML = document.getElementById("provincia_P").innerHTML + provincia;
    document.getElementById("jugador_P").innerHTML = document.getElementById("jugador_P").innerHTML + jugador;
}