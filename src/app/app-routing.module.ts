import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PhotoComponent } from './photo/photo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Photo/:id', component: PhotoComponent},
  {path: 'About', component: AboutusComponent },
  {path: 'Contact', component: ContactusComponent},
  {path: 'Products', component: ProductsComponent},
  {path: 'Product/:id', component: ProductComponent},
  {path: 'Admin', component: AdminComponent},

  {path: '',  redirectTo: '/Home', pathMatch: 'full'},
  {path: '**',  component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
