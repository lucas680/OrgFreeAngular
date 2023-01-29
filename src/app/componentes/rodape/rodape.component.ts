import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {
  constructor(private usuarioService: UsuarioService){}

  user$ = this.usuarioService.retornaUsuario()
}
