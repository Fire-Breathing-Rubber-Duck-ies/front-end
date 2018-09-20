'use strict'
const store = require('../store.js')

const ItemTemplate = require('../../templates/list.handlebars')

const newItemSuccess = function () {
  alert('Barely works')
}

const newItemFail = function () {
  alert('failed like a woman who gave king henry a female child')
}

const showItemsSuccess = function (data) {
  console.log('data', data.items)
  const selectItemHtml = ItemTemplate({ items: data.items })
  $('#bucket-list-content').html(selectItemHtml)
  $('#bucket-list-display').removeClass('hide')
  $('.edit-button').on('click', fillEditInputs)

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

const fillEditInputs = function (event) {
  let itemId = $(event.target).closest('tbody').data('id')
  store.id = itemId
  let itemName = $(event.target).closest('tbody').data('name')
  let itemDescription = $(event.target).closest('tbody').data('description')
  let itemLocation = $(event.target).closest('tbody').data('location')
  let itemPriority = $(event.target).closest('tbody').data('priority')
  let itemStatus = $(event.target).closest('tbody').data('status')
  console.log(itemName, itemDescription)
  $('#editItem input[name="items[name]"]').val(itemName)
  $('#editItem input[name="items[description]"]').val(itemDescription)
  $('#editItem input[name="items[location]"]').val(itemLocation)
  $('#editItem input[name="items[priority]"]').val(itemPriority)
}

module.exports = {
  newItemSuccess,
  newItemFail,
  showItemsSuccess,
  showItemsFail,
  deleteItemSuccess,
  deleteItemFail
}
