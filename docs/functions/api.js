'use strict'
const DataHandler = require('../data_handler.min.js'),
  data = new DataHandler(require('../settings.json'))
module.exports.handler = async function (event) {
  return data.export(event.queryStringParameters)
}
