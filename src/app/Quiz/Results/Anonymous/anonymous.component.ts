import { Component, OnInit, Input } from '@angular/core';
import { PointsService } from '../../Points/points.service';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  constructor(private poinstService: PointsService) { }

  @Input() points: number;
  filtered_points : string;
  
  ngOnInit() {
    this.getPoints();
  }

  getPoints()
  {
    this.points = this.poinstService.returnPoints();
    console.log(this.points);

    if (this.points == -1) {
      this.filtered_points = "no points!";
    }
    else{
      this.filtered_points = this.points.toString() + " of 20!";
    }
  }

}
