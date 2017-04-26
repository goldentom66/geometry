import React, { Component } from 'react'



class Subtopic extends Component {
  handleClick() {
    this.props.actions.completeSubtopic(this.props.currentSubtopic)
  }
  
	render() {
    const hasSubtopic = this.props.currentSubtopic && this.props.currentSubtopic.index
    const hasCompleted = this.props.currentSubtopic && this.props.currentSubtopic.completed
    const subtopicText = <div className='subtopic-text'>{this.props.currentSubtopic.index}. {this.props.currentSubtopic.title}</div>
    const subtopicComplete = <div className='subtopic-complete'><div className='subtopic-img'><img src='images/tick-big.png' alt='completed' /></div></div>
    
		return (
			<div className='subtopic'>
        <div className='left'>
          <div className='top'></div>
          <div className='decorate'></div>
        </div>
        <div className='middle'>
          <div className='top'>
            {hasSubtopic && subtopicText}
            {hasCompleted && subtopicComplete}
          </div>
          <div className='decorate'></div>
          <div className='bottom'>
          {!hasCompleted &&
            <div className='btn btn-primary btn-pill'>Let's Go</div>
          }
          </div>
        </div>
        <div className='right'>
          <div className='top'></div>
          <div className='decorate'></div>
        </div>
      </div>
		)
	}
}

export default Subtopic