import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/Pages/home/home.component';
import { ContactComponent } from './Views/Pages/contact/contact.component';
import { LoginComponent } from './Views/Auth/Aut/login/login.component';
import { ProductComponent } from './Views/Pages/products/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product' ,component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
