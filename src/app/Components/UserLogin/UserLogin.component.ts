import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/Services/AppService.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-UserLogin',
  templateUrl: './UserLogin.component.html',
  styleUrls: ['./UserLogin.component.css']
})
export class UserLoginComponent implements OnInit {
   isUserLogged:boolean=false;
  constructor(private appService:AppServiceService) {
    this.isUserLogged
   }

  ngOnInit() {
    this.isUserLogged=this.appService.checkCredentials();
  }

  Login(){
    window.location.href = `${environment.AuthURL}oauth2/authorize?client_id=${environment.clientID}&redirect_uri=${environment.redirectURI}&scope=read&response_type=code&response_mode=form_post`
    console.log("called from login"+this.isUserLogged)
  }
  Logout(){
    console.log("called from logout"+this.isUserLogged)
    this.appService.logout();
    this.isUserLogged=this.appService.checkCredentials();

  }
}
