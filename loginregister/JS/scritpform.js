var divdextra = document.querySelector(".dextra");
var parentsol = document.getElementById('parentsol');
var cargosol = document.getElementById('cargosol');
var dependenciasol = document.getElementById('dependenciasol');
var estado = document.getElementById("sivilvic");
var indirecta = document.querySelector(".indirectaform");

function dextraOn() {
    if (document.getElementById('familiar').checked == true) {
        divdextra.style.display = "Block";
        parentsol.style.display = "Block";
        cargosol.style.display = "none";
        dependenciasol.style.display = "none";
    }
    
}
function dextraserv() {
if (document.getElementById('servidor').checked == true) {
        divdextra.style.display = "Block";
        parentsol.style.display = "none";
        cargosol.style.display = "block";
        dependenciasol.style.display = "block";
    }
}
function dextraOff() {
    if (document.getElementById('directa').checked == true) {
        divdextra.style.display = "none";
    }
} 

function otroOn() {
    if (document.getElementById("otro").checked == true){
        estado.disabled = false;
    }
}

function otroCasado() {
    if (document.getElementById("casado").checked == true) {
        estado.disabled = true;
    }
}
function otroSoltero() {
    if (document.getElementById("soltero").checked == true) {
        estado.disabled = true;
    }
}
function indiretaOn(){
    if (document.getElementById("indirecta").checked == true) {
        indirecta.style.display="block";
    }
}
function indirectadirecta() {
    if (document.getElementById("directas").checked == true) {
        indirecta.style.display="none";
    }
}
function indirectapotenccial() {
    if (document.getElementById("potencial").checked == true) {
        indirecta.style.display="none";
    }
}
