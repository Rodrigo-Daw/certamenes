import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeBandasComponent } from './lista-de-bandas.component';

describe('ListaDeBandasComponent', () => {
  let component: ListaDeBandasComponent;
  let fixture: ComponentFixture<ListaDeBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeBandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeBandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
