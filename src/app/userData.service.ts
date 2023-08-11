import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}
  userDataURL = 'https://jsonplaceholder.typicode.com/users';
  getUserData(userId: string): Observable<any> {
    return this.http.get<any>(`${this.userDataURL}/${userId}`);
  }
}
