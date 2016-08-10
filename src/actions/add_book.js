export default function addBook(name, authorID) {
  return {
    type: 'ADD_BOOK',
    name: name,
    authorID: authorID
  }
}
