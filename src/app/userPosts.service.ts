import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserPostService {
  constructor(private http: HttpClient) {}
  userPostURL = 'https://jsonplaceholder.typicode.com/posts';
  getUserPost(): Observable<any> {
    return this.http.get<any>(`${this.userPostURL}`);
  }
}
