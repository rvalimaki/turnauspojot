import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPigsComponent } from './total-pigs.component';

describe('TotalPigsComponent', () => {
  let component: TotalPigsComponent;
  let fixture: ComponentFixture<TotalPigsComponent>;

  beforeEach(async(() => {
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
