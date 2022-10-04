import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tokenResponse } from 'src/app/Models/iusers';
import { AppServiceService } from 'src/app/Services/AppService.service';

@Component({
  selector: 'app-extract-code',
  templateUrl: './extract-code.component.html',
  styleUrls: ['./extract-code.component.css']
})
export class ExtractCodeComponent implements OnInit {
  code:string='';
  constructor(private route: ActivatedRoute,private appService:AppServiceService,private routerService :Router) { }
   observer={
    next:(token:tokenResponse)=>{
      alert("Token Retrived")
      this.appService.saveToken(token);
    },
    error:(err:Error)=>{
      alert("Token Invalid")
      this.routerService.navigateByUrl("/Login");
    }
  }
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.code=params['code'];
      this.appService.retrieveToken(this.code).subscribe(this.observer);
    },(error)=>{
      console.log("Code not found");
    })
  }

}
