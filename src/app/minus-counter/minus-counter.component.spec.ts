import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusCounterComponent } from './minus-counter.component';

describe('MinusCounterComponent', () => {
  let component: MinusCounterComponent;
  let fixture: ComponentFixture<MinusCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinusCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinusCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
