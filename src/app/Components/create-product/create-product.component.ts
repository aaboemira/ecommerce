import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  
  constructor( private productsService:ProductsService,private routerService:Router) { }

  ngOnInit(): void {
  }
  addProduct(name:string,price:number,quantity:number,imgURL:string){
    this.productsService.getAllProducts()
    const product:IProduct={
      name:name,price:price,quantity:quantity,imgURL:imgURL,categoryID:1,id:15
    } ;
    const observer={
      next:(data:IProduct)=>{
        alert("Product added successful")
        this.routerService.navigateByUrl('/Products')
      },
      error:(err:Error)=>{
        console.log("error is"+err.message)
      }
    }
  //   this.productsService.addProduct(product).subscribe((data)=>{
  //     alert("Product added successful")
  //     this.routerService.navigateByUrl('/Products')
      
  // },(error)=>{
  //   console.log("error is"+error)
  // });
  this.productsService.addProduct(product).subscribe(observer)
  }

}
