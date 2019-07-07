import React, {Component} from 'react';
import Profile from "./Profile"
import Home from "./Home"
import Blog from "./Blog"
import Logout from "./Logout"
import './Body.css';

class Body extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    if (this.props.currentPage === "home") {
      return (
        <Home />
      );
    } else if (this.props.currentPage === "profile") {
      return (
        <Profile profile={this.props.profile}/>
      )
    } else if (this.props.currentPage === "blog") {
      return (
        <Blog />
      )
    } else if (this.props.currentPage === "logout") {
      return (
        <Logout logout={this.props.logout} profile={this.props.profile}/>
      )
    }
  }
}

export default Body;



