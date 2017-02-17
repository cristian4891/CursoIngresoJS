function Mostrar()
{

var sexo = prompt("Ingrese f ó m .");

while (sexo!="f"&&sexo!="m")
{
    sexo=prompt("Reingrese otra letra");
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN