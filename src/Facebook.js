import React, {Component} from 'react';
import './App.css';

import {FacebookProvider, LoginButton, Status} from 'react-facebook';

class Facebook extends Component {

  constructor(props) {
    super(props);
  }

  handleResponse = (event) => {
    if (!this.props.profile.isLoggedIn) {
      this.props.updateFacebook(event.profile.name, event.profile.email, event.profile.picture.data.url);
    }
  };

  handleError = (error) => {
    this.setState({ error });
  };

  render() {

    let fbLoggedIn;

    if (!this.props.profile.isLoggedIn) {
          fbLoggedIn = (
            <FacebookProvider appId="465130564297202">

              <LoginButton
                scope="email"
                onCompleted={this.handleResponse}
                onError={this.handleError}
              >
                <span>Login via Facebook</span>
              </LoginButton>

              <Status>
                {({loading, status}) => (
                  <div>
                    {console.log("App connection status: " + status)}
                  </div>
                )}
              </Status>
            </FacebookProvider>
          )
        } else {
          fbLoggedIn = (
            <FacebookProvider appId="465130564297202">

              <Status>
                {({loading, status}) => (
                  <div>
                    {console.log("App connection status: " + status)}
                  </div>
                )}
              </Status>

              <div className="contained-img">
                <img
                  src={this.props.profile.profile_pic}
                  alt="Pic"
                />
                Welcome Back, {this.props.profile.name}!
              </div>

            </FacebookProvider>
          )
        }
          return (fbLoggedIn);
    }
}

export default Facebook;
