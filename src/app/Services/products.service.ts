import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  httpOption;

  constructor(private httpclient: HttpClient) {
    this.httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
   }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${environment.APIURL}products`);
  }
  getProductsByCategoryID(catID: number) {
    return this.httpclient.get<IProduct[]>(`${environment.APIURL}products?categoryID=${catID}`)
  }
  getProductByID(pid: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(`${environment.APIURL}products/${pid}`)
  }
  addProduct(prd: IProduct):Observable<IProduct> {
    return this.httpclient.post<IProduct>(`${environment.APIURL}products`, prd,this.httpOption)
    .pipe(
      // catchError((err)=>{
      //   console.log (err)
      //   return throwError(()=> new Error("Error happened"))
      // })
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    //Write error details in generic error log
    
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
