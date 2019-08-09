import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email!' :
        this.email.hasError('email') ? 'Not a valid email!' :
            '';
  }

  getNameErrorMessage() {
    return this.name.hasError('minlength') ? 'You must enter a name with at least 3 characters!' :
        this.name.hasError('required') ? 'Can not be null!' :
            '';
  }

  constructor() { }

  ngOnInit() {
  }

}
