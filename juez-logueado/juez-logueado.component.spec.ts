import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuezLogueadoComponent } from './juez-logueado.component';

describe('JuezLogueadoComponent', () => {
  let component: JuezLogueadoComponent;
  let fixture: ComponentFixture<JuezLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuezLogueadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuezLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
