function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

var examen
examen=Math.floor((Math.random()*10)+1);

if (examen >= 9)
{
	alert("La nota del examen fue  " +examen + "  Excelente")
}
else
{
	if(examen>4)
	{ 
		alert("La nota del examen fue  " +examen + "  Aprobo")
	}
	else
	{
		alert("La nota del examen fue  " +examen + "  Vamos la proxima se puede")
	}
}

}//FIN DE LA FUNCIÓN