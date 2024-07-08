import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { text } from 'stream/consumers';
import { Loginmodel } from '../loginmodel';
import { log } from 'console';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  public login:Loginmodel
  constructor(public shared:SharedService){
   this.login=new Loginmodel();
  }
  ngOnInit(){}

  onsubmit(form:NgForm){
   console.log(this.login)
  }

  student ={
    id:0,
    Fname:'',
    Lname:'',
    email:'',
    age:0,
    address:'',
    city:'',
    grade:0,
    gender:''

  }
  

  addStudent(){
    this.shared.studentList.push(this.student);
    this.student={
      id:0,
      Fname:'',
      Lname:'',
      email:'',
      age:0,
      address:'',
      city:'',
      grade:0,
      gender:''
  
    }
   console.log(this.student) 
  }
}


