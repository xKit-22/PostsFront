import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Post } from '../../../../entities/post'
import { User } from '../../../../entities/user'

@Component({
   selector: 'app-feed',
   templateUrl: './feed.component.html',
   styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
   posts: Post[] = []
   currentUser: User
   currentUserId: string = localStorage.getItem('currentUser')

   constructor(private userService: UserService) {}

   ngOnInit(): void {
      this.userService
         .getFeed()
         .subscribe((posts) => (this.posts = posts.sort()))
      this.userService
         .getUserById(this.currentUserId)
         .subscribe((user) => (this.currentUser = user))
   }
}
