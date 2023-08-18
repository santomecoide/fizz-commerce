'use strict';

const { v4: uuidv4 } = require('uuid');
const { ProductModel } = require('../models/product.schema');
const {
	fieldsRequired,
	typeValidation,
	discountValidation,
	ingredientsValidation
} = require('./productValidator');

const createProduct = async newProduct => {
	const product = {
		...newProduct,
		uuid: uuidv4(),
		status: 'active',
		ingredients: [...new Set(newProduct.ingredients)]
	};

	fieldsRequired(product);
	typeValidation(product);
	discountValidation(product);
	ingredientsValidation(product);

	await ProductModel.create(product);
	return product;
};

module.exports = {
	createProduct
};
