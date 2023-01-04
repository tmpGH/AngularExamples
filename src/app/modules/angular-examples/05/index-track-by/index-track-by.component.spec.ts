import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTrackByComponent } from './index-track-by.component';

describe('IndexTrackByComponent', () => {
  let component: IndexTrackByComponent;
  let fixture: ComponentFixture<IndexTrackByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTrackByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
