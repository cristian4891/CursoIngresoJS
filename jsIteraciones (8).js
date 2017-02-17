function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
  var respuesta='si';
  var numero;

    while(respuesta=="si")
        {
          contador++;
          numero=prompt("Ingrese un numero");
          numero=parseInt(numero);
          if (numero>0)
             {
             	positivo=positivo+numero;
             }
        else {
                negativo=negativo*numero;
             }
          respuesta=prompt("Ingrese 'si' si desea continuar");       
        }


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN