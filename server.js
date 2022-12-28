const express = require('express')
const mongoose = require('mongoose')
const Article = require('./iwa-ca-2023/models/article')
const articleRouter = require('./iwa-ca-2023/routes/articles')
const methodOverride = require('method-override')
const app = express()

// mongoose.connect('mongodb://localhost/blog', {
//  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
//}

app.set('view engine', 'ejs')
// This is the binding parameters being accessed from the Job Title Form
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
// res.send("Heloo World")
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000)