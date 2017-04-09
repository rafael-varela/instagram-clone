import React, { Component } from 'react';

import Searchbar from './Searchbar';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="row middle-xs navbar-wrapper">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div>

              <div className="row middle-xs">
                <div className="col-xs-4">
                  <div className="logo-container">
                    <a className="icon ig-logo" href="#"></a>
                  </div>
                </div>

                <Searchbar />

                <div className="col-xs-4 end-xs">
                  <div className="buttons-container">
                    <div className="row">

                      <div className="col-xs-3 col-xs-offset-3">
                        <div>
                          <a className="icon explore-icon" href="#"></a>
                        </div>
                      </div>
                      <div className="col-xs-3">
                        <div>
                          <a className="icon heart-icon" href="#"></a>
                        </div>
                      </div>
                      <div className="col-xs-3">
                        <div>
                          <a className="icon profile-icon" href="#"></a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
