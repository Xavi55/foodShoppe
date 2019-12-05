const db = require('./db')
util = require('util')

const executeQuery = util.promisify(db.query).bind(db);

getName=(name)=>
    {
        const query = `SELECT * FROM userIngredients WHERE name=?`
        const params = name

        return executeQuery(query, params)
        .then(rows=>
        {
            return rows
        })
    }
//getName('KEV').then((d)=>console.log(d))