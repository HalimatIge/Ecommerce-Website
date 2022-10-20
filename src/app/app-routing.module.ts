import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './component/accessories/accessories.component';
import { AdminComponent } from './component/admin/admin.component';
import { BagsComponent } from './component/bags/bags.component';
import { ClothComponent } from './component/cloth/cloth.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PerfumesComponent } from './component/perfumes/perfumes.component';
import { PostingComponent } from './component/posting/posting.component';
import { ShoesComponent } from './component/shoes/shoes.component';
import { SignupComponent } from './component/signup/signup.component';
import { UsersComponent } from './component/users/users.component';
import { IsloggedGuard } from './guard/islogged.guard';
import { CartComponent } from './user/cart/cart.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';


const routes: Routes = [
  {path:'',component:HomeComponent,},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'admin/user',component:UsersComponent},
    {path:'',component:PostingComponent},
    {path:'admin/post',component:PostingComponent},
  ]
},
{path:'wish',component:WishlistComponent,
},
{path:'cart',component:CartComponent},
  {path:'dash/:index', component:DashboardComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'cloth/:index',component:ClothComponent},
    {path:'bags/:index',component:BagsComponent},
    {path:'shoes/:index',component:ShoesComponent},
    {path:'access/:index',component:AccessoriesComponent},
    {path:'perfume/:index',component:PerfumesComponent},
    {path:'wish/:index',component:WishlistComponent},
    {path:'cart/:index',component:CartComponent},
    {path:'user/:index',component:UserProfileComponent,
children:[
  {path:'wish',component:WishlistComponent},
  {path:'cart',component:CartComponent},
]
},
  ],canActivate : [IsloggedGuard]
},

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cloth',component:ClothComponent},
  {path:'shoes',component:ShoesComponent},
  {path:'bags',component:BagsComponent},
  {path:'access',component:AccessoriesComponent},
  {path:'perfume',component:PerfumesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
