var datosPaises;

function poblarDatosPaises() {

    var url = 'https://restcountries.com/v3.1/independent?status=true';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {

            datosPaises = paises;
            mostrarDatosPaisesTabla();
            adicionarPaisesSelect();

        });

}

function mostrarDatosPaisesTabla() {
    var tabla = document.getElementById("tablaPaises");

    for (const pais of datosPaises) {

        var fila = tabla.insertRow(-1);
        var columnaNombre = fila.insertCell(0);
        var columnaCapital = fila.insertCell(1);
        var columnaRegion = fila.insertCell(2);

        columnaNombre.innerHTML = pais.name.common;
        columnaCapital.innerHTML = pais.capital[0];
        columnaRegion.innerHTML = pais.region;

    }
}

function adicionarPaisesSelect() {

    var selectPaises = document.getElementById("selectPaises");

    for (const pais of datosPaises) {
        var option = crearNodoTexto("option", pais.name.common);
        adicionarNodoAContenedor(option, selectPaises);

    }

}

function mostrarPaisSeleccionado() {
    borrarFilasTabla();
    var tabla = document.getElementById("tablaPaises");
    var selectPaises = document.getElementById("selectPaises");
    var paisSeleccionado = selectPaises.value;

    for (const pais of datosPaises) {

        if (pais.name.common == paisSeleccionado) {

            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapital = fila.insertCell(1);
            var columnaRegion = fila.insertCell(2);

            columnaNombre.innerHTML = pais.name.common;
            columnaCapital.innerHTML = pais.capital[0];
            columnaRegion.innerHTML = pais.region;
        }
    }
}


function borrarFilasTabla() {
    var tabla = document.getElementById("tablaPaises");

    for (let i = tabla.rows.length - 1; i > 0; i--) {
        tabla.deleteRow(i);
    }
}