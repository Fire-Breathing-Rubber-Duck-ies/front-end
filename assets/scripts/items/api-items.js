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
// Get all Items associated with a user
const showItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const deleteItem = function () {
  return $.ajax({
    url: config.apiUrl + '/items/' + store.id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const updateItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items/' + store.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const selectItem = function () {
  return $.ajax({
    url: config.apiUrl + '/items/' + store.id,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
newItem,
showItems,
deleteItem,
updateItem,
selectItem
}
