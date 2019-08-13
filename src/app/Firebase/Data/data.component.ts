import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './data.interface';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private http: HttpClient) { }

  //firebase URL.
  url: string = 'https://areyousolid-8494d.firebaseio.com/';

  ngOnInit() {
  }

  //this method post the data to the firebase.
  post(data: data) {
    return this.http.post(this.url + 'points.json', data, { observe: 'response' });
  }

  //this method get the data from firebase.
  get() {
    return this.http.get<data>(this.url + 'points.json');
  }
}
