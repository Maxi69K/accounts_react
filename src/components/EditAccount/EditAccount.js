import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditAccount (props) {
  const navigate = useNavigate()
  const match = { params: useParams() }
  const [account,setAccount] = useState(props.accounts.filter(acc => acc.id === match.params.id)[0])

  const editAccount = () => {
    props.editAccount(account)
    navigate('/')
  }
    return (
      <div className="container-md">
        <div className="row m-3">
          <h3>Edit Account</h3>
        </div>
        <div className="row col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={`id: ${match.params.id}`}
              id="id"
              disabled
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              onChange={(e) => setAccount({ ...account, name: e.target.value })}
              className="form-control"
              placeholder="name"
              id="name"
              value={account.name}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
              className="form-control"
              placeholder="lastname"
              id="lastName"
              value={account.lastName}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="tel"
              onChange={(e) =>
                setAccount({ ...account, phone: e.target.value })
              }
              className="form-control"
              placeholder="phone"
              id="phone"
              value={account.phone}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="email"
              onChange={(e) => setAccount({ ...account, email: e.target.value })}
              className="form-control"
              placeholder="email"
              id="email"
              value={account.email}
            />
          </div>
          <div className="input-group mb-3">
            <button
              onClick={editAccount}
              className="btn btn-secondary form-control"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    )
  }

export default EditAccount