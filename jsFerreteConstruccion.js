/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{



}
function Circulo () 

{
var radio;
var cantidad;
radio=document.getElementById('Radio').value;
radio=parseInt(radio);
cantidad=(radio)*2*3.14;
alert("La cantidad de alambre que se necesita es de: "+cantidad+"m")

}

function Materiales () 
{ 

var largo;
var ancho;
var cemento;
var cal;
largo=document.getElementById('Largo').value;
ancho=document.getElementById('Ancho').value;
largo=parseInt(largo);
ancho=parseInt(ancho);
cemento=(largo*ancho)*2;
cal=(largo*ancho)*3;
alert("La cantidad de cemento que se necesita es "+cemento+" y la cantidad de cal es de "+cal)

}