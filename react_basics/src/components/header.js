import React, { Component } from 'react'

let styles ={
  header:{
    background: 'lightblue',

  },
  logo:{
    color: 'black',
    fontFamily: 'Anton',
    textAlign: 'center',
    padding: '10px'
  }
}

class header extends Component{

  render(){
    return (
      <div>
        <header style={styles.header}>
          <div style={styles.logo}>
            Logo
          </div>
          <input type="text" />
        </header>
      </div>
    )
  }
}

export default header
