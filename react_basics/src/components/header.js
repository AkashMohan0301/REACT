import React from 'react'

const header = () => {

  const getTheYear = () =>{
    const newDate= new Date();
    return newDate.getFullYear();
  }

  return (
    <div>
      The Date is {getTheYear()} <br />
      sum is {5+10}
    </div>
  )
}

export default header
