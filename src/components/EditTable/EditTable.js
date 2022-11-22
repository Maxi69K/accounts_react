import React from "react"
import Account from "../Account/Account"
import styles from '../AccountsTable/AccountsTable.module.css'

const EditTable = ({ accounts, deleteAccount }) => {
  const allAccounts = accounts.map((account, index) => {
    return (
        <Account account={account} edit={true} deleteAccount={deleteAccount} index={index} key={index} />
    )
  })
  return (
    <div className="container-md">
      <div className="row m-3">
        <h3>Edit / Delete</h3>
      </div>
      <div className="table-responsive">
        <table className={styles.myTable + ' table table-dark table-striped table-sm'}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Lastname</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{allAccounts}</tbody>
        </table>
      </div>
    </div>
  )
}

export default EditTable