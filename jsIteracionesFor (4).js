function Mostrar()
{

	var contador;
	var respuesta;

	for (contador=0;contador<100;contador++)
		{
        	document.write(contador+"<br>");
        	respuesta=prompt("ingrese no para parar");
        	if(respuesta=="no")
        		{
        			break;
        		}
        	else
        		{
        			continue;
        		}	
		}





}//FIN DE LA FUNCIÓN