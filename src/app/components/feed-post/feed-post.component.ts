import { Component, Input, OnInit } from '@angular/core'
import { Post } from '../../../../entities/post'
import { User } from '../../../../entities/user'
import { PostService } from '../../services/post.service'

@Component({
   selector: 'app-feed-post',
   templateUrl: './feed-post.component.html',
   styleUrls: ['./feed-post.component.scss'],
})
export class FeedPostComponent implements OnInit {
   @Input()
   post: Post

   @Input()
   currentUser: User

   isPostLiked: boolean = false

   constructor(private postService: PostService) {}

   ngOnInit(): void {
      this.isPostLiked = this.currentUser.likedPosts.includes(this.post.id)
   }

   like() {
      this.postService.likePost(this.post.id).subscribe(() => {
         this.post.likesAmount++
         this.isPostLiked = !this.isPostLiked
      })
   }

   unlike() {
      this.postService.unlikePost(this.post.id).subscribe(() => {
         this.post.likesAmount--
         this.isPostLiked = !this.isPostLiked
      })
   }
}
