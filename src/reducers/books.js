var bookCounter = 0

const Books = (state = [], action) => {
  let newState
  switch(action.type){
    case 'ADD_BOOK':
      newState = [].concat(state)
      newState.push({id: ++bookCounter, name: action.name, authorID: action.authorID})
      return newState
    case 'DELETE_BOOK':
      newState = [].concat(state)
      var apple = newState.find((book) => book.id === action.bookID)
      var index = newState.indexOf(apple)
      newState.splice(index, 1)
      return newState

    default:
      return state
  }
}

export default Books
