import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    RegistrationPageComponent,
    UserProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule{}
