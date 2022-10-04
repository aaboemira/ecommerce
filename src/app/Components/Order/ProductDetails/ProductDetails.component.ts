import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router'

import { IProduct } from 'src/app/Models/iproduct';
import { ActivatedRoute } from "@angular/router";
import { StaticProductService } from 'src/app/Services/static-product.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currPrdID:number=0;
  prd:IProduct|null=null;
  prdIds:number[]=[]
  constructor(private activatedRoute:ActivatedRoute,private productService:StaticProductService,private location:Location,private router:Router) { }

  ngOnInit() {
    
    //this.currPrdID=Number(this.activatedRoute.snapshot.paramMap.get("pid"))
    this.prdIds=this.productService.getPrdIDs()
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currPrdID=Number(paramMap.get('pid'))
      this.prd=this.productService.getProductByID(this.currPrdID);
    })
    
  //When navigate to same component ,Will not reload componnent even if there's change in the route

  }
  goBack(){
    this.location.back();
  }
  prevPrd(){
    let currIndex=this.prdIds.findIndex((element)=>element==this.currPrdID)
    let prevPrdID
    if(currIndex>0){
      prevPrdID=this.prdIds[currIndex-1]
      this.router.navigate(['/Products',prevPrdID])
    }
  }
  nextPrd(){
    let currIndex=this.prdIds.findIndex((element)=>element==this.currPrdID)
    let nextID
    nextID=this.prdIds[currIndex+1]
    this.router.navigate(['/Products',nextID])
  }
}
