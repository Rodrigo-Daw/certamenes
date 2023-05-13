import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCertamenComponent } from './nuevo-certamen.component';

describe('NuevoCertamenComponent', () => {
  let component: NuevoCertamenComponent;
  let fixture: ComponentFixture<NuevoCertamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCertamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoCertamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
