import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function AddAccount (props) {
  const navigate = useNavigate()
  const [newAccount,setNewAccount] = useState({ id: "", name: "", lastName: "", phone: "", email: "" })
  const nameInput = useRef()
  useEffect(() => nameInput.current.focus(),[])
  const changeHandler = (e) => {
    const saveBtn = document.querySelector('.btn')
    saveBtn.innerText = 'Save'
    let id = e.target.id
    let newAccountCopy = {...newAccount}
    let newUserId = document.getElementById('id').value
    newAccountCopy[id] = e.target.value
    newAccountCopy.id = newUserId
    setNewAccount(newAccountCopy)
  }
  const addNewAccount = () => {
    if (newAccount.name !== '' && newAccount.lastName !== '' && newAccount.phone !== '' && newAccount.email !== '') {
      props.addNewAccountToState(newAccount)
      navigate('/')
    } else {
      const saveBtn = document.querySelector('.btn')
      saveBtn.innerText = 'Complete all fields'
    }
  }
    return (
      <div className="container-md">
        <div className="row m-3">
          <h3>Add Account</h3>
        </div>
        <div className="row col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={props.accounts.length + 1}
              disabled
              id="id"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              onChange={changeHandler}
              className="form-control"
              placeholder="name"
              ref={nameInput}
              id="name"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              onChange={changeHandler}
              className="form-control"
              placeholder="lastname"
              id="lastName"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="tel"
              onChange={changeHandler}
              className="form-control"
              placeholder="phone"
              id="phone"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="email"
              onChange={changeHandler}
              className="form-control"
              placeholder="email"
              id="email"
            />
          </div>
          <div className="input-group mb-3">
            <button
              onClick={addNewAccount}
              className="btn btn-secondary form-control"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }

export default AddAccount