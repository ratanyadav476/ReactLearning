import React from 'react'

function UserCard(props) {
  return (
    <>
    <div>UserCard</div>
    <h1>userName is ,{props.name}</h1>
    <h1>userId ,{props.id}</h1>
    <h1>UserLocation,{props.location}</h1>
    </>
  )
}

export default UserCard