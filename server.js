const express = require('express')
const bodyParser = require('body-parser');


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json({ extend : false}));
app.use('/create' , require('./API/create'));
app.use('/read' , require('./API/read'));
app.use('/delete' , require('./API/delete'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})