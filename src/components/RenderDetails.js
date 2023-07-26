import React from 'react'


function RenderDetails({details, onDelete}) {

  function handleDelete(number){
    fetch(`http://localhost:3001/people/${number}`, {
      method: "DELETE"
    })
    onDelete(number)
  }

  return (
    <>
    {details.map(detail => (
        <div key={detail.number} id="details">
            <p>First Name: {detail.firstName}</p> 
            <p>Last Name: {detail.lastName}</p> 
            <p>Gender: {detail.gender}</p> 
            <p>Age: {detail.age}</p> 
            <p>Number: {detail.number}</p> 
            <button onClick={() => handleDelete(detail.number)}>Delete</button> 
        </div>
    ))}
    </>
  )
}

export default RenderDetails