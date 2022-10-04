import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {Router} from '@angular/router'
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { StaticProductService } from 'src/app/Services/static-product.service';
import { CartData } from 'src/app/ViewModels/cart-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  // prdList: IProduct[];
  prdListOfCat: IProduct[] = [];
  totalPrice: number = 0;
  boughtProdcutName: string = '';
  @Output() boughtProduct: EventEmitter<CartData>;
  @Input() sentCatID: number = 0;
  orderDate: Date;

  constructor(
    // private staticPrdService: StaticProductService
    private prdService:ProductsService,
    private router:Router
    ) {
    this.orderDate = new Date();
    this.boughtProduct = new EventEmitter<CartData>;
  }
  ngOnInit(): void {
    this.prdService.getAllProducts().subscribe(product=>{
      this.prdListOfCat=product;
    }
    );
  }
  ngOnChanges(): void {
    if(this.sentCatID>0){
      this.prdService.getProductsByCategoryID(this.sentCatID).subscribe((product)=>{
        this.prdListOfCat=product;
      });
    }else{
      this.prdService.getAllProducts().subscribe(product=>{
        this.prdListOfCat=product;
      }
      );
    }
    // this.filterProductByCatID()
  }
  buy(product: IProduct, count: string) {
    let productSent = new CartData(product, +count)
    this.boughtProduct.emit(productSent)
  }
  prdTrackByFn(index: number, prd: IProduct): number {
    return prd.id;
  }
  reset() {
    this.totalPrice = 0;
  }
  openPrdDetails(prdID:number){
    // this.router.navigateByUrl('/Products/'+prdID)
    this.router.navigate(['/Products',prdID])
  }
  // filterProductByCatID() {
  //   if (this.sentCatID == 0) this.prdListOfCat = this.prdList
  //   else
  //     this.prdListOfCat = this.prdList.filter(prd => prd.categoryID == this.sentCatID);
  // }


}
