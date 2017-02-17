function Mostrar()
{

	var contador=0;
	var numero;// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
	   contador++;
	   numero=prompt("Ingrese un numero");
	   numero=parseInt(numero);
	   if (contador==1)
	    {
	    	maximo=numero;
	    	minimo=numero;
	    	
	    }
	   if (contador>1&&numero>maximo) 
	    {
            maximo=numero;
	    }
	   if (contador>1&&numero<minimo)
	    {
	    	minimo=numero;
	    }  
       respuesta=prompt("Ingrese si para continuar, o no para terminar");
	
	}

    document.getElementById('maximo').value=maximo;
    document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN