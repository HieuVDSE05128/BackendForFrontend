
const PROTO_PATH = __dirname + '/../../vitualThirdParty/proto/asset.proto';
const config = require('../../config');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// const ASSET_TARGET = ;
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);
const asset_proto = grpc.loadPackageDefinition(packageDefinition).asset;
const client = new asset_proto.GetData(config.externalSystem.assestUrl,
    // No credentials
    grpc.credentials.createInsecure());

module.exports = {
    getListAsset(req, res, next) {
        const { page, size } = req.query;
        client.GetListAsset({ page: page, size: size }, function (err, response) {
            // GET response from third party server
            res.send(response)
        });
    },

    getAssetById(req, res, next) {
        const id = req.query.id;
        client.GetAssetById({ id: id }, function (err, response) {
            if (err) {
                console.error(err);
            }
            res.send(response)
        })
    }
};
