import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PointsService } from 'src/app/Shared/Points/points.service';
import { DataService } from '../../../Firebase/Data/data.service';
import { data } from '../../../Firebase/Data/data.interface';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as firebase from 'firebase';
import "firebase/app";
import "firebase/auth";
import { ResultsComponent } from 'src/app/Pages/Quiz/Results/results.component';
import { AuthService } from '../../../Firebase/Auth/auth.service';


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
  nameToSubmit: string = null;
  noPointsForThisUser: boolean = false;
  usersData: data = null;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private pointsService: PointsService, private dataService: DataService, private results: ResultsComponent, private authService: AuthService) { }

  ngOnInit() {
    //Check if it is a user to get the data
    if (this.authService.isAuthenticated()) {
      this.checkIfUserSubmitedData();
    }
  }

  //this method collects the data to send to the post request.
  submit() {
    //check if is user
    if (this.authService.isAuthenticated()) {
      console.log("I'm a user and I will submit the dada.");

      //trigger the submited flag.
      this.submited = true;

      //fetch the name
      this.nameToSubmit = this.name.value;

      //create data object
      let data: data = { name: this.nameToSubmit, points: this.pointsService.getPoints(), iud: firebase.auth().currentUser.uid }

      //check if he has points to submit
      if (this.pointsService.getPoints() != -1) {
        console.log("I have points to upload!");
        this.postData(data);
      }
      else {
        console.log("I don't have points to upload!");
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
    //clear the data array for the new data
    this.data = new Array();

    //get the data from dataService
    this.dataService.get().subscribe((response) => {
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          //push the data to the array
          this.data.push({ ...response[key] });
        }
      };

      //display the data in to the table
      this.dataSource = new MatTableDataSource<data>(this.data);
      //set up the paginator for the data
      this.dataSource.paginator = this.paginator;
      //sort the data
      this.dataSource.sort = this.sort;

      //trigger the flags for html
      this.dataIsReady = true;
      this.noPointsForThisUser = false;
    });
  }

  //this method check if user uploaded his results
  checkIfUserSubmitedData() {
    console.log("I will check if user submited data!");
    //get current user uid
    var user = firebase.auth().currentUser.uid;

    //get the data
    this.dataService.get().subscribe((response) => {
      for (const key in response) {
        //check if this user is present in the data
        if (user == response[key].iud) {
          console.log("I'm a user that submited data!");
          //load this user points
          this.pointsService.setExistingPoints(response[key].points);

          //if points are valid
          if (this.pointsService.getPoints() != -1) {
            console.log("I have valid points!");
            this.submited = true;

            //refresh the points in the results section
            this.results.getPoints();

            //show the data
            this.getData();

            break;
          }
        }
        else {
          console.log("I'm a user that did not submited data!");
          //if points are valid
          if (this.pointsService.getPoints() == -1) {
            this.noPointsForThisUser = true;
            this.submited = true;
          }
        }
      }
    })
  }

  //this method check if name input follow the requirements
  getNameErrorMessage() {
    return this.name.hasError('minlength') ? 'You must enter a name with at least 3 characters!' :
      this.name.hasError('required') ? 'Can not be null!' :
        '';
  }

  //this method aaplies the filter to the table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
