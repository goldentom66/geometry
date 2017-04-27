let actions = {
  
  selectSubtopic: function(index) {
    return {
      type: 'SELECT_SUBTOPIC',
      index: index
    }
  },
  
  completeSubtopic : function(index) {
    return {
      type: 'COMPLETE_SUBTOPIC',
      index: index
    }
  }
  
}

export default actions
