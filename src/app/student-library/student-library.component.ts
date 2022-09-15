import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-library',
  templateUrl: './student-library.component.html',
  styleUrls: ['./student-library.component.css']
})
export class StudentLibraryComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('change hit!');
  }

}
