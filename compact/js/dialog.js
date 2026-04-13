var dialogs = {}

function openDialog(url, name, callback) {
  window.open(url, name);

  dialogs[name] = {
    close: callback
  }
}

function closeDialog(data) {
  var name = window.name
  var opener = window.opener
  var dialog = opener.dialogs[name]
  dialog.close(data)
  window.close()
}
