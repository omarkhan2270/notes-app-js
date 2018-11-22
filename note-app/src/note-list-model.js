(function(exports) {
  function listNotes() {
    var note = new Note('test')
    var noteList = [];
    noteList.push(note)
    return noteList
  };
  
  exports.listNotes = listNotes;
})(this);