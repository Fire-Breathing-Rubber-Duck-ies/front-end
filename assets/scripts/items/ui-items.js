'use strict'

const newItemSuccess = function () {
  alert('Barely works')
}

const newItemFail = function () {
  alert('failed like a woman who gave king henry a female child')
}

const showItemsSuccess = function (data) {
  alert('Got all the items')
  console.log('information returned', data)
}

const showItemsFail = function () {
  alert('did not get information')
}

module.exports = {
  newItemSuccess,
  newItemFail,
  showItemsSuccess,
  showItemsFail
}
