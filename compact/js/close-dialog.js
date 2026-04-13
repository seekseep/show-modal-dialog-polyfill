function closeDialog(data) {
  var callback = window.opener.callbacks[window.name]
  callback(data)
  window.close()
}
