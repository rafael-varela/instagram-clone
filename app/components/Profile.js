import React, { Component } from 'react';

import ProfileHeader from '../containers/ProfileHeader';
import ProfileContent from '../containers/ProfileContent';

export default class Main extends Component {
  render() {
    return (
      <main>
        <div className="row profile-wrapper">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div className="box">
              <ProfileHeader />
              <ProfileContent />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
