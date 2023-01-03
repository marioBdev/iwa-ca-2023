require("./loaders/mongoose").connect()
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const path = require('path')

const app = express()

// EJS -- Embedded JavaScript
app.set('view engine', 'ejs')

//APP Configuration
// This is the encod the URL parameters being accessed from the Job Title Form
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

// Endpoint Articles
app.use('/articles', articleRouter)

// Running Express Server Port
app.listen(5000)