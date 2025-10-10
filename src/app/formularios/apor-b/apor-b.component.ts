import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AporB } from './multiplica';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apor-b',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent {
  formulario!:FormGroup
  mensaje:string='';
  objMult= new AporB()

  constructor() { }

  ngOnInit(): void{
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl(''),
    })
  }

  multNumeros(): void{
    this.objMult.numero1 = this.formulario.value.numero1;
    this.objMult.numero2 = this.formulario.value.numero2;
    this.objMult.calcular()
    this.mensaje= "El procedimiento de esta operación es " + this.objMult.mensaje + '=' + this.objMult.resultado;
  }
}
