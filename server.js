const app = require('./config/express')()

const port = app.get('port')

//rodando a app na porta setada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})