function Mostrar()
{
    var contador=0;
    var mascota;
    var contadormascotasi=0;
    var contadormascotano=0;
    var tipomascota;
    var edad;
    var edadmaxima;
    var nombredelgato;
    var sexo;
    var edaddelgato;
    //la persona mas vieja que no tiene mascota
    /*necesito saber el nombre del primer gato que sea de una mujer mayor 
    a 30 años y el gato no tenga mas de 5 años de edad (el gato no puede tener mas de 15 años )*/


	for (    ;contador<1000;       ;)

     	{   
     		mascota=prompt("Tiene mascota?")
     		while(mascota!="si"&&mascota!="no");
     		     {
                   mascota=prompt("Error, ingrese si o no");
     		     }
     		if (mascota=="si")
     		 	{
     		 		contadormascota++;
     		 		tipomascota=prompt("Que tipo e mascota tiene?")
     				while(mascota!="gato"&&mascota!=perro)
     					 {
     					 	tipodemascota=prompt("Tipo de mascota incorrecto");
     					 }

     		 	} 
     		 else
     		 	{
     		 		contadormascotano++;
     		 	}
     		 edad=prompt("Ingrese la edad")
     		 if(contador==1)
     		   {
     		   	edadmaxima=edad;
     		   }
     		 if(contador>1)
     		    {if 

     		    }  	   

     	}
}