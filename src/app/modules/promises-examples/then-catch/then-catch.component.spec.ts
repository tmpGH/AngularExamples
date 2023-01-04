import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThenCatchComponent } from './then-catch.component';

describe('ThenComponent', () => {
  let component: ThenCatchComponent;
  let fixture: ComponentFixture<ThenCatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThenCatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThenCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
