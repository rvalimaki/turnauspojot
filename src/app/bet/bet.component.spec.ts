import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BetComponent } from './bet.component';

describe('BetComponent', () => {
  let component: BetComponent;
  let fixture: ComponentFixture<BetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
