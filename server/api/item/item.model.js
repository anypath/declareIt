'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  user : {type: String, ref: 'User'},
  created : {type: Date, default: Date.now},
  hashes: [String],
  uuid: String,
  imgInfo: Schema.Types.Mixed,
  cryptInfo: Schema.Types.Mixed,
  entryInfo: Schema.Types.Mixed,
  repInfo: Schema.Types.Mixed
});

module.exports = mongoose.model('Item', ItemSchema);