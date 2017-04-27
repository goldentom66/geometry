import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import lessStyle from '../styles/app.less'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

let initialState = {
  topic: {
    title: "Geometry"
  },
  subtopics: [
    { index: 1, title: "Triangles", completed: true },
    { index: 2, title: "Angle Sum", completed: true },
    { index: 3, title: "Similar Triangles", completed: true },
    { index: 4, title: "Congruence", completed: false },
    { index: 5, title: "Enlargements", completed: false },
    { index: 6, title: "Parallel Lines", completed: false },
    { index: 7, title: "Pythagoras Theorem", completed: false },
    { index: 8, title: "Revision", completed: false },
    { index: 9, title: "Topic Test", completed: false }
  ],
  user: {
    id: 1,
    username: 'tom.jiang',
    avatar: 'avatar.png',
    hasUpdate: true,
    session: {
      currentSubtopicIndex: 4
    }
  }
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
