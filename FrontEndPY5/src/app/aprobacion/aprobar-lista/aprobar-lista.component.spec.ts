import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarListaComponent } from './aprobar-lista.component';

describe('AprobarListaComponent', () => {
  let component: AprobarListaComponent;
  let fixture: ComponentFixture<AprobarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobarListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
