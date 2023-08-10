import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StudentformService {
  constructor() {}
  private StudentSubject = new Subject<string[]>();
  postStudData(formData: string[]) {
    this.StudentSubject.next(formData);
  }
  getStudData() {
    return this.StudentSubject.asObservable();
  }
}
