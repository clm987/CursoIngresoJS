/*
Ingreso: 
Maria F 15
Jose M 33
Pepe M 81
mostrar: 
	cantidad:
		1- Mayores de edad = 2
		2- Menores de edad = 1
		3- Mujeres = 1
		4- Cant Hombres = 2
	Nombre:
	 	5- del mayor edad = pepe
	 	6- del menor edad = maria
	 	7- del hombre de menor edad = jose
	 	
*/

function mostrar()
{

	var edad;
	var sexo;
	var nombre;
	var cantidadDemenores;
	var cantidadDemayores;
	contador=0;
	contadorDemayores=0;
	contadorDemenores=0;

	while(contador<3)

	{	
		nombre=prompt("ingrese el nombre ");
		sexo=prompt("ingrese f o m");
		
		while(sexo!="f" && sexo !="m")
		{

	        sexo=prompt("ingrese f o m");
	        sexo=sexo.toLowerCase();
	        sexo=prompt("Error. Reingrese f ó m .");
	        contador++
	    }
	   			
		while(edad>99 || edad<0)
		{
			edad=prompt("Ingrese la edad ");
			edad=parseInt(edad);
	        edad = prompt("Error. Reingrese nuevamente la edad.");
	        contador++
	       		
		}
		if(edad>=18)
		{	
			contador++
		}
		else
		{
			contador++
		}

document.write("<br> La cantidad de mayores es " +cantidadDemayores);
document.write("<br> La cantidad de menores es " +cantidadDemenores);





	}











}
