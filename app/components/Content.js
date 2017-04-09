import React, {Component} from 'react';

export default class Content extends Component {
  render() {
    const content = this.props.content;

    return (
      <div className="col-xs-4">
        <div className="content-box">
          <img src={content.images.thumbnail.url}/>
          {content.type == "image" ? null : <span className="icon video-icon"></span>}
          <div className="content-details ">
            <div className="row middle-xs center-xs">
              <div className="col-xs-12 col-sm-4">
                {content.type == "image" ? <span className="icon likes-icon"></span> : <span className="icon play-icon"></span>}
                <span>{content.likes.count}</span>
              </div>
              <div className="col-xs-12 col-sm-4">
                <span className="icon speech-icon"></span>
                <span>{content.comments.count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
