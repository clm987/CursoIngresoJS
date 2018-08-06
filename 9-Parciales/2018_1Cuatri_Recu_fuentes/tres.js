function mostrar()
{

    var precioInicial;
    var descuento;
    var descuentoEnDinero;
    var precioConDescuento;
    var iva;
    var precioFinal;

    precioInicial=prompt("Ingrese el precio ");
    precioInicial=parseInt(precioInicial);
    descuento=prompt("Ingrese el porcentaje de descuento");
    descuento=parseInt(descuento);

descuentoEnDinero=(precioInicial*(descuento)/100);
precioConDescuento=precioInicial-descuentoEnDinero;
iva= (precioInicial*21/100);
precioFinal=precioConDescuento+iva

alert("El descuento en dinero es"+descuentoEnDinero+ "  El precion con el descuento es "+precioConDescuento+ " el iva es " +iva);


document.getElementById("elPrecioFinal").value=precioFinal
















}
