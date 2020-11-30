import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchLandingComponent } from './launch-landing.component';

describe('LaunchLandingComponent', () => {
  let component: LaunchLandingComponent;
  let fixture: ComponentFixture<LaunchLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
