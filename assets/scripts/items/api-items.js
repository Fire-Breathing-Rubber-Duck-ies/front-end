'use strict'
const config = require('../config.js')
const store = require('../store.js')

const newItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}



module.exports = {
newItem
}
