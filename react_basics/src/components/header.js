import React, { Component } from 'react'


class header extends Component{

  inputChangeHandler (){
    console.log('Input changed')
  }

  render(){
    return (
      <div>
        <header>
          <div className="logo">
            Logo
          </div>
          <input type="text" onChange={this.inputChangeHandler}/>
        </header>
      </div>
    )
  }
}

export default header
