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
        facRepository.getListFac(req, res, next);
    }
}