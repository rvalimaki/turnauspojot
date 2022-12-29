import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopScorersComponent } from './top-scorers.component';

describe('TopScorersComponent', () => {
  let component: TopScorersComponent;
  let fixture: ComponentFixture<TopScorersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopScorersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopScorersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
