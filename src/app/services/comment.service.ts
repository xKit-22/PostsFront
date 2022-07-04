import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { SERVER_URL } from './server.config'
import { Comment } from '../../../entities/comment'
import { Post } from '../../../entities/post'

@Injectable({
   providedIn: 'root',
})
export class CommentService {
   constructor(private httpClient: HttpClient) {}

   getCommentsByPostId(postId: string): Observable<Comment[]> {
      return this.httpClient.get<Comment[]>(
         SERVER_URL + `/comments/post/${postId}`
      )
   }
   createComment(
      text: string,
      userId: string,
      postId: string
   ): Observable<Comment> {
      return this.httpClient.post<Comment>(SERVER_URL + `/comments/`, {
         text: text,
         postId: postId,
         likesAmount: 0,
         authorId: userId,
         dateOfCreation: +new Date(),
      })
   }
}
