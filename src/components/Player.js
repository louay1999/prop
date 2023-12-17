import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

export default function Player(prop) { 
  const {name,age,team,nationality,jersynumber,image}=prop.player
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} width="300px" height="250px"  />
      
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        
        <Card.Text><h3>nationality:{nationality} </h3>
        </Card.Text><h2>age:{age}</h2>
        <h3>TEAM:{team}</h3>
        <h3>jersyNumber: { jersynumber}</h3>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
