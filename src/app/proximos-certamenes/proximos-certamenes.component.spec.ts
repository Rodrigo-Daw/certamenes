import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosCertamenesComponent } from './proximos-certamenes.component';

describe('ProximosCertamenesComponent', () => {
  let component: ProximosCertamenesComponent;
  let fixture: ComponentFixture<ProximosCertamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximosCertamenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximosCertamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
