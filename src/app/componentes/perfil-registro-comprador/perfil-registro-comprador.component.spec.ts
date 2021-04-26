import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRegistroCompradorComponent } from './perfil-registro-comprador.component';

describe('PerfilRegistroCompradorComponent', () => {
  let component: PerfilRegistroCompradorComponent;
  let fixture: ComponentFixture<PerfilRegistroCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilRegistroCompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRegistroCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
