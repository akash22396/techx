import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup ({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'c_no' : new FormControl(null, Validators.required),
      'msg' : new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    console.log(this.contactForm);
  }

}
