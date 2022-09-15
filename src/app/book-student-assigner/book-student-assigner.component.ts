import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-book-student-assigner',
  templateUrl: './book-student-assigner.component.html',
  styleUrls: ['./book-student-assigner.component.css']
})
export class BookStudentAssignerComponent implements OnInit{


  //collection of students
  students: {id: number, name: string}[] = [];
  //collection of books
  books: {id: number, name: string}[] = [];
  //collect assigned books that are associated to a student
  assignedBooks: {bookID: number, studentID: number}[] = [];

  selectedAssignBook = '';
  selectedAssignStudent = '';
  assignBookChange = '';
  assignStudentChange = '';

  constructor(public http: HttpClient) {
  }

  /**
   * converts the book id by returning the book name
   * @param id the book id
   * @returns the book name
   */
  getBookNameFromID(id: number){
    return this.books.filter(x=>x.id == id)[0].name;
  }

  /**
   * converts the student id by returning the student name
   * @param id student id
   * @returns the student full name
   */
  getStudentNameFromID(id: number){
    return this.students.filter(x=>x.id == id)[0].name;
  }

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
   * collects the book id and student id from the select element
   * @param value information of both book id and student id with a seperator
   */
  setAssigned(value: string){
    this.selectedAssignBook = value.split('|')[0];
    this.selectedAssignStudent = value.split('|')[1];
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

    this.http.get<any>('http://localhost:3000/assignedBooksAndStudents').subscribe(data=>{
      this.assignedBooks = data.assignedBooks;
    });
  }

  /**
   * collect the book id from the select HTML element
   * @param event the book id
   */
  onChangeBook(event: string) {
    this.assignBookChange = event;
  }

  /**
   * collect the student id from the select HTML element
   * @param event the student id
   */
  onChangeStudent(event: string) {
    this.assignStudentChange = event;
  }

  /**
   * unassign a book to a student
   */
  unassignBook() {
    console.log('studentID unassign: ', this.selectedAssignStudent);
    console.log('bookID unassign: ', this.selectedAssignBook);
    this.http.delete<any>('http://localhost:3000/unassignBookToStudent', {headers: {'bookID': this.selectedAssignBook, 'studentID': this.selectedAssignStudent}}).subscribe(data=>{
      if(data.success){
        alert('successfully unassigned a book to a student');
      } else {
        alert(data.error);
      }
    });
  }

  /**
   * assigning a book to a student
   */
  assignBook() {
    this.http.post<any>('http://localhost:3000/assignBookToStudent', {bookID: this.assignBookChange, studentID: this.assignStudentChange}).subscribe(data=>{
      if(data.success){
        alert('successfully assigned a book to a student');
      } else {
        alert(data.error);
      }
    });
  }

}
