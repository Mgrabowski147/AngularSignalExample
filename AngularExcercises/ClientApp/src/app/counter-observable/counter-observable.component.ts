import { Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-counter-observable',
  templateUrl: './counter-observable.component.html',
  styleUrl: './counter-observable.component.css'
})
export class CounterObservableComponent {
  public currentCount = new BehaviorSubject(0);
  public anotherCount = new BehaviorSubject(0);
  public sum?: Observable<number>;

  ngOnInit() {
    this.sum = combineLatest([this.currentCount, this.anotherCount]).pipe(
      map(([number1, number2]) => {
        return number1 + number2
      })
    )
  }

  public incrementCounter() {
    this.currentCount.next(this.currentCount.value + 1)
  }

  public incrementAnotherCounter() {
    this.anotherCount.next(this.anotherCount.value + 1)
  }

  public resetCounters() {
    this.currentCount.next(0);
    this.anotherCount.next(0);
  }
}

