'use strict';

const { ProductModel } = require('../models/product.schema');

const deleteProduct = async uuid => {
	const filter = { uuid };
	const product = await ProductModel.findOneAndDelete(filter);
	return product;
};

module.exports = {
	deleteProduct
};
