//CONTROLLER
const https = require('https')
const morgan = require('morgan')
const express = require ('express')
const path = require('path')

const { APIID, APIKEY } = require('./config.json')

const app = express()



//Settings
const PORT = process.env.PORT || 5000

//DB
const db = require('./model/dbAccess')

//Middleware
app.use(morgan('dev'))
app.use(express.json())

//Serve the files
app.use(express.static(path.join(__dirname,'view/build')))
///
//Routes
//
app.get('/', async (req,res)=>
{
    res.json({'mess':'welcome'})
})
app.get('/ingredients/load/:name', async (req,res)=>
{
    const { name } = req.params
    getName(name)
    .then(rows=>
    {
        res.json({'data':rows,'code':1})
    })
})
app.post('/ingredients/put', async (req,res)=>
{
    res.json({'mess':req.body})
})

//accepts only food and calories queries
app.get('/recipes/search/', (req,res)=>
{
    let { food, calories }=req.query
    if(!calories)
    {
        calories='0-9999'
    }

    //EDAMAM API
    https.get(`https://api.edamam.com/search?q=${food}&calories=${calories}&app_id=${APIID}&app_key=${APIKEY}&from=0&to=2`,(resp)=>
    {
        let data=''
        resp.on('data',(chunk)=>
        {
            data+=chunk
        });
        resp.on('end',()=>
        {
            var recipes =[]
            try
            {
                JSON.parse(data).hits.map((i)=>
                {
                    recipes.push(
                    {
                        'label':i.recipe.label,
                        'url':i.recipe.url,
                        'img':i.recipe.image,
                        'ingredients':i.recipe.ingredients,
                        'calories':i.recipe.calories,
                        'servings':i.recipe.yield,
                        'difficulty':i.recipe.ingredients.length/10.0
                    })
                })
            }
            catch(e)
            {
                console.log('***No recipes found or API limit error ?***\n',e)
            }
            if(recipes.length!=0)
            {
                res.json({'data':recipes,'code':1})
            }
            else
            {
                res.json({'data':[],'code':0,'mess':'Error'})
            }
        })

        resp.on('error',(e)=>
        {
            console.log(`Error ${e}`)
            res.json({'mess':'error','code':0})
        })
    })
})

app.listen(PORT,()=>
{
    console.log(`Working on port: ${PORT}`)
})
