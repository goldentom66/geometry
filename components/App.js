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
    return (
      <div>
        <header>
          <Menu/>
          <Topic topic={this.props.topic} />
          <User user={this.props.user} />
        </header>
        <nav>
          <SubtopicList subtopics={this.props.subtopics} currentSubtopic={this.props.currentSubtopic} actions={this.props.actions} />
        </nav>
        <main>
          <Subtopic subtopic={this.props.currentSubtopic} />
        </main>
        <footer>
          <ViewChoice currentView={this.props.currentView}/>
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
