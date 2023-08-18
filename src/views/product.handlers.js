'use strict';

const { getProductById } = require('../controllers/getProductById.controller');
const { getProductList } = require('../controllers/getProductList.controller');
const { createProduct } = require('../controllers/createProduct.controller');
const { updateProduct } = require('../controllers/updateProduct.controller');
const { deleteProduct } = require('../controllers/deleteProduct.controller');

const getProductByIdHandler = async uuid => {
	try {
		const product = await getProductById(uuid);
		const statusCode = 200;

		return {
			error: null,
			data: product,
			code: statusCode
		};
	} catch(error) {
		let errorStatus = 500;
		if(error.name === 'ValidationError')
			errorStatus = 400;

		return {
			error,
			data: null,
			code: errorStatus
		};
	}
};

const getProductListHandler = async query => {
	try {
		const products = await getProductList(query);
		const statusCode = 200;

		return {
			error: null,
			data: products,
			code: statusCode
		};
	} catch(error) {
		let errorStatus = 500;
		if(error.name === 'ValidationError')
			errorStatus = 400;

		return {
			error,
			data: null,
			code: errorStatus
		};
	}
};

const createProductHandler = async newProduct => {
	try {
		const product = await createProduct(newProduct);
		const statusCode = 200;

		return {
			error: null,
			data: product.uuid,
			code: statusCode
		};
	} catch(error) {
		let errorStatus = 500;
		if(error.name === 'ValidationError')
			errorStatus = 400;

		return {
			error,
			data: null,
			code: errorStatus
		};
	}
};

const updateProductHandler = async (currentProduct, uuid) => {
	try {
		const product = await updateProduct(currentProduct, uuid);
		const statusCode = 200;

		return {
			error: null,
			data: product.uuid,
			code: statusCode
		};
	} catch(error) {
		let errorStatus = 500;
		if(error.name === 'ValidationError')
			errorStatus = 400;

		return {
			error,
			data: null,
			code: errorStatus
		};
	}
};

const deleteProductHandler = async uuid => {
	try {
		const product = await deleteProduct(uuid);
		const statusCode = 200;

		return {
			error: null,
			data: product,
			code: statusCode
		};
	} catch(error) {
		let errorStatus = 500;
		if(error.name === 'ValidationError')
			errorStatus = 400;

		return {
			error,
			data: null,
			code: errorStatus
		};
	}
};

module.exports = {
	getProductByIdHandler,
	getProductListHandler,
	createProductHandler,
	updateProductHandler,
	deleteProductHandler
};
