import React, {useState, useEffect }from 'react'
import './App.css';
import RenderDetails from './RenderDetails';
import AddUser from './AddUser';
import SearchUser from './SearchUser';

function App() {
  const [details, setDetails] = useState([])
  const [search, setSearch] = useState("")
  

  useEffect(() => {
    fetch('http://localhost:3001/people')
    .then(res => res.json())
    .then(data => setDetails(data))
  }, [])

 function handleAddANewUSer(newPerson){
    setDetails([...details, newPerson])
 }
function searchUser(searchTerm){
  setSearch(searchTerm)
}

useEffect(() => {
  const filteredArray = details.filter(detail => detail.firstName.includes(search.charAt(0).toUpperCase()+search.slice(1, search.length-1)))
  setDetails(filteredArray)
}, [search])

function deletePerson(number){
  const updatedAfterDelete = details.filter(detail => detail.number !== number)
  setDetails(updatedAfterDelete)
}

  return (
    <div className="App">
      <SearchUser onSearchUSer={searchUser}/>
      <RenderDetails details={details} onDelete={deletePerson}/>
      <AddUser onAddNewUser={handleAddANewUSer} />
    </div>
  );
}

export default App;
