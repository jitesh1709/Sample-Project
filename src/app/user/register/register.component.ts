import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm;
title = 'app';
  constructor(private router : Router) { }

  ngOnInit() {
  		this.registerForm = new FormGroup({
		username : new FormControl("", Validators.required),
		email : new FormControl("", Validators.required),
		password : new FormControl("",Validators.required),
		contact : new FormControl("",Validators.required),
		address : new FormControl("", Validators.required)
	});
  }
	onRegister(){
		alert("You are registered with us");
		console.log(this.registerForm.get('username').value);
		var username,password :string;
		username = this.registerForm.get('username').value;
		password = window.btoa(this.registerForm.get('password').value);
		this.registerForm.reset();
		this.router.navigate(['login']);
		localStorage.setItem('username',username);
		localStorage.setItem('password',password);
	}
}
// userData:string='';emailData:string='';passData:string='';mobData:string='';addData:string='';
// clearAll(){
// 	this.userData="";
// 	this.emailData="";
// 	this.passData="";
// 	this.mobData="";
// 	this.addData="";
// }

