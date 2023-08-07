import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/Pages/home/home.component';
import { ContactComponent } from './Views/Pages/contact/contact.component';
import { NavbarComponent } from './Views/Layouts/navbar/navbar.component';
import { FooterComponent } from './Views/Layouts/footer/footer.component';
import { SliderComponent } from './Views/Components/slider/slider.component';
import { ButtonComponent } from './Views/Components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
