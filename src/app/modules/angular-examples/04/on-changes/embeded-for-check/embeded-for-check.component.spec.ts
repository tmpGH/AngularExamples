import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbededForCheckComponent } from './embeded-for-check.component';

describe('EmbededForCheckComponent', () => {
  let component: EmbededForCheckComponent;
  let fixture: ComponentFixture<EmbededForCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbededForCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbededForCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
