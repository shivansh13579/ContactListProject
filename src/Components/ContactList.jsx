import React from 'react'
import { Trash } from 'lucide-react';


function ContactList({contact}) {
  const contactList = contact.map((val)=>{
    return(
      <div>
        <div>{val.name}</div>
        <div>{val.email}</div>
      </div>
    )
  })
  return (
    <>
      <div className='text-red-700'>ContactList</div>
      <div className='flex text-center justify-between w-full'>{contactList} </div>
      <span><Trash/></span>
    </>
  )
}

export default ContactList;
