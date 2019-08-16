import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PointsService } from 'src/app/Quiz/Points/points.service';
import { DataService } from '../Data/data.service';
import { data } from '../Data/data.interface';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as firebase from 'firebase';
import "firebase/app";
import "firebase/auth";
import { ResultsComponent } from 'src/app/Quiz/Results/results.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  displayedColumns: string[] = ['name', 'points'];
  data: data[] = new Array();
  submited: boolean = false;
  dataSource = new MatTableDataSource([]);
  dataIsReady: boolean = false;
  userSubmitedData: boolean = false;
  nameToSubmit: string = null;
  noPointsForThisUser: boolean = false;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private pointsService: PointsService, private dataService: DataService, private results: ResultsComponent) { }

  ngOnInit() {
    //see if is user
    var user = firebase.auth().currentUser;

    if (user) {
      this.getData();
      this.submited = true;
    }
  }

  //this method collects the data to send to the post request.
  submit() {
    //call the method to post the data
    var user = firebase.auth().currentUser;
    console.log("I'm a user and I will submit the dada.");

    //check if is user
    if (user) {
      //trigger the submited flag.
      this.submited = true;

      //fetch the name
      this.nameToSubmit = this.name.value;

      //create data object
      let data: data = { name: this.nameToSubmit, points: this.pointsService.getPoints(), iud: user.uid }

      if (this.pointsService.getPoints() != -1) {
        this.postData(data);
      }
      else
      {
        this.submited = true;
        this.dataIsReady = false;
        this.noPointsForThisUser = true;
      }
    }
  }

  postData(data: data) {
    //call the request
    this.dataService.post(data).subscribe(response => {
      if (response.status == 200) {
        //if upload with sucess the user can see the results
        this.getData();
      };
      error => {
        console.log("Error: " + error);
        console.log("Status Code: " + response.status);
      }
    });;
  }

  getData() {
    this.data = new Array();

    this.dataService.get().subscribe((response) => {
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          this.data.push({ ...response[key] });
        }
      };

      //see if user is present in the data (if submited)
      for (let index = 0; index < this.data.length; index++) {
        if (firebase.auth().currentUser.uid == this.data[index].iud) {
          console.log("I'm a user.")
          console.log("I submited my data!");
          this.dataSource = new MatTableDataSource<data>(this.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataIsReady = true;
          this.userSubmitedData = true;
          this.noPointsForThisUser = false;
          this.pointsService.setExistingPoints(this.data[index].points);
          console.log("I had " + this.data[index].points + " points!");
        }
        else{
          this.dataIsReady = false;
          this.submited = false;
        }
      }
      this.results.getPoints();
    });
  }

  getNameErrorMessage() {
    return this.name.hasError('minlength') ? 'You must enter a name with at least 3 characters!' :
      this.name.hasError('required') ? 'Can not be null!' :
        '';
  }

  //aply the filter to the table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
