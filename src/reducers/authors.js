const Authors = (state = [{name: "", key: -1}], action) => {
  switch(action.type){
    case 'ADD_AUTHOR':
      var newState = [].concat(state)
      newState.push({name: action.name})
      return newState
    default:
      return state
  }
}

export default Authors
