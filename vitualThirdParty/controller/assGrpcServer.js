
const assMockData = require('../mockdata/assMockData.json');
const { pagination } = require('../../src/util/commonFunction');
var PROTO_PATH = __dirname + '/../proto/asset.proto';
console.log(PROTO_PATH)
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
    callback(null, { assets: pagination(assMockData, page, size) });
}

function GetAssetById(call, callback) {
    const {id, name, assetResponsibility, assetPrice} = assMockData.find(ass => ass.id === Number(call.request.id));
    // null = err
    callback(null, {id, name, assetResponsibility, assetPrice});
}

function Create1(call, callback) {
    console.log(`service 2`);
    callback(null, {id: '1'});
}

function Create2(call, callback) {
    console.log(`service 2`);
    callback(null, {id: 'create2'});
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(ass_proto.GetData.service, { GetListAsset: GetListAsset, GetAssetById: GetAssetById });
    server.addService(ass_proto.CreateData.service, { Create1: Create1, Create2: Create2 });
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
}

main();


// var PROTO_PATH = __dirname + '/../proto/helloworld.proto';
// console.log(PROTO_PATH)

// var grpc = require('@grpc/grpc-js');
// var protoLoader = require('@grpc/proto-loader');
// var packageDefinition = protoLoader.loadSync(
//     PROTO_PATH,
//     {
//     //   keepCase: true,
//     //  longs: String,
//     //  enums: String,
//     //  defaults: true,
//     //  oneofs: true
//     });
// var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

// /**
//  * Implements the SayHello RPC method.
//  */
// function sayHello(call, callback) {
//   console.log(call.request)
//   callback(null, {message: 'Hello ' + call.request.name});
// }

// /**
//  * Starts an RPC server that receives requests for the Greeter service at the
//  * sample server port
//  */
// function main() {
//   var server = new grpc.Server();
//   server.addService(hello_proto.Greeter1.service, {sayHello: sayHello});
//   server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
//     server.start();
//   });
// }

// main();
