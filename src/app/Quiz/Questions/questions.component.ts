import { Component, OnInit, OnDestroy } from '@angular/core';
import { PointsService } from '../Points/points.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit, OnDestroy {

  //variables
  points: number;
  click: boolean;

  //variables for subscription 
  code_example_1: string;
  code_example_2: string;
  code_example_3: string;
  code_example_4: string;
  code_example_5: string;
  code_example_10: string;
  code_example_20: string;
  code_example_30: string;
  code_example_40: string;
  code_example_50: string;

  //#region read code examples

  //read the text files with code examples.
  code_1 = this.http.get('assets/code_example/wrong_code_example_1.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_1 = data.toString());

  code_2 = this.http.get('assets/code_example/wrong_code_example_2.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_2 = data.toString());

  code_3 = this.http.get('assets/code_example/wrong_code_example_3.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_3 = data.toString());

  code_4 = this.http.get('assets/code_example/wrong_code_example_4.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_4 = data.toString());

  code_5 = this.http.get('assets/code_example/wrong_code_example_5.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_5 = data.toString());

  code_6 = this.http.get('assets/code_example/correct_code_example_1.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_10 = data.toString());

  code_7 = this.http.get('assets/code_example/correct_code_example_2.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_20 = data.toString());

  code_8 = this.http.get('assets/code_example/correct_code_example_3.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_30 = data.toString());

  code_9 = this.http.get('assets/code_example/correct_code_example_4.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_40 = data.toString());

  code_10 = this.http.get('assets/code_example/correct_code_example_5.txt', { responseType: 'text' })
    .subscribe(data => this.code_example_50 = data.toString());

  //#endregion

  constructor(private http: HttpClient, private pointsService: PointsService) { }

  ngOnInit() {
    //reset the click flag.
    this.click = false;

    //set the points to start counting.
    this.pointsService.setPoints();
  }

  //On Destroy unsubsribe to the subsription.
  ngOnDestroy() {
    this.code_1.unsubscribe();
    this.code_2.unsubscribe();
    this.code_3.unsubscribe();
    this.code_4.unsubscribe();
    this.code_5.unsubscribe();
    this.code_6.unsubscribe();
    this.code_7.unsubscribe();
    this.code_8.unsubscribe();
    this.code_9.unsubscribe();
    this.code_10.unsubscribe();
  }

  //this method recives the click event
  clicked(points: number) {
    //triggers the correct and wrong button answers and the text.
    this.click = true;

    //call the method to check the anwser
    if (points != 0) {
      this.pointsService.addPoints(points);
    }
  }

  //this method returns if the click event was triggered
  isClicked() {
    return this.click;
  }

  //this method clears the click event
  cleanClick() {
    this.click = false;
  }
}