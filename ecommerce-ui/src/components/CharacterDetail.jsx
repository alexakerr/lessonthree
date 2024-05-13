import React, { useState,  } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import { Form, FloatingLabel, Button, Modal } from 'react-bootstrap';


import NavBar from './NavBar';

function CharacterDetail() {
    
    const [characterData, setCharacterData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(''); 

    const handleClose = () => setShow(false);
    
    

    
    const handleChange = (event) => {
        event.preventDefault();
        let { name, value } = event.target; 
        const newData = { ...characterData}
        for (let [key, val] of Object.entries(newData)) {
            if (key === name) {
                newData[key] = value
            }
        }
        console.log(newData)
        setCharacterData(newData)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        let response = null
        if (id) {
            response = await axios.put(`https://httpbin.org/put?id=${id}`, {
                body: characterData,
              
            })
            console.log(response.data) 
            setMessage('Successfully Updated User!')
        } else {
            response = await axios.post(`https://httpbin.org/post`, {
                body: characterData
            })
            console.log(response.data)
            setMessage('Successfully Created New User!')
        }
        
        if (response.status === 200){
            setShow(true)   
        } else {
            setShow(true)
            setMessage('Error Processing Your Request. Please Try Again')
        }
    }
    
  return (
    <div>
        <NavBar />
        <Form className='p-4 border rounded shadow mx-auto my-4 w-75'onSubmit={handleSubmit}>
            <FloatingLabel
            controlId="floatingInput"
            label="Name"
            >
                <Form.Control type="text" name='name' value={characterData.name} onChange={handleChange} placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Phone" className="my-3">
                <Form.Control type="text" name="phone" value={characterData.phone} onChange={handleChange} placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Email">
                <Form.Control type="email" name="email" value={characterData.email} onChange={handleChange} placeholder="Password" />
            </FloatingLabel>
            <Button type="submit"  className="mt-3" variant="outline-success">Success</Button>
        </Form>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>SUCCESS!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo! {message} </Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      
    </div>
  )
}

export default CharacterDetail