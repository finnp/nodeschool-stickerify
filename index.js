var $ = document.querySelector.bind(document)
var form = $('#settings')
function changecolors (e) {
  $('#background').style.fill = $('#background-color').value
  $('#foreground').style.fill = $('#foreground-color').value
  return false
}

form.onsubmit = changecolors
changecolors()