import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsProyectosComponent } from './modals-proyectos.component';

describe('ModalsProyectosComponent', () => {
  let component: ModalsProyectosComponent;
  let fixture: ComponentFixture<ModalsProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
