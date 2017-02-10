/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marca;
 	var precioDescuento;
 	var impuesto;
 	var ingresosBrutos;
    cantidad=document.getElementById('Cantidad').value;
    marca=document.getElementById('Marca').value;
//si elimino la linea anterior no realiza descuentos segun marca
/*    
      pdUno=35*cantidad*0.5;
      pdDos=35*cantidad*0.6;
      pdTres=35*cantidad*0.7;
      pdCuatro=35*cantidad*0.75;
      pdCinco=35*cantidad*0.80;
      pdSeis=35*cantidad*0.85;
      pdSiete=35*cantidad*0.90;
      pdOcho=35*cantidad*0.95;
*/
    if(cantidad>5)
        {    
           precioDescuento=35*cantidad*0.5;
      	   document.getElementById('precioDescuento').value=precioDescuento;
        } 

    if(cantidad==5)
        {
      	if(marca=="ArgentinaLuz")
      	   {
      	   	  precioDescuento=35*cantidad*0.6;
              document.getElementById('precioDescuento').value=precioDescuento;
      	   }
      	else
      	   {
              precioDescuento=35*cantidad*0.7;      	   	
      	   	  document.getElementById('precioDescuento').value=precioDescuento;
      	}   
      }

    if(cantidad==4)
        {
      	if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
           {
           	  precioDescuento=35*cantidad*0.75;
              document.getElementById('precioDescuento').value=precioDescuento;	
           }
        else
            {
              precioDescuento=35*cantidad*0.80;
              document.getElementById('precioDescuento').value=precioDescuento;
            }
        }

    if(cantidad==3)
        {
         if(marca=="ArgentinaLuz")
            {
              precioDescuento=35*cantidad*0.85;
              document.getElementById('precioDescuento').value=precioDescuento;
            }
         if(marca=="FelipeLamparas")
            {
              precioDescuento=35*cantidad*0.90;
              document.getElementById('precioDescuento').value=precioDescuento; 
            }
         if(marca!="ArgentinaLuz")
            {
            	if(marca!="FelipeLamparas")
            	    {
            	       precioDescuento=35*cantidad*0.95;
            		   document.getElementById('precioDescuento').value=precioDescuento;
            	    }
            }
        }

    if (cantidad==1||cantidad==2) 
        {
          precioDescuento=35*cantidad;
          document.getElementById('precioDescuento').value=precioDescuento;
        }

    if(precioDescuento>120)
        { 
      	precioDescuento=document.getElementById('precioDescuento').value;
      	alert("Su precio con descuento es "+precioDescuento+".");
      	impuesto=precioDescuento*1.1;
        ingresosBrutos=impuesto-precioDescuento;
      	alert("IIBB Usted pago "+impuesto+" siendo "+ingresosBrutos+" el impuesto que se pago.")
        }


}
