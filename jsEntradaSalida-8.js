/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*var resultado;

    resultado=2 % 10;
	alert(resultado);
	resultado=10 % 2;
	alert(resultado);
	
	ambos dan lo mismo */

	var dividendo; //es el numero que se va a dividir
	var divisor;   //es el numero por el cual se divide
	var resultado;

    /*La maner correcta es la siguiente*/

	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;
    dividendo=parseInt(dividendo);
    divisor=parseInt(divisor);
	resultado=dividendo%divisor;

	/*funciona sin parseInt, el parseInt si o si
	se utiliza en la suma*/ 

	alert("El resto de dividir "+dividendo+" por "+divisor+" es "+resultado);
	

    
}
