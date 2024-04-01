import React from 'react'
import ListItem from './ListItem'


const ListGroup = ({transactions , deleteBalance , editTransaction}) => {


  if(transactions.length === 0){
    return(
      <h1 className='text-center mt-3 text-secondary'>No Transaction</h1>
    )
  }


  return (
    <div className="my-5">
  <h2 className='text-secondary'> All Transactions :</h2>
  <ul className="my-3 list-group">
    {
    transactions.map((transaction) => <ListItem key={transaction.id} transaction={transaction} deleteBalance={deleteBalance} editTransaction={editTransaction} />)
    }
  </ul>
</div>
  )
}

export default ListGroup