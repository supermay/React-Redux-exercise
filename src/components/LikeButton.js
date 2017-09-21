import React, { PureComponent } from 'react';

class LikeButton extends PureComponent {
  toggleLike = (event) => {
    event.preventDefault();
    console.log('Like Button Cliked!')
  }
  
  render(){
    return (
      <p>
        <button onClick={this.toggleLike}>LikeButton</button>
      </p>
    )
  }
}

export default LikeButton;
