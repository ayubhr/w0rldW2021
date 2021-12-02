import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import moment from 'moment';

const CardContent = ({data}) => {

  const date = moment().format('DD/MM/YYYY HH:mm:ss')

return (
  <>
  <Card className="text-center" style={{fontSize: '14px'}}>
  <Card.Header> {data.title} </Card.Header>
  <Card.Body>
    <Card.Title>{data.part1}</Card.Title>
    <Card.Text style={{textAlign: 'left'}}>
      {data.part2}
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">{date}</Card.Footer>
</Card>
  </>
);




}


export default CardContent;
