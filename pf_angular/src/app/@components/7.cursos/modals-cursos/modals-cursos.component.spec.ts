import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsCursosComponent } from './modals-cursos.component';

describe('ModalsCursosComponent', () => {
  let component: ModalsCursosComponent;
  let fixture: ComponentFixture<ModalsCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
