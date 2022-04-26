/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var PROTO_PATH = __dirname + '/../../vitualThirdParty/proto/asset.proto';

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
    }
);
var hello_proto = grpc.loadPackageDefinition(packageDefinition).asset;


function main() {
    var target = 'localhost:50051';
    var client = new hello_proto.GetData(target,
        grpc.credentials.createInsecure());
    client.GetListAsset({ page: 1, size: 10 }, function (err, response) {
        console.log(response);
    });

    client.GetAssetById({ id: 1 }, function (err, response) {
        console.log(response);
    })
}

main();
