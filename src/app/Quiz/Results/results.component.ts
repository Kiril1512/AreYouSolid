import { Component, OnInit, Input } from '@angular/core';
import { PointsService } from '../Points/points.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  //variables
  filtered_points: string;
  progress_points: number;
  progress_color: string = "warn";
  mode: string = "indeterminate";
  userWithNoRecord: boolean = true;

  constructor(private poinstService: PointsService) { }

  //points from the points service
  @Input() points: number;

  ngOnInit() {
    //see if is user
    var user = firebase.auth().currentUser;

    if (!user) {
      console.log("Sign In called!");
      //call anonymous sign in to track user quiz results
      firebase.auth().signInAnonymously().catch((error) => {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
      });

    //call the method to display points in the results.
    this.getPoints();
    }
  }

  //this method gets the points to display
  getPoints() {
    console.log("Get Points was triggered!");

    //setTimeout for bug correction as: https://github.com/angular/angular/issues/17572
    setTimeout(() => {
      //get the points
      this.points = this.poinstService.getPoints();

      //check if it has points
      if (this.points == -1) {
        this.filtered_points = "no points!";
        this.progress_points = 0;
      }
      else {
        this.filtered_points = this.points.toString() + " of 20 points!";
        
        //calculate the progress bar
        this.progress();
      }
    }, 1000)

    return this.filtered_points;
  }

  //this method calculates the value of the progress bar.
  progress() {
    this.progress_points = this.points * 100 / 20;

    if (this.progress_points >= 50) {
      this.progress_color = "primary"
    }

    this.mode = "determinate";
  }
}
