import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path:'', component: LoginComponent, pathMatch: 'full'},
  {path:'login', component: LoginComponent, pathMatch: 'full'},
  {path:'register', component: RegisterComponent},
  {path:'show', component: ShowProductComponent},
  {path:'add', component: AddProductComponent, canActivate: [AuthGuardService]},
  {path:'**', redirectTo: 'show'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
