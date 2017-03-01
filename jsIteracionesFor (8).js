function Mostrar()
{

	var numero=prompt("Ingrese un numero");
	var contador;
	var divisor;
	var contadordivisores=0;
	var numeroprimo;
	var numeronoprimo;


    


	for (contador=0;contador<numero;contador++)
	    
	    {   
	    	if (numero%contador==0)
	    		{
	    			divisor=contador;
	    			contadordivisores++;
	    		}				        
        } 

    if(contadordivisores>2)
 		{ 	
	    	numeronoprimo=numero;
	    	document.write(numero+" no es numero primo");
	    	
	    }
	else
	    {   
	    	numeroprimo=numero
	        document.write(numero+" es numero primo");				
	    }       
}//FIN DE LA FUNCIÓN