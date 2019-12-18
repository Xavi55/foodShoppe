import React, { useImperativeHandle } from 'react';
import BottomBar from './BottomBar'
import { useState } from 'react'

function App() {
    const [ ingredients, setIngredients ]=useState('')

    const handleIngredients=(s)=>
    {
        console.log('app', s)
    }

    return (
    <div className="App">
        <BottomBar getIngredients={setIngredients}/>
        {console.log(ingredients)}
    </div>
  );
}

export default App;