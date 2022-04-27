const assRepository = require('../../repository/assRepository');
const facRepository = require('../../repository/facRepository');
const seatRepository = require('../../repository/seatRepository');

module.exports = {
    async listAsset(req, res, next) {
        await assRepository.getListAsset(req, res, next);
    },

    async getAssetById(req, res, next) {
        assRepository.getAssetById(req, res, next);
    },

    async getFacById(req, res, next) {
        facRepository.getFacById(req, res, next);
    },

    createAsset(req, res, next) {
        const { name, assetResponsibility, assetPrice } = req.body;
        assRepository.createAsset({ name, assetResponsibility, assetPrice }, res, next);
    }
}