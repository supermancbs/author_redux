export default function deleteBook(bookID) {
  return {
    type: 'DELETE_BOOK',
    bookID: bookID
  }
}
