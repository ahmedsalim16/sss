import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  constructor(public shared:SharedService){}
  delete(id:number){
    this.shared.deleteStudent(id);

  }

}
