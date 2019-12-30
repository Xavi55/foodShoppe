import React from 'react';
import BottomBar from './BottomBar'
import Recipe from './Recipe'
import { useState, useEffect } from 'react'

import './index.css'
import { string } from 'prop-types';

function App() {
    const [ recipes, setRecipes ]=useState([{"label":"The Ultimate Cheese-Filled Beef and Pork Burger Recipe","url":"http://www.seriouseats.com/recipes/2013/07/the-ultimate-cheese-filled-beef-and-pork-burgers-recipe.html","img":"https://www.edamam.com/web-img/e55/e5519ecb228ee2b046336217c45f5c36.jpg","ingredients":[{"text":"3/4 pound boneless pork top round (see note above)","weight":340.1942775},{"text":"3/4 pound boneless beef chuck (see note above)","weight":340.1942775},{"text":"1/4 pound mild cheddar cheese, grated","weight":113.3980925},{"text":"1/2 teaspoon salt","weight":3},{"text":"1/4 teaspoon freshly-ground black pepper","weight":0.725},{"text":"4 burger buns","weight":168},{"text":"8 Romaine lettuce leaves","weight":48},{"text":"2 beefsteak tomatos, sliced thick","weight":246}],"calories":1995.4749525000002,"servings":4,"difficulty":0.8},
    {"label":"The Ultimate Cheese-Filled Beef and Pork Burger Recipe","url":"http://www.seriouseats.com/recipes/2013/07/the-ultimate-cheese-filled-beef-and-pork-burgers-recipe.html","img":"https://www.edamam.com/web-img/e55/e5519ecb228ee2b046336217c45f5c36.jpg","ingredients":[{"text":"3/4 pound boneless pork top round (see note above)","weight":340.1942775},{"text":"3/4 pound boneless beef chuck (see note above)","weight":340.1942775},{"text":"1/4 pound mild cheddar cheese, grated","weight":113.3980925},{"text":"1/2 teaspoon salt","weight":3},{"text":"1/4 teaspoon freshly-ground black pepper","weight":0.725},{"text":"4 burger buns","weight":168},{"text":"8 Romaine lettuce leaves","weight":48},{"text":"2 beefsteak tomatos, sliced thick","weight":246}],"calories":1995.4749525000002,"servings":4,"difficulty":0.8},{"label":"The Ultimate Cheese-Filled Beef and Pork Burger Recipe","url":"http://www.seriouseats.com/recipes/2013/07/the-ultimate-cheese-filled-beef-and-pork-burgers-recipe.html","img":"https://www.edamam.com/web-img/e55/e5519ecb228ee2b046336217c45f5c36.jpg","ingredients":[{"text":"3/4 pound boneless pork top round (see note above)","weight":340.1942775},{"text":"3/4 pound boneless beef chuck (see note above)","weight":340.1942775},{"text":"1/4 pound mild cheddar cheese, grated","weight":113.3980925},{"text":"1/2 teaspoon salt","weight":3},{"text":"1/4 teaspoon freshly-ground black pepper","weight":0.725},{"text":"4 burger buns","weight":168},{"text":"8 Romaine lettuce leaves","weight":48},{"text":"2 beefsteak tomatos, sliced thick","weight":246}],"calories":1995.4749525000002,"servings":4,"difficulty":0.8},
    {"label":"The Ultimate Cheese-Filled Beef and Pork Burger Recipe","url":"http://www.seriouseats.com/recipes/2013/07/the-ultimate-cheese-filled-beef-and-pork-burgers-recipe.html","img":"https://www.edamam.com/web-img/e55/e5519ecb228ee2b046336217c45f5c36.jpg","ingredients":[{"text":"3/4 pound boneless pork top round (see note above)","weight":340.1942775},{"text":"3/4 pound boneless beef chuck (see note above)","weight":340.1942775},{"text":"1/4 pound mild cheddar cheese, grated","weight":113.3980925},{"text":"1/2 teaspoon salt","weight":3},{"text":"1/4 teaspoon freshly-ground black pepper","weight":0.725},{"text":"4 burger buns","weight":168},{"text":"8 Romaine lettuce leaves","weight":48},{"text":"2 beefsteak tomatos, sliced thick","weight":246}],"calories":1995.4749525000002,"servings":4,"difficulty":0.8}])
       
    //TESTING.TESTING

   /*  useEffect(()=>
    {
        console.log(recipes)
        //.then(data=>data.json())
    },[recipes]) */

    const [ loading, setLoading ]=useState(false)
    //
    
    //const [ ingredients, setIngredients ]=useState('')
    const handleIngredients=(options)=>
    {
        let calories = options[1]
        if(calories===100)
        {
            calories='0-9999'
        }
        else
        {
            calories='0-'+String(calories)
        }
        console.log(options[1],calories)
        fetch(`/recipes/search/?food=${options[0]}&calories=${calories}`)
        .then(data=>data.json())
        .then(data=>
        {
            if(data.code)
            {
                //console.log(data.data)
                setRecipes(data.data)
            }
            else
            {
                console.log(data)
                /*setRecipes([{
                    label:'Unable to find recipes'
                }])
                */
            }
        })
    }
    return (
    <div className="App">
        <div id='stock'>
            ...
        </div>
        {
            recipes.length
            ?
            <div className='recipes'>
                {
                    recipes.map(i=>
                    {
                        return(<Recipe key={i.calories} info={i}/>)
                    })
                }
            </div>
            :
            <p>empty {recipes[0]}</p>
        }
        <BottomBar getIngredients={handleIngredients}/>
        {/*console.log(ingredients)*/}
    </div>
  );
}

export default App;