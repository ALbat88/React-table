
import React from 'react'

function ReadOnlyRow({contact,handleEditClick, handleDeleteClick}) {
  return (
    <tr>
    <td>{contact.fullName}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.email}</td>
    <td>
       <button type="button" onClick={(event)=>handleEditClick(event,contact)}>Edit</button>
       <button type='button' onClick={handleDeleteClick}>Delete</button>
    </td>
   </tr>
  )
}

export default ReadOnlyRow