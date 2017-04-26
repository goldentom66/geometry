import React, { Component } from 'react'



class SubtopicListItem extends Component {
  handleSelect() {
    this.props.actions.selectSubtopic(this.props.subtopic)
  }
  
	render() {
    const itemClassName = 'item' + (this.props.current?' current':'') + (this.props.subtopic.completed?' completed':'')
    
		return (
			<li className={itemClassName} onClick={this.handleSelect.bind(this)} title={this.props.subtopic.title}>
          {this.props.subtopic.index}
      </li>
		)
	}
}

export default SubtopicListItem