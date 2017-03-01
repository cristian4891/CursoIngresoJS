function Mostrar()
{
    var contador=0;
    var mascota;
    var contadormascotasi=0;
    var contadormascotano=0;
    var tipomascota;
    var edad;
    var edadmaximaconmascota;
    var nombredelgato;
    var sexo;
    var contadornombre gato=0;
    var edaddelgato;
    //la persona mas vieja que no tiene mascota
    /*necesito saber el nombre del primer gato que sea de una mujer mayor 
    a 30 años y el gato no tenga mas de 5 años de edad (el gato no puede tener mas de 15 años )*/


	for (    ;contador<3;contador++)

     	{   
     		mascota=prompt("Tiene mascota?");
     		while(mascota!="si"&&mascota!="no")
     		     {
                   mascota=prompt("Error, ingrese si o no");
     		     }

     		 if (mascota=="si")
     		 	{
     		 		contadormascotasi++;
     		 		tipomascota=prompt("Que tipo de mascota tiene? gato o perro?");
     				while(tipomascota!="gato"&&tipomascota!="perro")
     					{
     					 	tipomascota=prompt("Tipo de mascota incorrecto");
     					}
                    if(tipomascota=="gato")
                        {
                            
                            edaddelgato=prompt("Ingrese edad del gato");
                            while(edaddelgato<0||edaddelgato>15)
                                {
                                    edaddelgato=prompt("Edad del gato incorrecta");
                                }
                            nombredelgato=prompt("Ingrese nombre del gato");                                
                        }     
     		 	} 
     		else
     		 	{
     		 		contadormascotano++;
     		 	}

 	        edad=prompt("ingrese su edad");
            while(edad<0||edad>120)
                {
                    edad=prompt("edad incorrecta. Debe estar entre 0 y 120"); 
                }
            sexo=prompt("ingrese su sexo f o m");
            while(sexo!="f"&&sexo!="m")
                {
                    sexo=prompt("error, ingrese para sexo f o m");
                }

            if(contadormascotasi==1)
                {
                    edadmaximaconmascota=edad;
                }
            if(contadormascotasi>1)
                { if (edad>edadmaximaconmascota)
                        {
                            edadmaximaconmascota=edad;
                        }  
                }
            if(mascota=="si"&&tipomascota=="gato")
                {
                    if(sexo=="f"&&edad>30)
                        {
                            if(edaddelgato<5)
                                {
                                    contadornombregato++;
                                    /**/
                                }
                        }
                }

     	}

    document.write("La persona mas vieja con mascota tiene "+edadmaximaconmascota+" años"+"<br>");
    if (contadornombregato==1)
        {
            document.write("El nombre del gato es "+nombredelgato+"<br>");
        }
}