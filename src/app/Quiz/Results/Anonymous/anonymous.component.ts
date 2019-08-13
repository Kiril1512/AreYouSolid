import { Component, OnInit, Input } from '@angular/core';
import { PointsService } from '../../Points/points.service';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  filtered_points : string;
  progress_points: number;
  progress_color: string = "warn";

  constructor(private poinstService: PointsService) { }

  @Input() points: number;
  
  
  ngOnInit() {
    this.getPoints();
  }

  getPoints()
  {
    this.points = this.poinstService.returnPoints();

    if (this.points == -1) {
      this.filtered_points = "no points!";
      this.progress_points = 0;
    }
    else{
      this.filtered_points = this.points.toString() + " of 20 points!";
      this.progress();
    }
  }

  progress()
  {
    this.progress_points = this.points * 100 / 20;

    if (this.progress_points >= 50) {
      this.progress_color = "primary"
    }
  }

}
