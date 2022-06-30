import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../../../entities/user'
import { Router } from '@angular/router'
import { filter } from 'rxjs'

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   users: User[] = []
   filterUsers: User[] = []
   isModalVisible: boolean = false
   constructor(private userService: UserService, private router: Router) {}

   ngOnInit(): void {
      this.userService.getUsers().subscribe((users: User[]) => {
         this.users = users
      })

      document.addEventListener('click', (event) => {
         if (
            this.isModalVisible === true &&
            !(event.target as HTMLElement).classList.contains('nicknameList') &&
            !(event.target as HTMLElement).classList.contains('form-control')
         )
            this.isModalVisible = false
      })
   }

   onSearchUsers(event: KeyboardEvent) {
      const input = event.target as HTMLInputElement
      if (input.value === '') {
         this.filterUsers = []
      } else {
         this.filterUsers = this.users.filter((user) => {
            return user.nickname.includes(input.value)
         })
      }
   }

   navigateToUserPage(userId: string) {
      this.router.navigate([`/user/${userId}`])
      this.isModalVisible = false
   }
}
