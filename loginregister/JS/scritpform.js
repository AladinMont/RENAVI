var divdextra = document.querySelector(".dextra");
var parentsol = document.getElementById('parentsol');
var cargosol = document.getElementById('cargosol');
var dependenciasol = document.getElementById('dependenciasol');

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
