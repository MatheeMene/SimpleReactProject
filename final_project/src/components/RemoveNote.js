import React from 'react';
import Axios from 'axios';

import '../assets/css/AddNote.css'

class RemoveNote extends React.Component {

  constructor(props) {

    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = { title: '', description: '' }
  }

  componentDidMount() {
    Axios.get(`http://localhost:1337/notes/` + this.props.match.params.id )
      .then(response => {
        this.setState({
          title: response.data.title,
          description: response.data.description
        });

      })
      .catch((error) => {
        console.log(error);
      })
  }

  onSubmit = (event) => {
    event.preventDefault();

    Axios.delete(`http://localhost:1337/notes/` + this.props.match.params.id + '/delete')
      .then(res => console.log(res.data));

      this.props.history.push('/notes');
  }

  render() {
    return(
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form onSubmit={ this.onSubmit } className="contact100-form validate-form">
            <span className="contact100-form-title">
              Remove your note
            </span>

            <div className="wrap-input100 validate-input">
              <input readOnly value={ this.state.title } className="input100" type="text" name="title" placeholder="Title"/>
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <textarea readOnly value={ this.state.description } className="input100" name="message" placeholder="Your note"></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                <span>
                  Remove
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RemoveNote;
