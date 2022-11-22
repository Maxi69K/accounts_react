import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Account = ({account, index, edit, deleteAccount}) => {
  const navigate = useNavigate()
  const actionButtons = edit ? (
    <React.Fragment>
      <td><Link to={`/edit/${account.id}`} index={index} className="btn btn-secondary btn-sm">Edit</Link></td>
      <td><button onClick={() => {deleteAccount(index);navigate('/')}} className="btn btn-dark btn-sm">Delete</button></td>
    </React.Fragment>
  ) : null

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{account.name}</td>
        <td>{account.lastName}</td>
        <td>{account.phone}</td>
        <td>{account.email}</td>
        {actionButtons}
      </tr>
    )
}

export default Account