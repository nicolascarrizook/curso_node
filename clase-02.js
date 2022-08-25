//Alumno: Carrizo Federico Nicolas

class Usuario {

    nombre   = '';
    apellido = '';

    constructor(nombre, apellido){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros   = [];
    }

    getFullName(){
        return `
                - Nombre:   ${this.nombre}
                - Apellido: ${this.apellido}
        `
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
        console.log(`Se agregó la mascota ${mascota}`);
    }

    countMascotas(){
        return `
                - Cantidad de mascotas: ${this.mascotas.length}
        `
    }

    addBook(nombre, autor){
        this.libros.push({
            nombre: nombre,
            autor: autor
        });
        console.log(`Se agregó el libro ${nombre} por ${autor}`);
    }

    getBooksName(){
        return `
                - Cantidad de libros: ${this.libros.length}
                - Libros: ${this.libros.map(libro => libro.nombre)}
        `
    }
}

const usuario1 = new Usuario('Federico', 'Carrizo');
console.clear();
console.log('----------------------------------------------');
console.log('Información de usuario1: ', usuario1.getFullName());
console.log('----------------------------------------------');

usuario1.addMascota('chichi');
usuario1.addMascota('pochi');

console.log('----------------------------------------------');
console.log(usuario1.countMascotas());
console.log('----------------------------------------------');

usuario1.addBook('El señor de los anillos', 'J.R.R. Tolkien');
usuario1.addBook('Harry Potter', 'J.K. Rowling');
usuario1.addBook('El principito', 'Antoine de Saint-Exupéry');

console.log('----------------------------------------------');
console.log(usuario1.getBooksName());
console.log('----------------------------------------------');