function mostrar()
{
  
    var nombreDelAnimal;
    var peso;
    var temperatura;
    var respuesta = 'si';
    var bandera = 0;
    var cantidadTemperaturasPares=0;
    var nombreDelMasPesado;
    var temperaturaDelMaspesado;
    var cantidadTemperaturasNegativas=0;
    var acumuladorDePesos=0
    var resto;
    var pesoMaximoDelBajoCero;
    var pesoMinimiDelBajoCero;
    var cantidadDePesos=0
    var promedioDePesos;
    var bandera2=0;


    
        while(respuesta !='no')

        {
            nombreDelAnimal= prompt('Ingrese el nombre del animal  ');
            peso= prompt('Ingrese el peso del animal  ');
            peso=parseInt(peso);
            cantidadDePesos++
            acumuladorDePesos=acumuladorDePesos+peso;
            temperatura= prompt('Ingrese la temperatura del habitat');
            temperatura= parseInt(temperatura)
            resto=temperatura%2;
            //acumuladorDePesos=acumuladorDePesos+peso;
            

            while(peso<1 || peso >1000)
            {
                peso=prompt('Peso erroneo. Ingrese un peso entre 1 y 1000');
            }

            while(temperatura<-30 | temperatura>30)
            {
                temperatura=prompt('Temperatura erronea. Ingrese entre -30 y 30');

            }
            if(resto==0)
            {
                cantidadTemperaturasPares++;
            }
            if(bandera==0)
            {
                pesoDelmaximo=peso;
                temperaturaDelMaspesado=temperatura;
                nombreDelMasPesado=nombreDelAnimal;
                bandera++;
            }
            if(peso>pesoDelmaximo)
            {
                pesoDelmaximo=peso;
                temperaturaDelMaspesado=temperatura;
                nombreDelMasPesado=nombreDelAnimal;
            }
            
            if(bandera2==0 && temperatura<0)
            {
                pesoMaximoDelBajoCero=peso;
                pesoMinimiDelBajoCero=peso;
                bandera2++
            }
            if(peso>pesoMaximoDelBajoCero)
            {
                pesoMaximoDelBajoCero=peso;

            }
            if(peso<pesoMinimiDelBajoCero)
            {
                pesoMinimiDelBajoCero=peso;
            }
            
            if(temperatura<0)
            {               
                cantidadTemperaturasNegativas++

            }
          
            /* if(cantidadTemperaturasNegativas=0)
            {
                pesoMaximoDelBajoCero=peso;
                pesoMinimiDelBajoCero=peso;
                cantidadTemperaturasNegativas++
            }else if(temperatura <0 && peso>pesoMaximoDelBajoCero)
            {
                pesoMaximoDelBajoCero=peso;
                
            }
            
            if(temperatura< 0 && peso<pesoMinimiDelBajoCero)
            {
                pesoMinimiDelBajoCero=peso;
            }*/

            














        respuesta=prompt('Desea seguir ingresando datos? ');









        }


    //promedioDePesos=acumuladorDePesos/cantidadDePesos;



    document.write('La cantidad de temperaturas pares es ' +cantidadTemperaturasPares);
    document.write('El animal mas pesado es '+nombreDelMasPesado+ ' y su habitat se mantiene a '+temperaturaDelMaspesado);
    document.write('La cantidad de animales que viven bajo cero es ' +cantidadTemperaturasNegativas);
    document.write('El promedio de peso de los animales es '+(acumuladorDePesos/cantidadDePesos));
    document.write('El peso maximo y el minimo de los animales que viven bajo cero son '+pesoMaximoDelBajoCero+ ' y ' +pesoMinimiDelBajoCero+ '  respectivamente');
    




























































































































}
