import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';


export default class Users extends Component {
  InstaService = new InstaService();
  
  state = {
    posts: [],
    error: false
  }
  
  componentDidMount() {
    this.updatePosts();
  }
  
  updatePosts() {
    this.InstaService.getAllPosts()
    .then(this.onPostsLoaded)
    .catch(this.onError);
  }
  
  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false
    })
  }
  
  onError = (error) => {
    this.setState({      
      error: true
    })
  }
  
  renderItems(arr) {
    return arr.map(item => {
      const {name, altname, photo, id} = item;
      
      return (
        <User key="id"
          src={photo}
          alt={altname}
          name={name}
          min/>  
      );
      
    })
  }
  
  render() {
    const {error, posts} = this.state;
    
    if(error) {
      return <ErrorMessage/>
    }
    
    const items = this.renderItems(posts);
      
    return (
      <div className="right">
        {items[0]}
        <div className="users__block">
          {items}
        </div>
      </div>    
    );
  };
}
