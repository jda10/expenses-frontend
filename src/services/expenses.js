import { ActionCreators } from "../app/expensesReducer"

export const getExpenses = async(dispatch) => {
    try{
        const expenses = [
            {
                id : 1,
                description :  "Groceries",
                amount : 23.15
            },
            {
                id : 2,
                description :  "Gas",
                amount : 17.32
            },
            {
                id : 3,
                description :  "Credit Card Bill",
                amount : 200.23
            }
        ]

        dispatch(ActionCreators.setExpenses(expenses));
    }
    catch(error){console.log(error)}
}


export const NewExpense = async(dispatch, expense) => {
    try{
        //api call
        dispatch(ActionCreators.newExpense({id: 10 , description : expense.description, amount : expense.amount}));
    }

    catch(error){console.log('error')}
}