import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { FormBuilder } from '@angular/forms';

// Interface for the data structure
interface ExampleData {
  position: number;
  name: string;
  weight: number;
}

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css'],
})
export class SucessComponent implements OnInit {
  dummyData: ExampleData[] = [
    { position: 1, name: 'John Doe', weight: 70 },
    { position: 2, name: 'Jane Smith', weight: 65 },
    { position: 3, name: 'Alice Johnson', weight: 68 },
    // Add more dummy data as needed
  ];

  // Column names to display in the table
  displayedColumns: string[] = [
    'userid',
    'user_name',
    'email',
    'blood_group',
    'role',
    'city',
    'state',
    'phone_no',
  ];

  // MatTableDataSource to hold the data
  dataSource: any = [];
  // dataSource = new MatTableDataSource<ExampleData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    try {
      // this.dataSource.paginator = this.paginator;

      // Fetch data from the API and bind it to MatTableDataSource
      this.apiService.Getalldata().subscribe((data: any) => {
        // console.log(data);
        if (data.result == 'success') {
          // data.data.map((res: any) => {
            this.dataSource = new MatTableDataSource(data.data);
            this.dataSource.paginator = this.paginator;
            console.log(this.dataSource.paginator, '-------');


            // this.dataSource.data = data;
            console.log(this.dataSource)

          // })
        }else{

        }

      });
      // this.apiService.Getalldata().subscribe(
      //   response => {
      //     // Handle the response from the API
      //     console.log('Response:', response);
      //     console.log(response.data)
      //   },
      //   error => {
      //     // Handle errors if the API request fails
      //     console.error('Error:', error);
      //   }
      // )
    } catch (e) {}
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}
