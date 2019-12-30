import React from 'react';
import BottomBar from './BottomBar'
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
    
    const [ ingredients, setIngredients ]=useState('')
    const handleIngredients=(options)=>
    {
        let calories = options[1]
        if(calories==100)
        {
            calories=''
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
        {
            recipes.length
            ?
            recipes.map(i=>
            {
            return(<h1>{i.label}<br/>{i.calories}</h1>)
            })
            :
            <p>empty {recipes[0]}</p>
        }
        <BottomBar getIngredients={handleIngredients}/>
        {/*console.log(ingredients)*/}
    </div>
  );
}

export default App;