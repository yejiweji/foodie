import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Fridge from "./Fridge";
import Grocery from "./Grocery";
import Calendar from "./Calendar";
import Random from "./Random";

import "./Container.css";

export default class Container extends PureComponent {
  static propTypes = {
    handleRandomRecipeSearch: PropTypes.func,
    updateSearchQuery: PropTypes.func,
    handleIngredientRecipesSearch: PropTypes.func,
    navCard: PropTypes.string,
    title: PropTypes.string,
    randomIsLoading: PropTypes.bool,
    ingredientIsLoading: PropTypes.bool,
    randomRecipes: PropTypes.array,
    ingredientRecipes: PropTypes.array,
    searchQuery: PropTypes.string,
  };

  render() {
    const {
      navCard,
      title,
      handleIngredientRecipesSearch,
      handleRandomRecipeSearch,
      updateSearchQuery,
      searchQuery,
      ingredientIsLoading,
      randomIsLoading,
      ingredientRecipes,
      randomRecipes,
    } = this.props;

    return (
      <div className="app_container">
        <div className="container_title">{title}</div>
        {navCard === "fridge" ?
          <Fridge
            handleIngredientRecipesSearch={handleIngredientRecipesSearch}
            updateSearchQuery={updateSearchQuery}
            searchQuery={searchQuery}
            isLoading={ingredientIsLoading}
            recipes={ingredientRecipes}
          /> : null}
        {navCard === "grocery" ? <Grocery /> : null}
        {navCard === "calendar" ? <Calendar /> : null}
        {navCard === "random" ?
          <Random
            handleRandomRecipeSearch={handleRandomRecipeSearch}
            isLoading={randomIsLoading}
            recipes={randomRecipes}
          /> : null}
      </div>
    );
  }
}
