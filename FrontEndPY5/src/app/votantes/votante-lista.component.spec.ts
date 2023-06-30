import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotanteListaComponent } from './votante-lista.component';

describe('VotanteListaComponent', () => {
  let component: VotanteListaComponent;
  let fixture: ComponentFixture<VotanteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotanteListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotanteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
