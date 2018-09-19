'use strict'
const pageNavUI = require('./ui-pagenav.js')

const onToSignup = function () {
  pageNavUI.showBlankPage()
  $('#card-signup').removeClass('hide')
  alert('I have been clicked')
}


const pageNavEventHandler = function () {
$('.to-signup').on('click', onToSignup)
}

module.exports = {
pageNavEventHandler
}
