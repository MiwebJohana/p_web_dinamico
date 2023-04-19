import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsPresentacionComponent } from './modals-presentacion.component';

describe('ModalsPresentacionComponent', () => {
  let component: ModalsPresentacionComponent;
  let fixture: ComponentFixture<ModalsPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsPresentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
