import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses } from '../services/expenses';
import { Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
export default () => {
    const dispatch = useDispatch();

    const expenses = useSelector(state => state.expensesReducer.expenses)
    useEffect(() => {
        getExpenses(dispatch);
    }, [])

    return expenses.map((e) => (
        <div  style={{marginBottom: '1rem'}}>
            <ListRow expense={e}></ListRow>
        </div>
    ))
}


const ListRow = ({expense}) => {
    const [isEditing, setIsEditing] = useState(false);

    if(isEditing){
        return(
            <ExpenseForm expense={expense} setIsEditing={setIsEditing}></ExpenseForm>
        )
    }
    else{
        return(
        <div>
            <Row>
                <Col>{expense.description}</Col>
                <Col>{"$" + expense.amount}</Col>
                <Button variant="warning" style={{float:"right", width:'60px', overflow: 'none'}} onClick={() => setIsEditing(!isEditing)}>Edit</Button>
            </Row>
            <hr/>
        </div>
        )
    }
}

