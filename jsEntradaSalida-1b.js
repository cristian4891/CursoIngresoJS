//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
//Recuperatorio


// EJERCICIO 7
/*{
	var edad;
	var respuesta="si";
	var contador=0;
	var promedio;
	var sumaedad=0;
	var contadorvarones=0;
	var edadmasbaja;

	while (respuesta=="si")
	{
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		if (edad<0||edad>100)
		 	{
		 		edad=prompt("Error, ingrese una edad desde 0 a 100");
		 		edad=parseInt(edad);
		 	}

		sexo=prompt("Ingrese sexo, f o m");
		if (sexo!="f"&&sexo!="m")
		 	{
		 	    sexo=prompt("Error, ingrese sexo f o m");
		 	}
		 	   
		contador++;
		sumaedad=edad+sumaedad;
		if(edad>20&&sexo=="m")
		 	{
		 	    contadorvarones++;  
			}
		if 	(contador==1)
			{
				edadmasbaja=edad;
			}	
		if 	(contador>1)
		 	{ 	if(edad<edadmasbaja)
		 	     	{
		 	     		edadmasbaja=edad;  	
		 	     	}
		 	}

		 	     	
		 	
		respuesta=prompt("Para continuar ingrese si"); 	 	

	}

	promedio=sumaedad/contador;
	document.write("El promedio es: "+promedio+"<br>");
	document.write("La edad mas baja es: "+edadmasbaja+"<br>");
	document.write("La cantidad de varones mayores a 20 es: "+contadorvarones+"<br>");

}*/
























//Ejercicio 6

/*{
	var peso;
	var contador=0;
	var pesominimo;
	var pesomaximo;

	while(contador<3)
	{
		peso=prompt("Ingrese el peso en kilos");
		peso=parseInt(peso);

		if(peso<0)
		 	{
		 		peso=prompt("Error, ingrese nuevamente el peso");
		 	}
		else
			{   contador++;
				if (contador==1)
					{
						pesomaximo=peso;
						pesominimo=peso;
					}
				if (contador>1)
				 	{	if (peso>pesomaximo)
				 			{
				 				pesomaximo=peso;
				 			}
				 		if (peso<pesominimo)
				 			{
				 				pesominimo=peso;
				 			}	 

				 	}	
			} 	
	}
	document.write("El peso maximo es de: "+pesomaximo+" y el peso minimo es de: "+pesominimo);

}*/



//Parcial
//Ejercicio 4
/*{
	var numerouno;
	var numerodos;
	var multiplicacion;
	var resta;
	var suma;
	numerouno=prompt("Ingrese un numero");
	numerouno=parseInt(numerouno);
	numerodos=prompt("Ingrese otro numero");
	numerodos=parseInt(numerodos);

	if (numerouno==numerodos)
		 {
		 	multiplicacion=numerouno*numerodos;
		 	document.write("La multiplicacion es: "+multiplicacion+"<br>");
		 	console.log("La multiplicacion es: " +multiplicacion);
		 }
	else 	 
		{	if (numerouno>numerodos)
	 			{
	 				resta=numerouno-numerodos;
	 				document.write("La resta es: "+resta+"<br>"); 
	 			}
			else
	    		{
	    			suma=numerouno+numerodos;
	    			document.write("La suma es: "+suma+"<br>");
	    		}
	    }		     		  	 
	   		  	 
}*/



//EJERCICIO 5
/*{
	var diadesemana;
	diadesemana=prompt("Ingrese un dia de la semana");

	switch (diadesemana)
	{
		case "sabado":
		case "domingo":
		alert("Es fin de semana");
		break;
        default:
        alert("A trabajar");
	}

}*/






//EJERCICIO 6 
/*{
	var importeventas;
	var contador=0;
	var importeventasmaximo;
	var importeventasminimo;

	while (contador<5)

	{   
		contador++;
		importeventas=prompt("Ingrese un importe","Cero");
		importeventas=parseInt(importeventas);

		if (contador==1) 
		{
			importeventasminimo=importeventas;
			importeventasmaximo=importeventas;
		}
		if (contador>1)

		{	if (importeventas>importeventasmaximo)
			{
				importeventasmaximo=importeventas;
			}
			if (importeventas<importeventasminimo)
			{
				importeventasminimo=importeventas;
			}
		}

	}	

	document.write("El importe de ventas minimo fue "+importeventasminimo+"$"+"<br>");
	document.write("El importe de ventas maximo fue "+importeventasmaximo+"$"+"<br>");			
}*/

//EJERCICIO 7

/*{
	var notas;
	var sexo;
	var contador=0;
	var sumanotas;
	var promedionotastotales;
	var notamasbaja;
	var cantidadvarones=0;

	while (contador<4)
	{
		
		notas=prompt("Ingrese nota entre 0 y 10");
		notas=parseInt(notas);
	    if (notas<0||notas>10)
			{
			  	alert("Dato incorrecto, reingrese una nota entre 0 y 10");
			}
		else
			{   contador++;
				sumanotas=notas;
				sumanotas=notas+sumanotas;
  			    sexo=prompt("Ingrese sexo, f o m segun corresponda");
				if (sexo!="f"&&sexo!="m")
		 			{
		 				alert("Dato incorrecto, reingrese f o m segun corresponda");
		 			}
        		else
					{	

						if (sexo=="m"&&notas>=6)
		    				{
		    					cantidadvarones++;
		    				}
		    			if (contador==1)
		    				{
		    					notamasbaja=notas;
		    				}

						if (contador>1)
							{	if (notas<notamasbaja)
			    					{
			    						notamasbaja=notas;
			    					}

								} 

		    		}
			}	


   

	}  

    promedionotastotales=sumanotas/contador;
    alert("El promedio total de notas es de "+promedionotastotales+", la nota mas baja es de "+notamasbaja+" y la cantidad de varones con nota mayor a 6 es de "+cantidadvarones);


}*/







// EJERCICIO 8
/*{ 

	var numero;
	var respuesta="si";
	var contador=0;
	var acumulador=0;
	var contadornumerospares=0;
	var numeromaximo;
	var numerominimo;

	while(respuesta=="si")
	{   

		numero=prompt("Ingrese un numero mayor a cero");
		numero=parseInt(numero); 

		if (numero<=0) 
		 	{
				/*alert("Numero incorrecto, ingrese un numero mayor a cero");*/
/*				respuesta=prompt("Numero incorrecto, ingrese si para continuar");
		 	}
		else{
				if (numero>0)
		 			{
            			contador++;       
            			acumulador=acumulador+numero;
		 			}

				if (numero%2==0)
		 			{
		 				contadornumerospares++;
		 			}

				if (contador==1)
		 			{
		 				numerominimo=numero;
		 				numeromaximo=numero;
		 			}

				if (contador>1)
					{ 	if (numero>numeromaximo)
		    				{
							    numeromaximo=numero;
							}
          				if (numero<numerominimo)
          					{
          						numerominimo=numero;
          					}
					} 
			} 

		respuesta=prompt("Ingrese si para continuar"); 
          	
    }

	promedio=acumulador/contador;
    document.write("La cantidad de numeros pares es "+contadornumerospares+"<br>");
    document.write("La suma de todos los numeros es de "+acumulador+"<br>");
    document.write("El promedio total es de "+promedio+"<br>");
    document.write("El numero minimo es "+numerominimo+" y el numero maximo es "+numeromaximo+"<br>");*/

	
/*}*/

