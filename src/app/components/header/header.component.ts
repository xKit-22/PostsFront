import { Component, Input, OnInit } from '@angular/core'
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
   @Input()
   currentUserId: string
   @Input()
   nickname: string
   users: User[] = []
   filterUsers: User[] = []
   isModalVisible: boolean = false
   isImgModalVisible: boolean = false

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
         ) {
            this.isModalVisible = false
         }

         if (
            this.isImgModalVisible === true &&
            !(event.target as HTMLElement).classList.contains('logout-modal') &&
            !(event.target as HTMLElement).classList.contains('feed-modal') &&
            !(event.target as HTMLElement).classList.contains('avatar')
         ) {
            this.isImgModalVisible = false
         }
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

   navigateToFeed() {
      this.router.navigate([`/feed/`])
      this.isModalVisible = false
   }

   navigateToHomePage(currentUserId: string) {
      this.router.navigate([`/user/${currentUserId}`])
   }
}
