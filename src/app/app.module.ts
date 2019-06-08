import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PhotoComponent } from './photo/photo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductUpdateComponent } from './admin/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    PhotoComponent,
    AboutusComponent,
    ContactusComponent,
    ProductsComponent,
    ProductComponent,
    AdminComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
