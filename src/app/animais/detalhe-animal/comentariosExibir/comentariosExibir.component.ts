import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comentarios } from './comentariosExibir';
import { ComentariosExibirService } from './comentariosExibir.service';

@Component({
  selector: 'app-comentariosExibir',
  templateUrl: './comentariosExibir.component.html',
  styleUrls: ['./comentariosExibir.component.css'],
})
export class ComentariosExibirComponent implements OnInit {
  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(
    private comentariosExibirService: ComentariosExibirService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentariosExibirService.buscaComentario(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }
}
