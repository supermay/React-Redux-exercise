import React, { PureComponent } from 'react';
import Title from './Title';

class RecipesContainer extends PureComponent {
  renderRecipes = (recipe, index) => {
    console.log(`${index+1}`);
    return (
      <p key={index}>{recipe.title}</p>
    )
  };
  render() {
    return (
      <div className="recipes-wrapper">
        <header>
          <Title content='Recipes' />
        </header>
        <main>
          {/* this line, map and then this.renderRecipes */}
          { this.props.recipes.map(this.renderRecipes) }
        </main>
      </div>
    )
  }
}

export default RecipesContainer;
