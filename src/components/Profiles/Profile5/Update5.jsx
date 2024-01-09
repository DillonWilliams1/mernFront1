import React, {useState,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

function Update5() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://mernback1-n2ty.onrender.com/profile5/get/${id}`)
      .then(result => {
        setName(result.data.name);
        setDescription(result.data.description);
        setPrice(result.data.price);
        setImgUrl(result.data.imgUrl)
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://mernback1-n2ty.onrender.com/profile5/update/${id}`, { name, description, price, imgUrl })
      .then(result => {
        console.log(result.data);
        navigate('/profile5');
      })
      .catch(err => console.error(err));
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
        <form onSubmit={handleUpdate}>
          <h2>Update Food</h2>

          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input
              type='text'
              placeholder='Enter food name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Description</label>
            <input
              type='text'
              placeholder='Enter description'
              className='form-control'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Price</label>
            <input
              type='text'
              placeholder='Enter Price'
              className='form-control'
              value={price}
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

          <button className='btn btn-success' type='submit'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update5