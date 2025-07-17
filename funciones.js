


export function capitalize(palabra) {
    let longitud_palabra = palabra.length
    let primera_letra= palabra[0].toLocaleUpperCase()
    let resto_nombre;
    let nombre_capitalizado;
    
    if (palabra.includes("-")){
        let indice = palabra.indexOf("-")
        let primera_letra_after_guion = palabra[indice + 1].toLocaleUpperCase()
        resto_nombre =  palabra.toLocaleLowerCase().slice(1,indice)
        let resto_nombre_after_guion = palabra.toLocaleLowerCase().slice(indice+2,longitud_palabra)
        nombre_capitalizado = primera_letra + resto_nombre + "-" + primera_letra_after_guion + resto_nombre_after_guion 
        return nombre_capitalizado

    }else {
        let resto_nombre = palabra.toLocaleLowerCase().slice(1,longitud_palabra)
        nombre_capitalizado = primera_letra + resto_nombre
        return nombre_capitalizado
    }
}

