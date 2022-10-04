import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
private prdList:IProduct[];
constructor() {
  this.prdList = [
    {id: 1, name: 'Lenovo Thinkpad laptop', price: 100, quantity: 15, imgURL: 'https://fakeimg.pl/200x150/', categoryID: 1},
    {id: 2, name: 'Apple macbook', price: 202230, quantity: 12, imgURL: 'https://fakeimg.pl/200x150/', categoryID: 1},
    {id: 3, name: 'Hp 15', price: 3200, quantity: 5, imgURL: 'https://fakeimg.pl/200x150/', categoryID: 1},
    {id: 4, name: 'IPod', price: 3300, quantity: 2, imgURL: 'https://fakeimg.pl/200x150/', categoryID: 2},
    {id: 5, name: 'Samsung Note 10', price: 5050, quantity: 1, imgURL: 'https://fakeimg.pl/200x150/', categoryID: 3},
    {id: 6, name: 'Samsung Note 9', price: 5560, quantity: 0, imgURL: 'https://fakeimg.pl/200x150/', categoryID: 3}
  ]
 }
 getAllProducts():IProduct[]{
  return this.prdList;
 }
 getProductByCatID(cID:number):IProduct[]{
  if (cID == 0) return this.prdList
  else
    return this.prdList.filter(prd => prd.categoryID == cID);
 }
 getProductByID(pID:number):IProduct| null{
  let foundProduct=this.prdList.find(prd=>prd.id==pID);
  return foundProduct?foundProduct:null;
 }
 getPrdIDs():number[]{
 let prdIDs:number[]= this.prdList.map(prd=>prd.id)
 return prdIDs;
 }
}
