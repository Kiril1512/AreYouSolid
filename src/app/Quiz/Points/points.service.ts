import { Injectable } from '@angular/core';

@Injectable()
export class PointsService {

  points : number = -1;

  constructor() { }

  addPoints()
  {
      this.points++;
  }

  returnPoints(): number
  {
      return this.points;
  }

}