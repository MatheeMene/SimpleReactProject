import React from 'react';

import '../assets/css/AddNote.css'

class AddNote extends React.Component {

  constructor() {

    super();
    this.state = { title: '', description: '' };

    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.postNewNote = this.postNewNote.bind(this);

  }

  postNewNote(event) {
    event.preventDefault();

    fetch('http://localhost:1337/notes/addnote', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
      }),
    });

    this.props.history.push('/notes');

  }

  setTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  setDescription = (event) => {
    this.setState({ description: event.target.value });
  }

  render() {

    return(
        <div className="container-contact100">
      		<div className="wrap-contact100">
      			<form onSubmit={ this.postNewNote } className="contact100-form validate-form">
      				<span className="contact100-form-title">
      					Write your note
      				</span>

      				<div className="wrap-input100 validate-input">
      					<input value={this.state.title} onChange={this.setTitle} className="input100" type="text" name="title" placeholder="Title"/>
      					<span className="focus-input100"></span>
      				</div>

      				<div className="wrap-input100 validate-input">
      					<textarea value={this.state.description} onChange={this.setDescription} className="input100" name="message" placeholder="Your note"></textarea>
      					<span className="focus-input100"></span>
      				</div>

      				<div className="container-contact100-form-btn">
      					<button className="contact100-form-btn">
      						<span>
      							Save
      						</span>
      					</button>
      				</div>
      			</form>
      		</div>
      	</div>

    );
  }
}
export default AddNote;
