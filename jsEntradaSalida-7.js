/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	suma=parseInt(numeroUno)+parseInt(numeroDos);
	alert("La suma es: " + suma);
}

/*Colocar distintos nombres en la variable para cada operacion*/

function restar()
{
	var numeroTres;
	var numeroCuatro;
	var resta;
	numeroTres=document.getElementById('numeroUno').value;
	numeroCuatro=document.getElementById('numeroDos').value;
	resta=parseInt(numeroTres)-parseInt(numeroCuatro);
	alert("La resta es: " + resta);
}


function multiplicar()
{ 
	var numeroCinco;
	var numeroSeis;
	var multiplicacion;
	numeroCinco=document.getElementById('numeroUno').value;
	numeroSeis=document.getElementById('numeroDos').value;
	multiplicacion=parseInt(numeroCinco)*parseInt(numeroSeis);
	alert("El resultado de la multiplicación es: " + multiplicacion);
	
}

function dividir()
{
	var num1;
	var num2;
	var div;
	num1=document.getElementById('numeroUno').value;
	num2=document.getElementById('numeroDos').value;
	div=parseInt(num1)/parseInt(num2);
	alert("El resultado de la división es: " + div);
}

