import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPorCertamenComponent } from './listar-por-certamen.component';

describe('ListarPorCertamenComponent', () => {
  let component: ListarPorCertamenComponent;
  let fixture: ComponentFixture<ListarPorCertamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPorCertamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPorCertamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
