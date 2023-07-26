import React, {useState} from 'react'

function AddUser({onAddNewUser}) {
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        number: ""
    })
    function handleSubmit(e){
        e.preventDefault()
        console.log(newUser)
        onAddNewUser(newUser)
        setNewUser({
            firstName: "",
            lastName: "",
            gender: "",
            age: "",
            number: ""
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add user:</h2>
        <label htmlFor="fname">First Name: </label>
        <input
        label="First Name: "
        type="text"
        id="fname"
        value={newUser.firstName}
        onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
        /> 

        <label htmlFor="lname">Last Name: </label>
        <input
        label="Last Name: "
        type="text"
        id="fname"
        value={newUser.lastName}
        onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}
        /> 

        <label htmlFor="gender">Gender: </label>
        <input
        label="Gender: "
        type="text"
        id="gender"
        value={newUser.gender}
        onChange={(e) => setNewUser({...newUser, gender: e.target.value})}
        /> 

        <label htmlFor="Age">Age: </label>
        <input
        type="text"
        id="age"
        value={newUser.age}
        onChange={(e) => setNewUser({...newUser, age: e.target.value})}
        /> 

        <label htmlFor="number">Number: </label>
        <input
        placeholder='10 digit number'
        label="Number: "
        type="number"
        id="number"
        value={newUser.number}
        onChange={(e) => setNewUser({...newUser, number: e.target.value})}
        /> 
        <input type="submit" value="Add"/>
    </form>
  )
}

export default AddUser