
const facMockData = require('../mockdata/facMockData.json');
const { pagination } = require('../../src/util/commonFunction');
var PROTO_PATH = __dirname + '/../proto/fac.proto';
console.log('fac ' +PROTO_PATH)
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
var fac_proto = grpc.loadPackageDefinition(packageDefinition).fac;

/**
 * Implements the SayHello RPC method.
 */
function GetListfac(call, callback) {
    const page = call.request.page;
    const size = call.request.size;
    callback(null, { assets: pagination(facMockData, page, size) });
}

function GetfacById(call, callback) {
    const {id, first_name, last_name, email, gender, isCovid} = facMockData.find(ass => ass.id === Number(call.request.id));
    // null = err
    callback(null, {id, first_name, last_name, email, gender, isCovid});
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(fac_proto.GetData.service, { GetListfac: GetListfac, GetfacById: GetfacById });
    server.bindAsync('0.0.0.0:50052', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
}

main();
