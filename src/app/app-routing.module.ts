import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
{ path: '', redirectTo:'/student',pathMatch:'full' },
{ path: 'student', component:StudentComponent },
{ path: 'student-list', component:StudentListComponent},
{ path: '**', component:NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
