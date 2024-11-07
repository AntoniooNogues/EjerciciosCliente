import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialNavegacionComponent } from './historial-navegacion.component';

describe('HistorialNavegacionComponent', () => {
  let component: HistorialNavegacionComponent;
  let fixture: ComponentFixture<HistorialNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialNavegacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
