export class AporB {
  numero1: number = 0
  numero2: number = 0
  resultado: number = 0
  mensaje: string=''

  calcular(): void {
    for (let i = 1; i <= this.numero1; i++) {
      this.resultado += this.numero2;
      this.mensaje +=  this.numero2 + "+";
    }
  }
}
