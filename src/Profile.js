import React, {Component} from 'react';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.profile.name === "") {
      return (
        <div>
          Please log in before accessing this profile
        </div>
      )
    } else {
      return (
        <div className="Profile">
          Welcome {this.props.profile.name}!
        </div>
      );
    }
  }
}

export default Profile;



