import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { HomeComponentComponent } from './Components/HomeComponent/HomeComponent.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';
import { MainLayoutComponent } from './Components/mainLayout/mainLayout.component';
import { ProductDetailsComponent } from './Components/Order/ProductDetails/ProductDetails.component';
import { AuthGuard } from './Guards/auth-guard.guard';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { ExtractCodeComponent } from './Components/extract-code/extract-code.component';

const routes:Routes=[
{path:'',component:MainLayoutComponent,children:[
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponentComponent},
  {path:'Products',component:ProductListComponent,canActivate:[AuthGuard]},
  {path: 'Products/Create',component:CreateProductComponent},
  {path:'Products/:pid',component:ProductDetailsComponent},
  {path:'Order',component:OrderMasterComponent},
  {path:'Login',component:UserLoginComponent},
  {path:'Login/debug',component:ExtractCodeComponent},

  {path:'Logout',component:UserLoginComponent},
]},

{path:'**',component:NotFoundComponent}// Wild card path
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

 }
