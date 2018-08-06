function mostrar()
{

    //var contador = 0;
    var respuesta = 'si';
    var peso;
    var marca;
    var temperaturaAlmacenamiento;
    var acumuladorDePesos=0;
    //var acumuladorNegativos=0;
    //var numeroPar;
    //var numeroImpar;
    //var numeroNegativo;
    var resto;
    var cantidadDetemperaturasPares=0;
    //var cantidadDeImpares=0;
    var cantidadDeTempNegativas=0;
    //var cantidadDepositivos=0;
    var promedioDePeso;
    var pesoMinimo;
    var pesoMaximo;
    var marcaDeMaXimo;
    //var marcaDeMinimo;
    var bandera=0
    var cantidadePesos=0
    
    
        while(respuesta != 'no')
        {
            marca=prompt('Ingrese la marca: ');
            peso=prompt('Ingrese el peso: ');
            peso=parseInt(peso);
            temperaturaAlmacenamiento=prompt('Ingrese la temperatura ');
            temperaturaAlmacenamiento=parseInt(temperaturaAlmacenamiento);
            resto = peso%2;
            cantidadePesos++
            acumuladorDePesos=acumuladorDePesos+peso;
                while(peso <1 || peso >100)
                    {
                        peso=prompt('Peso invalido. Ingrese peso entre 1 y 100');
                                      
                    }
                while(temperaturaAlmacenamiento <-30 || temperaturaAlmacenamiento>30)
                {
                    temperaturaAlmacenamiento=prompt('Temperatura invalida. Ingrese Temperatura entre -30 y 30');
                                  
                }

                        if(resto == 0)
                          
                        {
                            cantidadDetemperaturasPares++;
    
                        }
                        if(temperaturaAlmacenamiento < 0)
                        
                        {
                            cantidadDeTempNegativas++;
                            
                        }
                        /*else
                        {
                            acumuladorPositivos=acumuladorPositivos+numero;
                            cantidadDepositivos++;
                        }*/
                                           
                        while(bandera==0)
                        {
                            pesoMinimo=peso;
                            pesoMaximo=peso;
                            bandera=1
                        }
                        if(peso<=pesoMinimo)
                        {
                            pesoMinimo=peso;
                            
                        }
                        if(peso>=pesoMaximo)
                        {
                            pesoMaximo=peso;
                            marcaDeMaXimo=marca;
                        }
                        
                        
                      
                        
           
    
    
    
    
    
    
    
    
    
    
    
    
            respuesta=prompt('Desea seguir ingresando datos?')
        }
        
        promedioDePeso =acumuladorDePesos/cantidadePesos;
        
        document.write('El peso maximo seria '+pesoMaximo+' y el peso minimo seria' +pesoMinimo);
        document.write('El promedio de pesos es ' +promedioDePeso);
        //document.write('La suma de negativos es ' +acumuladorNegativos)
        document.write('La cantidad de temperaturas pares ingresadas es '+cantidadDetemperaturasPares);
        document.write('La cantidad de productos que se conservan a -0 es '+cantidadDeTempNegativas);
        //document.write('La cantidad de ceros ingresados es '+cantidadDeCeros)
        document.write('La marca del producto mas pesado seria ' +marcaDeMaXimo)
        //document.write('El par de datos minimo seria '+letraDeMinimo+ numeroMinimo)











































}
