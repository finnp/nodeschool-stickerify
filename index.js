window.onload = function () {
  var $ = document.querySelector.bind(document)
  
  function changecolors (e) {
    $('#background').style.fill = $('#background-color').value
    $('#foreground').style.fill = $('#foreground-color').value
    var initials = $('#initials').value
    $('#letter-left').textContent = initials[0] || '?'
    $('#letter-middle').textContent =initials[1] || '?'
    $('#letter-right').textContent = initials[2] || '?'
  }

  $('#background-color').addEventListener("input", changecolors, false)
  $('#foreground-color').addEventListener("input", changecolors, false)
  $('#initials').onchange = changecolors
  changecolors()
}