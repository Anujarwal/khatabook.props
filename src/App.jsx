import React, { useState } from 'react'
import Navbar from './components/Navbar'
import From from './components/From'
import BalanceSheet from './components/BalanceSheet'
import ListGroup from './components/ListGroup'

const App = () => {

  const [transactions , setTransactions] = useState([
  //   {
  //   id : 1,
  //   text : "salary",
  //   amount : 100000
  // },
  //   {
  //   id : 2,
  //   text : "Rent",
  //   amount : -15000
  // },
  //   {
  //   id : 3,
  //   text : "Grocery",
  //   amount : -5000
  // },
  //   {
  //   id : 4,
  //   text : "comision",
  //   amount : 40000
  // },
  // {
  //   id : 5,
  //   text : "coffee",
  //   amount : -1400
  // },
  // {
  //   id : 6,
  //   text : "water",
  //   amount : -1000,
  // }
])

// edit state
const [edit , setEdit] = useState({
  transaction : {},
  editMode : false,
})


// theme state
const [theme , setTheme] = useState(true)

// change theme
const changeTheme = () =>{
  theme ? setTheme(false) : setTheme(true)
}



// balance delete 
  const deleteBalance = (id) => {
    setTransactions(transactions.filter((item) => {
      if (item.id !== id){
        return true
      }
    }))
  }

  // save balance
  const saveBalance =(text , amount) =>{
    const newBalance = {
      id : crypto.randomUUID(),
      text : text,
      amount : parseInt(amount)
    }

    setTransactions([newBalance , ...transactions])
  }

  // edit transaction 
  const editTransaction = (transaction) => {
    setEdit({
      transaction : transaction,
      editMode : true,
    })
  }

  // update transaction
  const updateTransaction = (updateTransaction) =>{
    setTransactions(
      transactions.map((item) => item.id === updateTransaction.id ? updateTransaction : item)
    )
    setEdit({
      transaction: {},
      editMode : false,
    })
  }






  return (
  <>
  <Navbar theme={theme} changeTheme={changeTheme} />
<div className={theme ? "container bg-dark" : "container bg-light "}>
<From saveBalance={saveBalance} edit={edit} updateTransaction={updateTransaction} theme={theme} transaction={transactions} />
<BalanceSheet transactions={transactions} theme={theme}/>
<ListGroup transactions={transactions} deleteBalance={deleteBalance} editTransaction={editTransaction} theme={theme}/>
</div>
    
  </>
  )
}

export default App