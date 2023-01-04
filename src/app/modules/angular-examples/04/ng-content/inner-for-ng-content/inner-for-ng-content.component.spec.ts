import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerForNgContentComponent } from './inner-for-ng-content.component';

describe('InnerForNgContentComponent', () => {
  let component: InnerForNgContentComponent;
  let fixture: ComponentFixture<InnerForNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerForNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerForNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
