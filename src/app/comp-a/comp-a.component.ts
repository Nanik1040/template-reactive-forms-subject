import { Component, OnInit } from '@angular/core';
import { StudentformService } from '../studentform.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit {
  studName: string;
  studAge: string;
  studClass: string;
  studMobile: string;
  studData: string[] = [];

  studForm: FormGroup;
  constructor(
    private studFormService: StudentformService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    // this.InitiazeForm();
  }
  // InitiazeForm() {
  //   this.studForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     age: ['', Validators.required],
  //     class: ['', Validators.required],
  //     mobile: ['', Validators.required],
  //   });
  // }
  SubmitData(form: NgForm) {
    if (form.valid) {
      console.log(form.form.valid, 'is form valid');
      console.log('form is valid');
      console.log(form.value, 'comp-a-form-values');
      this.studFormService.postStudData(form.value);
      // this.studData = [];
      form.reset();
    } else {
      console.log('Form is Invalid');
    }
    // if (this.studForm.valid) {
    //   this.studFormService.postStudData(this.studForm.value);
    //   this.studForm.reset();
    // } else {
    //   console.log(this.studForm.value, 'form is invalid');
    // }
  }
}
