import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsComponent } from './maths.component';

describe('MathsComponent', () => {
  let component: MathsComponent;
  let fixture: ComponentFixture<MathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Checking math component', () => {
    expect(component).toBeTruthy();
  });

  it('Number are passed -ve !!', () => {
    var result = component.addition(-1);
    expect(result).toBe(0);
  });

  it('Number are passed +ve but result must be 4 !!', () => {
    var result = component.addition(3);
    expect(result).toBe(4);
  });

  it('Number Not in range :', () => {
    var result = component.addition(10);
    expect(result).toMatch("NOT IN RANGE");
  });

  it('string do not pass', () => {
    var result = component.addition('hello');
    expect(result).toMatch("String cannot passed");
  });

  it('check Shahbaaz name contain in given greetings !', () => {
    var result = component.greeting('Shahbaaz');
    // it will return full string and check whether it contain shahbaaz name
    expect(result).toContain("Shahbaaz");
  });
});



