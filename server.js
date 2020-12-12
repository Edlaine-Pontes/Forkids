require('dotenv-safe').config()

const app = require('./src/app')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`)
})