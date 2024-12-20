import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Item from './Item'

function ItemList ({items}){
    return (
        <Container style={{paddingTop:'1rem'}}>
            <Row xs={1} md={4} className="g-4 align-items-stretch">
              {items.map(item => ( <Item item={item} key={item.id} />
              ) ) }
            </Row>
        </Container>
    )
}

export default ItemList