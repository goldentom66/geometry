import React, { Component } from 'react'

import SubtopicListItem from './SubtopicListItem'

class SubtopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {leftClickedTimes: 0, rightClickedTimes: 0};
  }
  
  handleLeftClick() {
    this.handleClick(-1);
  }
  
  handleRightClick() {
    this.handleClick(1);
  }
  
  handleClick(direction) {
    let listRect = this.list.getBoundingClientRect();
    let listWidth = listRect.width;
    let listCurrentPosition = listRect.left;
    
    let btnLeftRect = this.leftBtn.getBoundingClientRect();
    let slotStart = btnLeftRect.right;

    let btnRightRect = this.rightBtn.getBoundingClientRect();
    let slotEnd = btnRightRect.left;
    
    let totalClicks = Math.ceil(listWidth / ((slotEnd - slotStart) * 3.0 / 4.0));
    if (this.state.leftClickedTimes >= this.state.rightClickedTimes 
        && ((direction < 0 && this.state.leftClickedTimes - this.state.rightClickedTimes < totalClicks - 1) 
            || (direction > 0 && this.state.rightClickedTimes < this.state.leftClickedTimes))) {
      let eachClickMove = listWidth / totalClicks;
      let currentMarginLeft = this.list.style["margin-left"];
      let nextMarginLeft = eachClickMove * direction;
      if (currentMarginLeft && currentMarginLeft !== "") {
        nextMarginLeft += parseInt(currentMarginLeft.replace("px", ""));
      }
      
      this.list.setAttribute("style", "margin-left:" + nextMarginLeft + "px");
      if (direction > 0) {
        this.setState({leftClickedTimes: this.state.leftClickedTimes, rightClickedTimes: this.state.rightClickedTimes + 1});
      }
      else {
        this.setState({leftClickedTimes: this.state.leftClickedTimes + 1, rightClickedTimes: this.state.rightClickedTimes});
      }
    }
  }
  
	render() {
		return (
      <div className='subtopic-list'>
        <div className='left button' onClick={this.handleLeftClick.bind(this)} ref={(btn) => {this.leftBtn = btn;}}><img src='../images/left.png' alt='Left' /></div>
        <div className='list-parent'>
          <ul className='list' ref={(ul) => {this.list = ul;}}>
            {
              this.props.subtopics.map((subtopic) => {
                  return <SubtopicListItem key={subtopic.index} subtopic={subtopic} actions={this.props.actions} />
              })
            }
          </ul>
        </div>
        <div className='right button' onClick={this.handleRightClick.bind(this)} ref={(btn) => {this.rightBtn = btn;}}><img src='../images/right.png' alt='Right' /></div>
      </div>
		)
	}
}

export default SubtopicList