'use strict'
const store = require('../store.js')
const itemsEvents = require('../items/events-items.js')

const signUpFail = function () {
  alert('failed to sign up!')
}

const logInSuccess = function (data) {
  store.user = data.user
  alert('Logged in successfully!')
  itemsEvents.onShowItems()
}

const logInFail = function () {
  alert('failed to login, please debug')
}

const logOutSuccess = function () {
  alert('Logged out!')
}

const logOutFail = function () {
  alert('failed to logout')
}

const changePasswordSuccess = function () {
  alert('changed password successfully')
}

const changePasswordFail = function () {
  alert('Did not change password')
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
