import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Post } from '../../../entities/post'
import { SERVER_URL } from './server.config'

@Injectable({ providedIn: 'root' })
export class PostService {
   constructor(private httpClient: HttpClient) {}

   getPostById(id: string): Observable<Post> {
      return this.httpClient.get<Post>(SERVER_URL + `/posts/${id}`)
   }
   getPostsByUserId(authorId: string): Observable<Post[]> {
      return this.httpClient.get<Post[]>(
         SERVER_URL + `/posts/author/${authorId}`
      )
   }

   createPost(text: string, userId: string): Observable<Post> {
      return this.httpClient.post<Post>(SERVER_URL + `/posts/`, {
         text: text,
         picture: 'pictureDef',
         likesAmount: 0,
         authorId: userId,
         dateOfCreation: +new Date(),
      })
   }

   likePost(id: string): Observable<Post> {
      return this.httpClient.get<Post>(SERVER_URL + `/posts/${id}/like`)
   }

   unlikePost(id: string): Observable<Post> {
      return this.httpClient.get<Post>(SERVER_URL + `/posts/${id}/unlike`)
   }
}
