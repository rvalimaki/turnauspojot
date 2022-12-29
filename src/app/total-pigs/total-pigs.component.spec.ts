import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TotalPigsComponent } from './total-pigs.component';

describe('TotalPigsComponent', () => {
  let component: TotalPigsComponent;
  let fixture: ComponentFixture<TotalPigsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
