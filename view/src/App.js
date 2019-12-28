import React from 'react';
import BottomBar from './BottomBar'
import { useState, useEffect } from 'react'

import './index.css'

function App() {
    const [ recipes, setRecipes ]=useState([])
    
   /*  useEffect(()=>
    {
        console.log(recipes)
        //.then(data=>data.json())
    },[recipes]) */

    const [ ingredients, setIngredients ]=useState('')
    const handleIngredients=(s)=>
    {
        fetch(`/recipes/search/?food=${s}`)
        .then(data=>data.json())
        .then(data=>
        {
            if(data.code)
            {
                //console.log(data.data)
                setRecipes(data.data)
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
                return(<h1>{i.label}</h1>)
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