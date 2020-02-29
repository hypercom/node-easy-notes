module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    //create a new note
    app.post('/notes', notes.create);

    //retrieve all notes
    app.get('/notes', notes.findAll);

    //retrieve a note by id
    app.get('/notes/:noteId', notes.findOne);

    //update a note by id
    app.put('/notes/:noteId', notes.update);

    //delete a note by id
    app.delete('/notes/:noteId', notes.delete);
}