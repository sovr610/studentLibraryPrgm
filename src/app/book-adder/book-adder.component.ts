import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-adder',
  templateUrl: './book-adder.component.html',
  styleUrls: ['./book-adder.component.css']
})
export class BookAdderComponent implements OnInit {

  //keep track of the book name you want to add
  bookFullName = '';
  //keep track of the student name you want to add
  studentFullName = '';


  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  /**
   * reset the student name and book name input.
   */
  reset() {
    this.bookFullName = '';
    this.studentFullName = '';
  }

  /**
   * add a new student to the backend mock database
   */
  onAddStudent() {
    this.http.post<any>('http://localhost:3000/addStudent', {name: this.studentFullName}).subscribe(data => {
      if(data.success == true){
        alert('student has been added successfully!');
      } else {
        alert(data.error);
      }
    });
  }

  /**
   * add a new book to the backend mock database
   */
  onAddBook() {
    this.http.post<any>('http://localhost:3000/addBook', {name: this.bookFullName}).subscribe(data => {
      if(data.success == true){
        alert('book has been added successfully!');
      } else {
        alert(data.error);
      }
    });
  }

}
