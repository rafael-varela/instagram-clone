import React, {Component} from 'react';

import Content from './Content';

export default class ContentRow extends Component {

  renderContent() {
    return this.props.content.map(content => {
      return <Content key={content.created_time} content={content} />
    })
  }

  render() {
    return (
      <div className="row middle-xs content-row">
        {this.renderContent()}
      </div>
    );
  }
}
