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
      <div className="Header">

        <Facebook className="facebook" updateFacebook={this.props.updateFacebook} profile={this.props.profile}/>

        <div className={'menu'}>
          {/*<img*/}
          {/*  src={logo}*/}
          {/*  className="home-logo" alt="logo" onClick={() => this.props.navHome()}/>*/}

          Louis' Portfolio
          <div id={"simple-menu"}>
            <SimpleMenu updatePage={this.props.updatePage} handleLogout={this.props.handleLogout}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;



