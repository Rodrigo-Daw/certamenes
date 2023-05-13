import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirseACertamenComponent } from './inscribirse-acertamen.component';

describe('InscribirseACertamenComponent', () => {
  let component: InscribirseACertamenComponent;
  let fixture: ComponentFixture<InscribirseACertamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscribirseACertamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscribirseACertamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
