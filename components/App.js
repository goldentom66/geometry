import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

import Menu from './Menu'
import Topic from './Topic'
import User from './User'
import SubtopicList from './SubtopicList'
import Subtopic from './Subtopic'
import ViewChoice from './ViewChoice'

class App extends Component {
  render() {
    let currentSubtopicIndex = 0;
    if (this.props.user && this.props.user.session && this.props.user.session.currentSubtopicIndex > 0) {
      currentSubtopicIndex = this.props.user.session.currentSubtopicIndex;
    }
      
    const currentSubtopics = this.props.subtopics.filter((subtopic) => {
        return (subtopic.index === currentSubtopicIndex)
    });
    
    let currentSubtopic = null;
    if (currentSubtopics.length > 0) {
      currentSubtopic = currentSubtopics[0];
    }
    else if(this.props.subtopics.length > 0) {
      currentSubtopic = this.props.subtopics[0];
    }
    
    return (
      <div className='container-fluid no-padding'>
        <header>
          <div className='row no-margin'>
            <div className='col-xs-4'><Menu /></div>
            <div className='col-xs-4'><Topic topic={this.props.topic} /></div>
            <div className='col-xs-4'><User user={this.props.user} /></div>
          </div>
        </header>
        <nav>
          <div className='row no-margin'>
            <SubtopicList subtopics={this.props.subtopics} currentSubtopic={currentSubtopic} actions={this.props.actions} />
          </div>
        </nav>
        <main>
          <div className='row no-margin'>
            <Subtopic subtopic={currentSubtopic} actions={this.props.actions} />
          </div>
        </main>
        <footer>
          <div className='row no-margin'>
            <ViewChoice currentView={this.props.currentView}/>
          </div>
        </footer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
