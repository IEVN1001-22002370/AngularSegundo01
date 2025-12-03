import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RespuestaRegistro {
  mensaje: string;
  exito: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProyectoapiService {
  private API_URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any) {
    return this.http.post('http://127.0.0.1:5000/usuarios', usuario);
  }

  obtenerUsuarios() {
    return this.http.get('http://127.0.0.1:5000/usuarios');
  }

  eliminarUsuario(id: number) {
    return this.http.delete(`http://127.0.0.1:5000/usuarios/${id}`);
  }

  actualizarUsuario(id: number, datos: any) {
    return this.http.put(`http://127.0.0.1:5000/usuarios/${id}`, datos);
  }

  login(credentials: any) {
    return this.http.post('http://127.0.0.1:5000/login', credentials);
  }
}
