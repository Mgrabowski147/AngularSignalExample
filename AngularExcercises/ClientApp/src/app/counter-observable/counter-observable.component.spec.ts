import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterObservableComponent } from './counter-observable.component';

describe('CounterObservableComponent', () => {
  let component: CounterObservableComponent;
  let fixture: ComponentFixture<CounterObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
