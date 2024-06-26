saludo("Angel")

function saludo(nombre) {

    var variable1 = "10"; // alcance global
    let variable2 = 10;  //
    const variable3 = false;

    if(variable1 === variable2){
        console.log("entro al if")
    }
    else{
        console.log("No entro")
    }

    switch ("key") {
        case value:
            
            break;
    
        default:
            break;
    }


    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

    console.log("Hola ", nombre)
    
}