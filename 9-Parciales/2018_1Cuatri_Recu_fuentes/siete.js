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
// declaracion
	var edad;
	var sexo;
	var nombre;
	var contadorDMenores=0;
	var contadorDMayores=0;
	var contadorDMujeres=0;
	var contadorDHombres=0;
	var nombreDHombreMasChico;
	var edadDeHombreMenor
	var contador=0;
	
	
	
// input

	while(contador<3)
	{
		nombre=prompt("Ingrese el nombre");
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		sexo=prompt("Ingrese el sexo");
		

		if(sexo=='f')
		{	
				while(sexo!="f" && sexo!="m")
			{
           		sexo = prompt("Error. Reingrese f ó m .")
            	
			}
			contadorDMujeres++
		}
		else
		{
			while(sexo!="f" && sexo!="m")
			{
           		sexo = prompt("Error. Reingrese f ó m .")
            	
			}
			contadorDHombres++
		}

		if(edad<18)
		{	
			contadorDMenores++
		}
		else
		{
			
			contadorDMayores++
		}

		if(edad > mayorEdad || flag==0)
		{
			mayorEdad=edad;
			nombreDMayor=nombre;
		}

		if(edad < menorEdad || flag==0)
		{
			menorEdad=edad;
			nombreDMenor=nombre;
			flag==1
		}

		if(sexo =='m' && contadorDHombres==1)
		{
			nombreDHombreMasChico=nombre;
			edadDeHombreMenor=edad;
		}
		if(sexo=='f' && edad<edadDeHombreMenor)
		{
			nombreDHombreMasChico=nombre;
			edadDeHombreMenor=edad;
		}

	contador++;
	}
document.write("La cantidad de menores es " +contadorDMenores + "<br>");
document.write("La cantidad de mayores es " +contadorDMayores + "<br>");
document.write("La cantidad de Mujeres es " +contadorDMujeres + "<br>");
document.write("La cantidad de Hombres es " +contadorDHombres + "<br>");
document.write("El nombre del Hombre menor es   " +nombreDHombreMasChico + "<br>");
document.write("La edad del Hombre menor es   " +edadDeHombreMenor + "<br>");



}
