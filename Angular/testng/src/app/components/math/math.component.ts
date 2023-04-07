import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {

  oddeven : any ;
  result : string = "";
  result1 : any;
  fact : number =1;
  funoddeven (n: number){
    if(n%2==0){
       this.result="Your number is even.";
    }
    else if(n%2!=0){
       this.result="Your number is odd.";
    }
  }

  factorial(n:number){
    for(var i =1;i<=n;i++){this.fact = this.fact*i;}
    this.result1=this.fact;
    this.fact =1;
  }
  



}
