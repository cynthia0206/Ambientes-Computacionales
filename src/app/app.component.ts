import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {}
/*
  constructor (private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    //get usuarios
    console.log('Usuarios:', this.usuarioService.getUsuarios());
    //add usuario
    this.usuarioService.addUsuario({ id: 4, nombre: 'Ana Torres', email: 'ana.torres@example.com', rol: 'Docente' });
    console.log(this.usuarioService.getUsuarios());
    //update usuario
    this.usuarioService.updateUsuario({ id: 1, nombre: 'Modificado', email: 'maria.gomez@example.com', rol: 'Admin' });
    console.log(this.usuarioService.getUsuarios());
    //deleteusuario
    this.usuarioService.deleteUsuario(2);
    console.log(this.usuarioService.getUsuarios());

  }
  */
