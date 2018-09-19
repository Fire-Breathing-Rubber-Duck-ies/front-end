'use strict'
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
// See all items
const onShowItems = function () {
  api.showItems()
    .then(ui.showItemsSuccess)
    .catch(ui.showItemsFail)
}


const itemsEventHandler = function () {
  $('#item-form').on('submit', addNewItem)

}



module.exports = {
  itemsEventHandler,
  onShowItems
}
