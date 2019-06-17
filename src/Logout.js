import React, {Component} from 'react';

class Logout extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props.profile.name);

    return (
      <div className="Logout">
        You have been successfully logged out
      </div>
    );
  }
}

export default Logout;