function Mostrar()
{
//tomo la edad  
  var edad;
  var estadocivil;
  var soltero;
  soltero="Soltero"
  edad=document.getElementById('edad').value;
  estadocivil=document.getElementById('estadoCivil').value;
  /*if(edad<18&&estadocivil!="Soltero") uso esta linea
  sin crear la variable soltero="Soltero"*/
  if(edad<18&&estadocivil!=soltero) 
    {
      alert("Es muy joven para no ser soltero");
    }


}//FIN DE LA FUNCIÓN

