import React, { PureComponent } from 'react';

class LikeButton extends PureComponent {
  // default State for the button
  constructor(){
    super();
    this.state = {
      liked: false
    }
  }
  toggleLike = (event) => {
    event.preventDefault();
    console.log('Like Button Cliked!')
    this.setState({liked: !this.state.liked})
  }
  // pay attention to classNames
  classNames = () => {
    const {liked} = this.state
    let classes = 'like'
    if(liked){classes += 'liked'}
    return classes
  }

  render(){
    const {liked} = this.state
    return (
      <p className={this.classNames()}>
        <button onClick={this.toggleLike}>{ liked ? '❤️' : '♡' }</button>
      </p>
    )
  }
}

export default LikeButton;
