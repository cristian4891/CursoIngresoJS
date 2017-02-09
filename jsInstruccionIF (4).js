function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);
if(edad>=13&&edad<=17){alert("Es un adolescente");}
  else{alert("No es un adolescente");}
}//FIN DE LA FUNCIÓN