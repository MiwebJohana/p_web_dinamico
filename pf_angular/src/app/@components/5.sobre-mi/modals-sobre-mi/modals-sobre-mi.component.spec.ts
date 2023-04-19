import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsSobreMiComponent } from './modals-sobre-mi.component';

describe('ModalsSobreMiComponent', () => {
  let component: ModalsSobreMiComponent;
  let fixture: ComponentFixture<ModalsSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
