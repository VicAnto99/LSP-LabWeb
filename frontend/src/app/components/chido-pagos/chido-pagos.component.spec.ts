import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidoPagosComponent } from './chido-pagos.component';

describe('ChidoPagosComponent', () => {
  let component: ChidoPagosComponent;
  let fixture: ComponentFixture<ChidoPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChidoPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChidoPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
