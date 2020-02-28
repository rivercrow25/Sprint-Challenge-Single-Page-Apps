import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';

const CharacterDetails = () => {
    const [character, setCharacter] = useState()
    const { itemId } = useParams

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${itemId}`)
            .then(response => {
                console.log(response)
            })
    }, [])



    return (
        <div>
            hello
        </div>
    )
}

export default CharacterDetails