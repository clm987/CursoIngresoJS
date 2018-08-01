function mostrar()
{

    var planeta


    planeta=prompt("Ingrese un planeta ");
    planeta=planeta.toLowerCase();
    
    while(planeta != "mercurio" && planeta != "marte"&& planeta != "la tierra" && planeta != "venus" && planeta != "jupiter" && planeta != "pluton")
    {
        planeta=prompt("No es un planeta. Ingrese un planeta correcto");
        
        switch(planeta)

        {
        case"la tierra":
        alert("Aca vivimos");
        break;

        case"marte":
        alert("Aca hace mas calor");
        break;
        
        case"mercurio":
        alert("Aca hace mas calor");
        break;
                        
        case"venus":              
        alert("Aca hace mas calor");
        break;
                        
        case"jupiter":
        alert("Aca hace mas frio");
        break;
                    
        case"urano":
        alert("Aca hace mas frio");
        break;
                        
        case"pluton":
        alert("Aca hace mas frio");
        break;                          
        }
    
    
    }






}
