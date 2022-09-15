import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule}  from '@angular/forms';
import { NgModule } from '@angular/core';
import { StudentLibraryComponent } from './student-library/student-library.component';
import { BookAdderComponent } from './book-adder/book-adder.component';
import { BookStudentAssignerComponent } from './book-student-assigner/book-student-assigner.component';
import { StudentBookDeleterComponent } from './student-book-deleter/student-book-deleter.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentLibraryComponent,
    BookAdderComponent,
    BookStudentAssignerComponent,
    StudentBookDeleterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
