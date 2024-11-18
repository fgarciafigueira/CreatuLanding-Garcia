import { Card, Container } from 'react-bootstrap';
import ItemCount from './ItemCount'

function ItemDetail({detail}) {
    return(
      <Container className="d-flex justify-content-center" style={{ minHeight: '100vh', paddingTop:'1rem' }}>
         <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={detail?.thumbnail} />
            <Card.Body>
              <Card.Title>{detail?.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{detail?.category}</Card.Subtitle>
              <Card.Text>
              {detail?.description}
              </Card.Text>
              ${detail?.price}
              <ItemCount detail={detail} />
            </Card.Body>
          </Card>
      </Container>
    )
}

export default ItemDetail