const express = require('express')
const app = express()

const PORT = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let increment = 1

app.get('/', (req, res) => {
    res.json({
        counter: increment
    })
})

app.get('/increment', (req, res) => {
    increment += 1
    res.json({
        increment: increment,
        counter: {
            "previous increment": increment - 1,
            "current increment": increment
        }
    })
})

app.get('/decrement', (req, res) => {
    increment -= 1
    res.json({
        increment: increment,
        counter: {
            "previous increment": increment - 1,
            "current increment": increment
        }
    })
})



app.listen(PORT, () => {
    console.log('app listening on port', PORT);
})