import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../../../entities/user'
import { SERVER_URL } from './server.config'

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(SERVER_URL + `/users/${id}`);
  }

}
