const { urlencoded } = require('express');
const express = require('express');
const path = require('path')
const session = require('express-session')
const app = express();
const flash = require('connect-flash');
const { application } = require('express');

//settings
app.set('views', path.join( __dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: 'secretkey_dev'
}))
app.use(flash())

//global variable
app.use((req, res, next) => {
    app.locals.messageGlobal = req.flash('successGlobal')
    next()
})

//routes
app.use(require('./routes/index.routes'))

app.listen(3000)
console.log('Server on port', 3000);