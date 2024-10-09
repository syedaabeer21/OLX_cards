import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card';



function App(){
   return(
    <>
    <Container className='p-5'>
      <Row>
         <Col>
            <Card src='https://propakistani.pk/wp-content/uploads/2023/12/iPhone-15-Pro-e1702381232998.jpg'
            rs='Rs 320,000' title = 'Apple iPhone 13 Pro Max' description='Islamabad, Punjab' time='14 hour ago' />
         </Col>
         <Col>
            <Card src='https://propakistani.pk/wp-content/uploads/2023/12/iPhone-15-Pro-e1702381232998.jpg'
            rs='Rs 320,000' title = 'Apple iPhone 13 Pro Max' description='Islamabad, Punjab' time='14 hour ago' />
         </Col>
         <Col>
            <Card src='https://propakistani.pk/wp-content/uploads/2023/12/iPhone-15-Pro-e1702381232998.jpg'
            rs='Rs 320,000' title = 'Apple iPhone 13 Pro Max' description='Islamabad, Punjab' time='14 hour ago' />
         </Col>
         <Col>
            <Card src='https://propakistani.pk/wp-content/uploads/2023/12/iPhone-15-Pro-e1702381232998.jpg'
            rs='Rs 320,000' title = 'Apple iPhone 13 Pro Max' description='Islamabad, Punjab' time='14 hour ago' />
         </Col>
        
      </Row>
   </Container>  
    </>
   )

          
}
export default App;



