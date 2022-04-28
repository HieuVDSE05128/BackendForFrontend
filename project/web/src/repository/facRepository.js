const PROTO_PATH = __dirname + "/../proto/fac.proto";
const config = require("./../../config");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
// const ASSET_TARGET = ;
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const fac_proto = grpc.loadPackageDefinition(packageDefinition).fac;
const client = new fac_proto.GetData(
  config.externalSystem.facUrl,
  // No credentials
  grpc.credentials.createInsecure()
);

module.exports = {
  getListFac(req, res, next) {
    const { page, size } = req.query;
    client.GetListfac({ page: page, size: size }, function (err, response) {
      // GET response from third party server
      res.send(response);
    });
  },

  getFacById(req, res, next) {
    const id = req.query.id;
    client.GetfacById({ id: id }, function (err, response) {
      res.send(response);
    });
  },
};
