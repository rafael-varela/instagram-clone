import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row center-xs middle-xs footer-container" style={{maxWidth: 935}}>
          <div className="col-xs-12">
            <div className="box">
              <nav>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">API</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Directory</a></li>
                  <li><a href="#">Language</a></li>
                </ul>
              </nav>
              <span>© 2017 Instagram</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
