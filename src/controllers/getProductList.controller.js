'use strict';

const { ProductModel } = require('../models/product.schema');
const { typeValidation } = require('./productValidator');
const { fieldsAccepted, directionAccepted } = require('../helpers/sortAcceptedConstants');
const { ValidationError } = require('../helpers/validationError');

const parseFilter = ({
	name,
	type,
	priceFrom,
	priceTo,
	isPromotion
} = {}) => {
	const filter = {};

	if(name)
		filter.name = name;

	if(type) {
		typeValidation({ type });
		filter.type = type;
	}

	if(priceFrom) {
		filter.price = {
			...filter.price,
			$gt: priceFrom
		};
	}

	if(priceTo) {
		filter.price = {
			...filter.price,
			$lt: priceTo
		};
	}

	if(isPromotion)
		filter.isPromotion = !!Number(isPromotion);

	return filter;
};

const parseSort = ({
	orderBy,
	orderDirection
} = {}) => {
	if(orderBy && !fieldsAccepted.find(field => field === orderBy))
		throw new ValidationError('Product field not supported in order by. Validation error');

	if(orderDirection && !directionAccepted.find(direction => direction === orderDirection))
		throw new ValidationError('Product direction not supported. Validation error');

	let direction = '';
	if(orderDirection && orderDirection === 'desc')
		direction = '-';

	const sort = `${direction}${orderBy || ''}`;
	return sort;
};

const getProductList = async params => {
	const filter = parseFilter(params);
	const sort = parseSort(params);

	const product = await ProductModel.find(filter).sort(sort);
	return product;
};

module.exports = {
	getProductList
};
