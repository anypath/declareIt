/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Item = require('../api/item/item.model');


// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Test User',
//     email: 'test@test.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     role: 'admin',
//     name: 'Admin',
//     email: 'admin@admin.com',
//     password: 'admin'
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });

// Item.find({}).remove(function() {
//   Item.create({
//     name: 'item1',
//     data: {name: "doggy1"}
//   }, {
//     name: 'item2',
//     data: {name: "doggy2"}
//   }, function() {
//       console.log('finished populating items');
//     }
//   );
// });