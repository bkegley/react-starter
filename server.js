require('dotenv').config()

const express = require('express')
const app = express()

// set view engine
app.set('view engine', 'ejs')
app.set('views', 'static/views')

// set middleware
app.use(express.static('static'))

app.get('/', (req, res, next) => {
    res.render('app')
})

app.listen(process.env.PORT || 3000, function() {
  console.log(`Server started at port ${process.env.PORT || 3000}`);
});
