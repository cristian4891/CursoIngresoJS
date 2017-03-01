function Mostrar()
{

	var contador=0;
	var numero=prompt("Ingrese un numero");
	var contadornumerospares=0;


	for (contador;contador<numero;contador++)

	    { 	
	    	if (contador%2==0)
	    		{
	    			numeropar=contador;
                	contadornumerospares++;
                
                	document.write("El: "+numeropar+" es numero par. "+"<br>");

	    		}      
	    }
    
    document.write("La cantidad de numeros pares es de: "+contadornumerospares+"<br>");

}//FIN DE LA FUNCIÓN