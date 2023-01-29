import { TestBed } from '@angular/core/testing';

import { ComentariosExibirService } from './comentariosExibir.service';

describe('ComentariosService', () => {
  let service: ComentariosExibirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentariosExibirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
