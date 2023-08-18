'use strict';

const Fastify = require('fastify');
const fastifyCors = require('@fastify/cors');
const dotenv = require('dotenv');
const { routes } = require('./views/product.routes');
const { initDb } = require('./helpers/mongodbConnection');

dotenv.config();
const CORS_OPTIONS = { origin: true };
const PORT = process.env.PORT || 8080;
const { SERVER } = process.env;

initDb();
if(SERVER !== 'serverless') {
	const fastify = Fastify();
	fastify.register(fastifyCors, () => {
		return (req, callback) => {
			callback(null, CORS_OPTIONS);
		};
	});
	fastify.register(routes);
	fastify.listen({ port: PORT }, () => {
		console.log('server up at port', PORT);
	});
}
