/*Un almacén de computadores tiene un plan de descuentos del 15%.
Hacer un programa que determine cuánto debe pagar un cliente si el valor del
computador es de $820.000*/

document.getElementById('OrdenC').style.display="none" /*Ocultar contenedor de orden de compra */

/*Variables*/
let numeroPc;
let valorCompra;
let descuento;
let total;
const valorPc= 820000;

function Calcular(){
    document.getElementById('Venta').style.display="none" /*Ocultar contenedor de orden de compra */
    document.getElementById('OrdenC').style.display="block" /*Mostrar contenedor de orden de compra */

    /*Asignar valor a cantidad de computadores comprados */
    numeroPc= Number(document.getElementById('Compra').value);

    //invocar función
    valorCompra =  valorCom(numeroPc);
    descuento = Descuento (valorCompra);

    //Imprimir
    document.getElementById('ValorCompra').value= valorCompra;
    document.getElementById('ValorDescuento').value= descuento;
    document.getElementById('Total').value= valorCompra - descuento;
}


// uso de FUNCIÓN ANONIMA
var valorCom= function(numeroPc){
    valorCompra= valorPc * numeroPc;
    alert('El valor de compara es:' + valorCompra)
    return valorCompra;
}

//Uso de funcion 
function Descuento(valorCompra){
    descuento= valorCompra * 0.15;
    alert('El descuento es:' + descuento )
    return descuento; 
}



