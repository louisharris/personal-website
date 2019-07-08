import React, {Component} from 'react';
import './Header.css';

import Facebook from "./Facebook";
import SimpleMenu from "./SimpleMenu";
import logo from './louis_blog.png';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="Header">
          <div><Facebook className="facebook" updateFacebook={this.props.updateFacebook} profile={this.props.profile}/></div>
          <div className={'menu'}>
            <h5 className={"home-button"} onClick={() => this.props.navHome()}>
            Louis' Portfolio
            </h5>
            <div id={"simple-menu"}>
              <SimpleMenu updatePage={this.props.updatePage} handleLogout={this.props.handleLogout}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;



