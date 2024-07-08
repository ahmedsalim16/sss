import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  studentList:any[]=[]
  deleteStudent(id: number){
    let index=this.studentList.findIndex(e=>e.id===id)
    if(index!==-1){
      this.studentList.splice(index,1)
    }
    console.log(index)
     
  // return this.http.delete(this.Url+'hero/heros'+id)
  }
}
