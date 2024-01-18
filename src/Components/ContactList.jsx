import React from 'react'
import { Trash } from 'lucide-react';


function ContactList(props) {
  const {contact,removeContact} = props;
  const contactList = contact.map((val)=>{
    return(
      <div className='data'>
        <div>{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={()=>removeContact(val.id)}><Trash/></span>
      </div>
    )
  })
  return (
    <>
      <div className='contactlist'>ContactList</div>
      <div> {contactList} </div>
    </>
  )
}

export default ContactList;
