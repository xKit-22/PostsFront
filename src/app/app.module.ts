import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { HeaderComponent } from './components/header/header.component'
import { RegistrationPageComponent } from './components/registration-page/registration-page.component'
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component'

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
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
