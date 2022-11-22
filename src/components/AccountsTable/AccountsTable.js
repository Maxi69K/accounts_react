import React from "react"
import Account from "../Account/Account"
import styles from './AccountsTable.module.css'

const AccountsTable = ({accounts}) => {
    const allAccounts = accounts.map((account, index) => {
        return <Account account={account} index={index} key={index}/>
    })
    return (
      <div className="container-md">
        <div className="row m-3">
          <h3>Accounts</h3>
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
              </tr>
            </thead>
            <tbody>{allAccounts}</tbody>
          </table>
        </div>
      </div>
    )
}

export default AccountsTable