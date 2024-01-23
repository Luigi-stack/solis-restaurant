/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardsHomepage(props) {
    return (
        <Card className='rounded-0 border border-2 border-black' style={{ width: '25rem' }}>
            <Card.Header as="h2" className='bg-white border-bottom border-dark border-2 '>{props.header}</Card.Header>
            <Card.Body>
                <Card.Text className='fs-6'>{props.cardText}</Card.Text>
                <Button href={props.href} variant="dark" className='rounded-0 text-center'>{props.button}</Button>
            </Card.Body>
        </Card>
    );
}

export default CardsHomepage;