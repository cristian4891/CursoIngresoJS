function Mostrar()
{
//tomo la edad  
var age;
var state;

age = document.getElementById("edad").value;
age = parseInt(age);

state = document.getElementById("estadoCivil").value;

if(age >=18 && state == "Soltero")
{
	alert("Es soltero y no es menor");
}
	


}//FIN DE LA FUNCIÓN