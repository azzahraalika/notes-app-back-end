/* eslint-disable linebreak-style */
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    // buat menambahkan note
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    // menampilkan catatan yang sudah ditambahkan pada home
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    // ketika di klik, untuk mendapatkan detail dari catatan
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    // untuk edit catatan
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    // untuk delete catatan
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
