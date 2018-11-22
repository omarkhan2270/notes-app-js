(function(exports) {
  function testListNotes() {
    var note = new Note('test1');
    var note2 = new Note('test2');
    var noteList = [];
    noteList.push(note)
    noteList.push(note2)
    this.noteList = noteList

    if (noteList.length !== 2) {
      throw new Error('Something went wrong')
    }
  };

  testListNotes();
})(this);