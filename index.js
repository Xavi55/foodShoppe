//CONTROLLER
const https = require('https')
const morgan = require('morgan')
const express = require ('express')
const path = require('path')

const { APIID, APIKEY } = require('./config.json')

const app = express()



//Settings
const PORT = process.env.PORT || 5000

//Data
//

//Middleware
app.use(morgan('dev'))
app.use(express.json())

//Serve the files
app.use(express.static(path.join(__dirname,'view/build')))
///
//Routes
//
app.get('/ingredients/load/:name', async (req,res)=>
{
    const { name } = req.params
    res.json({'mess':'load ingredients','n':name})
})
app.post('/ingredients/put', async (req,res)=>
{
    res.json({'mess':req.body})
})
app.get('/recipes/search/:foods', (req,res)=>
{
    //EDAMAM API
    let { food }=req.params

   /*  var options = {
        "method": "GET",
        "hostname": "api.edamam.com",
        "port": null,
        "path": "/search?q=beef&app_id=fb89c3a4&app_key=b2223fceb36e6602700bcac8d8effa53&from=0&to=10",
        "headers": {
          "cache-control": "no-cache",
          "postman-token": "07f002a7-af68-b0ca-323d-c8a2a22fff98"
        }
    }
 */
    https.get(`https://api.edamam.com/search?q=${food}&app_id=${APIID}&app_key=${APIKEY}&from=0&to=10`,(resp)=>
    {
        let data=''
        resp.on('data',(chunk)=>
        {
            data+=chunk
        });
        resp.on('end',()=>
        {
            let recipes =[]
            JSON.parse(data).hits.map((i)=>
            {
                recipes.push(
                    {
                        'label':i.recipe.label,
                        'url':i.recipe.url,
                        'ingredients':i.recipe.ingredients,
                        'calories':i.recipe.calories,
                        'servings':i.recipe.yield
                    })
            })
            res.json({'data':recipes})
        })
    })
})

app.listen(PORT,()=>
{
    console.log(`Working on port: ${PORT}`)
})
