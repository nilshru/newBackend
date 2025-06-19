require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000 || process.env.PORT

app.get('/', (req, res) => {
  res.send('This is home page by Nilesh')
})

app.get('/about', (req, res) => {
  res.send('This is about page by Nilesh')
})
app.get('/contact', (req, res) => {
  res.send('This is contact page by Nilesh')
})
app.get('/body',(req ,res)=>{
    res.send('This is body page by Nilesh')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
