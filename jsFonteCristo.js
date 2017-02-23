/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () //cambiar nombre de la funcion
{
	var numero=document.getElementById('numero').value;
	var contador=numero;
	var contadornumerospares=0;
	var contadornumerosimpares=0;

	while(contador>0)
	{
		contador--;
		if(contador%2==0&&contador!=0)
		{
			contadornumerospares++;
		}

		if(contador%2!=0&&contador!=0)
		{
			contadornumerosimpares++;
		}
	}
	document.write("La cantidad de numeros impares es de "+contadornumerosimpares+"<br>");
	document.write("La cantidad de numeros pares es de "+contadornumerospares+"<br>");

}
function NumerosDivisibles ()
{
	var numero;
	var contador=0;
	var contadornumerosdivisibles=0;

	while(contador<100)
	{
		numero=document.getElementById('numero').value;
		contador++;
		if(contador%numero==0)
		{
			contadornumerosdivisibles++;
		}
	}	

/*	}

	if(contador<=numero&&numero%contador==0)

	  	{if (contadornumerosdivisibles==2&&numero!=1)
	  	 	{
	  	 		document.write("La cantidad de numeros divisibles por "+numero+" es de "+contadornumerosdivisibles);
	  	 	}

		}
    */

}

function VerificarPrimo ()
{
	var numero=document.getElementById('numero').value;
	var numero=parseInt(numero);
    var numeroprimo;
    var contador=numero+1;
    var contadornumerodivisible=0;
    var numerodivisible;
	
    while(contador>=1)
    {
    	contador--;
    	if (numero%contador==0&&numero!=1)
    	   {
    	   	contadornumerodivisible++;
    	   	numerodivisible=numero/contador;
    	   	/*document.write(numerodivisible+"<br>");*/
    	   }
    }
    if(contadornumerodivisible==2)
    	{
    		alert("Es numero primo");
    	}
    else
    	{
    		alert("No es numero primo");
    	}	
    
}


	


/*function NumerosPares()

{
	
	var numero=document.getElementById('numero').value;
	var contador=numero;
	var contadornumerospares=0;
	var contadornumerosimpares=0;

	while(contador>0)
	{
		contador--;
		if(contador%2==0&&contador!=0)
		{
			contadornumerospares++;
		}

		if(contador%2!=0&&contador!=0)
		{
			contadornumerosimpares++;
		}
	}
	document.write("La cantidad de numeros impares es de "+contadornumerosimpares+"<br>");
	document.write("La cantidad de numeros pares es de "+contadornumerospares+"<br>");

}*/

