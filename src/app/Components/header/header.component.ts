import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/Services/AppService.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLogged:boolean=false;
  constructor(private appService:AppServiceService) { }

  ngOnInit(): void {
    this.appService.isLoggedSubject.subscribe((data)=>{
      this.isUserLogged=data;
    })
  }

}
