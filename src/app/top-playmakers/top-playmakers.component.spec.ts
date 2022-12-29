import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopPlaymakersComponent } from './top-playmakers.component';

describe('TopPlaymakersComponent', () => {
  let component: TopPlaymakersComponent;
  let fixture: ComponentFixture<TopPlaymakersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPlaymakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlaymakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
