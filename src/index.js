const express = require('express');//
const app = express();//
const mongoose = require('mongoose');//
mongoose.connect('mongodb://localhost:27017/Server');
const morgan = require('morgan')//
const handlebars = require("express-handlebars");//
const methodOverride = require('method-override')//
const path = require('path')//
const route = require('./router');//

app.use(morgan('combined'))
app.use(methodOverride('_method'));
app.use(express.json());

app.engine('handlebars', handlebars.engine({ extname: 'handlebars' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resourses', 'views'));
app.use(express.urlencoded());

app.listen(3000)

route(app);