'use strict'

const listTemplate = require('../../templates/list.handlebars')
const listItemTemplate = require('../../templates/individual-item.handlebars')
const store = require('../store.js')

const newItemSuccess = function () {
}

const newItemFail = function () {

}

const showItemsSuccess = function (data) {
  const selectListHtml = listTemplate({ items: data.items })
  $('#bucket-list-content').html(selectListHtml)
  $('#bucket-list-display').removeClass('hide')

  console.log('information returned', data)
}

const showItemsFail = function () {
}

const editItemFail = function () {
  console.log('fail')
  resetInputFields()
}

const deleteItemSuccess = function () {

}

const deleteItemFail = function () {

}

const selectItemSuccess = function (data) {
  const selectItemHtml = listItemTemplate({ items: data.items })
  $('#bucket-list-content').html(selectItemHtml)
}

const closeAllModals = function () {
  $('#updatePassword').modal('hide')
  $('#addItem').modal('hide')
  $('#editItem').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const fillEditInputs = function (event) {
  let itemId = $(event.target).closest('tbody').data('id')
  store.id = itemId
  let itemName = $(event.target).closest('tbody').data('name')
  store.name = itemName
  let itemDescription = $(event.target).closest('tbody').data('description')
  store.description = itemDescription
  let itemLocation = $(event.target).closest('tbody').data('location')
  store.location = itemLocation
  let itemPriority = $(event.target).closest('tbody').data('priority')
  store.priority = itemPriority
  let itemStatus = $(event.target).closest('tbody').data('status')
  store.status = itemStatus
  $('#editItem input[name="items[name]"]').val(itemName)
  $('#editItem input[name="items[description]"]').val(itemDescription)
  $('#editItem input[name="items[location]"]').val(itemLocation)
  $('#editItem input[name="items[priority]"]').val(itemPriority)
}

const resetInputFields = function () {
  $('#editItem input[name="items[name]"]').val(store.name)
  $('#editItem input[name="items[description]"]').val(store.description)
  $('#editItem input[name="items[location]"]').val(store.location)
  $('#editItem input[name="items[priority]"]').val(store.priority)
}

module.exports = {
  newItemSuccess,
  newItemFail,
  showItemsSuccess,
  showItemsFail,
  deleteItemSuccess,
  deleteItemFail,
  selectItemSuccess,
  closeAllModals,
  fillEditInputs,
  editItemFail,
  resetInputFields
}
