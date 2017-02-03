/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var elNombre;
 	var laEdad;
 	elNombre=document.getElementById('elNombre').value;
 	laEdad=document.getElementById('laEdad').value;
 	/*buscar los ID en el html correspondiente al ejercicio en donde dice "input"
 	buscar id*/
	alert("Usted se llama " + elNombre + " y tiene " + laEdad + " años");
}

