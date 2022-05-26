import React from 'react'
import{Card, Button} from 'react-bootstrap'
const ProductCard = ({el}) => {
  return (
    <div>
        <img src={el.image} alt="" />

      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
     {el.price}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default ProductCard