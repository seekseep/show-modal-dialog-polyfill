var dialogs = {}

function buildFeaturesString (features) {
  return Object.keys(features).map(function (key) {
    return key + '=' + features[key]
  }).join(',')
}

function openDialog(url, name, features, initialData, callback) {
  window.open(
    url,
    name,
    buildFeaturesString(features)
  );

  dialogs[name] = {
    closed: false,
    data: initialData
  }

  var interval = setInterval(function () {
    if (!dialogs[name].closed) return
    clearInterval(interval)

    if (callback) {
      callback(dialogs[name].data)
    }
  }, 100)
}

function closeDialog(data) {
  var name = window.name
  var opener = window.opener
  if (!opener) {
    console.error('No opener found for dialog')
    return
  }
  var dialog = opener.dialogs[name]
  if (!dialog) {
    console.error('No dialog found for name', name)
    return
  }

  dialog.closed = true
  dialog.data = data
  window.close()
}
