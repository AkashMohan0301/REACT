import React, { Component } from 'react'


class header extends Component{

  inputChangeHandler (event){
    console.log(event.target.value);
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
