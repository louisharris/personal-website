import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: '',
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {

    return (
      <div className="App">
        <div className="main-body">
          <h2>Welcome to Louis' website</h2>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>

          <p>{this.state.greeting}</p>

          <div className="image-container">
            <img
              src="https://pbs.twimg.com/profile_images/1101663700396650496/8q89Tnvu.png"
              alt="HeyGuys"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;



