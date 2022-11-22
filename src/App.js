import React, { useState } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AccountsTable from './components/AccountsTable/AccountsTable'
import AddAccount from './components/AddAccount/AddAccount'
import EditTable from './components/EditTable/EditTable'
import EditAccount from './components/EditAccount/EditAccount'

function App () {
  const [accounts,setAccounts] = useState([])
  const addNewAccountToState = (acc) => {
    setAccounts([...accounts, acc])
  }
  const deleteAccount = (index) => {
    accounts.splice(index, 1)
    accounts.map((acc,index) => {
      let newId = index + 1
      return acc.id = `${newId}`
    })
    setAccounts(accounts)
  }
  const editAccount = (acc) => {
    let accountPosition = accounts.map(account => account.id).indexOf(acc.id)
    accounts[accountPosition] = acc
    setAccounts(accounts)
  }
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AccountsTable accounts={accounts} />} />
          <Route path='/add' element={<AddAccount addNewAccountToState={addNewAccountToState} accounts={accounts} />} />
          <Route path='/edit' element={<EditTable accounts={accounts} deleteAccount={deleteAccount} />} />
          <Route path='/edit/:id' element={<EditAccount accounts={accounts} editAccount={editAccount} />} />
        </Routes>
      </BrowserRouter>
    )
  }

export default App
