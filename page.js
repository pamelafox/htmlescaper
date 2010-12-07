chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    text = request.text;
    escaped = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // figure out where that text came from!
    var textareas = document.getElementsByTagName('textarea');
    for (var i = 0; i < textareas.length; i++) {
      var textarea = textareas[i];
      if (textarea.value.indexOf(text) > -1) {
        textarea.value = textarea.value.replace(text, escaped);
      }
    }
});
