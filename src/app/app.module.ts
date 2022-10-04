import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './Components/mainLayout/mainLayout.component';
import { HomeComponentComponent } from './Components/HomeComponent/HomeComponent.component';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';
import {  HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { ExtractCodeComponent } from './Components/extract-code/extract-code.component';

@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    HomeComponentComponent,
    MainLayoutComponent,
    UserLoginComponent,
    CreateProductComponent,
    ExtractCodeComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
