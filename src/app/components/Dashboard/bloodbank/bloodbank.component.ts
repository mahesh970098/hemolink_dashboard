import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.css']
})
export class BloodbankComponent {
  main_name:string=''
  Sub_main_name:string=''
  email:string=''
  rating:string=''
  number1:string=''
  number2:string=''
  plink:string=''
  timing:string=''
  year:string=''
  photo:string=''
  location:string=''
  about:string=''

  formData: any = {
    main_name:this.main_name,
    Sub_main_name:this.Sub_main_name,
    email:this.email,
    rating:this.rating,
    number1:this.number1,
    number2:this.number2,
    plink:this.plink,
    timing:this.timing,
    year:this.year,
    photo:null,
    location:this.location,
    about:this.about,

  };





  constructor(private router: Router,private http: HttpClient,private apiService: ApiService) {}


  onFileSelected(event: any) {
    // Get the selected image file
    const file: File = event.target.files[0];
    this.formData.image = file;
  }

  login() {

    const formDataToSend = new FormData();
    formDataToSend.append('head_name', this.main_name);
    formDataToSend.append('sub_name', this.Sub_main_name);
    formDataToSend.append('rating', this.rating);
    formDataToSend.append('phone_number', this.number1);
    formDataToSend.append('mail', this.email);
    formDataToSend.append('location', this.location);
    formDataToSend.append('about_us', this.about);
    formDataToSend.append('policy_link', this.plink);
    formDataToSend.append('timings', this.timing);
    formDataToSend.append('year_of_established', this.year);

    // Append other keys as needed
    formDataToSend.append('photo',  this.formData.image, this.formData.image.name);
    formDataToSend.append('verified','1');
    formDataToSend.append('stateId','1');
    console.log(formDataToSend,"--")

    this.apiService.postData(formDataToSend).subscribe(
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
