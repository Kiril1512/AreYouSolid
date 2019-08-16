import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { RegisterComponent } from '../Firebase/Register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isUser: boolean = false;

  constructor(private registerComponent: RegisterComponent) { }

  ngOnInit() {
    this.firebaseIsSignedIn();
  }

  firebaseIsSignedIn() {
    //check if user is signed in anonymously
    firebase.auth().onAuthStateChanged ( user => {
      if (user) {
        // User is signed in.
        this.isUser = true;

        //get the data to show.
        //this.registerComponent.getData();

      } else {
        // User is signed out, so sign in.
        this.isUser = false;
      }
    });
  }
}
