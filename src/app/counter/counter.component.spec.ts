import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { Component,DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'
import { CommentStmt } from '@angular/compiler';
// debug elements

describe('CounterComponent', () => {
   let component: CounterComponent;
   let fixture: ComponentFixture<CounterComponent>;
   let debugElement: DebugElement;
   let htmlElement: HTMLElement;


// asynchronous template tobe loaded such as component, HTML, CSS
   beforeEach(async( () => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
   })
  );

  // setting up components
  beforeEach( () => {
    // return the testing version of component
    fixture = TestBed.createComponent(CounterComponent);
    // get testing version component of instance
    fixture.detectChanges();
    // get accessibility of component properties , methods
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('Get current value of counter', () => {
    expect(htmlElement.textContent).toEqual('Number : 1');
  });

  it('Increment the number', () => {
    // get initial value
    const initialValue = component.counter;
    console.log('>>>>',initialValue);
    // call increment function
    component.increment();
    console.log('get increment value >>>', component.counter);
    // get new value after increment and store in variable
    const newValue = component.counter;
    console.log("get increment value >>>", newValue);
    expect(newValue).toBeGreaterThan(initialValue);
    expect(initialValue).toBeLessThan(newValue);
  });


  it('Decrement the number', () => {
    const initialValue = component.counter;
    component.decrement();
    const newValue = component.counter;
    console.log("Decrement the number >>>", newValue);
    expect(newValue).toBeLessThan(initialValue);
  });

  it('Get screen value to be " number : 2 "', () =>{
    // call method
      component.increment();
      // get changes in Ui this method will intimate
      fixture.detectChanges();
    expect(htmlElement.textContent).toBe("Number : 2");
  });
});
