function mostrar()
{

    var dia=prompt("Ingrese un dia");
    dia=dia.toLowerCase();
    

        switch(dia)
        {

            case "lunes":
            case "martes":
            case "miercoles":
            case "jueves":
            case "viernes":
            alert("A trabajar")
            break;

            case "sabado":
            case "domingo":
            alert("Buen finde")
            break;

            default:
            alert("no es un dia valido")


        }























}
