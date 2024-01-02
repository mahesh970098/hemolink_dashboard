import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  name:string=''
  description:string=''

  photo:string=''


  formData: any = {
    name:this.name,
    description:this.description,

    photo:null,

  };





  constructor(private router: Router,private http: HttpClient,private apiService: ApiService) {}


  onFileSelected(event: any) {
    // Get the selected image file
    const file: File = event.target.files[0];
    this.formData.image = file;
  }

  login() {

    const formDataToSend = new FormData();
    formDataToSend.append('head_name', this.name);
    formDataToSend.append('sub_name', this.description);

    // Append other keys as needed
    formDataToSend.append('photo',  this.formData.image, this.formData.image.name);


    this.apiService.postData_image(formDataToSend).subscribe(
      response => {
        // Handle the response from the API
        console.log('Response:', response);
      },
      error => {
        // Handle errors if the API request fails
        console.error('Error:', error);
      }
    );

    // Perform authentication here (e.g., call a service)
    // console.log(this.email,this.Sub_main_name,this.main_name,this.rating,this.number1,this.number2,this.plink,this.timing,
    //   this.photo,this.location,this.about,"-" )
    // For example purposes, let's assume successful login redirects to dashboard
    // this.router.navigate(['/dashboard']);
  }
}
