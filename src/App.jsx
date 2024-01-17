
import './App.css'
import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import ContactList from './Components/ContactList.jsx'
import { useState } from 'react'


function App() {
  const [Contact,setContact] = useState([])

  const addContact = (data) => {
        setContact([data])
  }

  return (
    <>
    <Header/>
      <Card addContact={addContact}/>
      <ContactList contact={Contact}/>
    </>
  )
}

export default App
