import React, {Component} from 'react';
import jsonp from 'jsonp';

import SearchResult from '../containers/SearchResult';

export default class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchBoxVisible: false,
      users: []
    }
    this.getUsers = this.getUsers.bind(this)
  }

  handleBlur() {
    const _ = this;
    setTimeout(function () {
      _.setState({searchBoxVisible: false});
    }, 200);
  }

  handleFocus() {
    this.setState({searchBoxVisible: true});
  }

  handleInput(e) {
    this.setState({searchTerm: e.target.value});
    this.searchUsers(e.target.value);
  }

  searchUsers(query) {
    const url = `https://api.instagram.com/v1/users/search?q=${query}&access_token=265290872.5704d56.92baa434d9324d14852b2f82391393fd`;
    jsonp(url, this.getUsers);
  }

  getUsers(err, response) {
    this.setState({users: response.data});
  }

  renderSearchBox() {
    if (this.state.searchBoxVisible) {
      return (
        <div className="search-box">
          <div className="search-results">
            {this.renderUsers()}
          </div>
        </div>
      );
    }
  }

  renderUsers() {
    if (this.state.users && this.state.users.length) {
      return this.state.users.map((user) => {
        return <SearchResult key={user.id} user={user} />
      });
    }
  }

  render() {
    return (
      <div className="col-xs-4">
        <div className="searchbar-container" >
          <input
            className="searchbar"
            type="text"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.handleInput.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onFocus={this.handleFocus.bind(this)}>
          </input>
          {this.renderSearchBox()}
        </div>
      </div>
    );
  }
}
