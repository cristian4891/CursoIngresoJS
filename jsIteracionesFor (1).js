function Mostrar()

{
 	var contador=0;
 	var contador1=0;
 	var contador2=0;
 	var contador3=0;
 	var contador4=0;
 	var contador5=0;
 	var contador6=0;
 	var contador7=0;
 	var contador8=0;
 	var contador9=0;
 	var contador10=0;
 	var porcentaje1=0;
 	var porcentaje2=0;
 	var porcentaje3=0;
 	var porcentaje4=0;
 	var porcentaje5=0;
 	var porcentaje6=0;
 	var porcentaje7=0;
 	var porcentaje8=0;
 	var porcentaje9=0;
 	var porcentaje10=0;
 	var numerorandom;


 	for (              ;contador<10000;contador++)
     /*es importante que esten los punto
     y coma sino el for no funciona*/
 	{
		    numerorandom=Math.floor((Math.random() * 10) + 1);
	        /*console.log(numerorandom);*/
	       

    		switch (numerorandom)
    	{
    		case 1:
    		contador1++;
    		break;
        	case 2:
        	contador2++;
        	break;
        	case 3:
        	contador3++;
        	case 4:
        	contador4++;
        	break;
        	case 5:
        	contador5++;
        	break;
        	case 6:
        	contador6++;
        	break;
        	case 7:
      		if(contador7<0.07*10000)   		
     			{
        			contador7++;    //limito el porcentaje a 7%
        		}
        	else
        		{
                    continue;
        		}	
        	break;
        	case 8:
        	contador8++;
        	break;
        	case 9:
        	contador9++;
        	case 10:
        	contador10++;
        	break;
        	
   		}
    }

 porcentaje1=contador1/contador*100;
 porcentaje2=contador2/contador*100;
 porcentaje3=contador3/contador*100;
 porcentaje4=contador4/contador*100;
 porcentaje5=contador5/contador*100;
 porcentaje6=contador6/contador*100;
 porcentaje7=contador7/contador*100;
 porcentaje8=contador8/contador*100;
 porcentaje9=contador9/contador*100;
 porcentaje10=contador10/contador*100;


 console.log("La cantidad de porcentaje de 1: "+porcentaje1+"%");
 console.log("La cantidad de porcentaje de 2: "+porcentaje2+"%");
 console.log("La cantidad de porcentaje de 3: "+porcentaje3+"%");
 console.log("La cantidad de porcentaje de 4: "+porcentaje4+"%");
 console.log("La cantidad de porcentaje de 5: "+porcentaje5+"%");
 console.log("La cantidad de porcentaje de 6: "+porcentaje6+"%");
 console.log("La cantidad de porcentaje de 7: "+porcentaje7+"%");
 console.log("La cantidad de porcentaje de 8: "+porcentaje8+"%");
 console.log("La cantidad de porcentaje de 9: "+porcentaje9+"%");
 console.log("La cantidad de porcentaje de 10: "+porcentaje10+"%");

 console.log("La cantidad de numeros 1 es: "+contador1);
 console.log("La cantidad de numeros 2 es: "+contador2);                 ;
 console.log("La cantidad de numeros 3 es: "+contador3);
 console.log("La cantidad de numeros 4 es: "+contador4);
 console.log("La cantidad de numeros 5 es: "+contador5);
 console.log("La cantidad de numeros 6 es: "+contador6);
 console.log("La cantidad de numeros 7 es: "+contador7);
 console.log("La cantidad de numeros 8 es: "+contador8);
 console.log("La cantidad de numeros 9 es: "+contador9);
 console.log("La cantidad de numeros 10 es: "+contador10);

 console.log(contador);
}
/*{*/
/*	var contador;

	for (contador=0;contador<=10;contador++)
		{
			
			document.write(contador+"<br>");

		}*/
	
	/*document.write(contador+"<br>"); poniendo al final solo imprime el ultimo numero
	en este caso 10*/ 

/*}*/