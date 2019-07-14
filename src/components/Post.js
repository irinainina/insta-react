import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User 
          src="https://ucarecdn.com/ae930675-6507-428a-b73c-1a07171cc2a5/-/format/auto/" 
          alt="woman"
          name="Anna"
          min/>
        <img src={this.props.src} alt={this.props.alt}/>
        <div className="post__name">
          post__namepost__namepost__name
        </div>
        <div className="post__descr">
          post__descrpost__descrpost__descr
        </div>
      </div>    
    );
  };
}

