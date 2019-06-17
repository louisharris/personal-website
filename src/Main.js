import React, {Component} from 'react';
import Header from "./Header";
import Body from "./Body";
import "./Main.css"

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      name: "",
      email: "",
      profile_pic: "",
      isLoggedIn: false
    }
  }

  updateFacebook = (name, email, profile_pic) => {
    this.setState({name: name, email: email, profile_pic: profile_pic, isLoggedIn: true});
  };

  updatePage = (value) => {
    this.setState({currentPage: value});
  };

  handleLogout = () => {
    this.setState({name: "", email: "", profile_pic: "", isLoggedIn: false})
  };

  navHome = () => {
    this.setState({currentPage: "home"})
  };

  render() {

    return (
      <div className="Main">
        <Header updatePage={this.updatePage} updateFacebook={this.updateFacebook} handleLogout={this.handleLogout} profile={this.state} navHome={this.navHome}/>
        <div className={"body"}>
          <Body className="body" currentPage={this.state.currentPage} profile={this.state}/>
        </div>
      </div>
    );
  }
}

export default Main;