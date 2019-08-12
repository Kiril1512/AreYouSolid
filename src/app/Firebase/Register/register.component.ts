import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PointsService } from 'src/app/Quiz/Points/points.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  disableButton: boolean;

  getNameErrorMessage() {
    return this.name.hasError('minlength') ? 'You must enter a name with at least 3 characters!' :
        this.name.hasError('required') ? 'Can not be null!' :
            '';
  }

  constructor(private pointsService: PointsService) { }

  ngOnInit() {
  }
}
