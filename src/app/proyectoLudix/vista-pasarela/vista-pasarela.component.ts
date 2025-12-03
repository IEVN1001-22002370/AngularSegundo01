import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vista-pasarela',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vista-pasarela.component.html',
  styleUrls: ['./vista-pasarela.component.css']
})
export class VistaPasarelaComponent {

  metodo: string | null = null;
  compraExitosa = false;
  error = '';

  // Datos generados para OXXO o Transferencia
  referenciaOxxo: string = '';
  cuentaTransfer: string = '';
  clabeTransfer: string = '';

  tarjeta = {
    numero: '',
    nombre: '',
    mes: '',
    anio: '',
    cvc: ''
  };

  seleccionarMetodo(m: string) {
    this.metodo = m;
    this.error = '';
    this.compraExitosa = false;

    // Generar datos aleatorios según el método
    if (m === 'oxxo') {
      this.generarReferenciaOxxo();
    }

    if (m === 'transferencia') {
      this.generarTransferencia();
    }
  }

  generarReferenciaOxxo() {
    // Genera una referencia Oxxo de 14–18 números
    this.referenciaOxxo = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
  }

  generarTransferencia() {
    // Cuenta bancaria (10 dígitos)
    this.cuentaTransfer = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');

    // CLABE (18 dígitos)
    this.clabeTransfer = Array.from({ length: 18 }, () => Math.floor(Math.random() * 10)).join('');
  }

  validarTarjeta(): boolean {
    if (!this.tarjeta.numero || this.tarjeta.numero.length < 16) return false;
    if (!this.tarjeta.nombre) return false;
    if (!this.tarjeta.mes || Number(this.tarjeta.mes) < 1 || Number(this.tarjeta.mes) > 12) return false;
    if (!this.tarjeta.anio || this.tarjeta.anio.length < 2) return false;
    if (!this.tarjeta.cvc || this.tarjeta.cvc.length < 3) return false;

    return true;
  }

  realizarCompra() {
    this.error = '';
    this.compraExitosa = false;

    if (!this.metodo) {
      this.error = 'Debes seleccionar un método de pago.';
      return;
    }

    if (this.metodo === 'tarjeta' && !this.validarTarjeta()) {
      this.error = 'Los datos de la tarjeta no son válidos.';
      return;
    }

    setTimeout(() => {
      this.compraExitosa = true;
    }, 600);
  }
}
