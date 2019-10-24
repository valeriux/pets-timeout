import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import Home from './common/Home'


class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (


      < Home />


    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
