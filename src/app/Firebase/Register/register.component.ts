import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PointsService } from 'src/app/Quiz/Points/points.service';
import { DataComponent } from '../Data/data.component';
import { data } from '../Data/data.interface';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

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

  getNameErrorMessage() {
    return this.name.hasError('minlength') ? 'You must enter a name with at least 3 characters!' :
      this.name.hasError('required') ? 'Can not be null!' :
        '';
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private pointsService: PointsService, private firebase: DataComponent) { }

  ngOnInit() {
  }

  //this method collects the data to send to the post request.
  submit() {
    //trigger the submited flag.
    this.submited = true;

    //fetch the name
    let nameToSubmit: string = this.name.value;

    //create data object
    let data: data = { name: nameToSubmit, points: this.pointsService.returnPoints() }

    //call the method to post the data
    this.postData(data);
  }

  postData(data: data)
  {
    //call the request
    this.firebase.post(data).subscribe(response => {
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
    this.firebase.get().subscribe(response => {
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          this.data.push({ ...response[key] });
        }
      }
      this.dataSource = new MatTableDataSource<data>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataIsReady = true;
    });
  }

  //aply the filter to the table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
