'use strict'

const ItemTemplate = require('../../templates/list.handlebars')

const newItemSuccess = function () {
  alert('Barely works')
}

const newItemFail = function () {
  alert('failed like a woman who gave king henry a female child')
}

const showItemsSuccess = function (data) {
  const selectItemHtml = ItemTemplate({ item: data.item })
  $('#bucket-list-content').html(selectItemHtml)
  $('#bucket-list-display').removeClass('hide')

  console.log('information returned', data)
}

const showItemsFail = function () {
  alert('did not get information')
}

const deleteItemSuccess = function () {
  alert('Deleted item')
}

const deleteItemFail = function () {
  alert('failed to delete item')
}

module.exports = {
  newItemSuccess,
  newItemFail,
  showItemsSuccess,
  showItemsFail,
  deleteItemSuccess,
  deleteItemFail
}
