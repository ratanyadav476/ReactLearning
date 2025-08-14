import React from 'react'

function UserTwo(props) {
    const {name ,age,caste}=props.details
  return (
   <>
   <h2>{name}</h2>
   <h2>{age}</h2>
   <h2>{caste}</h2>
   
   </>
  )
}

export default UserTwo