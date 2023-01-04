import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithCustomFieldComponent } from './form-with-custom-field.component';

describe('FormWithCompComponent', () => {
  let component: FormWithCustomFieldComponent;
  let fixture: ComponentFixture<FormWithCustomFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithCustomFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
