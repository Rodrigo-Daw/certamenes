import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBandaComponent } from './editar-banda.component';

describe('EditarBandaComponent', () => {
  let component: EditarBandaComponent;
  let fixture: ComponentFixture<EditarBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
