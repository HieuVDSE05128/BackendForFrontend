
const PROTO_PATH = __dirname + '/../../vitualThirdParty/proto/asset.proto';
const config = require('./../../config');
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
const client = new asset_proto.AssetService(config.externalSystem.assestUrl,
    // No credentials
    grpc.credentials.createInsecure());

module.exports = {
    async getListAsset(req, res, next) {
        const { page, size } = req.query;
        client.GetListAsset({ page: page, size: size }, function (err, response) {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                res.send(response);
            }
        });
    },

    getAssetById(req, res, next) {
        const id = req.query.id;
        client.GetAssetById({ id: id }, function (err, response) {
            if (err) {
                console.error(err);
                res.send(err);
            }
            res.send(response)
        })
    },

    createAsset({ name, assetResponsibility, assetPrice }, res, next) {
        client.CreateAsset({ name, assetResponsibility, assetPrice }, function (err, response) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.send(response);
        })
    }



};
