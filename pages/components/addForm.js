import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



import 'bootstrap/dist/css/bootstrap.min.css';


function handleSubmit(e){
    e.preventDefault();
    console.log(e);
}


export default function AddForm(){
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Enter book name" />
                <Form.Text className="text-muted">
                What would you like to read?
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Who is the author?" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} />
            </Form.Group>

            <Button variant="dark" type="submit">
                Order
            </Button>
        </Form>
    );
}
