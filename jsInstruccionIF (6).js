function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);
if(edad>=18){alert("Es mayor de edad");}
else if(edad>=13&&edad<=17){alert("Es adolescente");}
//si quito el else no funciona
else{alert("Es un niño");}
}//FIN DE LA FUNCIÓN