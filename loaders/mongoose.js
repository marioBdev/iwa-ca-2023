require('dotenv').config()
const mongoose = require('mongoose')

// const MONGODB_key = process.env.MONGODB_URL
const MONGODB_key = "mongodb://Mario2019451:CcT2019451@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true"

exports.connect = () => {
	mongoose.connect(MONGODB_key, {
	// This line is just required form this in-build method Node updating required
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(console.log('DB connected succssessfully'))
	.catch((error) => {
	console.log('DB connections has Failed')
	console.log(error)
	// There is a "0" log from MongoDB when all is ok or "1" when there is an issue so it closes the DB connection
	process.exit(1)
	})
}