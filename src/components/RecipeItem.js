import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool
  }
  render(){
    const {title, summary,vegan, vegetarian, pescatarian} = this.props;
    return (
      <article className="recipe">
        <h1>{title}</h1>
        <div>{summary}</div>
        <ul>
          {vegan && <li>66</li>}
          {vegetarian && <li>88</li>}
          {pescatarian && <li>&#128031;</li>}
        </ul>
      <LikeButton />
      </article>
    )
  }
}

export default RecipeItem;
