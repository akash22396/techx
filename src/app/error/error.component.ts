import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  genders = ["Male", "Female"];
  signupForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup ({
      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'gender':  new FormControl('Male')
    });
  }
  onSubmit() {
  console.log(this.signupForm);
  }

}
