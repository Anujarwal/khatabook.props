import React from 'react'

const ListItem = ({transaction , deleteBalance , editTransaction}) => {
  return (
    <li className={transaction.amount > 0 ? "list-group-item bg-success" : "list-group-item bg-danger"}>
      <h1 className='text-light display-6'>{transaction.text} : {transaction.amount}</h1>
      <span className='float-end'>
        <button className=' btn btn-outline-warning btn-sm rounded-0 mx-2' onClick={()=>editTransaction(transaction)}>Edit</button>
        <button className='btn btn-outline-dark btn-sm rounded-0 mx-2' onClick={()=>deleteBalance(transaction.id)}>Delete</button>
      </span>
    </li>
  )
}

export default ListItem