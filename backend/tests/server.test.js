const app = require('../src/server');
const request = require('supertest');

describe('Test getting all the books and students', ()=>{
  test('GET /getBooks', (done)=>{
    request(app)
        .get('/getBooks')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res)=>{
          if (err) return done(err);
          return done();
        });
  });

  test('GET /getStudents', (done)=>{
    request(app)
        .get('/getStudents')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res)=>{
          if (err) return done(err);
          return done();
        });
  });
});

describe('Test adding books and students', ()=>{
  test('POST /addStudent', (done)=>{
    request(app)
        .post('/addStudent')
        .send({name: 'test tester'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res)=>{
          if (err) return done(err);
          if (res.body.auccess == true) {
            return done();
          } else {
            return done(res.body.error);
          }
        });
  });

  test('POST /addBook', (done)=>{
    request(app)
        .post('/addBook')
        .send({name: 'textbook - subject'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res)=>{
          if (err) return done(err);
          if (res.body.auccess == true) {
            return done();
          } else {
            return done(res.body.error);
          }
        });
  });
});

describe('Test removing books and students', ()=>{
  test('DELETE /removeBook', (done) => {
    request(app)
        .delete('/removeBook')
        .send({name: 'textbook - subject'})
        .set('Accept', 'application/json')
        .set('id', 1)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res)=>{
          if (err) return done(err);
          if (res.body.auccess == true) {
            return done();
          } else {
            return done(res.body.error);
          }
        });
  });

  test('DELETE /removeStudent', (done) => {
    request(app)
        .delete('/removeStudent')
        .send({name: 'textbook - subject'})
        .set('Accept', 'application/json')
        .set('id', 1)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res)=>{
          if (err) return done(err);
          if (res.body.auccess == true) {
            return done();
          } else {
            return done(res.body.error);
          }
        });
  });
});


describe('Test assigning and unassigning books to students', ()=>{
  test('POST /assignBookToStudent', (done) => {
    request(app)
        .post('/assignBookToStaudent')
        .send({name: 'textbook - subject'})
        .set('Accept', 'application/json')
        .send({studentID: 1, bookID: 2})
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res)=>{
          if (err) return done(err);
          if (res.body.auccess == true) {
            return done();
          } else {
            return done(res.body.error);
          }
        });
  });

  test('DELETE /unassignBookToStudent', (done) => {
    request(app)
        .delete('/unassignBookToStudent')
        .send({name: 'textbook - subject'})
        .set('Accept', 'application/json')
        .set('bookid', 1)
        .set('studentid', 1)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res)=>{
          if (err) return done(err);
          if (res.body.auccess == true) {
            return done();
          } else {
            return done(res.body.error);
          }
        });
  });
});
