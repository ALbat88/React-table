import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json"
import {nanoid} from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from './components/EditableRow';

function App() {

  const [contacts, setContacts] = useState(data);

  const [addFormData ,setaddFormDate] = useState({
    fullName:"",
    address:"",
    email:"",
    phoneNumber:""
  })

  const [editFormData, setEditFormData] =useState({
    fullName:"",
    address:"",
    email:"",
    phoneNumber:""
  })

  const [editContactId, setEditContactId] = useState(null)

  const handleAddFormChange = (e)=>{
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue= e.target.value;
   
     const newFormData = {...addFormData};
     newFormData[fieldName] = fieldValue;

     setaddFormDate(newFormData)

  };

  

  const formSubmit = (e)=>{
  e.preventDefault();

  const newContact ={
    id:nanoid(),
    fullName: addFormData.fullName,
    address: addFormData.address,
    email: addFormData.email,
    phoneNumber: addFormData.phoneNumber
  };

   const newContacts =[...contacts, newContact];

   setContacts(newContacts)
     


  }

  const handleEditFromChange =(e) =>{
    
    e.preventDefault();

    const fieldName= e.target.getAttribute("name");
    const fieldValue=e.target.value;
    
    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData)


  }

  const handleEditClick=(event, contact)=>{
    event.preventDefault();
    setEditContactId(contact.id)
   
    const formValues={
      fullName: contact.fullName,
      address: contact.address,
      email:contact.email,
      phoneNumber: contact.phoneNumber
    }
   
    setEditFormData(formValues)

  }

   const handleEditFormSubmit=(event)=>{
   event.preventDefault();

   const editedContact ={
    id: editContactId,
    fullName: editFormData.fullName,
    address: editFormData.address,
    email: editFormData.email,
    phoneNumber: editFormData.phoneNumber
   }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id = editContactId);

    newContacts[index] = editedContact;
    
    setContacts(newContacts)
    setEditContactId(null)
   } 

   const handleCancelEditClick=()=>{
    setEditContactId(null)
   }

   const handleDeleteClick=(contactId)=>{
   const newContacs= [...contacts];
   
   const index = contacts.findIndex((contact)=> contact.id === contactId);

   newContacs.splice(index,1);

   setContacts(newContacs)

   }


  return (
   <div className="app-container">
    <form onSubmit={handleEditFormSubmit}>

   
   <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Adress</th>
       <th>Phone Number</th>
       <th>Email</th>
       <th>Actions</th>
     </tr>


    </thead>
    <tbody>
     
      {contacts.map((contact)=>(
        <>
        {editContactId === contact.id ? (
           <EditableRow handleEditFromChange={handleEditFromChange} editFormData={editFormData} handleCancelEditClick={handleCancelEditClick}/>
        ):(
         <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
        )
      }
        
        
        </>
    
     
      ))}
     
    </tbody>
 

   </table>
 </form>
   <h2> Add a contact</h2>
    <form onSubmit={formSubmit}>
      <input 
      type="text" 
      name="fullName" 
      required="required" 
      placeholder="Enter a name..."
      onChange={handleAddFormChange}
       />
    <input
    type="text"
    name="address"
    required="required"
    placeholder="Enter an adress..."
    onChange={handleAddFormChange}
    
    
    />
    <input
    type="text"
    name="phoneNumber"
    required="required"
    placeholder="Enter a phone number..."
    onChange={handleAddFormChange}
    
    />

<input
    type="email"
    name="email"
    required="required"
    placeholder="Enter an email..."
    onChange={handleAddFormChange}
    
    
    />
 <button type="submit">Add</button>   
      
    </form>
   </div>
  );
}

export default App;
