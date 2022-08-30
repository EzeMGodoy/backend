class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros || [];
    this.mascotas = mascotas || [];
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }

  getBookNames() {
    return this.libros.map(({ nombre }) => nombre);
  }
}

const usuario = new Usuario("Hernesto", "Farias");
console.log(`Nombre completo: ${usuario.getFullName()}`);

usuario.addMascota("Henry");
console.log(`Cantidad de mascotas: ${usuario.countMascotas()}`);

usuario.addBook("The little prince", "Antoine");
console.log(`Libro preferido: ${usuario.getBookNames()}`);
