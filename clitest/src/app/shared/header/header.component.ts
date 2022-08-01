import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public img = '';
  public nombre = '';
  public email = '';

  constructor(private usuarioService: UsuarioService) {

    this.img = this.usuarioService.usuario.getImage;
    this.nombre = this.usuarioService.usuario.nombre;
    this.email = this.usuarioService.usuario.email;
   }

  logout() {
    this.usuarioService.logout();
  }

}
