import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosExibirComponent } from './comentariosExibir.component';

describe('ComentariosComponent', () => {
  let component: ComentariosExibirComponent;
  let fixture: ComponentFixture<ComentariosExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
