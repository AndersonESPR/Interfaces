interface TipoPersona{
    nombre : string;
    edad: number;
    pais : string;

    suma():number;
    
}


let intento1 : TipoPersona = {
    nombre : "David",
    edad : 12,
    pais : "colombia",
    suma (){
        let a = 2, b = 3;
        return a+b;
    }
}

interface persona {
    nombre : string,
    pais : string,
    nacimiento : Date,
    documento : Documento,
    trabajo : Trabajo
}

interface Documento {
    tipo : string,
    numero : string;
}
interface Trabajo{
    cargo: string
}

const Person : persona = {
    nombre : "Andrea ",
    pais : "Colombia",
    nacimiento : new Date ('2010-02-20'),
    trabajo :{
      cargo : "Tecnico en sistemas" 
    }, 
    documento : {
        tipo : 'CC',
        numero : "101010"
    }
}

console.table(Person);

const marcaCarros : string []=['ford','chevrolet', 'Mazda'];

console.log(marcaCarros[2]);


//const {nombre:name} = Person;

export {
    intento1
    
}