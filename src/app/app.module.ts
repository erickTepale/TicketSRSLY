import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInModelComponent } from './component/sign-in-model/sign-in-model.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    SearchPageComponent,
    HeaderComponent,
    SignInModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
