function Mostrar()
{

	var contador=0;
	var edad;
	var sexo;
	var nota;
	var aprobado=0;
	var nombre;
	var maximo;
	var minimo;
	var nombredelmayor; 
	var sexominimo;
	var personasaprovadas;
	var personasdesaprovadas;
	var promedionotas;
	var acumuladordenotas;
	var contadormaculino;
	var contadorfemenino;
	var edadesmasculino;
	var edadesfemenino;
	var bandera="nadie";
	var nombredeldiez;
	var edaddeldiez;
	var sexodeldiez;



	               // declarar variables antes del while
	
	var respuesta='si';

	while(respuesta!='no')
	{

         edad=prompt("Ingrese edad");
         edad=parseInt(edad);
            while(edad<0||edad>100)
          {
          		 edad=prompt("error,Ingrese edad");
         		edad=parseInt(edad);
          }

         sexo=prompt("Por favor ingrese s o f segun sexo");
             while(sexo!="f"&&sexo!="m")
             {
               sexo=prompt("Opcion incorrecta");
             }
         
         nota=prompt("Ingrese una nota"); 
         nota=parseInt(nota);
             while(nota<0||nota>11)
             {
             	nota=prompt("Nota incorrecta");
             } 

         if (nota==10&&bandera=="nadie")
          {
          	 nombredeldiez=nombre;
          	 edaddeldiez=edad;
          	 sexodeldiez=sexo;
          	 bandera="otro";
          }
         //cantidad de personas aprobadas
         
         if (nota>4)
          {
            aprobado=aprobado+1;
          }  

         //cuantas mujeres y cuantos hombres desaprobaron



         //promedio de notas













         //la edad promedio de las mujeres

         if(sexo=="f")
         {
         	contadorfemenino++;
         	edadesfemenino=edad+edadesfemenino;
         }
         else
         {
         	contadormasculino++;
         	edadesmasculinos=edad+edadesmasculinos;
         }
         
         //cantidad de mujeres que aprobaron la nota par y son menores de edad

         if(sexo=="f"&&nota/2==0&&edad<18)
           { if (nota>4) 

                {
                    contadormenorfemenino++; // mostrarlo al final por document.write cuando tengo que contar
                }
         //
           }






         contador++; // o contador+1
         nombre=prompt("Por favor ingrese nombre");

         if (contador==1)
          {
          	maximo=edad;
          	minimo=edad;
          	nombre=nombredelmayor;
          }		
         else
          {
          	if (edad>maximo)
          	 {
          	   	maximo=edad;
          	   	nombredelmayor=nombre;
          	 }
          	if (edad<minimo)
          	 {
          	 	minimo=edad;
          	 }



          




	 respuesta=prompt("Para salir ingrese no");

	}

    

}//FIN DE LA FUNCIÓN