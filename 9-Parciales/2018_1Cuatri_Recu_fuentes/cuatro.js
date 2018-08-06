function mostrar()
{


    var numero1;
    var numero2;
    var resultado;
  
    numero1=prompt("Ingrese el numero ");
    numero1=parseInt(numero1);
    numero2=prompt("Ingrese el otro numero ");
    numero2=parseInt(numero2);


     if(numero1>numero2)
        {
            resultado=numero1/numero2;
        }else if(numero1==numero2)
                {
                    alert("Los numeros son " +numero1+numero2);
                }else
                {  
                    resultado= numero1+numero2;

                    if (resultado>50) 
                    {
                        alert("El resultado es  " +resultado+ "  y supero el 50");
                    } 
                }
                
            
            
            
//alert("el resultado es" +resultado );




















}
