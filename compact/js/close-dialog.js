function closeDialog(data) {
  window.opener.callbacks[window.name](data) || window.close()
}
