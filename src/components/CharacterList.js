import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response)
        setChar(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <form>
        <label htmlFor='search-char'>Search Characters</label>
        <input id='search-char' type='text' name='search-char' placeholder='Character name' />
      </form>
      <section className="character-list">
        {char.map(char => {
          return (
            <div>
              <CharacterCard char={char} />
            </div>
          )
        })}
      </section>
    </div>
  );
}
