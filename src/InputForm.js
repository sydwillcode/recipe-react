import React, { useState, useEffect } from "react";
import axios from "axios";
import MealDisplay from "./MealDisplay";
import useSetValue from "./hooks/useSetValue";

function InputForm() {
	const [recipes, setRecipes] = useState([]);
	const [mainFood, updateMainFood] = useSetValue("");
	const [query, setQuery] = useState("");

	async function getRecipe() {
		let res = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
		);
		const meal = res.data.meals;
		setRecipes(meal);
		console.log(meal);
	}

	useEffect(() => {
		getRecipe();
	}, [query]);

	function getMainFood(e) {
		e.preventDefault();
      setQuery(mainFood);      
	}

	return (
		<div>
			<h1>You are searching for {mainFood} </h1>
			<form onSubmit={getMainFood}>
				<input
					type="text"
					value={mainFood}
					placeholder="Enter main ingredient"
					onChange={updateMainFood}
				></input>
				<button type="submit">Submit</button>
			</form>
			{recipes.map(recipe => (
				<MealDisplay
					title={recipe.strMeal}
					imageURL={recipe.strMealThumb}
					mealID={recipe.idMeal}
				/>
			))}
		</div>
	);
}

export default InputForm;
