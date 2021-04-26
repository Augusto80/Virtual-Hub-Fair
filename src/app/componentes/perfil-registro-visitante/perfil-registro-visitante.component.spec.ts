import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRegistroVisitanteComponent } from './perfil-registro-visitante.component';

describe('PerfilRegistroVisitanteComponent', () => {
  let component: PerfilRegistroVisitanteComponent;
  let fixture: ComponentFixture<PerfilRegistroVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilRegistroVisitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRegistroVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
