'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.Promise = global.Promise;
let isConnected;

const initDb = async () => {
	const { DB_URI } = process.env;

	if(isConnected)
		return Promise.resolve();

	return mongoose.connect(DB_URI)
		.then(db => {
			console.log('mongo up');
			isConnected = db.connections[0].readyState;
		});
};

module.exports = {
	initDb
};
