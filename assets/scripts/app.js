'use strict'
const auth = require('./auth/events-auth')
const pageNavEvents = require('./pagenav/events-pagenav.js')
const itemEvents = require('./items/events-items.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  auth.authEventHandler()
  pageNavEvents.pageNavEventHandler()
  itemEvents.itemsEventHandler()
})
