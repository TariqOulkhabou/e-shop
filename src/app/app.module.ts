import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/Pages/home/home.component';
import { ContactComponent } from './Views/Pages/contact/contact.component';
import { NavbarComponent } from './Views/Layouts/navbar/navbar.component';
import { FooterComponent } from './Views/Layouts/footer/footer.component';
import { SliderComponent } from './Views/Components/slider/slider.component';
import { ButtonComponent } from './Views/Components/button/button.component';
import { CssComponent } from './Views/Layouts/Allboot/css/css.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MaterialModule } from './Config/material';




// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { LoginComponent } from './Views/Auth/Aut/login/login.component';
import { RegisterComponent } from './Views/Auth/Aut/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './Views/Pages/products/product/product.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    ButtonComponent,
    CssComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
