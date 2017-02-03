/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var suma;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;
	suma=parseInt(preciouno)+parseInt(preciodos)+parseInt(preciotres);

	alert(suma);

}
function Promedio () 
{
	var precioA;
	var precioB;
	var precioC;
	var promedio;

	precioA=document.getElementById('PrecioUno').value;
	precioB=document.getElementById('PrecioDos').value;
	precioC=document.getElementById('PrecioTres').value;
    promedio=(parseInt(precioA)+parseInt(precioB)+parseInt(precioC))/3;

    alert(promedio);
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var precioFinal;

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;
	suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
    precioFinal=(((parseInt(precio1)+parseInt(precio2)+parseInt(precio3))*21)/100)+suma;
   
    alert("El precio final es: "+ precioFinal + "$");
}

/*(parseInt(precio1)+parseInt(precio2)+parseInt(precio3)*/