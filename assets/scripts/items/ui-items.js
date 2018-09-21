'use strict'

const listTemplate = require('../../templates/list.handlebars')
const listItemTemplate = require('../../templates/individual-item.handlebars')

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

module.exports = {
  newItemSuccess,
  newItemFail,
  showItemsSuccess,
  showItemsFail,
  deleteItemSuccess,
  deleteItemFail,
  selectItemSuccess,
  closeAllModals
}
