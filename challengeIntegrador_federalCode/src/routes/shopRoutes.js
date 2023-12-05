const express = require('express');
const router    = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/',shopControllers.shop);
router.get('/item/:id',shopControllers.item_id);   
router.post('/item/:id/add',shopControllers.add_item_id);
router.get('/cart',shopControllers.cart_get);
router.post('/cart',shopControllers.cart_post);

module.exports = router;