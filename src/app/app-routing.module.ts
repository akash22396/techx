import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'photo/:id', component: PhotoComponent},
  {path: '',  redirectTo: '/Home', pathMatch: 'full'},
  {path: '**',  component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
