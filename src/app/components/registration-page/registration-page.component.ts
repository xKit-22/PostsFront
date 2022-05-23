import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
   selector: 'app-registration-page',
   templateUrl: './registration-page.component.html',
   styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit, OnDestroy {
   form: FormGroup
   aSub: Subscription

   constructor(private auth: AuthService, private router: Router) {}

   ngOnInit(): void {
      this.form = new FormGroup({
         userLogin: new FormControl(null, [
            Validators.required,
            Validators.email,
         ]),
         userPassword: new FormControl(null, [
            Validators.required,
            Validators.minLength(8),
         ]),
         nickname: new FormControl(null, [
            Validators.required,
            Validators.minLength(6),
         ]),
         passwordRep: new FormControl(null, Validators.required),
      })
   }

   ngOnDestroy() {
      if (this.aSub) {
         this.aSub.unsubscribe()
      }
   }

   onSubmit() {
      this.form.disable()
      this.aSub = this.auth.register(this.form.value).subscribe(
         () => {
            this.router.navigate(['/login'], {
               queryParams: {
                  registered: true,
               },
            })
         },
         (error) => {
            console.warn(error)
            this.form.enable()
         }
      )
   }
}
