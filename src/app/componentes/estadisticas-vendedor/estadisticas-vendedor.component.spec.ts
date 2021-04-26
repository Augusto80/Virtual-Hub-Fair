import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasVendedorComponent } from './estadisticas-vendedor.component';

describe('EstadisticasVendedorComponent', () => {
  let component: EstadisticasVendedorComponent;
  let fixture: ComponentFixture<EstadisticasVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticasVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
