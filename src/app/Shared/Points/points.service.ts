import { Injectable } from '@angular/core';

@Injectable()
export class PointsService {

  //variable
  points: number = -1;

  constructor() { }

  //this method add the points
  addPoints(addPoints: number) {
    if (addPoints != null) {
      this.points += addPoints;
    }
  }

  //this method returns the current points
  getPoints(): number {
    return this.points;
  }

  //this method sets the points to start the quiz
  setPoints() {
    this.points = 0;
  }

  //this method sets the provided points
  setExistingPoints(pointsToSet: number) {
    this.points = pointsToSet;
  }
}