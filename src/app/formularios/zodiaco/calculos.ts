export class zodiacoCalculos {
  nombre: string = '';
  apellidoP: string = '';
  apellidoM: string = '';
  nombreCompleto: string = '';

  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  edad: number = 0;

  signo: string = '';
  imagen: string = '';

  calcular(): void {
    this.nombreCompleto =
      ' ' + this.nombre + ' ' + this.apellidoP + ' ' + this.apellidoM;

    this.edad = this.calcularEdad();
    this.signo = this.calcularSigno();
  }

  calcularEdad(): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.anio;

    const mesActual = hoy.getMonth() + 1;
    const diaActual = hoy.getDate();

    if (
      mesActual < this.mes ||
      (mesActual === this.mes && diaActual < this.dia)
    ) {
      edad--;
    }

    return edad;
  }

  calcularSigno(): string {
    const indice = (this.anio - 1900) % 12;

    switch (indice) {
      case 0:
        this.signo = 'Rata';
        this.imagen =
          'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f400.png';
        break;
      case 1:
        this.signo = 'Buey';
        this.imagen = 'https://cdn-icons-png.flaticon.com/512/3543/3543053.png';
        break;
      case 2:
        this.signo = 'Tigre';
        this.imagen = 'https://cdn-icons-png.flaticon.com/512/1998/1998804.png';
        break;
      case 3:
        this.signo = 'Conejo';
        this.imagen =
          'https://cdn-icons-png.flaticon.com/512/10806/10806489.png';
        break;
      case 4:
        this.signo = 'Dragón';
        this.imagen = 'https://cdn-icons-png.flaticon.com/512/1999/1999687.png';
        break;
      case 5:
        this.signo = 'Serpiente';
        this.imagen = 'https://cdn-icons-png.flaticon.com/512/616/616487.png';
        break;
      case 6:
        this.signo = 'Caballo';
        this.imagen = 'https://cdn-icons-png.flaticon.com/512/2219/2219021.png';
        break;
      case 7:
        this.signo = 'Cabra';
        this.imagen =
          'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f410.png';
        break;
      case 8:
        this.signo = 'Mono';
        this.imagen = 'https://cdn-icons-png.flaticon.com/512/1998/1998721.png';
        break;
      case 9:
        this.signo = 'Gallo';
        this.imagen = 'https://cdn-icons-png.flaticon.com/512/5776/5776743.png';
        break;
      case 10:
        this.signo = 'Perro';
        this.imagen =
          'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/1024px/1f436.png';
        break;
      case 11:
        this.signo = 'Cerdo';
        this.imagen = 'https://cdn-icons-png.flaticon.com/512/3616/3616504.png';
        break;
    }

    return this.signo;
  }
}
