import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tokenResponse } from '../Models/iusers';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  public isLoggedSubject:BehaviorSubject<boolean>;
  private client_id=environment.clientID;
  private redirect_uri=environment.redirectURI;
  private client_secret=environment.clientSecret
  constructor(private http: HttpClient,private cookie:CookieService) {

    this.isLoggedSubject=new BehaviorSubject<boolean>(false);
   }

  retrieveToken(code:any):Observable<any> {
    let params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id',this.client_id );
    params.append('redirect_uri', this.redirect_uri);
    params.append('client_secret', this.client_secret);
    params.append('code', code);

    let headers =
      new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });

    return this.http.post('http://localhost:9090/oauth2/token',
      params.toString(), { headers: headers })

  }

  saveToken(token:tokenResponse) {
    console.log(token.expires_in)
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    console.log(expireDate);
    this.cookie.set("access_token", token.access_token, expireDate);
    localStorage.setItem("access_Token",token.access_token)
    this.isLoggedSubject.next(true);
    console.log(this.cookie.getAll());
  }

  getResource(resourceUrl:any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + this.cookie.get('access_token')
    });
    return this.http.get(resourceUrl, { headers: headers })
  }

  checkCredentials() {

    return this.cookie.check('access_token');
  }

  logout() {
    this.isLoggedSubject.next(false)
    this.cookie.delete('access_token');
    window.location.reload();
  }
}
