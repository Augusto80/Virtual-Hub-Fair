import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramarCitaVendedorComponent } from './programar-cita-vendedor.component';

describe('ProgramarCitaVendedorComponent', () => {
  let component: ProgramarCitaVendedorComponent;
  let fixture: ComponentFixture<ProgramarCitaVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramarCitaVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramarCitaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
