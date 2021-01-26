import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  constructor(services: CoursesService) 
  { 
    this.courses = services.getCourses();
    this.numberofauthors = services.getCourses().length;
  }
  ngOnInit(): void 
  {
  }
 title = "List Of Courses"
 numberofauthors;
 courses;
}
