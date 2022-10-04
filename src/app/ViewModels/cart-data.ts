import { IProduct } from "../Models/iproduct";

export class CartData {
    public name:string;
    public price:number;
    public quantity:number;
    constructor( product:IProduct, count:number){
        this.name=product.name;
        this.price=product.price;
        this.quantity=count;
    }
    
}
