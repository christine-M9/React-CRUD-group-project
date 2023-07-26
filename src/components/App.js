// importing the necessary modules from the 'react' package.
import React, {useState, useEffect }from 'react'
// imports a CSS file named 'App.css'
import './App.css';
// importing a component named 'RenderDetails' from the file './RenderDetails.js
import RenderDetails from './RenderDetails';

import AddUser from './AddUser';
import SearchUser from './SearchUser';
// uses the useState hook to create a state variable called 'details' and a function called 'setDetails' to update the 'details' state. The initial state of 'details' is an empty array [].
function App() {
  const [details, setDetails] = useState([])
     // useState hook to create a state variable called 'search' and a function called 'setSearch' to update the 'search' state
  const [search, setSearch] = useState("")
  
// running the arrow function provided as the first argument whenever the component is rendered
  useEffect(() => {

// GET request
    fetch('http://localhost:3001/people')
    .then(res => res.json())
    .then(data => setDetails(data))
  }, [])

// spreading the existing 'details' array and appending the 'newPerson' 
 function handleAddANewUSer(newPerson){
    setDetails([...details, newPerson])
 }

//  updating the 'search' state with the provided search term using the 'setSearch' function.
function searchUser(searchTerm){
  setSearch(searchTerm)
}

// runs the arrow function whenever the 'search' state changes.
useEffect(() => {
  const filteredArray = details.filter(detail => detail.firstName.includes(search.charAt(0).toUpperCase()+search.slice(1, search.length-1)))
  setDetails(filteredArray)
}, [search])

// removing a person from the 'details' state whose 'number' matches the provided parameter. 
function deletePerson(number){
  const updatedAfterDelete = details.filter(detail => detail.number !== number)
  setDetails(updatedAfterDelete)
}

// returns the JSX that defines the structure of the 'App' component
  return (
    <div className="App">
      <SearchUser onSearchUSer={searchUser}/>
      <RenderDetails details={details} onDelete={deletePerson}/>
      
  {/* communication between the 'AddUser' component and the 'App' component.   */}
      <AddUser onAddNewUser={handleAddANewUSer} />  
    </div>
  );
}

//  exporting the 'App' component a
export default App;
