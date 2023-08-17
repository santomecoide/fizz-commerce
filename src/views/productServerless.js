'use strict';

const { initDb } = require('../helpers/mongodbConnection');
const {
	getProductByIdHandler,
	getProductListHandler,
	createProductHandler,
	updateProductHandler,
	deleteProductHandler
} = require('./product.handlers');

const getProductById = async ({ pathParameters }) => {
	await initDb();
	const { uuid } = pathParameters;
	const { error, data, code } = await getProductByIdHandler(uuid);

	if(error) {
		return {
			statusCode: code,
			body: JSON.stringify({
				message: error.message
			})
		};
	}
	return {
		statusCode: code,
		body: JSON.stringify(data)
	};
};

const getProductList = async ({ queryStringParameters }) => {
	const query = queryStringParameters || {};

	await initDb();
	const { error, data, code } = await getProductListHandler(query);

	if(error) {
		console.log(error);
		return {
			statusCode: code,
			body: JSON.stringify({
				message: error.message
			})
		};
	}
	return {
		statusCode: code,
		body: JSON.stringify(data)
	};
};

const createProduct = async ({ body }) => {
	await initDb();
	const { error, data, code } = await createProductHandler(JSON.parse(body));

	if(error) {
		return {
			statusCode: code,
			body: JSON.stringify({
				message: error.message
			})
		};
	}
	return {
		statusCode: code,
		body: JSON.stringify(data)
	};
};

const updateProduct = async ({ body, pathParameters }) => {
	await initDb();
	const { uuid } = pathParameters;
	const { error, data, code } = await updateProductHandler(JSON.parse(body), uuid);

	if(error) {
		return {
			statusCode: code,
			body: JSON.stringify({
				message: error.message
			})
		};
	}
	return {
		statusCode: code,
		body: JSON.stringify(data)
	};
};

const deleteProduct = async ({ pathParameters }) => {
	await initDb();
	const { uuid } = pathParameters;
	const { error, data, code } = await deleteProductHandler(uuid);

	if(error) {
		return {
			statusCode: code,
			body: JSON.stringify({
				message: error.message
			})
		};
	}
	return {
		statusCode: code,
		body: JSON.stringify(data)
	};
};

module.exports = {
	getProductById,
	getProductList,
	createProduct,
	updateProduct,
	deleteProduct
};
