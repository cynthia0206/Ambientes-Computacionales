import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormUsuarioComponent } from '../form-usuario/form-usuario.component';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule,FormUsuarioComponent],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  usuarioSeleccionado: Usuario | null = null;
  mostrarFormulario: boolean = false;
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit(): void {
    this.cargarUsuarios();
  }
  cargarUsuarios() : void {
    this.usuarios = this.usuarioService.getUsuarios();
  }
  abrirFormulario() : void {
    this.usuarioSeleccionado = null;
    this.mostrarFormulario = true;
  }
  abrirFormularioEdicion(usuario: Usuario) : void {
    this.usuarioSeleccionado = usuario;
    this.mostrarFormulario = true;
  }
  guardarUusuarios(usuario: Usuario) : void {
    if (usuario.id) {
      this.usuarioService.updateUsuario(usuario);
    } else {
      this.usuarioService.addUsuario(usuario);
    }
    this.mostrarFormulario = false;
    this.cargarUsuarios();
  }
  editarUsuario(usuario: Usuario) : void {
    this.usuarioService.updateUsuario(usuario);
    this.cargarUsuarios();
  }
  eliminarUsuario(id: number) : void {
    this.usuarioService.deleteUsuario(id);
    this.cargarUsuarios();
  }
  cancelarEdicion() : void {
    this.mostrarFormulario = false;
  }


}
