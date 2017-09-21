import React, { PureComponent } from 'react';

class RecipeItem extends PureComponent {
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
      </article>
    )
  }
}

export default RecipeItem;
