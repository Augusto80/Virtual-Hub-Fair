import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRegistroVendedorComponent } from './perfil-registro-vendedor.component';

describe('PerfilRegistroVendedorComponent', () => {
  let component: PerfilRegistroVendedorComponent;
  let fixture: ComponentFixture<PerfilRegistroVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilRegistroVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRegistroVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
