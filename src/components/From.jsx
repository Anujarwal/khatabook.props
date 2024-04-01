import React, { useEffect, useState } from 'react'

const From = ({saveBalance , edit , updateTransaction , theme , transaction}) => {

    const [text , setText] = useState("")
    const [amount , setAmount] = useState("")

    // const deleteAll = (i) => {
    //   i.preventDefault()
    //   transaction()
    // };


    const handleSubmit = (e) => {
        e.preventDefault()
        if(edit.editMode) {
          updateTransaction({
            id: edit.transaction.id,
            text: text,
            amount: parseInt(amount) 
          })
        }else{
          saveBalance(text , amount)
        }

        setText("")
        setAmount("")
    }

    useEffect(() =>{
      setText(edit.transaction.text)
      setAmount(edit.transaction.amount)
    } , [edit])


  return (
    <>
    <div className={theme ? "card rounded-0 p-3 bg-dark my-2" : "card rounded-0 p-3 bg-light my-2"} onSubmit={(e) => handleSubmit(e)}>
    <h1 className={theme ? "diplay-6 text-center text-light" : "diplay-6 text-center text-dark"}> Enter Transactions</h1>
    <form className='my-3' >
      <input type="text" placeholder='Enter Transaction' className='my-2 form-control rounded-0 ' onChange={(e) => setText(e.target.value)} value={text} required />
      <input type="number" placeholder='Enter Amount' className='my-2 form-control rounded-0' onChange={(e) => setAmount(e.target.value)} value={amount} required/>
      <button className="btn btn-success w-100 rounded-0">Save</button>
      {/* <button className="btn btn-danger w-50 rounded-0">Clear All</button> */}
    </form>
    </div>
    </>
  )
}

export default From