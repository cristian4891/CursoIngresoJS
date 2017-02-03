/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre=prompt("Ingrese su nombre:");
    document.getElementById('elNombre').value=nombre;
    /*si coloco "=nombre" por delante de "document.get" no funciona*/
}

