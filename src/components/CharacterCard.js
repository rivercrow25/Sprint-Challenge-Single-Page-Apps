import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard(props) {
  console.log(props)
  return (
    <Card>
      <CardImg top width="40%" src={props.char.image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.char.name}</CardTitle>
        <CardSubtitle>Status: {props.char.status}</CardSubtitle>
        <CardText>{props.char.name}'s home planet is {props.char.origin.name}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  )
}
