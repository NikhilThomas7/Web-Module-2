import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/model/item';



@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit,OnChanges,OnDestroy {
  ngOnInit(): void {
    // throw new Error('ngOnInit.');
    console.log('ngOnInit.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('ngonChange');
    console.log('ngOnchange.');
  }
  ngOnDestroy(): void {
    // throw new Error('ngOnDestroy');
    console.log('ngOnDestroy.');
  }

  constructor(){
    console.log('from constructor')
  }

  productId: number =12345;
  description = "Apple Mac Book M1";
  qty : number = 0;
  price : number = 10023400;
  
  available : string = "green";
  delivery : string = "red";
  orderedQty : number =0;
  isMember = true;
  isQtyAvailable = this.qty>0;
 
  products = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];

takeOrder() : void{
  console.log("order placed" + this.orderedQty);
}



items : Item[] = [
  new Item(1,'iphone','smartphone',10000,2),
  new Item(2,'oneplus','smartphone',40000,2),
  new Item(3,'samsung','smartphone',55000,2)
]





  
}
