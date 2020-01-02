import React from 'react'
import { 
    Card, CardHeader, CardContent,
    CardActions, Collapse, Typography,
    CardMedia, IconButton
    }from '@material-ui/core';
import './Recipe.css'
function Recipe(props)
{
    let recipe=props.info
    ///
    return(
        <Card id='card'>
            <div className='cardHead'>
                <CardHeader
                    title={recipe.label.length<24?recipe.label:recipe.label.substring(0,24)+'...'}
                    subheader={`Calories:${recipe.calories.toFixed(2)}, Servings:${recipe.servings}, Difficulty:${recipe.difficulty}`}
                />
                {recipe.label.length<24
                    ?null
                    :<span className='cardTip'>{recipe.label}</span>
                }
            </div>
            <CardMedia
                id='card-image'
                image={recipe.img}
                title={recipe.label}
            />
            <CardContent>

            </CardContent>
            <CardActions>
                <IconButton
                >
                    <a href={recipe.url} target='_blank'>&#128279;</a>
                </IconButton>
            </CardActions>
        </Card>
    )

}
export default Recipe