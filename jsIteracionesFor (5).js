function Mostrar()
{
	var contador=0;
	
    for (     ;contador<9;       )
    	
        {
        	respuesta=prompt("Desea continuar?");
        	while(respuesta!="no"&&respuesta!="si")
        		 {
        		 	respuesta=prompt("Error ingrese si o no para responder");
        		 }
        	if(respuesta=="si")
        		{
        			contador++;
        			document.write(contador+"<br>");
        		}	 	
        	else
      	 		{
        			break;
        		}	       
        }

        


}//FIN DE LA FUNCIÓN