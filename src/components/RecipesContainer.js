import React, { PureComponent } from 'react';
import Title from './Title';
import RecipeItem from './RecipeItem';

class RecipesContainer extends PureComponent {
  renderRecipes = (recipe, index) => {
    console.log(`${index+1}`);
    return (
      // this is iterator and passdown all the information to the down component
      <RecipeItem key={index} {...recipe}/>
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
