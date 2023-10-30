var datosMonedas;

function poblarDatosMonedas() {

    var url = 'https://restcountries.com/v3.1/independent?status=true';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(monedas => {

            datosMonedas = monedas;
            mostrarDatosMonedas();
            adicionarMonedaSelect();

        });
}

function mostrarDatosMonedas() {
    var tabla = document.getElementById("tablaPaises");


    for (const pais of datosPaises) {

        var currencies = pais.currencies.name;
        
        var keys = Object.keys(currencies);

        for (const key of keys) {
            
            console.log(currencies[key].name)
        }


    }
}

function adicionarMonedaSelect() {

    var selectMonedas = document.getElementById("selectMonedas");

    for (const monedas of datosMonedas) {
        var option = crearNodoTexto("option", pais.currencies.name);
        adicionarNodoAContenedor(option, selectMonedas);
    }
}

function mostrarMonedasSeleccionada(){
    borrarFilasTabla();
    var tabla = document.getElementById("tablaPaises");
    var selectMonedas = document.getElementById("selectMonedas");
    var monedasSeleccionada = selectMonedas.value;

    for (const monedas of datosMonedas) {

        if (pais.correncies.name == monedasSeleccionada) {

            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapital = fila.insertCell(1);
            var columnaRegion = fila.insertCell(2);
            var columnaMoneda = fila.insertCell(3);

            columnaNombre.innerHTML = pais.name.common;
            columnaCapital.innerHTML = pais.capital[0];
            columnaRegion.innerHTML = pais.region;
            columnaMoneda.innerHTML = pais.correncies.name;
        }
    }
}
