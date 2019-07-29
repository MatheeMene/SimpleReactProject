import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Axios from 'axios';

import '../assets/css/card.css'
import '../assets/css/bootstrap.min.css'


const Note = props => (
  <tr>
    <td>{ props.note.title }</td>
    <td>{ props.note.description }</td>
    <td className="fica-branco">
      <Link to={ '/edit/' + props.note._id }><FaEdit size={25}/></Link>
    </td>
    <td className="fica-branco">
      <Link to={ props.note._id + '/delete' }><FaTrashAlt size={25}/></Link>
    </td>
  </tr>
);

class Notes extends React.Component {

  constructor(props) {

    super(props);
    this.deleteNote = this.deleteNote.bind(this);

    this._isMounted = false;
    this.state = { notes: [] };

  }

  deleteNote = (event) => {
    event.preventDefault();

    Axios.delete(`http://localhost:1337/notes/` + this.props.match.params.id + '/delete')
      .then(res => console.log(res.data));
  }

  componentDidMount() {
    fetch(`http://localhost:1337/notes`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({ notes: data })
    );
  }

  componentDidUpdate() {
    fetch(`http://localhost:1337/notes`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({ notes: data })
    );
  }

  noteList() {
    return this.state.notes.map((currentNote, i) => {
      return <Note note={currentNote} key={i}/>;
    });
  }

  render() {

    return (
      <div className="background">
        <div className="container absoluta">
        	<table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
            { this.noteList() }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Notes;
