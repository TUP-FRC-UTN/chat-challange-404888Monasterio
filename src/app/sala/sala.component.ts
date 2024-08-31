import { Component } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";
import { Mensaje } from '../models/mensaje';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  listaMensajes: Mensaje[] = [];
  listaUsuarios: Usuario[] = [
    {nombre: 'Pepe', color: 'red'},
    {nombre: 'Maria', color: 'green'}
  ];

  onMensajeRecibido(mensaje: Mensaje){
    this.listaMensajes.unshift(mensaje);
  }
}
