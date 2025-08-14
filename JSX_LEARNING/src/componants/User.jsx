import React from 'react'

function User(props) {
  return (
    <ul>
        {props.hobbies.map((hobbi,index)=>(
            <li key={index}>{hobbi}</li>
        ))}
    </ul>
  )
}

export default User