import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsResetComponent } from './forms-reset.component';

describe('FormsResetComponent', () => {
  let component: FormsResetComponent;
  let fixture: ComponentFixture<FormsResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
