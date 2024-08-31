import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Mensaje } from '../models/mensaje';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input() usuario: Usuario = {
    nombre: "",
    color: ""
  };
  @Input() listaMensajes: Mensaje[] = [];
  @Output() mensajeEnviado = new EventEmitter<Mensaje>();
  contenidoMensaje: string = "";

  onGuardarClicked(){
    this.mensajeEnviado.emit({
      usuario: this.usuario,
      contenido: this.contenidoMensaje
    });
    this.contenidoMensaje = "";
  }
}
