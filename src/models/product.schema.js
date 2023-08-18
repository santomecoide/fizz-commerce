'use strict';

const IMAGE_DEFAULT_VALUE = 'https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg';
const IS_PROMOTION_DEFAULT_VALUE = false;

const { Schema, model } = require('mongoose');

const ProductSchema = new Schema(
	{
		uuid: {
			type: String,
			unique: true,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: false
		},
		image: {
			type: String,
			default: IMAGE_DEFAULT_VALUE,
			required: false
		},
		isPromotion: {
			type: String,
			default: IS_PROMOTION_DEFAULT_VALUE,
			required: false
		},
		discount: {
			type: Number,
			required: false
		},
		ingredients: {
			type: Array,
			required: true
		},
		status: {
			type: String,
			required: false
		}
	},
	{
		timestamps: {
			createdAt: 'dateCreated',
			updatedAt: 'dateModified'
		}
	}
);

const ProductModel = model('products', ProductSchema);

module.exports = {
	ProductModel
};
