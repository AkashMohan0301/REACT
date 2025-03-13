import React, { Component } from 'react'

class header extends Component{

  render(){
    return (
      <div>
        <header onClick={() => console.log('i was Clicked')}>
          
          <div className="logo">
            Logo
          </div>
          <input type="text" />
        </header>
      </div>
    )
  }
}

export default header
