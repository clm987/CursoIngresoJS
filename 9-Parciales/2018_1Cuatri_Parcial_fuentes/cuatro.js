function mostrar()
{

    var numero1;
    var numero2;
    var suma;
    
    numero1=prompt('Ingrese el primer numero ');
    numero1=parseInt(numero1);
    numero2=prompt('Ingrese el segundo numero');
    numero2=parseInt(numero2);
    suma=numero1+numero2;
   
    if(numero1>numero2)
    {
        alert("La resta es " +(numero1-numero2));
    }
    else
    {   
        if(numero1==numero2)
        {
            alert("Los numeros son " +numero1+numero2);
        }
        else
        {         
            if (suma>10) 
            {
                alert("La suma es  "+suma+ "  y supero el 10");
            } 
            else
            {
                alert("La suma es  " +suma);
            }   
        }    
        
    }
    
    



}
