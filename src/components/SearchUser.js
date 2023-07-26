import React, {useState} from 'react'

function SearchUser({onSearchUSer}) {

    const [searchTerm, setSearchTerm] = useState("")
   
    function handleSubmit(e){
        e.preventDefault()
        console.log(searchTerm)
        onSearchUSer(searchTerm)   
    }

  return (
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

export default SearchUser