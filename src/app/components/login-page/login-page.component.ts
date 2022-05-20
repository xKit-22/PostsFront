import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { Subscription } from 'rxjs'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
   selector: 'app-login-page',
   templateUrl: './login-page.component.html',
   styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
   form: FormGroup
   aSub: Subscription

   constructor(
      private auth: AuthService,
      private router: Router,
      private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
      this.form = new FormGroup({
         userLogin: new FormControl(null, [Validators.required]),
         userPassword: new FormControl(null, [Validators.required]),
      })

      this.route.queryParams.subscribe((params: Params) => {
         if (params['registered']) {
            //You can login
         } else if (params['accessDenied']) {
            //You need authorization
         }
      })
   }

   ngOnDestroy() {
      if (this.aSub) {
         this.aSub.unsubscribe()
      }
   }

   onSubmit() {
      this.form.disable()

      this.aSub = this.auth.login(this.form.value).subscribe(
         () => this.router.navigate(['/user']),
         (error) => {
            console.warn(error)
            this.form.enable()
         }
      )
   }
}
