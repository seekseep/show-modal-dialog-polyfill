function closeDialog(data) {
  var name = window.name
  var opener = window.opener
  var callback = opener.callbacks[name]
  callback(data)
  window.close()
}
