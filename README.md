# Student Library Management Software

## Description
This application keeps track of books, students and managing info on if a student takes out a book or returns a book.
In the upper left of the web app you can add new students and new books. In the upper right corner you can delete
books and students from the system. The middle bottom of the web application, you can set who has what book
by selecting the student and book, then clicking on the `Assign book` button. To remove a relationship of a book
and a student (when a student returns a book), you will need to select an option in the listbox and click on
the button named `unassign book`. The Listbox will have the student name and book name.

## Setup
The application has a front-end angular application with a node backend server. The backend has a mock database
and uses Jest and supertest to test the endpoints of the server. The angular app has three main components and
one parent componet (along with the root) that makes up the who user interface. The components use the HttpClient 
to communicate to the back-end server.

## Steps To Run

### Main Application
1. go to the root directory of the angular app and run `npm install` and go to `./backend` and run `npm install`.
2. within the root directory of the angular app run `npm run start` and open your browser and go to `http://localhost:4200`

### Run Tests
1. If you want to run the tests for the backend server, go to `./backend` and run `npm run test`.
