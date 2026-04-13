var callbacks = {}

function openDialog(url, name, callback) {
  window.open(url, name);
  callbacks[name] = callback
}
