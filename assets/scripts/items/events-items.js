'use strict'
const store = require('../store.js')

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api-items.js')
const ui = require('./ui-items.js')

// Create new Item
const addNewItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // Checking to see if the importance falls between 1-10
  // If it does not, tell user to change value, otherwise
  // Make api call
  if (data.items.priority < 1 || data.items.priority > 10) {
    alert('you messed up')
  } else {
    api.newItem(data)
    .then(ui.newItemSuccess)
    .catch(ui.newItemFail)
  }
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

// See all items
const onShowItems = function () {
  api.showItems()
    .then(ui.showItemsSuccess)
    .catch(ui.showItemsFail)
}

const onEditItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateItem(data)
    .then(api.selectItem)
    .catch(ui.showItemsFail)
    .then(ui.selectItemSuccess)
}

const onDeleteItem = function () {
  event.preventDefault()
  let itemId = $(event.target).closest('tbody').data('id')
  store.id = itemId
  api.deleteItem()
    .then(ui.deleteItemSuccess)
    .catch(ui.deleteItemFail)
    .then(ui.showItemsSuccess)
}

const itemsEventHandler = function () {
  $('#item-form').on('submit', addNewItem)
  $('#bucket-list-content').on('click', 'button.delete-button', onDeleteItem)
  $('#bucket-list-content').on('click', 'button.edit-button', fillEditInputs)
  $('#edit-item-form').on('submit', onEditItem)
}

module.exports = {
  itemsEventHandler,
  onShowItems
}
