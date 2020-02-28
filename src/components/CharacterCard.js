import React from "react";

import { useHistory } from 'react-router-dom'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard(props) {
  const charDetails = useHistory()
  const routeToDetails = () => {
    charDetails.push(`/character-details/${props.char.id}`)
  }
  return (
    <Card>
      <CardImg top width="40%" src={props.char.image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.char.name}</CardTitle>
        <CardSubtitle>Status: {props.char.status}</CardSubtitle>
        <CardText>{props.char.name}'s home planet is {props.char.origin.name}</CardText>
        <Button onClick={routeToDetails}>More Details</Button>
      </CardBody>
    </Card>
  )
}
