const MongoClient = require("mongodb").MongoClient;

async function connect() {
  let client = await MongoClient.connect("mongodb://0.0.0.0:27017/demonode");
  return client.db();
}

module.exports = connect;
