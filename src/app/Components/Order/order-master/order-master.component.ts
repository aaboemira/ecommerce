import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CartData } from 'src/app/ViewModels/cart-data';


@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit,OnChanges {
  catList: ICategory[];
  cartList:CartData[]=[];
  selectedCatID:number=0;
  totalPrice:number=0;
  constructor() {
    this.catList = [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Tablet" },
      { id: 3, name: "Mobile" }
    ]
   }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }
  onBuy(product:CartData){
    this.totalPrice+=product.price*product.quantity
    this.cartList.push(product);
  }

}
