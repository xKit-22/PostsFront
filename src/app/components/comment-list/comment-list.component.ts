import { Component, Input, OnInit } from '@angular/core'
import { CommentService } from '../../services/comment.service'
import { Comment } from '../../../../entities/comment'

@Component({
   selector: 'app-comment-list',
   templateUrl: './comment-list.component.html',
   styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
   @Input()
   postId: string

   @Input()
   userId: string

   input: string

   comments: Comment[] = []
   constructor(private commentService: CommentService) {}

   ngOnInit(): void {
      this.loadComments()
   }
   addComment() {
      this.commentService
         .createComment(this.input, this.userId, this.postId)
         .subscribe(() => {
            this.loadComments()
         })
   }

   loadComments() {
      this.commentService
         .getCommentsByPostId(this.postId)
         .subscribe((comments) => (this.comments = comments))
   }
}
