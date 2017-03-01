//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
/*{

	var importe;
	importe=prompt("Ingrese importe");
	importe=parseInt(importe);
	var importefinal;
	importefinal=importe*0.75;
	alert("El importe final con descuento del 25% es de : "+importefinal+"$");
	
}
*/

/*{
	var numerouno;
	var numerodos;
	numerouno=prompt("Ingrese un numero");
	numerouno=parseInt(numerouno);
	numerodos=prompt("Ingrese otro numero");
	numerodos=parseInt(numerodos);
	var suma;
	suma=numerouno+numerodos;

	if(suma<0)
		{
			document.write("La suma es negativa");
		}
	else
		{
			if(suma>0)
				{
					document.write("La suma es positiva");
				}
			else
				{
					document.write("La suma es igual a cero");	
				}	
		}
/*	if(suma==0)
		{
			
		}		
}*/

/*{
	var mes;
	mes=prompt("Ingrese un mes del año");

	switch(mes)
		{
			case "enero":
			alert("Comienza el año");
			break;

			case "diciembre":
			alert("Se vienen las fiestas");
			break;

			default:
			alert("No es Enero ni Diciembre");
			break;
		}
}*/


/*{
	var peso;
	var contador=0;
	var pesomaximo;
	var pesominimo;
	

	
	while(contador<3)
		{  
			peso=prompt("Ingrese su peso");
    		peso=parseInt(peso);
			while(peso<0)
				{
					peso=prompt("Dato incorrecto, el peso debe ser mayor a cero");
					peso=parseInt(peso);
				}
			contador++;	
			if(contador==1)
				{
					pesomaximo=peso;
					pesominimo=peso;
				}
			if(contador>1)
				{
					if(peso>pesomaximo)
						{
							pesomaximo=peso;
						}
					if(peso<pesominimo)
						{
							pesominimo=peso;
						}	
				}		
		}
	alert("El peso maximo fue de: "+pesomaximo+" y el peso minimo fue de: "+pesominimo);


}*/

/*{*//*
	var edad;
	var sexo;
	var contador=0;
	var sumaedad=0;
	var promedioedad;
	var edadmasbaja;
	var cantidadvaronesmayorveinte=0;


	while(contador<4)
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
			while(edad<0||edad>100)
				{
					edad=prompt("Edad incorrecta, ingrese nuevamente");
				}
			sumaedad=edad+sumaedad;	
			sexo=prompt("Ingrese su sexo (f o m)");
			while(sexo!="f"&&sexo!="m")
				{
					sexo=prompt("Sexo incorrecto, ingrese nuevamente (f o m)");
				}
			contador++;
			if(contador==1)
				{
					edadmasbaja=edad;
				}

			if(contador>1)
				{
					if(edad<edadmasbaja)
						{
							edadmasbaja=edad;
						}
				}
			if(sexo=="m"&&edad>19)
				{
					cantidadvaronesmayorveinte++;
				}			

		}
	promedioedad=sumaedad/contador;
	document.write("El promedio de edad es: "+promedioedad+"<br>");	
	document.write("La edad mas baja es de: "+edadmasbaja+"<br>");	
	document.write("La cantidad de varones mayores a 20 es de: "+cantidadvaronesmayorveinte+"<br>");	
}*/


/*{
	var numero;
	var contadornumerospares=0;
	var respuesta="si";
	var contador=0;
	var promedio;
	var sumanumeros=0;
	var numeromaximo;
	var numerominimo;

	while(respuesta=="si")
		{
			numero=prompt("Ingrese un numero positivo");
			numero=parseInt(numero);
			while(numero<0)
				{
					numero=prompt("Numero negativo, ingrese nuevamente un  numero positivo");
				}
			contador++;	
			sumanumeros=numero+sumanumeros;

			if(numero%2==0)
				{
					contadornumerospares++;
				}
			
			if(contador==1)
				{
					numeromaximo=numero;
					numerominimo=numero;
				}

			if(contador>1)
				{
					if(numero>numeromaximo)
						{
							numeromaximo=numero;
						}
					if(numero<numerominimo)
						{
							numerominimo=numero;
						}
				}
			respuesta=prompt("Desea continuar?");
		}


	promedio=sumanumeros/contador;	
	document.write("La cantidad de numeros pares es de: "+contadornumerospares+"<br>");	
	document.write("El promedio de todos los numeros ingresados es de: "+promedio+"<br>");	
	document.write("La suma de todos los numeros es de: "+sumanumeros+"<br>");	
	document.write("El numero minimo es de: "+numerominimo+" y el numero maximo es de: "+numeromaximo+"<br>");	
	
	
}*/

//EJercicios Parcial

