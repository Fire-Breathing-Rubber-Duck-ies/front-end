'use strict'
const pageNavUI = require('./ui-pagenav.js')

const onToSignup = function () {
  pageNavUI.showBlankPage()
  $('#card-signup').removeClass('hide')
}

const onToLogin = function () {
  pageNavUI.showBlankPage()
  $('#card-login').removeClass('hide')
}

const pageNavEventHandler = function () {
$('.to-signup').on('click', onToSignup),
$('.to-login').on('click', onToLogin)
}

module.exports = {
pageNavEventHandler
}
