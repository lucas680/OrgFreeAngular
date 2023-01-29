import { AnimaisService } from './../animais/animais.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animais, Animal } from '../animais/animais';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(private animaisService: AnimaisService){
  }

  ngOnInit(): void {
  }
}
