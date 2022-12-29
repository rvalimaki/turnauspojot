import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameEventComponent } from './game-event.component';

describe('GameEventComponent', () => {
  let component: GameEventComponent;
  let fixture: ComponentFixture<GameEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
