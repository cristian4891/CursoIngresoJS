function Mostrar()
{

	var contador=0;
	var contadorpositivos=0;
	var contadornegativos=0;
	var cantidadceros=0;
	var sumapositivos=0;
	var sumanegativos=0;
	var contadornumerospares=0;
	var numero;
	var acumulador;
	var promediopositivos;
	var promedionegativos;
	var diferencia;       //declarar contadores y variables 

	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(numero==0)
		{
		cantidadceros++;
		}	

		if(numero>0)
		{
		contadorpositivos++;
		sumapositivos=sumapositivos+numero;
		}

		if(numero<0)
		{
		contadornegativos++;
		sumanegativos=sumanegativos+numero;
		}

		if(numero%2==0)
		{
		contadornumerospares++;
		}

		respuesta=prompt("Teclee 'no' para terminar");	
	
	}

promedionegativos=sumanegativos/contadornegativos;
promediopositivos=sumapositivos/contadorpositivos;
diferencia=sumapositivos-sumanegativos;

document.write("La suma de los positivos es "+sumapositivos+" y la de los negativos "+sumanegativos+"<br>");
document.write("La cantidad de positivos es "+contadorpositivos+", de negativos "+contadornegativos+" y de ceros "+cantidadceros+"<br>");
document.write("La cantidad de numeros pares es "+contadornumerospares+"<br>");
document.write("El promedio de positivos es "+promediopositivos+" y el de negativos es "+promedionegativos+"<br>");
document.write("La diferencia entre positivos y negativos es de "+diferencia+"<br>");


}//FIN DE LA FUNCIÓN