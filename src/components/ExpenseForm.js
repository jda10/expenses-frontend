import{React, useState, useEffect} from 'react';
import { Form, Col, Row, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
export default () => {
    const descriptions = ['Groceries', 'Credit Card', 'Student Loans', 'Gas']
    const [amount, setAmount] = useState(0)
    const [description, setDescription] = useState(descriptions[0])
    const [isNewExpense, setIsNewExpense] = useState(true);
    return(
        
        <Form
        onSubmit={event => {
            event.preventDefault();
            if(isNewExpense){
                //create new expense
            }
            else{

                //edit expense

            }
        }}
        >
        <Row>
            <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control as='select'
            onChange={event => setDescription(event.target.value)}>
                {descriptions.map(d => <option>{d}</option>)}
            </Form.Control>
            </Col>
            <Col>
            <Form.Label>Amount</Form.Label>
            <Form.Control type='number' step='0.01'
            style={{width : '200px'}}
            placeholder={amount}
            onChange={event => setAmount(event.target.value)}
            ></Form.Control>
            </Col>
                {isNewExpense
                ? <Button variant="primary" type="submit" style={{float:"right", width:'60px', overflow: 'none'}}>Add</Button>
                : <div>
                   <Button variant="danger" style={{float:"right", width:'60px', overflow: 'none'}}>Delete</Button>
                   <Button variant="success" type="submit" style={{float:"right", width:'60px', overflow: 'none'}}>Save</Button>
                   <Button variant="default" style={{float:"right", width:'60px', overflow: 'none'}}>Cancel</Button>
                </div>
            }
        </Row>
    </Form>
    )
}