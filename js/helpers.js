function setTextById(id, text) {
  var element = document.getElementById(id);
  if (element) {
    element.innerText = text;
  } else {
    console.warn('Element with id "' + id + '" not found in DOM.');
  }
}