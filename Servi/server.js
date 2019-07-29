const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const noteRoutes = express.Router();
const PORT = 1337;


let Note = require('./note.model');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/notes', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB DATABASE CONNECTION SUCESS");
});

noteRoutes.route('/').get((req, res) => {
  Note.find((err, notes) => {
    if(err) {
      console.log(err);
    } else {
      res.json(notes);
    }
  });
});

app.use('/notes', noteRoutes);

app.listen(PORT, () => {
  console.log("funziono");
});

noteRoutes.route('/addnote').post((req, res) => {
  let note = new Note(req.body);
  note.save()
    .then(note => {
      res.status(200).json({ 'note': 'Note added with sucess' });
    })
    .catch(err => {
      res.status(400).send('Adding new note failed');
    });
});

noteRoutes.route('/update/:id').post((req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if(!note) {
      res.status(404).send('data is not found');
    } else {
      note.title = req.body.title;
      note.description = req.body.description;

      note.save().then(note => {
        res.json('Note updated');
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
    }
  });
});

noteRoutes.route('/:id').get((req, res) => {
  let id = req.params.id;
  Note.findById(id, (err, note) => {
    res.json(note);
  });
});

note_delete = function (req, res) {
    Note.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

noteRoutes.delete('/:id/delete', note_delete);
