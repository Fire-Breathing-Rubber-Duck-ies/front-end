'use strict'
// Shows a blank page, so all hide functions are in one place
// and can be be referenced from here
const showBlankPage = function () {
  $('#card-login, #card-signup, #navbar, .handlebars-container').addClass('hide')
}
// Shows only navbar, so you can display base home page with
// whatever else you want
const showOnlyNavBar = function () {
  showBlankPage()
  $('#navbar').removeClass('hide')
}

const logoutView = function () {
  showBlankPage()
  $('#card-login').removeClass('hide')
}

module.exports = {
  showBlankPage,
  showOnlyNavBar,
  logoutView
}
