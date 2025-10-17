import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { zodiacoCalculos } from './calculos';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  mensaje1: string = '';
  mensaje2: number=0;
  mensaje3: string='';
  sexo: string= '';
  imagen: string='';
  obj = new zodiacoCalculos();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidoP: new FormControl(''),
      apellidoM: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    })
  }

  imprimir(): void {
    this.obj.nombre = this.formulario.value.nombre;
    this.obj.apellidoP = this.formulario.value.apellidoP;
    this.obj.apellidoM = this.formulario.value.apellidoM;
    this.obj.dia=this.formulario.value.dia;
    this.obj.mes=this.formulario.value.mes;
    this.obj.anio=this.formulario.value.anio;


    this.obj.calcular()
    this.mensaje1 = this.obj.nombreCompleto;
    this.mensaje2=this.obj.edad;
    this.mensaje3=this.obj.signo;
    this.imagen = this.obj.imagen;
  }

}
