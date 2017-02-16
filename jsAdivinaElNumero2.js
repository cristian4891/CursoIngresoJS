/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto=Math.floor((Math.random()*100)+1) //Genero el número RANDOM entre 1 y 100
	console.log(numeroSecreto);
	contadorIntentos=0;
    

	 
}

function verificar()
{
numeroIngresado=document.getElementById('numero').value;
contadorIntentos=contadorIntentos+1;


if(numeroIngresado==numeroSecreto&&contadorIntentos==1)
  {
  	alert("Usted es un Psíquico");
  }
else
  {if (numeroIngresado==numeroSecreto&&contadorIntentos==2)
      {
      	alert("Excelente percepción");
      }
   else
      {if (numeroIngresado==numeroSecreto&&contadorIntentos==3)
      	  {
            alert("Esto es suerte");
      	  }
      else
         {if (numeroIngresado==numeroSecreto&&contadorIntentos==4)
      	     {
      	   	   alert("Excelente tecnica");
      	     }
        else
           {if (numeroIngresado==numeroSecreto&&contadorIntentos==5)
           	   {
           	   	alert("Usted esta en la media");
           	   }
           	else
           	   {if (numeroIngresado==numeroSecreto&&contadorIntentos>5)
           	   	   {if (numeroIngresado==numeroSecreto&&contadorIntentos<10)
           	   	   	    {
           	   	   	    	alert("Falta tecnica");
           	   	   	    }
           	   	   	else
           	   	   	    {
                           alert("Afortunado en el amor!!!");           	   	   	   	

           	   	   	    }    

           	   	   }  

           	    } 
           	  
            } 	   
           	
         }	  
      }    
  }
	
document.getElementById('intentos').value=contadorIntentos;
}