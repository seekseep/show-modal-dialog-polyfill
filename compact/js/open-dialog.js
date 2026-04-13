var dialogs = {}

function openDialog(url, name, callback) {
  window.open(url, name);

  dialogs[name] = {
    close: callback
  }
}
