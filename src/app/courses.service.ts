import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {

   }
   getCourses(){
    return ["C#", "MVC", "Azure", "SQL Server"];
   }
}
