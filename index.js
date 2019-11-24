//CONTROLLER

const morgan = require('morgan')
const express = require ('express')
const path = require('path')
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
app.get('/ingredients/load', async (req,res)=>
{

    res.json({'mess':'load ingredients'})
})
app.post('/ingredients/put', async (req,res)=>
{
    res.json({'mess':req.body})
})

app.listen(PORT,()=>
{
    console.log(`Working on port: ${PORT}`)
})
