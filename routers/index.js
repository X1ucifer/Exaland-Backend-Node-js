const { add_products, get_product } = require('../controllers');
const { uploadImage, removeImage } = require('../controllers/file_upload');

const Router = require('express').Router()
Router.post('/add',add_products);
Router.get('/get',get_product);
Router.post('/image_upload',uploadImage);
Router.post('/remove_image',removeImage);
module.exports = Router;