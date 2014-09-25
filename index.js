var $ = document.querySelector.bind(document)
var form = $('#settings')
function changecolors (e) {
  $('#background').style.fill = $('#background-color').value
  $('#foreground').style.fill = $('#foreground-color').value
  $('#letter-left').textContent = $('#letter-left-input').value
  $('#letter-middle').textContent =$('#letter-middle-input').value
  $('#letter-right').textContent = $('#letter-right-input').value
  return false
}

form.onsubmit = changecolors
changecolors()