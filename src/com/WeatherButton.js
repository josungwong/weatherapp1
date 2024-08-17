import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
        <Button variant="success">CurrentLocation</Button>{' '}
        <Button variant="success">Seoul</Button>{' '}
        <Button variant="success">New york</Button>{' '}
        <Button variant="success">tokyo</Button>{' '}
    </div>
  )
}

export default WeatherButton