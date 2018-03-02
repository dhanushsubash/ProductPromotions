import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { ProductService } from './product.service';
import {HttpModule} from '@angular/http';
import { ProductFilterPipe } from './product-filter.pipe';
import { OrderByPipe } from './order-by.pipe';
import { InsertDirective } from './insert.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    ShowProductComponent,
    ProductFilterPipe,
    OrderByPipe,
    InsertDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthenticationService, AuthGuardService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
