import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    

  render() {
    const {count, incrementcount}=this.props
    return (
      <h2 onMouseOver={incrementcount}>Hovered {count} times</h2>
    )
  }
}

export default HoverCounterTwo
