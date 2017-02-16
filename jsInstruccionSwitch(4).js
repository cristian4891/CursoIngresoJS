function Mostrar()
{

var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	alert("Este mes tiene 30 dias")
	break;

	case "Febrero":
	alert("Este mes tiene 28 dias")
	break;
	
	default:
	alert("Este mes tiene 31 dias")
}


	
	



}//FIN DE LA FUNCIÓN