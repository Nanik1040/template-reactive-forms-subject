import { Component, OnInit, Input } from '@angular/core';
import { StudentformService } from '../studentform.service';
@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {
  constructor(private studentFormService: StudentformService) {}
  studData: string[] = [];
  @Input() parentData: any;

  ngOnInit() {
    this.studentFormService.getStudData().subscribe((form) => {
      this.studData.push(form);
      //      this.studData = [];
    });
  }
}
