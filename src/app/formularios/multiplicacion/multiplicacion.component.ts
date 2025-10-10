import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {
  formulario!: FormGroup;
  resultado!: number;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''), //FormControl define el compo dentro del FormGroup
      numero2: new FormControl('')
    });
  }

  multNumeros(): void {
    let n1 = this.formulario.value.numero1;
    let n2 = this.formulario.value.numero2;
    this.resultado = n1 * n2;
  }

}
