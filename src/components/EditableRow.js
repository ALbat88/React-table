import React from 'react'

function EditableRow({handleEditFromChange,editFormData,handleCancelEditClick}) {
  return (
    
    <tr>
        <td>
            <input 
            name="fullName"
            placeholder='enter your name'
            type="text"
            required="required"
            value={editFormData.fullName}
            onChange={handleEditFromChange}
            />
        
        </td>
        <td>
            <input 
            name="address"
            placeholder='enter your address'
            type="text"
            required="required"
            onChange={handleEditFromChange}
            value={editFormData.address}
            />
        
        </td>
        <td>
            <input 
            name="email"
            placeholder='enter your email'
            type="text"
            required="required"
            onChange={handleEditFromChange}
            value={editFormData.email}
            />
        
        </td>
        <td>
            <input 
            name="phoneNumber"
            placeholder='enter your phone'
            type="text"
            required="required"
            onChange={handleEditFromChange}
            value={editFormData.phoneNumber}
            />
        
        </td>
        <td>
            <button type="submit">Save</button>
            <button type='button' onClick={handleCancelEditClick}>Cancel</button>
        </td>
    </tr>
   
  )
}

export default EditableRow