'use strict';

const {
	getProductByIdHandler,
	getProductListHandler,
	createProductHandler,
	updateProductHandler,
	deleteProductHandler
} = require('./product.handlers');

const VERSION = 'api';

const routes = async router => {
	router.get(`/${VERSION}/product/:uuid`, async (req, reply) => {
		const { uuid } = req.params;
		const { error, data, code } = await getProductByIdHandler(uuid);

		if(error) {
			reply.statusCode = code;
			reply.send(error.message);
		} else {
			reply.statusCode = 200;
			reply.send(data);
		}
	});

	router.get(`/${VERSION}/product`, async (req, reply) => {
		const { query } = req;
		const { error, data, code } = await getProductListHandler(query);

		if(error) {
			reply.statusCode = code;
			reply.send(error.message);
		} else {
			reply.statusCode = 200;
			reply.send(data);
		}
	});

	router.post(`/${VERSION}/product`, async (req, reply) => {
		const newProduct = req.body;
		const { error, data, code } = await createProductHandler(newProduct);

		if(error) {
			reply.statusCode = code;
			reply.send(error.message);
		} else {
			reply.statusCode = 200;
			reply.send(data);
		}
	});

	router.put(`/${VERSION}/product/:uuid`, async (req, reply) => {
		const currentProduct = req.body;
		const { uuid } = req.params;
		const { error, data, code } = await updateProductHandler(currentProduct, uuid);

		if(error) {
			reply.statusCode = code;
			reply.send(error.message);
		} else {
			reply.statusCode = 200;
			reply.send(data);
		}
	});

	router.delete(`/${VERSION}/product/:uuid`, async (req, reply) => {
		const { uuid } = req.params;
		const { error, data, code } = await deleteProductHandler(uuid);

		if(error) {
			reply.statusCode = code;
			reply.send(error.message);
		} else {
			reply.statusCode = 200;
			reply.send(data);
		}
	});
};

module.exports = {
	routes
};
