import {useState} from 'react';
import List from './List';
import Form from './Form';
import { useEffect } from 'react/cjs/react.development';
import "./styles.css"


function Contacts() {
    const [contacts,setContacts]=useState([
        {
            fullname:"Mehmet",
            phone_number:"123123"
        },
        {
            fullname:"Ayse",
            phone_number:"1254"
        },
        {
            fullname:"Ali",
            phone_number:"45698"
        }
    ]);

    useEffect(()=> {
        console.log(contacts);
    },[contacts]);
    
  return <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
      </div>;
}

export default Contacts;
