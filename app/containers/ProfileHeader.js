import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ProfileHeader extends Component {
  render() {
    const user = this.props.currentUser;

    if (!user.hasOwnProperty('id')) {
      return null;
    }

    return (
      <div className="row middle-xs profile-header">

        <div className="col-xs-4">
          <div className="box center-xs">
            <img className="profile-pic" src={user.profile_picture}></img>
          </div>
        </div>

        <div className="col-xs-8">

          <div className="row middle-xs">
            <div className="col-xs-12">
              <div>
                <h1 className="username">{user.username}</h1>
                  <span className="follow-btn">
                    <button>Follow</button>
                  </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4">
              <strong>{user.counts.media}</strong> <span>posts</span>
            </div>
            <div className="col-xs-4">
              <strong>{user.counts.followed_by}</strong> <span>followers</span>
            </div>
            <div className="col-xs-4">
              <div>
                <strong>{user.counts.follows}</strong> <span>following</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div>
                <strong>{user.full_name}</strong> <span>{user.bio}</span> <a href="#">{user.website}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser};
}

export default connect(mapStateToProps)(ProfileHeader);
