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
    ui.showErrorMessage()
    ui.newItemFail()
  } else {
    api.newItem(data)
      .catch(ui.newItemFail)
      .then((res) => { store.id = res.items._id })
      .then(ui.closeAllModals)
      .then(ui.clearNewItemInputFields)
      .then(api.selectItem)
      .then(ui.selectItemSuccess)
  }
}

// See all items
const onShowItems = function () {
  api.showItems()
    .then(ui.showItemsSuccess)
}

const onEditItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.items.priority < 1 || data.items.priority > 10) {
    ui.resetInputFields()
    ui.editItemFail()
  } else {
    api.updateItem(data)
      .then(ui.closeAllModals)
      .then(api.selectItem)
      .then(ui.selectItemSuccess)
      .catch(ui.editItemFail)
  }
}

const onDeleteItem = function () {
  event.preventDefault()
  const itemId = $(event.target).closest('tbody').data('id')
  store.id = itemId
  api.deleteItem()
    .then(ui.deleteItemSuccess)
    .then(onShowItems)
    .catch(console.log('fail'))
}

const onSelectItem = function () {
  const itemId = $(event.target).closest('tbody').data('id')
  store.id = itemId
  api.selectItem()
    .then(ui.selectItemSuccess)
    .catch(console.log('fail'))
}

const itemsEventHandler = function () {
  $('#item-form').on('submit', addNewItem)
  $('#bucket-list-content').on('click', 'button.delete-button', onDeleteItem)
  $('#bucket-list-content').on('click', 'button.edit-button', ui.fillEditInputs)
  $('#bucket-list-content').on('click', 'button.back-button', onShowItems)
  $('#bucket-list-content').on('click', 'td.item-name', onSelectItem)
  $('#edit-item-form').on('submit', onEditItem)
}

module.exports = {
  itemsEventHandler,
  onShowItems
}
