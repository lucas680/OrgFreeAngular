import { AnimaisService } from '../animais/animais.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animais, Animal } from '../animais/animais';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit{

  produtos$!: Observable<Animais>

  constructor(private animaisService: AnimaisService){
  }

  ngOnInit(): void {
    this.produtos$ = this.animaisService.buscarTodos()
  }
}
