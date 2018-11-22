document.getElementById('Save').addEventListener('click', function() {
  var usernote = document.getElementById('usernote').value;
  if (usernote) createNote(usernote);
});

function createNote(text) {
  var list = document.getElementById('listNote')

  var note = document.createElement('li');
  note.innerText = text

  list.appendChild(note)
};
