import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosPrivadosComponent } from './pagos-privados.component';

describe('PagosPrivadosComponent', () => {
  let component: PagosPrivadosComponent;
  let fixture: ComponentFixture<PagosPrivadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosPrivadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosPrivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
