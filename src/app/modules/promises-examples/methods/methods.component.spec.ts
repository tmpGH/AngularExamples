import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsComponent } from './methods.component';

describe('ErrorsComponent', () => {
  let component: MethodsComponent;
  let fixture: ComponentFixture<MethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
