import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

function Create7() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    // Prepare user data to be sent to the server
    const foodData = {
      name,
      description,
      price,
      imgUrl, 
    };

    
    axios.post('https://mernback1-n2ty.onrender.com/profile7/create', foodData)
      .then((result) => {
        console.log(result.data);
        navigate('/profile7');
      })
      .catch((err) => console.error(err));
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);

      fileRef
        .put(selectedFile)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log(downloadURL);
            setImgUrl(downloadURL); // Set the downloaded URL to state
          });
        })
        .catch((error) => {
          console.error('Error uploading the file: ', error);
        });
    } else {
      console.log('No file selected');
    }
  };


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={submit}>
          <h2>Add Food</h2>

          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input
              type='text'
              placeholder='Enter name'
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Description</label>
            <input
              type='text'
              placeholder='Enter Description'
              className='form-control'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Price</label>
            <input
              type='text'
              placeholder='Enter Price'
              className='form-control'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Image</label>
            <input
              type='file'
              placeholder='add image'
              className='form-control'
              onChange={handleFileUpload}
            />
          </div>

          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create7