import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { UserService } from '../../services/user.service'
import { User } from '../../../../entities/user'
import { Post } from '../../../../entities/post'
import { PostService } from '../../services/post.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
   selector: 'app-user-profile-page',
   templateUrl: './user-profile-page.component.html',
   styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit {
   currentUserId: string = localStorage.getItem('currentUser')
   userId: string
   postId: string
   user: User
   posts: Post[] = []
   closeResult = ''
   input: string
   isMyAccount: boolean = false

   constructor(
      private route: ActivatedRoute,
      private userService: UserService,
      private postService: PostService,
      private modalService: NgbModal
   ) {}

   ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
         this.userId = params['userId']
         this.isMyAccount = localStorage.getItem('currentUser') == this.userId
         this.userService.getUserById(this.userId).subscribe((user: User) => {
            this.user = user
         })

         this.loadPosts()
      })
   }

   subscribe() {
      this.userService.subscribe(this.userId).subscribe(() => {
         this.userService.getUserById(this.userId).subscribe((user: User) => {
            this.user = user
         })
      })
   }

   open(content: any) {
      this.modalService
         .open(content, { ariaLabelledBy: 'modal-basic-title' })
         .result.then(
            (result) => {
               this.closeResult = `Closed with: ${result}`
            },
            (reason) => {
               this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
            }
         )
   }

   private getDismissReason(reason: any): string {
      return ''
   }

   addPost() {
      this.postService.createPost(this.input, this.userId).subscribe(() => {
         this.loadPosts()
      })
   }

   loadPosts() {
      this.postService
         .getPostsByUserId(this.userId)
         .subscribe((posts: Post[]) => {
            this.posts = posts
         })
   }
}
