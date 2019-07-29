import React from 'react';
import Axios from 'axios';

import '../assets/css/AddNote.css'

class EditNote extends React.Component {


  constructor(props) {

    
    super(props);

    this.changeTitle = this.changeTitle.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
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

  changeTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  changeDescription = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const object = {
      title: this.state.title,
      description: this.state.description
    };
    Axios.post(`http://localhost:1337/notes/update/` + this.props.match.params.id, object)
      .then(res => console.log(res.data));

      this.props.history.push('/notes');
  }

  render() {
    return(
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form onSubmit={ this.onSubmit } className="contact100-form validate-form">
            <span className="contact100-form-title">
              Edit your note
            </span>

            <div className="wrap-input100 validate-input">
              <input value={ this.state.title } onChange={ this.changeTitle } className="input100" type="text" name="title" placeholder="Title"/>
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <textarea value={ this.state.description } onChange={ this.changeDescription } className="input100" name="message" placeholder="Your note"></textarea>
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

export default EditNote;
