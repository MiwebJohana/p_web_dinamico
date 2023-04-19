import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsFooterComponent } from './modals-footer.component';

describe('ModalsFooterComponent', () => {
  let component: ModalsFooterComponent;
  let fixture: ComponentFixture<ModalsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
