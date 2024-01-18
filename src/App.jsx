
import './App.css';
import Header from './Components/Header.jsx';
import Card from './Components/Card.jsx';
import ContactList from './Components/ContactList.jsx';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';


function App() {
  const localStorageKey = "contact"
  const [Contact,setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey)) || []
  })
  
  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(Contact))
  },[Contact])

  const addContact = (data) => {
        setContact([...Contact, {id:uuid4() ,data}])
        console.log(Contact);
  }

  const removeContact = (id)=>{
     const updatedList = Contact.filter((val)=>{
      return val.id !== id
     })
     setContact(updatedList)
  }

  return (
    <>
    <Header/>
      <Card addContact={addContact}/>
      <ContactList contact={Contact} removeContact={removeContact}/>
    </>
  )
}

export default App
