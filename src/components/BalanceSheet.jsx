import React from 'react'

const BalanceSheet = ({transactions , theme}) => {

    const balance = transactions.reduce((p,c) => {
        return p + c.amount;
    } , 0)

    const expense = transactions.filter((transactions) => transactions.amount < 0).reduce((p, c) => {
        return p + c.amount;
    } , 0)

    const income = transactions.filter((transactions) => transactions.amount > 0).reduce((p, c) => {
        return p + c.amount;
    } , 0)

  return (
    <div className="my-3 row">
  <div className="col-md-12 col-lg-4">
    <div className={theme ? "card rounded-0 p-3 bg-dark" : "card rounded-0 p-3 bg-light"}>
      <h1 className={theme ? " diplay-6 text-light" : " diplay-6 text-dark"}>Total Income :</h1>
      <h1 className={theme ? " diplay-6 text-light" : " diplay-6 text-dark"}>{income}</h1>
    </div>
  </div>
  <div className="col-md-12 col-lg-4">
    <div className={theme ? "card rounded-0 p-3 bg-dark" : "card rounded-0 p-3 bg-light"}>
      <h1 className={theme ? " diplay-6 text-light" : " diplay-6 text-dark"}>Total Epx :</h1>
      <h1 className={theme ? " diplay-6 text-light" : " diplay-6 text-dark"}>{expense}</h1>
    </div>
  </div>
  <div className="col-md-12 col-lg-4">
    <div className={theme ? "card rounded-0 p-3 bg-dark" : "card rounded-0 p-3 bg-light"}>
      <h1 className={theme ? " diplay-6 text-light" : " diplay-6 text-dark"}>Balance :</h1>
      <h1 className={theme ? " diplay-6 text-light" : " diplay-6 text-dark"}>{balance}</h1>
    </div>
  </div>
</div>
  )
}

export default BalanceSheet