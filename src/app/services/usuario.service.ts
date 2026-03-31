import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com' , rol:'admin' },
    { id: 2, nombre: 'María Gómez', email: 'maria.gomez@example.com', rol:'user' },
    { id: 3, nombre: 'Carlos López', email: 'carlos.lopez@example.com', rol:'user' }
  ];
// obtener la lista de usuarios
getUsuarios(): Usuario[] {
  return this.usuarios;
}
// agregar un nuevo usuario
addUsuario(usuario: Usuario): void {
  const nuevoId =Math.max(...this.usuarios.map(u => u.id)) + 1;
  this.usuarios.push({ ...usuario, id: nuevoId });
  }
  updateUsuario(editedUsuario: Usuario): void {
    const index = this.usuarios.findIndex(u => u.id === editedUsuario.id);
    //para que no existan usuarios menos 1, es decir que exista el usuario
    if (index !== -1) {
      this.usuarios[index] = editedUsuario;
    }
  }
  //eliminar un usuario
  deleteUsuario(id: number): void {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }

}

