var dinerotemp = 0;
let arraycuadro = [];


    

/************************************************/
/************************************************/

const popupButton = document.getElementById("bottom-right-button");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");

popupButton.addEventListener("click", function () {
    popup.style.display = "block";
});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
});

setTimeout(function () {
    Toastify({
        text: "Compra dolar crypto ahora!",
        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        destination: "https://binance.com/",
        style: {
            background: "linear-gradient(to right, #049fff, #c9ff04)",
            font: 1,
        },
      }).showToast();
}, 20000); 


closeButton.addEventListener("click", function () {
    popup.style.display = "none";
});

fetch('https://api.bluelytics.com.ar/v2/latest')
  .then(response => response.json())
  .then(data => {
    const latestDBlue = data.blue.value_sell;
    const latestEBlue = data.blue_euro.value_sell;
    const p = document.getElementById("resultado");
    p.innerHTML = `El valor del dólar blue es: ${latestDBlue} ARS <br> El valor del euro blue es: ${latestEBlue} ARS`;
  })
  .catch(error => console.error(error));



/************************************************/
/************************************************/



function tomarsalario() {
    var dinero = document.getElementById('ingreso').value;

    let dinerojson = { dinero };
    sessionStorage.setItem("dinerojson", JSON.stringify(dinerojson));

    let text = "";

    if (dinero < 80000) {
        text += "Status social: Sos pobre 😞"
    } else {
        if ((dinero >= 80000) & (dinero <= 130000)) {
            text += "Status social: Sos medio pobre 😦"
        } else {
            if ((dinero > 130000) & (dinero <= 250000)) {
                text += "Status social: Casi cheto 😏🤑"
            } else {
                text += "Status social: Politico millo 😈🤑"
            }
        }
    }

    document.getElementById("clasesocial").innerHTML = text;
    return dinero;
}

function prueba() {
    tomarsalario();
    let dinerojson = JSON.parse(sessionStorage.getItem("dinerojson"));
    dinerotemp = dinerojson.dinero;

    /* prueba de si toma correctamente el valor */
    /*    alert(dinerotemp);   */



    if (dinero = !0) {
        let text = "";
        let text2 = "";
        let text3 = "";
        let iniciotext = "";
        let iniciotext2 = "";
        let iniciotext3 = "";


        var plazofijo = 0;
        var plazofijocompuesto = 0;
        var tempo = tomarsalario();
        var dolar = 199;
        var dolarcompra = 0;
        var dolarcomprado = 0;
        var sumadolcomp = 0;
        var dolarcomprado2 = 0;

        iniciotext += "<tr> <th> Mes </th> <th> Ganancia </th> </tr>";
        iniciotext2 += "<tr> <th> Mes </th> <th> Depositas </th> <th> Ganancia </th> <th> Reinvirtiendo </th> </tr>";
        iniciotext3 += "<tr> <th> Mes </th> <th> Valor Dolar </th> <th> Dolar Comprado </th>  <th> Suma de lo Comprado </th> <th> Pesos Disp.</th> <th> Dolar tot a Pesos </th> </tr>";


        for (i = 1; i < 11; i++) {
            templazofijo = tempo * 0.2;   /* 20% INVERSION SUELDO */
            plazofijo = (plazofijocompuesto + templazofijo) * 0.06;   /* MONTO DE GANANCIA CON EL 6% DE PLAZO FIJO */
            plazofijocompuesto = (plazofijocompuesto + templazofijo) * 1.06; /* MONTO DE DINERO INVERTIDO MAS EL PLAZO FIJO */
            dolarcompra = (templazofijo / dolar); /* Dolar comprado x mes*/
            dolarcomprado = dolarcomprado + Math.trunc(dolarcompra);  /* Suma de los dolares comprados */
            dolarcomprado2 = dolarcomprado2 + dolarcompra;  /* Suma de los dolares comprados */
            sumdolcomp = dolarcomprado * dolar;



            arraycuadro[i] = [Math.trunc(tempo), Math.trunc(templazofijo), Math.trunc(plazofijo), Math.trunc(plazofijocompuesto), Math.trunc(dolar), Math.trunc(dolarcompra), Math.trunc(dolarcomprado), Math.trunc(sumdolcomp)];



            text += "<tr> <th>" + i + "</th>  <th>" + arraycuadro[i][0] + "</th> </tr>";
            text2 += "<tr> <th>" + i + "</th>  <th>" + arraycuadro[i][1] + "</th>  <th>" + arraycuadro[i][2] + "</th>  <th>" + arraycuadro[i][3] + "</th> </tr>";
            text3 += "<tr> <th>" + i + "</th>  <th>" + arraycuadro[i][4] + "</th>  <th>" + arraycuadro[i][5] + "</th>  <th>" + arraycuadro[i][6] + "</th>  <th>" + arraycuadro[i][1] + "</th> <th>" + arraycuadro[i][7] + "</th> </tr>";


            tempo = tempo * 1.04; /* 4% AUMENTO POR MES */
            dolar = Math.trunc(dolar * 1.06); /* Aumento 6% por mes del valor del dolar*/
        }

        console.log(arraycuadro);


        document.getElementById("iniciotabla").innerHTML = iniciotext;
        document.getElementById("iniciotabla2").innerHTML = iniciotext2;
        document.getElementById("iniciotabla3").innerHTML = iniciotext3;
        document.getElementById("tabla").innerHTML = text;
        document.getElementById("tabla2").innerHTML = text2;
        document.getElementById("tabla3").innerHTML = text3;


    }

}



//  VERSION ANTIGUA


// function pruebxxa() {
//     dinerotemp = tomarsalario();

//     /* prueba de si toma correctamente el valor */
//     /*    alert(dinerotemp);   */



//     if (dinero = !0) {
//         let text = "";
//         let text2 = "";
//         var plazofijo = 0;
//         var plazofijocompuesto = 0;
//         var tempo = tomarsalario();

//         for (i = 1; i < 11; i++) {
//             tempo = tempo * 1.04; /* 4% AUMENTO POR MES */
//             templazofijo = tempo * 0.2;   /* 20% INVERSION SUELDO */
//             plazofijo = (plazofijocompuesto + templazofijo) * 0.06;   /* MONTO DE GANANCIA CON EL 6% DE PLAZO FIJO */
//             plazofijocompuesto = (plazofijocompuesto + templazofijo) * 1.06; /* MONTO DE DINERO INVERTIDO MAS EL PLAZO FIJO */
//             text += "En el mes numero " + i + " ganarias $" + Math.trunc(tempo) + "<br>"
//             text2 += "En el mes numero " + i + " depositarias $" + Math.trunc(templazofijo) + "<br>" + "Y ganarias $" + Math.trunc(plazofijo) + " con el plazo Fijo + la reinversión de lo depositado queda " + Math.trunc(plazofijocompuesto) + "<br>"

//         }

//         document.getElementById("tabla").innerHTML = text;
//         document.getElementById("tabla2").innerHTML = text2;

//     }

// }

