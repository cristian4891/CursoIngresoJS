function Mostrar()
{

	var numero=prompt("Ingrese un numero");
	var contador;
	var divisor;
	var contadordivisores=0;

	for (contador=0;contador<numero;contador++)
		{
			if (numero%contador==0)
			 	{
			 		divisor=contador;
			 		contadordivisores++;
			 		document.write(divisor+" es divisor de "+numero+"<br>");
			 	}
		}	 	
				
	document.write("La cantidad de divisores es de "+contadordivisores+"<br>");




}//FIN DE LA FUNCIÓN