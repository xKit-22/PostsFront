import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../../../entities/user'
import { SERVER_URL } from './server.config'
import { Subscription } from '../../../entities/subscription'
import { Post } from '../../../entities/post'

@Injectable({ providedIn: 'root' })
export class UserService {
   constructor(private httpClient: HttpClient) {}

   getUserById(id: string): Observable<User> {
      return this.httpClient.get<User>(SERVER_URL + `/users/${id}`)
   }

   getUsers(): Observable<User[]> {
      return this.httpClient.get<User[]>(SERVER_URL + `/users/`)
   }

   subscribe(whoAreSubscribedToId: string): Observable<Subscription> {
      return this.httpClient.post<Subscription>(
         SERVER_URL + `/users/subscribe`,
         { id: whoAreSubscribedToId }
      )
   }

   getFeed(): Observable<Post[]> {
      return this.httpClient.get<Post[]>(SERVER_URL + '/posts/feed')
   }
}
