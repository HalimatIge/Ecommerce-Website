import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SignupComponent } from './component/signup/signup.component';
import { AdminComponent } from './component/admin/admin.component';
import { ClothComponent } from './component/cloth/cloth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { ShoesComponent } from './component/shoes/shoes.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { BagsComponent } from './component/bags/bags.component';
import { PerfumesComponent } from './component/perfumes/perfumes.component';
import { AccessoriesComponent } from './component/accessories/accessories.component';
import { FootComponent } from './component/foot/foot.component';
import { UsersComponent } from './component/users/users.component';
import { PostingComponent } from './component/posting/posting.component';
import { AccountComponent } from './user/account/account.component';
import { OrderComponent } from './user/order/order.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { CartComponent } from './user/cart/cart.component';
import { NavhomeComponent } from './component/navhome/navhome.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    DashboardComponent,
    NotfoundComponent,
    SignupComponent,
    AdminComponent,
    ClothComponent,
    ShoesComponent,
    BagsComponent,
    PerfumesComponent,
    AccessoriesComponent,
    FootComponent,
    UsersComponent,
    PostingComponent,
    AccountComponent,
    OrderComponent,
    UserProfileComponent,
    WishlistComponent,
    CartComponent,
    NavhomeComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule
    ,MatFormFieldModule,
    MatDialogModule
    // HttpClientModule,
    // MatNativeDateModule,
    // MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
