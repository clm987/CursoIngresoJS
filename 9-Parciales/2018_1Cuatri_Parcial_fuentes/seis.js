function mostrar()
{
    //declaracion
    
    var laHora;
    
    
    //definicion

    laHora=document.getElementById('laHora').value;
    laHora=parseInt(laHora);
    
    // validacion
   /* while((isNaN(laHora) || laHora>24 || laHora< 0))
    {
        laHora= prompt("No es una hora valida. Reingrese la hora: ");
        laHora=parseInt(laHora);
        document.getElementById('laHora').value=laHora;
    }
    */
    // switch y logica de alerts
    switch(laHora)
    { 
        default:
        alert ('No es una hora valida. Reingrese la hora')
        case 6 :
        case 7 :
        case 8 :
        case 9 :
        case 10 :
        case 11 :
        alert('Es de mañana');
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        alert('Es de tarde');
        break;
        case 20:
        case 21:
        case 22:
        case 23:
        alert('Es de noche, a domir!!');
        break;
        case 24:
        alert('Es de noche');
        break;
        //default:
        //alert('No es una hora valida. Reingrese la hora')

    }
    
    












}
