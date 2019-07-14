import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post alt="nature" src="http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg"/>
        <Post alt="nature" src="https://port2site.files.wordpress.com/2016/03/spring-in-nature-wide-wallpaper-603794.jpg"/>
        <Post alt="nature" src="http://miriadna.com/desctopwalls/images/max/Nature-of-Brazil.jpg"/>
        <Post alt="nature" src="https://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg"/>
      </div>    
    );
  };
}