//Ejercicio 2 parcial
/*{
	var importe;
	importe=prompt("Ingrese un importe");
	importe=parseInt(importe);
	var importefinal;
	importefinal=importe*1.21
	alert("El importe final es de: "+importefinal);
}*/
//Ejercicio 4
/*{
var numerouno;
var numerodos;
var suma;
var resta;
var multiplicacion;
numerouno=prompt("Ingrese un numero");
numerouno=parseInt(numerouno);
numerodos=prompt("Ingrese otro numero");
numerodos=parseInt(numerodos);

if (numerouno==numerodos)
	{
		multiplicacion=numerouno*numerodos;
		document.write("El resultado de la multiplicacion es: "+multiplicacion+"<br>");
	}
else
	{
		if (numerouno>numerodos)
			{
				resta=numerouno-numerodos;
				document.write("El resultado de la resta es: "+resta+"<br>");

			}
		else
			{
				suma=numerouno+numerodos;
				document.write("El resultado de la suma es: "+suma+"<br>");
			}	
	}	
}
*/
//Ejercicio 5

/*{
	var dia;
	dia=prompt("Ingrese un dia de la semana");

	switch(dia)
		{
			case "sabado":
			case "domingo":
			alert("Es fin de semana!!!");
			break;
			default:
			alert("A trabajar!!!");
		}
}*/

//Ejercicio 6

// {
// 	var importe;
// 	var contador=0;
// 	var dia;
// 	var importemayor;
// 	var importemenor;

// 	while (contador<4)
// 		{
// 			importe=prompt("Ingrese un importe");
// 			while(importe<0)
// 				{
// 					importe=prompt("Ingrese un importe mayor a cero");
// 				}
// 			dia=prompt("Ingrese un dia hábil");
// 			while(dia=="sabado"||dia=="domingo")
// 				{
// 					dia=prompt("Por favor, ingrese un dia habil");
// 				}
// 			contador++;
// 			if(contador==1)
// 				{
// 					importemayor=importe;
// 					importemenor=importe;
// 				}
// 			if(contador>1)
// 				{
// 					if(importe>importemayor)
// 						{
// 							importemayor=importe;
// 						}
// 					if(importe<importemenor)
// 						{
// 							importemenor=importe;
// 						}	
// 				}	   

// 		}
// 		document.write("El mayor importe fue de: "+importemayor+"<br>");
// 		document.write("El menor importe fue de: "+importemenor+"<br>");


// }

//Ejercicio 7
/*{
	var nota;
	var contador=0;
	var sexo;
	var sumanota=0;
	var promedio;
	var notamasbaja;
	var varonesseisomas=0;

	while(contador<4)
		{
			nota=prompt("Ingrese una nota");
			nota=parseInt(nota);
			while(nota<0||nota>10)
				{
					nota=prompt("Ingrese una nota valida (entre 0 y 10)");
				}
			sumanota=nota+sumanota;	
		    sexo=prompt("Ingrese sexo (f o m)");
		    while(sexo!="f"&&sexo!="m")
		   		{
		   			sexo=prompt("Error, ingrese f o m para sexo");	
		   		}
		   	contador++;
		   	if(sexo=="m"&&nota>=6)
		   		{
		   			varonesseisomas++;
		   		}
		   	if(contador==1)
		   		{
		   			notamasbaja=nota;
		   		}		
			   else
				{
					if(contador>1)
						{
							if(nota>notamasbaja)
							{
								notamasbaja=nota;
							}
						}
				}

		}

	promedio=sumanota/4;
	document.write("La cantidad de varones con nota mayor o igual a seis es de: "+varonesseisomas+"<br>");
	document.write("La nota mas baja es de: "+notamasbaja+"<br>");
	document.write("El promedio de notas totales es de: "+promedio+"<br>");

}*/

//Ejercicio 8
/*
{
	var numero;
	var contador=0;
	var respuesta="si";
	var cantidadnumerospares=0;
	var promediototal;
	var sumatotal=0;
	var numeromaximo;
	var numerominimo;

	while(respuesta=="si")
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
			while(numero<0)
				{
					numero=prompt("Ingrese un numero mayor a cero");
				}
			contador++;	
			if(numero%2==0)
				{
					cantidadnumerospares++;
				}
			sumatotal=numero+sumatotal;
			if(contador==1)
				{
					numeromaximo=numero;
					numerominimo=numero;
				}
			if(contador>1)
				{	
					if(numero>numeromaximo)
						{
							numeromaximo=numero;
						}
					if(numero<numerominimo);
						{
							numerominimo=numero;
						}									
				}
			respuesta=prompt("Desea continuar? No, para salir");
					
		}
	promediototal=sumatotal/contador;	
	document.write("La cantidad de numeros pares es de: "+cantidadnumerospares+"<br>");	
	document.write("La suma total de los numeros es de: "+sumatotal+"<br>");	
	document.write("El promedio total es de: "+promediototal+"<br>");	
	document.write("El numero maximo es: "+numeromaximo+"<br>");	
	document.write("El numero minimo es: "+numerominimo+"<br>");	
		

}*/