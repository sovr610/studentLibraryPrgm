import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Subscription, timer} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-student-book-deleter',
  templateUrl: './student-book-deleter.component.html',
  styleUrls: ['./student-book-deleter.component.css']
})
export class StudentBookDeleterComponent implements OnInit {

  students: {id: number, name: string}[] = [];
  books: {id: number, name: string}[] = [];

  assignBookChange = '';
  assignStudentChange = '';
  subscription !: Subscription;
  constructor(public http: HttpClient) { }

  /**
   * runs when the component is initialzed. runs an update to update html elements with new data from the backend.
   */
  ngOnInit(): void {
    this.updateComponent();
    setInterval(()=>{
      this.updateComponent();
    }, 5000);
  }

  /**
   * Used to collect data from the back-end to populate elements in the component.
   */
  updateComponent() {
    this.http.get<any>('http://localhost:3000/getBooks').subscribe(data=>{
      this.books = data.books;

    });

    this.http.get<any>('http://localhost:3000/getStudents').subscribe(data => {
      this.students = data.students;

    });
  }

  /**
   * collects the book id you want to delete from the mock database.
   * @param event selected option value of the select HTML element
   */
  onChangeBook(event: string) {
    this.assignBookChange = event;
  }

  /**
   * collects the student id you want to delete from the mock database.
   * @param event selected option value of the select HTML element
   */
  onChangeStudent(event: string) {
    this.assignStudentChange = event;
  }

  /**
   * delete the book, you selected from the select HTML element.
   */
  deleteBook() {

    this.http.delete<any>('http://localhost:3000/removeBook', {headers: {'id': this.assignBookChange}}).subscribe(data=>{
      if(data.success){
        alert('successfully deleted book');
      } else {
        alert(data.error);
      }

      this.assignBookChange = '';
      this.updateComponent();
    });
  }

  /**
   * delete the student you selected from the select HTML element.
   */
  deleteStudent() {
    this.http.delete<any>('http://localhost:3000/removeStudent', {headers: {'id': this.assignStudentChange}}).subscribe(data=>{
      if(data.success){
        alert('successfully assigned a book to a student');
      } else {
        alert(data.error);
      }

      this.assignStudentChange = '';
      this.updateComponent();
    });
  }

}
