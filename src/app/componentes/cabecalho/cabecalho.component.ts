import { Router } from '@angular/router';
import { Component, HostListener } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.usuarioService.retornaUsuario()

  constructor(private usuarioService: UsuarioService, private router: Router){}

  logout(){
    this.usuarioService.logout()
    this.router.navigate([''])
    location.reload()
  }
  scroll(){
    console.log('ok')
  }
}