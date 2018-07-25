function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	parseInt(numero)

	while(numero < 0 ||numero >10 || isNaN(numero))
		{
           numero=prompt("numero no valido reingrese el numero"  )
            
		}
   
    document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN