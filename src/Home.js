import React, {Component} from 'react';
import './Home.css';

class Home extends Component {

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
          <h2>Links to Profiles</h2>

          {/*<form onSubmit={this.handleSubmit}>*/}
          {/*  <label htmlFor="name">Enter your name: </label>*/}
          {/*  <input*/}
          {/*    id="name"*/}
          {/*    type="text"*/}
          {/*    value={this.state.name}*/}
          {/*    onChange={this.handleChange}*/}
          {/*  />*/}
          {/*  <button type="submit">Submit</button>*/}
          {/*</form>*/}

          <p>{this.state.greeting}</p>

          <div className="image-container" id={"img1"}>
            <a href={"https://github.com/louisharris"}>
            <img className={"images"}
              src="https://images.ctfassets.net/u8omydhrm1gu/4LG1BWzMKFIi3H46MY3HNG/c822e52f1dbe522997582ca354de7bef/github-logo-1.png"
              alt="Github"
            />
            </a>
          </div>
          <div className="image-container" id={"img2"}>
            <a href={"https://www.linkedin.com/in/louis-harris-864017149/"}>
            <img className={"images"}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png"
              alt="LinkedIn"
            />
            </a>
          </div>
          <div className="image-container" id={"img3"}>
            <a href={"https://www.hackerrank.com/louisfharris"}>
            <img className={"images"}
              src="https://additionalknowledge.files.wordpress.com/2017/12/hackerrank.png?w=640"
              alt="HackerRank"
            />
            </a>
          </div>
          <div className="image-container" id={"img4"}>
            <a href={"https://stackoverflow.com/users/11751394/louis-harris?tab=profile"}>
            <img className={"images"}
              src="https://i0.wp.com/wptavern.com/wp-content/uploads/2016/07/stack-overflow.png?ssl=1"
              alt="StackOverflow"
            />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;



