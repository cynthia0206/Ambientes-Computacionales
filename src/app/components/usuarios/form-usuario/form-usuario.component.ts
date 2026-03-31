import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {

  @Input() usuario: Usuario | null = null;

  @Output() guardar = new EventEmitter<Usuario>();
  @Output() cancelar = new EventEmitter<void>();

  usuarioForm: Usuario = {
    id: 0,
    nombre: '',
    email: '',
    rol: ''
  };

  ngOnInit(): void {
    if (this.usuario) {
      this.usuarioForm = { ...this.usuario };
    }
  }

  guardarUsuario() {
    this.guardar.emit(this.usuarioForm);
  }

  cancelarFormulario() {
    this.cancelar.emit();
  }
}
