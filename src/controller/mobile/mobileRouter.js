const express = require('express');
const router = express.Router();
const controller = require('./mobileController');

router.get('/asset/getAll', (req, res, next) => controller.listAsset(req, res, next));
router.get('/asset/getById', (req, res, next) => controller.getAssetById(req, res, next));
// Only mobile
router.get('/fac/getById', (req, res, next) => controller.getFacById(req, res, next));

module.exports = router;