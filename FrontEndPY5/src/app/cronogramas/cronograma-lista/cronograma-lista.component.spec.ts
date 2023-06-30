import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaListaComponent } from './cronograma-lista.component';

describe('CronogramaListaComponent', () => {
  let component: CronogramaListaComponent;
  let fixture: ComponentFixture<CronogramaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
