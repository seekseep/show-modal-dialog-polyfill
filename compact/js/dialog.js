var dialogs = {}

function openDialog(url, name, callback) {
  window.open(url, name);

  dialogs[name] = {
    closed: true,
    data: null,
    close: function (data) {
      this.closed = true
      this.data = data
      callback(data)
    }
  }
}

function closeDialog(data) {
  var name = window.name
  var opener = window.opener
  var dialog = opener.dialogs[name]
  dialog.close(data)
  window.close()
}
