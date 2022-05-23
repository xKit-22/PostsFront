import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegistrationPageComponent} from "./components/registration-page/registration-page.component";
import {UserProfilePageComponent} from "./components/user-profile-page/user-profile-page.component";
import { AuthGuard } from './services/auth.guard'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'user/:userId', canActivate: [AuthGuard], component: UserProfilePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
