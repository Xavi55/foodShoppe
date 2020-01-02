import React from 'react';
import BottomBar from './BottomBar'
import Recipe from './Recipe'
import { useState, useEffect } from 'react'

import './index.css'
import { string } from 'prop-types';

function App() {
    const [ recipes, setRecipes ]=useState([])
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
        <div className='recipes'>
        {
            recipes.length
            ?
                recipes.map(i=>
                {
                    return(<Recipe key={i.calories} info={i}/>)
                })
            :
            <p>empty {recipes[0]}</p>
        }
        </div>
        <BottomBar getIngredients={handleIngredients}/>
        {/*console.log(ingredients)*/}
    </div>
  );
}

export default App;