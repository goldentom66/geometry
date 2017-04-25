import React, { Component } from 'react'



class Subtopic extends Component {

	render() {
    const hasSubtopic = this.props.subtopic && this.props.subtopic.index;
    const subtopicText = <div className='subtopic-text'>{this.props.subtopic.index}. {this.props.subtopic.title}</div>
    const subtopicComplete = <div className='subtopic-complete'><img src='images/tick-big.png' /></div>
    
		return (
			<div className='subtopic'>
        <div className='left'>
          <div className='top'></div>
        </div>
        <div className='middle'>
          <div className='top'>
            {hasSubtopic && subtopicText}
            {hasSubtopic && subtopicComplete}
          </div>
          <div className='bottom'>
            <button>Let's Go</button>
          </div>
         </div>
        <div className='right'>
          <div className='top'></div>
        </div>
      </div>
		)
	}
}

export default Subtopic