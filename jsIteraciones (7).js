function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si"; 
	var numero;

	while (respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador=contador+numero;
		respuesta=prompt("Desea continuar");

	}

promedio=acumulador/5;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN