const express = require('express')
const Article = require('../models/article')
const router = express.Router()

router.get('/edit/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.render('articles/edit', { article: article })
})
router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})

// Validations 
router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
  // line below send it over to the same page as we are keeping the filed previous data
  res.render('articles/show', { article: article })
})

router.post('/', async (req, res, next) => {
  req.article = new Article()
  next()
}, saveArticleAndRedirect('new'))

// Update a JobTilte by :id
router.put('/:id', async (req, res, next) => {
  req.article = await Article.findById(req.params.id)
  next()
}, saveArticleAndRedirect('edit'))

// Delete a Job
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
})
// Save a Job
function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
    article.company = req.body.company
    article.logocompany = req.body.logocompany
    article.title = req.body.title
    article.jobtype = req.body.jobtype  
    article.workplace = req.body.workplace
    article.markdown = req.body.markdown
    try {
      article = await article.save()
      res.redirect(`/articles/${article.slug}`)
      console.log("Saved in The Data-Base")
    } catch (e) {
      res.render(`articles/${path}`, { article: article })
    }
  }
}

module.exports = router