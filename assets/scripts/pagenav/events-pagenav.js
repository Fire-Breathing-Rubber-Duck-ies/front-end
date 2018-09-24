'use strict'
const authUI = require('../auth/ui-auth.js')
const pageNavUI = require('./ui-pagenav.js')

const onToSignup = function () {
  pageNavUI.showBlankPage()
  $('#card-signup, #app-title').removeClass('hide')
  authUI.clearInputFields()
}

const onToLogin = function () {
  pageNavUI.showBlankPage()
  $('#card-login, #app-title').removeClass('hide')
  authUI.clearInputFields()
}

const onToSignout = function () {
  pageNavUI.showBlankPage()
  $('#card-login').removeClass('hide')
  authUI.clearInputFields()
}
const pageNavEventHandler = function () {
  $('#to-signup').on('click', onToSignup)
  $('#to-login').on('click', onToLogin)
  $('#to-signout').on('click', onToSignout)
}

module.exports = {
  pageNavEventHandler
}
