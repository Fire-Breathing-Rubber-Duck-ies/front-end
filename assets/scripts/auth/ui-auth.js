'use strict'
const store = require('../store.js')
const itemsEvents = require('../items/events-items.js')
const itemsUi = require('../items/ui-items.js')
const pageNav = require('../pagenav/ui-pagenav.js')

const signUpFail = function () {
  alert('failed to sign up!')
}

const logInSuccess = function (data) {
  store.user = data.user
  pageNav.showOnlyNavBar()
  itemsEvents.onShowItems()
  $('.handlebars-container').removeClass('hide')
}

const logInFail = function () {
  alert('failed to login, please debug')
}

const logOutSuccess = function () {
  itemsUi.closeAllModals()
  pageNav.logoutView()
}

const logOutFail = function () {
  alert('failed to logout')
}

const changePasswordSuccess = function () {
  itemsUi.closeAllModals()
}

const changePasswordFail = function () {

}

module.exports = {
  signUpFail,
  logInSuccess,
  logInFail,
  logOutSuccess,
  logOutFail,
  changePasswordSuccess,
  changePasswordFail
}
