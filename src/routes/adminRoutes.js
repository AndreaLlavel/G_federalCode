const express = require('express');
const router    = express.Router();
const adminControllers = require('../controllers/adminController');

router.get('',adminControllers.admin);
router.post('/create',adminControllers.create_post);   
router.get('/create',adminControllers.create_get);   
router.get('/edit/:id',adminControllers.edit_id_get);   
router.put('/edit/:id',adminControllers.edit_id_post);   
router.delete('/delete/:id',adminControllers.delete_id);   

module.exports = router;
