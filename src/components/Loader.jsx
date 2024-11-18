import { RingLoader } from "react-spinners"
import { Container } from 'react-bootstrap';
function Loader () {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
            <RingLoader color="#13d9ea" size={85}/>
        </Container>
    )
}

export default Loader