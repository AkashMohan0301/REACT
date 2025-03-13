import React, { Component } from 'react'


class header extends Component{

  inputChangeHandler (event,name){
    console.log(event.target.value);
    console.log(name);

  }

  render(){
    return (
      <div>
        <header>
          <div className="logo">
            Logo
          </div>
          <input type="text" onChange={(e) => this.inputChangeHandler(e,'Akash')}/>
        </header>
      </div>
    )
  }
}

export default header
