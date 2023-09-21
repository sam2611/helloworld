import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    
  render() {
    const {count, incrementcount}=this.props
    return (
      <div>
        <button onClick={incrementcount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default ClickCounterTwo
