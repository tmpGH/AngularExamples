import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterNavigateComponent } from './router-navigate.component';

describe('RouterNavigateComponent', () => {
  let component: RouterNavigateComponent;
  let fixture: ComponentFixture<RouterNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
