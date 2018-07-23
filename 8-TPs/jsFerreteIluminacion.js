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
    var precioLampara;
    var precioBruto;
    var descuento;
    descuento=1
    var precioConDescuento;
    precioConDescuento=precioLampara*descuento;
    parseInt(precioConDescuento);
      
    precioLampara=35;
    marca=document.getElementById('Marca').value;
    cantidad=document.getElementById('Cantidad').value;
    parseInt(cantidad);
    precioBruto=cantidad*precioLampara;
/*       if (cantidad >= 6)
        {precioConDescuento=precioLampara*.50
        }
        else
        {
            if(cantidad==5)
            if(marca="ArgentinaLuz")
            {precioConDescuento=precioLampara*.40
            }
            else
            {precioConDescuento=precioLampara*.30}
            if(cantidad==4)
            if(marca="felipeLamparas")
        }
*/
    switch (cantidad)
    {
        case 1:
        case 2:
   
        break;
        case 3:
        switch (marca)
        {
            case ("ArgentinaLuz"):
            descuento=.85
            break;
            case ("felipeLamparas"):
            descuento=.90
            break;
            default:
            descuento=.05
        }//switch(marca)
    }//switch (Cantidad)

document.getElementById('precioDescuento').value=precioConDescuento;


}
