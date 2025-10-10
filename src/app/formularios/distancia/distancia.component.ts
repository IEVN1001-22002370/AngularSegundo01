import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Operaciones } from './distancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
  objDistancia = new Operaciones()

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''), //FormControl define el compo dentro del FormGroup
      numero2: new FormControl(''),
      numero3: new FormControl(''),
      numero4: new FormControl('')
    });
  }

  opNumeros(): void {
    this.objDistancia.x1 = this.formulario.value.numero1;
    this.objDistancia.y1 = this.formulario.value.numero2;
    this.objDistancia.x2 = this.formulario.value.numero3;
    this.objDistancia.y2 = this.formulario.value.numero4;
    this.objDistancia.calcular()
    this.resultado=this.objDistancia.resultado
  }

}
