import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { HeaderComponent } from './components/header/header.component'
import { RegistrationPageComponent } from './components/registration-page/registration-page.component'
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component'
import { CommonModule } from '@angular/common'
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { JwtInterceptor } from './services/token.interceptor'

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
      CommonModule,
      NgbModule,
      NgbModalModule,
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         multi: true,
         useClass: JwtInterceptor,
      },
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
