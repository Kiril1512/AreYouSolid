import { Injectable } from '@angular/core';

@Injectable()
export class PointsService {

  points : number = -1;

  constructor() { }

  addPoints(addPoints: number)
  {
    if (addPoints != null) {
      this.points += addPoints;
    }
      
  }

  returnPoints(): number
  {
      return this.points;
  }

  setPoints()
  {
    this.points = 0;
  }

}