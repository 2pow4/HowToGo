const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger('dev'))

app.get('/*', (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'public')
  })
})

app.listen(port, () => {
  console.log(`${port}에서 대기 중...`)
})