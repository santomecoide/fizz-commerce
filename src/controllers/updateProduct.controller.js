'use strict';

const { ProductModel } = require('../models/product.schema');
const {
	fieldsRequired,
	typeValidation,
	discountValidation,
	ingredientsValidation,
	statusValidation
} = require('./productValidator');

const discountParse = ({ discount, isPromotion }, oldDiscount) => {
	if(discount && isPromotion)
		return discount;

	if(!discount && isPromotion)
		return oldDiscount;

	if(discount && !isPromotion)
		return discount;

	return null;
};

const updateProduct = async (currentProduct, uuid) => {
	const filter = { uuid };
	const oldProduct = await ProductModel.findOne(filter);

	const product = {
		uuid: oldProduct.uuid,
		...currentProduct,
		ingredients: [...new Set(currentProduct.ingredients)],
		discount: discountParse(currentProduct, oldProduct.discount),
		currentProduct: currentProduct.status ? currentProduct.status : oldProduct.status
	};

	fieldsRequired(product);
	typeValidation(product);
	discountValidation(product);
	ingredientsValidation(product);
	statusValidation(product);

	await ProductModel.findOneAndUpdate(filter, product);

	return product;
};

module.exports = {
	updateProduct
};
