import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  adsList:string[]
  constructor() { 
    this.adsList=["50% Discount ","Sale up to 50%","Watch our White Friday","90% sales",""];
    
  }
  getScheduleAds(intervalInSeconds:number):Observable<string>{
    let adsObservable=new Observable<string>((observer)=>{
      let counter=0
      let adsTimer=setInterval(()=>{
        console.log("in interval")

        if(this.adsList[counter]=="")observer.error("Error:empty array")
        if(counter==this.adsList.length)observer.complete()
        observer.next(this.adsList[counter++]);
      },intervalInSeconds)
      return {
        unsubscribe() {
          //1-Error
          //2-Complete
          //3-Unsubsribe
          clearInterval(adsTimer)
        },
      }
    })
    return adsObservable
  }
}
