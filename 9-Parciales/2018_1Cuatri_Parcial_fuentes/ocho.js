function mostrar()
{

var contador = 0;
var respuesta = 'si';
var numero;
var letra;
var acumuladorPositivos=0;
var acumuladorNegativos=0;
var numeroPar;
var numeroImpar;
var numeroNegativo;
var resto;
var cantidadDePares=0;
var cantidadDeImpares=0;
var cantidadDeCeros=0;
var cantidadDepositivos=0;
var promedioDePositivos;
var numeroMinimo;
var numeroMaximo;
var letraDeMaXimo;
var letraDeMinimo;
var bandera=0




/*/letra=prompt('Ingrese una letra: ');
numero=prompt('Ingrese un numero entre -100 y 100');*/
    while(respuesta != 'no')
    {
        letra=prompt('Ingrese una letra: ');
        numero=prompt('Ingrese un numero entre -100 y 100');
        numero=parseInt(numero);
        resto = numero%2;
            while(numero <-100 || numero >100)
                {
                    numero=prompt('Numero invalido. Ingrese un numero entre -100 y 100');
                                  
                }
                    if(numero == 0)
                    {
                        cantidadDeCeros++
                    }
                    else if(numero<0)
                    {
                        acumuladorNegativos=acumuladorNegativos+numero;

                        
                    }
                    else
                    {
                        acumuladorPositivos=acumuladorPositivos+numero;
                        cantidadDepositivos++;
                    }
                                       
                    if(resto == 0)
                    {
                        cantidadDePares=cantidadDePares+1;
                    } 
                    else 
                    {
                        cantidadDeImpares=cantidadDeImpares+1;

                    }
                    while(bandera==0)
                    {
                        numeroMinimo=numero;
                        numeroMaximo=numero;
                        bandera=1
                    }
                    if(numero<=numeroMinimo)
                    {
                        numeroMinimo=numero;
                        letraDeMinimo=letra;
                    }
                    if(numero>=numeroMaximo)
                    {
                        numeroMaximo=numero;
                        letraDeMaximo=letra;
                    }
                    
                    
                  
                    
        /* alert('pares es'+cantidadDePares);
        alert('impares es'+cantidadDeImpares);
        alert('ceros es'+cantidadDeCeros); */       
        













        respuesta=prompt('Desea seguir ingresando datos?')
    }
    promedioDePositivos=acumuladorPositivos/cantidadDepositivos;
    
    document.write('El promedio de positivos es ' +promedioDePositivos)
    document.write('La suma de negativos es ' +acumuladorNegativos)
    document.write('La cantidad de pares ingresados es '+cantidadDePares)
    document.write('La cantidad de impares ingresados es '+cantidadDeImpares)
    document.write('La cantidad de ceros ingresados es '+cantidadDeCeros)
    document.write('El par maximo seria ' +letraDeMaximo + numeroMaximo)
    document.write('El par de datos minimo seria '+letraDeMinimo+ numeroMinimo)
    /*alert('El promedio de positivos es ' +promedioDePositivos)
    alert('La suma de negativos es ' +acumuladorNegativos)
    alert('pares es'+cantidadDePares);
    alert('impares es'+cantidadDeImpares);
    alert('ceros es'+cantidadDeCeros);   
    alert('El par maximo seria ' +letraDeMaximo + numeroMaximo);
    alert('El par de datos minimo seria '+letraDeMinimo+ numeroMinimo);
    */


}
