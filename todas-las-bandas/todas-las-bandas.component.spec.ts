import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasLasBandasComponent } from './todas-las-bandas.component';

describe('TodasLasBandasComponent', () => {
  let component: TodasLasBandasComponent;
  let fixture: ComponentFixture<TodasLasBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodasLasBandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodasLasBandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
