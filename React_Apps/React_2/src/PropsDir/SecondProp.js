import React from 'react'

const SecondProp = (props) => {
  return (
    <div className='secondprop'>
        First Name : {props.name}<br />
        Email ID : {props.email}
    </div>
  )
}

export default SecondProp