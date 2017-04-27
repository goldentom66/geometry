import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


class Subtopic extends Component {

  handleClick() {
    this.props.actions.completeSubtopic(this.props.subtopic.index);
  }

	render() {
    const hasSubtopic = this.props.subtopic && this.props.subtopic.index
    const hasCompleted = this.props.subtopic && this.props.subtopic.completed
    
    const item = 
          <div key={this.props.subtopic.index}>
            <div className='top'>
              {hasSubtopic && 
              <div className='subtopic-text'>{this.props.subtopic.index}. {this.props.subtopic.title}</div>}
              {hasCompleted && 
              <div className='subtopic-complete'><div className='subtopic-img'><img src='images/tick-big.png' alt='completed' /></div></div>}
            </div>
            <div className='decorate'></div>
            <div className='bottom'>
              {!hasCompleted &&
              <div className='btn btn-primary btn-pill' onClick={this.handleClick.bind(this)}>Let's Go</div>
              }
            </div>
          </div>

    
		return (      
      <div className='subtopic'>
        <div className='left'>
          <div className='top'></div>
          <div className='decorate'></div>
        </div>
        <div className='middle'>
        <CSSTransitionGroup
          transitionName="subtopic"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {item}
        </CSSTransitionGroup>
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