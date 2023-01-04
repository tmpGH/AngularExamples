import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesFormFieldComponent } from './names-form-field.component';

describe('NamesFormFieldComponent', () => {
  let component: NamesFormFieldComponent;
  let fixture: ComponentFixture<NamesFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
