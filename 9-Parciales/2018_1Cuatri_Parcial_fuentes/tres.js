function mostrar()
{


    var precio;
    var descuento;
    var precioConDescuento;

    precio=prompt("Ingrese el precio sin descuento  ");
    precio=parseInt(precio);
    descuento=prompt("Ingrese el porcentaje de descuento  ");
    descuento=parseInt(descuento);
    precioConDescuento=precio*(1-(descuento/100));
    document.getElementById('elPrecioFinal').value=precioConDescuento;

}
