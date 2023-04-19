import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsBannerComponent } from './modals-banner.component';

describe('ModalsBannerComponent', () => {
  let component: ModalsBannerComponent;
  let fixture: ComponentFixture<ModalsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
