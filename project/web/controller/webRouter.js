const express = require('express');
const router = express.Router();
const controller = require('./webController');

router.get('/asset/getAll', (req, res, next) => controller.listAsset(req, res, next));
router.get('/asset/getById', (req, res, next) => controller.getAssetById(req, res, next));

module.exports = router;