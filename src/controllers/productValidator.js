'use strict';

const { productTypeConstants } = require('../helpers/productTypeConstants');
const { productStatusConstants } = require('../helpers/productStatusConstants');
const { ValidationError } = require('../helpers/validationError');

const fieldsRequired = product => {
	if(
		!product.name ||
		!product.type ||
		!product.price ||
		!product.ingredients
	)
		throw new ValidationError('Product name, type, price and ingredients are required. Validation error');
};

const typeValidation = product => {
	if(!productTypeConstants.find(type => type === product.type))
		throw new ValidationError('Product type not supported. Validation error');
};

const discountValidation = product => {
	if(!product.isPromotion && product.discount !== null)
		throw new ValidationError('Product discount can not be set if promotion is false. Validation error');
};

const ingredientsValidation = product => {
	if(product.ingredients.length <= 0)
		throw new ValidationError('Product ingredients can not be empty. Validation error');
};

const statusValidation = product => {
	if(product.status && !productStatusConstants.find(status => status === product.status))
		throw new ValidationError('Product status not supported. Validation error');
};

module.exports = {
	fieldsRequired,
	typeValidation,
	discountValidation,
	ingredientsValidation,
	statusValidation
};
