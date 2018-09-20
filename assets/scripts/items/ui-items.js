'use strict'

const listTemplate = require('../../templates/list.handlebars')
const listItemTemplate = require('../../templates/individual-item.handlebars')

const newItemSuccess = function () {
  alert('Barely works')
}

const newItemFail = function () {
  alert('failed like a woman who gave king henry a female child')
}

const showItemsSuccess = function (data) {
  console.log('data', data.items)
  const selectListHtml = listTemplate({ items: data.items })
  $('#bucket-list-content').html(selectListHtml)
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

const selectItemSuccess = function (data) {
  console.log("hi", data)
  const selectItemHtml = listItemTemplate({ items: data.items })
  $('#bucket-list-content').html(selectItemHtml)
}


module.exports = {
  newItemSuccess,
  newItemFail,
  showItemsSuccess,
  showItemsFail,
  deleteItemSuccess,
  deleteItemFail,
  selectItemSuccess
}
