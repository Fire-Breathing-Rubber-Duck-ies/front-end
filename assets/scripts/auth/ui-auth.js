'use strict'
const store = require('../store.js')
const itemsEvents = require('../items/events-items.js')
const itemsUi = require('../items/ui-items.js')
const pageNav = require('../pagenav/ui-pagenav.js')

const signUpFail = function () {
  clearInputFields()
  itemsUi.showErrorMessage()
}

const logInSuccess = function (data) {
  store.user = data.user
  pageNav.showOnlyNavBar()
  itemsEvents.onShowItems()
  $('.handlebars-container').removeClass('hide')
  clearInputFields()
  $('.duck-right').addClass('hide')
  $('.duck-left').addClass('hide')
}

const logInFail = function () {
  clearInputFields()
  itemsUi.showErrorMessage()
}

const logOutSuccess = function () {
  itemsUi.closeAllModals()
  pageNav.logoutView()
  clearInputFields()
  $('.duck-right').removeClass('hide')
  $('.duck-left').removeClass('hide')
}

const logOutFail = function () {
  clearInputFields()
}

const changePasswordSuccess = function () {
  itemsUi.closeAllModals()
  clearInputFields()
}

const changePasswordFail = function () {
  clearInputFields()
  itemsUi.showErrorMessage()
}

const clearInputFields = function () {
  $('#change-pw-form input[name="passwords[old]"]').val('')
  $('#change-pw-form input[name="passwords[new]"]').val('')
  $('#signup input[name="credentials[email]').val('')
  $('#signup input[name="credentials[password]').val('')
  $('#signup input[name="credentials[password_confirmation]').val('')
  $('#login input[name="credentials[email]"]').val('')
  $('#login input[name="credentials[password]"]').val('')
}

module.exports = {
  signUpFail,
  logInSuccess,
  logInFail,
  logOutSuccess,
  logOutFail,
  changePasswordSuccess,
  changePasswordFail,
  clearInputFields
}
