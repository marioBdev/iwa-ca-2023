const mongoose = require('mongoose')
require('dotenv').config()
const  MONGODB_key = process.env.MONGODB_URL
console.log(MONGODB_key)

exports.connect = () => {
	mongoose.connect(MONGODB_key, {
		// This line is just required form this in-build method Node updating required
		useNewUrlParser: true
	})
	.then(console.log('DB connected succssessfully'))
	.catch((error) => {
	console.log('DB connections has Failed')
	console.log(error)
	// There is a "0" log from MongoDB when all is ok or "1" when there is an issue so it closes the DB connection
	process.exit(1)
	})
}