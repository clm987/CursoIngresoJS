function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';
	var bandera=0;
	

	while(respuesta!='no')
	{
			numero=prompt("ingrese el numero ");
			numero=parseInt(numero);
			
		if (bandera==0)
		{
			maximo=numero;
			minimo=numero;
			bandera=1;
		}
		if (numero<minimo)
		{
			minimo=numero;
		
		}
		if (numero>maximo)
		{
			maximo=numero;
		}


		respuesta=prompt("desea seguir ingresando numeros?")

	}	

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN