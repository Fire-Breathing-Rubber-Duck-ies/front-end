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

const showItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}


module.exports = {
newItem,
showItems
}
