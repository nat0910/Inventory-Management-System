const express = require('express');
const router = express.Router();


const basicController = require('../controllers/basicController');
const admController = require('../controllers/admController');
const custController = require('../controllers/custController')

// Rendering starting page
router.get('/',basicController.start);
router.get('/admin/login', basicController.login);
router.get('/admin/home', basicController.admins);
router.get('/customer/home', basicController.customer);
router.post('/searchpage',basicController.find);

router.post('/login',basicController.logform);

// Things controlled by Admin Controller
router.get('/admin/typecommodity',admController.adm_typage);
router.get('/admin/inventory',admController.inview);
router.get('/admin/inventory/additem',admController.form);
router.post('/additem',admController.add);
router.get('/:ID',admController.delete);

/*----------------------------------------------------------------*/
router.get('/admin/sales',admController.salview);
router.get('/admin/sales/additem',admController.salform);
router.post('/sale/add',admController.sale_add);

// Things controlled by Customer Controller
router.get('/customer/typecommodity',custController.cust_typage);

//type of commodity controllers for admin
router.get('/admin/typecommodity/bakery',admController.bakview);
router.get('/admin/typecommodity/beverage',admController.bevview);
router.get('/admin/typecommodity/dairy',admController.daiview);
router.get('/admin/typecommodity/frozen',admController.frozview);
router.get('/admin/typecommodity/fruits',admController.fruview);
router.get('/admin/typecommodity/grooming',admController.grooview);
router.get('/admin/typecommodity/oils',admController.oilview);
router.get('/admin/typecommodity/spices',admController.spiview);
router.get('/admin/typecommodity/vegetables',admController.vegview);


router.get('/bakery/additem',admController.bake_form);
router.post('/bakery/add',admController.bake_add);
router.get('/bakery/:ID',admController.bakdel);
router.get('/beverage/:ID',admController.bevedel);
router.get('/sale/:ID',admController.saldel);

//type of commodity controllers for customer
router.get('/customer/typecommodity/bakery',custController.bakview);
router.get('/customer/typecommodity/beverage',custController.bevview);
router.get('/customer/typecommodity/dairy',custController.daiview);
router.get('/customer/typecommodity/frozen',custController.frozview);
router.get('/customer/typecommodity/fruits',custController.fruview);
router.get('/customer/typecommodity/grooming',custController.grooview);
router.get('/customer/typecommodity/oils',custController.oilview);
router.get('/customer/typecommodity/spices',custController.spiview);
router.get('/customer/typecommodity/vegetables',custController.vegview);



module.exports = router; 