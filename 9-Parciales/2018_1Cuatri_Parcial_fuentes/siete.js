function mostrar()
{

    var contador = 0;
    var acumulador = 0;
    var sexo;
    var nota;
    var cantidadHombresAprobados = 0
    var promedio;
    var notaMasBaja;
    var bandera = 0;

    
    while(contador < 5)
    {
        sexo=prompt('Ingrese el sexo');
        sexo=sexo.toLowerCase();
        
        while (sexo!='f' && sexo!='m')
        {
            sexo=prompt('Caracter invalido. Ingrese f o m');
            sexo=sexo.toLowerCase();  
        }  
        
            nota=prompt('Ingrese la nota');
            nota=parseInt(nota);

            while(nota<0 ||nota >10 || isNaN(nota))
        {
            nota=prompt('Nota invalida. Reingrese la nota');
            nota=parseInt(nota);
        }
          
                if(contador == 0)
                {
                    notaMasBaja=nota;
                    
                }
                else if(nota<notaMasBaja)
                {
                    notaMasBaja = nota;
                    sexoDeNotaMasBaja=sexo;
                }
                
                /*else if (notaMasBaja=nota)
                {
                    sexoDeNotaMasBaja=sexo;

                }       
                
                */
                                      
                if (sexo =='m' && nota>=6)
                {
                cantidadHombresAprobados++
                }
/*
                if(nota<notaMasBaja)
                {
                    notaMasBaja = nota;
                    
                }

                if(nota=notaMasBaja)
                {
                    sexo=sexoDeNotaMasBaja;
                }
*/                
                acumulador=acumulador+nota;
        


    contador=contador+1
    }
        
    promedio=acumulador/contador;
    alert("El Promedio de notas es  "+promedio);
    alert("La nota mas baja fue  "+notaMasBaja +"  esta persona es de sexo " +sexoDeNotaMasBaja);
    alert('La cantidad de varones con notas mayores o iguales a 6 fue  '+cantidadHombresAprobados);


}
