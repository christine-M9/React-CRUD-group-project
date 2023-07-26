import React, {useState} from 'react'

// handling the search action when the user enters a search term.
function SearchUser({onSearchUSer}) {

// creating a state variable called 'searchTerm' and a function called 'setSearchTerm' to update the 'searchTerm' state. 
    const [searchTerm, setSearchTerm] = useState("")
   
    function handleSubmit(e){
        e.preventDefault()
        console.log(searchTerm)
        onSearchUSer(searchTerm)   
    }

  return (
    //form element that triggers the 'handleSubmit' function when it is submitted.
    <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search: </label>
        <input
        type="text"
        placeholder='Enter Name'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
    </form>
  )
}
// exporting searchuser
export default SearchUser