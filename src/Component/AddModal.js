import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from "primereact/inputtextarea";
        

function AddModal({addMovie}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelSubmit=(e)=>{   
  e.preventDefault();

  const newMovie ={
    title,
    description,
    posterURL,
   
  }
  addMovie(newMovie)
  setTitle('');
  setDescription('')
  setPosterURL ('') }
  return (
    <>
    <form >
      
      
      <InputText placeholder='title' onChange={(e) => setTitle(e.target.value)} />
      <InputTextarea autoResize  placeholder='descreption'  onChange={(e) => setDescription(e.target.value)} rows={5} cols={30} />
      <InputText placeholder='URL' onChange={(e) => setPosterURL(e.target.value)} />

  
      <button onClick={handelSubmit}>submit</button>  
      
      </form>
    </>
  );
}

export default AddModal;