import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserInfo, fetchPosts } from '../actions/index';

class SearchResult extends Component {
  handleClick() {
    this.props.fetchUserInfo(this.props.user.id);
    this.props.fetchPosts(this.props.user.id);
  }

  render() {
    return (
      <div className="row" onClick={this.handleClick.bind(this)}>
        <div className="col-xs-3 center-xs">
          <img className="" src={this.props.user.profile_picture} />
        </div>
        <div className="col-xs-9">
          <h1>{this.props.user.username}</h1>
          <span>{this.props.user.full_name}</span>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUserInfo: fetchUserInfo, fetchPosts: fetchPosts }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchResult);
