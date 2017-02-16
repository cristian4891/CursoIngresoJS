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
    var cantidadlamparas=document.getElementById('Cantidad').value;
    var marca=document.getElementById('Marca').value;
    var importeBruto=cantidadlamparas*35;
    var precioconDescuento;
    
    switch (marca)
    {   case "ArgentinaLuz":
        case "FelipeLamparas":
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
        if(cantidadlamparas>5)
        {
            precioconDescuento=importeBruto*0.5;
        }
        break;

        case "ArgentinaLuz":
            switch(cantidadlamparas)
            {
            case 5:
                 {
                   precioconDescuento=importeBruto*0.6;
                 }
            case 4:
                 {
                   precioconDescuento=importeBruto*0.75;
                 }
            case 3:
                 {
                   precioconDescuento=importeBruto*0.85;
                 }
            break;
            }    

/*        case "FelipeLamparas":
            switch(cantidadlamparas)
            {
            case 4:
                 {
                   precioconDescuento=importeBruto*0.75;
                 }
            case 3:
                 {
                   precioconDescuento=importeBruto*0.90;
                 }
             
            break;
            }

        case "FelipeLamparas":
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
             if(cantidadlamparas==5)
             {
                precioconDescuento=importeBruto*0.7;
             }
        break;

        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
              if(cantidadlamparas==4) 
              {
                precioconDescuento=importeBruto*0.80;
              }
        break;

        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
              if(cantidadlamparas==3) 
              {
                precioconDescuento=importeBruto*0.95;
              }
        break;*/
        
/*        default: 
              if(cantidadlamparas==1||cantidadlamparas==2)
              {
                precioconDescuento=importeBruto;
              }*/
            
    }
    
    document.getElementById('precioDescuento').value=precioconDescuento;

}
