const Note = require('./models/Note');

async function addNote(title) {
  await Note.create(title);
  console.log('Note was added');
}

async function getNotes() {
  return await Note.find();
}

async function deleteNote(id) {
  await Note.deleteOne({ _id: id });
  console.log(`Note with id= '${id}' has been removed`);
}
async function updateNote(noteData) {
  await Note.updateOne({ _id: noteData.id, title: noteData.title });
  console.log(`Note with id= '${id}' has been updated`);
}

module.exports = { addNote, getNotes, deleteNote, updateNote };
