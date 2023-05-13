import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuarBandaComponent } from './puntuar-banda.component';

describe('PuntuarBandaComponent', () => {
  let component: PuntuarBandaComponent;
  let fixture: ComponentFixture<PuntuarBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntuarBandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntuarBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
