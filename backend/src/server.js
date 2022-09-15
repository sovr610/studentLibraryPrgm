const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
}));
app.use(express.json());

let assignedBooks = [{
  bookID: 1,
  studentID: 1,
},
{
  bookID: 2,
  studentID: 2,
}];

let mockStudentData = [{
  id: 0,
  name: 'James Carl',
},
{
  id: 1,
  name: 'parker bidigare',
},
{
  id: 2,
  name: 'Katty jesse',
},
];
let mockBookData = [{
  id: 0,
  name: 'math 101 - calculus I',
},
{
  id: 1,
  name: 'biology 100 texbook',
},
{
  id: 2,
  name: 'math 200 - calculus II',
},
{
  id: 3,
  name: 'History 100 - american history',
},

];

app.post('/addBook', (req, res) => {
  const bookName = req.body.name;
  const len = mockBookData.length;
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  const book = {
    name: bookName,
    id: len,
  };

  if (!mockBookData.some((x) => x.name.toLowerCase().trim() ==
      bookName.toLowerCase().trim())) {
    mockBookData.push(book);
    res.json({
      success: true,
      error: null,
    });
  } else {
    res.json({
      success: false,
      error: 'student already exists',
    });
  }
});

app.delete('/removeBook', (req, res) => {
  const id = req.headers.id;
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  if (mockBookData.some((e) => e.id == id)) {
    mockBookData = mockBookData.filter((data) => data.id != id);

    res.status(200);
    res.json({
      success: true,
      error: null,
    });
  } else {
    res.status(200);
    res.json({
      error: 'Book does not exist!',
      success: false,
    });
  }
});

app.delete('/removeStudent', (req, res) => {
  const id = req.headers.id;

  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  if (mockStudentData.some((e) => e.id == id)) {
    mockStudentData = mockStudentData.filter((data) => data.id != id);
    res.status(200);
    res.json({
      success: true,
      error: null,
    });
  } else {
    res.status(200);
    res.json({
      error: 'Student does not exist!',
      success: false,
    });
  }
});

app.post('/addStudent', (req, res) => {
  const studentName = req.body.name;
  const len = mockStudentData.length;
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  const student = {
    name: studentName,
    id: len,
  };

  if (!mockStudentData.some((x) => x.name.toLowerCase().trim() ==
      studentName.toLowerCase().trim())) {
    mockStudentData.push(student);
    res.json({
      success: true,
      error: null,
    });
  } else {
    res.json({
      success: false,
      error: 'student already exists',
    });
  }
});

app.get('/getBooks', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.json({
    books: mockBookData,
  });
});

app.get('/getStudents', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.json({
    students: mockStudentData,
  });
});

app.get('/assignedBooksAndStudents', (req, res)=>{
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.json({
    assignedBooks: assignedBooks,
  });
});

app.post('/assignBookToStudent', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  const studentID = req.body.studentID;
  const bookID = req.body.bookID;

  if (assignedBooks.some((x) => x.bookID == bookID && x.studentID == studentID)) {
    res.json({
      success: false,
      error: 'book is already assigned to student',
    });
  } else {
    if (bookID == null || studentID == null || bookID == '' || studentID == '') {
      res.json({
        success: false,
        error: 'please select a book and student',
      });
    } else {
      assignedBooks.push({
        bookID: bookID,
        studentID: studentID,
      });
    }

    res.json({
      success: true,
      error: null,
    });
  }
});

app.delete('/unassignBookToStudent', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  const studentID = req.headers.studentid;
  const bookID = req.headers.bookid;

  console.log(req.headers);

  if (assignedBooks.some((x) => x.bookID == bookID && x.studentID == studentID)) {
    assignedBooks = assignedBooks.map((bk) => {
      if (bk['studentID'] != studentID && bk['bookID'] != bookID) {
        return bk;
      }
    });
    res.json({
      success: true,
      error: null,
    });
  } else {
    res.json({
      success: false,
      error: 'the assigned book and student not found in the database',
    });
  }
});

app.listen(3000, '127.0.0.1', function() {
  console.log('Server now listening on 3000');
});

module.exports = app;
