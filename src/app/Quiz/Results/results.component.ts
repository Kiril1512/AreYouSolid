import { Component, OnInit } from '@angular/core';
import { PointsService } from '../Points/points.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private pointsService: PointsService) { }

  points : number;
  hasPoints: boolean;

  ngOnInit() {
    //get the points
    this.points = this.pointsService.returnPoints();

    //trigger flag if has points
    this.points == -1 ? this.hasPoints = false : this.hasPoints = true;
  }

}
