const express = require('express');
const multer = require('multer');
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require("../middleware/multer-config");
const router = express.Router();


router.post('/', auth, multer, sauceCtrl.createSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;