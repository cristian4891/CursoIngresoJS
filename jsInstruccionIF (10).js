function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var examen;
	examen=Math.floor((Math.random()*10)+1);
	console.log(examen);
	alert(examen);
/*	if(examen==10||examen==9)
	  {
	  	alert("Excelente");
	  }

	if(examen<9)
	  {
	 	if(examen>3)
	 	  {
	 	  	alert("Aprobó");
	 	  }
	 	else
	 	  {
	 	  	alert("Vamos la próxima se puede");
	 	  }	
	  }*/
	if(examen==10||examen==9)
	  {
	  	alert("Excelente");
	  }
	if(examen<9&&examen>3)
      {
      	alert("Aprobó");
      }
    if(examen<4)
      {
      	alert("Vamos la próxima se puede");
      }
}  //FIN DE LA FUNCIÓN