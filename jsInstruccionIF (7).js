function Mostrar()
{
//tomo la edad  

	var edad;
	var estadocivil;
	var soltero;
	soltero="Soltero";
	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;
    

	if(edad<18&&estadocivil!=soltero)
	  {
	  	 alert("Es muy pequeño para no soltero");
	  }
	
}
	


	
