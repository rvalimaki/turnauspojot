import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopGoalScorersComponent } from './top-goal-scorers.component';

describe('TopGoalScorersComponent', () => {
  let component: TopGoalScorersComponent;
  let fixture: ComponentFixture<TopGoalScorersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGoalScorersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGoalScorersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
