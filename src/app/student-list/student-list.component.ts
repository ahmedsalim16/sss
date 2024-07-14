import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  constructor(public shared:SharedService){}
  student:any;

  ngOnInit(): void {
    this.shared.getAllStudents().subscribe(
      res=>{
        this.student=res;

      },
      err=>{
        console.log(err);
        
      }
    )
  }
  delete(id:number){
    this.shared.deleteStudent(id) .subscribe(
      res=>{
        console.log(res);
       this.ngOnInit()
        //this.student=this.student.filter((a:any)=>a.id!=id);
        },
        err=>{
          console.log(err);
          }
    )

  }

}
