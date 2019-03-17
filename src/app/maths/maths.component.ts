import {Component, OnInit }from '@angular/core'; 

@Component( {
selector:'app-maths', 
templateUrl:'./maths.component.html', 
styleUrls:['./maths.component.sass']
})
export class MathsComponent implements OnInit {

constructor() {}

ngOnInit() {
}

  addition = (num) =>  {
    if (num < 0) {
      return 0; 
    } else if(num > 1 && num < 9){
      return num + 1; 
    }else if(isNaN(num)){
      return 'String cannot passed';
    }
    return 'NOT IN RANGE';
  }

  greeting = (name) => {
    if(name === ''){
      return 'NO TEXT ADDED';
    }
    return 'Hello I am '+name;
  }
}
