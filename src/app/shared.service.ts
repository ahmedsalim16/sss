import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private http:HttpClient) { }
  private Url='https://salimapi.runasp.net/api/students/'/* put the back-end server link */
 // private Url='https://jsonplaceholder.typicode.com/users'/* put the back-end server link */
  //studentList:any[]=[]

  createNewStudent(student:any){
    return this.http.post(this.Url,student)

  }

  deleteStudent(id: number){
    // let index=this.studentList.findIndex(e=>e.id===id)
    // if(index!==-1){
    //   this.studentList.splice(index,1)
    // }
    // console.log(index)
     
   return this.http.delete(this.Url +id)
  }

  getAllStudents(){
    return this.http.get(this.Url+'getall')
  }
}

