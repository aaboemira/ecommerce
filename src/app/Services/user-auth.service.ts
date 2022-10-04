import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private httpOption;
   private isUserLogged:boolean=false;
  isLoggedObs:BehaviorSubject<boolean>;
  constructor(private httpclient: HttpClient) {
    this.httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    // this.isLoggedObs=new Observable<boolean>((observer)=>{
    //   observer.next(this.isUserLogged)
    // })
    this.isLoggedObs=new BehaviorSubject<boolean>(this.isLogged)
   }
  Login():Observable<any>{

   return this.httpclient.get(`${environment.AuthURL}oauth2/codeoauth2/authorize
    ?client_id=aabouemira
    &redirect_uri=https://oidcdebugger.com/debug
    &scope=read
    &response_type=code token
    &response_mode=form_post
    &state=pfpfzdwzdfe
    &nonce=3b7c1r9ws1l`)
    
  }
  Logout(){
    localStorage.removeItem('token')
    this.isLoggedObs.next(false)
  }
  get isLogged():boolean{
    return  (localStorage.getItem('token'))? true: false

  }
}
