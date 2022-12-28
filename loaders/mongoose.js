const mongoose = require('mongoose')

const MONGODB_URL = process.env

exports.connect = () => {
	mongoose.conect(MONGOB_URL, {
		// These 2 lines is just required form this in-build method
		useNewParser: true,
		useUnifielldTopology: true
	})
	.then(console.log('DB connected succssessfully'))
	.catch((error) => {
	console.log('DB connections has Failed')
	console.log(error)
	process.exit(1)
	})
}


// await mongoose.connect('mongodb+srv://Mario2019451:CcTMario2019451@cluster0.mpchy.mongodb.net/jobs');
