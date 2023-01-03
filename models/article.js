const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

// Create Mongoose Schema into MongoDB Atlas throuth Mongoose library
const articleSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  logocompany: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  jobtype: {
    type: String,
    required: true
  },
  workplace: {
    type: String,
    required: true
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  sanitizedHtml: {
    type: String,
    required: true
  }
})
// Validation to add ech slug into a MongoDB
articleSchema.pre('validate', function(next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: false })
    console.log("Title------------> "+this.slug)
  }
  
  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    console.log("Sanitized------------> "+sanitizedHtml)
  }

  next()
})

module.exports = mongoose.model('article', articleSchema)
console.log(articleSchema)