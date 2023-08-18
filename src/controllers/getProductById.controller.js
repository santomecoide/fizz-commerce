'use strict';

const { ProductModel } = require('../models/product.schema');

const getProductById = async uuid => {
	const filter = { uuid };
	const product = await ProductModel.findOne(filter);
	return product;
};

module.exports = {
	getProductById
};
