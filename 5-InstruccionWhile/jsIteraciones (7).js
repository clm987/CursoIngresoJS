function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero
	var promedio


	while(respuesta!="n")
		{
			numero=prompt("ingrese un numero ")
			promedio=numero/contador
			contador=contador+1
			acumulador=acumulador+numero
			respuesta=prompt("desea seguir ingresando numeros?")
		}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN