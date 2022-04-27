
const assMockData = require('../mockdata/assMockData.json');
const { pagination } = require('../../src/util/commonFunction');
const { saveMockData } = require('../util/common');
var PROTO_PATH = __dirname + '/../proto/asset.proto';
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var ass_proto = grpc.loadPackageDefinition(packageDefinition).asset;

/**
 * Implements the SayHello RPC method.
 */
function GetListAsset(call, callback) {
    const page = call.request.page;
    const size = call.request.size;
    if (!page || !size) {
        callback({
            code: grpc.status.INVALID_ARGUMENT,
            message: 'Page and size must be input'
        })
        return;
    }
    callback(null, { assets: pagination(assMockData, page, size) });
}

function GetAssetById(call, callback) {
    const { id, name, assetResponsibility, assetPrice } = assMockData.find(ass => ass.id === Number(call.request.id));
    // null = err
    callback(null, { id, name, assetResponsibility, assetPrice });
}

function CreateAsset(call, callback) {
    // Create id for new ass (identity)
    const id = assMockData[assMockData.length - 1].id + 1;
    const { name, assetResponsibility, assetPrice } = call.request;
    saveMockData('ass')
    callback(null, {
        code: 200,
        message: "success",
        asset: { id, name, assetResponsibility, assetPrice }
    });
}

function EditAsset(call, callback) {
    const asset = assMockData.find(ass => ass.id)
    callback(null, {
        code: 200,
        message: "success",
        asset: { id, name, assetResponsibility, assetPrice }
    });
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(ass_proto.AssetService.service, {
        GetListAsset: GetListAsset,
        GetAssetById: GetAssetById,
        CreateAsset: CreateAsset,
        EditAsset: EditAsset
    });
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
}

main();
