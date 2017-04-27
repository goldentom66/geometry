let userReducer = function(user = {}, action) {
  switch (action.type) {
    case 'SELECT_SUBTOPIC':
      return Object.assign({}, user, {session:{currentSubtopicIndex: action.index}});
    default: 
      return user;
  }
}

export default userReducer
