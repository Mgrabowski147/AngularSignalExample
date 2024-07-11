import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  // Writable signals - they have interface that allows them to be modified manually
  public currentCount: WritableSignal<number> = signal(0);
  public anotherCount: WritableSignal<number>  = signal(0);

  // Computed signals - derive value from other signals
  // Lazy - only calculated when it's read, then the calculated value is cached
  // The simplicity of this is where signals shine in comparison to rxjs
  public sum: Signal<number> = computed(() => this.currentCount() + this.anotherCount());

  constructor() {
    // Effect - executed every time any of the dependency signals changes value
    // Must be in injection context - either constructor, or assigned to a field. Otherwise injection 
    // context must be passed manually
    // Executes asynchronously, during the change detection process - avoid changing state, it might 
    // result in ExpressionChangedAfterItHasBeenChecked 
    // In angular 17 still in developer preview
    effect(() => {
      console.log(`The current count is: ${this.currentCount()}`);
    });
    effect(() => {
      console.log(`Another count is: ${this.anotherCount()}`);
    });
    effect(() => {
      console.log(`sum is: ${this.sum()}`);
    });
  }

  public incrementCounter() {
    this.currentCount.update(value => value + 1);
  }
  
  public incrementAnotherCounter() {
    this.anotherCount.update(value => value + 1);
  }

  public resetCounters() {
    this.currentCount.set(0);
    this.anotherCount.set(0);
  }
}
