var authorCounter = 0

const Authors = (state = [], action) => {
  switch(action.type) {
    case 'ADD_AUTHOR':
      var newState = [].concat(state)
      newState.push({id: ++authorCounter, name: action.name})
      return newState
    default:
      return state
  }
}

export default Authors
