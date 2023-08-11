import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from '../userData.service';
import { UserPostService } from '../userPosts.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor(
    private userDataService: UserDataService,
    private userPostService: UserPostService
  ) {}
  userData: any[];
  userPost: any[];
  userId: any;
  getUserData(userId) {
    console.log(userId)
    this.userDataService.getUserData(userId).subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
  }
  ngOnInit(): void {
    this.userPostService.getUserPost().subscribe((data) => {
      console.log(data);
      this.userPost = data;
    });
  }
}
