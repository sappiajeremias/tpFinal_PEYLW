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


    if (verificar()) {
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
}


function cambiarANocheIN() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_index");
    foot = foot.classList;

    body.remove("body_light");
    body.add("body_night");

    nav.remove("nav_light");
    nav.add("nav_night");

    foot.remove("footer_light");
    foot.add("footer_night");
}

function cambiarADiaIN() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_index");
    foot = foot.classList;

    body.remove("body_night");
    body.add("body_light");

    nav.remove("nav_night");
    nav.add("nav_light");

    foot.remove("footer_night");
    foot.add("footer_light");

}

function cambiarANocheEQ() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_eq");
    foot = foot.classList;

    body.remove("body_light");
    body.add("body_night");

    nav.remove("nav_light");
    nav.add("nav_night");

    foot.remove("footer_light_equipo");
    foot.add("footer_night_equipo");
}

function cambiarADiaEQ() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_eq");
    foot = foot.classList;

    body.remove("body_night");
    body.add("body_light");

    nav.remove("nav_night");
    nav.add("nav_light");

    foot.remove("footer_light_equipo");
    foot.add("footer_light_equipo");

}

function cambiarANochePO() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_pos");
    foot = foot.classList;

    body.remove("body_light");
    body.add("body_night");

    nav.remove("nav_light");
    nav.add("nav_night");

    foot.remove("footer_light_pos");
    foot.add("footer_night_pos");
}

function cambiarADiaPO() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_pos");
    foot = foot.classList;

    body.remove("body_night");
    body.add("body_light");

    nav.remove("nav_night");
    nav.add("nav_light");

    foot.remove("footer_night_pos");
    foot.add("footer_light_pos");

}

function cambiarANochePE() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_perfil");
    foot = foot.classList;

    body.remove("body_light");
    body.add("body_night");

    nav.remove("nav_light");
    nav.add("nav_night");

    foot.remove("footer_light_perfil");
    foot.add("footer_night_perfil");
}

function cambiarADiaPE() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_perfil");
    foot = foot.classList;

    body.remove("body_night");
    body.add("body_light");

    nav.remove("nav_night");
    nav.add("nav_light");

    foot.remove("footer_night_perfil");
    foot.add("footer_light_perfil");

}

function cambiarANocheNOT() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_not1");
    foot = foot.classList;

    body.remove("body_light");
    body.add("body_night");

    nav.remove("nav_light");
    nav.add("nav_night");

    foot.remove("footer_light_noticia");
    foot.add("footer_night_noticia");
}

function cambiarADiaNOT() {
    let body = document.getElementById("top");
    body = body.classList;
    let nav = document.getElementById("nav");
    nav = nav.classList;
    let foot = document.getElementById("foot_not1");
    foot = foot.classList;

    body.remove("body_night");
    body.add("body_light");

    nav.remove("nav_night");
    nav.add("nav_light");

    foot.remove("footer_night_noticia");
    foot.add("footer_light_noticia");

}

function verificar() {
    let jugador;

    jugador = document.getElementsByName("jugador");

    if (verificarNombre() && verificarMail() && verificarSexo() && verificarProvincia() && jugador != null && verificarFecha()) {
        return true;
    } else {
        return false;
    }
}

function verificarFecha() {
    let año_act = new Date().getFullYear();
    let fecha = document.getElementById("fecha_U").value;
    let nacimiento = parseInt(String(fecha).substring(0, 4));

    if ((año_act - nacimiento) >= 18) {
        return true;
    } else {
        document.getElementById("fecha_U").setAttribute("style", "border: 1px solid red");
        alert("La fecha ingresada es incorrecta. ");
        return false;
    }
}

function verificarNombre() {
    let nombre = document.getElementById("nombre_U").value;
    if (nombre == "") {
        alert("El nombre ingresado contiene un error.");
        document.getElementById("nombre_U").setAttribute("style", "border: 1px solid red");
        return false;
    } else {
        return true;
    }
}

function verificarMail() {
    let mail = document.getElementById("mail_U").value;
    if (mail == "") {
        alert("El mail ingresado contiene un error.");
        document.getElementById("mail_U").setAttribute("style", "border: 1px solid red");
        return false;
    } else {
        return true;
    }
}

function verificarSexo() {
    if (document.getElementsByName("sexo")[0].checked || document.getElementsByName("sexo")[1].checked || document.getElementsByName("sexo")[2].checked) {
        return true;
    } else {
        alert("El sexo ingresado contiene un error.");
        document.getElementById("sexo1").setAttribute("style", "color: red");
        document.getElementById("sexo2").setAttribute("style", "color: red");
        document.getElementById("sexo3").setAttribute("style", "color: red");
        return false;
    }
}

function verificarProvincia() {
    let provincia = document.getElementById("select_provincias").value;
    if (provincia == 0) {
        alert("La provincia ingresada contiene un error.");
        document.getElementById("select_provincias").setAttribute("style", "border: 1px solid red");
        return false;
    } else {
        return true;
    }
}