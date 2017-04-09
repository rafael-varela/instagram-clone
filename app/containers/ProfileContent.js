import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentRow from '../components/ContentRow';

import { fetchNextPage } from '../actions/index'

class ProfileContent extends Component {

  renderRows() {
    let rows = [];
    let content = Object.assign([], this.props.currentPosts.data);
    while(content.length) {
      rows.push(content.splice(0, 3));
    }
    return rows.map((row, i) => {
      return <ContentRow key={i} content={row} />;
    });
  }

  renderLoadMoreButton() {
    if (!this.props.currentPosts.hasOwnProperty('data')) {
      return null;
    }

    if(this.props.currentPosts.pagination.hasOwnProperty('next_url')) {
      return (
        <div className="row center-xs">
          <div className="col-xs-12">
            <button
              className="load-more"
              onClick={this.props.fetchNextPage}>
              Load more
            </button>
          </div>
        </div>
      );
    }
    return null;
  }

  renderUnavailable() {
    if (!this.props.currentPosts.hasOwnProperty('data')) {
      return null;
    }

    if (this.props.isPrivate) {
      return (
        <div className="row no-content">
          <div className="col-xs-12 center-xs">
            <div>
              <h1>This Account is Private</h1>
              <p>Follow to see their photos and videos.</p>
            </div>
          </div>
        </div>
      );
    } else if (!this.props.currentPosts.data.length) {
      return (
        <div className="row no-content">
          <div className="col-xs-12 center-xs">
            <div>
              <h1>No posts yet.</h1>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="row profile-content">
        <div className="col-xs">
          {this.renderUnavailable()}
          {this.renderRows()}
          {this.renderLoadMoreButton()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPosts: state.currentPosts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNextPage: fetchNextPage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent);
