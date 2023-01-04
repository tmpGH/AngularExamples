import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchedDirtyComponent } from './touched-dirty.component';

describe('TouchedDirtyComponent', () => {
  let component: TouchedDirtyComponent;
  let fixture: ComponentFixture<TouchedDirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchedDirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchedDirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
