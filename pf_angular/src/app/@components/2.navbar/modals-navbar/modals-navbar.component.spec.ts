import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsNavbarComponent } from './modals-navbar.component';

describe('ModalsNavbarComponent', () => {
  let component: ModalsNavbarComponent;
  let fixture: ComponentFixture<ModalsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
