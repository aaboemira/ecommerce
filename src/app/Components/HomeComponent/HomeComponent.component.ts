import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-HomeComponent',
  templateUrl: './HomeComponent.component.html',
  styleUrls: ['./HomeComponent.component.css']
})
export class HomeComponentComponent implements OnInit, OnDestroy {
  private subscription: Subscription[]=[];
  storeInfo: StoreData;
  isImageShown: boolean = true;
  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData('ITI Store',
      'https://picsum.photos/350/200',
      ['Cairo', 'Alex', 'Qena', 'Assiut']);

  }

  ngOnInit() {
    let observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Ads Finsihed!")
      }
    }
    let adsubscription=this.promoAds.getScheduleAds(1000).subscribe(observer);
    this.subscription.push(adsubscription)
  }

  ngOnDestroy(): void {
    for(let subs of this.subscription)
    subs.unsubscribe();
  }
}
