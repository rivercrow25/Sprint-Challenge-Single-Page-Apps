import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([])
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        setChar(response.data.results.filter(char => char.name.toLowerCase().includes(query.toLowerCase())))
      })
      .catch(err => {
        console.log(err)
      })
  }, [query]);

  const handleInputChange = event => {
    setSearch(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setQuery(search)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search-char'>Search Characters</label>
        <input onChange={handleInputChange} id='search-char' type='text' name='search-char' placeholder='Character name' />
        <button type='submit'>button</button>
      </form>
      <section className="character-list">
        {char.map(char => {
          return (
            <div>
              <CharacterCard key={char.id} char={char} />
            </div>
          )
        })}
      </section>
    </div>
  );
}
