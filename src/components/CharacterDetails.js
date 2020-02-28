import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';

const CharacterDetails = () => {
    const [character, setCharacter] = useState()
    const { itemid } = useParams
    console.log(useParams())

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${itemid}`)
            .then(response => {
                console.log(response)
                setCharacter(response.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div>

        </div>
    )
}

export default CharacterDetails