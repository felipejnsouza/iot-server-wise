const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const consign = require('consign')

module.exports = () => {
    const app = express()

    //variáveis da app
    app.set('port', process.env.PORT || config.get('server.port'))

    //middlewares
    app.use(bodyParser.json())

    //endpoints
    consign({cwd: 'api'})
        .then('data')
        .then('controller')
        .then('routes')
        .into(app)
 

    return app
}
