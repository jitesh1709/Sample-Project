import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
login;
username:string='';
password:string='';
  constructor(private router : Router) { }

  ngOnInit() {
  this.login = new FormGroup({
	username : new FormControl("", Validators.required),
	password : new FormControl("", Validators.required)
	});
  }
  onSubmit(){
    this.username = localStorage.getItem('username');
    this.password = window.atob(localStorage.getItem('password'));
    if(this.login.get('username').value==this.username && this.login.get('password').value==this.password){
      alert('Success');
      this.router.navigate(['login']);
    }
    else{
      alert("Invalid Credentials");
    }
  }
}
      // code...
    //console.log(this.login.get('username').value);