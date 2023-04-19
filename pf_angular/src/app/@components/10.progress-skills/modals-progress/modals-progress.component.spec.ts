import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsProgressComponent } from './modals-progress.component';

describe('ModalsProgressComponent', () => {
  let component: ModalsProgressComponent;
  let fixture: ComponentFixture<ModalsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
