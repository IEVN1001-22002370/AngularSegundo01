import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-recuperar',
  standalone: true,
  templateUrl: './vista-recuperar.component.html',
  styleUrls: ['./vista-recuperar.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VistaRecuperarComponent implements OnInit {

  step = 1;

  emailForm: any;
  codeForm: any;
  passwordForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.codeForm = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
    });
  }

  enviarCodigo() {
    if (this.emailForm.invalid) return;
    this.step = 2;
  }

  verificarCodigo() {
    if (this.codeForm.invalid) return;
    this.step = 3;
  }

  reenviarCodigo(event: Event) {
    event.preventDefault();
    alert('Código reenviado.');
  }

  restablecerContrasena() {
    if (this.passwordForm.invalid) return;

    const { password, confirm } = this.passwordForm.value;
    if (password !== confirm) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.step = 4;
  }
}
