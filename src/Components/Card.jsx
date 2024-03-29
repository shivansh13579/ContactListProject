import React, { useState } from 'react'

function Card({addContact}) {
    const [contactData,setContactData] = useState({name:"",email:""})
    
    function handleChange(e){
        setContactData({...contactData,[e.target.name]:e.target.value})                            
        
    }
    function handleAdd(){
        if(contactData.name === "" || contactData.email === ""){
            alert("please fill all the details")
            return
        }
        addContact(contactData);
        setContactData({name: "",email: ""})
    }
  return (
    <div className='card'>
      <div className='cardHeader'>Add Contact </div>
      <form action="">
        <div>
            <label htmlFor="">Name:</label><br />
            <input type="text" placeholder='Enter Name' name='name' 
            value={contactData.name}
            onChange={handleChange}   
            />
            <br />
        </div>
        <div>
            <label htmlFor="">Email:</label><br />
            <input type="email" placeholder='Enter Email' name='email' 
            value={contactData.email}
            onChange={handleChange} 
             />
             <br />
        </div>
      </form>
      <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default Card;
