import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { FooterComponent } from './home/footer/footer.component';
import { IntroComponent } from './home/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
