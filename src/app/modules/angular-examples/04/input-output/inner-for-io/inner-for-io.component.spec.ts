import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerForIOComponent } from './inner-for-io.component';

describe('InnerComponent', () => {
  let component: InnerForIOComponent;
  let fixture: ComponentFixture<InnerForIOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerForIOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerForIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
